import type { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import FAQ from "@/components/blog/FAQ";

export const metadata: Metadata = {
  title: "Cách Tự Động Nhập Đơn Shopee Vào MISA — Tiết Kiệm 4h/Ngày",
  description:
    "Hướng dẫn chi tiết cách tự động đồng bộ đơn hàng Shopee, TikTok Shop vào phần mềm kế toán MISA. Không cần code, setup 2 giờ, tiết kiệm 4 giờ nhập tay mỗi ngày.",
  keywords: [
    "tự động nhập đơn shopee misa",
    "đồng bộ shopee misa",
    "tích hợp shopee misa tự động",
    "nhập đơn shopee tự động",
    "shopee misa automation",
    "cách nhập đơn shopee vào misa",
    "tự động hóa shopee",
    "n8n shopee misa",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề: 4 giờ nhập tay mỗi ngày", level: 2 },
  { id: "chi-phi-an", text: "Chi phí ẩn của việc nhập tay", level: 2 },
  {
    id: "giai-phap",
    text: "Giải pháp: Workflow tự động Shopee → MISA",
    level: 2,
  },
  { id: "cach-hoat-dong", text: "Cách workflow hoạt động (4 bước)", level: 2 },
  { id: "truoc-sau", text: "Trước vs Sau khi tự động hóa", level: 2 },
  { id: "bat-dau", text: "Bắt đầu trong 2 giờ", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function TuDongNhapDonShopeeMisaBlog() {
  return (
    <BlogLayout
      slug="tu-dong-nhap-don-shopee-misa"
      title={
        <>
          Cách Tự Động Nhập Đơn Shopee Vào MISA —{" "}
          <span className="gradient-text">Tiết Kiệm 4h/Ngày</span>
        </>
      }
      description="Nếu shop bạn đang bán trên Shopee, TikTok Shop, Lazada — rồi cuối ngày phải mở MISA ra nhập từng đơn bằng tay... bài này chỉ ra cách tự động hóa toàn bộ quy trình. Không cần code, setup 2 giờ, tiết kiệm 4 giờ nhập tay mỗi ngày."
      breadcrumbLabel="E-commerce"
      badges={[
        { text: "E-commerce", color: "orange" },
        { text: "Shopee · MISA", color: "blue" },
      ]}
      readTime="8 phút đọc"
      tocItems={tocItems}
      date="2026-04-14"
    >
      {/* Section 1: Vấn đề */}
      <h2 id="van-de">Vấn đề: 4 giờ nhập tay mỗi ngày</h2>

      <CalloutBox type="warning" title="Bạn có đang gặp vấn đề này?">
        Nếu shop bạn đang bán trên Shopee, TikTok Shop, Lazada — rồi cuối ngày
        phải mở MISA ra nhập từng đơn bằng tay... bạn không phải người duy nhất.
      </CalloutBox>

      <p>Quy trình phổ biến nhất của shop e-commerce VN hiện tại:</p>

      <ol>
        <li>Mở Shopee Seller Center → export danh sách đơn hàng</li>
        <li>Mở MISA → tạo phiếu bán hàng cho từng đơn</li>
        <li>Copy mã đơn, tên khách, số tiền, địa chỉ</li>
        <li>Paste vào MISA, chọn kho, chọn phương thức thanh toán</li>
        <li>Lặp lại cho Lazada, TikTok Shop</li>
      </ol>

      <p>
        Một shop trung bình 50-100 đơn/ngày mất 4-5 giờ cho quy trình này. Shop
        lớn 200+ đơn cần 2-3 nhân viên full-time chỉ để nhập đơn.
      </p>

      {/* Section 2: Chi phí ẩn */}
      <h2 id="chi-phi-an">Chi phí ẩn của việc nhập tay</h2>

      <StatCard
        stats={[
          {
            value: "264 triệu đ",
            label: "chi phí nhân sự/năm",
            sub: "Lương 11 triệu x 2 người x 12 tháng",
            color: "text-red-500",
          },
          {
            value: "8–10 lỗi",
            label: "sai sót mỗi tuần",
            sub: "Sai tồn kho, sai doanh thu, sai báo cáo thuế",
            color: "text-amber-500",
          },
          {
            value: "67%",
            label: "lead bị mất",
            sub: "Vì admin bận nhập đơn, không reply inbox kịp",
            color: "text-red-500",
          },
        ]}
      />

      <p>
        Nhập tay không chỉ tốn thời gian — nó tạo ra lỗi có hệ thống. Sai 1 số
        trên MISA = sai báo cáo thuế cuối quý. Oversell vì tồn kho không đồng
        bộ = hủy đơn + đánh giá 1 sao.
      </p>

      {/* Section 3: Giải pháp */}
      <h2 id="giai-phap">Giải pháp: Workflow tự động Shopee → MISA</h2>

      <WorkflowFlow
        accentColor="#F97316"
        steps={[
          {
            icon: <span className="text-lg">🛒</span>,
            label: "Đơn mới trên Shopee",
            sub: "Webhook trigger",
          },
          {
            icon: <span className="text-lg">⚡</span>,
            label: "Map dữ liệu tự động",
            sub: "Chuẩn hóa mã đơn, SKU",
          },
          {
            icon: <span className="text-lg">📄</span>,
            label: "Tạo phiếu bán trên MISA",
            sub: "Tự động < 5 giây",
          },
          {
            icon: <span className="text-lg">📦</span>,
            label: "Cập nhật tồn kho",
            sub: "Đồng bộ real-time",
          },
        ]}
      />

      <p>Thay vì nhập tay, workflow tự động chạy 24/7:</p>

      <ul>
        <li>
          Shopee có đơn mới → webhook gửi data về server
        </li>
        <li>
          Server map tự động: mã đơn, tên khách, sản phẩm, số tiền
        </li>
        <li>Tạo phiếu bán hàng trên MISA qua API</li>
        <li>Cập nhật tồn kho trên tất cả sàn đồng thời</li>
      </ul>

      <p>
        Từ 4 giờ nhập tay → 5 giây tự động. Từ 8 lỗi/tuần → 0 lỗi.
      </p>

      {/* Section 4: Cách hoạt động */}
      <h2 id="cach-hoat-dong">Cách workflow hoạt động (4 bước)</h2>

      <StepList
        steps={[
          {
            title: "Bước 1: Kết nối Shopee API",
            desc: "AutoFlow kết nối với Shopee Seller Center qua API chính thức. Không cần cài app lạ, không ảnh hưởng tài khoản.",
          },
          {
            title: "Bước 2: Map dữ liệu sang MISA",
            desc: "Mỗi field trên Shopee (mã đơn, tên khách, sản phẩm, giá) được map tự động sang đúng field trên MISA. Setup 1 lần, chạy mãi mãi.",
          },
          {
            title: "Bước 3: Tự động tạo phiếu bán hàng",
            desc: "Đơn mới → phiếu bán tạo tự động trên MISA trong 5 giây. Bao gồm VAT, chiết khấu, phí vận chuyển — tất cả tính đúng.",
          },
          {
            title: "Bước 4: Đồng bộ tồn kho đa kênh",
            desc: "Bán trên Shopee → tồn kho update đồng thời trên Lazada, TikTok Shop, KiotViet. Không bao giờ oversell.",
          },
        ]}
      />

      {/* Section 5: Trước vs Sau */}
      <h2 id="truoc-sau">Trước vs Sau khi tự động hóa</h2>

      <BeforeAfter
        before={{
          title: "Trước — Nhập tay 100%",
          items: [
            "Nhập 50-100 đơn bằng tay mỗi ngày",
            "Sai tồn kho 8-10 lần/tuần",
            "2 nhân viên full-time chỉ để nhập đơn",
            "Báo cáo cuối tháng mất 3 ngày gom data",
            "Lead inbox chờ 6-12 giờ mới reply",
          ],
        }}
        after={{
          title: "Sau — Tự động 100%",
          items: [
            "Tất cả đơn tự động vào MISA trong 5 giây",
            "0 lỗi tồn kho — đồng bộ real-time",
            "2 nhân viên chuyển sang chăm khách",
            "Báo cáo tự động mỗi sáng thứ 2",
            "Auto-reply inbox trong 30 giây",
          ],
        }}
      />

      {/* Section 6: Bắt đầu */}
      <h2 id="bat-dau">Bắt đầu trong 2 giờ</h2>

      <CalloutBox type="success" title="Setup nhanh — thấy kết quả ngay">
        <p className="mb-3">
          AutoFlow setup workflow Shopee → MISA cho shop bạn trong 2 giờ. Bạn chỉ
          cần cung cấp:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Tài khoản Shopee Seller Center (quyền API)</li>
          <li>Tài khoản MISA (quyền API)</li>
          <li>Danh sách sản phẩm (mapping mã SKU)</li>
        </ul>
        <p className="mt-3">
          AutoFlow lo phần còn lại. Thấy kết quả ngay từ đơn đầu tiên.
        </p>
      </CalloutBox>

      <p>
        <a
          href="/audit"
          className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
        >
          Nhận audit miễn phí cho shop →
        </a>
      </p>

      <p>
        Xem thêm:{" "}
        <a href="/dich-vu/e-commerce">
          Chi tiết dịch vụ tự động hóa e-commerce
        </a>{" "}
        |{" "}
        <a href="/bang-gia">Bảng giá dịch vụ</a>
      </p>

      {/* Section 7: FAQ */}
      <h2 id="faq">Câu hỏi thường gặp</h2>

      <FAQ
        items={[
          {
            q: "Có hỗ trợ TikTok Shop và Lazada không?",
            a: "Có. Workflow tương tự cho tất cả sàn: TikTok Shop, Lazada, Tiki. AutoFlow setup cho từng sàn, đồng bộ về 1 MISA.",
          },
          {
            q: "Phí hàng tháng bao nhiêu?",
            a: "Chỉ phí hosting VPS (~100-200K/tháng). Không có phí subscription hay giới hạn số đơn. Hoặc chọn gói Managed Hosting từ 3 triệu/tháng — AutoFlow quản lý server cho bạn.",
          },
          {
            q: "Nếu Shopee thay đổi API thì sao?",
            a: "AutoFlow theo dõi API changes của tất cả sàn. Khi có thay đổi, AutoFlow update workflow — bạn không cần làm gì.",
          },
          {
            q: "Có ảnh hưởng đến tài khoản Shopee không?",
            a: "Không. AutoFlow sử dụng API chính thức của Shopee, tuân thủ hoàn toàn Terms of Service.",
          },
        ]}
      />
    </BlogLayout>
  );
}
