import { getAllLeads } from "@/lib/leads";
import LeadTable from "./LeadTable";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await getAllLeads();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-extrabold text-2xl text-slate-900">
              Lead Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              {leads.length} leads from all sources
            </p>
          </div>
          <a
            href="/portal/dashboard/leads/analytics"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all"
          >
            Analytics →
          </a>
        </div>

        {/* Lead Table */}
        <LeadTable leads={leads} />
      </div>
    </div>
  );
}
