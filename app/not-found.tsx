import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Waterline from "@/components/ui/Waterline";

export default function NotFound() {
  return (
    <>
      <Header tone="light" />
      <main id="main" className="flex min-h-[75vh] items-center bg-ivory">
        <div className="mx-auto w-full max-w-[1680px] px-5 py-32 sm:px-8 lg:px-12">
          <p className="text-label text-ink-soft">404</p>
          <h1 className="text-display mt-6 text-[clamp(2.4rem,6vw,5.6rem)] text-ink">
            This page has
            <br />
            <span className="text-serif-accent text-petrol">drifted away.</span>
          </h1>
          <Waterline className="mt-8 max-w-md text-petrol" opacity={0.35} />
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            Head back to the surface, or tell us what you need.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/" variant="ink">
              Back to home
            </Button>
            <Button href="/contact" variant="outline-ink">
              Contact us
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
