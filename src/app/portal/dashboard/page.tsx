import { createClient } from "@/lib/supabase/server";
import PortalDashboard from "./PortalDashboard";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <PortalDashboard userEmail={user?.email || ""} />;
}
