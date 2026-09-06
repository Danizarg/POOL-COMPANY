# Marbella Pool Service — Website Redesign

A complete redesign of [marbellapoolservice.com](https://marbellapoolservice.com) built as a
commercial proposal: premium, water-native, conversion-focused.

**Design concept — "Still Water, Engineered."** The interface behaves like a
pool: a live WebGL water surface in the hero (refraction + pointer ripples over
genuine photography), a scroll descent from sunlit limestone to abyssal depth
through the services index, caustic light in the engineering sections, and a
recurring waterline motif in masks, buttons and dividers.

## Stack

- **Next.js 15** (App Router) + TypeScript + **Tailwind CSS v4**
- **motion** (Framer Motion) for scroll choreography; custom raw-WebGL shaders
  for the water surfaces (no three.js — ~6 KB of shader code total)
- Fonts: **Archivo** (architectural grotesk) + **Fraunces** italic (editorial
  accents), self-hosted via `next/font`

## Development

```bash
npm install
npm run dev        # http://localhost:3600
npm run build      # production build
npm run lint
npm run typecheck
```

## Where things live

| Path | Purpose |
| --- | --- |
| `lib/site.ts` | Canonical business data: contact, services, service areas |
| `lib/service-content.ts` | Full service-page content (translated from the live site's verbatim copy) |
| `docs/SITE_INVENTORY.md` | Complete crawl of the current live site — the factual source for every claim |
| `docs/AQUADRA_PRINCIPLES.md` | Design-reference research notes |
| `components/water/` | WaterCanvas (refraction hero), CausticField, WaterReveal |
| `components/motion/` | Reveal/SurfaceLines/Stagger primitives (water easing) |
| `app/api/contact/route.ts` | Forwards form submissions to the business's existing Contact Form 7 endpoint |

## Content integrity

Every service description, FAQ, method step, review and figure comes from the
business's own published website (see `docs/SITE_INVENTORY.md`). Photography is
the company's own media library — real client projects, real shop, real work.
No fabricated awards, statistics or testimonials.

## SEO

- Old WordPress slugs (including the Spanish slugs that currently 404 across
  the live site) 301-redirect to the new routes — see `next.config.ts`
- LocalBusiness / Service / FAQPage / BreadcrumbList structured data
- `sitemap.xml`, `robots.txt`, canonical URLs, per-page OpenGraph

## Deployment

Deploy via GitHub → Vercel using the **project's own Vercel account** (do not
deploy from whichever account happens to be logged in locally). The site is
fully static apart from `/api/contact`. The blog and WooCommerce shop remain on
the existing WordPress installation; shop links point there.
