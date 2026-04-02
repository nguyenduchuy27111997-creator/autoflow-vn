import { createAdminClient } from "@/lib/supabase/admin";

export interface Project {
  id: string;
  client_email: string;
  name: string;
  package: "starter" | "growth" | "scale" | "retainer";
  status: "planning" | "in_progress" | "completed" | "maintenance";
  start_date: string | null;
  target_date: string | null;
  completed_date: string | null;
  workflow_count: number;
  description: string | null;
  created_at: string;
}

export interface Milestone {
  id: string;
  project_id: string;
  title: string;
  description: string | null;
  status: "pending" | "in_progress" | "completed" | "blocked";
  sort_order: number;
  completed_at: string | null;
  created_at: string;
}

export interface ProjectWithMilestones extends Project {
  milestones: Milestone[];
}

export async function getProjectsByEmail(email: string): Promise<ProjectWithMilestones[]> {
  const supabase = createAdminClient();

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("client_email", email)
    .order("created_at", { ascending: false });

  if (!projects?.length) return [];

  const projectIds = projects.map((p) => p.id);
  const { data: milestones } = await supabase
    .from("project_milestones")
    .select("*")
    .in("project_id", projectIds)
    .order("sort_order", { ascending: true });

  return projects.map((p) => ({
    ...p,
    milestones: (milestones || []).filter((m) => m.project_id === p.id),
  }));
}

export async function getProjectById(id: string): Promise<ProjectWithMilestones | null> {
  const supabase = createAdminClient();

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!project) return null;

  const { data: milestones } = await supabase
    .from("project_milestones")
    .select("*")
    .eq("project_id", id)
    .order("sort_order", { ascending: true });

  return { ...project, milestones: milestones || [] };
}
