import type { Metadata, Viewport } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import Providers from "@/components/Providers";
import { site, siteUrl } from "@/data/site";
import "./globals.css";

const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    type: "website",
    title: site.seo.title,
    description: site.seo.description,
    siteName: site.name,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: `${site.name} — ${site.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/images/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: site.links.email.display,
  url: siteUrl,
  sameAs: [site.links.instagram.href],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#work"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-accent px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink focus:translate-y-0"
        >
          Skip to work
        </a>
        <Providers>
          {children}
          <Cursor />
        </Providers>
        <Grain />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
