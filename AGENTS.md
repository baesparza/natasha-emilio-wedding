# Studio Wedding Project Guide

## Objective

Build **Studio Wedding**: a premium, mobile-first multi-tenant wedding
platform. The archived Natasha & Emilio invitation is the first wedding
tenant and visual reference. Each wedding will eventually have its own
subdomain (for example, `natasha-emilio.studiowedding.com`) while sharing
one Astro codebase.

The visual direction is editorial wedding photography: full-bleed imagery,
strong typography, intentional whitespace, refined botanical accents, and
smooth but restrained motion.

## Target Architecture

- **Frontend:** Astro with server rendering on Vercel.
- **Styling:** Tailwind with design tokens exposed as CSS variables.
- **Motion:** GSAP + ScrollTrigger and Lenis. Respect
  `prefers-reduced-motion`.
- **Tenancy:** Resolve a wedding from the request host; support a local
  `?wedding=<slug>` fallback for development.
- **Hosting:** Vercel with an apex domain and a wildcard subdomain.
- **Performance:** Server-rendered HTML, CDN caching, responsive images, and
  client JavaScript only for motion and interactive UI.

## Content and CMS Strategy

Build the first site with **local typed content and local image paths**.
All presentation components must consume a stable `Wedding` content interface,
not import a particular data source directly.

Sanity is intentionally deferred until the final integration phase. It will
become the source of truth for wedding content, image assets, and RSVP records.
When Sanity is added, replace only the content/repository adapters; do not
rewrite the page components or their public data contracts.

Keep content tenant-scoped: a wedding has a slug, names, branding, sections,
media, SEO data, and RSVP configuration. RSVP records must always reference
their wedding.

## Design and Implementation Rules

- Start mobile-first; enhance at larger breakpoints.
- Make each wedding distinct through theme, palette, font pairing, hero media,
  and configurable sections—not separate codebases.
- Prefer a few high-impact animations over continuous decoration.
- Use real couple and venue photography when supplied; do not permanently use
  floral assets as gallery replacements.
- Keep the old CSS scroll-timeline animation approach out of the new app;
  use GSAP for scroll-based animation.
- Keep GSAP, Lenis, loader behavior, sticky RSVP UI, and form logic isolated
  in client-side islands/scripts.
- Use `src/scripts/dom.ts` as the single DOM-query abstraction in client-side
  code: `$<T>(selector, scope?)` for one element and `$$<T>(selector, scope?)`
  for multiple elements. Do not call `querySelector`, `querySelectorAll`, or
  `getElementById` directly outside that helper.
- Do not expose write tokens or credentials to browser code.
- Prefer sparse comments that help scan markup (`<!-- region -->` in Astro
  HTML, not `{/* */}`) and note non-obvious intent. Do not label obvious
  props, imports, or names that already match the next code. Apply wherever
  relevant — not only in long files.

## TODO tracking

Whenever you add, change, or remove a `TODO` / `FIXME` comment in project
code (anything outside `legacy/`), update the **TODOs** section in
`README.md` in the same change:

- Add a checkbox item with a short label, the file path, and what remains.
- Remove or check off the README item when the code TODO is resolved.
- Do not invent README TODOs that are not backed by a code comment.

## Legacy Application

`legacy/` is the preserved Next.js implementation of the Natasha & Emilio
invitation. Treat it as a read-only reference for copy, existing assets,
Firebase behavior, and visual history. Do not modify or delete it unless the
user explicitly asks.

## Delivery Workflow

Work in reviewable phases and stop after each phase for approval:

1. Legacy archive
2. Astro foundation with local typed content
3. Local multi-tenant routing
4. Static mobile-first wedding UI
5. GSAP and Lenis motion
6. RSVP UI and persistence boundary
7. Theme variations and second-wedding smoke test
8. Sanity integration, then Vercel deployment

Do not introduce Sanity, a new database, production credentials, or DNS changes
before the final integration/deployment phase unless the user explicitly
changes this order.
