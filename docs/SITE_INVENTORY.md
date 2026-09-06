# SITE INVENTORY — marbellapoolservice.com

**Canonical business-content source for the redesign. Everything below was captured from the LIVE site on 2026-09-07. Nothing is invented; where the live site shows an error, typo, or placeholder, that is recorded as-is.**

Crawl method: full sitemap discovery (AIOSEO sitemap index) + raw-HTML download of all 14 pages and all 29 blog posts + rendered-content extraction. All verbatim copy below is exactly as published, including typos.

---

## 1. EXECUTIVE SUMMARY / KEY FINDINGS

- **Real business name:** INFINITY Concepts 2000 S.L. (NIF **B93727287**), trading as **Infinity Brand** (also styled "INFINITY CONCEPTS & INFINITY BRAND" in the footer). "Marbella Pool Service" is used as the site/SEO name only.
- **Company history hook (from a Google review):** Infinity "took over from Inagua" — customers migrated from a previous pool company called Inagua.
- **Contact info verified** — matches the expected data exactly (see §4).
- **Language is a mess (biggest content problem):** navigation, homepage, footer, contact, other-services, shop and all 29 blog posts are **English**; the 4 deep service pages (technical service, construction, leak detection, pool covers), the about page body, the welcome post, and 2 of 3 legal pages are **Spanish**. Page titles are English even on Spanish pages. There is **no language switcher**; hreflang declares an `/en/` version that is actually an empty blog-index stub.
- **Broken conversion paths:** Many CTA buttons ("Solicitar Presupuesto", "Request a maintenance service plan", hero service buttons, footer service links) point to Spanish slugs that **all return 404**: `/contacto/`, `/tienda/`, `/nosotros/`, `/limpieza-mantenimiento-piscinas/`, `/servicio-tecnico-piscinas/`, `/construccion-reformas-piscinas/`, `/fugas-perdidas-agua-piscinas/`, `/politica-privacidad/`. Only the English slugs work.
- **Shop is empty:** `/shop/` is a live WooCommerce storefront showing "No se han encontrado productos que coincidan con tu selección." (no products). "Discover our shop" buttons link to `share.google` short-links that resolve to the company's **Google Business Profile** ("Marbella pool service - Pool Maintenance", kgmid `/g/11zbqly7qf`), not a webshop.
- **Counters look like "+0":** the homepage stats are Elementor animated counters. Without JS they display "+0". The real configured values are: **+20 Years of experience, +3500 Technical visits per year, +5 Technical staff, +2500 Managed swimming pools.**
- **Famous typos confirmed verbatim in the main nav:** "**Maintenace**" and "**Poll Covers**". Homepage `<title>` contains "**Ramair**" (typo for "Repair"): `Swimming Pool Maintenance & Ramair Marbella Marbellapoolservice`.
- **Reviews are real:** 7 five-star Google reviews rendered via the **Trustindex** widget ("Trustindex verifica que la fuente original de la reseña sea Google.").
- Homepage has a heading "Frequently Asked Questions" and a "// Recent Projects" section with almost no content under them (leftover template sections).
- **Site platform:** WordPress 7.1 + Astra theme with child theme `infinity-brand`, built in **Elementor 4.2.4**, WooCommerce 11.1.0, AIOSEO 4.9.7.2, Contact Form 7 6.1.7, Joinchat (creame-whatsapp-me) floating WhatsApp button, Trustindex reviews, LiteSpeed Cache.

---

## 2. PLATFORM / TECH STACK (from raw HTML)

| Item | Value |
|---|---|
| CMS | WordPress 7.1 (`<meta name="generator">`) |
| Theme | Astra (`wp-theme-astra`) + child theme **`infinity-brand`** (`wp-child-theme-infinity-brand`) |
| Page builder | Elementor 4.2.4 (external CSS print method, custom breakpoints) |
| E-commerce | WooCommerce 11.1.0 (cart "Carrito de compra", "End purchase", "My account" pages exist) |
| SEO | All in One SEO (AIOSEO) 4.9.7.2 — generates the sitemap index |
| Forms | Contact Form 7 v6.1.7 (form ID 377 on page 368, locale `es_ES`) |
| WhatsApp | Joinchat / `creame-whatsapp-me` plugin — floating button, left side, phone +34625111172 |
| Reviews | Trustindex Google-reviews widget |
| Caching | LiteSpeed Cache (CSS/JS combined under `/wp-content/litespeed/`) |
| Payments (per shop imagery/terms) | Redsys secure payment (`pago-seguro-redsys.png`), card payments; terms mention gift cards/coupons |
| Schema | Organization, WebSite, WebPage, BreadcrumbList, ImageObject (Organization schema carries `email: info@infinitybrand.es`, `telephone: +34625111172`) |
| hreflang | `es` → `https://marbellapoolservice.com/` ; `en` → `https://marbellapoolservice.com/en/` (the `/en/` page is an empty blog-index stub titled just "Marbella Pool Service" — not a real translation) |
| robots.txt | Standard WooCommerce disallows + `Sitemap: https://marbellapoolservice.com/sitemap.xml` and `sitemap.rss` |

### Fonts loaded
- Open Sans 400 / Encode Sans 600 (Astra)
- Roboto (all weights) and Roboto Slab (all weights) — Elementor

### Colors observed in markup (frequency-ordered)
- `#ffffff` white, `#252525` / `#222325` / `#393c3e` dark text
- **`#020288` deep navy blue** (primary brand blue)
- **`#0696d3` cyan/light blue** (secondary)
- `#066aab` mid blue
- `#475569` slate gray
- `#e91446` pink/red accent (rare)
- `#e6edf6`, `#fbfbfb` light backgrounds; `#b2f0fb`, `#a4fcc4` light accents

---

## 3. BRAND IDENTITY

- **Brand names used on site:** "Infinity Brand" (main brand, used in body copy of every service page), "INFINITY CONCEPTS & INFINITY BRAND" (footer heading), "Marbella Pool Service" (site title suffix on every page + homepage final CTA "At Marbella Pool Service, we take care of everything…"), legal owner "INFINITY Concepts 2000 S.L."
- **Copyright line:** `© 2026 Infinity Brand`
- **Logo/favicon:** `https://marbellapoolservice.com/wp-content/uploads/2025/10/favicon-infinity-brand.png` (also served as `favicon-infinity-brand-80x80.png`)
- **Social handles:** everything is branded `infinitybrand.es`, NOT marbellapoolservice:
  - Instagram: `https://instagram.com/infinitybrand.es`
  - TikTok: `https://www.tiktok.com/@infinitybrand.es`
  - Facebook: `https://www.facebook.com/malaga.25/` ← odd URL, looks like a personal-profile slug, worth verifying with the client
  - WhatsApp: `https://wa.me/+34625111172` (also `https://api.whatsapp.com/send?phone=34625111172`)

---

## 4. CONTACT DATA — VERIFICATION vs EXPECTED

| Expected | Live site shows | Match |
|---|---|---|
| +34 625 111 172 | +34 625 111 172 (header CTA, footer, tel: links, WhatsApp, Joinchat) | YES |
| +34 951 388 794 | +34 951 388 794 (footer + contact page; landline, no tel-CTA prominence) | YES |
| info@infinitybrand.es | info@infinitybrand.es (contact page "Email" block, Organization schema, privacy policy, terms) | YES |
| Centro comercial LIDL, (Parking) Local 9, 29649 Calahonda (Mijas Costa), Málaga | "Centro comercial LIDL, (Parking) Local 9  29649 Calahonda (Mijas Costa) Málaga - España" (footer of every page + contact page) | YES |

**Additional registered/legal address (privacy policy + terms, verbatim):** "INFINITY Concepts 2000 S.L., with Tax Identification Number (NIF) B93727287 and a registered address for notification purposes at **C/ Juan de la Cierva, Unit 9, Lidl Shopping Centre, Mijas (29649), Málaga, Spain**. For any queries or suggestions, please contact us by email at: info@infinitybrand.es"

No opening hours are published anywhere on the site.

---

## 5. SITE STRUCTURE (URL TREE)

```
marbellapoolservice.com/
├── /                                          Home (EN)
├── /about-us/                                 About (ES body, EN title)
├── /swimming-pool-cleaning-and-maintenance/   Maintenance & cleaning (EN top / ES bottom, mixed)
├── /technical-service-swimming-pools/         Technical service / repairs (ES)
├── /building-renovations-swimming-pools/      Construction & renovation (ES)
├── /leaks-water-loss-swimming-pools/          Leak detection (ES)
├── /cubiertas-piscinas/                       Pool covers (ES — only Spanish slug that works)
├── /other-services/                           Chlorine + water supply (EN)
├── /shop/                                     WooCommerce shop (EMPTY — no products)
├── /contact/                                  Contact + CF7 form (EN)
├── /blog/                                     Blog index (30 posts)
│   ├── /bienvenidos/                          Welcome post (ES, 20/10/2025)
│   └── 29 English SEO posts (13/04/2026 – 18/05/2026, see §9)
├── /privacy-policy/                           Política de Privacidad (ES, H1 Spanish)
├── /terms-conditions/                         Terms and Conditions (ES body, 23 sections + annex)
├── /cookie-policy/                            Política de Cookies (ES)
├── /en/                                       Empty blog-index stub (hreflang target, no content)
└── Woo utility pages: Carrito (cart), End purchase (checkout), My account

DEAD (404) but linked from live buttons/footer:
/contacto/  /tienda/  /nosotros/  /limpieza-mantenimiento-piscinas/
/servicio-tecnico-piscinas/  /construccion-reformas-piscinas/
/fugas-perdidas-agua-piscinas/  /politica-privacidad/ (and by pattern /politica-cookies/, /terminos-condiciones/)
```

Sitemaps: `sitemap.xml` → `post-sitemap.xml` (30), `page-sitemap.xml` (14), `jet-woo-builder-sitemap.xml` (product template + 4 shop images), `category-sitemap.xml` (`/category/sin-categoria/`, `/category/blog/`), `language-sitemap.xml` (home only).

---

## 6. SHARED SITE-WIDE ELEMENTS

### 6.1 Header / main navigation (identical on all pages, verbatim)
- Home → `/`
- About us → `/about-us/`
- Services ▾
  - Repairs → `/technical-service-swimming-pools/`
  - Construcción y Reformas → `/building-renovations-swimming-pools/`
  - **Maintenace** [sic] → `/swimming-pool-cleaning-and-maintenance/`
  - **Poll Covers** [sic] → `/cubiertas-piscinas/`
  - Leak Detection → `/leaks-water-loss-swimming-pools/`
  - Other Services → `/other-services/`
