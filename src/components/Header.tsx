"use client";

import { useState, useEffect, useCallback } from "react";

/* ──────────────────────────────────────────────────────────────
   NAV CONFIG
   ────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Science", href: "#science" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

const HEADER_HEIGHT = 80;
const SCROLL_THRESHOLD = 60;

/* ──────────────────────────────────────────────────────────────
   HEADER COMPONENT
   ────────────────────────────────────────────────────────────── */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll listener ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── Smooth scroll handler using Lenis if available ── */
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);

      const id = href.replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;

      const lenis = (
        window as unknown as Record<string, unknown>
      ).__lenis as { scrollTo?: (target: HTMLElement, options?: Record<string, unknown>) => void } | undefined;

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-obsidian-950/85 backdrop-blur-xl shadow-[0_1px_0_rgba(168,154,139,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* ── Logo / Wordmark ── */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group relative font-heading text-[1.35rem] font-bold tracking-[0.06em] text-bone-50 transition-opacity hover:opacity-80"
          aria-label="Neckromancer — back to top"
        >
          {/*
            "NECK" is rendered in ember accent with heavier weight and
            tighter spacing, making the brand pun visually distinct.
            "ROMANCER" stays bone-white and slightly lighter.
          */}
          <span className="text-ember-400 font-extrabold tracking-[0.02em]">
            NECK
          </span>
          <span className="font-semibold tracking-[0.08em]">ROMANCER</span>
        </a>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="font-body text-[0.7rem] font-medium uppercase tracking-[0.18em] text-bone-300 transition-colors duration-300 hover:text-bone-50"
            >
              {label}
            </a>
          ))}

          {/* ── CTA ── */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="ml-2 inline-flex h-10 items-center rounded-sm bg-ember-500 px-5 font-body text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-bone-50 transition-all duration-300 hover:bg-ember-400 hover:shadow-[0_0_20px_rgba(194,93,48,0.25)]"
          >
            Book Assessment
          </a>
        </nav>

        {/* ── Mobile Hamburger ── */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="flex w-6 flex-col items-end gap-[5px]">
            <span
              className={`block h-[2px] bg-bone-100 transition-all duration-300 ease-out ${
                mobileOpen
                  ? "w-6 translate-y-[7px] rotate-45"
                  : "w-6"
              }`}
            />
            <span
              className={`block h-[2px] bg-bone-100 transition-all duration-300 ease-out ${
                mobileOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-[2px] bg-bone-100 transition-all duration-300 ease-out ${
                mobileOpen
                  ? "w-6 -translate-y-[7px] -rotate-45"
                  : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian-950/98 backdrop-blur-md transition-all duration-500 ease-out lg:hidden ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-8"
          aria-label="Mobile"
        >
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="font-heading text-2xl font-semibold uppercase tracking-[0.14em] text-bone-200 transition-all duration-300 hover:text-ember-400"
              style={{
                transitionDelay: mobileOpen ? `${100 + i * 60}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(1rem)",
              }}
            >
              {label}
            </a>
          ))}

          {/* ── Mobile CTA ── */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="mt-4 inline-flex h-12 items-center rounded-sm bg-ember-500 px-8 font-body text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-bone-50 transition-all duration-300 hover:bg-ember-400"
            style={{
              transitionDelay: mobileOpen
                ? `${100 + NAV_LINKS.length * 60}ms`
                : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(1rem)",
            }}
          >
            Book Assessment
          </a>
        </nav>
      </div>
    </header>
  );
}
