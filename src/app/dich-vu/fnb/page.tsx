"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const painPoints = [
  {
    stat: "3 giờ/ngày",
    title: "Nhập đơn từ GrabFood, ShopeeFood bằng tay",
    desc: "Mỗi app delivery một giao diện. Nhân viên phải đối chiếu đơn từ 3–4 nền tảng với POS/sổ sách. Giờ cao điểm sai đơn là mất khách.",
  },
  {
    stat: "30%",
    title: "Khách không quay lại vì không chăm sóc",
    desc: "Khách ăn xong, đi luôn. Không ai follow-up, không ai gửi ưu đãi quay lại. Mỗi khách mất = mất 5–10 bữa ăn tiềm năng.",
  },
  {
    stat: "45 phút",
    title: "Kiểm kê tồn kho nguyên liệu mỗi ngày",
    desc: "Đếm tay, ghi sổ, so với đơn bán ra. Sai lệch → mua thừa nguyên liệu → hao hụt → ảnh hưởng lợi nhuận.",
  },
  {
    stat: "2 ngày",
    title: "Báo cáo doanh thu đa chi nhánh",
    desc: "3 chi nhánh, mỗi nơi báo khác nhau. Cuối tuần quản lý mất 2 ngày tổng hợp doanh thu, chi phí, food cost. Quyết định chậm vì thiếu data.",
  },
];

const workflows = [
  {
    name: "Đồng bộ đơn delivery → POS/Sheet",
    flow: "Đơn mới từ GrabFood/ShopeeFood/Baemin → n8n tự động lưu vào Google Sheet/POS → Đối chiếu doanh thu → Cập nhật tồn kho nguyên liệu",
    time: "Thay thế 3 giờ nhập đơn/ngày",
    color: "#00B14F",
  },
  {
    name: "Chăm sóc khách quay lại qua Zalo",
    flow: "Khách check-in/đặt bàn → Lưu SĐT → Sau 7 ngày: Zalo OA gửi 'Cảm ơn, giảm 10% lần tới' → Sau 30 ngày: 'Lâu rồi chưa ghé, tặng món khai vị'",
    time: "Tăng repeat rate 20–35%",
    color: "#EE4D2D",
  },
  {
    name: "Nhắc ca làm & quản lý nhân sự",
    flow: "Lịch ca trong Google Sheet → Zalo nhắc nhân viên 12h trước ca → Nhân viên xác nhận/đổi ca → Quản lý nhận thông báo nếu ca trống",
    time: "0 cuộc gọi nhắc ca, 100% xác nhận",
    color: "#F59E0B",
  },
  {
    name: "Cảnh báo tồn kho nguyên liệu",
    flow: "Tồn kho dưới mức tối thiểu → n8n gửi alert cho bếp trưởng/quản lý qua Zalo → Tự tạo đơn đặt hàng nhà cung cấp → Theo dõi giao hàng",
    time: "Hết hết nguyên liệu giữa ca bận",
    color: "#6366F1",
  },
  {
    name: "Báo cáo doanh thu tự động đa chi nhánh",
    flow: "Mỗi tối 10 giờ → n8n kéo data từ POS/delivery apps → Tổng hợp: doanh thu, số đơn, food cost, top món bán chạy → Gửi qua Zalo cho owner",
    time: "Báo cáo hàng ngày thay vì hàng tuần",
    color: "#0068FF",
  },
];

