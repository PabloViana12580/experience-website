import { ImageResponse } from "next/og";

export const alt =
  "Takoah — tacos, tequila, and golden-hour evenings in Playa El Paredón";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #f4e5c7 0%, #e9b35f 42%, #a7553d 68%, #17213b 100%)",
          color: "#f8f0df",
          fontFamily: "Arial, sans-serif",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: 0.88,
          }}
        >
          Playa El Paredón, Guatemala
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 118,
              lineHeight: 0.92,
              fontWeight: 700,
              letterSpacing: -4,
            }}
          >
            Takoah
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              maxWidth: 760,
              fontSize: 42,
              lineHeight: 1.12,
            }}
          >
            Tacos, tequila, and golden-hour evenings by the Pacific.
          </div>
        </div>
      </div>
    ),
    size
  );
}