- Shop → `/shop/`
- Contact → `/contact/`
- Blog → `/blog/`
- Header button: "Call us!" / "¡Llámanos ahora!" → `tel:+34625111172`

### 6.2 Pre-footer CTA banner (every page, verbatim EN even on Spanish pages)
> **"Shall we start caring for your pool?"**
> "Request a no-obligation quote or visit our online shop to kit out your pool today."
> Buttons: "Request a quote" → `/contact/` or `/contacto/` (404) depending on page · "Call us" → `tel:+34625111172`

### 6.3 Footer (verbatim)
- Heading: **INFINITY CONCEPTS & INFINITY BRAND**
- Social icons: Whatsapp · Instagram · Tiktok · Facebook-f
- **Services** column: Swimming Pool Maintenance, Pool Cleaning (both → `/limpieza-mantenimiento-piscinas/` **404**), Technical Support - Repairs (→ `/servicio-tecnico-piscinas/` **404**), Renovations and Construction (→ `/construccion-reformas-piscinas/` **404**), Water Leaks and Losses (→ `/fugas-perdidas-agua-piscinas/` **404**), Swimming Pool Covers (→ `/cubiertas-piscinas/` works)
- **About us** column: About us (→ `/nosotros/` **404**), Online Shop (→ `/tienda/` **404**), Blog, Contact us (→ `/contacto/` **404**)
- **Contacto** column: address + both phone numbers (see §4)
- Legal row: `© 2026 Infinity Brand` · Privacy Policy · Cookie Policy · Terms and Conditions (these three point at working English slugs on some pages and 404 Spanish slugs on others)

### 6.4 Google reviews block (Trustindex, on home + every service page + about) — VERBATIM, all 5 stars, "Publicado en Google"
1. **Jacob Saabye** — "Great work renovating my swimming pool. Done on time and professional job."
2. **Luisa Loza** — "Un trabajo excelente"
3. **Katya Aimak** — "Excellent service!!"
4. **Lillann Ottosen** — "Infinity are dutiful and competent - we feel safe by letting them be responsible for our most important values - the pools and associated machines. And the 'engine of Infinity' - positive Christina - she is very easy to work with."
5. **Margaret Pearson** — "I joined Infinity when they took over from Inagua. Since that time l have found their service to be of the highest standard and any problems are addressed quickly and professionally. I feel treated as a person rather than just another customer. Cristina, in Admin, is great."
6. **Eli VR** — "Muy recomendables, rápidos y eficaces. Estoy muy contenta con los servicios que ofrecen y sobretodo el equipo es muy amable y profesional."
7. **Manuel el tuner** — "Me pusieron una bomba nueva y el cuadro electrico nuevo (se habia llenado de agua por completo la caseta) Servicio muy rapido , amables y transparentes en todo momento , Todo perfecto volvere a llamarlos sin duda. Gracias"

Team members name-checked in reviews: **Cristina/Christina (admin)**. Prior company: **Inagua**.

### 6.5 Service-area list (identical 18-town list on every service page, verbatim order)
Mijas Costa · Mijas Pueblo · Calahonda · Cabopino · Elviria · Marbella · Puerto Banús · San Pedro de Alcántara · Estepona · Málaga · Torremolinos · Benalmádena · Fuengirola · Las Lagunas · El Faro y el Chaparral · Alhaurín el Grande · Alhaurín de la Torre · Benahavís

Accompanied by map graphic: `https://marbellapoolservice.com/wp-content/uploads/2025/10/mapa-trabajo-infinitybrand-malaga.svg` and caption "Estamos cerca de tu piscina / Zonas principales donde trabajamos en la provincia de Málaga".

Prose version (EN pages): "We operate throughout the Costa del Sol, with a particular focus on Mijas Costa. We also work in Fuengirola, Marbella, Benalmádena, Torremolinos, Estepona and Malaga city centre. Looking for another area? Just ask us and we'll check our availability."
Prose version (ES pages): "Trabajamos a diario en Mijas Costa (Calahonda, Riviera del Sol, Sitio de Calahonda, La Cala), Fuengirola, Marbella, Benalmádena, Torremolinos, Estepona y Málaga capital."

### 6.6 Floating WhatsApp button
Joinchat plugin, bottom-left, phone `+34625111172`.

---

## 7. PAGE-BY-PAGE INVENTORY

### 7.1 HOME — `/`
- **Title:** `Swimming Pool Maintenance & Ramair Marbella Marbellapoolservice` ("Ramair" = typo for Repair)
- **Meta description:** "Expert pool maintenance, repairs, and construction in Marbella, Mijas Costa, and Estepona. LED lighting & heating solutions. Get your free quote today!"
- **Language:** English
- **Hero:** H1-area: "Swimming Pool Company on the Costa del Sol" / "Pool Maintenance, Technical Support, Products, Construction and Renovations." Four hero buttons: "Technical Support" → `/servicio-tecnico-piscinas/` (**404**), "Renovation and Construction" → `/construccion-reformas-piscinas/` (**404**), "Maintenance" → `/limpieza-mantenimiento-piscinas/` (**404**), "Online shop" → share.google Google-Business link.
- **Intro block:** "Full-service pool specialists on the Costa del Sol" — badges "Our own team" / "Clear quotes" — body verbatim: "We are Infinity Brand, a technical and maintenance team that makes looking after your pool easy, transparent and efficient. We serve villas, residential complexes and hotels throughout the Costa del Sol, with a particular focus on Mijas Costa and Marbella. We combine our day-to-day expertise with an online shop offering products we know work. We adjust the water chemistry, optimise your plant room and, when the time comes, renovate or build to enhance the value of your space."
- **Client types:** "We provide services for private pools and housing communities." / "We tailor plans and solutions to suit every type of client:" — "Private homes: comfort, security and costs under control." — "Communities: clear protocols, communication with administrators and working groups." Buttons: "Request a Quote" → `/contacto/` (**404**), "Talk to our experts" → wa.me.
- **Why choose us:** "Everything your swimming pool needs, all from a single company" — 3 cards: "We are your go-to company for everything" (From day-to-day pool maintenance to complete refurbishment or new construction.) · "Efficiency and safety" (Crystal-clear water, carefully controlled water chemistry and equipment calibrated for efficiency.) · "Local and prompt" (Rapid response in Mijas Costa and across the Costa del Sol.)
- **Services section:** "Swimming Pool Services in Málaga and the Costa del Sol" — 3 cards with feature bullet lists (all copy verbatim in §7.1a below) and CTAs "Request a maintenance service plan" (**404** target), "Request technical support" (**404** target), "Request a quote for building work/renovation" (**404** target).
- **How we work:** "A straightforward process, with no surprises" — 5 steps: Get in touch with us / Technical visit-diagnostic assessment / Clear proposal / Implementation and fine-tuning / Support and maintenance (full sentences in §7.1a).
- **Stats counters (Elementor, animate on scroll; static HTML shows "+0"):** Years of experience **+20** · Technical visits per year **+3500** · Technical staff **+5** · Managed swimming pools **+2500**
- **Leftover/empty sections:** "Frequently Asked Questions — Here you will find the questions our customers most frequently ask us before booking our services." (no Q&A items render) · "// Recent Projects — We make your pool a place where all you have to worry about is enjoying yourself" (gallery: `gal-01-1.jpg`).
- **Final CTAs:** "We bring your pool to life — At Marbella Pool Service, we take care of everything: maintenance, technical support, products and construction work. We operate throughout the Costa del Sol and offer a rapid response in Mijas Costa to ensure your pool is ready all year round." · "Shall we get started on your pool? Request a no-obligation quote. We're based in Mijas Costa and cover the whole of the Costa del Sol."
- **Key images:** hero/banners `mantenimiento-piscinas-banner.jpg`, `banner-serv-tecnico.jpg`, `banner-ref-const.jpg`, `tienda-online-banner.jpg`, gallery `gal-01-1.jpg`, service icons `limpieza-mant-piscinas-icon.svg`, `servicio-tecnico-icon.svg`, `ref-icon.svg`, map `mapa-trabajo-infinitybrand-malaga.svg`.

#### 7.1a Homepage service-card copy (verbatim)
**Pool Cleaning and Maintenance** — "Preventive maintenance that avoids problems and saves money" — "Plans tailored to the needs of private individuals, residents' associations and hotels. Cleaning, chemical monitoring, inspection of equipment and moving parts, regular reports and recommendations for improvement. Crystal-clear, safe water, ready to enjoy." Bullets: Clear checklists and scheduled visits / Chemical balance and action when needed / Cleaning surfaces, skimmers, baskets and the bottom / Checking the pump, filter, valves and wiring / Reports with photos and next steps.

**Technical Service** — "Professional diagnosis and repair" — "Repairing faults and optimising your plant room: pumps, filters, leaks, salt chlorination, automation, lighting and more." Bullets: On-site assessment and a clear quote / Repair and replacement of equipment / Improved efficiency (schedules, flow rates, consumption) / Automation and remote control / Pre-season set-up.

**Swimming Pool Construction and Renovations** — "New builds and renovations that enhance your space" — "Design and build swimming pools tailored to your style and the site conditions. We carry out refurbishments to improve the appearance, watertightness and comfort of your pool." Bullets: New-build (concrete/mosaic/other finishes) / Revestments and Liners / Crowns and non-slip surfaces / Built-in staircases, benches and relaxation areas / Next-generation lighting and chlorination / Roofing and heating and cooling systems.

**How-we-work steps (verbatim):** 1. "Get in touch with us — Tell us about your swimming pool, how you use it and what you expect from it" 2. "Technical visit/diagnostic assessment — We measure, analyse and identify areas for improvement." 3. "Clear proposal — A comparison of options (cost-benefit analysis) and realistic timelines." 4. "Implementation and fine-tuning — Our own team, site clearance and final inspection." 5. "Support and maintenance — We'll keep an eye on things to make sure everything stays just right."

---

