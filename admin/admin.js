(function () {
  let accounts = [];
  let activeFilter = "all";

  const byId = id => document.getElementById(id);
  const rolesOf = account => Array.isArray(account.roles) ? account.roles : [];
  const money = cents => cents == null ? "-" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);

  function setStatus(id, message, error = false) {
    const target = byId(id);
    if (!target) return;
    target.textContent = message;
    target.classList.toggle("auth-error", error);
  }

  function renderStats() {
    byId("stat-accounts").textContent = accounts.length;
    byId("stat-teachers").textContent = accounts.filter(account => rolesOf(account).includes("teacher")).length;
    byId("stat-schools").textContent = accounts.filter(account => rolesOf(account).includes("school_admin")).length;
    byId("stat-flags").textContent = accounts.filter(account => account.open_flags > 0 || ["past_due", "paused"].includes(account.account_status)).length;
  }

  function filteredAccounts() {
    const query = byId("admin-account-search").value.trim().toLowerCase();
    return accounts.filter(account => {
      const matchesFilter = activeFilter === "all"
        || rolesOf(account).includes(activeFilter)
        || activeFilter === "attention" && (account.open_flags > 0 || ["past_due", "paused"].includes(account.account_status));
      const haystack = [account.display_name, account.email, account.organization_name, account.plan_name].join(" ").toLowerCase();
      return matchesFilter && (!query || haystack.includes(query));
    });
  }

  function renderAccounts() {
    const rows = filteredAccounts();
    byId("admin-account-rows").innerHTML = rows.length ? rows.map(account => `
      <tr>
        <td><strong>${escapeHtml(account.display_name || "Unnamed Account")}</strong><small>${escapeHtml(account.email || "")}</small></td>
        <td>${escapeHtml(account.organization_name || "Independent")}</td>
        <td>${rolesOf(account).map(role => `<span class="small-pill">${escapeHtml(role.replace("_", " "))}</span>`).join(" ")}</td>
        <td>${escapeHtml(account.plan_name || "Not Assigned")}<small>${money(account.amount_cents)}</small></td>
        <td><span class="account-status ${escapeHtml(account.account_status || "active")}">${escapeHtml((account.account_status || "active").replace("_", " "))}</span></td>
        <td>${escapeHtml(account.renewal_date || "-")}</td>
        <td><button class="secondary-button" data-open-account="${account.id}" type="button">View 360</button></td>
      </tr>`).join("") : `<tr><td colspan="7" class="owner-empty">No accounts match this view.</td></tr>`;
    document.querySelectorAll("[data-open-account]").forEach(button => button.addEventListener("click", () => openAccount(button.dataset.openAccount)));
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  }

  async function loadAccounts() {
    setStatus("admin-data-status", "Loading secure account data...");
    const { data, error } = await window.LessonMentorAPI.adminListAccounts();
    if (error) {
      setStatus("admin-data-status", error.message || "Account data could not be loaded.", true);
      return;
    }
    accounts = data || [];
    setStatus("admin-data-status", `${accounts.length} account${accounts.length === 1 ? "" : "s"} loaded.`);
    renderStats();
    renderAccounts();
  }

  function openAccount(id) {
    const account = accounts.find(item => item.id === id);
    if (!account) return;
    byId("account360-id").value = account.id;
    byId("account360-title").textContent = account.display_name || account.email;
    byId("account360-email").value = account.email || "";
    byId("account360-name").value = account.display_name || "";
    byId("account360-organization").value = account.organization_name || "";
    byId("account360-state").value = account.teaching_state || "";
    byId("account360-roles").value = rolesOf(account).join(", ");
    byId("account360-status").value = account.account_status || "active";
    byId("account360-plan").value = account.plan_name || "";
    byId("account360-payment").value = account.payment_status || "paid";
    byId("account360-renewal").value = account.renewal_date || "";
    byId("account360-amount").value = account.amount_cents == null ? "" : account.amount_cents / 100;
    byId("account360-notes").value = account.admin_notes || "";
    setStatus("account360-status-message", "");
    byId("account360-modal").showModal();
  }

  async function saveAccount(event) {
    event.preventDefault();
    const roles = byId("account360-roles").value.split(",").map(role => role.trim()).filter(Boolean);
    setStatus("account360-status-message", "Saving account...");
    const { error } = await window.LessonMentorAPI.adminUpdateAccount({
      p_user_id: byId("account360-id").value,
      p_display_name: byId("account360-name").value.trim(),
      p_organization_name: byId("account360-organization").value.trim() || null,
      p_teaching_state: byId("account360-state").value.trim().toUpperCase() || null,
      p_roles: roles,
      p_account_status: byId("account360-status").value,
      p_plan_name: byId("account360-plan").value.trim() || null,
      p_payment_status: byId("account360-payment").value,
      p_renewal_date: byId("account360-renewal").value || null,
      p_amount_cents: Math.round(Number(byId("account360-amount").value || 0) * 100),
      p_admin_notes: byId("account360-notes").value.trim() || null
    });
    if (error) {
      setStatus("account360-status-message", error.message || "Save failed.", true);
      return;
    }
    byId("account360-modal").close();
    await loadAccounts();
  }

  async function inviteAccount(event) {
    event.preventDefault();
    setStatus("invite-status", "Sending secure invitation...");
    const { error } = await window.LessonMentorAPI.adminInviteAccount({
      email: byId("invite-email").value.trim(),
      displayName: byId("invite-name").value.trim(),
      roles: [byId("invite-role").value],
      organizationName: byId("invite-organization").value.trim() || null
    });
    if (error) {
      setStatus("invite-status", error.message || "Invitation failed.", true);
      return;
    }
    byId("invite-account-modal").close();
    event.currentTarget.reset();
    await loadAccounts();
  }

  async function initialize() {
    const api = window.LessonMentorAPI;
    if (!api || api.isDemoMode()) {
      setStatus("admin-data-status", "Secure login requires Supabase configuration.", true);
      return;
    }
    const session = await api.getSessionProfile();
    const roles = Array.isArray(session.profile?.roles) ? session.profile.roles : [];
    if (!session.user || !roles.includes("owner_admin")) return;
    byId("admin-login-view").hidden = true;
    byId("admin-dashboard").hidden = false;
    await loadAccounts();
  }

  byId("admin-account-search").addEventListener("input", renderAccounts);
  byId("admin-filter-tabs").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(item => item.classList.toggle("active", item === button));
    renderAccounts();
  });
  byId("admin-add-account").addEventListener("click", () => byId("invite-account-modal").showModal());
  byId("account360-close").addEventListener("click", () => byId("account360-modal").close());
  byId("account360-cancel").addEventListener("click", () => byId("account360-modal").close());
  byId("invite-close").addEventListener("click", () => byId("invite-account-modal").close());
  byId("invite-cancel").addEventListener("click", () => byId("invite-account-modal").close());
  byId("account360-form").addEventListener("submit", saveAccount);
  byId("invite-account-form").addEventListener("submit", inviteAccount);
  initialize();
})();
