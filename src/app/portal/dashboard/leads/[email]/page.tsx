import { getLeadByEmail } from "@/lib/leads";
import { TIER_CONFIG } from "@/types/leads";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ email: string }>;
}) {
  const { email } = await params;
  const decodedEmail = decodeURIComponent(email);
  const data = await getLeadByEmail(decodedEmail);

  if (!data) notFound();

  const { leads, emails } = data;
  const primary = leads[0];
  const cfg = TIER_CONFIG[primary.tier];

  // Score breakdown
  const quizLead = leads.find((l) => l.source_type === "quiz");
  const formTypes = [...new Set(leads.map((l) => l.source_type))];

  return (
    <div className="px-8 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
          <a href="/portal/dashboard/leads" className="hover:text-primary transition-colors">Leads</a>
          <span>/</span>
          <span className="text-slate-700">{primary.name || decodedEmail}</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-display font-extrabold text-xl text-slate-900">
                {primary.name || decodedEmail}
              </h1>
              <p className="text-sm text-slate-500 mt-1">{decodedEmail}</p>
              {primary.phone && (
                <p className="text-sm text-slate-400 mt-0.5">{primary.phone}</p>
              )}
            </div>
            <div className="text-right">
              <div className="font-display font-extrabold text-4xl text-slate-900">
                {primary.composite_score}
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${cfg.color}`}>
                {cfg.label}
              </span>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Score Breakdown
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ScoreCard
                label="Quiz"
                value={quizLead ? `${quizLead.quiz_score}/40` : "—"}
                sub={quizLead?.result_tier || "no quiz"}
              />
              <ScoreCard
                label="Engagement"
                value={`${formTypes.length} forms`}
                sub={formTypes.join(", ")}
              />
              <ScoreCard
                label="UTM"
                value={primary.utm_source || "direct"}
                sub={primary.utm_medium || "—"}
              />
              <ScoreCard
                label="Firmographic"
                value={primary.industry || "—"}
                sub={primary.team_size || primary.company || "—"}
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Timeline
          </h3>

          <div className="space-y-4">
            {/* Form submissions */}
            {leads.map((lead, i) => (
              <TimelineItem
                key={`lead-${i}`}
                type={lead.source_type}
                title={`${lead.source_type === "quiz" ? "Quiz completed" : lead.source_type === "audit" ? "Audit form submitted" : "PDF downloaded"}`}
                subtitle={lead.source_type === "quiz" ? `Score: ${lead.quiz_score}/40 (${lead.result_tier})` : undefined}
                date={lead.created_at}
                color={lead.source_type === "quiz" ? "purple" : lead.source_type === "audit" ? "blue" : "green"}
              />
            ))}

            {/* Email events */}
            {emails.map((em, i) => (
              <TimelineItem
                key={`email-${i}`}
                type="email"
                title={`Email #${em.email_number} (${em.sequence_type} flow)`}
                subtitle={em.status === "sent" ? `Sent` : em.status === "pending" ? `Scheduled` : em.status}
                date={em.sent_at || em.scheduled_at}
                color={em.status === "sent" ? "green" : em.status === "pending" ? "amber" : "red"}
              />
            ))}

            {leads.length === 0 && emails.length === 0 && (
              <p className="text-sm text-slate-400">No activity recorded</p>
            )}
          </div>
        </div>
    </div>
  );
}

function ScoreCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3">
      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{label}</div>
      <div className="font-display font-bold text-sm text-slate-900 mt-1">{value}</div>
      <div className="text-[11px] text-slate-400 mt-0.5">{sub}</div>
    </div>
  );
}

function TimelineItem({
  type,
  title,
  subtitle,
  date,
  color,
}: {
  type: string;
  title: string;
  subtitle?: string;
  date: string;
  color: string;
}) {
  const dotColors: Record<string, string> = {
    purple: "bg-purple-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
  };

  const d = new Date(date);

  return (
    <div className="flex items-start gap-3">
      <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${dotColors[color] || "bg-slate-300"}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-slate-700">{title}</span>
          <span className="text-[11px] text-slate-400 tabular-nums shrink-0">
            {d.toLocaleDateString("vi-VN")} {d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
        {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}
