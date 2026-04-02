import Link from "next/link";
import { getProjectsByEmail, type ProjectWithMilestones } from "@/lib/projects";

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  planning: { label: "Lên kế hoạch", color: "bg-slate-100 text-slate-600" },
  in_progress: { label: "Đang triển khai", color: "bg-primary/10 text-primary" },
  completed: { label: "Hoàn thành", color: "bg-accent/10 text-accent" },
  maintenance: { label: "Bảo trì", color: "bg-amber-50 text-amber-600" },
};

const PACKAGE_MAP: Record<string, string> = {
  starter: "Starter",
  growth: "Growth",
  scale: "Scale",
  retainer: "Retainer",
};

function getMilestoneProgress(project: ProjectWithMilestones) {
  if (!project.milestones.length) return 0;
  const completed = project.milestones.filter((m) => m.status === "completed").length;
  return Math.round((completed / project.milestones.length) * 100);
}

function formatDate(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default async function PortalDashboard({ userEmail }: { userEmail: string }) {
  const projects = await getProjectsByEmail(userEmail);

  return (
    <div className="px-8 py-8">
      <div className="mb-8">
        <h1 className="font-display font-bold text-xl text-slate-900">Overview</h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Theo dõi tiến độ và trạng thái các project automation.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" fill="none" stroke="#94A3B8" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-sm text-slate-500 mb-4">Chưa có project nào. Đặt audit để bắt đầu!</p>
          <a href="/audit" className="inline-flex px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
            Đặt Audit Miễn Phí →
          </a>
        </div>
      ) : (
        <div className="space-y-5">
          {projects.map((project) => {
            const progress = getMilestoneProgress(project);
            const statusInfo = STATUS_MAP[project.status] || STATUS_MAP.planning;
            const currentMilestone = project.milestones.find((m) => m.status === "in_progress");

            return (
              <Link
                key={project.id}
                href={`/portal/dashboard/projects/${project.id}`}
                className="block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                      <span className="text-[11px] text-slate-400">{PACKAGE_MAP[project.package]}</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    {project.description && (
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{project.description}</p>
                    )}
                  </div>
                  <svg
                    width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    className="text-slate-300 group-hover:text-primary shrink-0 mt-1 transition-colors"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Progress bar */}
                {project.milestones.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-medium text-slate-500">Tiến độ</span>
                      <span className="text-[11px] font-bold text-slate-700">{progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Mini milestone timeline */}
                {project.milestones.length > 0 && (
                  <div className="flex items-center gap-1 mb-4">
                    {project.milestones.map((m, i) => (
                      <div key={m.id} className="flex items-center flex-1">
                        <div
                          className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                            m.status === "completed" ? "bg-accent" :
                            m.status === "in_progress" ? "bg-primary animate-pulse" :
                            m.status === "blocked" ? "bg-red-400" :
                            "bg-slate-200"
                          }`}
                          title={m.title}
                        />
                        {i < project.milestones.length - 1 && (
                          <div className={`flex-1 h-px mx-0.5 ${
                            m.status === "completed" ? "bg-accent/40" : "bg-slate-200"
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Current milestone callout */}
                {currentMilestone && (
                  <div className="bg-primary/5 border border-primary/10 rounded-lg px-3 py-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs font-semibold text-primary">Đang làm:</span>
                      <span className="text-xs text-slate-700">{currentMilestone.title}</span>
                    </div>
                  </div>
                )}

                {/* Meta row */}
                <div className="flex flex-wrap gap-x-6 gap-y-1 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-slate-400">Bắt đầu</span>
                    <span className="text-slate-600 font-medium">{formatDate(project.start_date)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-slate-400">{project.status === "maintenance" ? "Ongoing" : "Bàn giao"}</span>
                    <span className="text-slate-600 font-medium">
                      {project.status === "maintenance" ? "Hàng tháng" : formatDate(project.target_date)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-slate-400">Workflows</span>
                    <span className="text-slate-600 font-medium">{project.workflow_count}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-slate-400">Milestones</span>
                    <span className="text-slate-600 font-medium">
                      {project.milestones.filter((m) => m.status === "completed").length}/{project.milestones.length}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Support */}
      <div className="mt-8 p-5 bg-white rounded-xl border border-slate-200 text-center">
        <p className="text-sm text-slate-500">
          Cần hỗ trợ? Liên hệ{" "}
          <a href="mailto:hello@autoflowvn.net" className="text-primary hover:text-primary-dark font-medium">
            hello@autoflowvn.net
          </a>
        </p>
      </div>
    </div>
  );
}
