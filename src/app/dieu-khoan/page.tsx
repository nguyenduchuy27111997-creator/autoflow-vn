import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DieuKhoanPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-3">
            Điều khoản dịch vụ
          </h1>
          <p className="text-sm text-slate-500 mb-10">
            Cập nhật lần cuối: 28/03/2026
          </p>

          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
            <h2>1. Giới thiệu</h2>
            <p>
              Điều khoản dịch vụ này (&quot;Điều khoản&quot;) quy định mối quan
              hệ giữa AutoFlow VN (&quot;chúng tôi&quot;, &quot;bên cung cấp
              dịch vụ&quot;) và khách hàng (&quot;bạn&quot;, &quot;bên sử dụng
              dịch vụ&quot;) khi sử dụng website autoflowvn.net và các dịch vụ
              tự động hóa quy trình.
            </p>

            <h2>2. Dịch vụ cung cấp</h2>
            <p>
              AutoFlow VN cung cấp dịch vụ tư vấn và triển khai tự động hóa quy
              trình cho doanh nghiệp, bao gồm:
            </p>
            <ul>
              <li>Audit và phân tích quy trình vận hành</li>
              <li>Thiết kế và triển khai workflows trên nền tảng n8n</li>
              <li>
                Tích hợp với các hệ thống: Zalo OA, MISA, KiotViet, Shopee, và
                các nền tảng khác
              </li>
              <li>Training và bàn giao tài liệu vận hành</li>
              <li>Hỗ trợ kỹ thuật và bảo trì (gói Retainer)</li>
            </ul>

            <h2>3. Thanh toán</h2>
            <ul>
              <li>
                <strong>Thanh toán 50/50:</strong> 50% trước khi bắt đầu
                project, 50% khi bàn giao hoàn tất
              </li>
              <li>
                <strong>Hình thức:</strong> Chuyển khoản ngân hàng
              </li>
              <li>
                <strong>Retainer:</strong> Thanh toán đầu mỗi tháng, commitment
                tối thiểu 3 tháng
              </li>
              <li>Giá đã bao gồm VAT (nếu có). Không có phí ẩn phát sinh</li>
            </ul>

            <h2>4. Phạm vi công việc (Scope)</h2>
            <p>
              Phạm vi công việc được định nghĩa cụ thể trong Proposal/Hợp đồng
              dịch vụ cho từng project, bao gồm:
            </p>
            <ul>
              <li>Số lượng workflows</li>
              <li>Danh sách tích hợp cụ thể</li>
              <li>Timeline triển khai</li>
              <li>Deliverables (bàn giao)</li>
              <li>Thời gian support sau bàn giao</li>
            </ul>
            <p>
              Yêu cầu ngoài phạm vi (scope creep) sẽ được quote riêng và cần sự
              đồng ý của cả hai bên trước khi triển khai.
            </p>

            <h2>5. Quyền sở hữu</h2>
            <ul>
              <li>
                <strong>Workflows và code:</strong> Sau khi bàn giao và thanh
                toán đầy đủ, tất cả workflows, code, và tài liệu thuộc sở hữu
                hoàn toàn của khách hàng
              </li>
              <li>
                <strong>Dữ liệu:</strong> Dữ liệu business của khách hàng luôn
                thuộc về khách hàng. AutoFlow không giữ lại bản sao sau khi bàn
                giao
              </li>
              <li>
                <strong>n8n server:</strong> Nếu sử dụng gói Scale
                (self-hosted), server và data hoàn toàn thuộc về khách hàng
              </li>
            </ul>

            <h2>6. Bảo mật và bảo hành</h2>
            <ul>
              <li>
                AutoFlow cam kết bảo mật thông tin doanh nghiệp của khách hàng
              </li>
              <li>Không chia sẻ thông tin với bên thứ ba</li>
              <li>Gói Scale bao gồm 30 ngày warranty sau bàn giao</li>
              <li>Gói Retainer bao gồm SLA fix lỗi trong 24h làm việc</li>
            </ul>

            <h2>7. Trách nhiệm và giới hạn</h2>
            <ul>
              <li>
                AutoFlow chịu trách nhiệm về chất lượng workflows được bàn giao
              </li>
              <li>
                AutoFlow không chịu trách nhiệm về thay đổi API từ bên thứ ba
                (Shopee, Zalo, MISA...)
              </li>
              <li>
                AutoFlow không chịu trách nhiệm về downtime của server khách
                hàng tự quản lý
              </li>
              <li>
                Trách nhiệm bồi thường tối đa không vượt quá giá trị hợp đồng
              </li>
            </ul>

            <h2>8. Hủy dịch vụ</h2>
            <ul>
              <li>
                <strong>Project:</strong> Có thể hủy trước khi bắt đầu — hoàn
                100% thanh toán đợt 1. Sau khi bắt đầu — không hoàn phí đợt 1
              </li>
              <li>
                <strong>Retainer:</strong> Hủy với 30 ngày notice. Không hoàn
                phí tháng đã thanh toán
              </li>
            </ul>

            <h2>9. Case study và testimonial</h2>
            <p>
              AutoFlow có thể sử dụng thông tin tổng quát về project (ngành
              nghề, kết quả đạt được) làm case study trên website, với điều
              kiện:
            </p>
            <ul>
              <li>Không tiết lộ tên công ty cụ thể nếu không có sự đồng ý</li>
              <li>Khách hàng có quyền yêu cầu gỡ case study bất cứ lúc nào</li>
            </ul>

            <h2>10. Luật áp dụng</h2>
            <p>
              Điều khoản này được điều chỉnh bởi luật pháp Việt Nam. Mọi tranh
              chấp sẽ được giải quyết thông qua thương lượng trước, sau đó là
              tòa án có thẩm quyền tại TP. Hồ Chí Minh.
            </p>

            <h2>11. Liên hệ</h2>
            <p>Nếu có câu hỏi về điều khoản dịch vụ, vui lòng liên hệ:</p>
            <ul>
              <li>
                <strong>Email:</strong> hello@autoflowvn.net
              </li>
              <li>
                <strong>Zalo:</strong> 0912 345 678
              </li>
              <li>
                <strong>Địa chỉ:</strong> TP. Hồ Chí Minh, Việt Nam
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
