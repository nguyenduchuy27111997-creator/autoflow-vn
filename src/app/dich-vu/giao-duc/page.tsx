"use client";

import { useState, useEffect } from "react";
import { fbpixelEvent } from "@/lib/fbpixel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const painPoints = [
  {
    stat: "3 giờ/ngày",
    title: "Gọi điện nhắc lịch học viên bằng tay",
    desc: "Mỗi buổi học, nhân viên phải gọi/nhắn từng học viên. 100 học viên = 3 giờ. Miss 1 cuộc = học viên vắng, trung tâm mất tiền.",
  },
  {
    stat: "15%",
    title: "Học viên miss lịch mỗi tháng",
    desc: "Không nhắc đúng lúc → quên lịch → vắng → giảm chất lượng → không gia hạn. Mỗi học viên miss = mất 3–5 triệu doanh thu.",
  },
  {
    stat: "67%",
    title: "Lead mất vì follow-up chậm",
    desc: "Phụ huynh hỏi học phí lúc 10 giờ đêm. Sáng hôm sau reply thì họ đã đăng ký trung tâm khác. Không ai follow-up được 24/7.",
  },
  {
    stat: "3 ngày",
    title: "Gom báo cáo từ nhiều chi nhánh",
    desc: "8 chi nhánh, mỗi nơi báo cáo khác nhau: Google Sheet, Zalo group, email. Cuối tháng mất 3 ngày tổng hợp, sai số là chuyện thường.",
  },
];

const faqs = [
  {
    q: "Loại hình giáo dục nào phù hợp?",
    a: "Trung tâm ngoại ngữ, trung tâm tin học, luyện thi, kỹ năng mềm, mầm non tư thục — bất kỳ cơ sở nào có học viên cần quản lý đều phù hợp.",
  },
  {
    q: "Có tích hợp với phần mềm quản lý giáo dục không?",
    a: "Hỗ trợ Google Sheets, Airtable, và kết nối qua API với hầu hết phần mềm quản lý. Trong audit mình sẽ đánh giá cụ thể phần mềm bạn đang dùng.",
  },
  {
    q: "Tự động nhắc học phí thế nào?",
    a: "Workflow tự động gửi tin nhắn Zalo OA nhắc trước 3-5-7 ngày. Nếu quá hạn, tự escalate cho nhân viên thu phí. Phụ huynh nhận thông báo chuyên nghiệp, không cần gọi điện từng người.",
  },
  {
    q: "Tôi có 5 cơ sở, cần setup riêng cho từng cơ sở?",
    a: "Không. 1 hệ thống quản lý tập trung cho tất cả cơ sở. Dữ liệu tách biệt theo cơ sở nhưng báo cáo tổng hợp được. Thêm cơ sở mới chỉ cần cấu hình, không cần build lại.",
  },
  {
    q: "Bảo mật thông tin học viên thế nào?",
    a: "Data chạy trên VPS riêng tại Việt Nam, không chia sẻ bên thứ ba. Phù hợp quy định bảo vệ dữ liệu cá nhân. Chỉ những người được phân quyền mới truy cập được.",
  },
];

