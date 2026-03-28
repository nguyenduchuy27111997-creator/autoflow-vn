import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { value: "80%", unit: "", label: "giảm miss lịch" },
  { value: "1", unit: "FTE", label: "tiết kiệm nhân sự" },
  { value: "100%", unit: "", label: "follow-up lead tự động" },
  { value: "4", unit: "tuần", label: "triển khai xong" },
];

const workflows = [
  {
    name: "Nhắc lịch học viên qua Zalo OA",
    before: "Nhân viên gọi điện nhắc từng người, mất 3 giờ/ngày, vẫn miss 15%",
    after: "Zalo OA tự nhắc 24h trước, xác nhận tự động, miss lịch giảm còn 3%",
  },
  {
    name: "Lead nurturing tự động",
    before: "Phụ huynh hỏi học phí, reply chậm 12–24 giờ, 67% lead mất",
    after: "Zalo OA reply ngay + gửi thông tin khóa học + follow-up ngày 3, 7",
  },
  {
    name: "Điểm danh & thông báo phụ huynh",
    before: "Giáo viên điểm danh trên sổ, phụ huynh không biết con đã đến lớp chưa",
    after: "Check-in qua form → Zalo tự gửi phụ huynh → feedback cuối buổi",
  },
  {
    name: "Báo cáo 8 chi nhánh tự động",
    before: "Cuối tháng gom data từ 8 nơi, mất 3 ngày, sai số thường xuyên",
    after: "Mỗi sáng thứ 2: báo cáo tổng hợp gửi qua Zalo cho quản lý, 0 phút",
  },
  {
    name: "Upsell khóa mới & gia hạn",
    before: "Không ai nhớ học viên nào sắp hết khóa, mất cơ hội gia hạn",
    after: "2 tuần trước khi hết khóa → Zalo gửi offer gia hạn giảm 10% → nhắc lại nếu chưa reply",
  },
];

const timeline = [
  { week: "Tuần 1", title: "Audit & Planning", desc: "Discovery call 2h, mapping quy trình 8 chi nhánh, xác định 5 workflows ưu tiên." },
  { week: "Tuần 2", title: "Build nhắc lịch + điểm danh", desc: "Workflow #1 và #3 chạy thật. Test với lịch học viên thực tế. Kết nối Zalo OA." },
  { week: "Tuần 3", title: "Build lead nurture + báo cáo + upsell", desc: "Workflow #2, #4, #5 hoàn thành. Training session 2h cho admin 8 chi nhánh." },
  { week: "Tuần 4", title: "Go-live & Support", desc: "Tất cả chạy production. SOP cho từng chi nhánh. Video Loom hướng dẫn. Support 14 ngày." },
];

export default function GiaoDucResultPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-5 ml-4">
              Giáo dục
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight tracking-tight mb-4">
              Chuỗi trung tâm tiếng Anh — giảm 80% miss lịch, tiết kiệm 1 nhân
              sự full-time
            </h1>
            <p className="text-slate-500 text-lg">
              45 nhân viên · 8 chi nhánh · Gói Scale — 65 triệu đồng · Triển
              khai 4 tuần
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
              Chuỗi trung tâm tiếng Anh tại TP.HCM, 8 chi nhánh, 45 nhân viên
              (giáo viên + admin + CSKH). Mỗi chi nhánh có 80–120 học viên đang
              học, tổng hơn 800 học viên.
            </p>
            <p>
              Vấn đề lớn nhất: 15% học viên miss lịch mỗi tháng vì nhắc lịch
              bằng tay không xuể. 1 nhân viên full-time chỉ để gọi điện nhắc
              lịch và gom báo cáo từ 8 chi nhánh. Lead từ Facebook và Zalo
              follow-up chậm — 67% phụ huynh hỏi học phí nhưng không được reply
              trong 1 giờ → đăng ký trung tâm khác.
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
            Timeline triển khai: 4 tuần
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
                  65 triệu
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">
                  Tiết kiệm năm đầu
                </p>
                <p className="font-display font-extrabold text-2xl text-accent">
                  ~150 triệu
                </p>
                <p className="text-xs text-slate-400">
                  (1 FTE × 10tr × 12 tháng + giảm miss lịch + tăng gia hạn)
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Hoàn vốn sau</p>
                <p className="font-display font-extrabold text-2xl text-primary">
                  ~5 tháng
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-3">
            Trung tâm bạn có vấn đề tương tự?
          </h2>
          <p className="text-slate-500 mb-6">
            Audit miễn phí 30 phút — mình phân tích quy trình trung tâm bạn và
            chỉ ra workflow nào giảm miss lịch ngay.
          </p>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Audit miễn phí cho trung tâm
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
