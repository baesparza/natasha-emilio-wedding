/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly DATABASE_URL?: string;
	readonly RSVP_VIEW_SECRET?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
