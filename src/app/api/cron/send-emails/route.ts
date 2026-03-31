import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";
import { EMAIL_FROM } from "@/data/constants";
import {
  type QuizTier,
  type EmailResult,
  quizEmail1,
  quizEmail2,
  quizEmail3,
  pdfEmail1,
  pdfEmail2,
  pdfEmail3,
  auditEmail1,
  auditEmail2,
  auditEmail3,
} from "@/lib/email-templates";

interface QueueRow {
  id: string;
  email: string;
  name: string | null;
  sequence_type: string;
  email_number: number;
  metadata: Record<string, unknown> | null;
}

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function getEmailTemplate(row: QueueRow): EmailResult | null {
  const meta = (row.metadata ?? {}) as Record<string, unknown>;
  const name = row.name ?? undefined;
  const tier = (meta.tier as QuizTier) ?? "starter";
  const score = (meta.score as number) ?? 0;

  if (row.sequence_type === "quiz") {
    if (row.email_number === 1) return quizEmail1({ name, score, tier });
    if (row.email_number === 2) return quizEmail2({ name, tier });
    if (row.email_number === 3) return quizEmail3({ name, tier });
  }
  if (row.sequence_type === "pdf") {
    if (row.email_number === 1) return pdfEmail1({ name });
    if (row.email_number === 2) return pdfEmail2({ name });
    if (row.email_number === 3) return pdfEmail3({ name });
  }
  if (row.sequence_type === "audit") {
    if (row.email_number === 1) return auditEmail1({ name });
    if (row.email_number === 2) return auditEmail2({ name });
    if (row.email_number === 3) return auditEmail3({ name });
  }
  return null;
}

export async function GET(req: NextRequest) {
  // Auth check: Bearer token must match CRON_SECRET
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = await createClient();
  const now = new Date().toISOString();

  const { data: rows, error } = await supabase
    .from("email_queue")
    .select("id, email, name, sequence_type, email_number, metadata")
    .eq("status", "pending")
    .lte("scheduled_at", now)
    .order("scheduled_at", { ascending: true })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const resend = getResend();
  let sent = 0;
  let failed = 0;
  let skipped = 0;

  for (const row of rows ?? []) {
    // No Resend API key — mark all remaining rows as skipped
    if (!resend) {
      await supabase
        .from("email_queue")
        .update({ status: "skipped" })
        .eq("id", row.id);
      skipped++;
      continue;
    }

    const template = getEmailTemplate(row);
    if (!template) {
      await supabase
        .from("email_queue")
        .update({ status: "skipped" })
        .eq("id", row.id);
      skipped++;
      continue;
    }

    try {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: row.email,
        subject: template.subject,
        html: template.html,
      });
      await supabase
        .from("email_queue")
        .update({ status: "sent", sent_at: new Date().toISOString() })
        .eq("id", row.id);
      sent++;
    } catch (err) {
      console.error(`Failed to send email_queue row ${row.id}:`, err);
      await supabase
        .from("email_queue")
        .update({ status: "failed" })
        .eq("id", row.id);
      failed++;
    }
  }

  return NextResponse.json({
    processed: rows?.length ?? 0,
    sent,
    failed,
    skipped,
  });
}
