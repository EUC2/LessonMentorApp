(function () {
  const portalPaths = {
    teacher: "/teacher/",
    school_admin: "/school/",
    owner_admin: "/admin/"
  };

  function normalizeRoles(profile, user) {
    const profileRoles = Array.isArray(profile?.roles) ? profile.roles : [];
    const metadataRoles = Array.isArray(user?.app_metadata?.roles) ? user.app_metadata.roles : [];
    return [...new Set([...profileRoles, ...metadataRoles])];
  }

  function canAccess(roles, required) {
    if (roles.includes("owner_admin")) return true;
    return required.some(role => roles.includes(role));
  }

  function status(message, isError = false) {
    const target = document.querySelector("[data-auth-status]");
    if (!target) return;
    target.textContent = message;
    target.classList.toggle("auth-error", isError);
  }

  async function loadSession() {
    const api = window.LessonMentorAPI;
    if (!api || api.isDemoMode()) return { user: null, profile: null, roles: [], configured: false };
    const result = await api.getSessionProfile();
    return { ...result, roles: normalizeRoles(result.profile, result.user), configured: true };
  }

  async function protectPage() {
    const required = (document.body.dataset.requireRoles || "").split(",").map(role => role.trim()).filter(Boolean);
    if (!required.length) return;
    document.body.dataset.authState = "checking";
    const session = await loadSession();
    if (!session.configured || !session.user) {
      const loginPath = required.includes("owner_admin") ? portalPaths.owner_admin : required.includes("school_admin") && !required.includes("teacher") ? portalPaths.school_admin : portalPaths.teacher;
      window.location.replace(loginPath);
      return;
    }
    if (!canAccess(session.roles, required)) {
      const destination = session.roles.includes("school_admin") ? portalPaths.school_admin : session.roles.includes("teacher") ? portalPaths.teacher : "/";
      window.location.replace(destination);
      return;
    }
    window.LessonMentorSession = session;
    document.body.dataset.authState = "authenticated";
    document.dispatchEvent(new CustomEvent("lessonmentor:authenticated", { detail: session }));
  }

  async function handleLogin(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email?.value.trim();
    const password = form.elements.password?.value;
    const required = (form.dataset.requiredRoles || "").split(",").filter(Boolean);
    const api = window.LessonMentorAPI;
    if (!api || api.isDemoMode()) {
      status("Secure login needs the Supabase URL and public anon key configured before anyone can enter.", true);
      return;
    }
    status("Signing in...");
    const { error } = await api.signIn(email, password);
    if (error) {
      status(error.message || "Email or password was not accepted.", true);
      return;
    }
    const session = await loadSession();
    if (!canAccess(session.roles, required)) {
      await api.signOut();
      status("This account does not have access to this portal.", true);
      return;
    }
    window.location.assign(form.dataset.redirect || "/");
  }

  async function handleLogout(event) {
    event.preventDefault();
    await window.LessonMentorAPI?.signOut();
    window.location.replace("/");
  }

  document.querySelectorAll("[data-auth-form]").forEach(form => form.addEventListener("submit", handleLogin));
  document.querySelectorAll("[data-auth-logout]").forEach(button => button.addEventListener("click", handleLogout));
  protectPage();
})();
