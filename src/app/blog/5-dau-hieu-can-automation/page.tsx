import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "5 dấu hiệu doanh nghiệp bạn cần tự động hóa — ngay bây giờ | AutoFlow VN",
  description:
    "5 dấu hiệu rõ ràng cho thấy doanh nghiệp đang mất tiền vì chưa tự động hóa. Kèm giải pháp cụ thể và số liệu thực tế từ SME Việt Nam.",
};

export default function NamDauHieuCanAutomationPage() {
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
              &larr; Blog
            </a>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                Kiến thức
              </span>
              <span className="text-xs text-slate-400">7 phút đọc</span>
              <span className="text-xs text-slate-400">29/03/2026</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              5 dấu hiệu doanh nghiệp bạn cần tự động hóa — ngay bây giờ
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              5 dấu hiệu rõ ràng cho thấy doanh nghiệp đang mất tiền vì chưa tự
              động hóa. Kèm giải pháp cụ thể và số liệu thực tế từ SME Việt Nam.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>Dấu hiệu 1: Nhân viên mất &gt;2 giờ/ngày nhập liệu</h2>

            <p>
              Copy-paste đơn hàng, gõ data vào Excel, đối chiếu giữa các hệ
              thống — tất cả đều là công việc mà robot làm được nhanh hơn, chính
              xác hơn, và không bao giờ nghỉ phép.
            </p>

            <p>
              Tính nhanh: <strong>2 nhân viên</strong> chỉ để nhập liệu, mỗi
              người lương 11 triệu/tháng = <strong>264 triệu đồng/năm</strong>{" "}
              cho công việc mà một workflow automation chạy trong vài giây. Đó
              là tiền bạn đang đốt mỗi ngày.
            </p>

            <h2>Dấu hiệu 2: Sai sót lặp lại dù đã nhắc nhở</h2>

            <p>
              Con người sai sót là bình thường — tỉ lệ lỗi nhập liệu thủ công
              dao động <strong>1–3%</strong>. Nhưng automation? Tỉ lệ sai:{" "}
              <strong>0%</strong>. Không phải vì máy thông minh hơn, mà vì máy
              không mệt, không vội, không quên.
            </p>

            <p>
              Mỗi lỗi nhỏ đều có giá: gửi sai đơn = mất khách, sai số tồn kho
              = oversell, sai báo cáo = quyết định sai. Nếu bạn đã nhắc nhở
              nhiều lần mà lỗi vẫn lặp lại — vấn đề không phải con người, mà là
              quy trình chưa được tự động hóa.
            </p>

            <h2>Dấu hiệu 3: Lead mất vì không follow-up kịp</h2>

            <p>
              Khách hỏi lúc 11 giờ đêm. Sáng hôm sau bạn reply — nhưng khách
              đã mua bên khác rồi. Nghe quen không?
            </p>

            <p>
              Số liệu thực tế: <strong>67% lead bị mất</strong> vì doanh nghiệp
              reply chậm hơn 1 giờ. Với automation, tin nhắn xác nhận được gửi
              ngay lập tức — qua Zalo, email, hoặc chatbot. Khách cảm thấy được
              quan tâm, và bạn không mất deal chỉ vì… đang ngủ.
            </p>

            <h2>Dấu hiệu 4: Báo cáo cuối tháng mất nhiều ngày</h2>

            <p>
              Gom data từ 5 nguồn khác nhau: Shopee Seller Center, Google
              Sheet, MISA, Zalo OA, KiotViet. Mỗi nguồn một format, sai số là
              chuyện thường. Kết quả? Báo cáo trễ, số liệu không đáng tin, và
              quyết định kinh doanh bị chậm vì thiếu data.
            </p>

            <p>
              Automation kéo data từ tất cả nguồn, tổng hợp, và gửi báo cáo tự
              động — mỗi sáng thứ 2, hoặc real-time nếu cần. Chính xác 100%,
              tốn 0 phút thay vì 2–3 ngày.
            </p>

            <h2>Dấu hiệu 5: Thuê thêm người nhưng vẫn không đủ</h2>

            <p>
              Khi doanh nghiệp tăng trưởng, phản xạ đầu tiên thường là: thuê
              thêm người. Nhưng scaling bằng headcount có giới hạn — thêm người
              = thêm lương, thêm quản lý, thêm sai sót, thêm phức tạp.
            </p>

            <p>
              Automation thì scale vô hạn. 100 đơn hay 10.000 đơn — workflow xử
              lý như nhau, không cần thuê thêm ai. Chi phí vận hành gần như
              không đổi dù khối lượng công việc tăng gấp 10 lần.
            </p>

            <h2>Bạn thấy mấy dấu hiệu?</h2>

            <ul>
              <li>
                <strong>1–2 dấu hiệu:</strong> Cân nhắc automation cho những
                quy trình tốn thời gian nhất. Bắt đầu với 1–2 workflow đơn
                giản.
              </li>
              <li>
                <strong>3+ dấu hiệu:</strong> Doanh nghiệp bạn cần automation
                ngay. Mỗi ngày chậm trễ là mỗi ngày mất tiền, mất khách, mất
                cơ hội tăng trưởng.
              </li>
            </ul>

            <p>
              Đừng chờ đến khi &quot;đủ lớn&quot; mới tự động hóa. Những SME
              thành công nhất tại Việt Nam đã automation từ khi còn 5–10 nhân
              viên — và đó chính là lý do họ scale nhanh hơn đối thủ.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-light/50 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Muốn biết nên tự động hóa gì trước?
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Audit miễn phí 30 phút — mình phân tích quy trình doanh nghiệp
              bạn và chỉ ra đâu nên automation trước.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Audit miễn phí ngay
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
              <a
                href="/blog/chi-phi-tu-dong-hoa"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Kiến thức
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Chi phí tự động hóa — bao nhiêu là đủ?
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Phân tích chi phí thực tế cho SME Việt Nam
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
