"use client";

import { useState, useEffect } from "react";
import { fbpixelEvent } from "@/lib/fbpixel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

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

const faqs = [
  {
    q: "Nhà hàng tôi nhỏ, có cần tự động hóa không?",
    a: "Nếu bạn đang mất 2+ giờ/ngày cho nhập liệu, quản lý đơn online, hoặc báo cáo — thì có. AutoFlow Starter chỉ từ 8 triệu, rẻ hơn nửa tháng lương nhân viên.",
  },
  {
    q: "Tích hợp với POS nào?",
    a: "Hỗ trợ KiotViet, iPOS, CukCuk, Sapo POS và các POS có API. AutoFlow tương thích với hầu hết hệ thống POS phổ biến tại Việt Nam. Ngoài ra tích hợp với GrabFood, ShopeeFood, Zalo OA cho đơn online.",
  },
  {
    q: "Có quản lý được nguyên vật liệu không?",
    a: "Có. Workflow tự động trừ tồn kho nguyên vật liệu theo đơn bán, thông báo khi gần hết, và tạo đề xuất nhập hàng tự động.",
  },
  {
    q: "Tôi có 3 chi nhánh, quản lý chung được không?",
    a: "Được. AutoFlow tổng hợp dữ liệu từ tất cả chi nhánh vào 1 dashboard. Báo cáo doanh thu, tồn kho, chi phí theo từng chi nhánh hoặc tổng.",
  },
  {
    q: "Nếu internet quán bị mất thì sao?",
    a: "Workflow chạy trên cloud server riêng, không phụ thuộc internet quán. Khi internet quán khôi phục, dữ liệu tự đồng bộ lại. Đơn offline vẫn được xử lý khi kết nối lại.",
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
  useEffect(() => {
    fbpixelEvent('ViewContent', { content_name: 'Dịch vụ F&B' });
  }, []);

  const [staff, setStaff] = useState(3);
  const [hours, setHours] = useState(3);
  const [openFaq, setOpenFaq] = useState(-1);
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
            <p className="text-center text-sm font-medium text-slate-500 mb-6">
              Tích hợp với hệ sinh thái F&amp;B Việt Nam — hỗ trợ nhiều hệ thống POS phổ biến
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "GrabFood", icon: "\ud83d\udeb5" },
                { name: "ShopeeFood", icon: "\ud83d\uded2" },
                { name: "Zalo OA", icon: "\ud83d\udcac" },
                { name: "Google Sheets", icon: "\ud83d\udcd7" },
                { name: "KiotViet", icon: "\ud83c\udfea" },
                { name: "iPOS", icon: "\ud83d\udcf1" },
                { name: "CukCuk", icon: "\ud83c\udf7d\ufe0f" },
                { name: "Sapo POS", icon: "\ud83d\udce6" },
                { name: "MISA", icon: "\ud83d\udcca" },
                { name: "Facebook", icon: "\ud83d\udce3" },
                { name: "Telegram", icon: "\u2708\ufe0f" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg bg-slate-100">
                    {item.icon}
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
                <div className="flex justify-between text-xs text-slate-500 mt-1">
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
                <div className="flex justify-between text-xs text-slate-500 mt-1">
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
                <p className="text-xs text-slate-500 mt-1">
                  triệu đ/năm chi phí vận hành
                </p>
              </div>
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-accent">
                  {savedCost}
                </p>
                <p className="text-xs text-slate-500 mt-1">
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
              Gói phù hợp cho F&amp;B
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {/* Pilot */}
            <div className="bg-white rounded-2xl border-2 border-primary p-7 relative">
              <div className="absolute -top-3 left-4 bg-primary text-white text-[11px] font-bold px-3 py-0.5 rounded-full">
                Rào cản thấp nhất
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mt-1">Pilot</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">Thử trước, không rủi ro</p>
              <p className="font-display font-extrabold text-2xl text-slate-900 mb-3">
                5–8<span className="text-sm font-normal text-slate-500 ml-1">triệu</span>
              </p>
              <ul className="space-y-1.5 mb-5">
                {["1 workflow trọn vẹn", "Timeline: 1 tuần", "Thấy kết quả ngay"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-accent mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="/audit" className="block text-center bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 rounded-xl transition-all text-sm">
                Bắt đầu Pilot
              </a>
            </div>
            {/* Starter */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <h3 className="font-display font-bold text-lg text-slate-900">Starter</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">Cho quán đơn lẻ</p>
              <p className="font-display font-extrabold text-2xl text-slate-900 mb-3">
                8–15<span className="text-sm font-normal text-slate-500 ml-1">triệu</span>
              </p>
              <ul className="space-y-1.5 mb-5">
                {["1 workflow + mở rộng", "Timeline: 1–2 tuần", "Support 7 ngày"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-accent mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="/audit" className="block text-center bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 rounded-xl transition-all text-sm">
                Audit miễn phí
              </a>
            </div>
            {/* Growth */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <h3 className="font-display font-bold text-lg text-slate-900">Growth</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">Cho nhà hàng 1–3 chi nhánh</p>
              <p className="font-display font-extrabold text-2xl text-slate-900 mb-3">
                20–35<span className="text-sm font-normal text-slate-500 ml-1">triệu</span>
              </p>
              <ul className="space-y-1.5 mb-5">
                {["3–5 workflows", "Training 2h cho quản lý", "Support 14 ngày", "Timeline: 3–4 tuần"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-accent mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="/audit" className="block text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl transition-all text-sm">
                Audit miễn phí
              </a>
            </div>
            {/* Scale */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <h3 className="font-display font-bold text-lg text-slate-900">Scale</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">Cho chuỗi 4+ chi nhánh</p>
              <p className="font-display font-extrabold text-2xl text-slate-900 mb-3">
                50–80<span className="text-sm font-normal text-slate-500 ml-1">triệu</span>
              </p>
              <ul className="space-y-1.5 mb-5">
                {["8–12 workflows toàn bộ", "n8n self-hosted", "Training 2 buổi + 30-day warranty", "Timeline: 6–8 tuần"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-accent mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="/audit" className="block text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl transition-all text-sm">
                Audit miễn phí
              </a>
            </div>
          </div>
          {/* Compliance callout */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Hỗ trợ hóa đơn điện tử theo quy định
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Data lưu trữ tại Việt Nam, tuân thủ quy định bảo mật dữ liệu
            </span>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 text-center mb-10">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-sm text-slate-900">{faq.q}</span>
                  <svg className={`shrink-0 w-5 h-5 text-slate-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }} />

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
