import { getAllLeads, getDashboardStats } from "@/lib/leads";
import LeadTable from "./LeadTable";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const [leads, stats] = await Promise.all([getAllLeads(), getDashboardStats()]);

  return (
    <div className="px-8 py-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Leads" value={stats.uniqueLeads} />
        <StatCard label="Avg Score" value={stats.avgScore} sub="/100" />
        <StatCard label="Hot Leads" value={stats.hotCount} color="text-red-600" />
        <StatCard label="Top Source" value={stats.topSource} isText />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display font-bold text-xl text-slate-900">All Leads</h1>
          <p className="text-sm text-slate-400 mt-0.5">{leads.length} entries from quiz, audit, PDF</p>
        </div>
      </div>

      {/* Lead Table */}
      <LeadTable leads={leads} />
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  color,
  isText,
}: {
  label: string;
  value: number | string;
  sub?: string;
  color?: string;
  isText?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{label}</div>
      <div className={`font-display font-extrabold mt-1 ${isText ? "text-base" : "text-2xl"} ${color || "text-slate-900"}`}>
        {value}
        {sub && <span className="text-sm font-normal text-slate-400">{sub}</span>}
      </div>
    </div>
  );
}
