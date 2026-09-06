# Design & implementation notes

Concise state for future work. Business facts: see `SITE_INVENTORY.md`.

## Concept

**"Still Water, Engineered."** Water is the interaction language, handled
architecturally: a drifting waterline motif (hero mask, buttons, dividers,
mobile menu crest), a scroll narrative that descends from sunlit limestone to
abyssal depth and resurfaces at the closing CTA, and technical-drawing
schematics for the engineering arguments.

## System

- **Palette** (`app/globals.css` `@theme`): ivory/limestone/shell (warm light),
  abyss/deep/petrol (depth), mineral/aqua (water accents), sand, clay (errors).
  Deliberately not pool-company cyan+white.
- **Type**: Archivo (display + UI, tight tracking) and Fraunces italic
  (editorial accents). Font tokens live in `@theme inline` — next/font puts
  its variables on `<body>`, a plain `@theme` block resolves them at `:root`
  to nothing (this bug once shipped the whole site in Segoe UI; don't regress).
- **Motion**: EASE_WATER `cubic-bezier(0.22,1,0.36,1)`. Above-the-fold content
  uses CSS entrance animations (`components/motion/Entrance.tsx`) so heroes are
  visible pre-hydration; framer-motion (`components/motion/Reveal.tsx`) is for
  below the fold only.
- **Water tech**: `WaterCanvas` = raw-WebGL refraction + pointer ripples over a
  photo (opaque context; sin-free hash for software-GL safety; static <img>
  fallback; pauses off-screen; reduced-motion → static image).
  `CausticField` = pure CSS light (a WebGL version could white-out sections on
  some software-GL compositors — keep decorative layers unable to fail).
- **Signature moments**: hero waterline (live surface + drifting liquid mask),
  Depth Index services explorer (color descent + depth gauge), circulation-loop
  schematic (Engineering), water-fill reveal (Renovation), leak cutaway
  (leak-detection page).

## Decisions & constraints

- English-only, structured for future ES localisation (all copy in
  `lib/site.ts` / `lib/service-content.ts`).
- Old WP slugs (incl. broken Spanish 404s) 301 in `next.config.ts`; blog and
  WooCommerce shop stay on WordPress, shop links point there.
- Contact form posts server-side to the live CF7 form (ID 377) —
  `/api/contact`. **Do not test-submit for real: it emails the business.**
  Validation paths are tested; an end-to-end send is intentionally unverified.
- About-page figures (+20 years, +2,500 pools, +3,500 visits/yr) are the
  values configured in the live site's own (broken, "+0"-rendering) Elementor
  counters — the business's published claims, used without odometer theatre.
- No before/after renovation slider: no verified before/after pairs exist in
  the media library. Add one if the client supplies genuine pairs.
- For client demos run the production build (`npm run build && npm start`),
  not the dev server.
