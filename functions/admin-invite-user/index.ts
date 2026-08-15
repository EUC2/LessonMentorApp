import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const url = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const authorization = request.headers.get("Authorization") || "";
    const userClient = createClient(url, anonKey, { global: { headers: { Authorization: authorization } } });
    const { data: userData, error: userError } = await userClient.auth.getUser();
    if (userError || !userData.user) throw new Error("Authentication required");
    const adminClient = createClient(url, serviceKey);
    const { data: owner } = await adminClient.from("user_profiles").select("roles,account_status").eq("id", userData.user.id).single();
    if (!owner?.roles?.includes("owner_admin") || owner.account_status !== "active") throw new Error("Owner administrator access required");
    const { email, displayName, roles, organizationName } = await request.json();
    const allowedRoles = ["teacher", "school_admin", "owner_admin"];
    if (!email || !displayName || !Array.isArray(roles) || !roles.length || roles.some((role: string) => !allowedRoles.includes(role))) {
      throw new Error("A valid email, display name, and role are required");
    }
    const { data, error } = await adminClient.auth.admin.inviteUserByEmail(email, { data: { display_name: displayName, roles } });
    if (error) throw error;
    let organizationId = null;
    if (organizationName) {
      const { data: organization, error: organizationError } = await adminClient.from("organizations").upsert({ name: organizationName }, { onConflict: "name" }).select("id").single();
      if (organizationError) throw organizationError;
      organizationId = organization.id;
    }
    await adminClient.from("user_profiles").upsert({ id: data.user.id, email, display_name: displayName, roles, organization_id: organizationId });
    await adminClient.from("admin_audit_log").insert({ admin_user_id: userData.user.id, target_user_id: data.user.id, action: "account_invited", details: { roles } });
    return new Response(JSON.stringify({ userId: data.user.id }), { headers: { ...cors, "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });
  }
});
