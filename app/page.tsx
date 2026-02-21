import Image from "next/image";
import StickyWA from "./components/StickyWA";
import { site, waLink } from "./lib/site";

const services = [
  {
    title: "Sewa set seserahan",
    desc: "Box/tray/display dengan tema elegan, siap foto.",
  },
  {
    title: "Hias seserahan",
    desc: "Penataan + dekor menyesuaikan isi & konsep acara.",
  },
  {
    title: "Paket lengkap",
    desc: "Lebih hemat, tampilan rapi, tinggal terima beres.",
  },
  {
    title: "Custom request",
    desc: "Tema & warna sesuai referensi (pastel, nude, gold, dll.).",
  },
];

const highlight = { src: "/gallery/highlight.png", alt: "Best-seller seserahan" };

const gallery = [
  { src: "/gallery/01.png", alt: "Seserahan 1" },
  { src: "/gallery/02.png", alt: "Seserahan 2" },
  { src: "/gallery/03.png", alt: "Seserahan 3" },
  { src: "/gallery/04.png", alt: "Seserahan 4" },
  { src: "/gallery/05.png", alt: "Seserahan 5" },
  { src: "/gallery/06.png", alt: "Seserahan 6" },
];

const packages = [
  {
    title: "Basic",
    price: "Mulai dari Rp…",
    points: ["Simple tapi rapi", "Cocok kebutuhan minimal", "Konsultasi via WA"],
  },
  {
    title: "Standard",
    price: "Mulai dari Rp…",
    points: ["Lebih lengkap", "Detail dekor lebih banyak", "Pilihan tema lebih luas"],
  },
  {
    title: "Premium",
    price: "Mulai dari Rp…",
    points: ["Tampilan mewah", "Dekor & detail maksimal", "Prioritas slot (jika ada)"],
  },
];

const testimonials = [
  {
    name: "Aulia — Tangerang",
    quote: "Hasilnya rapi banget, fotonya jadi cantik. Respon juga cepat.",
  },
  {
    name: "Dina — Ciledug",
    quote: "Warnanya sesuai request, detailnya bagus. Recommended!",
  },
  {
    name: "Rani — BSD",
    quote: "Paketnya lengkap, tinggal terima beres. Thank you!",
  },
];

