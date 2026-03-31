import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AutoFlow VN — Tự Động Hóa Quy Trình Cho SME Việt Nam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0050DD 0%, #0077FF 50%, #0066FF 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexWrap: "wrap",
            opacity: 0.06,
          }}
        >
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "white",
                margin: "22px 46px",
              }}
            />
          ))}
        </div>

        {/* Logo icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "rgba(255,255,255,0.15)",
            marginBottom: 40,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 192 192"
            fill="none"
          >
            <circle cx="56" cy="56" r="5" fill="rgba(255,255,255,0.2)" />
            <circle cx="96" cy="56" r="5" fill="rgba(255,255,255,0.2)" />
            <circle cx="136" cy="56" r="5" fill="rgba(255,255,255,0.2)" />
            <circle cx="56" cy="96" r="5" fill="rgba(255,255,255,0.2)" />
            <circle cx="96" cy="96" r="5" fill="rgba(255,255,255,0.2)" />
            <circle cx="136" cy="96" r="5" fill="rgba(255,255,255,0.2)" />
            <circle cx="56" cy="136" r="5" fill="rgba(255,255,255,0.2)" />
            <circle cx="96" cy="136" r="5" fill="rgba(255,255,255,0.2)" />
            <circle cx="136" cy="136" r="5" fill="rgba(255,255,255,0.2)" />
            <polyline
              points="56,56 96,56 96,96 136,96 136,136"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
            <circle cx="56" cy="56" r="12" fill="white" />
            <circle cx="96" cy="56" r="10" fill="white" />
            <circle cx="96" cy="96" r="10" fill="white" />
            <circle cx="136" cy="96" r="10" fill="white" />
            <circle cx="136" cy="136" r="12" fill="white" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.03em",
            }}
          >
            AutoFlow
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "-0.03em",
            }}
          >
            .vn
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.8)",
            fontWeight: 500,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Tự Động Hóa Quy Trình Cho SME Việt Nam
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 32,
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            fontWeight: 600,
          }}
        >
          <span>n8n · Zalo OA · MISA · Shopee</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
