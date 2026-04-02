"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkflowDiagram from "@/components/tai-lieu/WorkflowDiagram";
import AnimatedMetric from "@/components/tai-lieu/AnimatedMetric";

/* ── Main page ──────────────────────────────────────────────── */
export default function EcommerceUseCasePage() {
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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                E-commerce
              </span>
              <span className="text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">Case Study</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Shop thời trang 15 NV, 3 sàn TMĐT —{" "}
              <span className="gradient-text">giảm 100% nhập liệu thủ công</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Từ 5 giờ copy-paste đơn hàng mỗi ngày và 8-10 lỗi tồn kho mỗi tuần, shop đã tự động hóa hoàn toàn
              quy trình đồng bộ đơn hàng, tồn kho, thông báo khách, và báo cáo — tiết kiệm 240 triệu đồng/năm nhân sự.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                3 tuần triển khai
              </span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>Gói Growth — 28 triệu đồng</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>4 workflows n8n</span>
            </div>
          </div>
        </section>

        {/* ── Key Metrics ───────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedMetric value="0" suffix="giờ" label="nhập liệu/ngày" sub="từ 5 giờ → 0" color="#F59E0B" />
            <AnimatedMetric value="0" suffix="lỗi" label="sai tồn kho/tuần" sub="từ 8-10 → 0" color="#F59E0B" />
            <AnimatedMetric value="+23%" label="doanh thu" sub="2 NV chuyển sang chăm khách" color="#F59E0B" />
            <AnimatedMetric value="240" suffix="tr/năm" label="tiết kiệm nhân sự" sub="2 FTE nhập liệu" color="#F59E0B" />
          </div>
        </section>

        {/* ── Bối cảnh ──────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-6">
            Bối cảnh doanh nghiệp
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              Một shop thời trang online tại TP.HCM, bán trên 3 sàn thương mại điện tử (Shopee, Tiki, TikTok Shop)
              cùng website riêng. Team gồm 15 nhân viên, trong đó <strong>2 người full-time chỉ để nhập đơn</strong> từ
              các sàn vào phần mềm kế toán MISA và quản lý tồn kho bằng tay.
            </p>
            <p>
              Mỗi ngày shop nhận trung bình 80-120 đơn hàng từ 3 sàn. Nhân viên phải mở từng sàn, copy thông tin đơn,
              paste vào MISA, rồi cập nhật tồn kho trên từng kênh. Quy trình này mất 5 giờ/ngày và luôn xảy ra sai sót
              vì tốc độ đơn hàng nhanh hơn tốc độ nhập tay.
            </p>
            <p>
              <strong>Vấn đề nghiêm trọng nhất:</strong> sai tồn kho liên tục dẫn đến oversell, hủy đơn, khách đánh giá 1 sao.
              Mỗi tuần trung bình 8-10 lỗi nhập tay. Chủ shop đã thuê thêm 1 người nhưng lỗi vẫn xảy ra — vì bản chất
              con người không thể đồng bộ real-time giữa 4 kênh bán hàng.
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
                { pain: "5 giờ/ngày nhập liệu thủ công", detail: "2 nhân viên dành toàn bộ thời gian copy-paste đơn hàng từ 3 sàn vào MISA. Chi phí: 240 triệu/năm chỉ riêng lương." },
                { pain: "8-10 lỗi tồn kho/tuần", detail: "Sai số giữa sàn và hệ thống kế toán → oversell → hủy đơn → đánh giá 1 sao → giảm ranking trên sàn." },
                { pain: "Không có thông báo vận chuyển", detail: "Khách hỏi liên tục 'đơn ở đâu rồi?' qua chat. CS team mất thêm 2 giờ/ngày trả lời câu hỏi lặp lại." },
                { pain: "Báo cáo doanh thu chậm 2-3 ngày", detail: "Chủ shop phải đợi nhân viên tổng hợp cuối tuần mới biết doanh thu. Không thể ra quyết định nhanh về quảng cáo, tồn kho." },
                { pain: "Không scale được khi đơn tăng", detail: "Mỗi khi chạy sale (11.11, 12.12), đơn tăng 3x → team quá tải → lỗi tăng → khách phàn nàn nhiều hơn." },
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

        {/* ── Giải pháp: 4 Workflows ───────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Giải pháp AutoFlow
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              4 Workflows tự động hóa
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Mỗi workflow được thiết kế để giải quyết 1 vấn đề cụ thể. Cùng tìm hiểu chi tiết cách hoạt động.
            </p>
          </div>

          {/* Workflow 1 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-display font-extrabold text-lg">1</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Đồng bộ đơn hàng tự động</h3>
                <p className="text-sm text-slate-500">Shopee + Tiki + TikTok Shop → MISA</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#F59E0B"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>, label: "Đơn mới trên sàn", sub: "Shopee, Tiki, TikTok" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, label: "n8n webhook nhận", sub: "Trigger tự động mỗi 5 phút" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>, label: "Chuẩn hóa data", sub: "Map fields, validate" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>, label: "Ghi vào MISA", sub: "Tự động tạo hóa đơn" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Xác nhận thành công", sub: "Log + alert nếu lỗi" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">⚡ Real-time sync mỗi 5 phút</span>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">🔄 Retry tự động nếu API fail</span>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">📊 Log mọi giao dịch</span>
              </div>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-display font-extrabold text-lg">2</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Đồng bộ tồn kho real-time</h3>
                <p className="text-sm text-slate-500">MISA → Shopee + Tiki + TikTok Shop</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#F59E0B"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>, label: "Tồn kho thay đổi", sub: "MISA update" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: "n8n trigger", sub: "Poll mỗi 5 phút" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>, label: "So sánh & map SKU", sub: "Check chênh lệch" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, label: "Update 3 sàn", sub: "API Shopee, Tiki, TikTok" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>, label: "Alert nếu hết hàng", sub: "Telegram cho chủ shop" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">🚫 0 oversell sau khi triển khai</span>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">📦 Hỗ trợ 500+ SKU</span>
              </div>
            </div>
          </div>

          {/* Workflow 3 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-display font-extrabold text-lg">3</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Thông báo vận chuyển tự động</h3>
                <p className="text-sm text-slate-500">Trạng thái đơn → Zalo OA → Khách hàng</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#F59E0B"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>, label: "Trạng thái đơn đổi", sub: "Đang giao, đã giao, hoàn" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: "n8n xử lý", sub: "Map template ZNS" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, label: "Gửi Zalo OA", sub: "ZNS template cá nhân hóa" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Khách nhận tin", sub: "Mã vận đơn + link tracking" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">💬 Giảm 70% tin nhắn hỏi đơn</span>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">⭐ Tăng đánh giá 5 sao</span>
              </div>
            </div>
          </div>

          {/* Workflow 4 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-display font-extrabold text-lg">4</span>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Báo cáo doanh thu tự động</h3>
                <p className="text-sm text-slate-500">3 sàn + MISA → Telegram mỗi sáng</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
              <WorkflowDiagram
                accentColor="#F59E0B"
                steps={[
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "6:00 sáng hàng ngày", sub: "Cron schedule trigger" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>, label: "Lấy data 3 sàn", sub: "API Shopee, Tiki, TikTok" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 7h6m0 10v-3m-3 3v-6m-3 6v-1m6-9a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2" /></svg>, label: "Tổng hợp & so sánh", sub: "So với hôm qua, tuần trước" },
                  { icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>, label: "Gửi Telegram", sub: "Chủ shop + quản lý" },
                ]}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">📈 Doanh thu hôm qua vs tuần trước</span>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">🏆 Top 10 sản phẩm bán chạy</span>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg">📉 Cảnh báo nếu doanh thu giảm 20%</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ──────────────────────────────────── */}
        <section className="py-16 bg-slate-50 relative noise-bg">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-10 text-center">
              Timeline triển khai — 3 tuần
            </h2>
            <div className="space-y-6">
              {[
                { week: "Tuần 1", title: "Audit & Planning", items: ["Discovery call 2 giờ — hiểu quy trình hiện tại", "Mapping toàn bộ flow đơn hàng trên 3 sàn", "Kiểm tra API access Shopee, Tiki, TikTok Shop, MISA", "Proposal chi tiết với 4 workflows + ROI ước tính"] },
                { week: "Tuần 2", title: "Build Workflow #1 & #2", items: ["Xây workflow đồng bộ đơn hàng (test với data thật)", "Xây workflow đồng bộ tồn kho real-time", "Test với 50 đơn đầu tiên — fix edge cases", "Training lần 1 cho team vận hành"] },
                { week: "Tuần 3", title: "Build Workflow #3 & #4 + Go-live", items: ["Xây workflow thông báo vận chuyển qua Zalo OA", "Xây workflow báo cáo doanh thu tự động", "Go-live toàn bộ 4 workflows", "Bàn giao SOP + video hướng dẫn Loom", "Support 14 ngày sau bàn giao"] },
              ].map((phase, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-extrabold text-sm shrink-0">
                      {i + 1}
                    </div>
                    {i < 2 && <div className="w-0.5 flex-1 bg-primary/20 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{phase.week}</span>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Shopee API", desc: "Đơn hàng, tồn kho" },
              { name: "Tiki API", desc: "Đơn hàng, tồn kho" },
              { name: "TikTok Shop", desc: "Đơn hàng, tồn kho" },
              { name: "MISA", desc: "Kế toán, hóa đơn" },
              { name: "Zalo OA", desc: "Thông báo khách" },
              { name: "Telegram", desc: "Báo cáo nội bộ" },
            ].map((tool) => (
              <div key={tool.name} className="bg-white rounded-xl border border-slate-200 p-4 text-center hover:border-orange-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mx-auto mb-2">
                  <svg width="20" height="20" fill="none" stroke="#F59E0B" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
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
                    { item: "2 FTE nhập liệu", cost: "240 triệu/năm" },
                    { item: "Hủy đơn do oversell (~40 đơn/tháng)", cost: "~48 triệu/năm" },
                    { item: "Thời gian quản lý + sửa lỗi", cost: "~60 triệu/năm" },
                  ].map((row) => (
                    <div key={row.item} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{row.item}</span>
                      <span className="font-semibold text-red-500">{row.cost}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-800">Tổng thiệt hại/năm</span>
                    <span className="text-red-600">~348 triệu</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">Chi phí sau automation</h3>
                <div className="space-y-3">
                  {[
                    { item: "AutoFlow setup (1 lần)", cost: "28 triệu" },
                    { item: "n8n self-hosted + VPS", cost: "~3.6 triệu/năm" },
                    { item: "Zalo ZNS messages", cost: "~6 triệu/năm" },
                  ].map((row) => (
                    <div key={row.item} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{row.item}</span>
                      <span className="font-semibold text-accent">{row.cost}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-800">Tổng chi phí năm đầu</span>
                    <span className="text-accent">~37.6 triệu</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border-t border-primary/10 p-6 text-center">
              <p className="text-sm text-slate-600">
                <strong className="text-primary font-display text-lg">ROI: tiết kiệm ~310 triệu/năm</strong>
                <br />
                <span className="text-slate-500">Hoàn vốn chỉ sau ~4 tuần sử dụng</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-10 md:p-14 text-center">
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-4">
                Bạn cũng bán trên nhiều sàn TMĐT?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Đặt lịch audit miễn phí 30 phút — mình sẽ phân tích quy trình e-commerce của bạn
                và đưa ra lộ trình tự động hóa cụ thể.
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
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
