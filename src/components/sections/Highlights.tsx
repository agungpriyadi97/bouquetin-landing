import { site } from "../../data/site";
import Section from "../Section";
import Card from "../Card";

export default function Highlights() {
  return (
    <Section id="keunggulan" title="Kenapa pilih kami">
      <div className="grid gap-4 md:grid-cols-3">
        {site.highlights.map((h) => (
          <Card key={h.title}>
            <h3 className="text-lg font-semibold">{h.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{h.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}