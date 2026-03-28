import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-primary/25",
  secondary:
    "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300",
  ghost: "bg-slate-100 hover:bg-slate-200 text-slate-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  loading = false,
  disabled = false,
  type = "button",
  className = "",
  children,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled || loading ? "opacity-60 pointer-events-none" : ""
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={classes}
    >
      {loading ? "Đang gửi..." : children}
    </button>
  );
}
