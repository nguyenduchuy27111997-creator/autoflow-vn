import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="mb-10">
        <Logo />
      </div>

      {/* 404 illustration — staircase icon large */}
      <div className="w-24 h-24 rounded-2xl bg-primary/5 flex items-center justify-center mb-8">
        <svg width="48" height="48" viewBox="0 0 192 192" fill="none">
          <circle cx="56" cy="56" r="8" fill="var(--primary)" opacity="0.15" />
          <circle cx="96" cy="56" r="8" fill="var(--primary)" opacity="0.15" />
          <circle cx="136" cy="56" r="8" fill="var(--primary)" opacity="0.15" />
          <circle cx="56" cy="96" r="8" fill="var(--primary)" opacity="0.15" />
          <circle cx="96" cy="96" r="8" fill="var(--primary)" opacity="0.15" />
          <circle cx="136" cy="96" r="8" fill="var(--primary)" opacity="0.15" />
          <circle cx="56" cy="136" r="8" fill="var(--primary)" opacity="0.15" />
          <circle cx="96" cy="136" r="8" fill="var(--primary)" opacity="0.15" />
          <circle cx="136" cy="136" r="8" fill="var(--primary)" opacity="0.15" />
          {/* Broken path — staircase stops midway */}
          <polyline
            points="56,56 96,56 96,96"
            stroke="var(--primary)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
          <circle cx="56" cy="56" r="12" fill="var(--primary)" opacity="0.3" />
          <circle cx="96" cy="56" r="10" fill="var(--primary)" opacity="0.3" />
          <circle cx="96" cy="96" r="10" fill="var(--primary)" opacity="0.3" />
          {/* X mark at the break point */}
          <line
            x1="124"
            y1="84"
            x2="148"
            y2="108"
            stroke="var(--primary)"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.5"
          />
          <line
            x1="148"
            y1="84"
            x2="124"
            y2="108"
            stroke="var(--primary)"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Text */}
      <p className="text-6xl font-display font-extrabold text-slate-900 mb-3">
        404
      </p>
      <h1 className="font-display font-bold text-xl text-slate-900 mb-2">
        Trang không tồn tại
      </h1>
      <p className="text-slate-500 text-center max-w-md mb-8">
        Workflow này chưa được thiết lập. Hãy quay lại trang chủ hoặc khám phá
        dịch vụ tự động hóa của chúng tôi.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
        >
          Về trang chủ
        </Link>
        <Link
          href="/audit"
          className="border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all text-sm"
        >
          Nhận audit miễn phí
        </Link>
      </div>
    </div>
  );
}
