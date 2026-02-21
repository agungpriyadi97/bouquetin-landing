// data/site.ts
export type Service = { name: string; price: string; note?: string };
export type Highlight = { title: string; desc: string };
export type Testimonial = { name: string; text: string };
export type FAQ = { q: string; a: string };

export const site = {
  name: "Rapi Barbershop",
  city: "Jakarta",
  tagline: "Potong rapi, tampil pede.",
  description:
    "Barbershop dengan barber berpengalaman, alat steril, dan booking cepat via WhatsApp.",
  phoneE164: "6281234567890", // tanpa +
  address: "Jl. Contoh No. 10, Jakarta",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d... (ganti embed link)",
  openingHours: [
    { day: "Senin–Jumat", hours: "10.00–21.00" },
    { day: "Sabtu–Minggu", hours: "09.00–22.00" },
  ],
  services: [
    { name: "Basic Cut", price: "Rp35.000", note: "20–30 menit" },
    { name: "Fade / Skin Fade", price: "Rp45.000", note: "30–40 menit" },
    { name: "Haircut + Wash", price: "Rp55.000", note: "include shampoo" },
    { name: "Beard Trim", price: "Rp25.000", note: "rapi & simetris" },
    { name: "Kids Cut", price: "Rp30.000", note: "ramah anak" },
  ] as Service[],
  highlights: [
    {
      title: "Barber Berpengalaman",
      desc: "Rekomendasi model sesuai bentuk wajah & style kamu.",
    },
    {
      title: "Alat Steril & Bersih",
      desc: "Peralatan dibersihkan rutin untuk kenyamanan.",
    },
    {
      title: "Booking Cepat",
      desc: "Chat WhatsApp, pilih jam, datang sesuai jadwal.",
    },
  ] as Highlight[],
  gallery: [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
  ],
  testimonials: [
    { name: "Andi", text: "Fadenya halus, barbernya ramah. Repeat terus." },
    {
      name: "Raka",
      text: "Tempat bersih, booking gampang, nggak perlu nunggu lama.",
    },
    { name: "Fajar", text: "Harga masuk akal, hasilnya konsisten." },
  ] as Testimonial[],
  faqs: [
    { q: "Bisa walk-in?", a: "Bisa, tapi booking dulu biar nggak nunggu lama." },
    { q: "Durasi potong berapa lama?", a: "Rata-rata 20–40 menit tergantung model." },
    { q: "Pembayaran apa saja?", a: "Cash / transfer / QRIS (sesuaikan di tempat)." },
  ] as FAQ[],
  socials: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/@",
  },
} as const;

export function buildWaLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.phoneE164}?text=${text}`;
}