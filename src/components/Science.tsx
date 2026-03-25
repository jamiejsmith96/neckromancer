"use client";

import ScrollReveal from "./ScrollReveal";

/* ──────────────────────────────────────────────────────────────
   THE SCIENCE — Evidence-Based Credibility Section
   Dark section with large stat numbers backed by real research.
   Uses sinew (sage green) for data accent colour.
   ────────────────────────────────────────────────────────────── */

const STATS = [
  {
    value: "5%",
    context:
      "For every 1 pound increase in neck strength, odds of concussion decrease by 5%",
    source: "Collins et al., Journal of Sports Medicine",
  },
  {
    value: "82.7%",
    context:
      "of office workers exhibit forward head posture. Remote workers show 15% higher prevalence.",
  },
  {
    value: "4.5kg",
    context:
      "of additional force on your cervical spine for every inch of forward head displacement",
  },
  {
    value: "6G",
    context:
      "of lateral force experienced by F1 drivers — their head and helmet become 45.5kg of sideways load on the neck",
  },
  {
    value: "83%",
    context:
      "of Dutch men are allowed to work from home. The Netherlands has the highest remote work rate in Europe — making it the epicentre of the tech neck epidemic.",
  },
];

export default function Science() {
  return (
    <section id="science" className="section-deep py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* ── Section Label ── */}
        <ScrollReveal>
          <p className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-sinew-400">
            The Science
          </p>
        </ScrollReveal>

        {/* ── Heading ── */}
        <ScrollReveal delay={1}>
          <h2 className="mt-4 max-w-3xl font-heading text-[clamp(2rem,3.5vw+0.5rem,3.5rem)] font-bold leading-[1.1] tracking-[-0.01em]">
            Evidence-Based Neck Training
          </h2>
        </ScrollReveal>

        {/* ── Intro ── */}
        <ScrollReveal delay={2}>
          <p className="mt-6 max-w-2xl font-body text-[1.0625rem] leading-[1.75] text-bone-200/85">
            Neck training isn&apos;t vanity — it&apos;s one of the most
            impactful, under-utilised interventions in human performance and
            health.
          </p>
        </ScrollReveal>

        {/* ── Stats Grid ── */}
        <div className="mt-16 lg:mt-20">
          {/* Top row — 3 stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {STATS.slice(0, 3).map((stat, i) => (
              <ScrollReveal key={stat.value} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  className={`border-bone-100/10 px-1 py-8 sm:px-6 sm:py-10 ${
                    i < 2 ? "sm:border-r" : ""
                  }`}
                >
                  <span className="block font-heading text-[clamp(3rem,5vw+1rem,4.5rem)] font-bold leading-none tracking-[-0.03em] text-sinew-400">
                    {stat.value}
                  </span>
                  <p className="mt-4 max-w-xs font-body text-[0.9375rem] leading-[1.65] text-bone-200/75">
                    {stat.context}
                  </p>
                  {stat.source && (
                    <p className="mt-3 font-body text-[0.75rem] italic text-marrow-500">
                      {stat.source}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-bone-100/10" />

          {/* Bottom row — 2 stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {STATS.slice(3).map((stat, i) => (
              <ScrollReveal key={stat.value} delay={(i + 1) as 1 | 2}>
                <div
                  className={`border-bone-100/10 px-1 py-8 sm:px-6 sm:py-10 ${
                    i === 0 ? "sm:border-r" : ""
                  }`}
                >
                  <span className="block font-heading text-[clamp(3rem,5vw+1rem,4.5rem)] font-bold leading-none tracking-[-0.03em] text-sinew-400">
                    {stat.value}
                  </span>
                  <p className="mt-4 max-w-md font-body text-[0.9375rem] leading-[1.65] text-bone-200/75">
                    {stat.context}
                  </p>
                  {stat.source && (
                    <p className="mt-3 font-body text-[0.75rem] italic text-marrow-500">
                      {stat.source}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── Closing Statement ── */}
        <ScrollReveal delay={2}>
          <div className="mt-16 border-t border-bone-100/10 pt-12 lg:mt-20">
            <p className="max-w-3xl font-body text-[1.125rem] leading-[1.75] text-bone-100/90">
              Whether you&apos;re an elite athlete, desk-bound professional, or
              simply someone who wants to look and feel stronger — your neck is
              the most neglected lever for transformation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
