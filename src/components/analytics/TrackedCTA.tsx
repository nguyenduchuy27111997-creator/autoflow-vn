"use client";

import { trackCTAClick } from "@/lib/analytics";

interface TrackedCTAProps {
  href: string;
  location: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/** Anchor tag that fires cta_click GA4 event on click. */
export default function TrackedCTA({ href, location, label, children, className, onClick }: TrackedCTAProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        trackCTAClick(location, label, href);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