### 7.2 MAINTENANCE — `/swimming-pool-cleaning-and-maintenance/`
- **Title:** `Pool Cleaning and Maintenance - Marbella Pool Service`
- **Language:** MIXED — top half English, bottom half (process, FAQ) Spanish.
- **H1:** "Swimming Pool Cleaning and Maintenance in Mijas, Marbella and all of the Costa del Sol"
- **Intro (EN, verbatim):** "Enjoying a clean and safe swimming pool all year round shouldn't be complicated. At Infinity Brand, we take care of the comprehensive cleaning and maintenance of swimming pools in Mijas Costa (Calahonda, Riviera, La Cala…) and the rest of the Costa del Sol, combining scheduled visits, precise chemical control and technical supervision of equipment."
- **"Why trust Infinity Brand?"** — Professionals and the best products / Complete care / Real closeness.
- **"What does our swimming pool maintenance and cleaning service include?"** (EN):
  - Complete pool cleaning — "Removal of leaves and debris, brushing the walls and waterline, vacuuming the pool floor and cleaning the skimmers/baskets."
  - Water balance — "Measurement and adjustment of pH, alkalinity, disinfectant (chlorine or salt chlorination), stabiliser and shock treatments where necessary."
  - Proper filtration — "Washing and rinsing filters, checking pressure and inspecting valves."
  - Engine room in excellent condition — "Inspection of pumps, dosing units, electrical panels, lighting and watertightness."
- **"Nuestro proceso de trabajo" (ES, 5 steps verbatim):** Diagnóstico inicial — "Revisamos estado del vaso, revestimiento, equipos y calidad del agua." / Plan y presupuesto claro — "Detallamos frecuencia, tareas y recomendaciones de mejora." / Puesta a punto — "Limpieza profunda, equilibrado y ajuste de filtración." / Mantenimiento continuo — "Visitas programadas con checklist e informes." / Soporte todo el año — "Ajustes estacionales y atención a incidencias."
- **Zonas heading:** "Zonas donde realizamos limpieza y mantenimiento de piscinas" + 18-town list (§6.5).
- **FAQ (ES, verbatim Q&A):**
  - "¿Qué incluye una visita de mantenimiento?" → "Limpieza de superficie y fondo, cepillado de paredes y línea de agua, control y ajuste químico, revisión de bomba / filtro / válvulas, lavado de filtros cuando procede y un informe con niveles y próximas acciones."
  - "¿Trabajáis con cloración salina y dosificación automática?" → "Sí. Calibramos pH/ORP, controlamos salinidad, limpiamos célula y verificamos alarmas. Si lo necesitas, instalamos y configuramos el sistema."
  - "Mi agua está turbia/verde, ¿lo solucionáis?" → "Sí. Hacemos tratamiento de choque, floculación si procede, limpieza de filtros y reequilibrado. Además revisamos las causas (filtración insuficiente, fosfatos, estabilizante alto)."
  - "¿Hacéis apertura de temporada e hibernación?" → "Sí. Apertura: limpieza profunda, choque, ajuste de niveles, comprobaciones de seguridad. Hibernación: limpieza, ajuste de parámetros, protección de equipos y protocolo de invierno."
  - "Atendéis urgencias o averías?" → "Sí. Priorizamos según gravedad y disponibilidad. Nuestro servicio técnico repara bombas, filtros, fugas, iluminación, cuadros, etc."
  - "¿Usáis productos seguros?" → "Sí. Marcas de referencia y dosificación responsable. Guardamos y transportamos químicos según recomendaciones del fabricante."
- **CTAs:** "Call us!"/"Call us now!" → tel · "Conoce nuestra tienda" → share.google `pqFTHbRjmlCnxmPfo` · "Solicita información sin compromiso" / "Solicitar Presupuesto" / "Request a quote" → `/contacto/` (**404**)
- **Images:** header `Inifnity-Pool-Limpieza-y-Mantenimiento-Header-3.jpg` (note "Inifnity" typo in filename), `mantenimiento-costa-del-sol-piscinas-maintenance1.png`, `maintenance-costa-sol-pool-marbella1.png`, `analisis-quimicos-piscinas-pool1.png`, map SVG.

---

### 7.3 TECHNICAL SERVICE / REPAIRS — `/technical-service-swimming-pools/`
- **Title:** `Swimming Pool Technical Service - Marbella Pool Service`
- **Language:** Spanish (title English)
- **H1:** "Servicio Técnico de Piscinas en la Costa del Sol"
- **"Servicios integrales para piscinas" (verbatim):** "Instalamos todo tipo de equipamientos para piscinas, trabajando únicamente con las mejores marcas del mercado, garantizando siempre precio competitivo, máxima calidad y total garantía. Construimos piscinas de cloración tradicional o con sistema de desinfección por sal, adaptándonos a las necesidades de cada cliente. También instalamos bombas de calor de última generación, reconocidas por ser las más silenciosas y eficientes del mercado, para que disfrutes de tu piscina durante más tiempo y con el máximo confort. Ofrecemos domótica completa para piscinas, permitiendo el control inteligente de todos los sistemas: filtración, climatización, iluminación y tratamiento del agua, todo de forma cómoda y automatizada. Una vez finalizada la instalación, realizamos todas las comprobaciones de funcionamiento necesarias y dejamos la piscina totalmente puesta a punto y lista para su uso, asegurando un resultado óptimo desde el primer día. Además, realizamos reparación de tuberías rotas, localización de fugas y su correspondiente reparación, utilizando métodos eficaces para minimizar molestias y garantizar soluciones duraderas."
- **"Reparación inmediata, rendimiento sostenible":** "Atendemos averías de bombas, filtros, fugas, cloración salina, iluminación y automatización con diagnóstico in situ y soluciones orientadas al ahorro energético. Nuestro objetivo: paradas mínimas, agua perfecta y costes bajo control en Mijas Costa, Marbella y toda la Costa del Sol."
- **"Qué incluye nuestro servicio técnico" (7 items, verbatim):**
  - Diagnóstico avanzado en tu piscina — "Mediciones de presión/caudal, análisis del agua, revisión eléctrica y trazado hidráulico."
  - Reparación y sustitución de equipos — "Bombas monocelda y VS, filtros de arena/vidrio, válvulas, cuadros y focos LED IP68."
  - Detección y reparación de fugas — "Pruebas de estanqueidad, inspección de tuberías, sellado de grietas y cambio de juntas."
  - Cloración salina y dosificación — "Instalación, calibración de pH/ORP, células nuevas y mantenimientos preventivos programados."
  - Automatización y control remoto — "Programadores, sondas inteligentes, integración App/wi-fi y alertas por parámetros fuera de rango."
  - Puesta a punto pre-temporada — "Limpieza de circuito, lavado de filtros, revisión de seguridad y checklist de apertura."
  - Optimización de eficiencia — "Ajuste de horarios, backwash correcto, equilibrio hidráulico y reducción de consumos eléctricos."
- **"Protocolo de servicio técnico" (5 steps, verbatim):** Evaluación técnica in situ — "Tomamos datos de uso/volumen, comprobamos vaso y revestimiento, medimos caudal y presión, y analizamos parámetros del agua para localizar el origen de la avería." / Plan de intervención y presupuesto — "Definimos alcance, repuestos y mano de obra con precio cerrado, calendario por etapas y alternativas de solución según coste/beneficio. Todo queda documentado y aprobado por escrito." / Puesta a punto y verificación — "Realizamos limpieza técnica donde proceda, desinfección, equilibrado químico y ajuste de filtración/timers. Cerramos con pruebas eléctricas e hidráulicas y registro de valores finales." / Mantenimiento preventivo — "Programamos visitas con checklist y fotos, revisión de consumibles y calibración de equipos (pH/ORP, cloración salina) para evitar paradas y alargar la vida útil." / Soporte continuo — "Apertura/cierre de temporada, ajustes por clima, atención a incidencias en 24–48 h, suministro de repuestos y asesoría normativa cuando sea necesario."
- **"Áreas de asistencia técnica de piscinas":** "Atendemos averías y optimizaciones con respuesta rápida en la Costa del Sol, especialmente en Mijas Costa. Si tu instalación está en otra zona, consúltanos y te confirmamos cobertura." + 18-town list.
- **"Cómo maximizamos el rendimiento — Menos consumo, más estabilidad del agua":** "Rediseñamos la curva de funcionamiento de tu sala técnica: bombas de velocidad variable, ciclos de filtración optimizados, hidráulica equilibrada y automatización de pH/ORP. Esto mejora la calidad del agua, alarga la vida de los equipos y reduce la factura eléctrica sin sacrificar confort."
- **FAQ (8 Q&A, verbatim):**
  - "¿Cuándo podéis venir si tengo una avería?" → "En zonas principales solemos atender en 24–48 h; si hay hueco, gestionamos mismo día para urgencias."
  - "¿Cobráis el diagnóstico si acepto la reparación?" → "El coste del diagnóstico se descuenta del total cuando ejecutamos la solución propuesta."
  - "¿Podéis trabajar con mi marca actual de equipos?" → "Sí. Somos multimarca y usamos recambios originales o compatibles de alta calidad con garantía."
  - "Mi piscina pierde agua, ¿cómo lo detectáis?" → "Aplicamos pruebas de presión, colorantes, escucha acústica y cámaras; localizamos la fuga y proponemos el sellado adecuado."
  - "Quiero cloración salina/automatización, ¿es viable en mi sala?" → "Normalmente sí. Valoramos espacio, caudal y eléctricas, y dimensionamos célula, sonda y control para tu volumen real."
  - "¿Ofrecéis contratos de mantenimiento tras la reparación?" → "Sí. Planes a medida con visitas programadas, informes y preventivo para mantener la piscina siempre lista."
  - "¿Qué cobertura geográfica tenéis?" → "Mijas Costa, Fuengirola, Marbella, Benalmádena, Torremolinos, Estepona y Málaga capital; consulta otras zonas de la Costa del Sol."
  - "¿Qué garantías incluís?" → "Mano de obra garantizada y garantías de fabricante en equipos nuevos, todo por escrito en la orden de trabajo."
- **Closing:** "¿Tu piscina necesita nuestro servicio técnico? — Solicita tu diagnóstico profesional y recibe un presupuesto claro. Habla con un técnico ahora y vuelve a disfrutar de tu piscina sin imprevistos."
- **CTAs:** "¡Llámanos ahora!" / "¿Hablamos?" → tel · "Conoce nuestra tienda" → share.google · "Solicitar Presupuesto"/"Request a quote" → `/contacto/` (**404**)
- **Images:** `banner-serv-tecnico.jpg`, `Servicio-tecnico-piscinas-pool-technicial-service-mijas-marbella1.png` (note "technicial" typo in filename), `filtro-motor-bomba-piscina-tienda-calahonda-marbella-costa-del-sol1.png`, map SVG.

---

