# My Learning Studio website

Redesigned website for My Learning Studio, an award-winning tutoring center in
Riverside, California. Built with Astro as a static site.

This repository is a **preview build** for review. It is published with
`noindex` and its canonical URLs point at the production domain, so it never
competes with the live site in search results.

## Running it locally

```sh
npm install
npm run dev
```

## Editing content without touching code

Everything that changes seasonally lives in `src/data/` as plain JSON:

| File | What it controls |
| --- | --- |
| `site.json` | Phone, email, address, hours, announcement banner, social links, TutorBird widget URLs, enrichment and boot camp pricing |
| `programs.json` | Summer program cards, with a per-program on/off switch |
| `faqs.json` | Academic Boot Camps FAQ entries |
| `testimonials.json` | Review quotes |

Those files are also exposed through a point-and-click editor (Decap CMS) at
`/admin`. To run the editor locally, start `npx decap-server` alongside the dev
server. On the production host the editor needs a git backend configured in
`public/admin/config.yml`.

## Building

The same source builds for the domain root and for a preview subpath:

```sh
npm run build                                   # production, served at /
SITE_BASE=/mls-website/ PUBLIC_PREVIEW=true npm run build   # preview subpath
```

Internal links go through `withBase()` in `src/lib/url.ts` so both cases work.
