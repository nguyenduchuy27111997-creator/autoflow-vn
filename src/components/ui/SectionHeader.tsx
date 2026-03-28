import { type ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: ReactNode;
  gradientText?: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  gradientText,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const containerClasses = `${
    align === "center" ? "text-center max-w-2xl mx-auto" : ""
  } ${className}`;

  return (
    <div className={containerClasses}>
      {badge && (
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
          {badge}
        </p>
      )}
      <h2
        className={`font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4 ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
        {gradientText && (
          <>
            {" "}
            <span className="gradient-text">{gradientText}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={`text-lg ${dark ? "text-slate-400" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
