interface LogoProps {
  dark?: boolean;
  className?: string;
}

export default function Logo({ dark = false, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 192 192"
          fill="none"
        >
          {/* 3x3 grid dots */}
          <circle cx="56" cy="56" r="10" fill="rgba(255,255,255,0.35)" />
          <circle cx="96" cy="56" r="10" fill="rgba(255,255,255,0.35)" />
          <circle cx="136" cy="56" r="10" fill="rgba(255,255,255,0.35)" />
          <circle cx="56" cy="96" r="10" fill="rgba(255,255,255,0.35)" />
          <circle cx="96" cy="96" r="10" fill="rgba(255,255,255,0.35)" />
          <circle cx="136" cy="96" r="10" fill="rgba(255,255,255,0.35)" />
          <circle cx="56" cy="136" r="10" fill="rgba(255,255,255,0.35)" />
          <circle cx="96" cy="136" r="10" fill="rgba(255,255,255,0.35)" />
          <circle cx="136" cy="136" r="10" fill="rgba(255,255,255,0.35)" />
          {/* Staircase path */}
          <polyline
            points="56,56 96,56 96,96 136,96 136,136"
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
          {/* Active nodes */}
          <circle cx="56" cy="56" r="14" fill="white" />
          <circle cx="96" cy="56" r="12" fill="white" />
          <circle cx="96" cy="96" r="12" fill="white" />
          <circle cx="136" cy="96" r="12" fill="white" />
          <circle cx="136" cy="136" r="14" fill="white" />
        </svg>
      </span>
      <span
        className={`font-display font-bold text-lg tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        AutoFlow<span className="text-primary">.vn</span>
      </span>
    </span>
  );
}
