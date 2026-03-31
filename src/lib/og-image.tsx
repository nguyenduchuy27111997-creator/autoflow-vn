import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

interface OgImageProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export function generateOgImage({ title, subtitle, badge }: OgImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background:
            "linear-gradient(135deg, #0050DD 0%, #0077FF 50%, #0066FF 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
          padding: "60px 80px",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexWrap: "wrap",
            opacity: 0.05,
          }}
        >
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "white",
                margin: "22px 46px",
              }}
            />
          ))}
        </div>

        {/* Top: Logo + Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          {/* Logo icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(255,255,255,0.15)",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 192 192" fill="none">
              <polyline
                points="56,56 96,56 96,96 136,96 136,136"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
              <circle cx="56" cy="56" r="14" fill="white" />
              <circle cx="96" cy="56" r="11" fill="white" />
              <circle cx="96" cy="96" r="11" fill="white" />
              <circle cx="136" cy="96" r="11" fill="white" />
              <circle cx="136" cy="136" r="14" fill="white" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "-0.02em",
            }}
          >
            AutoFlow.vn
          </span>
          {badge && (
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "white",
                background: "rgba(255,255,255,0.15)",
                padding: "6px 16px",
                borderRadius: 8,
                marginLeft: 8,
              }}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            maxWidth: 900,
            marginBottom: subtitle ? 24 : 0,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
              lineHeight: 1.5,
              maxWidth: 800,
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
            fontWeight: 600,
          }}
        >
          autoflowvn.net
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
