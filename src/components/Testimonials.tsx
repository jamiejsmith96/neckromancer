"use client";

import ScrollReveal from "./ScrollReveal";

/* ──────────────────────────────────────────────────────────────
   TESTIMONIALS — What Our Clients Say
   Lighter section after the dark Process section.
   Six testimonial cards in a 2-col or 3-col grid.
   ────────────────────────────────────────────────────────────── */

interface Testimonial {
  quote: string;
  name: string;
  occupation: string;
  city: string;
  package: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I fly in from Italy every two weeks specifically for this man. My colleagues think I\u2019m insane. I tell them: you don\u2019t understand, my neck has never looked like this. The scrotal massage alone is worth the Ryanair fare. I have cancelled holidays to not miss sessions. My girlfriend left me but my neck has never been thicker. Fair trade.",
    name: "Resnoir de Bussy",
    occupation: "Shamanic Practitioner",
    city: "Rome, Italy",
    package: "Necks Level",
  },
  {
    quote:
      "I drove four hours from Belgium the first time. Now I do it three times a week. My car knows the route to Rotterdam better than it knows the route to my own house. The Neckromancer told me my cervical spine was \u2018spiritually misaligned\u2019 and honestly? He was right. I\u2019ve never felt more aligned in my life. The nut to nut VIP massage brought me to tears. Tears of growth.",
    name: "Waffle",
    occupation: "Freelance Creative",
    city: "Brussels, Belgium",
    package: "Necks Level",
  },
  {
    quote:
      "I live fifteen minutes away and I\u2019m still the most dedicated client here. I have a Neckromancer tattoo. I didn\u2019t tell him about it yet but I think he\u2019ll be proud. My neck circumference has increased by 6cm. My mother says I look like a different person. She didn\u2019t mean it as a compliment but I\u2019m taking it as one.",
    name: "Salv",
    occupation: "AI Engineer",
    city: "Rotterdam, Netherlands",
    package: "The Neckoning",
  },
  {
    quote:
      "Initially I signed up for Neckonomics because I\u2019m financially responsible. Within one session I upgraded to Necks Level. Within two sessions I was recommending the scrotal massage to strangers on the tram. I don\u2019t know who I am anymore but my neck is enormous and I\u2019ve never been happier.",
    name: "Pop Usmini",
    occupation: "International Consultant",
    city: "Belgrade / Tel Aviv",
    package: "Necks Level",
  },
  {
    quote:
      "The Neckromancer is more than a trainer. He\u2019s a visionary. He looked at my neck and said \u2018we have a lot of work to do\u2019 and I\u2019ve never felt more seen. I cancelled my Netflix subscription and replaced it with Neckflix & Build. Better content. Better results. Better scrotal massage.",
    name: "Viek",
    occupation: "Geomaxxer",
    city: "Helsinki, Finland",
    package: "Neckflix & Build",
  },
  {
    quote:
      "I\u2019ve been training my entire body for twelve years. Twelve years of neglecting the most important muscle group. The Neckromancer opened my eyes. And my cervical vertebrae. I now judge everyone by their neck. I can\u2019t stop. Please send help. Actually don\u2019t. Send more sessions.",
    name: "Rayg",
    occupation: "Software Engineer",
    city: "Rome, Italy",
    package: "Neckflix & Build",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-ember-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-warm py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* ── Section Label ── */}
        <ScrollReveal>
          <p className="text-center font-heading text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ember-500">
            Testimonials
          </p>
        </ScrollReveal>

        {/* ── Heading ── */}
        <ScrollReveal delay={1}>
          <h2 className="mt-4 text-center font-heading text-[clamp(2rem,3.5vw+0.5rem,3.5rem)] font-bold leading-[1.1] tracking-[-0.01em] text-obsidian-950">
            What Our Clients Say
          </h2>
        </ScrollReveal>

        {/* ── Testimonial Cards Grid ── */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal
              key={testimonial.name}
              delay={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="flex h-full flex-col rounded-sm border border-bone-300/80 bg-bone-50/80 p-7 sm:p-8">
                {/* ── Stars ── */}
                <StarRating />

                {/* ── Decorative Quote Mark ── */}
                <span
                  className="mt-5 block font-heading text-[2.5rem] leading-none text-ember-500/25"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* ── Quote ── */}
                <p className="-mt-2 flex-1 font-body text-[0.9375rem] leading-[1.75] text-obsidian-800/85">
                  {testimonial.quote}
                </p>

                {/* ── Divider ── */}
                <div className="mt-6 border-t border-bone-300/80" />

                {/* ── Attribution ── */}
                <div className="mt-5">
                  <p className="font-heading text-[0.9375rem] font-bold text-obsidian-950">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 font-body text-[0.8125rem] text-obsidian-800/70">
                    {testimonial.occupation}, {testimonial.city}
                  </p>
                  <p className="mt-1.5 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ember-500/80">
                    {testimonial.package} client
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
