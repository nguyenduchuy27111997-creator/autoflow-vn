"use client";

import { useEffect, useRef } from "react";
import { trackBlogRead } from "@/lib/analytics";

/** Tracks max scroll depth on blog pages. Fires blog_read at 25%, 50%, 75%, 100%. */
export default function BlogTracker({ article }: { article: string }) {
  const firedRef = useRef(new Set<number>());

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const t of thresholds) {
        if (percent >= t && !firedRef.current.has(t)) {
          firedRef.current.add(t);
          trackBlogRead(article, t);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article]);

  return null;
}
