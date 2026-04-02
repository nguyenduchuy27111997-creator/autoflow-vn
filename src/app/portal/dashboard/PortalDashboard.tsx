"use client";

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
  return (
    <div className="px-8 py-8">
      <div className="mb-8">
        <h1 className="font-display font-bold text-xl text-slate-900">
          Overview
        </h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Theo dõi tiến độ và trạng thái các project automation.
        </p>
      </div>

      {/* Project cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockProjects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.statusColor}`}
              >
                {project.status}
              </span>
              <span className="text-xs text-slate-500">{project.package}</span>
            </div>

            <h3 className="font-display font-bold text-sm text-slate-900 mb-4">
              {project.name}
            </h3>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Bắt đầu</span>
                <span className="text-slate-600 font-medium">{project.startDate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Bàn giao</span>
                <span className="text-slate-600 font-medium">{project.deliveryDate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Workflows</span>
                <span className="text-slate-600 font-medium">{project.workflows}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Support */}
      <div className="mt-8 p-5 bg-white rounded-xl border border-slate-200 text-center">
        <p className="text-sm text-slate-500">
          Cần hỗ trợ? Liên hệ{" "}
          <a
            href="mailto:hello@autoflowvn.net"
            className="text-primary hover:text-primary-dark font-medium"
          >
            hello@autoflowvn.net
          </a>
        </p>
      </div>
    </div>
  );
}
