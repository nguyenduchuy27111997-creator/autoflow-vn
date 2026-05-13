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
import { createClient } from "@supabase/supabase-js";

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

// Days offsets for emails 2-5 (anchor row at email_number=1 is inserted
// by email-queue.ts wrapper before triggering this task).
const EMAIL_SCHEDULE_REMAINDER = [
  { email_number: 2, days_offset: 3 },
  { email_number: 3, days_offset: 7 },
  { email_number: 4, days_offset: 14 },
  { email_number: 5, days_offset: 21 },
];

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
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
      // Surface as a task FAILED state with a clear message in the dashboard.
      throw new Error(
        "[email-sequence] SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing — task workers cannot fetch PII from email_queue"
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // 1. Fetch the anchor row (email_number=1) that email-queue.ts inserted.
    //    PII (email, name) is loaded into worker MEMORY here — never persisted
    //    by Trigger.dev (TRG-05 / VN Law 91/2025 gate).
    const { data: anchor, error: fetchError } = await supabase
      .from("email_queue")
      .select("id, email, name, sequence_type, metadata")
      .eq("id", payload.email_queue_row_id)
      .single();

    if (fetchError || !anchor) {
      // Throwing here triggers a Trigger.dev retry (handles read-after-write
      // races where the wrapper just inserted but read replica lags).
      throw new Error(
        `[email-sequence] anchor row ${payload.email_queue_row_id} not found: ${fetchError?.message ?? "no row"}`
      );
    }

    // 2. Idempotent expansion to the full 5-row schedule. Anchor row already
    //    exists at email_number=1; we add 2-5. ON CONFLICT ignoreDuplicates
    //    keeps retries safe.
    const now = new Date();
    const remainderRows = EMAIL_SCHEDULE_REMAINDER.map(
      ({ email_number, days_offset }) => {
        const scheduled = new Date(now);
        scheduled.setDate(scheduled.getDate() + days_offset);
        return {
          email: anchor.email,
          name: anchor.name,
          sequence_type: anchor.sequence_type,
          email_number,
          scheduled_at: scheduled.toISOString(),
          status: "pending" as const,
          metadata: anchor.metadata,
        };
      }
    );

    const { data: inserted, error: insertError } = await supabase
      .from("email_queue")
      .upsert(remainderRows, {
        onConflict: "email,sequence_type,email_number",
        ignoreDuplicates: true,
      })
      .select("id");

    if (insertError) {
      throw new Error(
        `[email-sequence] failed to expand schedule for ${payload.email_queue_row_id}: ${insertError.message}`
      );
    }

    return {
      ok: true,
      email_queue_row_id: payload.email_queue_row_id,
      sequence_type: payload.sequence_type,
      scheduled: inserted?.length ?? 0,
    };
  },
});
