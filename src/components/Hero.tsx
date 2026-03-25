"use client";

import { useEffect, useRef, useCallback } from "react";

/* ──────────────────────────────────────────────────────────────
   HERO — Full-viewport landing section
   Premium fitness brand feel. Dark, bold, architectural.
   ────────────────────────────────────────────────────────────── */

const HEADER_HEIGHT = 80;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  /* ── Mouse parallax on decorative elements ── */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!gridRef.current || !linesRef.current) return;

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;

      if (gridRef.current) {
        gridRef.current.style.transform = `translate(${cx * 12}px, ${cy * 8}px)`;
      }
      if (linesRef.current) {
        linesRef.current.style.transform = `translate(${cx * -6}px, ${cy * -4}px)`;
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [handleMouseMove]);

  /* ── Smooth scroll handler ── */
  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;

      const lenis = (
        window as unknown as Record<string, unknown>
      ).__lenis as
        | { scrollTo?: (t: HTMLElement, o?: Record<string, unknown>) => void }
        | undefined;

      if (lenis?.scrollTo) {
        lenis.scrollTo(target, { offset: -HEADER_HEIGHT });
      } else {
        const top =
          target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <section
      ref={sectionRef}
      className="section-deep relative min-h-dvh overflow-x-clip pt-[100px]"
      aria-label="Hero"
    >
      {/* ────────────────────────────────────────────────────────
          BACKGROUND LAYER — Architectural grid + diagonal lines
          Creates structural visual depth without circles/gradients
          ──────────────────────────────────────────────────────── */}

      {/* Base vignette — darkens edges, focuses attention center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, var(--color-obsidian-950) 100%)",
        }}
      />

      {/* Perspective grid — architectural floor-plane feel */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out will-change-transform"
        style={{ opacity: 0.04 }}
      >
        {/* Vertical lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-bone-300"
              style={{ left: `${(i + 1) * (100 / 14)}%` }}
            />
          ))}
        </div>
        {/* Horizontal lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-bone-300"
              style={{ top: `${(i + 1) * 10}%` }}
            />
          ))}
        </div>
      </div>

      {/* Diagonal architectural lines — structural tension */}
      <div
        ref={linesRef}
        className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out will-change-transform"
        style={{ opacity: 0.06 }}
      >
        {/* Top-left to center diagonal */}
        <div
          className="absolute h-px bg-marrow-500"
          style={{
            width: "140%",
            top: "15%",
            left: "-20%",
            transform: "rotate(25deg)",
            transformOrigin: "left center",
          }}
        />
        {/* Bottom-right to center diagonal */}
        <div
          className="absolute h-px bg-marrow-500"
          style={{
            width: "120%",
            bottom: "20%",
            right: "-10%",
            transform: "rotate(-18deg)",
            transformOrigin: "right center",
          }}
        />
        {/* Accent cross — ember-tinted for warmth */}
        <div
          className="absolute h-px bg-ember-600"
          style={{
            width: "60%",
            top: "40%",
            left: "25%",
            transform: "rotate(8deg)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Corner frame marks — blueprint/technical drawing motif */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" style={{ opacity: 0.08 }}>
        {/* Top-left corner */}
        <div className="absolute top-[12%] left-[6%]">
          <div className="h-16 w-px bg-bone-300" />
          <div className="absolute top-0 left-0 h-px w-16 bg-bone-300" />
        </div>
        {/* Top-right corner */}
        <div className="absolute top-[12%] right-[6%]">
          <div className="h-16 w-px bg-bone-300 ml-auto" />
          <div className="absolute top-0 right-0 h-px w-16 bg-bone-300" />
        </div>
        {/* Bottom-left corner */}
        <div className="absolute bottom-[10%] left-[6%]">
          <div className="absolute bottom-0 left-0 h-16 w-px bg-bone-300" />
          <div className="absolute bottom-0 left-0 h-px w-16 bg-bone-300" />
        </div>
        {/* Bottom-right corner */}
        <div className="absolute bottom-[10%] right-[6%]">
          <div className="absolute bottom-0 right-0 h-16 w-px bg-bone-300" />
          <div className="absolute bottom-0 right-0 h-px w-16 bg-bone-300" />
        </div>
      </div>

      {/* Geometric accent blocks — layered rectangles for depth */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {/* Large offset rectangle — left side */}
        <div
          className="absolute border border-marrow-700/10"
          style={{
            width: "35vw",
            height: "55vh",
            top: "18%",
            left: "-5%",
            transform: "rotate(-3deg)",
          }}
        />
        {/* Small accent rectangle — right side */}
        <div
          className="absolute border border-ember-600/8"
          style={{
            width: "18vw",
            height: "30vh",
            top: "25%",
            right: "5%",
            transform: "rotate(2deg)",
          }}
        />
        {/* Horizontal bar — mid-section */}
        <div
          className="absolute bg-marrow-700/5"
          style={{
            width: "50vw",
            height: "1px",
            top: "55%",
            left: "30%",
          }}
        />
      </div>

      {/* ────────────────────────────────────────────────────────
          CONTENT
          ──────────────────────────────────────────────────────── */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-100px)] max-w-[1200px] flex-col items-center justify-center px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center">
          {/* Brand name — scales down to fit mobile in one line */}
          <h1
            className="animate-hero-title font-heading text-[clamp(2.2rem,9vw,8rem)] font-bold leading-[0.85] tracking-[0.02em] text-bone-50"
          >
            <span className="text-ember-400">NECK</span>
            <span>ROMANCER</span>
          </h1>

          {/* Tagline */}
          <p className="animate-hero-subtitle mt-5 font-heading text-[clamp(0.7rem,1.8vw,1.35rem)] font-medium uppercase tracking-[0.1em] sm:tracking-[0.2em] text-marrow-400 sm:mt-6">
            The Dark Art of Neck Training
          </p>

          {/* Divider — thin ember line */}
          <div className="animate-hero-subtitle mx-auto mt-6 h-px w-16 bg-ember-500/50 sm:mt-8 sm:w-24" />

          {/* Subtitle */}
          <p className="animate-hero-subtitle mt-6 max-w-xl font-body text-[clamp(0.95rem,1.3vw,1.125rem)] leading-relaxed text-bone-300/80 sm:mt-8">
            Rotterdam&apos;s premier personal neck trainer. Specialised strength,
            mobility and rehabilitation for the most overlooked muscle group in
            human performance.
          </p>

          {/* CTAs */}
          <div className="animate-hero-cta mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">
            {/* Primary CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="inline-flex h-13 items-center rounded-sm bg-ember-500 px-8 font-body text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-bone-50 transition-all duration-300 hover:bg-ember-400 hover:shadow-[0_0_30px_rgba(194,93,48,0.3)]"
            >
              Book Your Assessment
            </a>

            {/* Secondary CTA */}
            <a
              href="#packages"
              onClick={(e) => scrollTo(e, "#packages")}
              className="inline-flex h-13 items-center rounded-sm border border-marrow-600/40 px-8 font-body text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-bone-200 transition-all duration-300 hover:border-marrow-500/60 hover:text-bone-50"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────
          SCROLL INDICATOR — Desktop only
          ──────────────────────────────────────────────────────── */}

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-marrow-500">
          Scroll
        </span>
        <div className="relative h-8 w-px overflow-hidden bg-marrow-700">
          <div
            className="absolute top-0 left-0 h-full w-full bg-ember-500"
            style={{
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator animation */}
      <style>{`
        @keyframes scrollPulse {
          0%   { transform: translateY(-100%); }
          50%  { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