export default function FnBPage() {
  const [staff, setStaff] = useState(3);
  const [hours, setHours] = useState(3);
  const salary = 9;
  const costPerYear = staff * salary * 12;
  const savedCost = Math.round(costPerYear * 0.55);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold mb-5">
              Dịch vụ cho F&B / Nhà hàng
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Tự động hóa{" "}
              <span className="gradient-text">nhà hàng & quán cafe</span> — từ
              đơn hàng đến chăm khách
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl">
              AutoFlow giúp chuỗi F&B tự động đồng bộ đơn delivery, chăm sóc
              khách quay lại, quản lý ca làm, cảnh báo tồn kho, và báo cáo
              doanh thu đa chi nhánh — giảm 55% thời gian vận hành.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Nhận audit miễn phí cho nhà hàng
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 8h6M8 5l3 3-3 3" />
                </svg>
              </a>
              <a
                href="/bang-gia"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200"
              >
                Xem bảng giá
              </a>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-10 border-y border-slate-100 bg-slate-50/50 mb-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-sm font-medium text-slate-400 mb-6">
              Tích hợp với hệ sinh thái F&B Việt Nam
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "GrabFood", color: "#00B14F" },
                { name: "ShopeeFood", color: "#EE4D2D" },
                { name: "Zalo OA", color: "#0068FF" },
                { name: "Google Sheet", color: "#0F9D58" },
                { name: "KiotViet", color: "#00A651" },
                { name: "MISA", color: "#E31937" },
                { name: "Facebook", color: "#1877F2" },
                { name: "Telegram", color: "#26A5E4" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-2 group">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              Nhà hàng bạn đang gặp vấn đề nào?
            </h2>
            <p className="text-slate-500">
              4 pain points phổ biến nhất của chuỗi F&B VN
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-orange-200 hover:shadow-md transition-all"
              >
                <span className="font-display font-extrabold text-2xl text-red-500">
                  {pain.stat}
                </span>
                <h3 className="font-display font-bold text-slate-900 mt-2 mb-2">
                  {pain.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pain.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflows */}
        <section className="py-20 bg-slate-50 relative noise-bg">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
                5 workflows AutoFlow build cho{" "}
                <span className="gradient-text">F&B</span>
              </h2>
              <p className="text-slate-500">
                Mỗi workflow giải quyết 1 pain point vận hành hàng ngày
              </p>
            </div>

            <div className="space-y-4">
              {workflows.map((wf, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ backgroundColor: wf.color }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-slate-900 mb-1">
                        {wf.name}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-3">
                        {wf.flow}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/5 px-3 py-1 rounded-full">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                        {wf.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 max-w-3xl mx-auto px-6">
          <div className="bg-primary-light/50 rounded-2xl border border-primary/10 p-8">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-1">
              Tính ROI cho nhà hàng của bạn
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Nhập số liệu — xem bạn đang mất bao nhiêu cho việc vận hành thủ công
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Nhân viên admin/kế toán/quản lý
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={staff}
                  onChange={(e) => setStaff(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>1</span>
                  <span className="font-bold text-primary text-lg">
                    {staff} người
                  </span>
                  <span>10</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Giờ nhập đơn + báo cáo/ngày
                </label>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>1</span>
                  <span className="font-bold text-primary text-lg">
                    {hours} giờ
                  </span>
                  <span>8</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5 bg-white rounded-xl border border-slate-200">
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-red-500">
                  {costPerYear}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  triệu đ/năm chi phí vận hành
                </p>
              </div>
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-accent">
                  {savedCost}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  triệu đ/năm tiết kiệm được
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              Gói phù hợp cho F&B
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Growth
              </h3>
              <p className="text-sm text-slate-400 mt-1 mb-4">
                Cho nhà hàng 1–3 chi nhánh
              </p>
              <p className="font-display font-extrabold text-3xl text-slate-900 mb-4">
                20–35
                <span className="text-sm font-normal text-slate-400 ml-1">
                  triệu đồng
                </span>
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "3–5 workflows (đơn delivery, chăm khách, ca làm, tồn kho, báo cáo)",
                  "Training session 2h cho quản lý",
                  "Support 14 ngày",
                  "Timeline: 3–4 tuần",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-accent mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/audit"
                className="block text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all"
              >
                Audit miễn phí
              </a>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Scale
              </h3>
              <p className="text-sm text-slate-400 mt-1 mb-4">
                Cho chuỗi 4+ chi nhánh
              </p>
              <p className="font-display font-extrabold text-3xl text-slate-900 mb-4">
                50–80
                <span className="text-sm font-normal text-slate-400 ml-1">
                  triệu đồng
                </span>
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "8–12 workflows toàn bộ vận hành",
                  "n8n self-hosted (data trong nước)",
                  "Training 2 buổi + 30-day warranty",
                  "Timeline: 6–8 tuần",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-accent mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/audit"
                className="block text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-all"
              >
                Audit miễn phí
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              Nhà hàng bạn đang mất bao nhiêu khách vì không chăm sóc?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — mình phân tích vận hành và chỉ ra workflow
              nào tăng khách quay lại ngay.
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
