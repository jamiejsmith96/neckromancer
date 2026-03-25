"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

/* ──────────────────────────────────────────────────────────────
   FAQ — Frequently Asked Questions
   Dark section with accordion-style Q&A items.
   One item open at a time; smooth height animation.
   ────────────────────────────────────────────────────────────── */

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What makes neck training different from general fitness?",
    answer:
      "The cervical spine is the most complex and vulnerable region of the vertebral column, housing critical neural pathways and vascular structures. Training it requires specialised knowledge of cervical biomechanics, progressive loading protocols, and an understanding of the unique demands placed on the neck across different populations \u2014 from combat athletes to desk workers. A general personal trainer is not equipped for this level of specificity.",
  },
  {
    question: "Do I need prior training experience?",
    answer:
      "No. We welcome clients at every level, from complete beginners to elite athletes. Your programme is built entirely around your current baseline, which we establish during your complimentary initial assessment.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients report noticeable improvements in posture and pain reduction within 2\u20133 weeks. Measurable strength gains typically appear by week 4\u20136. Visible aesthetic changes to neck circumference and definition generally become apparent by week 8\u201312, depending on training frequency and adherence.",
  },
  {
    question: "What should I wear to sessions?",
    answer:
      "Comfortable athletic clothing that allows full range of motion through the cervical and upper thoracic spine. Avoid hooded garments or bulky collars that restrict neck movement. We provide towels and water.",
  },
  {
    question: "Is the scrotal massage optional?",
    answer:
      "The scrotal massage is an integral component of the Necks Level experience, designed to promote holistic neuromuscular relaxation and parasympathetic activation following intensive cervical training. It is included at no additional cost as part of our commitment to comprehensive recovery. Clients who prefer to opt out may do so at any time without judgement or impact to their programme.",
  },
  {
    question: "Can I train my neck at home between sessions?",
    answer:
      "Yes, and we encourage it. Your programme includes prescribed homework exercises with detailed form guidance. However, unsupervised heavy loading of the cervical spine is strongly discouraged \u2014 technique matters more in neck training than almost any other discipline.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours\u2019 notice for session cancellations. Late cancellations or no-shows are charged at the full session rate. We understand that life happens \u2014 if exceptional circumstances arise, please contact us directly and we will find a fair solution.",
  },
  {
    question: "Do you offer online or remote training?",
    answer:
      "No. The Neckromancer works exclusively in person. The cervical spine demands hands-on coaching, real-time form correction, and direct supervision that cannot be replicated through a screen. We do not compromise on this.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 flex-shrink-0 text-bone-300 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: FAQItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-bone-100/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left sm:py-7"
        aria-expanded={open}
      >
        <span className="font-heading text-[1.0625rem] font-semibold leading-[1.4] tracking-[-0.01em] text-bone-100 sm:text-[1.125rem]">
          {item.question}
        </span>
        <ChevronIcon open={open} />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-7 pr-10 font-body text-[0.9375rem] leading-[1.75] text-bone-200/75">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className="section-dark py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* ── Section Label ── */}
        <ScrollReveal>
          <p className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ember-500">
            FAQ
          </p>
        </ScrollReveal>

        {/* ── Heading ── */}
        <ScrollReveal delay={1}>
          <h2 className="mt-4 max-w-3xl font-heading text-[clamp(2rem,3.5vw+0.5rem,3.5rem)] font-bold leading-[1.1] tracking-[-0.01em]">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        {/* ── Accordion ── */}
        <div className="mt-14 border-t border-bone-100/10 lg:mt-20">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
              <AccordionItem
                item={faq}
                open={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
