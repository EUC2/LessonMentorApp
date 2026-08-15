-- Preserve the exact class inputs used for every generated lesson package.
-- Run this migration before deploying class-specific generation.
alter table if exists public.lesson_submissions
  add column if not exists generation_group_id text,
  add column if not exists target_class_id text,
  add column if not exists class_profile_snapshot jsonb not null default '{}'::jsonb,
  add column if not exists learning_style_plan jsonb not null default '{}'::jsonb,
  add column if not exists matched_strategies jsonb not null default '[]'::jsonb;

create index if not exists lesson_submissions_generation_group_idx
  on public.lesson_submissions (generation_group_id);

create index if not exists lesson_submissions_target_class_idx
  on public.lesson_submissions (target_class_id);
