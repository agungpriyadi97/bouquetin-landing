# Barbershop Landing Page (Next.js + Tailwind)

Landing page 1 halaman untuk Barbershop, fokus konversi ke WhatsApp.
Semua data bisa diganti dari satu file: `src/data/site.ts`.

## Cara ganti data (WAJIB)
Buka `src/data/site.ts`, lalu isi:
- `name` (nama barbershop)
- `phoneE164` (nomor WhatsApp format 62812xxxxxxx, tanpa +)
- `address` (alamat lengkap)
- `openingHours` (jam buka)
- `services` (layanan & harga)
- `googleMapsEmbedUrl` (link embed maps)

### Cara ambil Google Maps Embed
1. Buka Google Maps, cari lokasi
2. Klik Share
3. Pilih tab **Embed a map**
4. Copy HTML, ambil URL yang ada di `src="..."` dan paste ke `googleMapsEmbedUrl`

## Ganti foto
Taruh foto di folder `public/`:
- `public/hero.jpg`
- `public/gallery-1.jpg` s/d `public/gallery-6.jpg`

Jika nama file beda, sesuaikan array `gallery` di `src/data/site.ts`.

## Jalankan lokal
```bash
npm install
npm run dev