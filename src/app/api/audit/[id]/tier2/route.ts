import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import {
  notifyTelegram,
  formatAuditTier2CompletedNotify,
} from "@/lib/telegram";

// ── Validation schema ──────────────────────────────────────────────────────

const SecondaryPainSchema = z.object({
  pain: z.string(),
  hours_per_week: z.number().nullable().optional(),
});

const Tier2BodySchema = z.object({
  tools_ecommerce: z.array(z.string()).optional(),
  tools_erp: z.array(z.string()).optional(),
  tools_pos: z.array(z.string()).optional(),
  tools_communication: z.array(z.string()).optional(),
  tools_crm: z.array(z.string()).optional(),
  secondary_pains: z.array(SecondaryPainSchema).optional(),
  budget_range: z
    .enum(["lt_5m", "5_15m", "15_30m", "30m_plus", "unclear"])
    .nullable()
    .optional(),
  timeline: z
    .enum(["asap", "1_3_months", "3_6_months", "exploring"])
    .nullable()
    .optional(),
  decision_authority: z
    .enum(["self", "need_approval", "multi_level"])
    .nullable()
    .optional(),
  attempted_solutions: z.array(z.string()).optional(),
  prior_blockers: z.string().nullable().optional(),
  industry_details: z.record(z.string(), z.unknown()).optional(),
  success_criteria: z.string().nullable().optional(),
});

// ── POST /api/audit/[id]/tier2 ─────────────────────────────────────────────

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "Missing audit id." }, { status: 400 });
    }

    // Parse and validate body
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const parsed = Tier2BodySchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = parsed.data;

    // Build update object — only include fields that were provided
    const update: Record<string, unknown> = {
      tier2_completed_at: new Date().toISOString(),
    };

    if (data.tools_ecommerce !== undefined)
      update.tools_ecommerce = data.tools_ecommerce;
    if (data.tools_erp !== undefined) update.tools_erp = data.tools_erp;
    if (data.tools_pos !== undefined) update.tools_pos = data.tools_pos;
    if (data.tools_communication !== undefined)
      update.tools_communication = data.tools_communication;
    if (data.tools_crm !== undefined) update.tools_crm = data.tools_crm;
    if (data.secondary_pains !== undefined)
      update.secondary_pains = data.secondary_pains;
    if (data.budget_range !== undefined)
      update.budget_range = data.budget_range;
    if (data.timeline !== undefined) update.timeline = data.timeline;
    if (data.decision_authority !== undefined)
      update.decision_authority = data.decision_authority;
    if (data.attempted_solutions !== undefined)
      update.attempted_solutions = data.attempted_solutions;
    if (data.prior_blockers !== undefined)
      update.prior_blockers = data.prior_blockers;
    if (data.industry_details !== undefined)
      update.industry_details = data.industry_details;
    if (data.success_criteria !== undefined)
      update.success_criteria = data.success_criteria;

    // Fetch existing submission for Telegram notification context
    const supabase = await createClient();

    const { data: existing, error: fetchError } = await supabase
      .from("audit_submissions")
      .select("id, name, industry, pain_primary, pain_hours_per_week, monthly_volume")
      .eq("id", id)
      .single();

    if (fetchError || !existing) {
      return NextResponse.json(
        { error: "Audit submission not found." },
        { status: 404 }
      );
    }

    // Update the row
    const { error: updateError } = await supabase
      .from("audit_submissions")
      .update(update)
      .eq("id", id);

    if (updateError) {
      console.error("[tier2] Supabase update error:", updateError);
      return NextResponse.json(
        { error: "Không thể lưu thông tin. Vui lòng thử lại." },
        { status: 500 }
      );
    }

    // Telegram HOT alert — await in serverless (process may terminate after response)
    try {
      await notifyTelegram(
        formatAuditTier2CompletedNotify({
          name: existing.name ?? "Unknown",
          industry: existing.industry,
          budget_range: data.budget_range ?? null,
          timeline: data.timeline ?? null,
          decision_authority: data.decision_authority ?? null,
          pain_primary: existing.pain_primary,
          pain_hours_per_week: existing.pain_hours_per_week,
          monthly_volume: existing.monthly_volume,
        })
      );
    } catch (err) {
      console.error("[tier2] Telegram notify failed (non-fatal):", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[tier2] Unexpected error:", err);
    return NextResponse.json(
      { error: "Có lỗi xảy ra. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
