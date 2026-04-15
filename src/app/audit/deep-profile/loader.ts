import { createClient } from "@/lib/supabase/server";

export interface AuditProfileData {
  id: string;
  name: string | null;
  industry: string | null;
  tier2_completed_at: string | null;
  pain_primary: string | null;
  pain_hours_per_week: number | null;
  monthly_volume: string | null;
}

export async function loadAuditForProfile(
  id: string
): Promise<AuditProfileData | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("audit_submissions")
    .select(
      "id, name, industry, tier2_completed_at, pain_primary, pain_hours_per_week, monthly_volume"
    )
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data as AuditProfileData;
}
