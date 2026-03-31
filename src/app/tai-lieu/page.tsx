"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getStoredUTM } from "@/lib/utm";
import { trackGenerateLead } from "@/lib/analytics";
import { fbqTrackLead } from "@/lib/fbpixel";

/* ── Use‑case data ───────────────────────────────────────────── */
const useCases = [
  {
    id: "ecommerce",
    href: "/tai-lieu/e-commerce",
    industry: "E-commerce",
    industryColor: "bg-orange-50 text-orange-600",
    accentColor: "#F59E0B",
    title: "Shop thời trang online — 15 nhân viên, bán trên 3 sàn",
    problem:
      "Mỗi ngày nhân viên dành 5 giờ copy-paste đơn hàng từ Shopee, Tiki, TikTok Shop vào MISA. 8-10 lỗi sai tồn kho mỗi tuần khiến khách hàng phàn nàn. 2 nhân viên full-time chỉ để nhập liệu — tốn 240 triệu/năm.",
    solution:
      "AutoFlow xây 4 workflow n8n: (1) Đơn hàng mới từ 3 sàn tự động đồng bộ vào MISA, (2) Tồn kho cập nhật real-time giữa các kênh, (3) Trạng thái vận chuyển tự thông báo khách qua Zalo, (4) Báo cáo doanh thu tự động mỗi sáng gửi vào Telegram cho chủ shop.",
    results: [
      { metric: "0 giờ", label: "nhập liệu/ngày", sub: "từ 5 giờ xuống 0" },
      { metric: "0 lỗi", label: "sai tồn kho/tuần", sub: "từ 8-10 lỗi xuống 0" },
      { metric: "+23%", label: "doanh thu", sub: "nhờ 2 NV chuyển sang chăm khách" },
    ],
    timeline: "3 tuần",
    package: "Growth — 28 triệu đồng",
    tools: ["Shopee API", "Tiki API", "TikTok Shop", "MISA", "Zalo OA", "Telegram"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: "education",
    href: "/tai-lieu/giao-duc",
    industry: "Giáo dục & Đào tạo",
    industryColor: "bg-blue-50 text-blue-600",
    accentColor: "#3B82F6",
    title: "Chuỗi trung tâm tiếng Anh — 45 nhân viên, 8 chi nhánh",
    problem:
      "Mỗi ngày 1 nhân viên dành 3 giờ gọi điện nhắc lịch học viên. 15% học viên miss lịch mỗi tháng — mất doanh thu và ảnh hưởng trải nghiệm. Cuối tuần 1 người ngồi gom báo cáo 8 chi nhánh bằng tay trên Excel, mất 2 ngày mới xong.",
    solution:
      "AutoFlow xây 5 workflow: (1) Zalo OA tự nhắc lịch 24h trước cho học viên, (2) Nếu học viên không xác nhận — nhắc lại 3h trước + thông báo giáo viên, (3) Đăng ký học viên mới từ form Facebook tự động vào Google Sheet CRM, (4) Báo cáo sĩ số, doanh thu 8 chi nhánh tự tổng hợp mỗi sáng thứ 2, (5) Khảo sát hài lòng tự gửi sau mỗi khóa học.",
    results: [
      { metric: "-80%", label: "miss lịch", sub: "từ 15% xuống còn 3%" },
      { metric: "1 FTE", label: "tiết kiệm", sub: "nhân sự tổng hợp báo cáo" },
      { metric: "4x", label: "lead mới", sub: "nhờ follow-up tự động nhanh hơn" },
    ],
    timeline: "4 tuần",
    package: "Scale — 65 triệu đồng",
    tools: ["Zalo OA", "ZNS", "Google Sheets", "Facebook Lead Ads", "Telegram"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: "realestate",
    href: "/tai-lieu/bat-dong-san",
    industry: "Bất động sản",
    industryColor: "bg-purple-50 text-purple-600",
    accentColor: "#8B5CF6",
    title: "Agency BĐS — 20 sales, 500+ lead/tháng từ Facebook Ads",
    problem:
      "Mỗi tháng nhận 500+ lead từ Facebook Ads nhưng sales chỉ follow-up được 30% vì không có hệ thống. 67% lead mất vì reply chậm hơn 1 giờ. Data khách nằm rải rác trong Zalo cá nhân, Messenger, Google Sheet — không ai biết lead nào đang ở giai đoạn nào.",
    solution:
      "AutoFlow xây 6 workflow: (1) Lead từ Facebook Ads tự động vào Google Sheet CRM với timestamp + nguồn, (2) Phân lead tự động theo khu vực → đúng sales phụ trách, (3) Tin nhắn chào hàng đầu tiên gửi qua Zalo OA trong 30 giây, (4) Nhắc sales follow-up nếu chưa liên hệ sau 2h, (5) Báo cáo conversion rate từng sales mỗi tuần, (6) Lead nurture tự động: gửi brochure dự án, bảng giá, và video tour sau 3-7-14 ngày.",
    results: [
      { metric: "30 giây", label: "phản hồi đầu tiên", sub: "từ 5-24 giờ xuống 30s" },
      { metric: "+45%", label: "lead được follow-up", sub: "từ 30% lên 75%" },
      { metric: "+15%", label: "tỷ lệ chốt deal", sub: "nhờ nurture tự động" },
    ],
    timeline: "4 tuần",
    package: "Scale — 72 triệu đồng",
    tools: ["Facebook Lead Ads", "Zalo OA", "Google Sheets", "Telegram", "n8n AI Agent"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

/* ── Lead capture modal ──────────────────────────────────────── */
function LeadModal({
  open,
  onClose,
  resourceTitle,
}: {
  open: boolean;
  onClose: () => void;
  resourceTitle: string;
}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    setError("");

    try {
      const utm = getStoredUTM();
      const eventId = crypto.randomUUID();
      const res = await fetch("/api/tai-lieu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          resource: "10-quy-trinh",
          ...utm,
          event_id: eventId,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Có lỗi xảy ra. Vui lòng thử lại.");
        setLoading(false);
        return;
      }

      trackGenerateLead({ form_type: "pdf", resource: "10-quy-trinh" });
      fbqTrackLead({ content_name: "pdf", event_id: eventId });
      setSubmitted(true);
    } catch {
      setError("Không thể kết nối. Vui lòng thử lại.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-up">
        {!submitted ? (
          <>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <svg width="24" height="24" fill="none" stroke="#10B981" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
              Tải {resourceTitle}
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Nhập thông tin để nhận tài liệu qua email ngay lập tức.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
                <input type="text" required placeholder="Nguyễn Văn A" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input type="email" required placeholder="email@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại</label>
                <input type="tel" placeholder="0912 345 678" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
              </div>
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              {error && <p className="text-xs text-red-500 pt-1">{error}</p>}
              <p className="text-xs text-slate-400 pt-1">Không spam. Hủy đăng ký bất cứ lúc nào.</p>
              <button type="submit" disabled={!valid || loading} className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                {loading ? "Đang gửi..." : "Tải Miễn Phí"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Đã gửi thành công!</h3>
            <p className="text-sm text-slate-500 mb-6">Kiểm tra email — tài liệu sẽ đến trong vài giây.<br />Nếu không thấy, kiểm tra thư mục Spam nhé.</p>
            <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-600 font-semibold text-sm hover:bg-slate-200 transition-colors">Đóng</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main page ───────────────────────────────────────────────── */
export default function TaiLieuPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-6xl mx-auto px-6">
          {/* ── Page header ──────────────────────────────── */}
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold mb-4">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Tài liệu miễn phí
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
              Tài liệu &{" "}
              <span className="gradient-text">Công cụ</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Quiz đánh giá, tài liệu chuyên sâu, và case study thực tế — tất cả miễn phí.
              Giúp bạn hiểu rõ nhu cầu tự động hóa và bắt đầu đúng cách.
            </p>
          </div>

          {/* ══════════════════════════════════════════════ */}
          {/* ── Featured 1: Quiz (blue gradient)  ──────── */}
          {/* ══════════════════════════════════════════════ */}
          <a
            href="/quiz"
            className="group block relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 mb-6"
          >
            <div className="relative z-10 p-8 md:p-10 lg:flex lg:items-center lg:gap-12">
              <div className="flex-1 mb-6 lg:mb-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-600 mb-4">
                  Interactive Quiz
                </span>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  Doanh nghiệp bạn sẵn sàng tự động hóa chưa?
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6 max-w-lg">
                  10 câu hỏi nhanh — nhận báo cáo cá nhân hóa về mức độ sẵn sàng, điểm nghẽn chính,
                  và lộ trình tự động hóa phù hợp nhất cho doanh nghiệp bạn.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["10 câu hỏi", "2 phút", "Kết quả ngay"].map((s) => (
                    <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200 text-xs font-medium text-slate-600">
                      <svg width="12" height="12" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {s}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm group-hover:bg-primary-dark group-hover:shadow-lg group-hover:shadow-primary/25 transition-all">
                  Làm Quiz Ngay
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </div>
              {/* Illustration */}
              <div className="hidden lg:flex items-center justify-center w-72 h-56 rounded-2xl bg-white/50 border border-slate-200/60">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg width="36" height="36" fill="none" stroke="#0066FF" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="font-display font-extrabold text-3xl text-primary">?/40</div>
                  <div className="text-xs text-slate-500 mt-1">Readiness Score</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
          </a>

          {/* ══════════════════════════════════════════════ */}
          {/* ── Featured 2: PDF Lead Magnet (green)  ───── */}
          {/* ══════════════════════════════════════════════ */}
          <div
            onClick={() => setModalOpen(true)}
            className="group block relative overflow-hidden rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 via-white to-emerald-50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 cursor-pointer mb-16"
          >
            <div className="relative z-10 p-8 md:p-10 lg:flex lg:items-center lg:gap-12">
              <div className="flex-1 mb-6 lg:mb-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-4">
                  PDF Guide — Miễn phí
                </span>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-3 group-hover:text-accent-dark transition-colors">
                  10 Quy Trình SME Nên Tự Động Hóa Ngay
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6 max-w-lg">
                  Tổng hợp 10 quy trình lặp lại phổ biến nhất ở SME Việt Nam — kèm ước tính thời gian tiết kiệm,
                  công cụ cần thiết, và bảng tự đánh giá mức độ sẵn sàng từ Starter đến Scale.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["5 trang chi tiết", "10 quy trình", "Bảng tự đánh giá", "ROI ước tính"].map((s) => (
                    <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200 text-xs font-medium text-slate-600">
                      <svg width="12" height="12" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {s}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm group-hover:bg-accent-dark group-hover:shadow-lg group-hover:shadow-accent/25 transition-all">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Tải PDF Miễn Phí
                </span>
              </div>
              {/* PDF preview illustration */}
              <div className="hidden lg:flex items-center justify-center w-72 h-56 rounded-2xl bg-white/50 border border-slate-200/60">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <svg width="36" height="36" fill="none" stroke="#10B981" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="font-display font-extrabold text-lg text-accent">10 Quy Trình</div>
                  <div className="text-xs text-slate-500 mt-1">PDF — 5 trang</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />
          </div>

          {/* ══════════════════════════════════════════════ */}
          {/* ── Use Cases Section  ─────────────────────── */}
          {/* ══════════════════════════════════════════════ */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold mb-4">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Kết quả thực tế
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              Case Study:{" "}
              <span className="gradient-text">Trước & Sau</span>
            </h2>
            <p className="text-slate-500 max-w-2xl">
              Mỗi case study là một doanh nghiệp thật, vấn đề thật, kết quả đo được.
              Xem AutoFlow đã giúp họ tiết kiệm bao nhiêu thời gian và tiền bạc.
            </p>
          </div>

          <div className="flex flex-col gap-8 mb-16">
            {useCases.map((uc) => (
              <a
                key={uc.id}
                href={uc.href}
                className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Card header */}
                <div className="px-8 pt-8 pb-0 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${uc.industryColor} mb-3`}>
                      {uc.industry}
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                      {uc.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">{uc.timeline} triển khai</span>
                      <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">{uc.package}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl text-white shrink-0" style={{ background: uc.accentColor }}>
                    {uc.icon}
                  </div>
                </div>

                {/* Problem / Solution */}
                <div className="px-8 pt-6 pb-2 grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-md bg-red-50 flex items-center justify-center">
                        <svg width="14" height="14" fill="none" stroke="#EF4444" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      </span>
                      <span className="text-sm font-semibold text-red-500">Trước</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{uc.problem}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center">
                        <svg width="14" height="14" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="text-sm font-semibold text-accent">Giải pháp AutoFlow</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{uc.solution}</p>
                  </div>
                </div>

                {/* Results bar */}
                <div className="px-8 py-6">
                  <div className="bg-slate-50 rounded-xl p-5">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {uc.results.map((r) => (
                        <div key={r.label} className="text-center">
                          <div className="font-display font-extrabold text-2xl" style={{ color: uc.accentColor }}>
                            {r.metric}
                          </div>
                          <div className="text-xs font-semibold text-slate-700 mt-0.5">{r.label}</div>
                          <div className="text-xs text-slate-400">{r.sub}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200">
                      {uc.tools.map((tool) => (
                        <span key={tool} className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                          {tool}
                        </span>
                      ))}
                      <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-primary-dark transition-colors">
                        Xem chi tiết
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ── Bottom CTA ──────────────────────────────── */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-10 md:p-14 text-center">
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-4">
                Doanh nghiệp bạn có đang gặp vấn đề tương tự?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Đặt lịch audit miễn phí 30 phút — mình sẽ phân tích quy trình của bạn
                và đưa ra lộ trình tự động hóa cụ thể. Không ràng buộc.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/#lien-he" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all">
                  Nhận Audit Miễn Phí
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a href="/quiz" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all">
                  Hoặc Làm Quiz Trước
                </a>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
          </div>
        </section>
      </main>

      <Footer />

      {/* Lead capture modal */}
      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        resourceTitle="10 Quy Trình SME Nên Tự Động Hóa"
      />
    </>
  );
}
