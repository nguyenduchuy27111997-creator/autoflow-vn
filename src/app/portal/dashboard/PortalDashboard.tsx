"use client";

import { useRouter } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { createClient } from "@/lib/supabase/client";

const mockProjects = [
  {
    name: "Đồng bộ đơn Shopee → MISA",
    package: "Growth",
    status: "Hoàn thành",
    statusColor: "bg-accent/10 text-accent",
    startDate: "2026-01-15",
    deliveryDate: "2026-02-05",
    workflows: 5,
  },
  {
    name: "Automation Zalo OA + Lead nurturing",
    package: "Growth",
    status: "Đang triển khai",
    statusColor: "bg-primary/10 text-primary",
    startDate: "2026-03-10",
    deliveryDate: "2026-04-01",
    workflows: 3,
  },
  {
    name: "Retainer — Monitor & Optimize",
    package: "Retainer",
    status: "Bảo trì",
    statusColor: "bg-amber-50 text-amber-600",
    startDate: "2026-02-10",
    deliveryDate: "Ongoing",
    workflows: 5,
  },
];

export default function PortalDashboard({ userEmail }: { userEmail: string }) {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/portal");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Portal nav */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/">
              <Logo />
            </a>
            <span className="text-sm font-semibold text-slate-900">
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 hidden sm:block">
              {userEmail}
            </span>
            <button
              onClick={handleSignOut}
              className="text-sm font-medium text-slate-500 hover:text-red-500 transition-colors"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl text-slate-900">
            Projects của bạn
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Theo dõi tiến độ và trạng thái các project automation.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-all"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.statusColor}`}
                >
                  {project.status}
                </span>
                <span className="text-xs text-slate-400">
                  {project.package}
                </span>
              </div>

              {/* Project name */}
              <h3 className="font-display font-bold text-slate-900 mb-4">
                {project.name}
              </h3>

              {/* Details */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Bắt đầu</span>
                  <span className="text-slate-700 font-medium">
                    {project.startDate}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Bàn giao</span>
                  <span className="text-slate-700 font-medium">
                    {project.deliveryDate}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Workflows</span>
                  <span className="text-slate-700 font-medium">
                    {project.workflows} workflows
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support */}
        <div className="mt-10 p-6 bg-white rounded-xl border border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            Cần hỗ trợ? Liên hệ qua{" "}
            <a
              href="mailto:hello@autoflowvn.net"
              className="text-primary hover:text-primary-dark font-medium"
            >
              hello@autoflowvn.net
            </a>{" "}
            hoặc Zalo.
          </p>
        </div>
      </main>
    </div>
  );
}
