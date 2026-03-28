"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const painPoints = [
  {
    stat: "4.5 giờ/ngày",
    title: "Nhập đơn từ 3–5 sàn bằng tay",
    desc: "Shopee, Tiki, TikTok Shop, Lazada — mỗi sàn một giao diện. Nhân viên copy-paste từ sáng đến chiều, sai 1 số là mất tiền.",
  },
  {
    stat: "8–10 lỗi/tuần",
    title: "Sai tồn kho liên tục",
    desc: "Bán trên sàn A nhưng chưa update sàn B → oversell → phải hủy đơn → khách đánh giá xấu → mất uy tín.",
  },
  {
    stat: "67%",
    title: "Lead mất vì reply chậm",
    desc: "Khách inbox Zalo lúc 11 giờ đêm hỏi giá. Sáng hôm sau reply thì họ đã mua bên đối thủ.",
  },
  {
    stat: "3 ngày",
    title: "Báo cáo cuối tháng gom từ 5 nguồn",
    desc: "Dữ liệu nằm rải rác: Shopee Seller Center, MISA, Google Sheet, group Zalo. Tổng hợp bằng tay, sai số là chuyện thường.",
  },
];

const workflows = [
  {
    name: "Đồng bộ đơn hàng đa kênh",
    flow: "Đơn mới từ Shopee/Tiki/TikTok Shop → Tự động lưu vào Google Sheet → Đồng bộ sang MISA → Cập nhật tồn kho real-time",
    time: "Thay thế 3–4 giờ nhập tay/ngày",
    color: "#EE4D2D",
  },
  {
    name: "Auto-reply review & escalation",
    flow: "Review mới trên Shopee → AI phân tích sentiment → Review tốt: reply cảm ơn tự động → Review xấu: escalate cho manager qua Zalo",
    time: "Response time: 30 giây thay vì 12 giờ",
    color: "#F59E0B",
  },
  {
    name: "Lead capture → CRM → Zalo OA",
    flow: "Lead từ Facebook/Website → Lưu vào CRM → Zalo OA gửi tin chào hàng → Nhắc follow-up ngày 3, 7 nếu chưa reply",
    time: "0% lead bị miss, 100% được follow-up",
    color: "#0068FF",
  },
  {
    name: "Báo cáo tồn kho tự động",
    flow: "Mỗi sáng thứ 2 → n8n kéo data từ KiotViet + Shopee → Tổng hợp báo cáo → Gửi qua Zalo/Email cho quản lý",
    time: "0 phút thay vì 3 ngày gom data",
    color: "#10B981",
  },
  {
    name: "Upsell sequence tự động",
    flow: "Khách mua hàng → Sau 7 ngày: Zalo OA gửi tin khảo sát → Sau 14 ngày: gợi ý sản phẩm liên quan → Sau 30 ngày: voucher khách hàng thân thiết",
    time: "Tăng repeat purchase rate 15–25%",
    color: "#6366F1",
  },
];

export default function EcommercePage() {
  const [employees, setEmployees] = useState(3);
  const [hours, setHours] = useState(4);
  const salary = 11;
  const costPerYear = employees * salary * 12;
  const savedCost = Math.round(costPerYear * 0.65);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EE4D2D]/10 text-[#EE4D2D] text-xs font-semibold mb-5">
              Dịch vụ cho E-commerce
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Tự động hóa{" "}
              <span className="gradient-text">shop online</span> — từ đơn hàng
              đến chăm khách
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl">
              AutoFlow giúp shop Shopee, Tiki, TikTok Shop tự động đồng bộ đơn
              hàng, quản lý tồn kho, reply review, và follow-up khách — giảm
              65% thời gian vận hành, 0 lỗi nhập tay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Nhận audit miễn phí cho shop
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
              Tích hợp trực tiếp với hệ sinh thái e-commerce Việt Nam
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Shopee", color: "#EE4D2D" },
                { name: "Tiki", color: "#1A94FF" },
                { name: "TikTok Shop", color: "#111" },
                { name: "Lazada", color: "#0F146D" },
                { name: "MISA", color: "#E31937" },
                { name: "KiotViet", color: "#00A651" },
                { name: "Zalo OA", color: "#0068FF" },
                { name: "Haravan", color: "#2962FF" },
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
              Bạn đang gặp vấn đề nào?
            </h2>
            <p className="text-slate-500">
              Đây là 4 pain points phổ biến nhất của shop e-commerce VN
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-red-200 hover:shadow-md transition-all"
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
                <span className="gradient-text">E-commerce</span>
              </h2>
              <p className="text-slate-500">
                Mỗi workflow thay thế hàng giờ làm việc thủ công mỗi ngày
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

        {/* ROI for E-commerce */}
        <section className="py-20 max-w-3xl mx-auto px-6">
          <div className="bg-primary-light/50 rounded-2xl border border-primary/10 p-8">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-1">
              Tính ROI cho shop của bạn
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Nhập số liệu thực tế — xem bạn đang mất bao nhiêu cho việc nhập
              tay
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Nhân viên nhập đơn/quản lý sàn
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>1</span>
                  <span className="font-bold text-primary text-lg">
                    {employees} người
                  </span>
                  <span>10</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Giờ nhập tay/ngày mỗi người
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
                  triệu đ/năm chi phí lương
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

        {/* Pricing for E-commerce */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              Gói phù hợp cho E-commerce
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Growth
              </h3>
              <p className="text-sm text-slate-400 mt-1 mb-4">
                Cho shop 5–20 nhân viên
              </p>
              <p className="font-display font-extrabold text-3xl text-slate-900 mb-4">
                20–35
                <span className="text-sm font-normal text-slate-400 ml-1">
                  triệu đồng
                </span>
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "3–5 workflows (đơn hàng, tồn kho, review, lead, báo cáo)",
                  "Training session 2h cho team",
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
                Cho shop 20–50 nhân viên, nhiều kênh
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
              Shop bạn đang mất bao nhiêu giờ cho việc nhập tay?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — mình chỉ ra cụ thể workflow nào nên tự
              động hóa trước.
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
