interface LogoProps {
  dark?: boolean;
  className?: string;
}

export default function Logo({ dark = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      <span
        className={`font-display font-bold text-lg tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        AutoFlow<span className="text-primary">.vn</span>
      </span>
    </div>
  );
}
