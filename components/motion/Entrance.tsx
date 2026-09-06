import type { CSSProperties, ReactNode } from "react";

/**
 * Server-renderable entrance animations for above-the-fold content.
 * Pure CSS: the markup is visible in the SSR payload and animates the
 * moment paint happens — no hydration gate, no blank heroes.
 * (Reduced motion is handled globally: animations collapse to their
 * final state.)
 */

export function HeroLines({
  lines,
  as: Tag = "h1",
  className = "",
  delay = 0.15,
  stagger = 0.09,
}: {
  lines: ReactNode[];
  as?: "h1" | "h2" | "p" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <span
            className="anim-rise-line block"
            style={{ animationDelay: `${delay + i * stagger}s` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const style: CSSProperties = { animationDelay: `${delay}s` };
  return (
    <div className={`anim-fade-up ${className}`} style={style}>
      {children}
    </div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const style: CSSProperties = { animationDelay: `${delay}s` };
  return (
    <div className={`anim-fade-in ${className}`} style={style}>
      {children}
    </div>
  );
}
