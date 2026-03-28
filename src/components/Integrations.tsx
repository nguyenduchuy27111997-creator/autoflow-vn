"use client";

const integrations = [
  { name: "Zalo OA", color: "#0068FF" },
  { name: "MISA", color: "#E31937" },
  { name: "Shopee", color: "#EE4D2D" },
  { name: "KiotViet", color: "#00A651" },
  { name: "TikTok Shop", color: "#111" },
  { name: "Google Sheets", color: "#0F9D58" },
  { name: "Facebook", color: "#1877F2" },
  { name: "Telegram", color: "#0088CC" },
];

export default function Integrations() {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-slate-400 mb-8">
          Tích hợp trực tiếp với hệ sinh thái Việt Nam
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2.5 group cursor-default"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110"
                style={{ backgroundColor: item.color }}
              >
                {item.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
