// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { site } from "../data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "#09090b",
          color: "white",
        }}
      >
        <div style={{ fontSize: 18, opacity: 0.85 }}>{site.city}</div>

        <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, marginTop: 12 }}>
          {site.name}
        </div>

        <div style={{ fontSize: 34, fontWeight: 700, opacity: 0.9, marginTop: 18 }}>
          {site.tagline}
        </div>

        <div style={{ fontSize: 22, opacity: 0.8, marginTop: 18, maxWidth: 900 }}>
          {site.description}
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 34 }}>
          <div
            style={{
              padding: "10px 16px",
              borderRadius: 999,
              background: "white",
              color: "#09090b",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Booking via WhatsApp
          </div>
          <div
            style={{
              padding: "10px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: 18,
              fontWeight: 700,
              opacity: 0.9,
            }}
          >
            Fast • Mobile Friendly
          </div>
        </div>
      </div>
    ),
    size
  );
}