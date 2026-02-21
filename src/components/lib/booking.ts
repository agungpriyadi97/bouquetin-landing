// lib/booking.ts
import { site } from "../../data/site";

export type BookingPayload = {
  name: string;
  service: string;
  date: string; // yyyy-mm-dd
  time: string; // hh:mm
  note?: string;
};

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

export function formatDateID(isoDate: string) {
  // input: yyyy-mm-dd
  const d = new Date(isoDate + "T00:00:00");
  const day = pad2(d.getDate());
  const month = pad2(d.getMonth() + 1);
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export function formatTimeID(time: string) {
  // input: HH:mm → output: HH.mm WIB
  const [hh, mm] = time.split(":");
  return `${hh}.${mm} WIB`;
}

export function buildBookingMessage(p: BookingPayload) {
  const tanggal = formatDateID(p.date);
  const jam = formatTimeID(p.time);

  return [
    `Halo ${site.name}, saya mau booking potong.`,
    ``,
    `Nama: ${p.name}`,
    `Layanan: ${p.service}`,
    `Tanggal: ${tanggal}`,
    `Jam: ${jam}`,
    p.note?.trim() ? `Catatan: ${p.note.trim()}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}