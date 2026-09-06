"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/ui/Icons";

type Variant = "ink" | "ivory" | "aqua" | "outline-ink" | "outline-ivory";

/**
 * The site's liquid button: on hover a fill rises from below with a wave
 * crest, like water climbing the wall of a tile. Rectangular, architectural.
 */
export default function Button({
  children,
  href,
  variant = "ink",
  className = "",
  arrow = true,
  external = false,
  type,
  onClick,
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const base =
    "group relative inline-flex min-h-[48px] items-center justify-center gap-3 overflow-hidden rounded-[2px] px-7 py-3.5 text-label transition-colors duration-300";

  const skin: Record<Variant, { root: string; fill: string; text: string }> = {
    ink: {
      root: "bg-ink text-ivory",
      fill: "text-mineral",
      text: "group-hover:text-shell",
    },
    ivory: {
      root: "bg-ivory text-ink",
      fill: "text-aqua",
      text: "group-hover:text-abyss",
    },
    aqua: {
      root: "bg-aqua text-abyss",
      fill: "text-shell",
      text: "group-hover:text-abyss",
    },
    "outline-ink": {
      root: "border border-ink/30 text-ink hover:border-ink",
      fill: "text-ink",
      text: "group-hover:text-ivory",
    },
    "outline-ivory": {
      root: "border border-ivory/40 text-ivory hover:border-ivory",
      fill: "text-ivory",
      text: "group-hover:text-abyss",
    },
  };

  const s = skin[variant];

  const inner = (
    <>
      {/* rising liquid fill */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 translate-y-[calc(100%+12px)] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 motion-reduce:hidden ${s.fill}`}
      >
        <svg
          className="absolute -top-[9px] left-0 h-[10px] w-[200%] animate-[waterline-drift_5s_linear_infinite]"
          viewBox="0 0 200 10"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0 10 Q 12.5 4 25 7 T 50 7 T 75 7 T 100 7 T 125 7 T 150 7 T 175 7 T 200 7 V 10 H 0 Z" />
        </svg>
        <span className="absolute inset-0 bg-current" />
      </span>
      <span className={`relative z-10 transition-colors duration-300 ${s.text}`}>
        {children}
      </span>
      {arrow && (
        <span
          aria-hidden="true"
          className={`relative z-10 transition-[transform,color] duration-300 group-hover:translate-x-1 ${s.text}`}
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  );

  const cls = `${base} ${s.root} ${className}`;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={cls}
          aria-label={ariaLabel}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
