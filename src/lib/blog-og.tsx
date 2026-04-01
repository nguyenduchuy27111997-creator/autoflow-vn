import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogRuntime = "edge";

const categoryEmojis: Record<string, string> = {
  Pillar: "📘", "E-commerce": "🛒", "Bất động sản": "🏠", "Giáo dục": "🎓",
  "Y tế": "🏥", "Làm đẹp": "💅", "F&B": "🍽️", Startup: "🚀", Retail: "🏪",
  HR: "👥", "Kế toán": "📊", AI: "🤖", "Kiến thức": "💡", "So sánh": "⚖️",
  "Hướng dẫn": "📖", Marketing: "📣",
};

const categoryGradients: Record<string, string> = {
  Pillar: "#0066FF", "E-commerce": "#F59E0B", "Bất động sản": "#8B5CF6",
  "Giáo dục": "#3B82F6", "Y tế": "#EF4444", "Làm đẹp": "#EC4899",
  "F&B": "#D97706", Startup: "#7C3AED", Retail: "#10B981",
  HR: "#0EA5E9", "Kế toán": "#14B8A6", AI: "#8B5CF6",
  "Kiến thức": "#64748B", "So sánh": "#4F46E5", "Hướng dẫn": "#06B6D4",
  Marketing: "#F43F5E",
};

export function generateBlogOGImage(title: string, category: string, readTime: string) {
  const emoji = categoryEmojis[category] || "📝";
  const accentColor = categoryGradients[category] || "#0066FF";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "#FAFBFC",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.4,
          }}
        />

        {/* Accent bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: accentColor,
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Category badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "36px" }}>{emoji}</span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: accentColor,
                background: `${accentColor}15`,
                padding: "6px 16px",
                borderRadius: "100px",
              }}
            >
              {category}
            </span>
            <span style={{ fontSize: "14px", color: "#94A3B8" }}>· {readTime}</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: title.length > 50 ? "40px" : "48px",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.2,
              maxWidth: "900px",
              margin: 0,
            }}
          >
            {title}
          </h1>

          {/* Footer */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "16px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "#0066FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A" }}>AutoFlow VN</span>
            <span style={{ fontSize: "14px", color: "#94A3B8" }}>· autoflowvn.net</span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
