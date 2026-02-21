import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "../data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} – ${site.tagline}`,
  description: site.description,
  openGraph: {
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    // images otomatis dari src/app/opengraph-image.tsx
  },
  // icons otomatis dari src/app/icon.tsx
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}