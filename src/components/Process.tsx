"use client";

import ScrollReveal from "./ScrollReveal";

/* ──────────────────────────────────────────────────────────────
   THE PROCESS — How It Works
   Dark section following the lighter Packages section.
   Vertical timeline with large numbered steps in ember.
   ────────────────────────────────────────────────────────────── */

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Book Your Assessment",
    description:
      "Every transformation begins with data. Your initial consultation includes a comprehensive cervical evaluation: posture analysis, range of motion testing, strength benchmarking, and a deep-dive into your goals. This assessment is complimentary and carries no obligation.",
  },
  {
    number: "02",
    title: "Receive Your Programme",
    description:
      "Based on your assessment, the Neckromancer designs a fully personalised training protocol. Exercise selection, volume, intensity, and progression are calibrated to your specific anatomy, experience level, and objectives.",
  },
  {
    number: "03",
    title: "Train With the Neckromancer",
    description:
      "In-person sessions at our Rotterdam facility. Every rep is coached, every set is purposeful. You\u2019ll learn proprietary techniques developed over eight years of specialised practice. Most clients report visible changes within the first four weeks.",
  },
  {
    number: "04",
    title: "Track Your Transformation",
    description:
      "Regular progress photography, strength benchmarks, and circumference measurements ensure your transformation is documented and optimised. Your programme evolves as you do.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-dark py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* ── Section Label ── */}
        <ScrollReveal>
          <p className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ember-500">
            The Process
          </p>
        </ScrollReveal>

        {/* ── Heading ── */}
        <ScrollReveal delay={1}>
          <h2 className="mt-4 max-w-3xl font-heading text-[clamp(2rem,3.5vw+0.5rem,3.5rem)] font-bold leading-[1.1] tracking-[-0.01em]">
            From Assessment to Transformation
          </h2>
        </ScrollReveal>

        {/* ── Subtext ── */}
        <ScrollReveal delay={2}>
          <p className="mt-6 max-w-2xl font-body text-[1.0625rem] leading-[1.75] text-bone-200/85">
            A structured, evidence-based approach to building the neck
            you&apos;ve always wanted.
          </p>
        </ScrollReveal>

        {/* ── Steps Timeline ── */}
        <div className="relative mt-16 lg:mt-20">
          {/* Vertical connector line — visible on lg+ */}
          <div
            className="absolute left-[2.75rem] top-0 hidden h-full w-px bg-bone-100/10 lg:block"
            aria-hidden="true"
          />

          <div className="space-y-6 lg:space-y-0">
            {STEPS.map((step, i) => (
              <ScrollReveal
                key={step.number}
                delay={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <div className="group relative lg:flex lg:gap-12 lg:py-10">
                  {/* ── Step Number ── */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-sm border border-ember-500/30 bg-obsidian-950/80">
                      <span className="font-heading text-[2rem] font-bold leading-none tracking-[-0.02em] text-ember-500">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* ── Step Content ── */}
                  <div className="mt-5 lg:mt-0 lg:flex lg:flex-1 lg:flex-col lg:justify-center">
                    <h3 className="font-heading text-[clamp(1.25rem,1.5vw+0.25rem,1.5rem)] font-bold leading-[1.2] tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl font-body text-[0.9375rem] leading-[1.75] text-bone-200/75">
                      {step.description}
                    </p>
                  </div>

                  {/* ── Step separator on mobile ── */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="mt-6 border-t border-bone-100/10 lg:hidden"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
