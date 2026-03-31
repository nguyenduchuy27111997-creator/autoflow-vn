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

export async function enqueueEmailSequence(
  params: EnqueueParams
): Promise<EnqueueResult> {
  const { email, name, sequenceType, metadata } = params;

  try {
    const supabase = await createClient();

    // Duplicate check — any existing row for this email+sequence_type
    const { count, error: countError } = await supabase
      .from("email_queue")
      .select("id", { count: "exact", head: true })
      .eq("email", email.trim())
      .eq("sequence_type", sequenceType);

    if (countError) {
      return { success: false, error: countError.message };
    }

    if ((count ?? 0) > 0) {
      return { success: true, skipped: true };
    }

    // Schedule 3 emails: day 0, day 3, day 7
    const now = new Date();
    const rows = [
      { email_number: 1, days_offset: 0 },
      { email_number: 2, days_offset: 3 },
      { email_number: 3, days_offset: 7 },
    ].map(({ email_number, days_offset }) => {
      const scheduled = new Date(now);
      scheduled.setDate(scheduled.getDate() + days_offset);
      return {
        email: email.trim(),
        name: name?.trim() || null,
        sequence_type: sequenceType,
        email_number,
        scheduled_at: scheduled.toISOString(),
        status: "pending",
        metadata: metadata ?? null,
      };
    });

    const { error: insertError } = await supabase
      .from("email_queue")
      .insert(rows);

    if (insertError) {
      return { success: false, error: insertError.message };
    }

    return { success: true, inserted: 3 };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
