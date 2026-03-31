import { getAllLeads, getDashboardStats } from "@/lib/leads";
import AnalyticsCharts from "./AnalyticsCharts";

export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
  const [leads, stats] = await Promise.all([getAllLeads(), getDashboardStats()]);

  // Prepare chart data server-side
  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  // Leads per day (last 30 days)
  const dailyMap = new Map<string, number>();
  for (let d = new Date(thirtyDaysAgo); d <= now; d.setDate(d.getDate() + 1)) {
    dailyMap.set(d.toISOString().split("T")[0], 0);
  }
  leads.forEach((l) => {
    const day = l.created_at.split("T")[0];
    if (dailyMap.has(day)) dailyMap.set(day, (dailyMap.get(day) || 0) + 1);
  });
  const dailyData = [...dailyMap.entries()].map(([date, count]) => ({
    date: date.slice(5), // MM-DD
    leads: count,
  }));

  // UTM source × avg score
  const utmScores = new Map<string, { total: number; count: number }>();
  const seen = new Set<string>();
  leads.forEach((l) => {
    const key = `${l.email}-${l.utm_source || "direct"}`;
    if (seen.has(key)) return;
    seen.add(key);
    const src = l.utm_source || "direct";
    const entry = utmScores.get(src) || { total: 0, count: 0 };
    entry.total += l.composite_score;
    entry.count += 1;
    utmScores.set(src, entry);
  });
  const utmData = [...utmScores.entries()]
    .map(([source, { total, count }]) => ({
      source,
      avg_score: Math.round(total / count),
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // Tier distribution
  const tierData = [
    { name: "Hot (70+)", value: stats.hotCount, fill: "#EF4444" },
    { name: "Warm (40-69)", value: stats.warmCount, fill: "#F59E0B" },
    { name: "Cold (<40)", value: stats.coldCount, fill: "#3B82F6" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-extrabold text-2xl text-slate-900">Analytics</h1>
            <p className="text-sm text-slate-500 mt-1">{stats.uniqueLeads} unique leads</p>
          </div>
          <a
            href="/portal/dashboard/leads"
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50"
          >
            ← Lead List
          </a>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <KPICard label="Total Leads" value={stats.uniqueLeads.toString()} />
          <KPICard label="Avg Score" value={stats.avgScore.toString()} sub="/100" />
          <KPICard label="Hot Leads" value={stats.hotCount.toString()} color="text-red-600" />
          <KPICard label="Top Source" value={stats.topSource} />
        </div>

        {/* Charts */}
        <AnalyticsCharts
          dailyData={dailyData}
          utmData={utmData}
          tierData={tierData}
        />
      </div>
    </div>
  );
}

function KPICard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string;
  sub?: string;
  color?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
        {label}
      </div>
      <div className={`font-display font-extrabold text-2xl mt-1 ${color || "text-slate-900"}`}>
        {value}
        {sub && <span className="text-sm font-normal text-slate-400">{sub}</span>}
      </div>
    </div>
  );
}
