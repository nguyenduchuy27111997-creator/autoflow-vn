const styles = {
  tip: {
    bg: "bg-accent/5",
    border: "border-accent/20",
    icon: "💡",
    title: "Mẹo hay",
    titleColor: "text-accent",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "⚠️",
    title: "Lưu ý",
    titleColor: "text-amber-700",
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "ℹ️",
    title: "Thông tin",
    titleColor: "text-blue-700",
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "✅",
    title: "Kết quả",
    titleColor: "text-green-700",
  },
};

export default function CalloutBox({
  type = "tip",
  title,
  children,
}: {
  type?: keyof typeof styles;
  title?: string;
  children: React.ReactNode;
}) {
  const s = styles[type];
  return (
    <div className={`${s.bg} border ${s.border} rounded-xl p-4 my-6 not-prose`}>
      <div className={`flex items-center gap-2 font-display font-bold text-sm ${s.titleColor} mb-2`}>
        <span>{s.icon}</span>
        {title || s.title}
      </div>
      <div className="text-sm text-slate-600 leading-relaxed">{children}</div>
    </div>
  );
}
