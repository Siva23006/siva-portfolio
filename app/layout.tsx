import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif, Mea_Culpa } from "next/font/google";
import "@/styles/globals.css";
import { site } from "@/data/site";
import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";

const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const script = Mea_Culpa({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Siva — AI & Data Science Undergraduate", template: "%s — Siva" },
  description: site.description,
  openGraph: { title: "Siva — AI & Data Science Undergraduate", description: site.description, url: site.url, type: "website" },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#080808" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: "Siva", sameAs: [site.github, site.linkedin], jobTitle: "B.Tech Computer Science Engineering student (Data Science & AI)", url: site.url };
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${script.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ivory focus:px-4 focus:py-2 focus:text-ink-950">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Preloader />
        <Nav />
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
