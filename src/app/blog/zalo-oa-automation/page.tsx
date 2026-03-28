import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hướng dẫn tự động hóa Zalo OA cho doanh nghiệp — AutoFlow VN",
  description:
    "Cách tích hợp Zalo Official Account với n8n để tự động gửi tin nhắn, follow-up khách hàng, và chăm sóc sau bán hàng. Hướng dẫn chi tiết cho SME Việt Nam.",
};

export default function ZaloOAAutomationPage() {
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
              <span className="text-xs text-slate-400">8 phút đọc</span>
              <span className="text-xs text-slate-400">28/03/2026</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Hướng dẫn tự động hóa Zalo OA cho doanh nghiệp — từ A đến Z
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Zalo Official Account là kênh giao tiếp chính của SME Việt Nam.
              Nhưng hầu hết doanh nghiệp vẫn reply tin nhắn bằng tay. Bài viết
              này hướng dẫn cách tự động hóa Zalo OA bằng n8n — từ gửi tin nhắn
              chào hàng đến follow-up tự động.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>Tại sao cần tự động hóa Zalo OA?</h2>

            <p>
              Zalo có hơn 75 triệu người dùng tại Việt Nam — chiếm hơn 95% dân
              số online. Với doanh nghiệp SME, Zalo OA là kênh giao tiếp chính
              với khách hàng, thay thế email và SMS truyền thống.
            </p>

            <p>Nhưng vấn đề là:</p>

            <ul>
              <li>
                <strong>Reply thủ công:</strong> Nhân viên phải online 24/7 để
                reply tin nhắn. Khách nhắn lúc 11 giờ đêm → sáng reply thì họ
                đã mua bên đối thủ.
              </li>
              <li>
                <strong>Follow-up không đều:</strong> Khách hỏi giá nhưng chưa
                mua → không ai nhớ follow-up sau 3 ngày → lead mất.
              </li>
              <li>
                <strong>Không cá nhân hóa:</strong> Gửi tin nhắn giống hệt cho
                mọi khách → tỉ lệ đọc thấp, khách block.
              </li>
            </ul>

            <p>
              Tự động hóa Zalo OA giải quyết cả 3 vấn đề: reply ngay lập tức,
              follow-up đúng thời điểm, và cá nhân hóa theo hành vi khách hàng.
            </p>

            <h2>n8n là gì? Tại sao dùng n8n cho Zalo OA?</h2>

            <p>
              n8n là nền tảng tự động hóa workflow mã nguồn mở — giống Zapier
              nhưng mạnh hơn và miễn phí khi self-host. Ưu điểm so với Zapier
              cho thị trường Việt Nam:
            </p>

            <ul>
              <li>
                <strong>Tích hợp Zalo OA native:</strong> Zapier và Make.com
                không hỗ trợ Zalo. n8n có thể connect trực tiếp qua Zalo OA
                API.
              </li>
              <li>
                <strong>Self-host tại VN:</strong> Data khách hàng ở trên VPS
                Việt Nam, không gửi ra nước ngoài. Giải quyết nỗi lo bảo mật
                data.
              </li>
              <li>
                <strong>Không giới hạn tasks:</strong> Zapier $20/tháng và giới
                hạn 750 tasks. n8n self-host chỉ ~125.000 đ/tháng (phí VPS),
                không giới hạn.
              </li>
            </ul>

            <h2>5 workflow Zalo OA phổ biến nhất</h2>

            <h3>1. Auto-reply tin nhắn mới</h3>
            <p>
              Khách nhắn tin đến Zalo OA → n8n nhận webhook → phân loại nội dung
              (hỏi giá, hỏi sản phẩm, khiếu nại) → reply tự động theo template
              phù hợp. Nếu câu hỏi phức tạp → forward cho nhân viên qua group
              Zalo nội bộ.
            </p>

            <h3>2. Follow-up lead tự động</h3>
            <p>
              Lead mới từ Facebook/Website → lưu vào Google Sheet → Zalo OA gửi
              tin nhắn chào hàng → Nếu không reply sau 3 ngày → gửi tin nhắn
              nhắc nhở → Sau 7 ngày → gửi offer đặc biệt.
            </p>

            <h3>3. Nhắc lịch hẹn/lịch học</h3>
            <p>
              Dùng cho trung tâm đào tạo, phòng khám, salon: Zalo OA tự gửi tin
              nhắn nhắc lịch 24h trước buổi hẹn. Giảm tỉ lệ miss lịch từ 15%
              xuống 3%.
            </p>

            <h3>4. Chăm sóc sau bán hàng</h3>
            <p>
              Sau 7 ngày giao hàng → Zalo OA gửi tin nhắn khảo sát: &quot;Anh/chị
              hài lòng với sản phẩm không?&quot; → Nếu hài lòng → gợi ý sản phẩm
              liên quan → Nếu không → escalate cho CSKH.
            </p>

            <h3>5. Thông báo đơn hàng</h3>
            <p>
              Đơn hàng mới trên Shopee → n8n sync → Zalo OA gửi xác nhận cho
              khách: &quot;Đơn hàng #12345 đã được xác nhận, giao trong 2–3 ngày.&quot;
              → Khi giao hàng → gửi tracking number.
            </p>

            <h2>Kết quả thực tế</h2>

            <p>
              Dựa trên các project AutoFlow đã triển khai cho SME Việt Nam:
            </p>

            <ul>
              <li>
                <strong>Response time:</strong> Từ trung bình 2–4 giờ → dưới 30
                giây
              </li>
              <li>
                <strong>Follow-up rate:</strong> Từ 60% (thủ công) → 100% (tự
                động)
              </li>
              <li>
                <strong>Miss lịch:</strong> Giảm từ 15% → 3%
              </li>
              <li>
                <strong>Repeat purchase:</strong> Tăng 15–25% nhờ upsell
                sequence tự động
              </li>
            </ul>

            <h2>Chi phí triển khai</h2>

            <p>
              Gói Starter (1 workflow Zalo OA): 8–15 triệu đồng, triển khai
              trong 1–2 tuần. Gói Growth (3–5 workflows): 20–35 triệu đồng,
              triển khai 3–4 tuần. Chi phí vận hành: ~125.000 đ/tháng (VPS cho
              n8n).
            </p>

            <h2>Bước tiếp theo</h2>

            <p>
              Nếu doanh nghiệp bạn đang dùng Zalo OA nhưng vẫn reply thủ công —
              bạn đang mất khách mỗi ngày. AutoFlow giúp bạn tự động hóa Zalo OA
              trong 1–2 tuần, với giá phù hợp SME và data 100% trong nước.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-light/50 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Muốn tự động hóa Zalo OA cho doanh nghiệp bạn?
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Audit miễn phí 30 phút — mình phân tích Zalo OA của bạn và chỉ ra
              cụ thể workflow nào nên làm trước.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Audit Zalo OA miễn phí
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
                href="/ket-qua/e-commerce"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Case Study
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Shop thời trang — tiết kiệm 18 giờ/tuần
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Before/after chi tiết với số liệu ROI
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
