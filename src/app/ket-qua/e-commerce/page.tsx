import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { value: "18", unit: "giờ/tuần", label: "tiết kiệm cho team" },
  { value: "0", unit: "lỗi", label: "sai sót nhập tay" },
  { value: "23%", unit: "", label: "tăng doanh thu" },
  { value: "3", unit: "tuần", label: "triển khai xong" },
];

const workflows = [
  {
    name: "Đồng bộ đơn hàng Shopee → MISA",
    before: "2 nhân viên nhập tay 5 giờ/ngày, sai 8–10 đơn/tuần",
    after: "Tự động 100%, 0 lỗi, real-time sync",
  },
  {
    name: "Auto-reply review + escalation",
    before: "Reply review trung bình sau 12 giờ, nhiều review xấu bị miss",
    after: "Reply trong 30 giây, review xấu escalate ngay cho manager",
  },
  {
    name: "Lead capture → CRM → Zalo OA",
    before: "Lead từ Facebook ghi vào sổ tay, 40% bị quên follow-up",
    after: "100% lead được capture + auto follow-up ngày 3, 7",
  },
  {
    name: "Báo cáo tồn kho tự động",
    before: "Cuối tuần ngồi gom data từ 3 nguồn, mất 3–4 giờ",
    after: "Báo cáo tự gửi qua Zalo mỗi sáng thứ 2, 0 phút effort",
  },
  {
    name: "Upsell sequence cho khách đã mua",
    before: "Không có remarketing, khách mua 1 lần rồi quên",
    after: "Zalo OA tự gửi khảo sát → gợi ý sản phẩm → voucher thân thiết",
  },
];

const timeline = [
  { week: "Tuần 1", title: "Audit & Planning", desc: "Discovery call 2h, process mapping, xác định 5 workflows ưu tiên, proposal chi tiết." },
  { week: "Tuần 2", title: "Build đồng bộ đơn hàng + tồn kho", desc: "Workflow #1 và #4 chạy thật. Test với data thực từ Shopee Seller Center." },
  { week: "Tuần 3", title: "Build lead, review, upsell", desc: "Workflow #2, #3, #5 hoàn thành. Training session 2h cho team. Video Loom hướng dẫn." },
  { week: "Bàn giao", title: "Go-live & Support", desc: "Tất cả 5 workflows chạy production. SOP document. Support 14 ngày." },
];

export default function EcommerceResultPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="max-w-3xl">
            <a
              href="/ket-qua"
              className="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block"
            >
              ← Tất cả case studies
            </a>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EE4D2D]/10 text-[#EE4D2D] text-xs font-semibold mb-5 ml-4">
              E-commerce
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight tracking-tight mb-4">
              Shop thời trang online — tiết kiệm 18 giờ/tuần, tăng 23% doanh
              thu
            </h1>
            <p className="text-slate-500 text-lg">
              15 nhân viên · Gói Growth — 28 triệu đồng · Triển khai 3 tuần
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
              Shop thời trang online tại TP.HCM, bán trên 3 sàn (Shopee, Tiki,
              TikTok Shop) + website riêng. 15 nhân viên, trong đó 2 người
              full-time chỉ để nhập đơn từ các sàn vào MISA và quản lý tồn kho.
            </p>
            <p>
              Vấn đề lớn nhất: sai tồn kho liên tục dẫn đến oversell, hủy đơn,
              khách đánh giá 1 sao. Mỗi tuần trung bình 8–10 lỗi nhập tay. Chủ
              shop đã cố gắng thuê thêm 1 người nhưng lỗi vẫn xảy ra vì bản
              chất là con người không thể sync real-time giữa 4 kênh.
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
                  28 triệu
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">
                  Tiết kiệm năm đầu
                </p>
                <p className="font-display font-extrabold text-2xl text-accent">
                  ~180 triệu
                </p>
                <p className="text-xs text-slate-400">
                  (2 nhân viên × 11tr × 8 tháng + tăng doanh thu)
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Hoàn vốn sau</p>
                <p className="font-display font-extrabold text-2xl text-primary">
                  ~2 tháng
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-3">
            Shop bạn có vấn đề tương tự?
          </h2>
          <p className="text-slate-500 mb-6">
            Audit miễn phí 30 phút — mình phân tích quy trình shop bạn và chỉ
            ra chính xác đâu nên tự động hóa trước.
          </p>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Audit miễn phí cho shop
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
