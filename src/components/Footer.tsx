// components/Footer.tsx
import { site, buildWaLink } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const wa = buildWaLink(
    `Halo ${site.name}, saya mau booking potong.\nNama:\nTanggal:\nJam:\nLayanan:\n`
  );

  return (
    <footer className="border-t border-zinc-900 py-10">
      <div className="mx-auto max-w-5xl px-4 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <a className="text-zinc-300 hover:underline" href={wa}>
            Booking via WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}