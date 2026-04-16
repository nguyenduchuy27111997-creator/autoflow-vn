import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";
import { EMAIL_FROM, SITE_URL } from "@/data/constants";
import {
  type QuizTier,
  type EmailResult,
  quizEmail1,
  quizEmail2,
  quizEmail3,
  quizEmail4,
  quizEmail5,
  pdfEmail1,
  pdfEmail2,
  pdfEmail3,
  pdfEmail4,
  pdfEmail5,
  auditEmail1,
  auditEmail2,
  auditEmail3,
  auditEmail4,
  auditEmail5,
} from "@/lib/email-templates";

const MAX_RETRIES = 3;
const RETRY_DELAY_HOURS = 1;

interface QueueRow {
  id: string;
  email: string;
  name: string | null;
  sequence_type: string;
  email_number: number;
  metadata: Record<string, unknown> | null;
  retry_count: number | null;
  failed_at: string | null;
}

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function getEmailTemplate(row: QueueRow): EmailResult | null {
  const meta = (row.metadata ?? {}) as Record<string, unknown>;
  const email = row.email;
  const name = row.name ?? undefined;
  const tier = (meta.tier as QuizTier) ?? "starter";
  const score = (meta.score as number) ?? 0;

  if (row.sequence_type === "quiz") {
    if (row.email_number === 1) return quizEmail1({ email, name, score, tier });
    if (row.email_number === 2) return quizEmail2({ email, name, tier });
    if (row.email_number === 3) return quizEmail3({ email, name, tier });
    if (row.email_number === 4) return quizEmail4({ email, name, tier });
    if (row.email_number === 5) return quizEmail5({ email, name, tier });
  }
  if (row.sequence_type === "pdf") {
    const resource = (meta.resource as string) ?? undefined;
    if (row.email_number === 1) return pdfEmail1({ email, name });
    if (row.email_number === 2) return pdfEmail2({ email, name });
    if (row.email_number === 3) return pdfEmail3({ email, name, resource });
    if (row.email_number === 4) return pdfEmail4({ email, name, resource });
    if (row.email_number === 5) return pdfEmail5({ email, name });
  }
  if (row.sequence_type === "audit") {
    if (row.email_number === 1) return auditEmail1({ email, name });
    if (row.email_number === 2) return auditEmail2({ email, name });
    if (row.email_number === 3) return auditEmail3({ email, name });
    if (row.email_number === 4) return auditEmail4({ email, name });
    if (row.email_number === 5) return auditEmail5({ email, name });
  }
  return null;
}

function unsubUrl(email: string): string {
  return `${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(email)}`;
}

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = await createClient();
  const now = new Date();
  const nowISO = now.toISOString();

  // Fetch pending emails + failed emails eligible for retry
  const { data: rows, error } = await supabase
    .from("email_queue")
    .select("id, email, name, sequence_type, email_number, metadata, retry_count, failed_at")
    .or(`status.eq.pending,status.eq.failed`)
    .lte("scheduled_at", nowISO)
    .order("scheduled_at", { ascending: true })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const resend = getResend();
  let sent = 0;
  let failed = 0;
  let skipped = 0;
  let retryLater = 0;

  // Check unsubscribed emails in bulk
  const emails = [...new Set((rows ?? []).map((r) => r.email))];
  const unsubscribedSet = new Set<string>();

  if (emails.length > 0) {
    const { data: unsubs } = await supabase
      .from("email_unsubscribes")
      .select("email")
      .in("email", emails);

    if (unsubs) {
      for (const u of unsubs) {
        unsubscribedSet.add(u.email);
      }
    }
  }

  for (const row of rows ?? []) {
    const retryCount = row.retry_count ?? 0;

    // Skip if exceeded max retries
    if (retryCount >= MAX_RETRIES) {
      await supabase
        .from("email_queue")
        .update({ status: "permanently_failed" })
        .eq("id", row.id);
      skipped++;
      continue;
    }

    // For failed rows: only retry after RETRY_DELAY_HOURS
    if (row.failed_at) {
      const failedAt = new Date(row.failed_at);
      const retryAfter = new Date(failedAt.getTime() + RETRY_DELAY_HOURS * 60 * 60 * 1000);
      if (now < retryAfter) {
        retryLater++;
        continue;
      }
    }

    // Skip unsubscribed
    if (unsubscribedSet.has(row.email)) {
      await supabase
        .from("email_queue")
        .update({ status: "skipped" })
        .eq("id", row.id);
      skipped++;
      continue;
    }

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
        headers: {
          "List-Unsubscribe": `<${unsubUrl(row.email)}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          "Precedence": "bulk",
        },
      });
      await supabase
        .from("email_queue")
        .update({ status: "sent", sent_at: nowISO })
        .eq("id", row.id);
      sent++;
    } catch (err) {
      console.error(`Failed to send email_queue row ${row.id} (attempt ${retryCount + 1}/${MAX_RETRIES}):`, err);
      await supabase
        .from("email_queue")
        .update({
          status: retryCount + 1 >= MAX_RETRIES ? "permanently_failed" : "failed",
          retry_count: retryCount + 1,
          failed_at: nowISO,
        })
        .eq("id", row.id);
      failed++;
    }
  }

  return NextResponse.json({
    processed: rows?.length ?? 0,
    sent,
    failed,
    skipped,
    retryLater,
  });
}