### 7.4 CONSTRUCTION & RENOVATION — `/building-renovations-swimming-pools/`
- **Title:** `Swimming Pool Construction and Renovation - Marbella Pool Service`
- **Language:** Spanish
- **H1:** "Construcción y Reformas de Piscinas en la Costa del Sol"
- **Intro "Reforma integral de piscinas que revaloriza tu espacio" (verbatim):** "En Infinity Brand somos especialistas en reformas y renovaciones de piscinas, ofreciendo soluciones duraderas, estéticas y totalmente personalizadas en Mijas Costa, Marbella y toda la Costa del Sol. Renovamos tu piscina para que vuelva a lucir como nueva, mejorando tanto su apariencia como su funcionalidad. Trabajamos con materiales de primera calidad y técnicas avanzadas para garantizar resultados resistentes, seguros y de larga duración. Priorizamos estructura, estanqueidad y acabados para un vaso sólido y duradero, con estética actual y mantenimiento sencillo. Integramos equipos eficientes y soluciones de automatización para que disfrutes más y gastes menos."
- **"Rejuntado de piscinas: mantenimiento clave para evitar desprendimientos" (full section, verbatim):** "El rejuntado de piscinas es un servicio fundamental para mantener el buen estado del revestimiento y prolongar la vida útil de tu piscina. Con el paso del tiempo, las juntas del gresite se deterioran debido a factores como el uso continuo, los productos químicos, la humedad y los cambios de temperatura. Cuando el material de las juntas pierde eficacia, es habitual que los gresites se despeguen o incluso se caigan, afectando tanto a la estética como a la seguridad de la piscina. Además, unas juntas en mal estado pueden provocar filtraciones de agua, generando problemas más graves y costosos. Por ello, se recomienda realizar el rejuntado de piscina cada cierto tiempo, como parte del mantenimiento preventivo. Este proceso no solo mejora el aspecto visual, sino que también garantiza la correcta fijación del gresite y evita reparaciones mayores. En Infinity Brand, somos especialistas en reparación y mantenimiento de piscinas en la Costa del Sol, ofreciendo un servicio profesional de rejuntado de gresite con materiales de alta calidad y acabados duraderos. Trabajamos para que tu piscina luzca como nueva y se mantenga en perfectas condiciones durante todo el año."
- **"Por qué confiar en Infinity Brand" (3 cards, verbatim):** Equipo propio y certificado — "Técnicos propios, certificados y asegurados, con formación continua y experiencia real en obra y reforma." / Plazos realistas, siempre cumplidos — "Planificación con hitos y cronograma; cumplimos plazos acordados e informamos avances en cada fase." / Presupuesto claro y cerrado — "Partidas detalladas y materiales definidos; fijamos precios por contrato y evitamos extras imprevistos."
- **"Servicios de construcción y reforma" (4 cards, verbatim):** Obra nueva y rehabilitación que revalorizan tu espacio — "Piscinas a medida según tu estilo y terreno; en reformas, mejoramos estanqueidad, estética y confort." / Revestimientos y lámina armada (liner) — "Renueva el vaso rápido y con garantía: más estanqueidad y un acabado moderno." / Iluminación LED y cloración de última generación — "LED de bajo consumo y cloración automatizada para agua saludable y menos mantenimiento." / Escaleras integradas, bancos y zonas relax — "Mayor accesibilidad y confort con peldaños amplios, bancos sumergidos y áreas de descanso."
- **"Metodología de obra y reforma" (5 steps, verbatim):** Evaluación y objetivos — "Medimos, revisamos vaso/equipos y fijamos el resultado deseado." / Diseño y acabados — "Propuestas de revestimientos, coronaciones, escaleras e iluminación." / Presupuesto y calendario — "Partidas detalladas, plazos por hitos y alternativas coste/beneficio." / Ejecución y control — "Equipo propio, seguimiento diario y pruebas de estanqueidad/instalaciones." / Puesta en servicio — "Llenado, equilibrado químico, ajuste de automatizaciones y dossier de garantías."
- **"Dónde construimos y reformamos piscinas":** "Trabajamos a diario en Mijas Costa (Calahonda, Riviera del Sol, Sitio de Calahonda, La Cala), Fuengirola, Marbella, Benalmádena, Torremolinos, Estepona y Málaga capital. Si tu proyecto está en otra zona, consúltanos disponibilidad." + 18-town list.
- **"También realizamos:" (verbatim):**
  - "Sustitución completa de gresites y mosaicos: Con el paso del tiempo, los gresites pueden deteriorarse, desprenderse o perder color. Realizamos la retirada completa del revestimiento antiguo y la instalación de nuevos gresites o mosaicos, adaptándonos al diseño y estilo que deseas. Devuelve a tu piscina un aspecto moderno, elegante y totalmente renovado."
  - "Impermeabilización del vaso de piscina: Las filtraciones son uno de los problemas más comunes en piscinas antiguas. Aplicamos sistemas profesionales de impermeabilización del vaso, asegurando la estanqueidad y evitando pérdidas de agua. Protege tu piscina y evita daños estructurales a largo plazo."
  - "Sustitución de skimmer: El skimmer es fundamental para mantener el agua limpia y en correcto funcionamiento. Si presenta fisuras, fugas o mal rendimiento, realizamos su sustitución completa con instalación profesional. Un sistema de filtración eficiente es clave para una piscina limpia y saludable."
- **FAQ (5 Q&A, verbatim):**
  - "¿Cuánto tarda una reforma de piscina?" → "Según alcance: desde 1–2 semanas (revestimiento/lámina armada) hasta 4–6 semanas (obra civil, coronación y equipos)."
  - "¿Puedo usar la piscina tras un tratamiento o reforma?" → "Sí, te indicamos el tiempo de curado y estabilización química. En tratamientos estándar, suele ser entre 24 y 72 horas."
  - "¿Trabajáis con particulares, comunidades y hoteles?" → "Sí. Adaptamos protocolos, comunicación con administradores y disponibilidad para turismo."
  - "¿Incluís asesoramiento de eficiencia energética?" → "Por supuesto. Recomendamos bombas de velocidad variable, automatización y cubiertas para reducir consumos y químicos."
  - "¿Ofrecéis financiación o fases de obra?" → "Podemos planificar por fases y ofrecer opciones de pago por hitos. Lo revisamos en la propuesta."
- **Closing:** "¿Listo para estrenar piscina?"
- **Images:** `banner-ref-const.jpg`, `Construccion-Reformas-Piscinas-1.jpg`, `Construccion-reformas-piscinas.jpg`, `Construccion-y-Reformas-de-Piscinas-1.jpg`, `Construccion-y-Reformas-de-Piscinas-5.jpg`, `lecheos-de-piscina-rejuntado-marbella-empresa.jpg`, `rejuntado-lecheo-empresa-piscinas-profesional-marbella-mijas-calahonda21.png`, `trabajo-piscina-rejuntado-regrouting-cliente1.png`, `tiles-gresites-shop-costa-del-sol-calahonda-mijas1.png`, map SVG.

---

### 7.5 LEAK DETECTION — `/leaks-water-loss-swimming-pools/`
- **Title:** `Swimming Pool Leaks and Water Loss - Marbella Pool Service`
- **Language:** Spanish
- **H1:** "Fugas y Pérdidas de Agua en Piscinas en la Costa del Sol"
- **Intro (verbatim):** "La fugas y pérdidas de agua en piscinas son problemas más comunes de lo que parece y, si no se abordan a tiempo, encarecen la factura, desestabilizan la química del agua y pueden comprometer la estructura. En Infinity Brand realizamos tests de fugas adaptados a cada caso: desde pruebas solo en tuberías hasta test completos con gas trazador y buzo, incluyendo inspección de grietas en hormigón, sellados y accesorios. Nuestro objetivo es claro: localizar con precisión el punto de pérdida y ofrecer una solución definitiva con presupuesto cerrado." (note: "La fugas" grammar error is on the live site)
- **"Señales claras de que tu piscina pierde agua" (6 bullets, verbatim):** "Descenso de nivel superior al normal por evaporación, incluso sin uso." / "Necesidad constante de rellenado y aumento del consumo de agua." / "Inestabilidad química: el cloro/pH 'no aguanta' pese al ajuste." / "Humedades, charcos o filtraciones cerca de la sala de máquinas o perímetro." / "Aire en la línea de aspiración, cavitación en la bomba o ruidos anómalos." / "Baldosas huecas, microfisuras visibles, movimiento en coronación o playa."
- **"Pruebas y métodos que utilizamos" (5 methods, verbatim):**
  - Pruebas de presión en tuberías — "Aislamos líneas (impulsores, skimmers, limpiafondos, desagüe) y presurizamos para detectar caídas de presión que delaten roturas, uniones defectuosas o válvulas dañadas. Es la base para diferenciar entre fuga hidráulica y fuga en el vaso."
  - Gas trazador (alta sensibilidad) — "Inyectamos una mezcla segura que migra hacia el punto de fuga. Con equipos de detección acústica/olfatométrica, localizamos la salida incluso bajo pavimentos o césped, reduciendo catas innecesarias. Ideal cuando la fuga es pequeña pero persistente."
  - Buzo profesional y pruebas de colorante — "Un buceador cualificado inspecciona el vaso, focos, nichos, juntas de skimmers, desagüe principal, boquillas y líneas de agua. Con colorante (dye test) verificamos succión en microfisuras y sellados."
  - Inspección visual y acústica — "Cámaras endoscópicas y escucha con geófono/hidrofono para distinguir vibraciones de fuga en conducciones enterradas o paredes del vaso."
  - Evaluación estructural del hormigón — "Buscamos rajas o 'cracks' en el hormigón, desplazamientos en juntas, pérdidas por vasos comunicantes y problemas de estanqueidad en revestimientos (gresite, lámina armada, microcemento)."
- **"Nuestro proceso de trabajo" (5 steps, verbatim):** Llamada y prediagnóstico — "Recopilamos síntomas, uso de la piscina y últimos cambios realizados (revestimientos, equipos)." / "Visita técnica y test a medi" [sic — truncated on live site] — "Proponemos la combinación de pruebas necesarias: solo tuberías o test completo con gas trazador y buzo incluido, según tu caso." / Informe y presupuesto — "Entregamos resultados, localización probable y presupuesto de reparación por escrito, sin sorpresas." / Reparación y sellado — "Reparación de tuberías, juntas y elementos; resellado en nichos/skimmers; tratamiento de cracks del hormigón; sustitución de piezas si procede." / Verificación y puesta a punto — "Repetimos test, equilibramos la química y optimizamos horarios de filtración para volver a la normalidad con consumo controlado."
- **"Beneficios de resolver la fuga cuanto antes" (verbatim):** "Ahorro inmediato en agua, energía y productos químicos." / "Estabilidad del agua: menos reposiciones = química más predecible." / "Protección estructural: sin humedad permanente, se evitan daños por capilaridad." / "Seguridad eléctrica: riesgo menor en nichos de foco y cuadros cercanos." / "Valor del inmueble: piscina en regla, sin patologías ocultas."
- **FAQ (3 Q&A, verbatim):**
  - "¿Cómo sé si es evaporación o fuga?" → "En verano, una evaporación moderada es normal, pero si el descenso exige rellenos frecuentes o se mantiene en días frescos, conviene testear."
  - "¿Siempre hay que vaciar la piscina?" → "No. La mayoría de pruebas y reparaciones se realizan sin vaciar el vaso o con bajada parcial del nivel."
  - "¿Cuánto tarda el diagnóstico?" → "Un test estándar (tuberías + puntos críticos) suele completarse en 1 sesión. Si se requiere gas trazador y buzo, lo programamos en la misma semana según agenda."
