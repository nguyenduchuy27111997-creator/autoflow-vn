import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tự động hóa đơn hàng Shopee — Hết nhập tay, hết sai sót | AutoFlow VN",
  description:
    "Hướng dẫn 4 workflow n8n giúp shop Shopee tự động đồng bộ đơn hàng, cập nhật tồn kho, reply review, và báo cáo doanh thu — tiết kiệm 4+ giờ/ngày cho SME Việt Nam.",
};

export default function TuDongHoaShopeePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-10">
            <a
              href="/blog"
              className="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block"
            >
              ← Blog
            </a>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                Hướng dẫn
              </span>
              <span className="text-xs text-slate-400">10 phút đọc</span>
              <span className="text-xs text-slate-400">28/03/2026</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Tự động hóa đơn hàng Shopee — hết nhập tay, hết sai sót
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Bạn đang bán trên Shopee và mất 4–5 giờ mỗi ngày để nhập đơn sang
              MISA, cập nhật tồn kho, reply review? Bài viết này hướng dẫn 4
              workflow n8n giúp tự động hóa toàn bộ — từ đồng bộ đơn đến báo cáo
              cuối tháng.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>Vấn đề: Nhập đơn Shopee bằng tay — tốn thời gian, dễ sai</h2>

            <p>
              Nếu bạn đang bán trên Shopee (hoặc đa kênh: Shopee + Tiki +
              TikTok Shop), hẳn bạn quen với quy trình này mỗi ngày:
            </p>

            <ul>
              <li>
                <strong>Copy-paste đơn hàng:</strong> Mở Shopee Seller Center →
                copy thông tin đơn → paste vào Google Sheet hoặc MISA. Mỗi đơn mất
                3–5 phút. 50 đơn/ngày = 4+ giờ chỉ để nhập liệu.
              </li>
              <li>
                <strong>Sai tồn kho liên tục:</strong> Bán trên Shopee nhưng chưa
                update Tiki → oversell → hủy đơn → khách đánh giá 1 sao → mất uy
                tín.
              </li>
              <li>
                <strong>Reply review chậm:</strong> Khách để review 5 sao nhưng
                không ai reply cảm ơn. Khách để review 1 sao → 12 giờ sau mới
                thấy → lúc đó đã ảnh hưởng ranking.
              </li>
              <li>
                <strong>Báo cáo cuối tháng:</strong> Gom data từ Shopee Seller
                Center + MISA + Google Sheet. Mất 2–3 ngày, sai số là chuyện
                thường.
              </li>
            </ul>

            <p>
              Đây không phải vấn đề của riêng bạn — <strong>93% shop Shopee Việt
              Nam</strong> vẫn đang vận hành thủ công. Nhưng những shop top 1%
              đã tự động hóa từ lâu.
            </p>

            <h2>Giải pháp: n8n — nền tảng automation cho Shopee</h2>

            <p>
              n8n là nền tảng tự động hóa workflow mã nguồn mở. Khác với Zapier
              (không hỗ trợ Shopee API), n8n có thể kết nối trực tiếp với Shopee
              Open Platform API để đồng bộ đơn hàng, tồn kho, review — tất cả
              tự động.
            </p>

            <p>Ưu điểm của n8n so với các giải pháp khác:</p>

            <ul>
              <li>
                <strong>Kết nối Shopee API trực tiếp:</strong> Zapier, Make.com
                không hỗ trợ. n8n có thể gọi mọi endpoint của Shopee Open
                Platform.
              </li>
              <li>
                <strong>Self-host tại VN:</strong> Data đơn hàng, khách hàng nằm
                trên VPS Việt Nam — không gửi ra nước ngoài.
              </li>
              <li>
                <strong>Không giới hạn:</strong> Zapier $20/tháng, giới hạn 750
                tasks. n8n self-host ~125.000 đ/tháng (phí VPS), chạy bao nhiêu
                đơn cũng được.
              </li>
              <li>
                <strong>Tích hợp MISA, KiotViet, Zalo:</strong> Đồng bộ sang
                phần mềm kế toán và CRM đang dùng — không cần đổi hệ thống.
              </li>
            </ul>

            <h2>4 workflow Shopee phổ biến nhất</h2>

            <h3>1. Đồng bộ đơn hàng → MISA / Google Sheet</h3>
            <p>
              Đơn mới trên Shopee → n8n nhận webhook real-time → tự động tạo
              phiếu bán hàng trên MISA (hoặc thêm dòng vào Google Sheet) → cập
              nhật trạng thái đơn. Không cần mở Shopee Seller Center, không cần
              copy-paste.
            </p>
            <p>
              <strong>Kết quả:</strong> Thay thế 3–4 giờ nhập tay/ngày. Sai sót
              giảm từ 8–10 lỗi/tuần xuống 0.
            </p>

            <h3>2. Cập nhật tồn kho real-time</h3>
            <p>
              Bán 1 sản phẩm trên Shopee → n8n tự động giảm tồn kho trên Tiki,
              TikTok Shop, KiotViet. Ngược lại cũng vậy. Tồn kho luôn đồng bộ
              giữa tất cả kênh.
            </p>
            <p>
              <strong>Kết quả:</strong> Hết oversell, hết hủy đơn vì hết hàng.
              Tỉ lệ hủy đơn giảm 90%.
            </p>

            <h3>3. Auto-reply review Shopee</h3>
            <p>
              Review mới trên Shopee → n8n nhận thông báo → AI phân tích
              sentiment (tích cực/tiêu cực) → Review tốt (4–5 sao): reply cảm
              ơn tự động → Review xấu (1–3 sao): gửi alert cho manager qua Zalo
              để xử lý ngay.
            </p>
            <p>
              <strong>Kết quả:</strong> Response time từ 12 giờ → 30 giây. Tỉ lệ
              reply review đạt 100%.
            </p>

            <h3>4. Báo cáo doanh thu tự động</h3>
            <p>
              Mỗi sáng thứ 2 (hoặc cuối tháng) → n8n kéo data từ Shopee Seller
              API + MISA → tổng hợp: doanh thu, số đơn, sản phẩm bán chạy, tồn
              kho thấp → gửi báo cáo qua Zalo/Email cho quản lý.
            </p>
            <p>
              <strong>Kết quả:</strong> 0 phút thay vì 2–3 ngày gom data. Báo
              cáo chính xác 100%.
            </p>

            <h2>Kết quả thực tế</h2>

            <p>
              Dựa trên project AutoFlow đã triển khai cho shop e-commerce Việt
              Nam:
            </p>

            <ul>
              <li>
                <strong>Tiết kiệm thời gian:</strong> 18 giờ/tuần (từ nhập đơn
                + gom báo cáo + reply review)
              </li>
              <li>
                <strong>Sai sót:</strong> Từ 8–10 lỗi/tuần → 0 lỗi
              </li>
              <li>
                <strong>Tồn kho:</strong> Hết oversell, tỉ lệ hủy đơn giảm 90%
              </li>
              <li>
                <strong>Doanh thu:</strong> Tăng 23% nhờ 2 nhân viên nhập tay
                chuyển sang chăm khách
              </li>
              <li>
                <strong>ROI:</strong> Hoàn vốn sau 5 tháng với gói Growth 28
                triệu đồng
              </li>
            </ul>

            <h2>Chi phí triển khai</h2>

            <p>
              Gói <strong>Growth</strong> (phổ biến nhất cho shop Shopee): 20–35
              triệu đồng, bao gồm 3–5 workflows, triển khai trong 3–4 tuần.
              Chi phí vận hành hàng tháng: ~125.000 đ (VPS cho n8n).
            </p>

            <p>
              So sánh: 2 nhân viên nhập tay = 240 triệu đ/năm. Gói Growth = 28
              triệu một lần + 1.5 triệu/năm VPS. Tiết kiệm hơn <strong>200
              triệu đ/năm</strong>.
            </p>

            <p>
              Nếu bạn muốn tự làm thay vì thuê, đọc bài{" "}
              <a href="/tu-lam" className="text-primary hover:text-primary-dark">
                Tự làm automation — có nên không?
              </a>{" "}
              để đánh giá trade-off.
            </p>

            <h2>Bước tiếp theo</h2>

            <p>
              Nếu shop bạn đang mất 3–5 giờ mỗi ngày cho việc nhập đơn, cập
              nhật tồn kho, reply review — bạn đang mất tiền mỗi ngày. AutoFlow
              giúp bạn tự động hóa toàn bộ trong 3–4 tuần, với giá rẻ hơn 1
              tháng lương nhân viên.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-light/50 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Muốn tự động hóa Shopee cho shop của bạn?
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Audit miễn phí 30 phút — mình phân tích quy trình shop bạn và chỉ
              ra workflow nào nên làm trước.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Audit shop Shopee miễn phí
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 8h6M8 5l3 3-3 3" />
              </svg>
            </a>
          </div>

          {/* Related */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
              Bài viết liên quan
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/dich-vu/e-commerce"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Dịch vụ
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Tự động hóa E-commerce
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  5 workflows cho shop Shopee, Tiki, TikTok Shop
                </p>
              </a>
              <a
                href="/tu-lam"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-amber-600 font-semibold">
                  Tự làm
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Tự làm automation — có nên không?
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  So sánh trung thực DIY vs thuê chuyên gia
                </p>
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
