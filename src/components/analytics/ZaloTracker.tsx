"use client";

import { useEffect } from "react";
import { trackZaloOpen } from "@/lib/analytics";

/** Observes Zalo chat widget open via MutationObserver on the widget container. */
export default function ZaloTracker() {
  useEffect(() => {
    // Zalo widget injects an iframe when opened — observe DOM for it
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            // Zalo widget opens when iframe becomes visible or container expands
            const zaloFrame = node.querySelector?.("iframe[src*='zalo']") ||
              (node.tagName === "IFRAME" && node.getAttribute("src")?.includes("zalo") ? node : null);
            if (zaloFrame) {
              trackZaloOpen();
              return;
            }
          }
        }
      }
    });

    // Also track clicks on the Zalo widget button
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".zalo-chat-widget") || target.closest("[data-oaid]")) {
        trackZaloOpen();
      }
    };

    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("click", handleClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
