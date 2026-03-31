import { getAllLeads } from "@/lib/leads";
import LeadTable from "./LeadTable";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await getAllLeads();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display font-extrabold text-2xl text-slate-900">
            Lead Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {leads.length} leads from all sources
          </p>
        </div>

        {/* Lead Table */}
        <LeadTable leads={leads} />
      </div>
    </div>
  );
}
