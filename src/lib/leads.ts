import { createAdminClient } from "@/lib/supabase/admin";
import { type Lead, type ScoredLead, getTier } from "@/types/leads";

/** Fetch all leads with composite scores. Server-side only. */
export async function getAllLeads(): Promise<ScoredLead[]> {
  const supabase = createAdminClient();

  const { data: leads, error } = await supabase
    .from("v_all_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch leads:", error);
    return [];
  }

  // Compute scores for unique emails
  const uniqueEmails = [...new Set((leads as Lead[]).map((l) => l.email))];
  const scoreMap = new Map<string, number>();

  for (const email of uniqueEmails) {
    const { data, error: scoreError } = await supabase.rpc("score_lead", {
      lead_email: email,
    });
    if (!scoreError && data !== null) {
      scoreMap.set(email, data as number);
    }
  }

  return (leads as Lead[]).map((lead) => {
    const composite_score = scoreMap.get(lead.email) ?? 0;
    return {
      ...lead,
      composite_score,
      tier: getTier(composite_score),
    };
  });
}

/** Fetch single lead detail by email. Server-side only. */
export async function getLeadByEmail(email: string): Promise<{
  leads: ScoredLead[];
  emails: Array<{ sequence_type: string; email_number: number; status: string; scheduled_at: string; sent_at: string | null }>;
} | null> {
  const supabase = createAdminClient();

  const [leadsResult, emailsResult, scoreResult] = await Promise.all([
    supabase
      .from("v_all_leads")
      .select("*")
      .eq("email", email)
      .order("created_at", { ascending: false }),
    supabase
      .from("email_queue")
      .select("sequence_type, email_number, status, scheduled_at, sent_at")
      .eq("email", email)
      .order("scheduled_at", { ascending: true }),
    supabase.rpc("score_lead", { lead_email: email }),
  ]);

  if (leadsResult.error || !leadsResult.data?.length) return null;

  const composite_score = (scoreResult.data as number) ?? 0;

  return {
    leads: (leadsResult.data as Lead[]).map((lead) => ({
      ...lead,
      composite_score,
      tier: getTier(composite_score),
    })),
    emails: (emailsResult.data ?? []) as Array<{
      sequence_type: string;
      email_number: number;
      status: string;
      scheduled_at: string;
      sent_at: string | null;
    }>,
  };
}

/** Get dashboard stats. Server-side only. */
export async function getDashboardStats() {
  const leads = await getAllLeads();

  const totalLeads = leads.length;
  const uniqueEmails = new Set(leads.map((l) => l.email));
  const uniqueLeads = uniqueEmails.size;

  const scores = [...uniqueEmails].map((email) => {
    const lead = leads.find((l) => l.email === email);
    return lead?.composite_score ?? 0;
  });

  const avgScore = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  const hotCount = scores.filter((s) => s >= 70).length;
  const warmCount = scores.filter((s) => s >= 40 && s < 70).length;
  const coldCount = scores.filter((s) => s < 40).length;

  // Top UTM source
  const utmCounts = new Map<string, number>();
  leads.forEach((l) => {
    const src = l.utm_source || "direct";
    utmCounts.set(src, (utmCounts.get(src) || 0) + 1);
  });
  const topSource = [...utmCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "direct";

  return { totalLeads, uniqueLeads, avgScore, hotCount, warmCount, coldCount, topSource };
}
