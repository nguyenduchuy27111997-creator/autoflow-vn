import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chi phí tự động hóa cho SME — Bao nhiêu là đủ? | AutoFlow VN",
  description:
    "Breakdown chi phí automation cho doanh nghiệp vừa và nhỏ VN: so sánh thuê người vs automation, 3 gói giá, ROI thực tế, chi phí ẩn cần biết.",
};

export default function ChiPhiTuDongHoaPage() {
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
              <span className="text-xs text-slate-400">8 phút đọc</span>
              <span className="text-xs text-slate-400">29/03/2026</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Chi phí tự động hóa cho SME — Bao nhiêu là đủ?
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Breakdown chi phí automation cho doanh nghiệp vừa và nhỏ VN: so
              sánh thuê người vs automation, 3 gói giá, ROI thực tế, chi phí ẩn
              cần biết.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>Chi phí thật của việc nhập tay</h2>

            <p>
              Trước khi nói về automation, hãy tính chi phí thực tế của việc vận
              hành thủ công. Hầu hết SME Việt Nam đang trả nhiều hơn họ tưởng cho
              việc nhập liệu bằng tay:
            </p>

            <ul>
              <li>
                <strong>Nhân sự:</strong> 2 nhân viên nhập liệu &times; 11 triệu
                đồng/tháng &times; 12 tháng ={" "}
                <strong>264 triệu đồng/năm</strong>. Chưa kể BHXH, thưởng,
                nghỉ phép.
              </li>
              <li>
                <strong>Lỗi sai:</strong> Trung bình 8–10 lỗi/tuần từ việc
                copy-paste thủ công. Mỗi lỗi có thể gây mất đơn, sai tồn kho,
                hoặc sai báo cáo tài chính.
              </li>
              <li>
                <strong>Chi phí cơ hội:</strong> 2 nhân viên đang mất 4–5
                giờ/ngày để nhập liệu thay vì chăm khách, bán hàng, hoặc phát
                triển kinh doanh.
              </li>
              <li>
                <strong>Chi phí ẩn:</strong> Khi nhân viên nghỉ việc, mất 1–2
                tháng đào tạo người mới. Quy trình nằm trong đầu người, không
                trong hệ thống.
              </li>
            </ul>

            <p>
              Tổng chi phí thực tế: <strong>300–350 triệu đồng/năm</strong> khi
              tính cả lỗi sai và chi phí cơ hội. Đây là con số mà hầu hết chủ
              doanh nghiệp không nhận ra.
            </p>

            <h2>Chi phí automation: 3 mức</h2>

            <p>
              AutoFlow chia automation thành 3 gói, phù hợp với quy mô và nhu
              cầu của từng doanh nghiệp:
            </p>

            <h3>Gói Starter: 8–15 triệu đồng</h3>
            <ul>
              <li>1–2 workflow cơ bản (vd: đồng bộ đơn hàng, gửi thông báo Zalo)</li>
              <li>Kết nối 2–3 hệ thống (Shopee + Google Sheet, hoặc MISA + Zalo)</li>
              <li>Triển khai trong 1–2 tuần</li>
              <li>Phù hợp: Shop nhỏ, mới bắt đầu, muốn thử automation</li>
            </ul>

            <h3>Gói Growth: 20–35 triệu đồng</h3>
            <ul>
              <li>3–5 workflow (đồng bộ đơn, tồn kho, báo cáo, reply review...)</li>
              <li>Kết nối 4–6 hệ thống (Shopee + Tiki + MISA + Zalo + Google Sheet)</li>
              <li>Có xử lý lỗi và cảnh báo tự động</li>
              <li>Triển khai trong 3–4 tuần</li>
              <li>Phù hợp: Shop trung bình, 30–100 đơn/ngày, muốn tự động hóa toàn diện</li>
            </ul>

            <h3>Gói Scale: 50–80 triệu đồng</h3>
            <ul>
              <li>6–10+ workflow phức tạp (đa kênh, AI phân tích, báo cáo nâng cao)</li>
              <li>Kết nối 7+ hệ thống, bao gồm API custom</li>
              <li>AI sentiment analysis, dự đoán tồn kho, phân loại khách hàng</li>
              <li>Triển khai trong 6–8 tuần</li>
              <li>Phù hợp: Doanh nghiệp lớn, 200+ đơn/ngày, nhiều kênh bán hàng</li>
            </ul>

            <h2>Chi phí vận hành hàng tháng</h2>

            <p>
              Một trong những ưu điểm lớn nhất của n8n self-host là chi phí vận
              hành cực thấp:
            </p>

            <ul>
              <li>
                <strong>VPS hosting:</strong> ~125.000 đồng/tháng (VPS tại Việt
                Nam, đủ mạnh cho 10–20 workflow chạy 24/7)
              </li>
              <li>
                <strong>Retainer support (tùy chọn):</strong> 8–15 triệu
                đồng/tháng — bao gồm monitor, fix lỗi, update workflow khi cần.
                Không bắt buộc, nhưng khuyên dùng cho doanh nghiệp không có
                người IT.
              </li>
              <li>
                <strong>License fee:</strong> 0 đồng. n8n là mã nguồn mở,
                self-host miễn phí. Không có phí per-task như Zapier hay
                Make.com.
              </li>
            </ul>

            <p>
              So sánh: Zapier tính $20/tháng cho 750 tasks. Nếu bạn có 50
              đơn/ngày, mỗi đơn cần 3–4 tasks = 150–200 tasks/ngày = 4.500–6.000
              tasks/tháng. Zapier sẽ tính $73–100/tháng (~1.8–2.5 triệu
              đồng/tháng). n8n self-host: 125.000 đồng/tháng, không giới hạn.
            </p>

            <h2>So sánh: Thuê người vs Automation</h2>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Tiêu chí</th>
                    <th>Thuê 2 nhân viên</th>
                    <th>Automation (n8n)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Chi phí/năm</strong></td>
                    <td>264–350 triệu đồng</td>
                    <td>20–35 triệu (một lần) + 1.5 triệu/năm VPS</td>
                  </tr>
                  <tr>
                    <td><strong>Thời gian xử lý</strong></td>
                    <td>3–5 phút/đơn hàng</td>
                    <td>Dưới 5 giây/đơn hàng</td>
                  </tr>
                  <tr>
                    <td><strong>Tỉ lệ lỗi</strong></td>
                    <td>8–10 lỗi/tuần</td>
                    <td>0 lỗi (sau khi test kỹ)</td>
                  </tr>
                  <tr>
                    <td><strong>Khả năng scale</strong></td>
                    <td>Cần tuyển thêm người</td>
                    <td>Tự động scale, không cần thêm người</td>
                  </tr>
                  <tr>
                    <td><strong>Hoạt động 24/7</strong></td>
                    <td>Không (chỉ giờ hành chính)</td>
                    <td>Có — chạy 24/7/365</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>ROI thực tế</h2>

            <p>
              Đây là 3 ví dụ từ case studies thực tế của AutoFlow:
            </p>

            <h3>1. Shop e-commerce (Shopee + Tiki)</h3>
            <ul>
              <li><strong>Gói:</strong> Growth — 28 triệu đồng</li>
              <li><strong>Tiết kiệm:</strong> 18 giờ/tuần nhập liệu, giảm 90% lỗi</li>
              <li><strong>Doanh thu tăng:</strong> 23% nhờ 2 nhân viên chuyển sang chăm khách</li>
              <li><strong>Hoàn vốn:</strong> Tháng thứ 5</li>
            </ul>

            <h3>2. Trung tâm giáo dục</h3>
            <ul>
              <li><strong>Gói:</strong> Starter — 12 triệu đồng</li>
              <li><strong>Tiết kiệm:</strong> 12 giờ/tuần tự động đăng ký học viên, gửi lịch học</li>
              <li><strong>Giảm:</strong> 95% lỗi nhập tên/SĐT học viên</li>
              <li><strong>Hoàn vốn:</strong> Tháng thứ 2</li>
            </ul>

            <h3>3. Công ty bất động sản</h3>
            <ul>
              <li><strong>Gói:</strong> Scale — 65 triệu đồng</li>
              <li><strong>Tiết kiệm:</strong> 25 giờ/tuần tự động phân loại lead, gửi email, báo cáo</li>
              <li><strong>Chuyển đổi tăng:</strong> 34% nhờ follow-up tự động trong 5 phút</li>
              <li><strong>Hoàn vốn:</strong> Tháng thứ 4</li>
            </ul>

            <p>
              Trung bình, doanh nghiệp hoàn vốn sau{" "}
              <strong>2–5 tháng</strong>, tùy gói và quy mô. Sau đó, mỗi tháng
              là lời ròng.
            </p>

            <h2>Chi phí ẩn cần biết</h2>

            <p>
              Để minh bạch, đây là những chi phí mà nhiều bên automation không
              nói trước:
            </p>

            <ul>
              <li>
                <strong>Thời gian training:</strong> Đội của bạn cần 1–2 tuần để
                làm quen với quy trình mới. Workflow tự động nhưng người vẫn cần
                biết cách đọc báo cáo, xử lý exception.
              </li>
              <li>
                <strong>Change management:</strong> Nhân viên có thể kháng cự
                thay đổi (sợ mất việc, không quen công nghệ). Cần có kế hoạch
                truyền thông nội bộ.
              </li>
              <li>
                <strong>Maintenance khi API thay đổi:</strong> Shopee, Tiki,
                MISA thay đổi API 2–3 lần/năm. Mỗi lần cần update workflow
                (1–3 giờ). Nếu không có retainer, bạn cần người IT hoặc tự làm.
              </li>
              <li>
                <strong>Edge cases:</strong> Workflow cover 95% trường hợp.
                5% còn lại (đơn đặc biệt, lỗi hệ thống) vẫn cần người xử lý
                thủ công.
              </li>
            </ul>

            <p>
              AutoFlow luôn nói trước các chi phí này trong buổi audit miễn phí
              để bạn không bị bất ngờ.
            </p>

            <h2>Kết luận</h2>

            <p>
              Automation không phải là chi phí — nó là khoản đầu tư có ROI rõ
              ràng. Với mức giá từ 8 triệu đồng (gói Starter), automation{" "}
              <strong>rẻ hơn 1 tháng lương nhân viên</strong> nhưng làm việc
              24/7, không sai sót, và scale được.
            </p>

            <p>
              Hầu hết doanh nghiệp hoàn vốn trong{" "}
              <strong>2–5 tháng</strong>. Sau đó, mỗi tháng bạn tiết kiệm được
              20–30 triệu đồng (từ giảm nhân sự nhập liệu + giảm lỗi + tăng
              năng suất).
            </p>

            <p>
              Câu hỏi không phải &ldquo;có nên làm automation không&rdquo; mà là
              &ldquo;nên bắt đầu từ workflow nào&rdquo;.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-light/50 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Muốn biết chi phí cụ thể cho doanh nghiệp bạn?
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Audit miễn phí 30 phút — mình phân tích quy trình và báo giá
              chính xác cho doanh nghiệp bạn.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/audit"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Audit miễn phí
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
              <a
                href="/bang-gia"
                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary-light font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Xem bảng giá
              </a>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
              Bài viết liên quan
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/bang-gia"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Bảng giá
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Bảng giá dịch vụ AutoFlow
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  3 gói Starter, Growth, Scale — chi tiết từng gói
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