const workflows = [
  {
    name: "Nhắc lịch học tự động qua Zalo OA",
    flow: "Lịch học trong Google Calendar/CRM → n8n kiểm tra 24h trước → Zalo OA gửi tin nhắc cho học viên/phụ huynh → Nếu không xác nhận → nhắc lại lần 2 vào sáng hôm sau",
    time: "Miss lịch giảm từ 15% xuống 3%",
    color: "#0068FF",
  },
  {
    name: "Lead nurturing tự động",
    flow: "Lead mới từ Facebook/Website → Lưu vào CRM → Zalo OA gửi thông tin khóa học + học phí → Sau 3 ngày: gửi testimonial → Sau 7 ngày: offer ưu đãi đăng ký sớm",
    time: "0% lead bị miss, 100% được follow-up",
    color: "#10B981",
  },
  {
    name: "Điểm danh & thông báo phụ huynh",
    flow: "Giáo viên check-in trên Google Form → n8n ghi nhận điểm danh → Zalo OA gửi thông báo cho phụ huynh: 'Con bạn đã đến lớp' → Cuối buổi: gửi feedback ngắn",
    time: "Phụ huynh yên tâm, trung tâm chuyên nghiệp",
    color: "#F59E0B",
  },
  {
    name: "Báo cáo đa chi nhánh tự động",
    flow: "Mỗi sáng thứ 2 → n8n kéo data từ tất cả chi nhánh (Google Sheet/CRM) → Tổng hợp: học viên mới, gia hạn, vắng, doanh thu → Gửi báo cáo qua Zalo/Email cho quản lý",
    time: "0 phút thay vì 3 ngày gom data",
    color: "#6366F1",
  },
  {
    name: "Upsell khóa mới & gia hạn",
    flow: "Học viên sắp hết khóa (2 tuần trước) → Zalo OA gửi tin nhắn: 'Khóa học sắp kết thúc, đăng ký khóa tiếp theo giảm 10%' → Nếu không phản hồi → nhắc lại + offer mạnh hơn",
    time: "Tăng tỉ lệ gia hạn 20–30%",
    color: "#EE4D2D",
  },
];

export default function GiaoDucPage() {
  useEffect(() => {
    fbpixelEvent('ViewContent', { content_name: 'Dịch vụ Giáo dục' });
  }, []);

  const [employees, setEmployees] = useState(2);
  const [hours, setHours] = useState(3);
  const [openFaq, setOpenFaq] = useState(-1);
  const salary = 10;
  const costPerYear = employees * salary * 12;
  const savedCost = Math.round(costPerYear * 0.6);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-5">
              Dịch vụ cho Giáo dục & Đào tạo
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Tự động hóa{" "}
              <span className="gradient-text">trung tâm đào tạo</span> — từ nhắc
              lịch đến chăm học viên
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl">
              AutoFlow giúp trung tâm đào tạo, chuỗi trường học tự động nhắc
              lịch qua Zalo, nurture lead, điểm danh, báo cáo đa chi nhánh —
              giảm 60% thời gian admin, miss lịch giảm từ 15% xuống 3%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Nhận audit miễn phí cho trung tâm
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
              Tích hợp với hệ sinh thái giáo dục & quản lý
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Zalo OA", color: "#0068FF" },
                { name: "Google Calendar", color: "#4285F4" },
                { name: "Google Sheet", color: "#0F9D58" },
                { name: "Notion", color: "#111" },
                { name: "MISA", color: "#E31937" },
                { name: "Facebook", color: "#1877F2" },
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
              Trung tâm bạn đang gặp vấn đề nào?
            </h2>
            <p className="text-slate-500">
              4 pain points phổ biến nhất của trung tâm đào tạo VN
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-indigo-200 hover:shadow-md transition-all"
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
                <span className="gradient-text">Giáo dục</span>
              </h2>
              <p className="text-slate-500">
                Mỗi workflow thay thế hàng giờ làm việc admin mỗi ngày
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
              Tính ROI cho trung tâm của bạn
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Nhập số liệu — xem bạn đang mất bao nhiêu cho việc nhắc lịch, báo cáo thủ công
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Nhân viên admin/CSKH
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
                  Giờ nhắc lịch + báo cáo/ngày
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
                  triệu đ/năm chi phí lương admin
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
              Gói phù hợp cho Giáo dục
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Growth
              </h3>
              <p className="text-sm text-slate-400 mt-1 mb-4">
                Cho trung tâm 1–3 chi nhánh
              </p>
              <p className="font-display font-extrabold text-3xl text-slate-900 mb-4">
                20–35
                <span className="text-sm font-normal text-slate-400 ml-1">
                  triệu đồng
                </span>
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "3–5 workflows (nhắc lịch, lead, điểm danh, báo cáo, upsell)",
                  "Training session 2h cho team admin",
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
                  <svg className={`shrink-0 w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
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
              Trung tâm bạn đang mất bao nhiêu học viên vì quên lịch?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — mình phân tích quy trình và chỉ ra
              workflow nào giảm miss lịch ngay lập tức.
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
