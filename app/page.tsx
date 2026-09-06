import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCta from "@/components/layout/FinalCta";
import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import ServicesExplorer from "@/components/home/ServicesExplorer";
import Engineering from "@/components/home/Engineering";
import WhyStrip from "@/components/home/WhyStrip";
import RenovationShowcase from "@/components/home/RenovationShowcase";
import Process from "@/components/home/Process";
import Coverage from "@/components/home/Coverage";
import Reviews from "@/components/home/Reviews";
import ShopStrip from "@/components/home/ShopStrip";

export const metadata: Metadata = {
  title:
    "Marbella Pool Service — Pool Maintenance, Repair & Renovation on the Costa del Sol",
  description:
    "Expert pool maintenance, technical service, construction and renovation in Marbella, Mijas Costa and Estepona. Leak detection, pool covers, LED lighting and heating. Request your free quote today.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Header tone="light" />
      <main id="main">
        <Hero />
        <BrandIntro />
        <ServicesExplorer />
        <Engineering />
        <WhyStrip />
        <RenovationShowcase />
        <Process />
        <Coverage />
        <Reviews />
        <ShopStrip />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
