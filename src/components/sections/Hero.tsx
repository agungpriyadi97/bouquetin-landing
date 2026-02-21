// components/sections/Hero.tsx
import { site, buildWaLink } from "../../data/site";

export default function Hero() {
  const wa = buildWaLink(
    `Halo ${site.name}, saya mau booking potong.\nNama:\nTanggal:\nJam:\nLayanan:\n`
  );

  return (
    <section className="border-b border-zinc-900">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm text-zinc-300">{site.city}</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-4 text-base text-zinc-300">{site.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={wa}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90"
            >
              Booking via WhatsApp
            </a>
            <a
              href="#harga"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold hover:bg-zinc-900"
            >
              Lihat harga
            </a>
          </div>

          <p className="mt-4 text-xs text-zinc-400">
            Booking cepat • Mobile friendly • Load kenceng
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <div className="aspect-[4/3] w-full">
            <img
              src="/hero.jpg"
              alt={`Foto ${site.name}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}