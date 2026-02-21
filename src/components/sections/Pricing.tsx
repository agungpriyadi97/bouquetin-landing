import { site, buildWaLink } from "../../data/site";
import Section from "../Section";
import Card from "../Card";

export default function Pricing() {
  const wa = buildWaLink(
    `Halo ${site.name}, saya mau booking potong.\nNama:\nTanggal:\nJam:\nLayanan:\n`
  );

  return (
    <Section id="harga" title="Layanan & harga">
      <div className="grid gap-4 md:grid-cols-2">
        {site.services.map((s) => (
          <Card key={s.name}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{s.name}</h3>
                {s.note ? (
                  <p className="mt-1 text-sm text-zinc-300">{s.note}</p>
                ) : null}
              </div>
              <div className="shrink-0 rounded-full bg-zinc-800 px-3 py-1 text-sm">
                {s.price}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#booking"
          className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90"
        >
          Isi form booking
        </a>
        <a
          href={wa}
          className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold hover:bg-zinc-900"
        >
          Chat WhatsApp
        </a>
      </div>
    </Section>
  );
}