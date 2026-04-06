export default function StatCard({
  stats,
}: {
  stats: { value: string; label: string; sub?: string; color?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8 not-prose">
      {stats.map((s, i) => (
        <div key={i} className="bg-slate-50 rounded-xl p-3 sm:p-4 text-center">
          <div className={`font-display font-extrabold text-lg sm:text-2xl ${s.color || "text-primary"}`}>
            {s.value}
          </div>
          <div className="text-xs font-semibold text-slate-700 mt-1">{s.label}</div>
          {s.sub && <div className="text-[11px] text-slate-500 mt-0.5">{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}
