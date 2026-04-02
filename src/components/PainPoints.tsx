import SectionHeader from "./ui/SectionHeader";
import Container from "./ui/Container";
import Card from "./ui/Card";

const pains = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
    title: "Nhân viên nhập tay 4–5 giờ/ngày",
    description:
      "Đơn hàng từ Shopee, Tiki, TikTok Shop — mỗi kênh một giao diện. Copy-paste từ sáng tới chiều, sai 1 số là mất tiền.",
    stat: "4.5 giờ/ngày",
    statLabel: "trung bình mất cho việc nhập liệu",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Lead rơi vì không follow-up kịp",
    description:
      "Khách nhắn Zalo lúc 11 giờ đêm. Sáng hôm sau reply thì họ đã mua bên đối thủ. Không ai theo dõi được 100% lead 24/7.",
    stat: "67%",
    statLabel: "lead mất vì reply chậm quá 1 giờ",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Báo cáo cuối tháng mất 2–3 ngày gom",
    description:
      "Dữ liệu nằm ở Google Sheet, MISA, KiotViet, group Zalo. Tổng hợp bằng tay, sai số là chuyện thường.",
    stat: "3 ngày",
    statLabel: "để ra được 1 báo cáo tháng chính xác",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Thuê thêm người nhưng vẫn không đủ",
    description:
      "1 nhân viên văn phòng = 10–12 triệu/tháng. Thuê 2 người cho việc nhập liệu = 240–288 triệu/năm. Nhưng vẫn sai, vẫn chậm.",
    stat: "240 triệu",
    statLabel: "chi phí/năm cho 2 nhân viên nhập tay",
  },
];

export default function PainPoints() {
  return (
    <Container id="dich-vu" className="py-20 md:py-28">
        {/* Header */}
        <SectionHeader
          badge="Vấn đề quen thuộc?"
          title="Bạn đang trả lương cho nhân viên để"
          gradientText="copy-paste"
          subtitle="93% SME Việt Nam biết cần tự động hóa. Nhưng chưa tới 20% có người triển khai được. Đây là những gì đang xảy ra mỗi ngày:"
          className="mb-16"
        />

        {/* Pain cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <Card key={i} className="group relative">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                {pain.icon}
              </div>

              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                {pain.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {pain.description}
              </p>

              {/* Stat highlight */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <span className="font-display font-extrabold text-2xl text-red-500">
                  {pain.stat}
                </span>
                <span className="text-xs text-slate-500">{pain.statLabel}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm mb-2">Nếu bạn thấy quen →</p>
          <p className="font-display font-bold text-xl text-slate-900">
            AutoFlow giải quyết{" "}
            <span className="text-primary">tất cả những vấn đề này</span> trong
            2–4 tuần
          </p>
        </div>
    </Container>
  );
}
