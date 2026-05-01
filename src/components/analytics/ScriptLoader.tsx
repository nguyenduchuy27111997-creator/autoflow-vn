"use client";

import { useEffect } from "react";

/**
 * Client component that loads external scripts after hydration.
 * Avoids Next.js 16 "script tag in React component" warning
 * by using DOM manipulation instead of <Script> component.
 */
export default function ScriptLoader() {
  useEffect(() => {
    // JSON-LD
    loadScript("/scripts/jsonld-loader.js");

    // GA consent defaults
    loadScript("/scripts/gtag-consent.js");

    // GA gtag.js
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (gaId) {
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, { async: true });
      loadScript("/scripts/gtag-init.js");
    }

    // Zalo SDK
    const zaloId = process.env.NEXT_PUBLIC_ZALO_OA_ID;
    if (zaloId) {
      loadScript("https://sp.zalo.me/plugins/sdk.js");
    }
  }, []);

  return null;
}

function loadScript(src: string, opts?: { async?: boolean }) {
  // Deduplicate
  if (document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement("script");
  script.src = src;
  if (opts?.async) script.async = true;
  document.body.appendChild(script);
}
