import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import PortalDashboard from "./PortalDashboard";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/portal");
  }

  return <PortalDashboard userEmail={user.email || ""} />;
}
