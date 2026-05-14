"use client";
import { useEffect, useRef } from "react";
import { trackAuditStepView } from "@/lib/analytics";

/**
 * Fires audit_step_view 500ms after step mount.
 * Cleanup cancels the timer if step changes within 500ms (debounces rapid back/forward).
 * D-07: per-step drop-off lens — view fires on mount, completed fires on Next click + validation pass.
 */
export function AuditStepTracker({ step, formStartedAt }: { step: number; formStartedAt: number }) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      trackAuditStepView(step, formStartedAt ? Date.now() - formStartedAt : 0);
    }, 500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [step, formStartedAt]);

  return null;
}
