"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Animated workflow diagram component ────────────────────── */
function WorkflowDiagram({
  steps,
  accentColor,
}: {
  steps: { icon: React.ReactNode; label: string; sub: string }[];
  accentColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative py-4">
      <div className="hidden md:flex items-start justify-between gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start flex-1">
            <div
              className="flex flex-col items-center text-center flex-shrink-0"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease-out ${i * 150}ms`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg mb-3"
                style={{ background: accentColor }}
              >
                {step.icon}
              </div>
              <p className="text-sm font-semibold text-slate-800 mb-0.5 max-w-[120px]">{step.label}</p>
              <p className="text-xs text-slate-500 max-w-[130px]">{step.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 flex items-center pt-7 px-1">
                <div
                  className="h-0.5 flex-1 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${accentColor}40, ${accentColor}20)`,
                    transform: visible ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: `transform 0.6s ease-out ${i * 150 + 200}ms`,
                  }}
                />
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  style={{ opacity: visible ? 1 : 0, transition: `opacity 0.3s ease-out ${i * 150 + 600}ms` }}
                >
                  <path d="M2 6h8M7 3l3 3-3 3" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="md:hidden space-y-4">
        {steps.map((step, i) => (
          <div key={i}>
            <div
              className="flex items-center gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.5s ease-out ${i * 120}ms`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0"
                style={{ background: accentColor }}
              >
                {step.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{step.label}</p>
                <p className="text-xs text-slate-500">{step.sub}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-6 h-6 flex items-center">
                <div
                  className="w-0.5 h-full rounded-full"
                  style={{
                    background: `${accentColor}30`,
                    transform: visible ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                    transition: `transform 0.4s ease-out ${i * 120 + 200}ms`,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Animated metric ────────────────────────────────────────── */
function AnimatedMetric({ value, suffix, label, sub, color }: { value: string; suffix?: string; label: string; sub: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.6s ease-out",
      }}
    >
      <div className="font-display font-extrabold text-3xl md:text-4xl" style={{ color }}>
        {value}
        {suffix && <span className="text-base font-medium text-slate-500 ml-1">{suffix}</span>}
      </div>
      <div className="text-sm font-semibold text-slate-700 mt-1">{label}</div>
      <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
    </div>
  );
}

/* ── Main page ──────────────────────────────────────────────── */
export default function RealEstateUseCasePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="max-w-3xl">
            <a
              href="/tai-lieu"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark font-medium mb-4"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Tài liệu & Công cụ
            </a>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Bất động sản
              </span>
              <span className="text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">Case Study</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Agency BĐS 20 sales, 500+ lead/tháng —{" "}
              <span className="gradient-text">phản hồi lead trong 30 giây</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Từ việc chỉ follow-up được 30% lead và reply chậm 5-24 giờ, agency đã tự động hóa toàn bộ
              quy trình phân lead, chào hàng, nhắc follow-up, báo cáo conversion, và nurture tự động —
              tăng tỷ lệ chốt deal 15%.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                4 tuần triển khai
              </span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>Gói Scale — 72 triệu đồng</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>6 workflows n8n</span>
            </div>
          </div>
        </section>

        {/* ── Key Metrics ───────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedMetric value="30" suffix="giây" label="phản hồi đầu tiên" sub="từ 5-24 giờ → 30s" color="#8B5CF6" />
            <AnimatedMetric value="75%" label="lead được follow-up" sub="từ 30% lên 75%" color="#8B5CF6" />
            <AnimatedMetric value="+15%" label="tỷ lệ chốt deal" sub="nhờ nurture tự động" color="#8B5CF6" />
            <AnimatedMetric value="6" suffix="workflow" label="chạy 24/7" sub="không cần can thiệp" color="#8B5CF6" />
          </div>
        </section>

        {/* ── Bối cảnh ──────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-6">
            Bối cảnh doanh nghiệp
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              Agency bất động sản tại TP.HCM với 20 nhân viên sales, chuyên phân phối các dự án căn hộ
              và đất nền khu vực phía Nam. Mỗi tháng team nhận hơn <strong>500 lead</strong> từ Facebook Ads,
              nhưng quy trình xử lý lead hoàn toàn thủ công.
            </p>
            <p>
              Khi khách điền form trên Facebook, dữ liệu được export bằng tay vào Google Sheet mỗi vài giờ.
              Sau đó quản lý mới phân lead cho sales dựa trên khu vực. Từ lúc khách submit form đến lúc sales
              gọi lại trung bình là <strong>5-24 giờ</strong> — quá chậm cho thị trường BĐS cạnh tranh khốc liệt.
            </p>
            <p>
              Nghiên cứu cho thấy <strong>67% lead BĐS mất nếu không phản hồi trong 1 giờ đầu</strong>.
              Với 500+ lead/tháng, agency đang lãng phí hàng trăm triệu đồng chi phí quảng cáo
              vì không thể xử lý lead đủ nhanh.
            </p>
            <p>
              Data khách nằm rải rác trong Zalo cá nhân, Messenger, Google Sheet — không ai biết lead nào
              đang ở giai đoạn nào, sales nào đang chăm lead nào. Quản lý không có cách nào đo conversion rate
              từng sales để coaching hiệu quả.
            </p>
          </div>
        </section>

        {/* ── Pain Points ──────────────────────────────── */}
        <section className="py-16 bg-red-50/50 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                <svg width="16" height="16" fill="none" stroke="#EF4444" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
              </span>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                6 điểm đau chính
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { pain: "67% lead mất vì reply chậm", detail: "Thời gian phản hồi 5-24 giờ. Nghiên cứu: lead BĐS mua từ người reply đầu tiên trong 78% trường hợp." },
                { pain: "Chỉ 30% lead được follow-up", detail: "Sales quản lý lead bằng Zalo cá nhân, Excel riêng. 70% lead 'rơi' vì không có hệ thống nhắc nhở." },
                { pain: "Phân lead thủ công, chậm 2-4 giờ", detail: "Quản lý export lead từ Facebook, phân theo khu vực bằng tay. Giờ cao điểm (tối, cuối tuần) không ai phân." },
                { pain: "Data khách rải rác, không tracking", detail: "Lead nằm trong Zalo cá nhân 20 sales — khi sales nghỉ, data khách mất theo. Không ai biết pipeline tổng." },
                { pain: "Không có nurture sequence", detail: "Lead chưa mua bị bỏ quên hoàn toàn. Không có quy trình gửi brochure, bảng giá, video tour tự động." },
                { pain: "Không đo được conversion rate", detail: "Quản lý không biết sales nào giỏi, ai cần coaching. Báo cáo conversion hoàn toàn bằng ước lượng." },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-xl border border-red-100 p-5">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-red-600 mb-1">{p.pain}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{p.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Giải pháp: 6 Workflows ───────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Giải pháp AutoFlow
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              6 Workflows tự động hóa
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Từ capture lead 30 giây đến nurture tự động 14 ngày — pipeline BĐS hoạt động 24/7.
            </p>
          </div>

          {/* Workflow 1 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-display font-extrabold text-lg">1</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Lead capture tự động</h3>
                <p className="text-sm text-slate-500">Facebook Lead Ads → Google Sheet CRM + timestamp</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#8B5CF6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>, label: "Lead submit form", sub: "Facebook Lead Ads" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: "n8n webhook", sub: "Instant — < 5 giây" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>, label: "Lưu CRM", sub: "Google Sheet + nguồn + UTM" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Dedupe check", sub: "Loại lead trùng SĐT" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">⚡ Từ submit → CRM &lt; 10 giây</span>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">🏷️ Track UTM source, campaign</span>
              </div>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-display font-extrabold text-lg">2</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Phân lead tự động theo khu vực</h3>
                <p className="text-sm text-slate-500">Lead mới → phân theo quận/huyện → đúng sales phụ trách</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#8B5CF6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: "Đọc khu vực lead", sub: "Quận, huyện quan tâm" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>, label: "Map rule phân lead", sub: "Round-robin trong vùng" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, label: "Assign cho sales", sub: "Update CRM + tag" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>, label: "Alert Telegram", sub: "Sales nhận thông báo ngay" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">🎯 Phân lead 24/7 kể cả ngoài giờ</span>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">⚖️ Round-robin đều giữa sales</span>
              </div>
            </div>
          </div>

          {/* Workflow 3 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-display font-extrabold text-lg">3</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Chào hàng tự động 30 giây</h3>
                <p className="text-sm text-slate-500">Lead mới → Zalo OA gửi tin chào + thông tin dự án</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#8B5CF6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>, label: "Lead mới vào CRM", sub: "Trigger tự động" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, label: "Chọn dự án phù hợp", sub: "Theo khu vực + ngân sách" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, label: "Gửi Zalo OA", sub: "Tin chào + tên sales phụ trách" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Khách nhận trong 30s", sub: "Ấn tượng chuyên nghiệp" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">⏱️ 30 giây — nhanh nhất thị trường</span>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">🏠 Cá nhân hóa theo dự án quan tâm</span>
              </div>
            </div>
          </div>

          {/* Workflow 4 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-display font-extrabold text-lg">4</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Nhắc sales follow-up</h3>
                <p className="text-sm text-slate-500">Nếu sales chưa liên hệ sau 2h → nhắc → escalation</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#8B5CF6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Check mỗi 2 giờ", sub: "Lead chưa được gọi?" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>, label: "Nhắc sales", sub: "Telegram: 'Lead X chưa gọi!'" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>, label: "Escalation 4h", sub: "Báo quản lý nếu vẫn chưa gọi" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>, label: "Re-assign 8h", sub: "Chuyển lead cho sales khác" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">🔔 3 cấp escalation tự động</span>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">🚫 Không lead nào bị bỏ quên</span>
              </div>
            </div>
          </div>

          {/* Workflow 5 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-display font-extrabold text-lg">5</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Báo cáo conversion rate từng sales</h3>
                <p className="text-sm text-slate-500">CRM data → phân tích → ranking → Telegram mỗi tuần</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#8B5CF6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Sáng thứ 2 hàng tuần", sub: "Cron schedule" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>, label: "Đọc CRM data", sub: "Lead, gọi, hẹn, chốt" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 7h6m0 10v-3m-3 3v-6m-3 6v-1m6-9a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2" /></svg>, label: "Tính conversion rate", sub: "Từng sales, từng giai đoạn" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>, label: "Gửi ranking report", sub: "Telegram quản lý + team" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">🏆 Ranking top sales tuần</span>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">📊 Funnel: Lead → Gọi → Hẹn → Chốt</span>
              </div>
            </div>
          </div>

          {/* Workflow 6 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-display font-extrabold text-lg">6</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Lead nurture tự động 14 ngày</h3>
                <p className="text-sm text-slate-500">Lead chưa mua → brochure → bảng giá → video tour → nhắc hẹn</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#8B5CF6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Ngày 3", sub: "Gửi brochure dự án" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, label: "Ngày 7", sub: "Gửi bảng giá chi tiết" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>, label: "Ngày 10", sub: "Video tour 360° dự án" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: "Ngày 14", sub: "Mời đặt lịch tham quan" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">🔄 Sequence tự động 4 bước</span>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">⏸️ Dừng tự động nếu đã chốt</span>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">📹 Video tour tạo ấn tượng mạnh</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ──────────────────────────────────── */}
        <section className="py-16 bg-slate-50 relative noise-bg">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-10 text-center">
              Timeline triển khai — 4 tuần
            </h2>
            <div className="space-y-6">
              {[
                { week: "Tuần 1", title: "Audit & Planning", items: ["Discovery call 2 giờ — hiểu flow lead từ Facebook đến chốt deal", "Mapping quy trình phân lead, follow-up hiện tại", "Setup Facebook Lead Ads webhook + Google Sheet CRM", "Proposal chi tiết với 6 workflows + ROI ước tính"] },
                { week: "Tuần 2", title: "Build Workflow #1, #2 & #3", items: ["Xây workflow lead capture tự động", "Xây workflow phân lead theo khu vực", "Xây workflow chào hàng 30 giây qua Zalo OA", "Test với 50 lead đầu tiên"] },
                { week: "Tuần 3", title: "Build Workflow #4, #5 & #6", items: ["Xây workflow nhắc follow-up + escalation", "Xây workflow báo cáo conversion rate", "Xây workflow nurture sequence 14 ngày", "Test toàn bộ với data thực"] },
                { week: "Tuần 4", title: "Go-live & Training", items: ["Go-live toàn bộ 6 workflows", "Training 2 buổi: quản lý + team sales", "Bàn giao SOP + video Loom hướng dẫn", "Bàn giao dashboard Google Sheet CRM", "Support 14 ngày sau bàn giao"] },
              ].map((phase, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-display font-extrabold text-sm shrink-0">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-0.5 flex-1 bg-purple-200 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">{phase.week}</span>
                    <h3 className="font-display font-bold text-lg text-slate-900 mt-1 mb-3">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg width="16" height="16" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-8 text-center">
            Công cụ & Tích hợp
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Facebook Lead Ads", desc: "Lead capture" },
              { name: "Zalo OA", desc: "Chào hàng, nurture" },
              { name: "Google Sheets", desc: "CRM + tracking" },
              { name: "Telegram", desc: "Alert + báo cáo" },
              { name: "n8n AI Agent", desc: "Phân tích lead thông minh" },
            ].map((tool) => (
              <div key={tool.name} className="bg-white rounded-xl border border-slate-200 p-4 text-center hover:border-purple-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mx-auto mb-2">
                  <svg width="20" height="20" fill="none" stroke="#8B5CF6" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <p className="text-sm font-semibold text-slate-800">{tool.name}</p>
                <p className="text-xs text-slate-500">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ROI Breakdown ─────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-8 text-center">
            Phân tích ROI
          </h2>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-6 md:p-8">
                <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-4">Chi phí trước automation</h3>
                <div className="space-y-3">
                  {[
                    { item: "350 lead mất/tháng (reply chậm)", cost: "~840 triệu/năm CPL" },
                    { item: "Quản lý phân lead thủ công", cost: "~36 triệu/năm" },
                    { item: "Không nurture → lead lạnh", cost: "~180 triệu/năm" },
                  ].map((row) => (
                    <div key={row.item} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{row.item}</span>
                      <span className="font-semibold text-red-500">{row.cost}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-800">Tổng lãng phí/năm</span>
                    <span className="text-red-600">~1.056 tỷ</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">Chi phí sau automation</h3>
                <div className="space-y-3">
                  {[
                    { item: "AutoFlow setup (1 lần)", cost: "72 triệu" },
                    { item: "n8n self-hosted + VPS", cost: "~3.6 triệu/năm" },
                    { item: "Zalo ZNS messages (500 lead/tháng)", cost: "~18 triệu/năm" },
                  ].map((row) => (
                    <div key={row.item} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{row.item}</span>
                      <span className="font-semibold text-accent">{row.cost}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-800">Tổng chi phí năm đầu</span>
                    <span className="text-accent">~93.6 triệu</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-purple-50/50 border-t border-purple-100 p-6 text-center">
              <p className="text-sm text-slate-600">
                <strong className="text-purple-600 font-display text-lg">ROI: tiết kiệm ~962 triệu/năm</strong>
                <br />
                <span className="text-slate-500">Hoàn vốn chỉ sau ~5 tuần sử dụng</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-10 md:p-14 text-center">
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-4">
                Bạn cũng đang chạy Facebook Ads cho BĐS?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Đặt lịch audit miễn phí 30 phút — mình sẽ phân tích quy trình xử lý lead
                và đưa ra lộ trình tự động hóa giúp tăng tỷ lệ chốt deal.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/audit" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all">
                  Nhận Audit Miễn Phí
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a href="/tai-lieu" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all">
                  ← Xem thêm case study
                </a>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
