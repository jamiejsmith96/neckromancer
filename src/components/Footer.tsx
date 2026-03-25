/* ──────────────────────────────────────────────────────────────
   FOOTER — Neckromancer
   Server component. No interactivity required.
   ────────────────────────────────────────────────────────────── */

const QUICK_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Science",  href: "#science" },
  { label: "Packages", href: "#packages" },
  { label: "Process",  href: "#process" },
  { label: "FAQ",      href: "#faq" },
  { label: "Contact",  href: "#contact" },
] as const;

/* ── Placeholder social icons ── */

function IconInstagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M7 10v7M7 7v.01M11 10v7M11 13a3 3 0 0 1 6 0v4" />
    </svg>
  );
}

/* ── Main component ── */

export default function Footer() {
  return (
    <footer className="section-deep">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">

        {/* ── Top section: 3-column grid ── */}
        <div className="grid grid-cols-1 gap-10 pt-14 pb-10 md:grid-cols-3 md:gap-8 lg:gap-16">

          {/* Column 1 — Wordmark + tagline */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="w-fit font-heading text-[1.25rem] font-bold tracking-[0.06em] text-bone-50 transition-opacity hover:opacity-80"
              aria-label="Neckromancer — back to top"
            >
              <span className="text-ember-400 font-extrabold tracking-[0.02em]">NECK</span>
              <span className="font-semibold tracking-[0.08em]">ROMANCER</span>
            </a>
            <p
              className="font-body leading-relaxed text-marrow-400"
              style={{ fontSize: "0.82rem" }}
            >
              Rotterdam&rsquo;s premier personal neck trainer. Specialising in
              cervical strength, mobility, and rehabilitation.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div className="flex flex-col gap-3">
            <p
              className="font-body font-semibold uppercase tracking-[0.14em] text-bone-300"
              style={{ fontSize: "0.68rem" }}
            >
              Navigation
            </p>
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-2">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="font-body text-marrow-400 transition-colors duration-200 hover:text-ember-500"
                      style={{ fontSize: "0.82rem" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Location, email, socials */}
          <div className="flex flex-col gap-4">
            <p
              className="font-body font-semibold uppercase tracking-[0.14em] text-bone-300"
              style={{ fontSize: "0.68rem" }}
            >
              Get in Touch
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-body text-marrow-400" style={{ fontSize: "0.82rem" }}>
                Rotterdam, Netherlands
              </p>
              <a
                href="mailto:hello@neckromancer.nl"
                className="font-body text-marrow-400 transition-colors duration-200 hover:text-ember-500"
                style={{ fontSize: "0.82rem" }}
              >
                hello@neckromancer.nl
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="#"
                className="text-marrow-500 transition-colors duration-200 hover:text-ember-500"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="#"
                className="text-marrow-500 transition-colors duration-200 hover:text-ember-500"
                aria-label="TikTok"
              >
                <IconTikTok />
              </a>
              <a
                href="#"
                className="text-marrow-500 transition-colors duration-200 hover:text-ember-500"
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-marrow-700/30" />

        {/* ── Medical disclaimer ── */}
        <p
          className="mx-auto max-w-2xl py-6 text-center font-body leading-relaxed text-marrow-600"
          style={{ fontSize: "0.72rem" }}
        >
          Neckromancer provides personal training services and is not a licensed
          medical, physiotherapy, or chiropractic practice. Always consult your
          healthcare provider before beginning any exercise programme. Individual
          results vary. No specific outcomes are guaranteed.
        </p>

        {/* ── Divider ── */}
        <div className="h-px bg-marrow-700/30" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="font-body text-marrow-600" style={{ fontSize: "0.75rem" }}>
            &copy; 2026 Neckromancer. All rights reserved. KvK Rotterdam: 89234571.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="font-body text-marrow-600 transition-colors duration-200 hover:text-ember-500"
              style={{ fontSize: "0.75rem" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-marrow-600 transition-colors duration-200 hover:text-ember-500"
              style={{ fontSize: "0.75rem" }}
            >
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
