"use client";

/**
 * ANL-03 — Route-based session recording gate.
 *
 * Watches pathname via usePathname. On every route change, starts or stops
 * PostHog session recording based on the D-05b allowlist.
 *
 * Allowlist (verbatim from CONTEXT.md D-05b — DO NOT EXPAND without approval):
 *   Enabled:  /  (homepage)
 *             /bang-gia  (exact + subtree)
 *             /blog/*
 *             /tai-lieu/*
 *   Disabled: everything else, including /audit/*, /api/*, /chat/*, /dashboard/*
 *
 * Returns null — renders nothing, side-effect only.
 * Env guard: no-ops when NEXT_PUBLIC_POSTHOG_KEY is unset.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { isReplayAllowed } from "@/lib/posthog-replay-allowlist";

export function PostHogSessionGate() {
  const pathname = usePathname();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
    try {
      if (isReplayAllowed(pathname || "/")) {
        posthog.startSessionRecording();
      } else {
        posthog.stopSessionRecording();
      }
    } catch {
      // PostHog may not be initialised yet on first render — safe to swallow.
    }
  }, [pathname]);

  return null;
}