- **Closing "Solicita Presupuesto":** "Cuéntanos tu caso y agendamos una visita técnica para definir el test adecuado: únicamente tuberías o completo con gas trazador y buzo. Te entregaremos informe y presupuesto con la reparación recomendada."
- **Images:** `fugas-piscinas.jpg`, `fugas-piscinas-4.jpg`, `Fugas-piscinas-2.jpg`, `fugas-piscinas-5.jpg`, map SVG.

---

### 7.6 POOL COVERS — `/cubiertas-piscinas/`
- **Title:** `Cubiertas de Piscinas - Marbella Pool Service`
- **Language:** Spanish (the only working Spanish-slug page)
- **H1:** "Cubiertas de Piscinas en la Costa del Sol"
- **Intro (verbatim):** "Cubiertas de piscinas para alargar la temporada, reducir la evaporación y mantener el agua estable con menos esfuerzo. En Infinity Brand diseñamos, suministramos e instalamos cubiertas a medida para villas, comunidades y hoteles en toda la Costa del Sol, con respuesta ágil en Mijas Costa y Marbella. Analizamos el uso real de tu piscina, la exposición al viento y al sol, y el estado de tu sala técnica para proponerte la solución que más rendimiento ofrece por euro invertido."
- **"Por qué confiar en Infinity Brand":** Profesionales y los mejores productos — "Equipo propio y repuestos originales para el mantenimiento de tu piscina" / Atención integral — "Si surge una avería, nuestro servicio técnico la resuelve sin demoras." / Cercanía real — "Base en Mijas Costa y cobertura ágil por toda la Costa del Sol."
- **"Nuestros modelos de cubiertas de piscinas":** "Trabajamos con una gama amplia para cubrir necesidades, presupuestos y estilos. Todos los modelos se fabrican a medida de tu piscina, con instalación incluida y garantías por escrito."
  - **Cubiertas manuales** — "Soluciones sencillas, eficaces y con una relación coste/beneficio excelente. Dentro de esta categoría ofrecemos:" Burbujas (manta térmica): "flotan sobre el agua, reducen evaporación y elevan la temperatura en primavera y otoño. Muy recomendables como complemento de climatización." / Con gomas elásticas: "el cobertor se fija al perímetro mediante elásticos y ganchos, logrando mejor tensión y menos holgura con viento." / De seguridad para niños: "tejidos reforzados y anclajes perimetrales para limitar el acceso y evitar caídas accidentales." / De seguridad para mascotas: "materiales antidesgarro y diseño pensado para soportar peso accidental en superficie." / Otros formatos: "te asesoramos si necesitas soluciones mixtas (por ejemplo, manta térmica con fijación elástica)."
  - **Cubiertas con enrollador** — "Perfectas cuando buscas comodidad de apertura y cierre sin renunciar a una solución ligera. Disponibles en versiones:" Manuales: "enrollador con manivela o volante, fácil manejo para vasos medianos." / Automáticas: "accionamiento motorizado con botonera o mando, ideal para uso frecuente." — "Estas cubiertas evitan la evaporación y ayudan a mantener el calor, especialmente valiosas si combinamos con bomba de calor o cloración salina (el agua permanece más estable, con menos picos de desinfección)."
  - **Cubiertas base sólida** — "Para quienes priorizan estética, seguridad y máxima integración. Disponibles en varias configuraciones:" Con banco protector (automáticas elevadas): "un banco exterior (acabado PVC, madera o Solar Energy) protege el eje y las lamas; además, aporta asiento funcional junto a la piscina." / Sumergidas: "el rollo queda oculto bajo la lámina de agua, en foso o banqueta integrada. Resultado minimalista y libre de obstáculos visuales." / Automáticas: "apertura/cierre mediante motor sellado; opción de unidad de control conectada por bluetooth y conmutador con llave para seguridad." — Lamas disponibles: "PVC o policarbonato, en varios colores." "Lamas transparentes o solares: incrementan la temperatura del agua gracias a la captación de radiación." — "Las cubiertas base sólida son el complemento ideal de la bomba de calor en invierno: al reducir pérdidas térmicas, necesitarás menos horas de máquina para mantener la temperatura objetivo."
- **"Soluciones de cubiertas: seguridad, eficiencia y diseño a tu medida" (4 cards, verbatim):**
  - Cobertor de barras (seguridad y robustez) — "Clásico y resistente: barras de aluminio de 50 mm, anclajes inox/aluminio de 12 mm y refuerzos anti-abrasión. Apertura fácil (manual o motorizada), varios colores y perfecto para suelos porcelánicos. Recomendado para niños y mascotas por su excelente comportamiento ante cargas."
  - Cubiertas con enrollador (versatilidad diaria) — "Modelos manuales y automáticos que se adaptan a múltiples formas. Apertura/cierre en segundos, menos suciedad, menos evaporación y temperatura más estable con mínimo esfuerzo."
  - Automática con banco exterior (estética y practicidad) — "Sistema elevado con banco contenedor del eje; lamas de PVC o policarbonato (también solares) y acabados del banco en PVC, madera o Solar Energy. Opcional control bluetooth y llave. Suma asiento útil y mantiene la mecánica protegida y accesible."
  - Automática sumergida (integración total) — "Mecanismo oculto bajo el agua para un acabado minimalista. Lamas de PVC o policarbonato, transparentes o solares, con opciones de color y control bluetooth con llave. Ideal en obra nueva o reforma al poder prever foso e instalaciones."
- **"Proceso de trabajo: a medida y sin sorpresas" (5 steps, verbatim):** Visita técnica y asesoramiento — "Medimos el vaso, evaluamos coronación/entorno y sala técnica (cloración, pH/ORP, bomba de calor, automatización)." / Propuesta comparativa — "2–3 opciones con ventajas, plazos y precio cerrado." / Fabricación a medida — "Acabados y colores confirmados por escrito; planificación logística/obra." / Instalación limpia — "Perforaciones controladas, anclajes y sellados; pruebas funcionales con checklist y fotos." / Formación y soporte — "Uso, seguridad y mantenimiento; garantías y manuales, con revisiones opcionales (tensión de lonas, guías, lamas, motores y recalibración)."
- **"Zonas donde trabajamos":** "Ofrecemos cubiertas de piscinas con suministro e instalación en toda la Costa del Sol, con respuesta especialmente ágil en Mijas Costa y Marbella. Nuestro equipo técnico planifica rutas por áreas para reducir tiempos de espera y garantizar un servicio cercano, tanto para viviendas particulares como para comunidades y hoteles." + 18-town list.
- **"Por qué Infinity Brand" (5 bullets, verbatim):** "Especialistas integrales: mantenimiento, servicio técnico, tienda e instalación de cubiertas." / "Asesoramiento honesto: priorizamos seguridad, ahorro y experiencia de uso." / "Diseño y montaje profesional: a medida, limpio y documentado." / "Materiales verificados: aluminio anodizado, inox, lamas con protección UV y tejidos reforzados." / "Soporte continuo: repuestos, revisiones y optimización de sala técnica."
- **FAQ (6 Q&A, verbatim):**
  - "¿Qué cubierta es más adecuada para mi piscina?" → "Depende del uso, el entorno, el tamaño y el presupuesto. Si priorizas seguridad, el cobertor de barras o una automática de lamas con cierre seguro son grandes opciones. Para estética mínima, la sumergida es imbatible. Te asesoramos en la visita sin compromiso."
  - "¿La instalación está incluida?" → "Sí, todas nuestras cubiertas se realizan a medida de tu piscina con la instalación incluida y garantías."
  - "¿Cuánto sube la temperatura con lamas solares o manta de burbujas?" → "Según época y exposición, puede subir entre 3 y 8 °C. Combinado con bomba de calor, la estabilidad térmica es aún mayor."
  - "¿Se puede instalar en suelos porcelánicos?" → "Sí. El cobertor de barras es ideal para suelos porcelánicos por su sistema de anclaje y reparto de cargas. Estudiamos tu pavimento para elegir la fijación idónea."
  - "¿Puedo abrir y cerrar con facilidad?" → "Sí. Los enrolladores simplifican el manejo de mantas térmicas; las automáticas de lamas se accionan con botón y opción de bluetooth y llave."
  - "¿Y si mi piscina tiene forma irregular?" → "Hay soluciones a medida para formas libres; no obstante, las automáticas funcionan mejor en vasos regulares. Te propondremos la alternativa fiable para tu geometría."
- **Closing "Pide tu presupuesto":** "Cuéntanos cómo usas tu piscina y te prepararemos una propuesta comparativa con 2–3 modelos de cubiertas de piscinas (manual, con enrollador, base sólida con banco, sumergida, etc.), ventajas concretas, opciones de seguridad para niños y mascotas, plazos y precio cerrado."
- **Images:** `Cubiertas-Piscinas-3.jpg`, `Cubiertas-Piscinas-4.jpg`, `Cubiertas-Piscinas-7.jpg`, `Cubiertas-piscinas-8.jpg`, `cubierta-cover-marbella-costa-del-sol-company1.png`, `cubierta-cover-marbella-costa-del-sol-empresa1.png`, map SVG.

---

