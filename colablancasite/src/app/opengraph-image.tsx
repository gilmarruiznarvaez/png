import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "COLABLANCA PLAZA · La casa del venado · Tegucigalpa";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,189,89,0.25), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(255,248,85,0.18), transparent 60%), #0f0f0f",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#fff855",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 56,
              height: 2,
              background: "#fff855",
            }}
          />
          Tegucigalpa · Honduras
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 124,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              color: "#ffffff",
            }}
          >
            Colablanca
          </div>
          <div
            style={{
              fontSize: 124,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              color: "#ffbd59",
            }}
          >
            Plaza
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 32,
              color: "#ffffff",
              opacity: 0.85,
              maxWidth: 720,
              lineHeight: 1.2,
            }}
          >
            Seis servicios premium. Una sola dirección. Cero compromisos.
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#fff855",
            }}
          >
            La casa del venado
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
