import type { Metadata } from "next";
import "./globals.css";
import { site } from "./lib/site";

export const metadata: Metadata = {
  title: `Sewa & Hias Seserahan Tangerang | ${site.brand}`,
  description: site.subheadline,
  metadataBase: new URL(`https://${site.domain}`),
  alternates: { canonical: `https://${site.domain}` },
  openGraph: {
    title: `Sewa & Hias Seserahan Tangerang | ${site.brand}`,
    description: site.subheadline,
    url: `https://${site.domain}`,
    siteName: site.brand,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.brand} — Sewa & Hias Seserahan Tangerang`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Sewa & Hias Seserahan Tangerang | ${site.brand}`,
    description: site.subheadline,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand,
    url: `https://${site.domain}`,
    areaServed: site.area,
    sameAs: [site.instagramUrl],
    telephone: site.phoneDisplay,
    description: site.subheadline,
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}