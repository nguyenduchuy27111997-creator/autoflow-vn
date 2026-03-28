import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cách tích hợp Shopee với MISA tự động — Hết nhập tay, hết sai sót | AutoFlow VN",
  description:
    "Hướng dẫn đồng bộ đơn hàng Shopee sang MISA tự động bằng n8n. Thay thế 3-4 giờ nhập tay/ngày, 0 lỗi, real-time sync.",
};

export default function TichHopShopeeMisaPage() {
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
              <span className="text-xs text-slate-400">29/03/2026</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Cách tích hợp Shopee với MISA tự động — Hết nhập tay, hết sai sót
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Hướng dẫn đồng bộ đơn hàng Shopee sang MISA tự động bằng n8n.
              Thay thế 3-4 giờ nhập tay/ngày, 0 lỗi, real-time sync.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>Vấn đề: Nhập đơn Shopee sang MISA bằng tay</h2>

            <p>
              Nếu bạn đang bán trên Shopee và sử dụng MISA để quản lý kế toán,
              hẳn bạn quen với quy trình này mỗi ngày:
            </p>

            <ul>
              <li>
                <strong>Copy-paste từng đơn:</strong> Mở Shopee Seller Center →
                copy thông tin đơn hàng (mã đơn, tên khách, sản phẩm, số lượng,
                giá) → paste vào MISA. Mỗi đơn mất 3–5 phút. 50 đơn/ngày =
                4+ giờ chỉ để nhập liệu.
              </li>
              <li>
                <strong>Sai số thường xuyên:</strong> Nhập nhầm mã sản phẩm, sai
                số lượng, quên ghi phí vận chuyển → báo cáo kế toán lệch →
                mất thời gian đối soát cuối tháng.
              </li>
              <li>
                <strong>Duplicate đơn hàng:</strong> Không có cách tự động kiểm
                tra đơn đã nhập hay chưa → nhập trùng → sai tồn kho →
                sai doanh thu.
              </li>
            </ul>

            <p>
              Đây không phải vấn đề nhỏ — với 50–100 đơn/ngày, bạn đang mất
              <strong> 3–4 giờ mỗi ngày</strong> chỉ để làm việc mà máy có thể
              làm trong vài giây.
            </p>

            <h2>Tại sao không dùng Shopee-MISA integration có sẵn?</h2>

            <p>
              Nhiều người hỏi: &ldquo;Shopee và MISA có tích hợp sẵn rồi, sao
              không dùng?&rdquo; Câu trả lời:
            </p>

            <ul>
              <li>
                <strong>Giới hạn chức năng:</strong> Các tích hợp có sẵn chỉ hỗ
                trợ đồng bộ cơ bản (tên đơn, giá tiền). Không hỗ trợ mapping
                danh mục sản phẩm, phí vận chuyển, chiết khấu, voucher —
                những thứ cần thiết để kế toán chính xác.
              </li>
              <li>
                <strong>Không real-time:</strong> Đồng bộ theo batch (1–2
                lần/ngày), không phải real-time. Đơn mới vào lúc 10h sáng nhưng
                3h chiều mới xuất hiện trên MISA.
              </li>
              <li>
                <strong>Thiếu custom logic:</strong> Không thể tự động phân loại
                đơn theo khu vực, tự động tính thuế theo loại sản phẩm, hoặc tự
                động tạo phiếu xuất kho.
              </li>
            </ul>

            <p>
              Kết quả: vẫn phải can thiệp thủ công, vẫn có sai sót, vẫn tốn
              thời gian.
            </p>

            <h2>Giải pháp: n8n kết nối Shopee API + MISA API</h2>

            <p>
              n8n là nền tảng tự động hóa workflow mã nguồn mở. Thay vì dùng
              tích hợp có sẵn (giới hạn), n8n kết nối trực tiếp với Shopee Open
              Platform API và MISA API để đồng bộ <strong>mọi thứ</strong> —
              theo đúng logic kinh doanh của bạn.
            </p>

            <p>Cách hoạt động ở mức cao:</p>

            <ul>
              <li>
                <strong>Shopee API:</strong> n8n gọi Shopee Open Platform để lấy
                danh sách đơn hàng mới (webhook real-time hoặc polling mỗi 5
                phút).
              </li>
              <li>
                <strong>Transform data:</strong> n8n tự động map dữ liệu từ
                format Shopee sang format MISA — bao gồm mã sản phẩm, tên
                khách hàng, địa chỉ, phí vận chuyển, chiết khấu, thuế.
              </li>
              <li>
                <strong>MISA API:</strong> n8n tạo phiếu bán hàng (hoặc phiếu
                nhập) trên MISA với đầy đủ thông tin, không cần mở MISA.
              </li>
              <li>
                <strong>Error handling:</strong> Nếu API lỗi (MISA bảo trì, Shopee
                rate limit), n8n tự động retry và gửi alert qua Zalo/Email.
              </li>
            </ul>

            <h2>Quy trình đồng bộ tự động</h2>

            <p>
              Đây là quy trình chi tiết khi có đơn hàng mới trên Shopee:
            </p>

            <ul>
              <li>
                <strong>Bước 1 — Đơn mới:</strong> Khách đặt hàng trên Shopee →
                Shopee gửi webhook đến n8n (hoặc n8n polling API mỗi 5 phút).
              </li>
              <li>
                <strong>Bước 2 — n8n nhận và xử lý:</strong> n8n đọc thông tin
                đơn hàng: mã đơn, danh sách sản phẩm, số lượng, đơn giá, phí
                ship, voucher, thuế.
              </li>
              <li>
                <strong>Bước 3 — Map data:</strong> n8n tự động chuyển đổi mã
                SKU Shopee sang mã sản phẩm MISA, tính toán giá sau chiết khấu,
                phân loại theo nhóm hàng.
              </li>
              <li>
                <strong>Bước 4 — Tạo phiếu MISA:</strong> n8n gọi MISA API để
                tạo phiếu bán hàng với đầy đủ chi tiết. Nếu khách hàng mới →
                tự động tạo khách hàng trên MISA trước.
              </li>
              <li>
                <strong>Bước 5 — Update tồn kho:</strong> Sau khi tạo phiếu,
                n8n tự động cập nhật tồn kho trên MISA và đồng bộ ngược lại
                Shopee (nếu cần).
              </li>
            </ul>

            <p>
              Toàn bộ quy trình diễn ra trong <strong>vài giây</strong>, thay
              vì 3–5 phút/đơn khi làm thủ công.
            </p>

            <h2>Kết quả thực tế</h2>

            <p>
              Dựa trên project AutoFlow đã triển khai cho shop e-commerce Việt
              Nam:
            </p>

            <ul>
              <li>
                <strong>Thời gian nhập liệu:</strong> Từ 3–4 giờ/ngày → 0
                phút. Hoàn toàn tự động.
              </li>
              <li>
                <strong>Sai sót:</strong> Từ 8–10 lỗi/tuần (sai mã SP, sai số
                lượng, duplicate) → 0 lỗi.
              </li>
              <li>
                <strong>Tốc độ đồng bộ:</strong> Từ 1–2 lần/ngày (batch) →
                real-time (đơn mới xuất hiện trên MISA trong vòng 30 giây).
              </li>
              <li>
                <strong>Đối soát cuối tháng:</strong> Từ 2–3 ngày → 0 ngày
                (vì data đã chính xác 100% từ đầu).
              </li>
            </ul>

            <h2>Chi phí</h2>

            <p>
              Gói <strong>Growth</strong> (phổ biến nhất cho tích hợp
              Shopee-MISA): 20–35 triệu đồng, bao gồm thiết kế workflow, kết
              nối API, testing, và deploy. Triển khai trong 3–4 tuần.
            </p>

            <p>
              Chi phí vận hành hàng tháng: ~125.000 đ (VPS cho n8n self-host).
              Không giới hạn số đơn hàng, không phí theo transaction.
            </p>

            <p>
              So sánh: 1 nhân viên nhập tay full-time = 120 triệu đ/năm. Gói
              Growth = 28 triệu một lần + 1.5 triệu/năm VPS. Tiết kiệm hơn{" "}
              <strong>100 triệu đ/năm</strong>.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-light/50 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Muốn đồng bộ Shopee-MISA cho shop?
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Audit miễn phí 30 phút — mình phân tích quy trình shop bạn
              và chỉ ra workflow nào nên làm trước.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Audit đồng bộ Shopee-MISA miễn phí
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
                href="/blog/tu-dong-hoa-shopee"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Hướng dẫn
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Tự động hóa đơn hàng Shopee
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  4 workflow n8n cho shop Shopee
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
