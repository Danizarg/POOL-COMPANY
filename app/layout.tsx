import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marbellapoolservice.com"),
  title: {
    default: "Marbella Pool Service — Pool Maintenance, Repair & Renovation on the Costa del Sol",
    template: "%s — Marbella Pool Service",
  },
  description:
    "Professional swimming pool maintenance, technical service, renovation, leak detection and pool covers across Marbella, Mijas Costa and the Costa del Sol.",
  openGraph: {
    type: "website",
    siteName: "Marbella Pool Service",
    locale: "en_US",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Marbella Pool Service",
  alternateName: "Infinity Brand",
  legalName: "INFINITY Concepts 2000 S.L.",
  url: "https://marbellapoolservice.com",
  email: "info@infinitybrand.es",
  telephone: "+34 625 111 172",
  image: "https://marbellapoolservice.com/images/hero-pool.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Centro Comercial LIDL (Parking), Local 9",
    addressLocality: "Calahonda, Mijas Costa",
    postalCode: "29649",
    addressRegion: "Málaga",
    addressCountry: "ES",
  },
  areaServed: [
    "Marbella",
    "Mijas Costa",
    "Calahonda",
    "Fuengirola",
    "Benalmádena",
    "Estepona",
    "Málaga",
    "Costa del Sol",
  ],
  sameAs: [
    "https://www.instagram.com/infinitybrand.es",
    "https://www.tiktok.com/@infinitybrand.es",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
