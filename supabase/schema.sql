-- Tavo landing — signups table
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query → Run)
-- for your project. It is safe to re-run: it uses IF NOT EXISTS / idempotent guards.

create table if not exists public.signups (
  id                    uuid primary key default gen_random_uuid(),
  created_at            timestamptz not null default now(),
  mode                  text not null check (mode in ('waitlist', 'pilot')),
  restaurant_name       text not null,
  city                  text not null,
  email                 text not null,
  agreement_accepted    boolean not null default false,
  agreement_accepted_at timestamptz
);

-- Helpful indexes for querying/exporting clean rows.
create index if not exists signups_created_at_idx on public.signups (created_at desc);
create index if not exists signups_email_idx on public.signups (email);
create index if not exists signups_mode_idx on public.signups (mode);

-- Row Level Security: lock the table down, then allow only anonymous INSERTs
-- from the public site. Reads are NOT granted to anon — only the service role
-- and the dashboard can read the collected data.
alter table public.signups enable row level security;

drop policy if exists "Allow anonymous signups" on public.signups;
create policy "Allow anonymous signups"
  on public.signups
  for insert
  to anon
  with check (true);
