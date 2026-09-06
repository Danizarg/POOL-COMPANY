import Link from "next/link";
import { contact, services, serviceAreas, shopUrl } from "@/lib/site";
import { ArrowUpRight, BrandMark, WhatsAppIcon } from "@/components/ui/Icons";
import Waterline from "@/components/ui/Waterline";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-abyss text-ivory">
      <Waterline className="text-aqua" opacity={0.3} />
      <div className="mx-auto max-w-[1680px] px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-9 w-9 text-aqua" />
              <span className="leading-none">
                <span className="block text-[14px] font-semibold tracking-[0.18em]">
                  MARBELLA
                </span>
                <span className="mt-1 block text-[10.5px] font-medium tracking-[0.34em] opacity-70">
                  POOL SERVICE
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ivory/60">
              Professional swimming-pool maintenance, technical service,
              renovation, leak detection and covers across Marbella, Mijas
              Costa and the Costa del Sol.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label flex min-h-[44px] items-center gap-2 rounded-[2px] border border-ivory/20 px-4 transition-colors duration-300 hover:border-aqua hover:text-aqua"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <Link
                href="/contact"
                className="text-label flex min-h-[44px] items-center rounded-[2px] bg-ivory px-4 text-ink transition-colors duration-300 hover:bg-aqua"
              >
                Request a quote
              </Link>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-label text-ivory/45">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[14px] text-ivory/75 transition-colors duration-300 hover:text-aqua"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[14px] text-ivory/75 transition-colors duration-300 hover:text-aqua"
                >
                  Online shop <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Footer company">
            <h3 className="text-label text-ivory/45">Company</h3>
            <ul className="mt-5 space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy policy", href: "/privacy-policy" },
                { label: "Cookie policy", href: "/cookie-policy" },
                { label: "Terms & conditions", href: "/terms-conditions" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-ivory/75 transition-colors duration-300 hover:text-aqua"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-label text-ivory/45">Contact</h3>
            <ul className="mt-5 space-y-2.5 text-[14px] text-ivory/75">
              {contact.phones.map((p) => (
                <li key={p.tel}>
                  <a href={p.tel} className="transition-colors duration-300 hover:text-aqua">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.mailto}
                  className="transition-colors duration-300 hover:text-aqua"
                >
                  {contact.email}
                </a>
              </li>
              <li className="pt-2 leading-relaxed text-ivory/55">
                {contact.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Coverage */}
        <div className="mt-14 border-t border-ivory/10 pt-8">
          <h3 className="text-label text-ivory/45">Service areas</h3>
          <p className="mt-4 max-w-4xl text-[13px] leading-relaxed text-ivory/50">
            {serviceAreas.join(" · ")}
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-ivory/10 pt-6 text-[12px] text-ivory/40 sm:flex-row">
          <p>
            © {year} {contact.companyName} · {contact.parentBrand}
          </p>
          <p>Marbella · Mijas Costa · Costa del Sol</p>
        </div>
      </div>
    </footer>
  );
}
