"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { contact } from "@/lib/site";
import { EASE_WATER } from "@/components/motion/Reveal";

/**
 * ContactForm — mirrors the business's live Contact Form 7 fields and
 * submits through /api/contact, which forwards to their existing
 * WordPress mail flow. Clear validation, honest states, WhatsApp escape
 * hatch if delivery ever fails.
 */

const SERVICES = [
  "Pool Cleaning & Maintenance",
  "Technical Support & Repairs",
  "Pool Renovations & Remodeling",
  "Leak Detection",
  "Pool Covers",
  "Products & Shop",
];

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full rounded-[2px] border border-ink/20 bg-shell px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-soft/60 transition-colors duration-300 focus:border-mineral focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const reduced = useReducedMotion();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const nextErrors: Record<string, string> = {};
    if (!String(data.name ?? "").trim()) nextErrors.name = "Please add your name.";
    if (!String(data.phone ?? "").trim()) nextErrors.phone = "Please add a phone number.";
    if (!String(data.city ?? "").trim()) nextErrors.city = "Please add your city or town.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email ?? "")))
      nextErrors.email = "Please add a valid email address.";
    if (!String(data.message ?? "").trim()) nextErrors.message = "Please tell us about your pool.";
    if (data.privacy !== "on") nextErrors.privacy = "Please accept the privacy policy.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          city: data.city,
          email: data.email,
          service: data.service,
          message: data.message,
          privacy: data.privacy === "on",
        }),
      });
      const json = (await res.json()) as { ok: boolean };
      setStatus(json.ok ? "sent" : "error");
      if (json.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_WATER }}
        className="rounded-[2px] bg-deep p-10 text-ivory"
        role="status"
      >
        <p className="text-label text-aqua">Message sent</p>
        <h3 className="text-display mt-4 text-3xl">
          Thank you — we&apos;ll be
          <br />
          <span className="text-serif-accent text-aqua">in touch shortly.</span>
        </h3>
        <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-ivory/65">
          Your enquiry is on its way to our team in Calahonda. If it&apos;s
          urgent, WhatsApp is the fastest way to reach us.
        </p>
        <a
          href={contact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-label mt-6 inline-flex min-h-[44px] items-center rounded-[2px] bg-aqua px-5 text-abyss"
        >
          Open WhatsApp
        </a>
      </motion.div>
    );
  }

  // Clear a field's error as soon as the visitor edits it.
  const clearError = (e: React.FormEvent<HTMLFormElement>) => {
    const name = (e.target as HTMLInputElement).name;
    if (name && errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <form onSubmit={onSubmit} onChange={clearError} noValidate aria-label="Request a quote">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-label mb-2 block text-ink">
            Name *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputCls}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          {errors.name && (
            <p id="cf-name-err" className="mt-1.5 text-[12.5px] text-clay">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-phone" className="text-label mb-2 block text-ink">
            Phone *
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputCls}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "cf-phone-err" : undefined}
          />
          {errors.phone && (
            <p id="cf-phone-err" className="mt-1.5 text-[12.5px] text-clay">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-email" className="text-label mb-2 block text-ink">
            Email *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputCls}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
          />
          {errors.email && (
            <p id="cf-email-err" className="mt-1.5 text-[12.5px] text-clay">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-city" className="text-label mb-2 block text-ink">
            City / Town *
          </label>
          <input
            id="cf-city"
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            className={inputCls}
            aria-invalid={!!errors.city}
            aria-describedby={errors.city ? "cf-city-err" : undefined}
          />
          {errors.city && (
            <p id="cf-city-err" className="mt-1.5 text-[12.5px] text-clay">
              {errors.city}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cf-service" className="text-label mb-2 block text-ink">
          Which service are you interested in?
        </label>
        <select id="cf-service" name="service" className={inputCls} defaultValue="">
          <option value="">Choose a service (optional)</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="cf-message" className="text-label mb-2 block text-ink">
          Message *
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your pool — size, location, and what you need."
          className={inputCls}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
        />
        {errors.message && (
          <p id="cf-message-err" className="mt-1.5 text-[12.5px] text-clay">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="cf-privacy"
          name="privacy"
          type="checkbox"
          className="mt-1 h-4 w-4 accent-petrol"
          aria-invalid={!!errors.privacy}
          aria-describedby={errors.privacy ? "cf-privacy-err" : undefined}
        />
        <label htmlFor="cf-privacy" className="text-[13.5px] leading-relaxed text-ink-soft">
          I have read and accept the{" "}
          <Link href="/privacy-policy" className="underline decoration-mineral underline-offset-2">
            privacy policy
          </Link>
          . *
        </label>
      </div>
      {errors.privacy && (
        <p id="cf-privacy-err" className="mt-1.5 text-[12.5px] text-clay">
          {errors.privacy}
        </p>
      )}

      {status === "error" && (
        <div className="mt-5 rounded-[2px] border border-clay/40 bg-clay/8 p-4" role="alert">
          <p className="text-[14px] text-ink">
            Something went wrong sending your message. Please try again — or
            reach us directly on{" "}
            <a href={contact.whatsapp.href} className="underline decoration-mineral underline-offset-2">
              WhatsApp
            </a>{" "}
            or{" "}
            <a href={contact.phones[0].tel} className="underline decoration-mineral underline-offset-2">
              {contact.phones[0].display}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="text-label group relative mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-3 overflow-hidden rounded-[2px] bg-ink px-8 text-ivory transition-opacity disabled:opacity-60 sm:w-auto"
      >
        <span className="pointer-events-none absolute inset-0 translate-y-full bg-mineral transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 motion-reduce:hidden" />
        <span className="relative z-10">
          {status === "sending" ? "Sending…" : "Send request"}
        </span>
        {status !== "sending" && <span className="relative z-10">→</span>}
      </button>
    </form>
  );
}
