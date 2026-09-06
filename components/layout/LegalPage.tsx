import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import Waterline from "@/components/ui/Waterline";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header tone="light" />
      <main id="main">
        <section className="bg-ivory">
          <div className="mx-auto max-w-[900px] px-5 pb-24 pt-28 sm:px-8 lg:pt-40">
            <SectionLabel className="text-ink-soft">Legal</SectionLabel>
            <h1 className="text-display mt-6 text-[clamp(2rem,4.6vw,3.6rem)] text-ink">{title}</h1>
            <div className="prose-legal mt-10 space-y-6 text-[14.5px] leading-relaxed text-ink-soft [&_h2]:text-display [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:text-ink [&_a]:underline [&_a]:decoration-mineral [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
              {children}
            </div>
          </div>
          <Waterline className="text-petrol" opacity={0.25} />
        </section>
      </main>
      <Footer />
    </>
  );
}
