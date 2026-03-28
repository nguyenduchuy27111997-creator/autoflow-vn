import { type ReactNode } from "react";

interface CardProps {
  popular?: boolean;
  className?: string;
  children: ReactNode;
}

export default function Card({
  popular = false,
  className = "",
  children,
}: CardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg ${
        popular
          ? "border-primary shadow-md shadow-primary/5 ring-1 ring-primary/20"
          : "border-slate-200 hover:border-primary/30 hover:shadow-primary/5"
      } ${className}`}
    >
      {children}
    </div>
  );
}
