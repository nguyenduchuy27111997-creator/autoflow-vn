import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// API for AutoFlow team to update project milestones
// Auth: CRON_SECRET (same as email cron — internal use only)

export async function PATCH(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { milestone_id, status, completed_at } = await req.json();

  if (!milestone_id || !status) {
    return NextResponse.json({ error: "milestone_id and status required" }, { status: 400 });
  }

  const validStatuses = ["pending", "in_progress", "completed", "blocked"];
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: `Invalid status. Use: ${validStatuses.join(", ")}` }, { status: 400 });
  }

  const supabase = createAdminClient();

  const updateData: Record<string, unknown> = { status };
  if (status === "completed") {
    updateData.completed_at = completed_at || new Date().toISOString();
  }

  const { error } = await supabase
    .from("project_milestones")
    .update(updateData)
    .eq("id", milestone_id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Also update project's updated_at
  const { data: milestone } = await supabase
    .from("project_milestones")
    .select("project_id")
    .eq("id", milestone_id)
    .maybeSingle();

  if (milestone) {
    await supabase
      .from("projects")
      .update({ updated_at: new Date().toISOString() })
      .eq("id", milestone.project_id);
  }

  return NextResponse.json({ success: true });
}
