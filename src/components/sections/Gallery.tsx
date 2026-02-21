import { site } from "../../data/site";
import Section from "../Section";

export default function Gallery() {
  return (
    <Section id="galeri" title="Galeri">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {site.gallery.map((src, i) => (
          <div
            key={src + i}
            className="aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
          >
            <img
              src={src}
              alt={`Galeri ${site.name} ${i + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-zinc-400">
        Foto taruh di <span className="font-mono">/public</span> biar tinggal ganti
        nama file.
      </p>
    </Section>
  );
}