import { site } from "../../data/site";
import Section from "../Section"; 
import Card from "../Card";

export default function Testimonials() {
  return (
    <Section id="testimoni" title="Testimoni pelanggan">
      <div className="grid gap-4 md:grid-cols-3">
        {site.testimonials.map((t) => (
          <Card key={t.name}>
            <p className="text-sm text-zinc-200">“{t.text}”</p>
            <p className="mt-3 text-sm font-semibold">— {t.name}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}