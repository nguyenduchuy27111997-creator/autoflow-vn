import { type ReactNode } from "react";

interface ContainerProps {
  id?: string;
  as?: "section" | "div";
  className?: string;
  children: ReactNode;
}

export default function Container({
  id,
  as: Tag = "section",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Tag id={id} className={className}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </Tag>
  );
}
