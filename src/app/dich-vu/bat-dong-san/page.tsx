"use client";

import { useState, useEffect } from "react";
import { fbpixelEvent } from "@/lib/fbpixel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const painPoints = [
  {
    stat: "40%",
    title: "Lead mất vì không reply kịp từ đa kênh",
    desc: "Lead đến từ Facebook, Zalo, Batdongsan.com.vn, hotline — mỗi kênh một giao diện. Sales phải nhảy qua nhảy lại, miss lead là chuyện hàng ngày.",
  },
  {
    stat: "100+ leads",
    title: "Follow-up bằng tay không xuể",
    desc: "Mỗi sales quản lý 100+ leads ở các giai đoạn khác nhau. Nhớ ai cần gọi lại, ai cần gửi thêm thông tin — tất cả bằng đầu và Excel.",
  },
  {
    stat: "2 giờ/ngày",
    title: "Matching BĐS với khách hàng thủ công",
    desc: "Khách cần căn 2PN quận 7, budget 3 tỷ. Sales phải lật danh sách 500 căn để tìm phù hợp. Mất thời gian, hay bỏ sót.",
  },
  {
    stat: "5 ngày",
    title: "Báo cáo pipeline sales cuối tháng",
    desc: "Quản lý cần biết: bao nhiêu lead mới, bao nhiêu đang xem nhà, bao nhiêu sắp chốt. Data nằm rải rác trong Zalo, Sheet, sổ tay.",
  },
];

const faqs = [
  {
    q: "AutoFlow tích hợp với CRM bất động sản nào?",
    a: "Hỗ trợ Google Sheets, Airtable, và các CRM phổ biến qua API. Nếu bạn đang dùng CRM riêng, mình sẽ đánh giá khả năng tích hợp trong buổi audit miễn phí.",
  },
  {
    q: "Có tự động phân lead cho từng sales không?",
    a: "Có. Workflow tự động phân loại lead theo khu vực, ngân sách, loại BĐS và gán cho sales phù hợp. Lead nóng được ưu tiên thông báo ngay qua Zalo.",
  },
  {
    q: "Khách hàng hay hỏi ngoài giờ, xử lý thế nào?",
    a: "AutoFlow setup chatbot Zalo OA trả lời tự động 24/7 — gửi thông tin dự án, bảng giá, lịch hẹn xem nhà. Lead được lưu lại và phân loại ngay, sáng hôm sau sales có danh sách sẵn.",
  },
  {
    q: "Tôi có nhiều dự án, mỗi dự án cần workflow riêng?",
    a: "Không nhất thiết. Workflow được thiết kế linh hoạt — 1 workflow có thể xử lý nhiều dự án, tự động phân loại theo dự án. Chỉ cần thêm dự án mới vào hệ thống.",
  },
  {
    q: "Bao lâu thì thấy ROI?",
    a: "Thông thường 3-5 tháng. Với BĐS, chỉ cần chốt thêm 1 deal nhờ không mất lead là đã hoàn vốn gấp nhiều lần.",
  },
];

const workflows = [
  {
    name: "Lead capture đa kênh → CRM",
    flow: "Lead từ Facebook/Zalo/Batdongsan.com.vn/Hotline → n8n tự động lưu vào Google Sheet/CRM → Phân loại theo nguồn, ngân sách, khu vực → Assign cho sales phù hợp",
    time: "0% lead bị miss, 100% được track",
    color: "#0068FF",
  },
  {
    name: "Follow-up Zalo sequence tự động",
    flow: "Lead mới → Zalo OA gửi thông tin dự án + bảng giá → Sau 2 ngày: gửi ảnh thực tế + video → Sau 5 ngày: mời xem nhà mẫu → Sau 14 ngày: offer ưu đãi",
    time: "Follow-up rate: 100% thay vì 60%",
    color: "#10B981",
  },
  {
    name: "Matching BĐS – khách hàng tự động",
    flow: "Khách đăng ký (khu vực, ngân sách, loại BĐS) → n8n so khớp với database căn hộ/đất → Gửi top 3–5 căn phù hợp qua Zalo → Khách quan tâm → tự tạo lịch xem nhà",
    time: "Thay thế 2 giờ matching thủ công/ngày",
    color: "#F59E0B",
  },
  {
    name: "Nhắc lịch xem nhà & follow-up sau xem",
    flow: "Lịch xem nhà trong Calendar → Zalo OA nhắc 24h trước → Sau xem nhà: gửi tin nhắn 'Anh/chị cảm thấy thế nào?' → Nếu không reply → nhắc lại sau 3 ngày",
    time: "Tỉ lệ no-show giảm 70%",
    color: "#6366F1",
  },
  {
    name: "Báo cáo pipeline tự động",
    flow: "Mỗi sáng thứ 2 → n8n kéo data từ CRM/Sheet → Tổng hợp: lead mới, đang nurture, xem nhà, đàm phán, chốt → Gửi dashboard qua Zalo/Email cho quản lý",
    time: "0 phút thay vì 5 ngày cuối tháng",
    color: "#EE4D2D",
  },
];

