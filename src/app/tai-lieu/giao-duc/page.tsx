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
              <p className="text-xs text-slate-400 max-w-[130px]">{step.sub}</p>
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
                <p className="text-xs text-slate-400">{step.sub}</p>
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
        {suffix && <span className="text-base font-medium text-slate-400 ml-1">{suffix}</span>}
      </div>
      <div className="text-sm font-semibold text-slate-700 mt-1">{label}</div>
      <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
    </div>
  );
}

/* ── Main page ──────────────────────────────────────────────── */
export default function EducationUseCasePage() {
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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                Giáo dục & Đào tạo
              </span>
              <span className="text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">Case Study</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Chuỗi trung tâm Anh ngữ 8 chi nhánh —{" "}
              <span className="gradient-text">giảm 80% miss lịch học viên</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Từ 15% học viên miss lịch mỗi tháng và 2 ngày gom báo cáo 8 chi nhánh bằng tay,
              chuỗi trung tâm đã tự động hóa toàn bộ quy trình nhắc lịch, quản lý lead,
              và tổng hợp báo cáo — tiết kiệm 1 nhân sự full-time.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                4 tuần triển khai
              </span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>Gói Scale — 65 triệu đồng</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>5 workflows n8n</span>
            </div>
          </div>
        </section>

        {/* ── Key Metrics ───────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedMetric value="-80%" label="miss lịch" sub="từ 15% xuống 3%" color="#3B82F6" />
            <AnimatedMetric value="1" suffix="FTE" label="tiết kiệm" sub="nhân sự tổng hợp báo cáo" color="#3B82F6" />
            <AnimatedMetric value="4x" label="lead mới" sub="nhờ follow-up tự động" color="#3B82F6" />
            <AnimatedMetric value="0" suffix="phút" label="gom báo cáo" sub="từ 2 ngày → tự động" color="#3B82F6" />
          </div>
        </section>

        {/* ── Bối cảnh ──────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-6">
            Bối cảnh doanh nghiệp
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              Chuỗi trung tâm tiếng Anh với 8 chi nhánh tại Hà Nội và TP.HCM, 45 nhân viên bao gồm giáo viên,
              nhân viên tư vấn, và quản lý chi nhánh. Mỗi tháng phục vụ hơn 2,000 học viên từ thiếu nhi đến người lớn.
            </p>
            <p>
              Nhân viên tư vấn mỗi ngày dành <strong>3 giờ gọi điện nhắc lịch</strong> cho học viên — một công việc lặp lại
              nhưng cực kỳ quan trọng vì nếu học viên miss lịch nhiều sẽ giảm trải nghiệm, tăng tỷ lệ drop-out,
              và mất doanh thu từ buổi học không được bù.
            </p>
            <p>
              Cuối tuần, 1 nhân viên phải ngồi gom báo cáo sĩ số, doanh thu, tỷ lệ đi học từ 8 chi nhánh —
              mỗi chi nhánh dùng 1 file Excel riêng. Quy trình này mất <strong>2 ngày</strong> mới xong,
              nghĩa là ban giám đốc luôn nhận báo cáo chậm 3-4 ngày so với thực tế.
            </p>
            <p>
              Lead từ Facebook Ads chạy liên tục nhưng chỉ được ghi vào Google Sheet bằng tay.
              Thời gian từ lúc khách điền form đến lúc tư vấn viên gọi lại trung bình là <strong>4-8 giờ</strong> —
              đủ lâu để khách chuyển sang trung tâm khác đã liên hệ trước.
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
                5 điểm đau chính
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { pain: "15% học viên miss lịch/tháng", detail: "Nhắc lịch bằng gọi điện không hiệu quả — nhiều học viên không nghe máy. Mỗi buổi miss = mất 150-300k doanh thu." },
                { pain: "3 giờ/ngày gọi điện nhắc lịch", detail: "Nhân viên tư vấn dành phần lớn thời gian cho việc nhắc lịch thay vì tư vấn bán hàng và chăm sóc học viên." },
                { pain: "2 ngày gom báo cáo 8 chi nhánh", detail: "Mỗi chi nhánh dùng Excel riêng, format khác nhau. Tổng hợp thủ công mất 2 ngày và hay sai số." },
                { pain: "Lead Facebook bị bỏ lỡ 60%", detail: "Thời gian phản hồi 4-8 giờ. Nghiên cứu cho thấy tỷ lệ chuyển đổi giảm 80% nếu reply chậm hơn 5 phút." },
                { pain: "Không có khảo sát hài lòng", detail: "Không biết chất lượng giảng dạy từng chi nhánh. Chỉ phát hiện vấn đề khi học viên đã drop-out." },
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

        {/* ── Giải pháp: 5 Workflows ───────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Giải pháp AutoFlow
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              5 Workflows tự động hóa
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Từ nhắc lịch Zalo tự động đến tổng hợp báo cáo 8 chi nhánh — mọi thứ chạy 24/7 không cần can thiệp.
            </p>
          </div>

          {/* Workflow 1 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-display font-extrabold text-lg">1</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Nhắc lịch học tự động qua Zalo OA</h3>
                <p className="text-sm text-slate-400">24h trước buổi học → Zalo OA → Học viên</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#3B82F6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: "Lịch học ngày mai", sub: "Check mỗi tối 8PM" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: "Lọc học viên", sub: "Theo lớp, chi nhánh" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, label: "Gửi ZNS qua Zalo OA", sub: "Template cá nhân hóa" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Xác nhận / không xác nhận", sub: "Học viên reply trên Zalo" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">📱 Zalo OA — kênh phổ biến nhất VN</span>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">👤 Cá nhân hóa tên + lớp + giờ học</span>
              </div>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-display font-extrabold text-lg">2</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Nhắc lại 3h trước + thông báo giáo viên</h3>
                <p className="text-sm text-slate-400">Nếu chưa xác nhận → nhắc lại → báo giáo viên</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#3B82F6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "3h trước buổi học", sub: "Check danh sách chưa xác nhận" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>, label: "Gửi nhắc lại", sub: "Zalo OA tin thứ 2" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, label: "Thông báo giáo viên", sub: "Telegram: ai chưa xác nhận" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>, label: "Ghi log điểm danh", sub: "Google Sheet tự động" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">🔄 Escalation tự động</span>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">📊 Thống kê tỷ lệ đi học real-time</span>
              </div>
            </div>
          </div>

          {/* Workflow 3 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-display font-extrabold text-lg">3</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Lead capture từ Facebook Ads</h3>
                <p className="text-sm text-slate-400">Facebook Lead Form → Google Sheet CRM → Tư vấn viên</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#3B82F6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>, label: "Khách điền form FB", sub: "Facebook Lead Ads" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: "n8n webhook nhận", sub: "Instant — < 5 giây" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>, label: "Ghi vào CRM", sub: "Google Sheet + timestamp" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>, label: "Alert tư vấn viên", sub: "Telegram + Zalo OA" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, label: "Auto welcome", sub: "Zalo OA gửi thông tin khóa học" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">⚡ Phản hồi &lt; 5 giây</span>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">🎯 Phân bổ lead theo chi nhánh gần nhất</span>
              </div>
            </div>
          </div>

          {/* Workflow 4 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-display font-extrabold text-lg">4</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Báo cáo 8 chi nhánh tự động</h3>
                <p className="text-sm text-slate-400">8 Google Sheet → Tổng hợp → Telegram mỗi sáng thứ 2</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#3B82F6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "7:00 sáng thứ 2", sub: "Cron schedule" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>, label: "Đọc 8 Sheet", sub: "Sĩ số, doanh thu, điểm danh" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 7h6m0 10v-3m-3 3v-6m-3 6v-1m6-9a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2" /></svg>, label: "Tổng hợp & so sánh", sub: "Vs tuần trước, vs target" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>, label: "Gửi report", sub: "Telegram ban giám đốc" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">📊 Sĩ số từng lớp, từng chi nhánh</span>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">💰 Doanh thu tuần vs target</span>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">⚠️ Alert chi nhánh dưới KPI</span>
              </div>
            </div>
          </div>

          {/* Workflow 5 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-display font-extrabold text-lg">5</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Khảo sát hài lòng tự động</h3>
                <p className="text-sm text-slate-400">Kết thúc khóa → Zalo OA khảo sát → Tổng hợp feedback</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#3B82F6"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Kết thúc khóa học", sub: "Trigger từ CRM" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, label: "Gửi khảo sát Zalo", sub: "Link Google Form cá nhân hóa" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>, label: "Thu thập response", sub: "Google Form → Sheet" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>, label: "Alert nếu điểm thấp", sub: "Telegram quản lý chi nhánh" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">⭐ NPS score từng chi nhánh</span>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">🚨 Escalation nếu NPS &lt; 7</span>
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
                { week: "Tuần 1", title: "Audit & Planning", items: ["Discovery call 2 giờ — hiểu flow học viên từ đăng ký đến kết thúc khóa", "Mapping quy trình nhắc lịch hiện tại 8 chi nhánh", "Kiểm tra Zalo OA, Facebook Lead Ads, Google Sheet setup", "Proposal chi tiết với 5 workflows + ROI ước tính"] },
                { week: "Tuần 2", title: "Build Workflow #1 & #2", items: ["Xây workflow nhắc lịch Zalo OA 24h trước", "Xây workflow nhắc lại 3h + thông báo giáo viên", "Test với 2 chi nhánh pilot", "Setup ZNS template trên Zalo OA"] },
                { week: "Tuần 3", title: "Build Workflow #3, #4 & #5", items: ["Xây workflow lead capture từ Facebook", "Xây workflow báo cáo 8 chi nhánh tự động", "Xây workflow khảo sát hài lòng sau khóa học", "Test toàn bộ với data thực"] },
                { week: "Tuần 4", title: "Rollout & Training", items: ["Go-live toàn bộ 8 chi nhánh", "Training 2 buổi: quản lý + nhân viên tư vấn", "Bàn giao SOP + video Loom hướng dẫn", "Support 14 ngày sau bàn giao"] },
              ].map((phase, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-display font-extrabold text-sm shrink-0">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-0.5 flex-1 bg-blue-200 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{phase.week}</span>
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
              { name: "Zalo OA", desc: "Nhắc lịch, khảo sát" },
              { name: "ZNS", desc: "Template tin nhắn" },
              { name: "Google Sheets", desc: "CRM + điểm danh" },
              { name: "Facebook Lead Ads", desc: "Lead capture" },
              { name: "Telegram", desc: "Báo cáo nội bộ" },
            ].map((tool) => (
              <div key={tool.name} className="bg-white rounded-xl border border-slate-200 p-4 text-center hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-2">
                  <svg width="20" height="20" fill="none" stroke="#3B82F6" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <p className="text-sm font-semibold text-slate-800">{tool.name}</p>
                <p className="text-xs text-slate-400">{tool.desc}</p>
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
                    { item: "1 FTE tổng hợp báo cáo", cost: "120 triệu/năm" },
                    { item: "3 giờ/ngày nhắc lịch (tư vấn viên)", cost: "~72 triệu/năm" },
                    { item: "Miss lịch 15% (~300 buổi/tháng)", cost: "~108 triệu/năm" },
                    { item: "Lead bị bỏ lỡ 60%", cost: "~96 triệu/năm" },
                  ].map((row) => (
                    <div key={row.item} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{row.item}</span>
                      <span className="font-semibold text-red-500">{row.cost}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-800">Tổng thiệt hại/năm</span>
                    <span className="text-red-600">~396 triệu</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">Chi phí sau automation</h3>
                <div className="space-y-3">
                  {[
                    { item: "AutoFlow setup (1 lần)", cost: "65 triệu" },
                    { item: "n8n self-hosted + VPS", cost: "~3.6 triệu/năm" },
                    { item: "Zalo ZNS messages", cost: "~12 triệu/năm" },
                  ].map((row) => (
                    <div key={row.item} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{row.item}</span>
                      <span className="font-semibold text-accent">{row.cost}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-800">Tổng chi phí năm đầu</span>
                    <span className="text-accent">~80.6 triệu</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50/50 border-t border-blue-100 p-6 text-center">
              <p className="text-sm text-slate-600">
                <strong className="text-blue-600 font-display text-lg">ROI: tiết kiệm ~315 triệu/năm</strong>
                <br />
                <span className="text-slate-400">Hoàn vốn chỉ sau ~10 tuần sử dụng</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-10 md:p-14 text-center">
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-4">
                Bạn cũng quản lý trung tâm đào tạo?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Đặt lịch audit miễn phí 30 phút — mình sẽ phân tích quy trình nhắc lịch, quản lý học viên
                và đưa ra lộ trình tự động hóa cụ thể cho trung tâm bạn.
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
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
