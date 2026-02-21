"use client";

import { useMemo, useState } from "react";
import { site, buildWaLink } from "../../data/site";
import Section from "../Section";
import Card from "../Card";
import { buildBookingMessage } from "../lib/booking";

type FormState = {
  name: string;
  service: string;
  date: string;
  time: string;
  note: string;
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    service: site.services[0]?.name ?? "",
    date: "",
    time: "",
    note: "",
  });

  const valid = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.service.trim().length > 0 &&
      form.date.trim().length > 0 &&
      form.time.trim().length > 0
    );
  }, [form]);

  const waHref = useMemo(() => {
    const msg = buildBookingMessage({
      name: form.name.trim(),
      service: form.service,
      date: form.date,
      time: form.time,
      note: form.note,
    });
    return buildWaLink(msg);
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  return (
    <Section id="booking" title="Booking">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm text-zinc-300">
            Isi form ini, nanti otomatis kebuka WhatsApp dengan format pesan yang rapi.
          </p>

          <div className="mt-5 space-y-4">
            <Field label="Nama">
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Nama kamu"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-zinc-600"
              />
            </Field>

            <Field label="Layanan">
              <select
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-zinc-600"
              >
                {site.services.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name} — {s.price}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Tanggal">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-zinc-600"
                />
              </Field>

              <Field label="Jam">
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-zinc-600"
                />
              </Field>
            </div>

            <Field label="Catatan (opsional)">
              <textarea
                value={form.note}
                onChange={(e) => update("note", e.target.value)}
                placeholder="Contoh: mau skin fade, rambut tebal"
                rows={3}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-zinc-600"
              />
            </Field>

            <a
              href={valid ? waHref : "#"}
              onClick={(e) => {
                if (!valid) e.preventDefault();
              }}
              className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ${
                valid
                  ? "bg-white text-zinc-900 hover:opacity-90"
                  : "cursor-not-allowed bg-zinc-800 text-zinc-400"
              }`}
            >
              {valid ? "Kirim ke WhatsApp" : "Lengkapi data dulu"}
            </a>

            <p className="text-xs text-zinc-500">
              Nomor tujuan: +{site.phoneE164}
            </p>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Format pesan</h3>
          <p className="mt-2 text-sm text-zinc-300 whitespace-pre-line">
            {buildBookingMessage({
              name: form.name.trim() || "(Nama)",
              service: form.service || "(Layanan)",
              date: form.date || new Date().toISOString().slice(0, 10),
              time: form.time || "10:00",
              note: form.note,
            })}
          </p>
        </Card>
      </div>
    </Section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-200">
        {label}
      </span>
      {children}
    </label>
  );
}