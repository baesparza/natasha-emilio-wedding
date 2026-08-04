# Legacy Next.js Wedding Site

This directory preserves the original Natasha & Emilio invitation before the Astro rebuild.

## Stack

- Next.js 14 and React 18
- Tailwind CSS 3
- Firebase Realtime Database for RSVP confirmations
- Firebase Storage-hosted hero video

## Run locally

```bash
cd legacy
npm install
npm run dev
```

The original site runs at `http://localhost:3000`.

## Archived structure

- `src/app/` — original single-page invitation and server action
- `public/` — logo, map, and floral image assets
- `src/app/actions/saveConfirmation.ts` — Firebase RSVP write implementation

This archive is reference-only. The new Astro application will be created at the repository root in the next phase.
