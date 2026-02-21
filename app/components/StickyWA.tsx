import { waLink } from "@/app/lib/site";

export default function StickyWA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/90 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-tight">Konsultasi cepat</p>
          <p className="truncate text-xs text-slate-600">
            Klik WhatsApp — template pesan otomatis
          </p>
        </div>
        <a
          href={waLink()}
          className="shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Chat WA
        </a>
      </div>
    </div>
  );
}