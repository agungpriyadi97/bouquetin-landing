import { ImageResponse } from "next/og";
import { site } from "../data/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const initials = site.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "#fff",
          fontSize: 26,
          fontWeight: 800,
          borderRadius: 16,
          letterSpacing: 1,
        }}
      >
        {initials || "BB"}
      </div>
    ),
    size
  );
}