export default function BatDongSanPage() {
  useEffect(() => {
    fbpixelEvent('ViewContent', { content_name: 'Dịch vụ Bất động sản' });
  }, []);

  const [sales, setSales] = useState(5);
  const [hours, setHours] = useState(3);
  const [openFaq, setOpenFaq] = useState(-1);
  const salary = 12;
  const costPerYear = sales * salary * 12;
  const savedCost = Math.round(costPerYear * 0.5);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold mb-5">
              Dịch vụ cho Bất động sản
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Tự động hóa{" "}
              <span className="gradient-text">agency BĐS</span> — từ lead đến
              chốt deal
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl">
              AutoFlow giúp sàn giao dịch, agency BĐS tự động capture lead đa
              kênh, follow-up qua Zalo, matching BĐS với khách, và báo cáo
              pipeline — không miss lead, không quên follow-up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Nhận audit miễn phí cho agency
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
              Tích hợp với hệ sinh thái BĐS Việt Nam
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Zalo OA", color: "#0068FF" },
                { name: "Facebook", color: "#1877F2" },
                { name: "Google Sheet", color: "#0F9D58" },
                { name: "Google Calendar", color: "#4285F4" },
                { name: "MISA", color: "#E31937" },
                { name: "Batdongsan", color: "#D0021B" },
                { name: "Gmail", color: "#EA4335" },
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
              Agency bạn đang gặp vấn đề nào?
            </h2>
            <p className="text-slate-500">
              4 pain points phổ biến nhất của agency BĐS VN
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-emerald-200 hover:shadow-md transition-all"
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
                <span className="gradient-text">Bất động sản</span>
              </h2>
              <p className="text-slate-500">
                Mỗi workflow thay thế hàng giờ chạy lead thủ công mỗi ngày
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
              Tính ROI cho agency của bạn
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Nhập số liệu — xem bạn đang mất bao nhiêu cho việc chạy lead thủ công
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Số sales/admin quản lý lead
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={sales}
                  onChange={(e) => setSales(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1</span>
                  <span className="font-bold text-primary text-lg">
                    {sales} người
                  </span>
                  <span>20</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Giờ nhập lead + follow-up/ngày
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
                  triệu đ/năm chi phí sales admin
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
              Gói phù hợp cho Bất động sản
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Growth
              </h3>
              <p className="text-sm text-slate-500 mt-1 mb-4">
                Cho agency 5–15 sales
              </p>
              <p className="font-display font-extrabold text-3xl text-slate-900 mb-4">
                20–35
                <span className="text-sm font-normal text-slate-500 ml-1">
                  triệu đồng
                </span>
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "3–5 workflows (lead capture, follow-up, matching, nhắc lịch, báo cáo)",
                  "Training session 2h cho team sales",
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
              <p className="text-sm text-slate-500 mt-1 mb-4">
                Cho sàn giao dịch 15+ sales, nhiều dự án
              </p>
              <p className="font-display font-extrabold text-3xl text-slate-900 mb-4">
                50–80
                <span className="text-sm font-normal text-slate-500 ml-1">
                  triệu đồng
                </span>
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "8–12 workflows toàn bộ pipeline",
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
              Agency bạn đang miss bao nhiêu lead mỗi ngày?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — mình phân tích pipeline và chỉ ra workflow
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
