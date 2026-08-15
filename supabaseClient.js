(function () {
  const config = window.LESSONMENTOR_CONFIG || {};
  const hasSupabase = Boolean(config.supabaseUrl && config.supabaseAnonKey && window.supabase);
  const client = hasSupabase
    ? window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey)
    : null;

  function isDemoMode() {
    return config.demoMode !== false || !client;
  }

  async function currentUserId() {
    if (isDemoMode()) return null;
    const { data } = await client.auth.getUser();
    return data?.user?.id || null;
  }

  async function insert(table, payload) {
    if (isDemoMode()) {
      const localKey = `lessonmentor:${table}`;
      const existing = JSON.parse(localStorage.getItem(localKey) || "[]");
      const row = { id: crypto.randomUUID(), created_at: new Date().toISOString(), ...payload };
      existing.unshift(row);
      localStorage.setItem(localKey, JSON.stringify(existing.slice(0, 50)));
      return { data: row, error: null, demo: true };
    }

    const { data, error } = await client.from(table).insert(payload).select().single();
    return { data, error, demo: false };
  }

  async function createLessonSubmission(payload) {
    const teacherId = await currentUserId();
    return insert("lesson_submissions", teacherId ? { ...payload, teacher_id: teacherId } : payload);
  }

  async function createAssessmentLaunch(payload) {
    const teacherId = await currentUserId();
    return insert("assessment_launches", teacherId ? { ...payload, teacher_id: teacherId } : payload);
  }

  async function invokeFunction(name, payload) {
    if (isDemoMode()) {
      return { data: null, error: null, demo: true };
    }

    return client.functions.invoke(name, { body: payload });
  }

  async function signIn(email, password) {
    if (!client || isDemoMode()) return { data: null, error: new Error("Secure login is not configured yet.") };
    return client.auth.signInWithPassword({ email, password });
  }

  async function signOut() {
    if (!client) return { error: null };
    return client.auth.signOut();
  }

  async function getSessionProfile() {
    if (!client || isDemoMode()) return { user: null, profile: null, error: null };
    const { data: userData, error: userError } = await client.auth.getUser();
    const user = userData?.user || null;
    if (userError || !user) return { user: null, profile: null, error: userError };
    const { data: profile, error } = await client.from("user_profiles").select("*").eq("id", user.id).maybeSingle();
    return { user, profile, error };
  }

  async function adminListAccounts() {
    if (!client || isDemoMode()) return { data: [], error: new Error("Supabase is not configured.") };
    return client.rpc("admin_list_accounts");
  }

  async function adminUpdateAccount(payload) {
    if (!client || isDemoMode()) return { data: null, error: new Error("Supabase is not configured.") };
    return client.rpc("admin_update_account", payload);
  }

  async function adminInviteAccount(payload) {
    return invokeFunction("admin-invite-user", payload);
  }

  window.LessonMentorAPI = {
    client,
    isDemoMode,
    signIn,
    signOut,
    getSessionProfile,
    adminListAccounts,
    adminUpdateAccount,
    adminInviteAccount,
    createLessonSubmission,
    createAssessmentLaunch,
    invokeFunction
  };
})();
