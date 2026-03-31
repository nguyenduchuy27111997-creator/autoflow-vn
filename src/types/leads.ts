/** Row shape from v_all_leads Supabase view */
export interface Lead {
  email: string;
  name: string | null;
  phone: string | null;
  source_type: "quiz" | "audit" | "pdf";
  quiz_score: number | null;
  result_tier: "starter" | "growth" | "scale" | null;
  industry: string | null;
  team_size: string | null;
  company: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  created_at: string;
}

/** Lead with computed composite score */
export interface ScoredLead extends Lead {
  composite_score: number;
  tier: "hot" | "warm" | "cold";
}

/** Tier thresholds */
export function getTier(score: number): "hot" | "warm" | "cold" {
  if (score >= 70) return "hot";
  if (score >= 40) return "warm";
  return "cold";
}

/** Tier display config */
export const TIER_CONFIG = {
  hot: { label: "Hot", color: "bg-red-100 text-red-700", dot: "bg-red-500" },
  warm: { label: "Warm", color: "bg-amber-100 text-amber-700", dot: "bg-amber-500" },
  cold: { label: "Cold", color: "bg-blue-100 text-blue-700", dot: "bg-blue-500" },
} as const;
