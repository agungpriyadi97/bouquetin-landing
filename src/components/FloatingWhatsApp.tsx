// src/components/FloatingWhatsApp.tsx
import { buildWaLink, site } from "../data/site";

export default function FloatingWhatsApp() {
  const wa = buildWaLink(
    `Halo ${site.name}, saya mau booking potong.\nNama:\nTanggal:\nJam:\nLayanan:\n`
  );

  return (
    <a
      href={wa}
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-semibold text-zinc-900 shadow-lg hover:opacity-90"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white">
        WA
      </span>
      <span className="hidden sm:inline">Booking WhatsApp</span>
    </a>
  );
}