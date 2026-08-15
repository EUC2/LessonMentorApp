-- Lesson Mentor authentication, authorization, and owner account management.
-- Safe to rerun. Never place a service-role key in frontend code.

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  organization_type text not null default 'school',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  roles text[] not null default array['teacher']::text[],
  organization_id uuid references public.organizations(id) on delete set null,
  teaching_state text,
  account_status text not null default 'active',
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint valid_lessonmentor_roles check (roles <@ array['teacher','school_admin','owner_admin']::text[]),
  constraint valid_account_status check (account_status in ('active','trial','paused','past_due','closed'))
);

create table if not exists public.account_subscriptions (
  user_id uuid primary key references public.user_profiles(id) on delete cascade,
  plan_name text,
  payment_status text not null default 'trial',
  renewal_date date,
  amount_cents integer not null default 0 check (amount_cents >= 0),
  updated_at timestamptz not null default now(),
  constraint valid_payment_status check (payment_status in ('paid','trial','past_due','comped','canceled'))
);

create table if not exists public.account_flags (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.user_profiles(id) on delete cascade,
  flag_type text not null,
  note text,
  status text not null default 'open' check (status in ('open','resolved')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create table if not exists public.admin_audit_log (
  id bigint generated always as identity primary key,
  admin_user_id uuid not null references auth.users(id),
  target_user_id uuid references auth.users(id),
  action text not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.is_owner_admin(check_user uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_profiles
    where id = check_user and 'owner_admin' = any(roles) and account_status = 'active'
  );
$$;

create or replace function public.handle_lessonmentor_user_created()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_profiles (id, email, display_name, roles)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1)),
    array['teacher']::text[]
  )
  on conflict (id) do update set email = excluded.email, updated_at = now();
  insert into public.account_subscriptions (user_id) values (new.id) on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_lessonmentor on auth.users;
create trigger on_auth_user_created_lessonmentor
  after insert on auth.users
  for each row execute function public.handle_lessonmentor_user_created();

insert into public.user_profiles (id, email, display_name)
select id, email, coalesce(raw_user_meta_data ->> 'display_name', split_part(email, '@', 1))
from auth.users
on conflict (id) do update set email = excluded.email;

insert into public.account_subscriptions (user_id)
select id from public.user_profiles
on conflict (user_id) do nothing;

alter table public.organizations enable row level security;
alter table public.user_profiles enable row level security;
alter table public.account_subscriptions enable row level security;
alter table public.account_flags enable row level security;
alter table public.admin_audit_log enable row level security;

drop policy if exists "profiles own or owner read" on public.user_profiles;
create policy "profiles own or owner read" on public.user_profiles for select
using (id = auth.uid() or public.is_owner_admin());
drop policy if exists "profiles own update" on public.user_profiles;
revoke update on public.user_profiles from authenticated;
drop policy if exists "owner manages organizations" on public.organizations;
create policy "owner manages organizations" on public.organizations for all
using (public.is_owner_admin()) with check (public.is_owner_admin());
drop policy if exists "subscriptions own or owner read" on public.account_subscriptions;
create policy "subscriptions own or owner read" on public.account_subscriptions for select
using (user_id = auth.uid() or public.is_owner_admin());
drop policy if exists "owner manages subscriptions" on public.account_subscriptions;
create policy "owner manages subscriptions" on public.account_subscriptions for all
using (public.is_owner_admin()) with check (public.is_owner_admin());
drop policy if exists "owner manages flags" on public.account_flags;
create policy "owner manages flags" on public.account_flags for all
using (public.is_owner_admin()) with check (public.is_owner_admin());
drop policy if exists "owner reads audit" on public.admin_audit_log;
create policy "owner reads audit" on public.admin_audit_log for select
using (public.is_owner_admin());

create or replace function public.admin_list_accounts()
returns table (
  id uuid, email text, display_name text, roles text[], organization_name text,
  teaching_state text, account_status text, admin_notes text, plan_name text,
  payment_status text, renewal_date date, amount_cents integer, open_flags bigint,
  created_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_owner_admin() then raise exception 'Owner administrator access required'; end if;
  return query
  select p.id, p.email, p.display_name, p.roles, o.name, p.teaching_state,
    p.account_status, p.admin_notes, s.plan_name, s.payment_status,
    s.renewal_date, s.amount_cents,
    (select count(*) from public.account_flags f where f.user_id = p.id and f.status = 'open'),
    p.created_at
  from public.user_profiles p
  left join public.organizations o on o.id = p.organization_id
  left join public.account_subscriptions s on s.user_id = p.id
  order by p.created_at desc;
end;
$$;

create or replace function public.admin_update_account(
  p_user_id uuid,
  p_display_name text,
  p_organization_name text,
  p_teaching_state text,
  p_roles text[],
  p_account_status text,
  p_plan_name text,
  p_payment_status text,
  p_renewal_date date,
  p_amount_cents integer,
  p_admin_notes text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  target_organization_id uuid;
begin
  if not public.is_owner_admin() then raise exception 'Owner administrator access required'; end if;
  if not (p_roles <@ array['teacher','school_admin','owner_admin']::text[]) then raise exception 'Invalid role'; end if;
  if p_organization_name is not null then
    insert into public.organizations (name) values (p_organization_name)
    on conflict (name) do update set updated_at = now()
    returning id into target_organization_id;
  end if;
  update public.user_profiles set
    display_name = p_display_name,
    organization_id = target_organization_id,
    teaching_state = nullif(upper(p_teaching_state), ''),
    roles = p_roles,
    account_status = p_account_status,
    admin_notes = p_admin_notes,
    updated_at = now()
  where id = p_user_id;
  insert into public.account_subscriptions (user_id, plan_name, payment_status, renewal_date, amount_cents)
  values (p_user_id, p_plan_name, p_payment_status, p_renewal_date, greatest(0, p_amount_cents))
  on conflict (user_id) do update set plan_name = excluded.plan_name,
    payment_status = excluded.payment_status, renewal_date = excluded.renewal_date,
    amount_cents = excluded.amount_cents, updated_at = now();
  insert into public.admin_audit_log (admin_user_id, target_user_id, action, details)
  values (auth.uid(), p_user_id, 'account_updated', jsonb_build_object('roles', p_roles, 'status', p_account_status, 'plan', p_plan_name));
end;
$$;

grant execute on function public.admin_list_accounts() to authenticated;
grant execute on function public.admin_update_account(uuid,text,text,text,text[],text,text,text,date,integer,text) to authenticated;
grant select on public.user_profiles to authenticated;
grant select on public.account_subscriptions to authenticated;

-- After this migration, promote the existing owner account once in SQL Editor:
-- update public.user_profiles set roles = array['owner_admin'] where id = '<OWNER_AUTH_USER_UUID>';
