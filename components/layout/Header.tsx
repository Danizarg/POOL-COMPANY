"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { contact, services, shopUrl } from "@/lib/site";
import { ArrowUpRight, BrandMark, WhatsAppIcon } from "@/components/ui/Icons";
import { EASE_WATER } from "@/components/motion/Reveal";

/**
 * Site header. Transparent over the hero, condensing into a translucent
 * ivory bar on scroll. Desktop gets an editorial services panel; mobile
 * gets a full-screen menu that rises like a water plane.
 */
export default function Header({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastY = useRef(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Recede while diving down, resurface on any upward scroll.
      setHidden(y > 240 && y > lastY.current + 4);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openPanel = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  }, []);

  const solid = scrolled || servicesOpen;
  const textCls = menuOpen
    ? "text-ivory"
    : solid
      ? "text-ink"
      : tone === "dark"
        ? "text-ivory"
        : "text-ink";

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[80] rounded bg-ink px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 transition-[background-color,transform,box-shadow] duration-500 ${
          menuOpen
            ? "z-[70] bg-transparent"
            : solid
              ? "z-50 bg-ivory/92 shadow-[0_1px_0_0_rgba(11,29,36,0.08)] backdrop-blur-md"
              : "z-50 bg-transparent"
        } ${hidden && !servicesOpen && !menuOpen ? "-translate-y-full" : "translate-y-0"}`}
        onMouseLeave={scheduleClose}
      >
        <div className={`mx-auto flex max-w-[1680px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 ${solid ? "py-3" : "py-5"}`}>
          {/* Wordmark */}
          <Link
            href="/"
            className={`flex items-center gap-3 ${textCls} transition-colors duration-500`}
            aria-label="Marbella Pool Service — home"
            onClick={() => setMenuOpen(false)}
          >
            <BrandMark className="h-8 w-8 shrink-0" />
            <span className="leading-none">
              <span className="block text-[13px] font-semibold tracking-[0.18em]">
                MARBELLA
              </span>
              <span className="mt-1 block text-[9.5px] font-medium tracking-[0.34em] opacity-70">
                POOL SERVICE
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className={`hidden items-center gap-8 lg:flex ${textCls} transition-colors duration-500`} aria-label="Primary">
            <button
              type="button"
              className="text-label relative py-2"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onMouseEnter={openPanel}
              onFocus={openPanel}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-px bg-current transition-transform duration-300 [transform-origin:left] ${servicesOpen ? "scale-x-100" : "scale-x-0"}`}
              />
            </button>
            {[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-label group relative py-2" onMouseEnter={scheduleClose}>
                {l.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-current transition-transform duration-300 [transform-origin:left] group-hover:scale-x-100" />
              </Link>
            ))}
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label group relative flex items-center gap-1 py-2"
              onMouseEnter={scheduleClose}
            >
              Shop
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-current transition-transform duration-300 [transform-origin:left] group-hover:scale-x-100" />
            </a>

            <span className={`h-5 w-px ${solid ? "bg-ink/15" : tone === "dark" ? "bg-ivory/25" : "bg-ink/15"}`} />

            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-opacity hover:opacity-70"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <Link
              href="/contact"
              className={`text-label group relative overflow-hidden rounded-[2px] px-5 py-3 transition-colors duration-300 ${
                solid
                  ? "bg-ink text-ivory"
                  : tone === "dark"
                    ? "bg-ivory text-ink"
                    : "bg-ink text-ivory"
              }`}
            >
              <span className="pointer-events-none absolute inset-0 translate-y-full bg-mineral transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 motion-reduce:hidden" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-shell">
                Request a quote
              </span>
            </Link>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            className={`flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden ${menuOpen ? "text-ivory" : textCls} relative z-[70] transition-colors duration-300`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* ── Desktop services panel ──────────────────────────────────── */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE_WATER }}
              className="absolute inset-x-0 top-full hidden border-t border-ink/8 bg-ivory shadow-[0_24px_48px_-24px_rgba(5,22,31,0.25)] lg:block"
              onMouseEnter={openPanel}
              onMouseLeave={scheduleClose}
            >
              <div className="mx-auto grid max-w-[1680px] grid-cols-[1.2fr_1fr] gap-16 px-12 py-10">
                <ul className="grid grid-cols-2 gap-x-12">
                  {services.map((s, i) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-baseline gap-4 border-b border-ink/8 py-4"
                        onMouseEnter={() => setActiveService(i)}
                        onFocus={() => setActiveService(i)}
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="tabular text-[11px] font-medium text-mineral">
                          {s.index}
                        </span>
                        <span className="text-[17px] font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1.5">
                          {s.navTitle}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="relative hidden min-h-[220px] overflow-hidden rounded-[2px] xl:block">
                  {services.map((s, i) => (
                    <Image
                      key={s.slug}
                      src={s.image}
                      alt=""
                      fill
                      sizes="480px"
                      className={`object-cover transition-opacity duration-500 ${i === activeService ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                  <span className="text-label absolute bottom-3 left-3 bg-abyss/70 px-3 py-1.5 text-ivory backdrop-blur-sm">
                    {services[activeService].navTitle}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile menu: water plane rising ──────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={reduced ? { opacity: 0 } : { y: "100%" }}
            animate={reduced ? { opacity: 1 } : { y: 0 }}
            exit={reduced ? { opacity: 0 } : { y: "100%" }}
            transition={{ duration: 0.6, ease: EASE_WATER }}
          >
            <div className="absolute inset-0 bg-abyss" />
            <svg
              aria-hidden="true"
              className="absolute -top-[22px] left-0 h-6 w-[200%] animate-[waterline-drift_7s_linear_infinite] text-abyss motion-reduce:animate-none"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M0 10 Q 12.5 3 25 6.5 T 50 6.5 T 75 6.5 T 100 6.5 T 125 6.5 T 150 6.5 T 175 6.5 T 200 6.5 V 10 H 0 Z" />
            </svg>

            <nav
              aria-label="Mobile"
              className="relative flex h-full flex-col justify-between overflow-y-auto px-6 pb-8 pt-24"
            >
              <ul className="space-y-1">
                {[
                  { label: "Home", href: "/" },
                  ...services.map((s) => ({
                    label: s.navTitle,
                    href: `/services/${s.slug}`,
                    index: s.index,
                  })),
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={reduced ? false : { opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.045, duration: 0.55, ease: EASE_WATER }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-4 py-2"
                    >
                      {"index" in l && (
                        <span className="tabular text-[11px] text-aqua/70">{l.index}</span>
                      )}
                      <span className="text-display text-[clamp(1.9rem,7.5vw,2.6rem)] text-ivory">
                        {l.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={reduced ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.62, duration: 0.55, ease: EASE_WATER }}
                >
                  <a
                    href={shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline gap-3 py-2"
                  >
                    <span className="text-display text-[clamp(1.9rem,7.5vw,2.6rem)] text-ivory">
                      Shop
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-aqua" />
                  </a>
                </motion.li>
              </ul>

              <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-10 space-y-4 border-t border-ivory/12 pt-6"
              >
                <div className="flex flex-wrap gap-3">
                  <a
                    href={contact.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-label flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-[2px] bg-aqua px-5 text-abyss"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5" /> WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-label flex min-h-[48px] flex-1 items-center justify-center rounded-[2px] bg-ivory px-5 text-ink"
                  >
                    Request a quote
                  </Link>
                </div>
                <div className="text-[13px] leading-relaxed text-ivory/60">
                  <a href={contact.phones[0].tel} className="block text-ivory/85">
                    {contact.phones[0].display}
                  </a>
                  <a href={contact.mailto} className="block">
                    {contact.email}
                  </a>
                  <p className="mt-1">Calahonda · Mijas Costa · Costa del Sol</p>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
