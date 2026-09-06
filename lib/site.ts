/**
 * Canonical business data for Marbella Pool Service / Infinity Pool Brand.
 * Every fact here must be traceable to the live business website.
 * See docs/SITE_INVENTORY.md for the source inventory.
 */

export const SITE_URL = "https://marbellapoolservice.com";

export const contact = {
  companyName: "Marbella Pool Service",
  parentBrand: "Infinity Brand",
  phones: [
    { display: "+34 625 111 172", tel: "tel:+34625111172" },
    { display: "+34 951 388 794", tel: "tel:+34951388794" },
  ],
  whatsapp: {
    display: "+34 625 111 172",
    href: "https://wa.me/34625111172",
  },
  email: "info@infinitybrand.es",
  mailto: "mailto:info@infinitybrand.es",
  address: {
    lines: [
      "Centro Comercial LIDL (Parking), Local 9",
      "29649 Calahonda, Mijas Costa",
      "Málaga, España",
    ],
  },
} as const;

export type ServiceSlug =
  | "pool-maintenance"
  | "technical-service"
  | "construction-renovation"
  | "leak-detection"
  | "pool-covers"
  | "additional-services";

export type Service = {
  slug: ServiceSlug;
  index: string;
  title: string;
  navTitle: string;
  short: string;
  image: string;
  imageAlt: string;
  /** CSS object-position for art-directed crops in tall frames */
  imagePos?: string;
};

export const services: Service[] = [
  {
    slug: "pool-maintenance",
    index: "01",
    title: "Pool Cleaning & Maintenance",
    navTitle: "Maintenance",
    short:
      "Scheduled cleaning, water chemistry and equipment checks that keep your pool ready every day of the year.",
    image: "/images/services/maintenance.webp",
    imageAlt: "Pool maintenance on the Costa del Sol",
  },
  {
    slug: "technical-service",
    index: "02",
    title: "Technical Service & Repairs",
    navTitle: "Technical Service",
    short:
      "Diagnosis and repair of pumps, filtration, electrical panels, lighting and automation systems.",
    image: "/images/services/technical.webp",
    imageAlt: "Pool technical equipment service",
  },
  {
    slug: "construction-renovation",
    index: "03",
    title: "Construction & Renovation",
    navTitle: "Renovation",
    short:
      "Complete pool renovation and new construction — surfaces, waterproofing, lighting and modern equipment.",
    image: "/images/services/renovation.webp",
    imageAlt: "Swimming pool renovation in Marbella",
  },
  {
    slug: "leak-detection",
    index: "04",
    title: "Leak Detection",
    navTitle: "Leak Detection",
    short:
      "Precise location of water loss with pressure testing, tracer gas, dye tests and professional diver inspection.",
    image: "/images/services/leak.webp",
    imageAlt: "Pool leak detection inspection",
  },
  {
    slug: "pool-covers",
    index: "05",
    title: "Pool Covers",
    navTitle: "Pool Covers",
    short:
      "Manual, thermal and motorised cover systems for safety, temperature and cleanliness.",
    image: "/images/covers/rooftop-cover.jpg",
    imageAlt: "Automatic pool cover installation",
    imagePos: "50% 78%",
  },
  {
    slug: "additional-services",
    index: "06",
    title: "Additional Services",
    navTitle: "More Services",
    short:
      "Chlorine supply, pool water delivery by tanker and commissioning support for your installation.",
    image: "/images/services/additional.jpg",
    imageAlt: "Pool water delivery and chlorine supply",
  },
];

export const serviceAreas: string[] = [
  "Marbella",
  "Puerto Banús",
  "San Pedro de Alcántara",
  "Benahavís",
  "Estepona",
  "Mijas Costa",
  "Mijas Pueblo",
  "Calahonda",
  "Cabopino",
  "Elviria",
  "Fuengirola",
  "Benalmádena",
  "Torremolinos",
  "Málaga",
  "Las Lagunas",
  "El Faro",
  "El Chaparral",
  "Alhaurín el Grande",
  "Alhaurín de la Torre",
];

export const shopUrl = "https://marbellapoolservice.com/tienda/";

export const nav = {
  primary: [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
    { label: "Shop", href: shopUrl, external: true },
    { label: "Contact", href: "/contact" },
  ],
};
