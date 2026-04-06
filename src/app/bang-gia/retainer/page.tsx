import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InlineContactForm from "@/components/InlineContactForm";

export const metadata: Metadata = {
  title: "Gói Retainer — Hỗ Trợ Automation Hàng Tháng | AutoFlow VN",
  description:
    "Gói retainer tự động hóa hàng tháng: monitor workflows, fix lỗi trong 24h, thêm 1–2 workflow mới mỗi tháng, báo cáo ROI thực tế. Dành cho SME Việt Nam.",
  alternates: { canonical: "https://autoflowvn.net/bang-gia/retainer" },
  openGraph: {
    title: "Gói Retainer — Hỗ Trợ Automation Hàng Tháng | AutoFlow VN",
    description:
      "Monitor workflows, fix lỗi 24h, thêm workflow mới mỗi tháng. Gói retainer tự động hóa cho SME Việt Nam.",
    url: "https://autoflowvn.net/bang-gia/retainer",
  },
};

const included = [
  {
    title: "Monitor workflows hàng tuần",
    desc: "Kiểm tra tất cả workflows đang chạy, phát hiện lỗi trước khi ảnh hưởng business.",
  },
  {
    title: "Fix lỗi trong 24h (cam kết)",
    desc: "Cam kết fix mọi lỗi workflow trong 24h làm việc. Liên hệ trực tiếp qua Zalo.",
  },
  {
    title: "1–2 workflow nhỏ mới mỗi tháng",
    desc: "Thêm automation mới theo nhu cầu phát sinh — không cần mua gói mới.",
  },
  {
    title: "Báo cáo tự động hóa hàng tháng",
    desc: "Báo cáo cuối tháng tự động: số execution, thời gian tiết kiệm, ROI thực tế. Gửi qua Zalo.",
  },
  {
    title: "Tư vấn AI tools mới",
    desc: "Cập nhật công cụ AI mới phù hợp với business bạn. Đề xuất 1 cải tiến/tháng.",
  },
  {
    title: "Check-in 30/60/90 ngày",
    desc: "Review toàn bộ hệ thống automation, tối ưu performance, đề xuất mở rộng.",
  },
];

const faqs = [
  {
    q: "Commitment tối thiểu bao lâu?",
    a: "3 tháng tối thiểu. Sau đó gia hạn theo tháng, hủy bất cứ lúc nào với 30 ngày notice.",
  },
  {
    q: "Workflow 'nhỏ' nghĩa là gì?",
    a: "Workflow dưới 10 nodes, build trong 2–4 giờ. Ví dụ: thêm 1 notification mới, tạo 1 report đơn giản, tích hợp 1 tool mới. Workflow lớn hơn sẽ quote riêng.",
  },
  {
    q: "Cam kết fix 24h có nghĩa là gì?",
    a: "Khi bạn báo lỗi qua Zalo, mình bắt đầu xử lý trong 24h làm việc (T2–T6, 8h–18h). Lỗi critical (workflow ngừng hoàn toàn) được ưu tiên fix trong 4h.",
  },
  {
    q: "Giảm giá tháng đầu là sao?",
    a: "Nếu ký retainer ngay sau khi bàn giao project, tháng đầu giảm 20%. Ví dụ: gói 12 triệu → tháng đầu chỉ 9.6 triệu.",
  },
];

export default function RetainerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <a
                href="/bang-gia"
                className="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block"
              >
                ← Xem tất cả gói
              </a>
              <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight tracking-tight mb-5">
                Retainer hàng tháng —{" "}
                <span className="gradient-text">yên tâm vận hành</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Sau khi project bàn giao, retainer đảm bảo workflows luôn chạy
                ổn định, lỗi được fix nhanh, và hệ thống được cải tiến liên
                tục. Bạn tập trung kinh doanh, mình lo phần automation.
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display font-extrabold text-5xl text-slate-900">
                  8–15
                </span>
                <span className="text-lg text-slate-500">triệu đ/tháng</span>
              </div>
              <a
                href="/audit"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Trao đổi về retainer
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 8h6M8 5l3 3-3 3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "70%+", label: "khách hàng chọn retainer" },
                { value: "24h", label: "cam kết fix lỗi" },
                { value: "1–2", label: "workflow mới/tháng" },
                { value: "100%", label: "theo dõi hoạt động" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 p-6 text-center"
                >
                  <p className="font-display font-extrabold text-2xl text-primary">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 bg-slate-50 relative noise-bg">
          <div className="max-w-6xl mx-auto px-6 relative">
            <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-10 text-center">
              Bao gồm trong retainer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {included.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center mb-4">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 8l4 4 8-8" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing comparison */}
        <section className="py-16 max-w-3xl mx-auto px-6">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-8 text-center">
            So sánh: có retainer vs không
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-red-200 p-7">
              <h3 className="font-display font-bold text-red-600 mb-4">
                Không có retainer
              </h3>
              <ul className="space-y-3">
                {[
                  "Lỗi workflow → tự fix hoặc thuê người (giá cao hơn)",
                  "Không ai monitor → lỗi phát hiện muộn",
                  "Cần workflow mới → phải mua gói mới",
                  "Không có báo cáo ROI hàng tháng",
                  "Không được tư vấn AI tools mới",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-red-400 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-accent/30 p-7">
              <h3 className="font-display font-bold text-accent mb-4">
                Có retainer
              </h3>
              <ul className="space-y-3">
                {[
                  "Fix lỗi trong 24h, không phí phát sinh",
                  "Monitor chủ động — phát hiện lỗi trước khi ảnh hưởng",
                  "1–2 workflow nhỏ mới/tháng, đã bao gồm",
                  "Báo cáo ROI tự động cuối tháng — proof cho sếp",
                  "Cập nhật AI tools + đề xuất cải tiến liên tục",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-accent mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-8 text-center">
            Câu hỏi thường gặp về Retainer
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-6"
              >
                <h3 className="font-display font-bold text-sm text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Inline Form */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <InlineContactForm
            source="retainer"
            title="Trao Đổi Về Retainer"
            subtitle="Điền thông tin — mình liên hệ qua Zalo để bàn scope retainer phù hợp. Tháng đầu giảm 20%."
          />
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-10">
            <p className="text-sm text-primary font-semibold mb-3">
              Hoặc đặt audit miễn phí trước
            </p>
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              Chưa có project? Bắt đầu từ audit
            </h2>
            <p className="text-slate-400 mb-6">
              Audit miễn phí 30 phút — mình phân tích quy trình và gợi ý gói phù hợp.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Đặt lịch audit miễn phí
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 8h6M8 5l3 3-3 3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