### 7.7 OTHER SERVICES — `/other-services/`
- **Title:** `Other Services - Marbella Pool Service`
- **Language:** English (one Spanish sub-heading "¿Dónde trabajamos?")
- **H1:** "Other Services"; **H2:** "Other products and services we offer at Marbella Pool Service"
- **Intro (verbatim):** "We supply water for filling swimming pools and chemicals for their maintenance in private homes and residential complexes. For information on prices and minimum order quantities, please contact us by email or WhatsApp."
- **Service 1 — "Supply of chlorine (bottles or tank)":** "Chlorine delivery service in bottles or in bulk via tanker, depending on annual consumption. Includes planning, safety and product traceability." Image: `suministro-de-cloro.jpg`. CTA "Learn more" → `/contact/`.
- **Service 2 — "Water supply":** "We arrange for tanker lorries to carry out initial filling or seasonal top-ups. We check the quality, balance the chemical composition and optimise the commissioning process." Image: `suministro-de-agua.jpg`. CTA "Learn more" → `/contacto/` (**404**).
- **"What else do we offer you?" (verbatim):**
  - Honest, personalized advice — "We analyse your pool, how you use it and your budget to recommend only what you need. We prioritise the best value for money, with no unnecessary extras."
  - Full technical integration — "We coordinate the installation of salt chlorinators, heat pumps, pool covers, liners and mosaic tiles with your pool equipment room. We deliver everything fully calibrated (pH/ORP, flow rates, temperature) and with full documentation."
  - High-quality materials and professional installation — "We work with trusted manufacturers and use fixings suitable for porcelain tiles or stone. We carry out a clean installation using our own equipment, conduct final checks and provide written guarantees."
  - Maintenance and spare parts — "We offer preventive maintenance plans and the supply of consumables (chlorine in bottles or tanks, water for refilling). We make seasonal adjustments to reduce consumption and the risk of breakdowns."
  - Coverage and response times — "We cover the entire Costa del Sol, with a focus on Mijas Costa and Marbella. We'll arrange a quick site visit and send you a clear quote with realistic deadlines."
- **"Ready to optimise your swimming pool?" (verbatim):** "Tell us what you need and we'll put together a clear, straightforward and prompt proposal for you. We'll start with a quick phone call to understand your situation, arrange a site visit if necessary, and send you a comparison of options based on cost and benefits. We'll carry out the installation using our own team, ensure everything is up and running, and provide you with basic training for day-to-day use." CTA "Request a quote" → `/contact/`.
- No pricing, no FAQ, no counters on this page.

---

### 7.8 ABOUT — `/about-us/`
- **Title:** `About us - Marbella Pool Service`
- **Language:** Spanish
- **H1:** "Sobre Nosotros"
- **"Quiénes somos" (verbatim):** "Somos Infinity Brand, especialistas integrales en piscinas en la Costa del Sol. Nacimos con una idea muy simple: que cuidar una piscina sea fácil, transparente y eficiente. Hoy atendemos villas y comunidades en toda la Costa del Sol — con especial presencia en Mijas Costa, Marbella y Estepona — y combinamos el trabajo técnico diario con una tienda física situada en Calahonda, donde solo ofrecemos productos que sabemos, por experiencia, que funcionan. No somos una centralita que subcontrata. Somos equipo propio: técnicos de mantenimiento, especialistas en salas de máquinas, asesores de productos y personal de obra y reforma. Nos mueve el servicio bien hecho y medible, con presupuestos claros y seguimiento continuo."
  - Key business facts: **physical shop in Calahonda**; in-house team of maintenance techs, plant-room specialists, product advisers, building/renovation crew; no subcontracting.
- **"¿Dónde trabajamos?":** "Intervenimos en toda la Costa del Sol, con especial presencia en Mijas Costa. También trabajamos en Fuengirola, Marbella, Benalmádena, Torremolinos, Estepona y Málaga capital." + 18-town list.
- **"Valores que nos definen" (5 values, verbatim):**
  - Transparencia — "Diagnósticos con fotos y datos medibles; presupuestos sin letra pequeña."
  - Eficiencia real — "Proponemos cambios que impactan en consumo eléctrico, estabilidad del agua y vida útil de equipos."
  - Seguridad — "Protocolos de trabajo, EPI, productos y repuestos originales."
  - Cuidado del entorno — "Dosificación responsable, optimización de horas de filtración y fomento de tecnologías de bajo consumo (bombas de velocidad variable, LED, cubiertas y climatización eficiente)."
  - Compromiso local — "Respuesta ágil en Mijas Costa y cobertura en toda la Costa del Sol."
- **FAQ (4 Q&A, verbatim):**
  - "¿Trabajáis con particulares, comunidades y hoteles?" → "Sí. Ajustamos planes y protocolos a cada caso, incluida la comunicación con administradores y auditorías en entornos turísticos."
  - "¿Qué ocurre si detectáis una avería durante el mantenimiento?" → "La documentamos, te mandamos diagnóstico con opciones y presupuesto cerrado. Si aceptas, nuestro servicio técnico interviene sin demoras."
  - "¿Podéis mejorar el consumo y la estabilidad del agua?" → "Sí. Rediseñamos la curva de funcionamiento de la sala técnica: bombas de velocidad variable, ciclos de filtración óptimos, hidráulica equilibrada y automatización de pH/ORP. Resultado: menos consumo, más estabilidad."
  - "¿Dáis cobertura fuera de Mijas Costa?" → "Sí, en toda la Costa del Sol. Consulta disponibilidad para otras zonas."
- **NO founding year, NO named team members, NO certifications, NO photos of the team** — only stock-style images `Sobre-Nosotros-2.jpg`, `Sobre-Nosotros-Infinity-Brand-3.jpg`.

---

### 7.9 CONTACT — `/contact/`
- **Title:** `Contact - Marbella Pool Service`
- **Language:** English
- **Headings:** "Contact" / "Let's work together!" / "Telephone numbers" / "Address" / "Email" / "Request information with no obligation"
- **Contact blocks:** phones +34 625 111 172 and +34 951 388 794; address (§4); email **info@infinitybrand.es** (this is the ONLY page displaying the email visibly).
- **FORM — Contact Form 7 (ID 377, v6.1.7, locale es_ES, action `/contact/#wpcf7-f377-p368-o1`):**
  | Field | name | Type | Required | Placeholder/label |
  |---|---|---|---|---|
  | Name | `your-name` | text | yes | "Name" |
  | Phone | `your-phone` | tel | yes | "Phone*" |
  | City/Town | `poblacion` | text | yes | "City / Town" |
  | Email | `your-email` | email | yes | "Email*" |
  | Service | `servicio` | select | no | "Which service are you interested in?" — options: Pool Cleaning & Maintenance / Technical Support & Repairs / Pool Renovations & Remodeling / Products & Shop |
  | Message | `mensaje` | textarea | yes | "Message*" |
  | Privacy | `privacy` | checkbox | — | "I read and accept the privacy policy" |
  | Submit | — | submit | — | button text **"Send"** |
- **Other CTAs:** "Would you prefer more direct contact?" (→ WhatsApp/tel), standard pre-footer banner.

---

### 7.10 SHOP — `/shop/`
- **Title:** `Shop - Marbella Pool Service`; H1 "Shop"
- **Platform:** WooCommerce 11.1.0, JetWooBuilder product template exists (`?jet-woo-builder=plantilla-productos`), cart/checkout/my-account pages exist.
- **State: EMPTY.** Message shown (Spanish, on an English page): **"No se han encontrado productos que coincidan con tu selección."** No products, no categories, no prices anywhere.
- Shop-related images uploaded (from jet-woo sitemap): `pago-seguro-redsys.png` (Redsys secure payment badge), `pago-seguro-1.png`, `clorador-salino-prueba.jpg` (salt chlorinator test product), `clorador-salino-1.jpg`, `filtro-1920w.jpg` (filter).
- All site-wide "shop" buttons ("Discover our shop", "Conoce nuestra tienda", "Online shop") bypass this page and link to Google Business Profile short-links: `https://share.google/lv6kuyWMbaopqrShI`, `pqFTHbRjmlCnxmPfo`, `i1TuYU4pBcYPVaVZK`, `KCap0QyoZzUr1PRb4`, `1xhw5uVCTLU5Pbuau` → all resolve to the Google listing "Marbella pool service - Pool Maintenance" (kgmid `/g/11zbqly7qf`). Footer "Online Shop" → `/tienda/` (**404**).
- Physical shop (per about page): store in Calahonda, at the LIDL shopping centre premises.

---

### 7.11 BLOG INDEX — `/blog/`
- **Title:** `Blog - Marbella Pool Service`; H1 "Blog"; intro "Nuestras últimas entradas" (Spanish heading, English posts).
- 30 posts, single view, no pagination controls observed. Categories: `blog`, `sin-categoria`.

### 7.12 WELCOME POST — `/bienvenidos/` (20/10/2025, Spanish)
- **H1:** "Bienvenidos a Infinity Brand: tu empresa de piscinas en la Costa del Sol"
- Sections (all verbatim in crawl): "Mucho más que mantenimiento: cuidamos, reparamos y revalorizamos tu piscina" — intro: "En Infinity Brand hacemos que disfrutar de tu piscina sea sencillo, seguro y eficiente. Atendemos a particulares, comunidades y hoteles en toda la Costa del Sol —con especial presencia en Mijas Costa y Marbella— ofreciendo mantenimiento integral, servicio técnico, construcción y reformas, además de una tienda online de productos que funcionan de verdad. Nuestro objetivo: agua cristalina todo el año y una experiencia sin sobresaltos."
- "¿Por qué elegirnos?": Equipo propio y presupuestos claros ("Trabajamos con técnicos de la casa, protocolos transparentes y propuestas comparativas para que tomes decisiones con seguridad.") / Eficiencia y seguridad ante todo ("Ajustamos química, caudales y horarios para reducir consumo, alargar la vida útil de los equipos y mantener la piscina lista para el baño.") / Cercanía y rapidez ("Respondemos con agilidad en Mijas Costa y el resto de la Costa del Sol, priorizando urgencias y garantizando una comunicación fluida.")
- "Nuestros servicios principales": Limpieza y mantenimiento ("Planes a medida con visitas programadas, checklists claros y revisiones de bomba, filtro, válvulas y cableado. Incluimos equilibrio químico, limpieza de superficie, cestas y fondo, y reportes con fotos y próximas acciones. El resultado: prevención de averías y ahorro a medio plazo.") / Servicio técnico y reparaciones ("Diagnosticamos in situ y reparamos bombas, filtros, fugas y cuadros eléctricos; optimizamos salas de máquinas, instalamos cloración salina, automatización y control remoto, e iluminamos tu piscina con soluciones modernas y eficientes.") / Construcción y reformas ("Desde obra nueva en hormigón hasta rehabilitaciones con lámina armada, coronaciones antideslizantes, escaleras integradas y zonas de relax. También incorporamos cubiertas, climatización y sistemas de última generación para revalorizar tu espacio exterior.") / Cubiertas y soluciones contra fugas ("Protege tu piscina y alarga la temporada con cubiertas adaptadas; si detectas pérdidas, localizamos y solucionamos fugas para recuperar estanqueidad y eficiencia.")
- "¿Para quién trabajamos?": Viviendas particulares ("Comodidad y tranquilidad: nos encargamos de todo para que solo te preocupes de disfrutar.") / Comunidades de propietarios ("Protocolos claros, partes de trabajo y coordinación con administradores para mantener zonas comunes impecables y seguras.") / Hoteles y alquiler vacacional ("Disponibilidad, rapidez y cumplimiento normativo para que tu negocio no se detenga.")
- "Cómo trabajamos en 5 pasos": Contacto inicial / Visita técnica-diagnóstico / Propuesta clara / Ejecución y puesta a punto / Mantenimiento y soporte.
- "Frecuencia de mantenimiento (orientativa)": "Temporada alta: visitas semanales. Temporada baja: quincenal o mensual según condiciones. Tras tratamientos químicos: normalmente 24 h antes del baño, una vez estabilizados los niveles. Nota: ajustamos el plan a tu caso concreto tras la visita técnica."
- "Señales de que necesitas una revisión": "Turbidez o pérdida de brillo del agua. / Consumo eléctrico inusual o ruidos en la bomba. / Dificultad para mantener niveles de pH y desinfectante. / Manchas, pérdidas de nivel o filtraciones visibles."
- "Tienda online: productos que recomendamos porque los usamos": "Seleccionamos equipamiento y químicos que empleamos en nuestro día a día: desde robots limpiafondos y medios filtrantes hasta sistemas de dosificación y cloración. Te asesoramos antes y después de la compra para que aciertes a la primera."
- Sign-off: "Infinity Brand — Todo lo que tu piscina necesita, en una sola empresa."
- Image: `bienvenidos-blog.jpg`.

