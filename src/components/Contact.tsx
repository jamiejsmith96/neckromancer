"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

/* ──────────────────────────────────────────────────────────────
   CONTACT — Booking & Contact Information
   Warm section after the dark FAQ. Two-column layout:
   left = contact info, right = booking form.
   ────────────────────────────────────────────────────────────── */

const HOURS = [
  { days: "Monday \u2014 Friday", times: "06:00 \u2014 21:00" },
  { days: "Saturday", times: "08:00 \u2014 18:00" },
  { days: "Sunday", times: "By appointment" },
];

const PACKAGES_OPTIONS = [
  "Not sure yet",
  "Neckonomics",
  "Neckflix & Build",
  "The Neckoning",
  "Necks Level",
];

/* ── Inline SVG icons ── */

function MapPinIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-ember-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-ember-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-ember-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-ember-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

/* ── Input styling constants ── */
const INPUT_BASE =
  "w-full rounded-sm border border-bone-300 bg-bone-50/60 px-4 py-3.5 font-body text-[0.9375rem] text-obsidian-900 placeholder:text-marrow-400 transition-colors duration-200 focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500/40";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-warm py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* ── Section Label ── */}
        <ScrollReveal>
          <p className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ember-500">
            Contact
          </p>
        </ScrollReveal>

        {/* ── Heading ── */}
        <ScrollReveal delay={1}>
          <h2 className="mt-4 max-w-3xl font-heading text-[clamp(2rem,3.5vw+0.5rem,3.5rem)] font-bold leading-[1.1] tracking-[-0.01em] text-obsidian-950">
            Begin Your Transformation
          </h2>
        </ScrollReveal>

        {/* ── Subtext ── */}
        <ScrollReveal delay={2}>
          <p className="mt-6 max-w-2xl font-body text-[1.0625rem] leading-[1.75] text-obsidian-800/85">
            Book your complimentary cervical assessment. No obligation, no
            pressure&nbsp;&mdash; just an honest evaluation of where you are and
            where we can take you.
          </p>
        </ScrollReveal>

        {/* ── Two-column layout ── */}
        <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* ────────────────────────────────────────────────────────
              LEFT COLUMN — Contact Information
              ──────────────────────────────────────────────────────── */}
          <div>
            <ScrollReveal delay={2}>
              <div className="space-y-8">
                {/* ── Location ── */}
                <div className="flex gap-4">
                  <MapPinIcon />
                  <div>
                    <h3 className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600">
                      Location
                    </h3>
                    <p className="mt-2 font-body text-[0.9375rem] leading-[1.6] text-obsidian-800/85">
                      Rotterdam, Netherlands
                    </p>
                    <p className="mt-1 font-body text-[0.875rem] leading-[1.6] text-marrow-500">
                      Cervical Performance Centre
                      <br />
                      Witte de Withstraat 87
                      <br />
                      3012 BM Rotterdam
                    </p>
                  </div>
                </div>

                {/* ── Hours ── */}
                <div className="flex gap-4">
                  <ClockIcon />
                  <div>
                    <h3 className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600">
                      Hours
                    </h3>
                    <div className="mt-2 space-y-1">
                      {HOURS.map((h) => (
                        <p
                          key={h.days}
                          className="font-body text-[0.9375rem] leading-[1.6] text-obsidian-800/85"
                        >
                          <span className="font-medium">{h.days}:</span>{" "}
                          {h.times}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Email ── */}
                <div className="flex gap-4">
                  <EnvelopeIcon />
                  <div>
                    <h3 className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@neckromancer.nl"
                      className="mt-2 inline-block font-body text-[0.9375rem] leading-[1.6] text-obsidian-800/85 underline decoration-ember-500/40 underline-offset-[3px] transition-colors duration-200 hover:text-ember-600"
                    >
                      hello@neckromancer.nl
                    </a>
                  </div>
                </div>

                {/* ── Phone ── */}
                <div className="flex gap-4">
                  <PhoneIcon />
                  <div>
                    <h3 className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600">
                      Phone
                    </h3>
                    <a
                      href="tel:+3110XXXXXXX"
                      className="mt-2 inline-block font-body text-[0.9375rem] leading-[1.6] text-obsidian-800/85 underline decoration-ember-500/40 underline-offset-[3px] transition-colors duration-200 hover:text-ember-600"
                    >
                      +31 10 XXX XXXX
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ────────────────────────────────────────────────────────
              RIGHT COLUMN — Booking Form
              ──────────────────────────────────────────────────────── */}
          <div>
            <ScrollReveal delay={3}>
              <div className="rounded-sm border border-bone-300/80 bg-bone-50/60 p-7 sm:p-8">
                {submitted ? (
                  /* ── Thank-you state ── */
                  <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ember-500/10">
                      <svg
                        className="h-7 w-7 text-ember-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 font-heading text-[1.25rem] font-bold tracking-[-0.01em] text-obsidian-950">
                      Thank You
                    </h3>
                    <p className="mt-3 max-w-sm font-body text-[0.9375rem] leading-[1.6] text-obsidian-800/75">
                      Your assessment request has been received. The
                      Neckromancer will be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className={INPUT_BASE}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className={INPUT_BASE}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600"
                      >
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+31 6 1234 5678"
                        className={INPUT_BASE}
                      />
                    </div>

                    {/* Package Interest */}
                    <div>
                      <label
                        htmlFor="contact-package"
                        className="mb-2 block font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600"
                      >
                        Package Interest
                      </label>
                      <select
                        id="contact-package"
                        name="package"
                        defaultValue=""
                        className={`${INPUT_BASE} appearance-none bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%238d7e6e'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                        }}
                      >
                        <option value="" disabled>
                          Select a package
                        </option>
                        {PACKAGES_OPTIONS.map((pkg) => (
                          <option key={pkg} value={pkg}>
                            {pkg}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your goals, any existing conditions, or questions you have..."
                        className={`${INPUT_BASE} resize-y`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-2 w-full rounded-sm bg-ember-500 px-8 py-4 font-heading text-[0.8125rem] font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-ember-600 active:bg-ember-600"
                    >
                      Request Assessment
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
