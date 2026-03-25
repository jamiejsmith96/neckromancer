"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

/* ──────────────────────────────────────────────────────────────
   ABOUT — The Neckromancer
   Personal story, credentials, stats, and before/after area.
   Lighter section after the dark hero.
   ────────────────────────────────────────────────────────────── */

const CREDENTIALS = [
  "MSc Sports Science & Human Performance, VU Amsterdam",
  "Certified Cervical Dynamics Practitioner (CCDP)",
  "Advanced Neck Rehabilitation Specialist (Level III)",
  "World Neck Training Federation — Registered Coach",
  "Former Professional Ballet Dancer (Dutch National Ballet Academy)",
];

const STATS = [
  { value: "300+", label: "Clients Trained" },
  { value: "8+", label: "Years Specialised Experience" },
  { value: "12,000+", label: "Sessions Delivered" },
  { value: "97%", label: "Client Satisfaction Rate" },
];

export default function About() {
  return (
    <section id="about" className="section-warm py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* ── Section Label ── */}
        <ScrollReveal>
          <p className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ember-500">
            The Neckromancer
          </p>
        </ScrollReveal>

        {/* ── Heading ── */}
        <ScrollReveal delay={1}>
          <h2 className="mt-4 max-w-2xl font-heading text-[clamp(2rem,3.5vw+0.5rem,3.5rem)] font-bold leading-[1.1] tracking-[-0.01em] text-obsidian-950">
            Devoted to the Art and Science of Neck Training
          </h2>
        </ScrollReveal>

        {/* ── Two-column layout ── */}
        <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* ── LEFT COLUMN — Story ── */}
          <div>
            <ScrollReveal delay={2}>
              <div className="space-y-6 font-body text-[1.0625rem] leading-[1.75] text-obsidian-800/85">
                <p>
                  Pointlol discovered the transformative power of neck training
                  in 2018 after a career-ending ballet injury left him with
                  chronic cervical instability. What began as rehabilitation
                  quickly became an obsession — and then a calling.
                </p>
                <p>
                  Through years of research, rehabilitation, and obsessive
                  dedication, he developed proprietary methodologies that
                  combined sports science, physiotherapy principles, and
                  progressive resistance training into a unified system
                  specifically engineered for the cervical spine.
                </p>
                <p>
                  Today he is Rotterdam&apos;s only dedicated cervical
                  specialist, having guided over 300 clients through complete
                  neck transformations. His philosophy is simple:
                </p>
              </div>
            </ScrollReveal>

            {/* ── Quote ── */}
            <ScrollReveal delay={3}>
              <blockquote className="mt-8 border-l-2 border-ember-500/60 pl-6">
                <p className="font-heading text-[1.15rem] leading-[1.6] font-medium text-obsidian-950/90 italic">
                  &ldquo;The neck is the bridge between mind and body. Neglect
                  it, and everything above and below suffers.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>
          </div>

          {/* ── RIGHT COLUMN — Credentials + Stats ── */}
          <div>
            {/* ── Credentials ── */}
            <ScrollReveal delay={2}>
              <div className="rounded-sm border border-bone-300/80 bg-bone-50/60 p-7 sm:p-8">
                <h3 className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600">
                  Qualifications & Accreditations
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {CREDENTIALS.map((credential) => (
                    <li
                      key={credential}
                      className="flex items-start gap-3 font-body text-[0.9375rem] leading-[1.5] text-obsidian-800/85"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember-500"
                        aria-hidden="true"
                      />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* ── Stats Grid ── */}
            <ScrollReveal delay={3}>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-bone-300/80 bg-bone-300/50">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center bg-bone-50/80 px-4 py-7 text-center sm:py-8"
                  >
                    <span className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.02em] text-obsidian-950">
                      {stat.value}
                    </span>
                    <span className="mt-2 font-body text-[0.75rem] font-medium uppercase tracking-[0.12em] text-marrow-500">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Before & After Area ── */}
        <ScrollReveal delay={2}>
          <div className="mt-20 lg:mt-28">
            <h3 className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-marrow-600">
              Client Transformations
            </h3>
            <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-bone-300/80 bg-bone-300/50 sm:grid-cols-2">
              {/* Before */}
              <div className="relative min-h-[280px] overflow-hidden bg-bone-200/60 sm:min-h-[340px]">
                <Image
                  src="/before.png"
                  alt="Pointlol — before neck training"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute bottom-4 left-4 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white bg-obsidian-950/70 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                  Before
                </span>
              </div>

              {/* After */}
              <div className="relative min-h-[280px] overflow-hidden bg-bone-200/60 sm:min-h-[340px]">
                <Image
                  src="/after.jpg"
                  alt="Pointlol — after neck training transformation"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute bottom-4 left-4 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white bg-obsidian-950/70 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                  After
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
