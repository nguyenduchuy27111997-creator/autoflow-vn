import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getProjectById } from "@/lib/projects";
import type { Milestone } from "@/lib/projects";

export const dynamic = "force-dynamic";

const STATUS_MAP: Record<string, { label: string; color: string; bg: string }> = {
  planning: { label: "Lên kế hoạch", color: "text-slate-600", bg: "bg-slate-100" },
  in_progress: { label: "Đang triển khai", color: "text-primary", bg: "bg-primary/10" },
  completed: { label: "Hoàn thành", color: "text-accent", bg: "bg-accent/10" },
  maintenance: { label: "Bảo trì", color: "text-amber-600", bg: "bg-amber-50" },
};

const MILESTONE_STATUS: Record<string, { icon: React.ReactNode; color: string; lineColor: string }> = {
  completed: {
    icon: (
      <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
    color: "bg-accent",
    lineColor: "bg-accent/30",
  },
  in_progress: {
    icon: (
      <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-primary animate-pulse",
    lineColor: "bg-primary/20",
  },
  blocked: {
    icon: (
      <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    color: "bg-red-500",
    lineColor: "bg-red-200",
  },
  pending: {
    icon: <span className="w-2 h-2 rounded-full bg-white" />,
    color: "bg-slate-300",
    lineColor: "bg-slate-200",
  },
};

const PACKAGE_LABELS: Record<string, string> = {
  starter: "Starter — 1 workflow",
  growth: "Growth — 3-5 workflows",
  scale: "Scale — 8-12 workflows",
  retainer: "Retainer hàng tháng",
};

function formatDate(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("vi-VN", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/portal");

  const project = await getProjectById(id);
  if (!project || project.client_email !== user.email) redirect("/portal/dashboard");

  const statusInfo = STATUS_MAP[project.status] || STATUS_MAP.planning;
  const completedCount = project.milestones.filter((m) => m.status === "completed").length;
  const progress = project.milestones.length ? Math.round((completedCount / project.milestones.length) * 100) : 0;

  return (
    <div className="px-8 py-8 max-w-3xl">
      {/* Back link */}
      <Link
        href="/portal/dashboard"
        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-primary transition-colors mb-6"
      >
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" />
        </svg>
        Quay lại Overview
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2.5 mb-2">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusInfo.bg} ${statusInfo.color}`}>
            {statusInfo.label}
          </span>
          <span className="text-xs text-slate-400">{PACKAGE_LABELS[project.package]}</span>
        </div>
        <h1 className="font-display font-bold text-xl text-slate-900">{project.name}</h1>
        {project.description && (
          <p className="text-sm text-slate-500 mt-1">{project.description}</p>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <StatBox label="Bắt đầu" value={formatDate(project.start_date)} />
        <StatBox label={project.status === "maintenance" ? "Loại" : "Bàn giao"} value={project.status === "maintenance" ? "Ongoing" : formatDate(project.target_date)} />
        <StatBox label="Workflows" value={String(project.workflow_count)} />
        <StatBox label="Tiến độ" value={`${progress}%`} accent />
      </div>

      {/* Progress bar */}
      {project.milestones.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">Tiến độ tổng thể</span>
            <span className="text-sm font-bold text-primary">{completedCount}/{project.milestones.length} milestones</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Timeline */}
      {project.milestones.length > 0 && (
        <div className="mb-8">
          <h2 className="font-display font-bold text-sm text-slate-900 mb-5">Lộ trình triển khai</h2>
          <div className="space-y-0">
            {project.milestones.map((milestone, i) => (
              <MilestoneRow
                key={milestone.id}
                milestone={milestone}
                isLast={i === project.milestones.length - 1}
              />
            ))}
          </div>
        </div>
      )}

      {/* Support */}
      <div className="p-5 bg-white rounded-xl border border-slate-200 text-center">
        <p className="text-sm text-slate-500">
          Có câu hỏi về project? Liên hệ{" "}
          <a href="mailto:hello@autoflowvn.net" className="text-primary hover:text-primary-dark font-medium">
            hello@autoflowvn.net
          </a>
        </p>
      </div>
    </div>
  );
}

function StatBox({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3.5 text-center">
      <div className={`font-display font-bold text-lg ${accent ? "text-primary" : "text-slate-900"}`}>{value}</div>
      <div className="text-[10px] text-slate-500 mt-0.5">{label}</div>
    </div>
  );
}

function MilestoneRow({ milestone, isLast }: { milestone: Milestone; isLast: boolean }) {
  const info = MILESTONE_STATUS[milestone.status] || MILESTONE_STATUS.pending;

  return (
    <div className="flex gap-4">
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div className={`w-7 h-7 rounded-full ${info.color} flex items-center justify-center shrink-0`}>
          {info.icon}
        </div>
        {!isLast && <div className={`w-0.5 flex-1 ${info.lineColor} min-h-[40px]`} />}
      </div>

      {/* Content */}
      <div className={`pb-6 ${isLast ? "" : ""}`}>
        <div className="flex items-center gap-2">
          <h3 className={`font-semibold text-sm ${
            milestone.status === "completed" ? "text-slate-900" :
            milestone.status === "in_progress" ? "text-primary" :
            "text-slate-500"
          }`}>
            {milestone.title}
          </h3>
          {milestone.status === "in_progress" && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              Đang làm
            </span>
          )}
          {milestone.status === "blocked" && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">
              Bị chặn
            </span>
          )}
        </div>
        {milestone.description && (
          <p className="text-xs text-slate-500 mt-0.5">{milestone.description}</p>
        )}
        {milestone.completed_at && (
          <p className="text-[10px] text-accent font-medium mt-1">
            ✓ Hoàn thành {formatDate(milestone.completed_at)}
          </p>
        )}
      </div>
    </div>
  );
}