const faqs = [
  {
    q: "Bisa custom warna/tema?",
    a: "Bisa. Kirim referensi (IG/Pinterest) dan kita sesuaikan dengan budget & ketersediaan.",
  },
  {
    q: "Booking minimal berapa hari?",
    a: "Idealnya 3–7 hari sebelum acara (tergantung slot dan kompleksitas request).",
  },
  {
    q: "Area layanan di mana saja?",
    a: "Tangerang & sekitar. Detail ongkir/antar bisa ditanya via WhatsApp.",
  },
  {
    q: "Sistem DP bagaimana?",
    a: "DP untuk booking tanggal. Pelunasan menyesuaikan kesepakatan (cantumkan aturan kamu).",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50";

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <>
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <a href="#top" className="font-bold tracking-tight">
              {site.brand}
            </a>

            <nav className="hidden gap-6 text-sm md:flex">
              <a className="hover:underline" href="#layanan">
                Layanan
              </a>
              <a className="hover:underline" href="#paket">
                Paket
              </a>
              <a className="hover:underline" href="#galeri">
                Galeri
              </a>
              <a className="hover:underline" href="#faq">
                FAQ
              </a>
              <a className="hover:underline" href="#kontak">
                Kontak
              </a>
            </nav>

            <div className="flex gap-2">
              <Button href={waLink()}>Chat WhatsApp</Button>
            </div>
          </div>
        </Container>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-slate-100 py-14">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs">
                  <span>✅ {site.area}</span>
                  <span className="text-slate-400">•</span>
                  <span>✅ Bisa custom</span>
                  <span className="text-slate-400">•</span>
                  <span>✅ Fast response</span>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  {site.headline}
                </h1>

                <p className="mt-4 text-slate-600">{site.subheadline}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={waLink()}>Chat WhatsApp – Tanya Paket</Button>
                  <Button href="#galeri" variant="secondary">
                    Lihat Galeri
                  </Button>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Klik WhatsApp sudah otomatis isi template pesan.
                </p>
              </div>

              {/* Area highlight (foto best-seller) */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <Image
                    src={highlight.src}
                    alt={highlight.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-xs text-slate-600">
                    Area highlight (boleh diganti foto best-seller).
                  </p>
                  <a
                    href="#galeri"
                    className="text-xs font-semibold text-slate-900 hover:underline"
                  >
                    Lihat semua →
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Why */}
        <section className="py-14">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">Rapi & estetik</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Detail hiasan diperhatikan biar hasilnya kelihatan “wah”.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">Bisa custom</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Tema, warna, dan jumlah set menyesuaikan request.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">Praktis</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Tinggal booking, seserahan siap tampil untuk hari H.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section id="layanan" className="border-t border-slate-100 py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">Layanan</h2>
            <p className="mt-2 text-slate-600">
              Pilih layanan sesuai kebutuhan, bisa konsultasi dulu.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <h3 className="font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Pricing */}
        <section id="paket" className="border-t border-slate-100 py-14">
          <Container>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Paket & Harga
                </h2>
                <p className="mt-2 text-slate-600">
                  Harga menyesuaikan jumlah & tema. Chat WA untuk pricelist.
                </p>
              </div>
              <Button href={waLink()}>Minta Pricelist</Button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {packages.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-bold">{p.title}</h3>
                    <span className="text-sm text-slate-600">{p.price}</span>
                  </div>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                    {p.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button href={waLink()}>Booking {p.title}</Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Gallery */}
        <section id="galeri" className="border-t border-slate-100 py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">Galeri</h2>
            <p className="mt-2 text-slate-600">
              Beberapa hasil sewa & hias seserahan (tema bisa custom).
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {gallery.map((g) => (
                <div
                  key={g.src}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* CTA kecil setelah galeri */}
            <div className="mt-6">
              <Button href={waLink()}>Mau tema kayak gini? Chat WA</Button>
            </div>
          </Container>
        </section>

        {/* Steps */}
        <section className="border-t border-slate-100 py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">Cara Order</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Chat WhatsApp", "Kirim tanggal acara + jumlah seserahan."],
                ["Pilih tema/paket", "Tentukan warna & konsep sesuai request."],
                ["Fix booking", "Bayar DP → seserahan diproses."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials */}
        <section className="border-t border-slate-100 py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">Testimoni</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <p className="text-sm text-slate-600">“{t.quote}”</p>
                  <p className="mt-4 text-sm font-semibold">{t.name}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-slate-100 py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">FAQ</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <p className="font-bold">{f.q}</p>
                  <p className="mt-2 text-sm text-slate-600">{f.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact */}
        <section id="kontak" className="border-t border-slate-100 py-14">
          <Container>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">Kontak</h2>
                <p className="mt-2 text-slate-600">
                  Konsultasi cepat via WhatsApp. Bisa juga cek update di Instagram.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={waLink()}>Chat WhatsApp</Button>
                  <Button href={site.instagramUrl} variant="secondary">
                    Instagram
                  </Button>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 p-6">
                  <p className="text-sm font-semibold">{site.brand}</p>
                  <p className="mt-1 text-sm text-slate-600">{site.area}</p>
                  <p className="mt-3 text-sm text-slate-600">WA: {site.phoneDisplay}</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <iframe
                  src={site.mapsEmbedUrl}
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Container>
        </section>

        <footer className="border-t border-slate-100 py-8">
          <Container>
            <div className="flex flex-col gap-2 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} {site.brand}. All rights reserved.
              </p>
              <p className="text-xs">Built with Next.js • CTA WhatsApp • LocalBusiness schema</p>
            </div>
          </Container>
        </footer>

        {/* Sticky CTA WhatsApp (mobile only) */}
        <StickyWA />
      </main>
    </>
  );
}