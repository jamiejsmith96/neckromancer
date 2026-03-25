import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

/* ──────────────────────────────────────────────────────────────
   FONTS
   Space Grotesk — geometric sans with distinctive character.
     Feels technical and premium without being generic.
     Great contrast between straight strokes and rounded forms.
   Outfit — modern geometric body font, extremely legible at
     all sizes, with just enough personality to pair well.
   ────────────────────────────────────────────────────────────── */

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

/* ──────────────────────────────────────────────────────────────
   METADATA
   ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Neckromancer — Personal Neck Training",
  description:
    "Rotterdam's premier personal neck trainer. Specialised strength, mobility and rehabilitation programmes for the cervical spine. Guided by Pointlol.",
  metadataBase: new URL("https://neckromancer.nl"),
  openGraph: {
    title: "Neckromancer — Personal Neck Training",
    description:
      "Rotterdam's premier personal neck trainer. Specialised strength, mobility and rehabilitation programmes for the cervical spine.",
    locale: "en_NL",
    type: "website",
  },
};

/* ──────────────────────────────────────────────────────────────
   ROOT LAYOUT
   ────────────────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-dvh font-body">
        {/* Skip link — keyboard/screen-reader accessible */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
