# Studio Wedding

Premium, mobile-first multi-tenant wedding invitation platform built with Astro.

## Commands

| Command             | Action                                     |
| :------------------ | :----------------------------------------- |
| `npm install`       | Install dependencies                       |
| `npm run dev`       | Start local dev server at `localhost:4321` |
| `npm run build`     | Build production site to `./dist/`         |
| `npm run preview`   | Preview the production build locally       |
| `npm run astro ...` | Run Astro CLI commands                     |

## Project notes

- `legacy/` is the archived Natasha & Emilio Next.js site (read-only reference).
- See `AGENTS.md` for architecture, content strategy, and delivery phases.

## Wedding content

Each wedding is a typed `Wedding` object. The TypeScript contract lives in
`src/content/types.ts`; the first tenant is
`src/content/weddings/natasha-emilio.ts`.

### Adding a wedding

1. Put image assets under `src/assets/weddings/<slug>/` (hero, OG, map,
   interlude, etc.). Keep public files such as audio under
   `public/weddings/<slug>/`.
2. Create `src/content/weddings/<slug>.ts`, import its image assets, and export
   a `Wedding` that satisfies the type.
3. Register it in `src/content/repository.ts` (add to the `weddings` array).
4. Preview locally with `?wedding=<slug>` (defaults to `dennise-victor`).

Presentation components only consume the `Wedding` interface via the
repository — do not import a specific wedding file from UI code.

## RSVPs

Guest confirmations `POST` to `/api/rsvp` and are stored in **Neon Postgres**.
Wedding copy stays in git; only RSVPs use the database.

Guests submit **name and phone only**. The couple reviews replies at
`/confirmaciones?wedding=<slug>`. That page is password-protected with
`RSVP_VIEW_SECRET` and is not linked from the invitation. It is `noindex`.
Download CSV from there when you need a sheet.

1. Create a free project at [neon.tech](https://neon.tech).
2. Copy `.env.example` to `.env`. Set `DATABASE_URL` to the **pooled**
   connection string and `RSVP_VIEW_SECRET` to a long shared password
   (never prefix either with `PUBLIC_`).
3. In the Neon SQL editor, run [`src/server/migrations/001_rsvps.sql`](src/server/migrations/001_rsvps.sql).
4. `npm run dev`, submit the form, then open
   `/confirmaciones?wedding=dennise-victor` and enter the password.

Without `DATABASE_URL` the form shows an error instead of a fake success.
Without `RSVP_VIEW_SECRET` the list stays closed.

### Required fields

| Field                                      | Purpose                                                                                                                                                                                        |
| :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`                                     | Tenant id (URL query / future subdomain)                                                                                                                                                       |
| `locale`                                   | HTML `lang` (e.g. `es`)                                                                                                                                                                        |
| `couple.primaryName` / `secondaryName`     | Names shown in hero and event details                                                                                                                                                          |
| `seo.title` / `description` / `ogImage`    | Meta + Open Graph                                                                                                                                                                              |
| `theme.colors`                             | Palette CSS tokens (`lavender`, `rosewood`, `beige`, `olive`, `bride`, `ink`, `inkMuted`, `inkStrong`, `surface`)                                                                              |
| `hero`                                     | Full-bleed opener: `image`, `imageAlt`, `eyebrow`, `headline`, optional `logo`                                                                                                                 |
| `quote.lead` / `close`                     | Two-part quote block                                                                                                                                                                           |
| `event.invitationLead` / `invitationClose` | Invitation copy                                                                                                                                                                                |
| `event.venue` / `address`                  | Location labels                                                                                                                                                                                |
| `event.dateLabel`                          | Display date string                                                                                                                                                                            |
| `event.startsAt` / `endsAt`                | ISO datetimes for calendar + structured data                                                                                                                                                   |
| `event.ceremonyLabel` / `receptionLabel`   | Time lines under date                                                                                                                                                                          |
| `indications`                              | Guest notes: `heading`, `children` (`title`, `body`), `guests`, `dressCode` (`description`, optional `examplesUrl` / `colors[]`), `reservedColorMessage`, optional `reservedColors[]` swatches |
| `interlude`                                | Mid-page image: `image`, `imageAlt`, `caption`                                                                                                                                                 |
| `gift`                                     | Gift block: `heading`, `description`, `holders[]`; either single-bank (`bank`, `accountNumber`, `accountType`) or `accounts[]` (+ optional `email`)                                            |
| `rsvp.deadline`                            | RSVP deadline copy                                                                                                                                                                             |
| `credits.text` / `phone`                   | Footer credit line                                                                                                                                                                             |

Image fields use imported Astro assets. They are emitted as responsive AVIF/WebP
variants with a source-image fallback; audio paths remain public URLs.

### Optional fields

| Field                               | Behavior when omitted                                          |
| :---------------------------------- | :------------------------------------------------------------- |
| `event.travel`                      | Hides the travel / lodging block                               |
| `event.travel.note`                 | Heading (and stays, if any) still show; no paragraph           |
| `event.travel.stays`                | No lodging phone list                                          |
| `event.places`                      | Renders ceremony/reception venue details when present          |
| `hero.logo`                         | Shows a tenant monogram above the hero when present            |
| `music`                             | Shows a play/pause control for the supplied looping audio file |
| `indications.dressCode.colors`      | Hides the dress-code palette                                   |
| `indications.dressCode.examplesUrl` | Hides the “examples” link                                      |
| `indications.reservedColors`        | Uses bridal-white swatch labeled “Reservado”                   |
| `gift.accounts` / `gift.email`      | Uses single-bank card (`bank`, `accountNumber`, `accountType`) |

When `travel` is present, `heading` is required. Example:

```ts
travel: {
  heading: 'Cómo llegar y hospedaje',
  note: 'Planea tu llegada con tiempo…', // optional
  stays: [{ name: 'Hotel…', phone: '099…' }], // optional
},
```

## TODOs

Tracked code TODOs (keep this list in sync when adding or resolving `TODO` comments):

- [ ] **Calendar export** (`src/content/calendar.ts`) — improve ICS (UTC/VTIMEZONE dates, DESCRIPTION/URL/GEO, escape special characters)
- [ ] **Add to calendar** (`src/content/calendar.ts`) — “Agregar al calendario” is broken (`data:` ICS download fails on many devices); support Google Calendar / Outlook / Apple plus a reliable `.ics` download
- [ ] **Astro tag formatting** (`.prettierrc.mjs`) — find a multiline tag-content formatter that does not conflict with Prettier.
- [ ] **Tenant monograms** (`src/components/wedding/Hero.astro`) — request or create a logo for weddings that do not provide one.
