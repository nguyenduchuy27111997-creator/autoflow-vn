import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { value: "0%", unit: "", label: "lead bị miss" },
  { value: "35%", unit: "", label: "tăng tỉ lệ xem nhà" },
  { value: "2", unit: "giờ/ngày", label: "tiết kiệm matching" },
  { value: "3", unit: "tuần", label: "triển khai xong" },
];

const workflows = [
  {
    name: "Lead capture đa kênh → CRM",
    before: "Lead từ Facebook, Zalo, Batdongsan.com.vn ghi vào Excel riêng, 40% bị miss hoặc trùng",
    after: "Tất cả lead tự động vào 1 CRM, phân loại theo nguồn + khu vực + budget, assign cho sales",
  },
  {
    name: "Follow-up Zalo sequence tự động",
    before: "Sales nhớ trong đầu ai cần gọi lại, follow-up rate chỉ 60%",
    after: "Zalo OA tự gửi: thông tin dự án → ảnh thực tế → mời xem nhà → offer. 100% lead được nurture",
  },
  {
    name: "Matching BĐS – khách hàng",
    before: "Sales lật 500 căn để tìm phù hợp, mất 2 giờ/ngày, hay bỏ sót",
    after: "Khách đăng ký → n8n so khớp tự động → gửi top 5 căn phù hợp qua Zalo trong 30 giây",
  },
  {
    name: "Nhắc lịch xem nhà & follow-up sau xem",
    before: "30% khách quên lịch xem nhà, sau xem không ai follow-up kịp thời",
    after: "Zalo nhắc 24h trước, sau xem tự hỏi feedback, no-show giảm 70%",
  },
  {
    name: "Báo cáo pipeline sales",
    before: "Quản lý mất 5 ngày cuối tháng gom data từ Zalo, Sheet, sổ tay",
    after: "Mỗi sáng thứ 2: dashboard pipeline gửi qua Zalo — lead mới, đang xem, sắp chốt",
  },
];

const timeline = [
  { week: "Tuần 1", title: "Audit & Planning", desc: "Discovery call 2h, mapping pipeline sales, xác định 5 workflows ưu tiên theo conversion funnel." },
  { week: "Tuần 2", title: "Build lead capture + matching + follow-up", desc: "Workflow #1, #2, #3 chạy thật. Kết nối Facebook Lead Ads + Zalo OA + Google Sheet." },
  { week: "Tuần 3", title: "Build nhắc lịch + báo cáo + training", desc: "Workflow #4, #5 hoàn thành. Training 2h cho team sales. Video hướng dẫn." },
  { week: "Bàn giao", title: "Go-live & Support", desc: "5 workflows production. SOP document. Support 14 ngày. Retainer option." },
];

export default function BatDongSanResultPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="max-w-3xl">
            <a
              href="/#ket-qua"
              className="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block"
            >
              ← Tất cả case studies
            </a>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold mb-5 ml-4">
              Bất động sản
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight tracking-tight mb-4">
              Agency BĐS — 0% lead miss, tăng 35% tỉ lệ xem nhà
            </h1>
            <p className="text-slate-500 text-lg">
              12 sales · Gói Growth — 32 triệu đồng · Triển khai 3 tuần
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-6 text-center"
              >
                <p className="font-display font-extrabold text-3xl text-primary">
                  {m.value}
                  <span className="text-sm font-medium text-slate-400 ml-1">
                    {m.unit}
                  </span>
                </p>
                <p className="text-xs text-slate-500 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Background */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-5">
            Bối cảnh
          </h2>
          <div className="prose prose-slate max-w-none">
            <p>
              Agency bất động sản tại TP.HCM, 12 sales, quản lý ~1.500 leads
              đang active từ nhiều nguồn: Facebook Ads, Zalo, Batdongsan.com.vn,
              hotline, và referral. Bán căn hộ + đất nền khu vực Q7, Q2, Thủ Đức.
            </p>
            <p>
              Vấn đề lớn nhất: lead đến từ 5 kênh nhưng ghi vào Excel riêng của
              từng sales → trùng lead, miss follow-up, không ai biết tổng pipeline.
              Matching BĐS với khách hoàn toàn bằng tay — sales nhớ trong đầu ai
              cần gì. Quản lý mất 5 ngày cuối tháng để gom báo cáo từ 12 người.
            </p>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-16 bg-slate-50 relative noise-bg">
          <div className="max-w-6xl mx-auto px-6 relative">
            <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-8 text-center">
              5 Workflows — Before & After
            </h2>
            <div className="space-y-4">
              {workflows.map((wf, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <div className="px-6 py-3 bg-slate-900">
                    <span className="text-sm font-semibold text-white">
                      {i + 1}. {wf.name}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs">
                          ✕
                        </span>
                        <span className="text-xs font-bold text-red-600 uppercase">
                          Trước
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{wf.before}</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs">
                          ✓
                        </span>
                        <span className="text-xs font-bold text-accent uppercase">
                          Sau
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{wf.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 max-w-3xl mx-auto px-6">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-8 text-center">
            Timeline triển khai: 3 tuần
          </h2>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-semibold text-primary">
                    {t.week}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 mt-1">
                    {t.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ROI */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <div className="bg-accent/5 border border-accent/10 rounded-2xl p-8">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-6">
              ROI thực tế
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-slate-500 mb-1">Chi phí project</p>
                <p className="font-display font-extrabold text-2xl text-slate-900">
                  32 triệu
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">
                  Giá trị deal tăng thêm/năm
                </p>
                <p className="font-display font-extrabold text-2xl text-accent">
                  ~500 triệu
                </p>
                <p className="text-xs text-slate-400">
                  (35% tăng xem nhà × conversion rate × giá trị deal BĐS)
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Hoàn vốn sau</p>
                <p className="font-display font-extrabold text-2xl text-primary">
                  1 deal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-3">
            Agency bạn có vấn đề tương tự?
          </h2>
          <p className="text-slate-500 mb-6">
            Audit miễn phí 30 phút — mình phân tích pipeline và chỉ ra workflow
            nào chốt deal nhanh hơn.
          </p>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Audit miễn phí cho agency
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 8h6M8 5l3 3-3 3" />
            </svg>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
