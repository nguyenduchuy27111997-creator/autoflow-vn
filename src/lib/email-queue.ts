/**
 * Phase 120 — Email-queue wrapper with Trigger.dev feature-flag branch (D-04).
 *
 * TRG-05 HARD GATE: the Trigger.dev branch NEVER passes email/name/phone
 * to tasks.trigger(). Only {email_queue_row_id, sequence_type} cross the
 * SDK boundary. PII is fetched from Supabase at task EXECUTION time by
 * the EU worker. See website/src/trigger/email-sequence.ts for the
 * payload type that enforces this at compile time.
 */
import { createClient } from "@/lib/supabase/server";
// NOTE: @trigger.dev/sdk is DYNAMICALLY imported below — never at top
// level (Pitfall 3 — keeps Netlify cold-start bundle clean when off).
// Type-only import of the task is safe (erased at runtime):
import type { emailSequenceTask } from "@/trigger/email-sequence";

export type SequenceType = "quiz" | "pdf" | "audit";

export interface EnqueueParams {
  email: string;
  name?: string;
  sequenceType: SequenceType;
  metadata?: Record<string, unknown>;
}

export interface EnqueueResult {
  success: boolean;
  skipped?: boolean;
  inserted?: number;
  error?: string;
}

// Schedule: Day 0, 3, 7, 14, 21 (used by legacy Supabase-direct path)
const EMAIL_SCHEDULE = [
  { email_number: 1, days_offset: 0 },
  { email_number: 2, days_offset: 3 },
  { email_number: 3, days_offset: 7 },
  { email_number: 4, days_offset: 14 },
  { email_number: 5, days_offset: 21 },
];

export async function enqueueEmailSequence(
  params: EnqueueParams
): Promise<EnqueueResult> {
  if (process.env.USE_TRIGGER_DEV === "true") {
    return enqueueViaTriggerDev(params);
  }
  return enqueueViaSupabaseDirect(params);
}

// ─── Trigger.dev path (D-04) ────────────────────────────────────────────
async function enqueueViaTriggerDev(
  params: EnqueueParams
): Promise<EnqueueResult> {
  const { email, name, sequenceType, metadata } = params;
  const cleanEmail = email.trim().toLowerCase();

  try {
    const supabase = await createClient();

    // Insert (or fetch existing) a single anchor row in email_queue. The
    // unique constraint (email, sequence_type, email_number) makes this
    // idempotent — duplicate submissions reuse the existing row id.
    const now = new Date();
    const anchorRow = {
      email: cleanEmail,
      name: name?.trim() || null,
      sequence_type: sequenceType,
      email_number: 1,
      scheduled_at: now.toISOString(),
      status: "pending",
      metadata: metadata ?? null,
    };

    const { data: upserted, error: upsertError } = await supabase
      .from("email_queue")
      .upsert(anchorRow, {
        onConflict: "email,sequence_type,email_number",
        ignoreDuplicates: true,
      })
      .select("id");

    if (upsertError) {
      return { success: false, error: upsertError.message };
    }

    let rowId = upserted?.[0]?.id as string | undefined;
    if (!rowId) {
      // ignoreDuplicates=true means a hit returned 0 rows; re-fetch by key.
      const { data: existing, error: fetchError } = await supabase
        .from("email_queue")
        .select("id")
        .eq("email", cleanEmail)
        .eq("sequence_type", sequenceType)
        .eq("email_number", 1)
        .single();
      if (fetchError || !existing) {
        return {
          success: false,
          error: fetchError?.message || "anchor row missing after upsert",
        };
      }
      rowId = existing.id as string;
    }

    // TRG-05 HARD GATE: payload contains ONLY row id + sequence type.
    // TypeScript (EmailTaskPayload) blocks anyone trying to add PII here.
    const { tasks } = await import("@trigger.dev/sdk");
    await tasks.trigger<typeof emailSequenceTask>("email-sequence", {
      email_queue_row_id: rowId,
      sequence_type: sequenceType,
    });

    return { success: true, inserted: 1 };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Trigger.dev enqueue failed",
    };
  }
}

// ─── Legacy Supabase-direct path (unchanged behavior — local dev + revert) ──
async function enqueueViaSupabaseDirect(
  params: EnqueueParams
): Promise<EnqueueResult> {
  const { email, name, sequenceType, metadata } = params;
  try {
    const supabase = await createClient();
    const now = new Date();
    const cleanEmail = email.trim().toLowerCase();
    const rows = EMAIL_SCHEDULE.map(({ email_number, days_offset }) => {
      const scheduled = new Date(now);
      scheduled.setDate(scheduled.getDate() + days_offset);
      return {
        email: cleanEmail,
        name: name?.trim() || null,
        sequence_type: sequenceType,
        email_number,
        scheduled_at: scheduled.toISOString(),
        status: "pending",
        metadata: metadata ?? null,
      };
    });

    const { error: insertError, data } = await supabase
      .from("email_queue")
      .upsert(rows, {
        onConflict: "email,sequence_type,email_number",
        ignoreDuplicates: true,
      })
      .select("id");

    if (insertError) {
      return { success: false, error: insertError.message };
    }

    const inserted = data?.length ?? 0;
    if (inserted === 0) {
      return { success: true, skipped: true };
    }
    return { success: true, inserted };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
