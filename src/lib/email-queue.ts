import { createClient } from "@/lib/supabase/server";

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

// Schedule: Day 0, 3, 7, 14, 21
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
  const { email, name, sequenceType, metadata } = params;

  try {
    const supabase = await createClient();

    // Schedule 5 emails — atomic upsert (ON CONFLICT do nothing).
    // Unique constraint (email, sequence_type, email_number) prevents
    // duplicates even when concurrent submissions happen for the same email.
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
