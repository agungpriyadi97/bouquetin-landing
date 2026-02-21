import { site } from "../../data/site";
import Section from "../Section";
import Card from "../Card";

export default function Location() {
  return (
    <Section id="lokasi" title="Lokasi & jam buka">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold">{site.name}</h3>
          <p className="mt-2 text-sm text-zinc-300">{site.address}</p>

          <div className="mt-4 space-y-2">
            {site.openingHours.map((o) => (
              <div key={o.day} className="flex justify-between text-sm">
                <span className="text-zinc-300">{o.day}</span>
                <span className="font-medium">{o.hours}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={site.socials.instagram}
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold hover:bg-zinc-900"
            >
              Instagram
            </a>
            <a
              href={site.socials.tiktok}
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold hover:bg-zinc-900"
            >
              TikTok
            </a>
          </div>
        </Card>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <iframe
            src={site.googleMapsEmbedUrl}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}