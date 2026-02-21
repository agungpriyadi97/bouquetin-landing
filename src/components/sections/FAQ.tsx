import { site } from "../../data/site";
import Section from "../Section";

export default function FAQ() {
  return (
    <Section id="faq" title="FAQ">
      <div className="space-y-3">
        {site.faqs.map((f) => (
          <details
            key={f.q}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4"
          >
            <summary className="cursor-pointer text-sm font-semibold">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-zinc-300">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
