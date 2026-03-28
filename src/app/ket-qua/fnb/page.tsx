import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { value: "3", unit: "giờ/ngày", label: "tiết kiệm nhập đơn" },
  { value: "25%", unit: "", label: "tăng khách quay lại" },
  { value: "0", unit: "phút", label: "báo cáo doanh thu" },
  { value: "3", unit: "tuần", label: "triển khai xong" },
];

const workflows = [
  {
    name: "Đồng bộ đơn GrabFood/ShopeeFood → Sheet/POS",
    before: "Thu ngân đối chiếu đơn delivery bằng tay mỗi tối, sai lệch doanh thu thường xuyên",
    after: "Đơn tự động lưu vào Sheet, đối chiếu real-time, sai lệch = 0",
  },
  {
    name: "Chăm sóc khách quay lại qua Zalo OA",
    before: "Khách ăn xong đi luôn, không remarketing, repeat rate chỉ 20%",
    after: "Sau 7 ngày: Zalo gửi giảm 10%. Sau 30 ngày: tặng món khai vị. Repeat rate tăng 25%",
  },
  {
    name: "Nhắc ca làm & xác nhận nhân viên",
    before: "Quản lý gọi điện nhắc ca, nhân viên quên ca → thiếu người giờ cao điểm",
    after: "Zalo tự nhắc 12h trước, nhân viên xác nhận/đổi ca, quản lý biết ngay ca trống",
  },
  {
    name: "Cảnh báo tồn kho nguyên liệu",
    before: "Kiểm kê tay mỗi ngày 45 phút, hay hết nguyên liệu giữa ca bận",
    after: "Tồn kho dưới mức → alert bếp trưởng qua Zalo → tự tạo đơn đặt nhà cung cấp",
  },
  {
    name: "Báo cáo doanh thu 3 chi nhánh",
    before: "Cuối tuần gom data từ 3 nơi, mất 2 ngày, quyết định chậm",
    after: "Mỗi tối 10h: báo cáo tự gửi qua Zalo — doanh thu, số đơn, food cost, top món",
  },
];

const timeline = [
  { week: "Tuần 1", title: "Audit & Planning", desc: "Discovery call 2h, khảo sát 3 chi nhánh, mapping quy trình từ nhận đơn đến báo cáo." },
  { week: "Tuần 2", title: "Build đồng bộ đơn + tồn kho + báo cáo", desc: "Workflow #1, #4, #5 chạy thật. Kết nối GrabFood, ShopeeFood, Google Sheet." },
  { week: "Tuần 3", title: "Build chăm khách + nhắc ca + training", desc: "Workflow #2, #3 hoàn thành. Training cho quản lý 3 chi nhánh. Go-live." },
  { week: "Bàn giao", title: "Support & Optimize", desc: "Tất cả chạy production. SOP cho từng chi nhánh. Support 14 ngày. Tối ưu flow." },
];

export default function FnBResultPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold mb-5 ml-4">
              F&B
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight tracking-tight mb-4">
              Chuỗi quán cafe 3 chi nhánh — tiết kiệm 3 giờ/ngày, tăng 25%
              khách quay lại
            </h1>
            <p className="text-slate-500 text-lg">
              22 nhân viên · 3 chi nhánh · Gói Growth — 30 triệu đồng · Triển
              khai 3 tuần
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
              Chuỗi quán cafe tại TP.HCM, 3 chi nhánh, 22 nhân viên (pha chế +
              phục vụ + bếp + quản lý). Bán tại quán + delivery qua GrabFood và
              ShopeeFood. Mỗi chi nhánh trung bình 80–120 đơn/ngày.
            </p>
            <p>
              Vấn đề lớn nhất: đối chiếu đơn delivery mất 1–2 giờ mỗi tối, sai
              lệch doanh thu 5–8% mỗi tháng. Khách đến 1 lần rồi quên — không
              có hệ thống remarketing. Quản lý 3 chi nhánh phải gom báo cáo bằng
              tay mỗi tuần, quyết định luôn chậm vì thiếu data real-time.
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
                  30 triệu
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">
                  Tiết kiệm + doanh thu tăng/năm
                </p>
                <p className="font-display font-extrabold text-2xl text-accent">
                  ~120 triệu
                </p>
                <p className="text-xs text-slate-400">
                  (giảm hao hụt + tăng repeat + tiết kiệm nhân sự báo cáo)
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Hoàn vốn sau</p>
                <p className="font-display font-extrabold text-2xl text-primary">
                  ~3 tháng
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-3">
            Nhà hàng bạn có vấn đề tương tự?
          </h2>
          <p className="text-slate-500 mb-6">
            Audit miễn phí 30 phút — mình phân tích vận hành và chỉ ra workflow
            nào tăng hiệu quả ngay.
          </p>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Audit miễn phí cho nhà hàng
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
