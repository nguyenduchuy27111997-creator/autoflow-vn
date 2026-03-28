import { type ReactNode } from "react";

interface CheckItemProps {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

export default function CheckItem({
  children,
  dark = false,
  className = "",
}: CheckItemProps) {
  return (
    <div className={`flex items-start gap-2.5 text-sm ${className}`}>
      <svg
        className="shrink-0 mt-0.5 text-accent"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M2 8l4 4 8-8" />
      </svg>
      <span className={dark ? "text-slate-300" : "text-slate-600"}>
        {children}
      </span>
    </div>
  );
}
