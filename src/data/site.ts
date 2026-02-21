// src/data/site.ts
export type Service = { name: string; price: string; note?: string };
export type OpeningHour = { day: string; hours: string };
export type Highlight = { title: string; desc: string };
export type Testimonial = { name: string; text: string };
export type FAQ = { q: string; a: string };

export const site = {
  // ====== IDENTITAS BISNIS ======
  name: "SIXTIN BARBERSHOP",
  city: "Tangerang",
  tagline: "Potong rapi, tampil pede.",
  description:
    "Barber berpengalaman, alat steril, booking cepat via WhatsApp.",

  // ====== KONTAK ======
  // Format E.164 tanpa +, contoh Indonesia: 62812xxxxxxx
  phoneE164: "6285545145730",
  address: "Jl. Kramat Bencongan, RT.003/RW.005, Bencongan, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",

  // ====== GOOGLE MAPS EMBED ======
  // Cara ambil: Google Maps → Share → Embed a map → Copy HTML → ambil URL di src=""
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.327151237249!2d106.60108007409632!3d-6.220520160923092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff005ae6db47%3A0xfb47db351f5b7f94!2sWarung%20om%20botak!5e0!3m2!1sid!2sid!4v1771647168596!5m2!1sid!2sid",

  // ====== JAM BUKA ======
  openingHours: [
    { day: "Senin–Jumat", hours: "10.00–21.00" },
    { day: "Sabtu–Minggu", hours: "09.00–22.00" },
  ] as OpeningHour[],

  // ====== KEUNGGULAN (3–4 ITEM) ======
  highlights: [
    { title: "Barber Berpengalaman", desc: "Model sesuai bentuk wajah." },
    { title: "Alat Steril & Bersih", desc: "Nyaman dan aman." },
    { title: "Booking Cepat", desc: "Chat WA, pilih jam, datang sesuai jadwal." },
  ] as Highlight[],

  // ====== LAYANAN & HARGA ======
  services: [
    { name: "Basic Cut", price: "Rp35.000", note: "20–30 menit" },
    { name: "Fade / Skin Fade", price: "Rp45.000", note: "30–40 menit" },
    { name: "Haircut + Wash", price: "Rp55.000", note: "include shampoo" },
    { name: "Beard Trim", price: "Rp25.000" },
  ] as Service[],

  // ====== GALERI (FILE DI /public) ======
  // Nama file harus ada di folder /public
  gallery: [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
  ],

  // ====== TESTIMONI ======
  testimonials: [
    { name: "Egi", text: "Pelayanan bagus, hasil potong rapi." },
    { name: "Budi", text: "Barber ramah dan alat steril." },
    { name: "Andi", text: "Booking cepat via WhatsApp, sangat praktis." },
    { name: "Budi", text: "Hasil potong rapi dan harga terjangkau." },
    { name: "Alex", text: "Pelayanan ramah dan hasil potong rapi." },
    { name: "Bosul", text: "Pelayanan ramah dan hasil potong rapi." },
  ] as Testimonial[],

  // ====== FAQ ======
  faqs: [
    { q: "Bisa walk-in?", a: "Bisa, tapi booking dulu biar nggak menunggu." },
    { q: "Durasi potong?", a: "Rata-rata 20–40 menit tergantung model." },
    { q: "Pembayaran?", a: "Cash / transfer / QRIS (sesuaikan)." },
  ] as FAQ[],

  // ====== SOSMED (OPSIONAL) ======
  socials: {
    instagram: "https://instagram.com/rapi.barbershop",
    tiktok: "https://tiktok.com/@rapibarbershop",
  },
} as const;

export function buildWaLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.phoneE164}?text=${text}`;
}