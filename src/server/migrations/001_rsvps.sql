create table if not exists rsvps (
	id uuid primary key default gen_random_uuid(),
	wedding_slug text not null,
	name text not null,
	phone text not null,
	guests integer not null check (guests >= 1 and guests <= 10),
	created_at timestamptz not null default now()
);

create index if not exists rsvps_wedding_slug_created_at_idx
	on rsvps (wedding_slug, created_at desc);
