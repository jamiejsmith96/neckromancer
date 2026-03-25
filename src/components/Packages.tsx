"use client";

import ScrollReveal from "./ScrollReveal";

/* ──────────────────────────────────────────────────────────────
   PACKAGES — Pricing Tiers
   Lighter section after the dark Science section.
   Four tiers from entry to invite-only elite.
   ────────────────────────────────────────────────────────────── */

interface Package {
  name: string;
  price: string;
  features: string[];
  cta: string;
  elite?: boolean;
}

const PACKAGES: Package[] = [
  {
    name: "Neckonomics",
    price: "249",
    features: [
      "1x weekly in-person session",
      "Form correction & technique coaching",
      "Starter neck programme",
      "Email support",
      "Monthly progress check-in",
      "Complimentary scrotal massage",
    ],
    cta: "Get Started",
  },
  {
    name: "Neckflix & Build",
    price: "449",
    features: [
      "2x weekly in-person sessions",
      "Custom programme design",
      "Progress tracking & benchmarks",
      "Nutritional guidance",
      "Monthly strength assessment",
      "Complimentary scrotal massage",
    ],
    cta: "Get Started",
  },
  {
    name: "The Neckoning",
    price: "649",
    features: [
      "3x weekly in-person sessions",
      "Fully personalised training plan",
      "Nutrition programming",
      "Weekly accountability check-ins",
      "Progress photography",
      "Priority booking",
      "Complimentary scrotal massage",
    ],
    cta: "Get Started",
  },
  {
    name: "Necks Level",
    price: "999",
    features: [
      "4x weekly in-person sessions",
      "Everything in The Neckoning",
      "Direct WhatsApp access to the Neckromancer",
      "VIP scrotal massage (nut to nut)",
      "VIP scheduling",
      "Guest passes (2 per month)",
    ],
    cta: "Request Invitation",
    elite: true,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section-warm py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* ── Section Label ── */}
        <ScrollReveal>
          <p className="text-center font-heading text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ember-500">
            Packages
          </p>
        </ScrollReveal>

        {/* ── Heading ── */}
        <ScrollReveal delay={1}>
          <h2 className="mt-4 text-center font-heading text-[clamp(2rem,3.5vw+0.5rem,3.5rem)] font-bold leading-[1.1] tracking-[-0.01em] text-obsidian-950">
            Choose Your Path
          </h2>
        </ScrollReveal>

        {/* ── Subtext ── */}
        <ScrollReveal delay={2}>
          <p className="mx-auto mt-6 max-w-2xl text-center font-body text-[1.0625rem] leading-[1.75] text-obsidian-800/75">
            Every journey begins with an assessment. All packages include an
            initial cervical evaluation and personalised programme design.
          </p>
        </ScrollReveal>

        {/* ── Package Cards Grid ── */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 xl:grid-cols-4">
          {PACKAGES.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
              <div
                className={`group relative flex h-full flex-col rounded-sm transition-all duration-300 ${
                  pkg.elite
                    ? "border-2 border-ember-500/80 bg-obsidian-950 text-bone-100 shadow-lg shadow-ember-500/5 hover:shadow-xl hover:shadow-ember-500/10"
                    : "border border-bone-300/80 bg-bone-50/80 text-obsidian-900 hover:border-marrow-400/60 hover:shadow-lg hover:shadow-obsidian-950/5"
                }`}
              >
                {/* Elite badge */}
                {pkg.elite && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-full bg-ember-500 px-4 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">
                      Elite
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  {/* Package name */}
                  <h3
                    className={`font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${
                      pkg.elite ? "text-ember-400" : "text-marrow-600"
                    }`}
                  >
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-5">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`font-heading text-[0.875rem] font-medium tracking-normal ${
                          pkg.elite ? "text-bone-200/70" : "text-obsidian-800/60"
                        }`}
                      >
                        EUR
                      </span>
                      <span
                        className={`font-heading text-[clamp(2.25rem,3vw,3rem)] font-bold leading-none tracking-[-0.02em] ${
                          pkg.elite ? "text-bone-50" : "text-obsidian-950"
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p
                      className={`mt-1 font-body text-[0.8125rem] ${
                        pkg.elite ? "text-bone-200/50" : "text-marrow-500"
                      }`}
                    >
                      per month
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className={`my-6 border-t ${
                      pkg.elite
                        ? "border-bone-100/10"
                        : "border-bone-300/80"
                    }`}
                  />

                  {/* Features */}
                  <ul className="flex-1 space-y-3.5">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 font-body text-[0.9375rem] leading-[1.5] ${
                          pkg.elite
                            ? "text-bone-200/80"
                            : "text-obsidian-800/80"
                        }`}
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                            pkg.elite ? "bg-ember-500" : "bg-marrow-400"
                          }`}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Invitation only note for elite */}
                  {pkg.elite && (
                    <p className="mt-4 font-body text-[0.8125rem] italic text-bone-200/50">
                      Invitation only
                    </p>
                  )}

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`mt-8 block w-full rounded-sm py-3.5 text-center font-heading text-[0.8rem] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                      pkg.elite
                        ? "bg-ember-500 text-white hover:bg-ember-600"
                        : "border border-obsidian-950 bg-obsidian-950 text-bone-50 hover:bg-obsidian-800"
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
