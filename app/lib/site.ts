export const site = {
  brand: "Bouquetin.trg",
  domain: "bouquetin.trg",
  headline: "Sewa & Hias Seserahan Tangerang — Rapi, Elegan, Siap Foto",
  subheadline:
    "Bouquetin.trg bantu seserahan kamu tampil cantik: pilihan paket lengkap, bisa custom tema & warna. Fast response via WhatsApp.",
  area: "Tangerang & sekitar",

  // === GANTI 3 INI ===
  whatsappNumber: "6281234567890", // format 62xxxx tanpa +
  instagramUrl: "https://instagram.com/bouquetin.trg",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=PASTE_DARI_GOOGLE_MAPS_EMBED",

  // opsional tampilan
  phoneDisplay: "+62 812-3456-7890",

  ctaMessage:
    "Halo Bouquetin.trg, mau tanya paket sewa & hias seserahan untuk tanggal [..] di area [..]. Jumlah seserahan kira-kira [..].",
};

export function waLink(customMessage?: string) {
  const text = encodeURIComponent(customMessage ?? site.ctaMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}