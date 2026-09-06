# AQUADRA.CH — Design Language Study
### Creative reference for the POOL-COMPANY redesign

Researched 2026-09-07 from live site (https://aquadra.ch/en-us, /about, /services, /services/swimming-pools, /blog, /contact).
Method: live browser session — screenshots, accessibility-tree reads, computed-style and stylesheet extraction, layout geometry dumps at 1280x720. **Principles extracted, no assets downloaded.** Credits: site built by say.social; Next.js + Tailwind + GSAP + Lenis + WebGL canvas.

---

## 0. The one-line read

A plumbing company that presents itself like a fashion house: one aggressive brand color pair (near-black forest green x acid lime), one display typeface at huge sizes and *regular* weight, no conventional footer, no generic sections — everything is staged as a slow, masked, choreographed reveal under the concept **"Frame the Flow"** (the whole UI literally frames things: bordered loader box, 10px-inset menu panel, framed intro video).

---

## 1. Typography

**Two typefaces, strict roles:**
- **Borna** (self-hosted woff2, weights 400 + 600) — the display voice. A soft, slightly quirky geometric grotesque: rounded terminals, warm and characterful, not a neo-grotesque default. Used for every big statement, menu links, slide slogans, card titles.
- **Helvetica Now** — the functional voice. Body copy, labels, buttons, forms.

**Observed scale (CSS classes, desktop values):**
| token | size | notes |
|---|---|---|
| `text--xl` | 35 → 42 → 60 → **80px** (at 1024+) | heroes; line-height 1.25 |
| `text--lg` | 40 → **60px** | section titles ("Frame the flow.") |
| `text--2md` | **40px**, letter-spacing -1px | sub-features, card titles |
| `text--md` | **16 → 20px** (at 1536+) | body copy |
| `text--sm` | **12px**, uppercase | kickers/labels ("01. ABOUT", "24-HOUR ASSISTANCE") |
| `info-title` | **9px**, uppercase | micro-labels in menu/footer blocks |

**Key principles:**
- **Everything display-sized is weight 400.** No bold headlines anywhere. Size does the shouting; weight stays calm. This is the single biggest "expensive" signal in the type system.
- **Extreme scale jump:** 80px display against 12px uppercase labels — a ~7:1 ratio with almost nothing in between. The mid-sizes (40/60) are reserved for secondary statements.
- **Sentence case for emotion, uppercase for function.** Headlines read like spoken sentences with real punctuation ("Experience, expertise and innovation at your service to create the perfect climate."). Tiny uppercase is reserved for wayfinding: numbered kickers, nav, buttons.
- **Numbered everything:** "01. About / 02. Services / 03. Blog / 04. Contact", services "01–05", menu counter chips ".04" in small light-gray pills — an editorial index system that runs through the whole site.
- **Multicolor phrases:** inside one headline, word groups switch color (`text-white` #E7E7E7 / lime #95EB6C / `text-gray` #A8A8A8): "The key *(white)* of our *(lime)* success *(gray)*". On the About hero the color of words shifts with scroll progress (cream → lime), like liquid filling the sentence.
- Type is composed *against* images, not on them: big statements sit on flat color panels; photos get their own zones. (Homepage slides are the exception: short slogans bottom-left over WebGL imagery.)

## 2. Color palette

Exact tokens (Tailwind config, extracted from CSS):
| role | value | usage |
|---|---|---|
| `green-dark` | **#0E1C04** | page background (near-black green), dark text on lime |
| `green-accent` | **#163300** | panel/section background, form fields, body bg — the "brand forest" |
| `green` (lime) | **#95EB6C** | THE accent: headlines, body copy on dark, buttons, cursor, menu panel |
| `white` | **#E7E7E7** | off-white text + the blog's entire light theme background |
| `gray` | **#A8A8A8** | tertiary text, progress line, gray transition veil |
| `orange` | **#FF850D** | third ceremonial color: one of the three transition veils, lang-switcher variant. Never a UI accent on the pages themselves |

**Principles:**
- **Two greens, not one.** #0E1C04 (page) vs #163300 (panels/sections) — a nearly subliminal one-step tonal difference that gives "sections" without borders or shadows. Everything reads as one deep green world with slightly lighter rooms in it.
- **Lime is used at full commitment:** it is the *body text color* on dark pages, not just a highlight. Entire paragraphs are #95EB6C on #163300.
- **Dark/light rhythm happens per PAGE, not per section:** home/about/services/contact are the dark green world; the Blog ("The Journal") flips to an entirely light #E7E7E7 theme with dark-green header (`header--black` variant swaps every header element's fill). Within a page, rhythm comes from the two greens + full-bleed photos.
- No gradients, no shadows-as-decoration, no glassmorphism. Flat ink on flat ground.

## 3. Layout / composition

- **Container system:** base container padding 20px (28px sides ≥768) — content runs close to the edges; then a `--full-padding` variant that scales 40 → 64 → 96 → **128px** at 1280+. So: either near-full-bleed or deep-inset, nothing in between.
- **Narrow text columns on a wide canvas:** body copy lives in ~384px-wide columns (30% of 1280) while the canvas around it stays empty or holds one image. Reading measure stays ~45–55 chars.
- **Alternating asymmetry:** About page — section 1: text column left (x=128), portrait image anchored right and *bleeding off the right edge* (extends past viewport). Section 2 inverts it: 60%-width heading block right (x=768), portrait "team jacket" photo left. Section 3: heading right over a left-anchored 75%-width image. The mirror-flip per section IS the rhythm.
- **Whitespace as luxury:** repeated ~350–400px vertical gaps between a section heading and its paragraph (heading top-aligned, paragraph `mt-auto` bottom-aligned in a tall flex column). Full empty viewport-heights inside sections before content enters.
- **Images are sized in three deliberate modes:** (a) full-bleed 100vw x 100vh interstitials, oversized ~5% beyond the viewport on all sides for parallax pan; (b) hard-cropped portraits (e.g. 384x480, 218x218 square list thumbnails) placed as objects on the panel; (c) a giant 1616x1616 square bleeding off-canvas on the service page (left: -168px). All crops are **sharp-cornered rectangles** — the roundedness lives in the UI chrome (buttons/pills), not the photography.
- **Section stacking:** on scroll, the next panel slides up *over* the previous one (curtain overlap), each section a full-width colored panel.
- **The homepage is not a page:** it's a full-viewport 4-slide presentation (100svh, no scroll body) — slogans bottom-left, controls bottom (prev/next, ".01–.04" counter, a 50px hairline "dolly" progress line with a 16px dot), language switcher bottom-right, "Discover" button as the only CTA.
- **No footer anywhere.** Pages end with a full-screen "next page" teaser (kicker "02. SERVICES" + giant lime slogan "Choose excellence in plumbing" + Discover button) chaining pages into a numbered loop. Contact/address/legal/social live inside the fullscreen menu overlay instead.

## 4. Motion

Stack observed: **Lenis smooth scroll** + GSAP-style splitting + a fixed **WebGL canvas** (`.global-canvas`, z-0) that renders imagery effects, + frame-sequence masks.

- **Intro loader:** dark #163300 screen; the logo asterisk draws itself in a 4.5s video (`aquadra-intro.mp4`, mix-blend lighten) inside a **200x200 bordered box** (border in lime, brightness 90%) — the "frame" motif from second zero. Then veils lift.
- **Veil transition system (signature):** three stacked full-screen veils — gray #A8A8A8 (z0), orange #FF850D (z10), lime/forest (z20) — sweep in sequence on load and page transitions, each with an **SVG chevron-pointed edge** (mask flipped for top/bottom): the wipe edge is the logo's Λ angle, not a straight line. Page transitions show the bright lime veil with the dark logo centered.
- **Text reveals:** every heading and paragraph is split (`splitted__words > word > word-wrap > char`) and slides up out of an overflow-hidden line mask, staggered per word/char. The About hero plays this over several seconds — deliberately *slow*, luxurious pacing.
- **Scroll-linked color:** hero words transition cream → lime as scroll progresses (karaoke/waterline fill).
- **Parallax everywhere:** sections translate at different rates; full-bleed images are oversized and pan.
- **WebGL image treatment:** slider photos and `animated-image` elements render through the canvas; slide transitions are driven by **pre-rendered grayscale mask sequences** (`/anim/1/mask-1-0.webp` … 27+ frames, 2048x576) — organic, filmic wipes, not CSS crossfades.
- **Easing character:** `cubic-bezier(0.075, 0.82, 0.165, 1)` (≈ Circ.out — fast attack, long soft settle) for the expressive moves; standard `(0.4, 0, 0.2, 1)` for utility transitions. Hovers: opacity → 0.5, color → 75%, menu links translate-x 20px; link underlines scale-x 0 → 1 from the left.
- **Custom cursors:** a global `.cursor` element plus a services-list cursor: 80px circle, central lime dot, lime arrow pointers, rotated border — invites horizontal drag/click on the index rows.

## 5. Navigation

- **Fixed minimal header:** logo + circular-outlined hamburger (two short lines) left; **"24-HOUR ASSISTANCE" pill** right (thin outline, uppercase 12px, solid lime circle with dark play-arrow). The pill expands into a dropdown card (photo, "24-hour assistance at your disposal" headline, phone number, "Schedule your intervention" form link) — the emergency CTA is a *permanent object* in the chrome, z-51.
- **Header themes per page:** `header--black` swaps every fill (logo dark-green, lime arrow in dark circle) on the light Blog theme.
- **Fullscreen overlay menu (signature):** a flat **lime #95EB6C panel inset exactly 10px** from every viewport edge — the dark page peeks around it as a frame; sharp corners. Links: UPPERCASE **Borna 60px** in near-black green, stacked, staggered in from below with slide+scale; small `.01–.04` counter chips in light-gray pills; scaleX underline on hover; current page dimmed. Bottom of the menu holds the "footer": 9px uppercase "Contatti" label, address, socials, legal links, credits.
- "Scroll down" hint text on page heroes; slide/page position always numbered.

## 6. Imagery treatment

- **Photography:** documentary-real, on-site: technicians in dark branded workwear, machine rooms, installations. **Cool, desaturated grade** (sampled avg saturation 0.16–0.28; steel-blue and muted-olive casts, mid luminance) — no glossy stock warmth. People are shown working, not posing at camera.
- **No CSS overlays, no filters, no duotones** on the images themselves (computed: filter none, blend normal) — separation from text is achieved by *placement*, not scrims. The green world around them does the branding; the photos stay honest.
- **No captions** on photos. Alt texts are functional ("Aquadra jacket", "Frame the Flow").
- Framing: hard rectangles, three modes (full-bleed interstitial / cropped portrait object / oversized off-canvas square). WebGL adds movement (parallax pans, masked transitions) rather than color effects.
- Blog/related cards: date in dotted format **"2024.4.30"**, 40px title, 304x350 portrait image, in 3-up columns.

## 7. Signature moments (the 3 most memorable)

1. **The 10px-inset lime menu panel** — the fullscreen menu as a bright framed card floating just inside the viewport, 60px uppercase Borna links with numbered pill counters. Nothing else on the site (or in the category) looks like it, and it is the purest expression of "Frame the Flow".
2. **The tricolor chevron veil transitions** — gray/orange/lime curtains with a Λ-pointed edge sweeping through on load and navigation, ending with the logo on lime. Turns route changes into brand ceremonies (and is the only place orange lives).
3. **The typographic About hero** — no image at all: a 4-line, 80px regular-weight sentence, first line lime, rest cream, revealed word-by-word through line masks over several seconds, then words re-colored by scroll. Confidence expressed as restraint.

(Runner-up: the no-footer "next page" full-screen teaser chaining pages as chapters 01→04.)

## 8. Why it feels expensive (vs a generic template)

- **One brand color pair, committed absolutely.** Lime is the body text, the menu, the cursor, the veil — not a sprinkle. Templates hedge; this doesn't.
- **Regular-weight giant type.** 80px at weight 400 with 1.25 leading reads couture; bold-900 heroes read template.
- **Slow, staged reveals.** Multi-second choreographed intros and word-mask staggering signal "we expect you to linger" — template sites fade in fast because they fear bounce.
- **Bespoke infrastructure visible everywhere:** intro film, WebGL canvas, frame-sequence masks, custom cursors, per-page header themes, a designed language switcher with three color variants — dozens of touchpoints that cannot be bought as a theme.
- **Structural nerve:** no footer, homepage as a 4-slide film, one CTA per screen. Template sites can't delete sections; this site deleted half the conventional sitemap and numbered what remained.
- **A concept that governs details:** "Frame the Flow" appears as the bordered loader box, the inset menu frame, the framed intro video, oversized images "framed" by the viewport. Details agree with each other — the definition of art direction.
- **Micro-typography discipline:** 9px and 12px uppercase labels, ".04" counters, "2024.6.21" dates — one consistent metadata voice.

## 9. Footer design

**There is no footer.** Deliberate structural decision:
- Every page ends with a **full-screen next-page teaser**: 12px uppercase numbered kicker ("04. CONTACT"), a giant lime Borna slogan ("Get in touch with Aquadra team"), and one arrow-pill button — pages chain into a numbered narrative loop.
- The classic footer content (company address "Aquadra SA, Via Pumiröö 2, 6883 Novazzano", phone, Instagram/LinkedIn, Privacy/Cookie/Manage-preferences/Credits) lives at the bottom of the **menu overlay**, set under 9px uppercase labels ("Contatti", "social").
- Lesson for the redesign: replace the link-dump footer with a single directional "next chapter" moment; move utility links into the menu.

## 10. Geometric / shape language

- **The asterisk/Λ:** the logo is a 6-arm asterisk (a star of Λ shapes; the wordmark's second A is a crossbar-less Λ). Its angles recur: chevron-edged transition veils, small arrow glyphs, the play triangle in the assistance pill.
- **Pill + circle chrome vs sharp-cornered content:** interactive chrome is rounded — 22px-radius pill buttons (18px mobile), full-round counter chips, circular hamburger outline, circular cursor, 8px-radius form fields — while content surfaces (panels, images, the menu card) are hard-edged rectangles. Soft = touchable, sharp = editorial.
- **The frame:** recurring inset framing (10px menu inset, 200px bordered loader box, images bleeding beyond the frame to imply continuation).
- **The hairline:** 2px progress "dolly" line with a dot, 2px underline decorations — thin instrument-like lines as UI.
- Buttons are **asymmetric arrow machines:** `custom-button` with 40px internal gap, an arrow icon block up to 128px wide, sliding lime background layer, padding 24px/64px — the arrow is half the button.
- No waves, no blobs, no literal water shapes anywhere — "water" is expressed through *motion* (flowing masks, liquid text fills), never through clip-art curves. The geometry stays Swiss: angles, circles, hairlines.

---

## Appendix: token cheat-sheet

```
Colors:   #0E1C04 page-dark | #163300 panel-forest | #95EB6C lime accent
          #E7E7E7 off-white / light theme | #A8A8A8 gray | #FF850D orange (ceremonial)
Type:     Borna 400/600 (display) | Helvetica Now (functional)
Scale:    80 / 60 / 40 / 16-20 / 12 / 9 px, display always weight 400, lh 1.25
Radius:   22px buttons (18 mobile), 9999px chips, 8px inputs, 0 on panels/images
Spacing:  container 20-28px edge; full-padding 128px (xl); text cols ~384px
Motion:   cubic-bezier(.075,.82,.165,1) expressive; (.4,0,.2,1) utility
          Lenis smooth scroll; word/char line-mask reveals; 3-veil chevron wipes
Format:   dates "2024.4.30"; counters "01." kickers, ".04" chips
```