### 7.13 LEGAL PAGES
- **`/privacy-policy/`** — H1 "Política de Privacidad" (Spanish body; opening line in English). Data controller: "INFINITY Concepts 2000 S.L., with Tax Identification Number (NIF) B93727287 and a registered address for notification purposes at C/ Juan de la Cierva, Unit 9, Lidl Shopping Centre, Mijas (29649), Málaga, Spain. For any queries or suggestions, please contact us by email at: info@infinitybrand.es"
- **`/terms-conditions/`** — H1 "Terms and Conditions", body Spanish, e-commerce oriented: 23 numbered sections (1. Identificación del titular del sitio … 22. Ley aplicable y jurisdicción, 23. Idioma) + "Anexo I — Formulario de desistimiento (solo consumidores)". Covers purchase process, Redsys-style card payment ("no almacena los datos completos de las tarjetas de pago"), shipping, 14-day withdrawal right, warranties, coupons/gift cards.
- **`/cookie-policy/`** — H1 "Política de Cookies" (Spanish).

### 7.14 `/en/` — stub
Returns 200, `<title>Marbella Pool Service</title>`, schema.org/Blog body with no posts/content. It is the hreflang="en" target but is effectively empty. No language switcher exists anywhere in the UI.

---

## 8. CONVERSION PATHWAYS (as-built)

1. **Phone-first:** header button + repeated tel CTAs → `tel:+34625111172` (works everywhere).
2. **WhatsApp:** Joinchat floating button + "Talk to our experts"/"¿Hablamos?" → `https://wa.me/+34625111172` (works).
3. **Quote form:** CTAs → `/contact/` (works) **or `/contacto/` (404 — roughly half of all quote buttons are broken, including every "Solicitar Presupuesto" on the Spanish service pages and the homepage "Request a Quote")**. Form submits via CF7 (presumably to site email; recipient not exposed in markup).
4. **Shop:** all shop CTAs → Google Business Profile short-links (works but leaves the site); on-site `/shop/` is empty; footer `/tienda/` 404.
5. **Email:** only on `/contact/` page.

## 8b. DEFECT LOG (verbatim, for the redesign punch-list)
- Nav typos: "Maintenace", "Poll Covers".
- Homepage `<title>`: "Ramair" (typo for Repair); title mentions neither Infinity Brand nor a clean brand phrase.
- 8+ internal link targets 404 (see §5) — hero buttons, footer services, most Spanish CTAs.
- Empty WooCommerce shop with Spanish empty-state on English page.
- Homepage FAQ + "// Recent Projects" sections effectively empty ("// Recent Projects" comment-style label visible to users).
- Counters render "+0" until JS animates (screenshot crawlers and slow devices see "+0"); real values +20/+3500/+5/+2500.
- Mixed EN/ES within single pages (maintenance page EN top, ES bottom; blog index Spanish heading, English posts; shop EN with ES empty state; legal pages EN titles, ES bodies).
- hreflang declares an English site that does not exist (`/en/` empty stub) — SEO issue.
- Leak page grammar: "La fugas y pérdidas…"; truncated step title "Visita técnica y test a medi".
- Image filename typos: "Inifnity-Pool-…", "…technicial-service…".
- Facebook link points to `facebook.com/malaga.25/` (not a branded page).
- Blog post `<title>` tags are broken: they show only the date, e.g. `01/05/2026 Marbella Pool Service` (no post title) — every one of the 29 posts.
- Post `hotel-pool-maintenance-services` shows on-page date "16 septiembre 2026" (future date vs listing date 16/04/2026).

---

## 9. BLOG POST INVENTORY (29 English SEO posts + 1 Spanish welcome post)

All posts share one template: featured image (webp, 2026/04 or 2026/05 uploads), H1 = post title, ~8-9 H2 sections, "Tabla de contenidos", ~1,500-2,500 words, Spanish UI labels ("Leer más »"). `<title>` tags are broken (date-only). Verbatim titles, dates and meta descriptions:

| # | Slug | H1 (verbatim) | Date | Meta description (verbatim) |
|---|---|---|---|---|
| 1 | /choosing-pool-builders-mijas-costa-can-trust/ | Choosing Pool Builders Mijas Costa Can Trust | 18/05/2026 | Need pool builders Mijas Costa owners can trust? Learn what to check before building, renovating, or upgrading a pool for long-term value. |
| 2 | /how-to-winterize-a-pool-properly/ | How to Winterize a Pool Properly | 16/05/2026 | Learn how to winterize a pool properly with the right steps, water balance, equipment prep, and cover protection to avoid damage and spring repairs. |
| 3 | /best-pool-upgrades-for-energy-savings/ | 9 Best Pool Upgrades for Energy Savings | 12/05/2026 | Discover the best pool upgrades for energy savings, from variable-speed pumps to covers and heaters that cut costs and improve efficiency. |
| 4 | /pool-maintenance-marbella-villas/ | Pool Maintenance for Marbella Villas | 10/05/2026 | Pool maintenance Marbella villas need should protect water quality, equipment, and property value with clear schedules, fast repairs, and control. |
| 5 | /saltwater-pool-vs-chlorine/ | Saltwater Pool vs Chlorine: Which Fits Best? | 08/05/2026 | Saltwater pool vs chlorine: compare cost, maintenance, comfort, and equipment needs to choose the right system for your pool and budget. |
| 6 | /how-to-improve-pool-water-circulation/ | How to Improve Pool Water Circulation | 06/05/2026 | Learn how to improve pool water circulation with practical fixes for pumps, returns, filters, and run times to keep water cleaner longer. |
| 7 | /when-should-a-pool-be-resurfaced/ | When Should a Pool Be Resurfaced? | 05/05/2026 | Learn when should a pool be resurfaced, which warning signs matter most, and how timing affects cost, safety, leaks, and long-term pool performance. |
| 8 | /how-to-choose-pool-maintenance-plans/ | How to Choose Pool Maintenance Plans | 04/05/2026 | Learn how to choose pool maintenance plans based on usage, equipment, water quality, and service scope so you avoid hidden costs and downtime. |
| 9 | /best-energy-efficient-pool-equipment/ | Best Energy Efficient Pool Equipment | 03/05/2026 | Learn how energy efficient pool equipment cuts power use, lowers costs, and improves pool performance with smarter pumps, heaters, and controls. |
| 10 | /pool-plant-room-optimization-cuts-costs/ | Pool Plant Room Optimization That Cuts Costs | 02/05/2026 | Pool plant room optimization lowers energy use, reduces breakdowns, and improves water quality with smarter layout, controls, and maintenance. |
| 11 | /automatic-pool-cover-installation-guide/ | Automatic Pool Cover Installation Guide | 01/05/2026 | Automatic pool cover installation improves safety, heat retention, and pool efficiency. Learn what the job involves and how to plan it well. |
| 12 | /best-pool-heating-system-for-your-pool/ | Best Pool Heating System for Your Pool | 30/04/2026 | Find the best pool heating system for your pool. Compare heat pumps, gas, solar, and hybrid options by cost, speed, climate, and usage. |
| 13 | /pool-automation-system-installation-guide/ | Pool Automation System Installation Guide | 29/04/2026 | Pool automation system installation helps control pumps, lighting, heating, and water quality with better efficiency, safety, and daily convenience. |
| 14 | /choosing-professional-pool-cleaning-products/ | Choosing Professional Pool Cleaning Products | 28/04/2026 | Learn how to choose professional pool cleaning products for safer water, cleaner surfaces, lower operating costs, and more reliable pool care. |
| 15 | /heat-pump-for-your-swimming-pool/ | Heat Pump for Your Swimming Pool: Is It Worth It? | 27/04/2026 | Thinking about a heat pump for your swimming pool? Learn costs, sizing, efficiency, and when it makes sense for homes, hotels, and communities. |
| 16 | /pool-safety-compliance-checklist/ | Pool Safety Compliance Checklist That Works | 26/04/2026 | Use this pool safety compliance checklist to reduce risk, document inspections, and keep residential or commercial pools safer year-round. |
| 17 | /why-is-my-pool-water-cloudy/ | Why Is My Pool Water Cloudy? | 25/04/2026 | Why is my pool water cloudy? Learn the most common causes, what to check first, and how to clear cloudy pool water safely and fast. |
| 18 | /pool-chemical-balance-guide-clear-water/ | Pool Chemical Balance Guide for Clear Water | 24/04/2026 | A practical pool chemical balance guide to keep water clear, safe, and efficient. Learn target levels, common issues, and when to act fast. |
| 19 | /choosing-new-pool-construction-company/ | Choosing a New Pool Construction Company | 23/04/2026 | Learn how to choose a new pool construction company with clear budgets, smart design, technical planning, and long-term cost control. |
| 20 | /how-much-does-pool-renovation-cost/ | How Much Does Pool Renovation Cost? | 22/04/2026 | How much does pool renovation cost? See real price ranges, key cost drivers, and what affects budgets for resurfacing, equipment, and upgrades. |
| 21 | /choose-pool-renovation-company/ | How to Choose a Pool Renovation Company | 21/04/2026 | Need a reliable pool renovation company? Learn what to check, what affects cost, and how to choose a team that delivers clear results. |
| 22 | /swimming-pool-leak-detection-service-guide/ | Swimming Pool Leak Detection Service Guide | 20/04/2026 | Learn how a swimming pool leak detection service finds hidden leaks, limits damage, and helps pool owners reduce water loss and repair costs. |
| 23 | /how-to-detect-pool-leaks-before-costs-rise/ | How to Detect Pool Leaks Before Costs Rise | 19/04/2026 | Learn how to detect pool leaks early with simple checks, the bucket test, and clear signs that point to plumbing, shell, or equipment issues. |
| 24 | /pool-filter-not-working-what-to-check-first/ | Pool Filter Not Working? What to Check First | 18/04/2026 | Pool filter not working? Learn the most common causes, what to check first, and when a fast professional repair can prevent bigger damage. |
| 25 | /pool-pump-repair-service-fix-or-replace/ | Pool Pump Repair Service: Fix or Replace? | 17/04/2026 | Need pool pump repair service? Learn the warning signs, repair options, replacement triggers, and how to avoid repeat failures and costs. |
| 26 | /hotel-pool-maintenance-services/ | Hotel Pool Maintenance Services That Prevent Issues | 16/04/2026 (page shows "16 septiembre 2026") | Hotel pool maintenance services help prevent downtime, control costs, and keep water safe, clear, and guest-ready all season long. |
| 27 | /pool-service-for-communities/ | Pool Service for Communities That Works | 15/04/2026 | Reliable pool service for communities improves safety, lowers costs, and keeps shared pools clean, compliant, and ready for daily use. |
| 28 | /weekly-pool-maintenance-service/ | Weekly Pool Maintenance Service That Pays Off | 14/04/2026 | A weekly pool maintenance service keeps water safe, equipment efficient, and costs under control for homes, communities, and hotels. |
| 29 | /pool-maintenance-company-costa-del-sol/ | Pool Maintenance Company Costa del Sol | 13/04/2026 | Need a pool maintenance company Costa del Sol owners can trust? Learn what to expect from service, repairs, diagnostics, and long-term care. |
| 30 | /bienvenidos/ | Bienvenidos a Infinity Brand: tu empresa de piscinas en la Costa del Sol | 20/10/2025 | (see §7.12 — Spanish welcome post) |

