/**
 * ════════════════════════════════════════════════════════════════════════
 * TRG-05 PII-STRIP HARD GATE (VN Law 91/2025/QH15 cross-border data)
 * ════════════════════════════════════════════════════════════════════════
 *
 * MANDATORY: Customer email, name, and phone MUST NEVER appear in the
 * Trigger.dev task PAYLOAD. The payload carries ONLY:
 *   - email_queue_row_id : UUID — Supabase email_queue.id (NOT PII)
 *   - sequence_type      : EmailSequenceType — enum, NOT PII
 *
 * The task body fetches email/name from the Supabase `email_queue` row at
 * EXECUTION time using the service-role key. PII therefore lives in the
 * EU worker's MEMORY only at execution time and is NEVER persisted by
 * Trigger.dev (no payload logging, no replay-captured PII).
 *
 * Code review checklist (enforced before merge — also runnable as grep):
 *   grep -nE '"email"|"name"|"phone"' \
 *     website/src/lib/email-queue.ts website/src/trigger/*.ts
 *   Must return 0 matches in TRIGGER CALL ARGUMENTS or payload type
 *   definitions. Matches inside SQL queries inside the task body are OK
 *   (PII is fetched from Supabase, not from the payload).
 *
 * Adding `email`, `name`, or `phone` to EmailTaskPayload is a TypeScript-
 * level violation and a code review veto. Do not relax this gate.
 *
 * Phase: 120-email-queue-reliability-trigger-dev
 * Decisions: D-01 (EU region), D-02 (row-IDs-only payload), D-04 (wrapper
 * inserts row first, then triggers task).
 * Research: 120-RESEARCH.md §Payload Contract & PII-Strip Enforcement.
 * ════════════════════════════════════════════════════════════════════════
 */
import { task } from "@trigger.dev/sdk";

/**
 * The 5 sequence types the email_queue.sequence_type CHECK constraint
 * accepts after migration 043. Keep in sync with migration 043.
 *
 * Note: 6 routes call enqueueEmailSequence with only 3 of these values
 * today (audit/quiz/pdf — see 120-RESEARCH.md). The other 2 ("chat",
 * "tai-lieu") are future-proofing; no current caller emits them.
 */
export type EmailSequenceType =
  | "audit"
  | "quiz"
  | "pdf"
  | "chat"
  | "tai-lieu";

/**
 * TRG-05 enforced: this type contains ONLY the row ID + the sequence
 * type. NO email, NO name, NO phone. TypeScript prevents the wrapper
 * from passing PII at compile time.
 */
export interface EmailTaskPayload {
  email_queue_row_id: string; // UUID — email_queue.id (NOT PII)
  sequence_type: EmailSequenceType;
}

export const emailSequenceTask = task({
  id: "email-sequence",
  retry: {
    maxAttempts: 4, // total attempts INCLUDING first run (resolved Q1)
    factor: 4,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 16000,
    randomize: false,
  },
  run: async (payload: EmailTaskPayload) => {
    // Real implementation lands in Plan 120-01 Task 2 — Wave 0 scaffold
    // intentionally throws so any accidental production trigger is loud
    // (vs. a silent "ok" stub that would mask deployment-order errors).
    // The PII-strip type gate (above) is already in force at compile time.
    throw new Error(
      `email-sequence task scaffold not yet implemented — Plan 120-01 wires real Supabase fetch + send (payload row=${payload.email_queue_row_id}, type=${payload.sequence_type})`,
    );
  },
});
