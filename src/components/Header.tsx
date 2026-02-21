// components/Header.tsx
import { site, buildWaLink } from '../data/site';

export default function Header() {
  const wa = buildWaLink(
    `Halo ${site.name}, saya mau booking potong.\nNama:\nTanggal:\nJam:\nLayanan:\n`
  );

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#" className="font-semibold">
          {site.name}
        </a>
        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a href="#keunggulan" className="hover:text-white">
            Keunggulan
          </a>
          <a href="#harga" className="hover:text-white">
            Harga
          </a>
          <a href="#galeri" className="hover:text-white">
            Galeri
          </a>
          <a href="#booking" className="hover:text-white">
            Booking
          </a>
          <a href="#lokasi" className="hover:text-white">
            Lokasi
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>
        <a
          href={wa}
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:opacity-90"
        >
          Booking
        </a>
      </div>
    </header>
  );
}