Sample post H2 structure (how-to-winterize-a-pool-properly, representative of all 29): "How to winterize a pool properly starts with the right timing / Start with a full cleaning and inspection / Balance the water before closing / Lower the water only if your pool setup requires it / Protect the plumbing and equipment / Use the right winter chemicals, not just more chemicals / Covering the pool is part of the protection plan / Mid-winter checks still matter / Mistakes that make spring opening harder".

---

## 10. IMAGE ASSETS

Every unique canonical image URL found on the live site (size-variant suffixes stripped; originals). One per line with description. All are directly downloadable.

### Brand
- https://marbellapoolservice.com/wp-content/uploads/2025/10/favicon-infinity-brand.png — Infinity Brand logo / favicon (also served at -80x80)

### Hero / section banners (photography)
- https://marbellapoolservice.com/wp-content/uploads/2025/10/mantenimiento-piscinas-banner.jpg — homepage maintenance banner (pool photo)
- https://marbellapoolservice.com/wp-content/uploads/2025/10/banner-serv-tecnico.jpg — technical-service banner
- https://marbellapoolservice.com/wp-content/uploads/2025/10/banner-ref-const.jpg — renovation/construction banner
- https://marbellapoolservice.com/wp-content/uploads/2025/10/tienda-online-banner.jpg — online shop banner
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Inifnity-Pool-Limpieza-y-Mantenimiento-Header-3.jpg — maintenance page header (filename typo "Inifnity" is live)
- https://marbellapoolservice.com/wp-content/uploads/2025/10/gal-01-1.jpg — homepage "Recent Projects" gallery photo

### Maintenance / water chemistry
- https://marbellapoolservice.com/wp-content/uploads/2026/05/mantenimiento-costa-del-sol-piscinas-maintenance1.png — pool maintenance visual (maintenance page)
- https://marbellapoolservice.com/wp-content/uploads/2026/05/maintenance-costa-sol-pool-marbella1.png — pool maintenance visual 2
- https://marbellapoolservice.com/wp-content/uploads/2026/05/analisis-quimicos-piscinas-pool1.png — water chemical analysis visual

### Technical service / plant room
- https://marbellapoolservice.com/wp-content/uploads/2026/05/Servicio-tecnico-piscinas-pool-technicial-service-mijas-marbella1.png — technician servicing pool equipment
- https://marbellapoolservice.com/wp-content/uploads/2026/05/filtro-motor-bomba-piscina-tienda-calahonda-marbella-costa-del-sol1.png — pool filter/pump/motor equipment

### Construction / renovation / regrouting (real-work photos)
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Construccion-Reformas-Piscinas-1.jpg — construction/renovation photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Construccion-reformas-piscinas.jpg — construction/renovation photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Construccion-y-Reformas-de-Piscinas-1.jpg — construction/renovation photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Construccion-y-Reformas-de-Piscinas-5.jpg — construction/renovation photo (portrait)
- https://marbellapoolservice.com/wp-content/uploads/2026/04/lecheos-de-piscina-rejuntado-marbella-empresa.jpg — pool regrouting (rejuntado) work photo
- https://marbellapoolservice.com/wp-content/uploads/2026/05/rejuntado-lecheo-empresa-piscinas-profesional-marbella-mijas-calahonda21.png — regrouting work photo
- https://marbellapoolservice.com/wp-content/uploads/2026/05/trabajo-piscina-rejuntado-regrouting-cliente1.png — regrouting client-job photo
- https://marbellapoolservice.com/wp-content/uploads/2026/05/tiles-gresites-shop-costa-del-sol-calahonda-mijas1.png — gresite/mosaic tiles display

### Leak detection
- https://marbellapoolservice.com/wp-content/uploads/2025/10/fugas-piscinas.jpg — leak detection photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Fugas-piscinas-2.jpg — leak detection photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/fugas-piscinas-4.jpg — leak detection photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/fugas-piscinas-5.jpg — leak detection photo

### Pool covers
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Cubiertas-Piscinas-3.jpg — pool cover photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Cubiertas-Piscinas-4.jpg — pool cover photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Cubiertas-Piscinas-7.jpg — pool cover photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Cubiertas-piscinas-8.jpg — pool cover photo
- https://marbellapoolservice.com/wp-content/uploads/2026/05/cubierta-cover-marbella-costa-del-sol-company1.png — pool cover visual
- https://marbellapoolservice.com/wp-content/uploads/2026/05/cubierta-cover-marbella-costa-del-sol-empresa1.png — pool cover visual

### Other services / shop products
- https://marbellapoolservice.com/wp-content/uploads/2025/10/suministro-de-cloro.jpg — chlorine supply (bottles/tank)
- https://marbellapoolservice.com/wp-content/uploads/2025/10/suministro-de-agua.jpg — water supply by tanker
- https://marbellapoolservice.com/wp-content/uploads/2025/10/clorador-salino-1.jpg — salt chlorinator product photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/clorador-salino-prueba.jpg — salt chlorinator product photo (test)
- https://marbellapoolservice.com/wp-content/uploads/2025/10/filtro-1920w.jpg — pool filter product photo (1920w)
- https://marbellapoolservice.com/wp-content/uploads/2025/10/pago-seguro-redsys.png — Redsys secure-payment badge
- https://marbellapoolservice.com/wp-content/uploads/2025/10/pago-seguro-1.png — secure-payment badge

### About
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Sobre-Nosotros-2.jpg — about-us photo
- https://marbellapoolservice.com/wp-content/uploads/2025/10/Sobre-Nosotros-Infinity-Brand-3.jpg — about-us photo 2

### Icons / graphics (SVG)
- https://marbellapoolservice.com/wp-content/uploads/2025/10/limpieza-mant-piscinas-icon.svg — maintenance service icon
- https://marbellapoolservice.com/wp-content/uploads/2025/10/servicio-tecnico-icon.svg — technical service icon
- https://marbellapoolservice.com/wp-content/uploads/2025/10/ref-icon.svg — renovation service icon
- https://marbellapoolservice.com/wp-content/uploads/2025/10/mapa-trabajo-infinitybrand-malaga.svg — Málaga province service-area map graphic

### Blog featured images (webp, 1536px wide originals — stock/AI-style illustrative)
- https://marbellapoolservice.com/wp-content/uploads/2026/05/choosing-pool-builders-mijas-costa-can-trust-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/how-to-winterize-a-pool-properly-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/9-best-pool-upgrades-for-energy-savings-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/pool-maintenance-for-marbella-villas-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/saltwater-pool-vs-chlorine-which-fits-best-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/how-to-improve-pool-water-circulation-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/when-should-a-pool-be-resurfaced-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/how-to-choose-pool-maintenance-plans-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/best-energy-efficient-pool-equipment-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/pool-plant-room-optimization-that-cuts-costs-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/05/automatic-pool-cover-installation-guide-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/best-pool-heating-system-for-your-pool-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/pool-automation-system-installation-guide-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/choosing-professional-pool-cleaning-products-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/heat-pump-for-your-swimming-pool-is-it-worth-it-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/pool-safety-compliance-checklist-that-works-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/why-is-my-pool-water-cloudy-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/pool-chemical-balance-guide-for-clear-water-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/choosing-a-new-pool-construction-company-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/how-much-does-pool-renovation-cost-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/how-to-choose-a-pool-renovation-company-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/swimming-pool-leak-detection-service-guide-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/how-to-detect-pool-leaks-before-costs-rise-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/pool-filter-not-working-what-to-check-first-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/pool-pump-repair-service-fix-or-replace-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/hotel-pool-maintenance-services-that-prevent-issue-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/pool-service-for-communities-that-works-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/weekly-pool-maintenance-service-that-pays-off-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2026/04/pool-maintenance-company-costa-del-sol-featured.webp — post featured
- https://marbellapoolservice.com/wp-content/uploads/2025/10/bienvenidos-blog.jpg — welcome post featured

*(Remaining blog featured images follow the same `<slug>-featured.webp` pattern under /2026/04/ or /2026/05/.)*
