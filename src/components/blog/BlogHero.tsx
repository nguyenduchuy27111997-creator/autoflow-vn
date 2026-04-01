"use client";

import { useEffect, useRef, useState } from "react";

interface BlogHeroProps {
  category: string;
  categoryColor?: string;
  icon: string;
  title: string;
  readTime?: string;
  stats?: { value: string; label: string }[];
  gradient?: string;
}

const defaultGradients: Record<string, string> = {
  "F&B": "from-orange-500/90 via-amber-500/80 to-yellow-400/70",
  "E-commerce": "from-blue-600/90 via-indigo-500/80 to-purple-400/70",
  "Giáo dục": "from-blue-500/90 via-cyan-500/80 to-teal-400/70",
  "BĐS": "from-purple-600/90 via-violet-500/80 to-fuchsia-400/70",
  "Zalo OA": "from-blue-600/90 via-blue-500/80 to-cyan-400/70",
  "n8n": "from-orange-600/90 via-red-500/80 to-pink-400/70",
  default: "from-primary/90 via-secondary/80 to-accent/70",
};

const categoryBgColors: Record<string, string> = {
  "F&B": "bg-orange-400/20 text-white",
  "E-commerce": "bg-blue-400/20 text-white",
  "Giáo dục": "bg-cyan-400/20 text-white",
  "BĐS": "bg-purple-400/20 text-white",
  "Zalo OA": "bg-blue-400/20 text-white",
  "n8n": "bg-orange-400/20 text-white",
  default: "bg-white/20 text-white",
};

export default function BlogHero({
  category,
  icon,
  title,
  readTime = "10 phút đọc",
  stats,
  gradient,
}: BlogHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const grad = gradient || defaultGradients[category] || defaultGradients.default;
  const catColor = categoryBgColors[category] || categoryBgColors.default;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${grad} mb-10`}
    >
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left: category + meta */}
        <div
          className="flex-1 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${catColor}`}>
              {category}
            </span>
            <span className="text-xs text-white/60">{readTime}</span>
          </div>

          <h1 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
            {title}
          </h1>

          {stats && (
            <div className="flex flex-wrap gap-4 mt-2">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2"
                >
                  <div className="font-display font-extrabold text-lg text-white">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-white/70 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: large icon */}
        <div
          className="transition-all duration-700 delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.8)",
          }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <span className="text-6xl md:text-7xl">{icon}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
