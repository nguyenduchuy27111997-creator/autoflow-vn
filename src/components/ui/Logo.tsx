import Image from "next/image";

interface LogoProps {
  dark?: boolean;
  className?: string;
}

export default function Logo({ dark = false, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo-autoflow-vn.svg"
        alt="AutoFlow VN"
        width={32}
        height={32}
        className="rounded-lg"
      />
      <span
        className={`font-display font-bold text-lg tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        AutoFlow <span className="text-primary">VN</span>
      </span>
    </span>
  );
}
