import type { ServiceSlug } from "@/lib/site";

/**
 * Full service-page content. Every claim, method and FAQ is drawn from
 * the business's published website copy (see docs/SITE_INVENTORY.md),
 * translated into consistent English where the source was Spanish.
 */

export type Faq = { q: string; a: string };
export type Step = { title: string; body: string };
export type Feature = { title: string; body: string };

export type ServiceContent = {
  slug: ServiceSlug;
  tone: "light" | "dark";
  heroLines: [string, string];
  accent: 0 | 1;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  includesTitle: string;
  includes: Feature[];
  method: Step[];
  methodTitle: string;
  faq: Faq[];
  gallery?: { src: string; alt: string; caption: string }[];
  closing: string;
};

export const serviceContent: Record<ServiceSlug, ServiceContent> = {
  "pool-maintenance": {
    slug: "pool-maintenance",
    tone: "light",
    heroLines: ["Clear water is the result of", "everything you don't see."],
    accent: 1,
    heroImage: "/images/services/maintenance.webp",
    heroImageAlt: "Pool being vacuumed during a scheduled maintenance visit on the Costa del Sol",
    metaTitle: "Pool Cleaning & Maintenance in Marbella & Mijas Costa",
    metaDescription:
      "Scheduled pool cleaning and maintenance across Marbella, Mijas Costa and the Costa del Sol: chemical balance, filtration, equipment checks and reports with photos.",
    intro:
      "Enjoying a clean, safe swimming pool all year round shouldn't be complicated. We take care of the complete cleaning and maintenance of pools in Mijas Costa — Calahonda, Riviera, La Cala — and the rest of the Costa del Sol, combining scheduled visits, precise chemical control and technical supervision of your equipment.",
    includesTitle: "What every maintenance plan includes",
    includes: [
      {
        title: "Complete pool cleaning",
        body: "Removal of leaves and debris, brushing of walls and waterline, vacuuming of the pool floor and cleaning of skimmers and baskets.",
      },
      {
        title: "Water balance",
        body: "Measurement and adjustment of pH, alkalinity, disinfectant — chlorine or salt chlorination — stabiliser, and shock treatments where necessary.",
      },
      {
        title: "Proper filtration",
        body: "Washing and rinsing of filters, pressure checks and valve inspection so the water turns over exactly as it should.",
      },
      {
        title: "Plant room in excellent condition",
        body: "Inspection of pumps, dosing units, electrical panels, lighting and watertightness on every visit.",
      },
      {
        title: "Clear checklists & reports",
        body: "Scheduled visits with checklists, and reports with photos, water values and recommended next steps.",
      },
      {
        title: "Preventive approach",
        body: "Problems caught before they grow — preventive maintenance that avoids breakdowns and saves money.",
      },
    ],
    methodTitle: "Our way of working",
    method: [
      { title: "Initial diagnosis", body: "We review the shell, lining, equipment and water quality." },
      { title: "Plan & clear quote", body: "Frequency, tasks and improvement recommendations, itemised." },
      { title: "Set-up", body: "Deep clean, water balancing and filtration adjustment." },
      { title: "Ongoing maintenance", body: "Scheduled visits with checklists and reports." },
      { title: "Year-round support", body: "Seasonal adjustments and rapid attention to incidents." },
    ],
    faq: [
      {
        q: "What does a maintenance visit include?",
        a: "Surface and floor cleaning, brushing of walls and waterline, chemical checks and adjustment, inspection of pump, filter and valves, filter washing when needed, and a report with values and next actions.",
      },
      {
        q: "Do you work with salt chlorination and automatic dosing?",
        a: "Yes. We calibrate pH/ORP, monitor salinity, clean the cell and verify alarms. If you need it, we install and configure the system.",
      },
      {
        q: "My water is cloudy or green — can you fix it?",
        a: "Yes. We carry out shock treatment, flocculation where appropriate, filter cleaning and rebalancing — and we investigate the causes, such as insufficient filtration, phosphates or high stabiliser.",
      },
      {
        q: "Do you do season opening and winterising?",
        a: "Yes. Opening: deep clean, shock treatment, level adjustment and safety checks. Winterising: cleaning, parameter adjustment, equipment protection and a winter protocol.",
      },
      {
        q: "Do you attend emergencies and breakdowns?",
        a: "Yes. We prioritise by severity and availability. Our technical service repairs pumps, filters, leaks, lighting, electrical panels and more.",
      },
      {
        q: "Do you use safe products?",
        a: "Yes. Leading brands and responsible dosing — chemicals stored and transported to the manufacturer's recommendations.",
      },
    ],
    closing:
      "Request a no-obligation maintenance plan — crystal-clear, safe water, ready to enjoy.",
  },

  "technical-service": {
    slug: "technical-service",
    tone: "dark",
    heroLines: ["Immediate repair.", "Sustainable performance."],
    accent: 1,
    heroImage: "/images/services/technical.webp",
    heroImageAlt: "New filtration pump and valve installation in a Costa del Sol plant room",
    metaTitle: "Pool Technical Service & Repairs on the Costa del Sol",
    metaDescription:
      "Pool repairs with on-site diagnosis: pumps, filters, salt chlorination, lighting, electrical panels and automation. Rapid response in Mijas Costa and Marbella.",
    intro:
      "We attend breakdowns of pumps, filters, leaks, salt chlorination, lighting and automation with on-site diagnosis and solutions oriented to energy saving. Our objective: minimal downtime, perfect water and costs under control — in Mijas Costa, Marbella and across the Costa del Sol.",
    includesTitle: "What our technical service includes",
    includes: [
      {
        title: "Advanced on-site diagnosis",
        body: "Pressure and flow measurements, water analysis, electrical inspection and hydraulic tracing.",
      },
      {
        title: "Repair & equipment replacement",
        body: "Single-speed and variable-speed pumps, sand and glass filters, valves, panels and IP68 LED lighting.",
      },
      {
        title: "Leak detection & repair",
        body: "Watertightness testing, pipe inspection, crack sealing and gasket replacement.",
      },
      {
        title: "Salt chlorination & dosing",
        body: "Installation, pH/ORP calibration, new cells and scheduled preventive maintenance.",
      },
      {
        title: "Automation & remote control",
        body: "Programmers, smart probes, app and Wi-Fi integration, and alerts for out-of-range parameters.",
      },
      {
        title: "Efficiency optimisation",
        body: "Schedule adjustment, correct backwashing, hydraulic balance and reduced electricity consumption.",
      },
    ],
    methodTitle: "Technical service protocol",
    method: [
      {
        title: "On-site assessment",
        body: "We record use and volume, check the shell and lining, measure flow and pressure, and analyse water parameters to find the origin of the fault.",
      },
      {
        title: "Intervention plan & quote",
        body: "Scope, parts and labour at a fixed price, staged schedule and cost–benefit alternatives — documented and approved in writing.",
      },
      {
        title: "Set-up & verification",
        body: "Technical cleaning, disinfection, chemical balancing and filtration adjustment — closed with electrical and hydraulic tests.",
      },
      {
        title: "Preventive maintenance",
        body: "Scheduled visits with checklist and photos, consumable checks and equipment calibration to avoid downtime.",
      },
      {
        title: "Continuous support",
        body: "Season opening and closing, weather adjustments, incident response in 24–48 h and parts supply.",
      },
    ],
    faq: [
      {
        q: "How soon can you come if I have a breakdown?",
        a: "In our main areas we usually attend within 24–48 hours; when there's a slot we handle same-day urgencies.",
      },
      {
        q: "Do you charge for the diagnosis if I accept the repair?",
        a: "The cost of the diagnosis is deducted from the total when we carry out the proposed solution.",
      },
      {
        q: "Can you work with my current brand of equipment?",
        a: "Yes. We are multi-brand and use original or high-quality compatible parts, with warranty.",
      },
      {
        q: "I want salt chlorination or automation — is it viable in my plant room?",
        a: "Usually yes. We assess space, flow and electrics, and size the cell, probe and control unit for your real volume.",
      },
      {
        q: "What guarantees do you include?",
        a: "Guaranteed workmanship and manufacturer warranties on new equipment — all in writing on the work order.",
      },
    ],
    gallery: [
      {
        src: "/images/services/technical.webp",
        alt: "Newly installed filter and pump in a pool plant room",
        caption: "New filtration installation · client project",
      },
      {
        src: "/images/work/plant-room-2.jpg",
        alt: "Organised pool plant room with filter, pump and pipework",
        caption: "Plant room after optimisation",
      },
      {
        src: "/images/work/water-testing.jpg",
        alt: "Water test strip being compared against reference values",
        caption: "Water chemistry verification",
      },
    ],
    closing:
      "Request your professional diagnosis and receive a clear quote — talk to a technician and enjoy your pool again without surprises.",
  },

  "construction-renovation": {
    slug: "construction-renovation",
    tone: "light",
    heroLines: ["Renovation that revalues", "your entire space."],
    accent: 1,
    heroImage: "/images/services/renovation.webp",
    heroImageAlt: "Completed pool renovation with new blue gresite mosaic on the Costa del Sol",
    metaTitle: "Pool Construction & Renovation in Marbella & Mijas Costa",
    metaDescription:
      "Complete pool renovation and new construction on the Costa del Sol: gresite and mosaic, waterproofing, regrouting, liners, LED lighting and efficient equipment.",
    intro:
      "We are specialists in pool renovation, offering durable, aesthetic and fully personalised solutions in Mijas Costa, Marbella and across the Costa del Sol. We renovate your pool so it looks new again — prioritising structure, watertightness and finishes for a solid shell with a contemporary look and simple maintenance.",
    includesTitle: "Construction & renovation services",
    includes: [
      {
        title: "New builds & rehabilitation",
        body: "Pools made to measure for your style and terrain; in renovations we improve watertightness, aesthetics and comfort.",
      },
      {
        title: "Gresite & mosaic replacement",
        body: "Complete removal of the old lining and installation of new gresite or mosaic, matched to the design you want.",
      },
      {
        title: "Professional regrouting",
        body: "Joints deteriorate with use, chemicals and temperature — regrouting fixes the mosaic securely, prevents detachment and avoids bigger repairs.",
      },
      {
        title: "Waterproofing of the shell",
        body: "Professional waterproofing systems that guarantee watertightness and prevent structural damage from leaks.",
      },
      {
        title: "Linings & reinforced membranes",
        body: "Renew the shell quickly and with guarantee: more watertightness and a modern finish.",
      },
      {
        title: "Steps, benches & relaxation areas",
        body: "Greater accessibility and comfort with wide steps, submerged benches and rest areas.",
      },
      {
        title: "LED lighting & modern chlorination",
        body: "Low-consumption LED and automated chlorination for healthy water and less maintenance.",
      },
      {
        title: "Skimmer replacement & equipment",
        body: "Replacement of cracked or under-performing skimmers, plus heating, covers and efficient plant-room upgrades.",
      },
    ],
    methodTitle: "Build & renovation methodology",
    method: [
      { title: "Assessment & objectives", body: "We measure, review the shell and equipment, and define the desired result." },
      { title: "Design & finishes", body: "Proposals for linings, copings, steps and lighting." },
      { title: "Quote & calendar", body: "Itemised costs, milestone deadlines and cost–benefit alternatives." },
      { title: "Execution & control", body: "Our own team, daily supervision, and watertightness and installation tests." },
      { title: "Commissioning", body: "Filling, chemical balancing, automation adjustment and a warranty dossier." },
    ],
    faq: [
      {
        q: "How long does a pool renovation take?",
        a: "Depending on scope: from 1–2 weeks for a lining or reinforced membrane to 4–6 weeks for civil works, coping and equipment.",
      },
      {
        q: "Can I use the pool after a treatment or renovation?",
        a: "Yes — we tell you the curing and chemical stabilisation time. For standard treatments it's usually between 24 and 72 hours.",
      },
      {
        q: "Do you work with private owners, communities and hotels?",
        a: "Yes. We adapt protocols, communication with administrators and availability for tourism environments.",
      },
      {
        q: "Do you include energy-efficiency advice?",
        a: "Of course. We recommend variable-speed pumps, automation and covers to reduce consumption and chemicals.",
      },
      {
        q: "Do you offer phased works or staged payments?",
        a: "We can plan by phases and offer milestone-based payment options — we review it in the proposal.",
      },
    ],
    gallery: [
      {
        src: "/images/work/regrouting-2.jpg",
        alt: "Freshly regrouted light-blue gresite with skimmer detail",
        caption: "Regrouted gresite · skimmer detail",
      },
      {
        src: "/images/work/regrouting-client.jpg",
        alt: "Renovated spa detail after regrouting",
        caption: "Regrouting & spa detail",
      },
      {
        src: "/images/work/mosaic-samples.jpg",
        alt: "Gresite and mosaic sample ranges",
        caption: "Mosaic ranges · our showroom",
      },
      {
        src: "/images/work/gresite-tiles.jpg",
        alt: "Gresite tile selection in the Calahonda shop",
        caption: "Finishes available in Calahonda",
      },
    ],
    closing: "Ready for a brand-new pool? Tell us about your project and we'll prepare a clear, itemised proposal.",
  },

  "leak-detection": {
    slug: "leak-detection",
    tone: "dark",
    heroLines: ["Losing water?", "We find out exactly where."],
    accent: 1,
    heroImage: "/images/services/leak.webp",
    heroImageAlt: "Diagnostic equipment tracing a pool floor during leak detection",
    metaTitle: "Pool Leak Detection on the Costa del Sol",
    metaDescription:
      "Precise pool leak detection in Marbella and Mijas Costa: pressure testing, tracer gas, professional diver inspection, dye tests and acoustic detection — with a written report and fixed-price repair quote.",
    intro:
      "Leaks and water loss are more common than they seem — left unattended they raise your bills, destabilise the water chemistry and can compromise the structure. We run leak tests adapted to each case, from pipe-only tests to complete tests with tracer gas and diver, with one clear objective: locate the exact point of loss and offer a definitive solution at a fixed price.",
    includesTitle: "Tests & methods we use",
    includes: [
      {
        title: "Pipe pressure testing",
        body: "We isolate lines — returns, skimmers, cleaner line, drain — and pressurise them to detect drops that reveal breaks, faulty joints or damaged valves.",
      },
      {
        title: "Tracer gas (high sensitivity)",
        body: "A safe gas mixture migrates to the leak point; with acoustic detection equipment we locate the exit even under paving or lawn, avoiding unnecessary excavation.",
      },
      {
        title: "Professional diver & dye testing",
        body: "A qualified diver inspects the shell, lights, niches, skimmer joints, main drain and nozzles; dye tests verify suction at microcracks and seals.",
      },
      {
        title: "Visual & acoustic inspection",
        body: "Endoscopic cameras and geophone/hydrophone listening distinguish leak vibrations in buried pipes or shell walls.",
      },
      {
        title: "Structural assessment",
        body: "We look for cracks in the concrete, movement at joints and watertightness problems in gresite, membrane or microcement linings.",
      },
    ],
    methodTitle: "Our diagnostic process",
    method: [
      { title: "Call & pre-diagnosis", body: "We gather symptoms, pool use and recent changes to equipment or linings." },
      { title: "Technical visit & tailored test", body: "We propose the right combination of tests — pipes only, or complete with tracer gas and diver." },
      { title: "Report & quote", body: "Results, probable location and a written repair quote. No surprises." },
      { title: "Repair & sealing", body: "Pipes, joints and fittings repaired; niches and skimmers resealed; concrete cracks treated." },
      { title: "Verification & set-up", body: "We repeat the test, rebalance the chemistry and optimise filtration schedules." },
    ],
    faq: [
      {
        q: "How do I know if it's evaporation or a leak?",
        a: "In summer moderate evaporation is normal — but if the drop requires frequent refills or continues on cool days, it's worth testing.",
      },
      {
        q: "Does the pool always have to be emptied?",
        a: "No. Most tests and repairs are carried out without emptying the shell, or with only a partial lowering of the level.",
      },
      {
        q: "How long does the diagnosis take?",
        a: "A standard test — pipes plus critical points — is usually completed in one session. If tracer gas and diver are needed, we schedule it within the same week.",
      },
    ],
    closing:
      "Tell us your case and we'll schedule a technical visit to define the right test — you'll receive a report and a quote with the recommended repair.",
  },

  "pool-covers": {
    slug: "pool-covers",
    tone: "light",
    heroLines: ["A longer season.", "A safer, cleaner pool."],
    accent: 1,
    heroImage: "/images/covers/drone.jpg",
    heroImageAlt: "Aerial view of a pool with an automatic slatted cover partially deployed",
    metaTitle: "Pool Covers on the Costa del Sol — Manual, Automatic & Submerged",
    metaDescription:
      "Made-to-measure pool covers in Marbella and Mijas Costa: thermal covers, safety covers for children and pets, roller systems, and automatic slatted covers with bench or submerged mechanisms. Installation included.",
    intro:
      "Covers extend the season, reduce evaporation and keep the water stable with less effort. We design, supply and install made-to-measure covers for villas, communities and hotels across the Costa del Sol — analysing how you really use your pool, its exposure to wind and sun, and the state of your plant room to propose the solution with the best return per euro invested.",
    includesTitle: "Our cover systems",
    includes: [
      {
        title: "Manual covers",
        body: "Thermal bubble covers that float on the water, reduce evaporation and raise the temperature in spring and autumn; elastic-fixing versions hold better tension in wind.",
      },
      {
        title: "Safety covers — children & pets",
        body: "Reinforced fabrics and perimeter anchors that limit access and prevent accidental falls; tear-proof materials designed to bear accidental weight.",
      },
      {
        title: "Roller-system covers",
        body: "Manual crank rollers for medium pools, or motorised versions with push-button or remote — opening and closing in seconds.",
      },
      {
        title: "Automatic slatted covers with bench",
        body: "An elevated system whose exterior bench — PVC, wood or solar finish — protects the axis and slats, and adds useful seating beside the pool.",
      },
      {
        title: "Submerged automatic covers",
        body: "The roller hidden below the waterline in a pit or integrated bench — a minimalist result, free of visual obstacles.",
      },
      {
        title: "Solar & polycarbonate slats",
        body: "PVC or polycarbonate slats in several colours; transparent or solar slats raise the water temperature by capturing radiation.",
      },
    ],
    methodTitle: "Made to measure, without surprises",
    method: [
      { title: "Technical visit", body: "We measure the shell, assess the coping and surroundings, and check the plant room." },
      { title: "Comparative proposal", body: "Two or three options with advantages, lead times and a fixed price." },
      { title: "Made-to-measure fabrication", body: "Finishes and colours confirmed in writing; logistics planned." },
      { title: "Clean installation", body: "Controlled drilling, anchors and seals; functional tests with checklist and photos." },
      { title: "Training & support", body: "Use, safety and maintenance; warranties and manuals, with optional revisions." },
    ],
    faq: [
      {
        q: "Which cover is right for my pool?",
        a: "It depends on use, surroundings, size and budget. For safety, a bar cover or an automatic slatted cover with secure closing are great options; for minimal aesthetics the submerged version is unbeatable. We advise you on a no-obligation visit.",
      },
      {
        q: "Is installation included?",
        a: "Yes — all our covers are made to measure for your pool, with installation included and written guarantees.",
      },
      {
        q: "How much does the temperature rise with solar slats or a bubble cover?",
        a: "Depending on season and exposure, between 3 and 8 °C. Combined with a heat pump, thermal stability is even greater.",
      },
      {
        q: "Can it be installed on porcelain paving?",
        a: "Yes. The bar cover is ideal for porcelain floors thanks to its anchoring and load distribution — we study your paving to choose the right fixing.",
      },
      {
        q: "What if my pool has an irregular shape?",
        a: "There are made-to-measure solutions for free forms; automatic covers work best on regular shells, and we'll propose the reliable alternative for your geometry.",
      },
    ],
    gallery: [
      {
        src: "/images/covers/rooftop-cover.jpg",
        alt: "Slatted pool cover installed on a rooftop pool overlooking Mijas",
        caption: "Slatted cover installation · Costa del Sol",
      },
      {
        src: "/images/covers/low-cover.jpg",
        alt: "Low-profile telescopic pool enclosure beside a pergola",
        caption: "Low telescopic enclosure",
      },
      {
        src: "/images/covers/enclosure-villa.jpg",
        alt: "Telescopic pool enclosure at a modern villa",
        caption: "Enclosure · modern villa",
      },
    ],
    closing:
      "Tell us how you use your pool and we'll prepare a comparative proposal with 2–3 cover models, concrete advantages, child and pet safety options, lead times and a fixed price.",
  },

  "additional-services": {
    slug: "additional-services",
    tone: "light",
    heroLines: ["Everything else", "your pool might need."],
    accent: 1,
    heroImage: "/images/services/additional.jpg",
    heroImageAlt: "Professional pool chemicals ready for delivery at the Calahonda shop",
    metaTitle: "Chlorine Supply & Pool Water Delivery on the Costa del Sol",
    metaDescription:
      "Chlorine supply in bottles or bulk by tanker, pool water delivery for fills and top-ups, and full technical integration — for private homes and residential complexes on the Costa del Sol.",
    intro:
      "We supply water for filling swimming pools and chemicals for their maintenance in private homes and residential complexes. For information on prices and minimum order quantities, contact us by email or WhatsApp.",
    includesTitle: "Supply & support services",
    includes: [
      {
        title: "Chlorine supply — bottles or tanker",
        body: "Chlorine delivery in bottles or in bulk via tanker, depending on annual consumption. Includes planning, safety and product traceability.",
      },
      {
        title: "Pool water delivery",
        body: "Tanker lorries for initial filling or seasonal top-ups. We check quality, balance the chemistry and optimise commissioning.",
      },
      {
        title: "Honest, personalised advice",
        body: "We analyse your pool, how you use it and your budget to recommend only what you need — best value, no unnecessary extras.",
      },
      {
        title: "Full technical integration",
        body: "Salt chlorinators, heat pumps, covers, liners and mosaic coordinated with your plant room — delivered calibrated and documented.",
      },
      {
        title: "Quality materials & clean installation",
        body: "Trusted manufacturers, fixings suited to porcelain or stone, final checks and written guarantees.",
      },
      {
        title: "Maintenance & spare parts",
        body: "Preventive plans and consumables — chlorine and refill water — with seasonal adjustments that reduce consumption and breakdown risk.",
      },
    ],
    methodTitle: "How an order works",
    method: [
      { title: "Quick call", body: "We understand your situation and what your installation needs." },
      { title: "Site visit if needed", body: "We check access, volumes and the plant room." },
      { title: "Comparison of options", body: "Clear costs and benefits, with realistic deadlines." },
      { title: "Delivery & installation", body: "Our own team carries out the work and verifies everything runs." },
      { title: "Basic training", body: "We show you the day-to-day essentials before we leave." },
    ],
    faq: [
      {
        q: "Do you deliver to communities as well as private homes?",
        a: "Yes — we serve private homes and residential complexes, with planning adapted to each installation.",
      },
      {
        q: "How do I get prices and minimum quantities?",
        a: "Contact us by email or WhatsApp and we'll send you current prices and minimum order quantities.",
      },
    ],
    closing:
      "Tell us what you need and we'll put together a clear, straightforward and prompt proposal.",
  },
};
