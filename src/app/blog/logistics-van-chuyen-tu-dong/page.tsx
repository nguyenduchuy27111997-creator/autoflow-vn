import type { Metadata } from "next";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import FAQ from "@/components/blog/FAQ";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Logistics & Vận Chuyển Tự Động: GHN, GHTK + n8n — Từ 500 Đơn Theo Tay Đến Zero Thủ Công",
  description:
    "Hướng dẫn tự động hóa logistics với GHN, GHTK và n8n: tạo vận đơn, theo dõi real-time, thông báo Zalo, xử lý giao thất bại, báo cáo vận chuyển hàng ngày. Tiết kiệm 60% nhân sự, >95% giao thành công lần đầu.",
  keywords: [
    "logistics tự động vietnam",
    "ghn ghtk n8n automation",
    "tự động tạo vận đơn ghn",
    "tích hợp ghtk n8n",
    "theo dõi đơn hàng tự động",
    "vận chuyển tự động n8n",
    "logistics automation vietnam",
    "giao hàng tự động zalo thông báo",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề quản lý 500 đơn thủ công", level: 2 },
  { id: "thi-truong", text: "Thị trường logistics VN & cơ hội tự động hóa", level: 2 },
  { id: "giai-phap", text: "4 workflow logistics tự động", level: 2 },
  { id: "workflow-1", text: "WF1: Tự động tạo vận đơn GHN/GHTK", level: 3 },
  { id: "workflow-2", text: "WF2: Theo dõi real-time → Zalo thông báo khách", level: 3 },
  { id: "workflow-3", text: "WF3: Giao thất bại → retry & reroute", level: 3 },
  { id: "workflow-4", text: "WF4: Báo cáo vận chuyển hàng ngày", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function LogisticsVanChuyenTuDongBlog() {
  return (
    <BlogLayout
      slug="logistics-van-chuyen-tu-dong"
      title={<>Logistics & Vận Chuyển Tự Động:{" "}<span className="gradient-text">GHN, GHTK + n8n</span> — Từ 500 Đơn Theo Tay Đến Zero Thủ Công</>}
      description="Mỗi ngày nhân viên kho mở GHN, GHTK, gõ từng địa chỉ, in từng vận đơn — 500 đơn, 3–4 giờ đồng hồ. Khách hỏi đơn đâu, ai đó phải tra thủ công. Giao thất bại, không ai biết để xử lý kịp. 4 workflow n8n kết thúc vòng lặp đó — tự động hoàn toàn, 24/7."
      breadcrumbLabel="Logistics"
      badges={[
        { text: "Logistics", color: "green" },
        { text: "GHN · GHTK · n8n", color: "blue" },
      ]}
      readTime="11 phút đọc"
      tocItems={tocItems}
      date="2026-04-01"
    >

                {/* Hook Stats */}
                <StatCard
                  stats={[
                    {
                      value: "500 đơn",
                      label: "theo tay mỗi ngày",
                      sub: "nhập địa chỉ, chọn dịch vụ, in vận đơn thủ công",
                      color: "text-red-500",
                    },
                    {
                      value: "3–4 giờ",
                      label: "nhân sự logistics/ngày",
                      sub: "chỉ để làm công việc có thể tự động hóa",
                      color: "text-amber-500",
                    },
                    {
                      value: "15–25%",
                      label: "đơn giao thất bại không xử lý kịp",
                      sub: "chờ nhân viên phát hiện và liên hệ lại",
                      color: "text-red-500",
                    },
                    {
                      value: "$52B",
                      label: "thị trường logistics VN 2024",
                      sub: "dự báo tăng lên $76B vào năm 2031",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Theo Dõi 500 Đơn Thủ Công Đang Phá Vỡ Quy Trình Của Bạn</h2>

                <p>
                  Hãy tưởng tượng buổi sáng của một nhân viên kho thương mại
                  điện tử điển hình: 7 giờ vào ca, mở GHN Seller Portal, bắt
                  đầu tạo vận đơn từng cái một. Tên khách, địa chỉ, số điện
                  thoại, loại hàng, khối lượng, dịch vụ vận chuyển. Lặp đi lặp
                  lại — 500 lần.
                </p>

                <p>
                  Đến 10 giờ, đơn buổi sáng xong. Nhưng đơn buổi chiều tiếp
                  tục về. Rồi khách hàng bắt đầu nhắn: "Đơn của em đến đâu
                  rồi?" Nhân viên CSKH mở GHN tra mã vận đơn từng cái. Mất
                  thêm 5–10 phút mỗi câu hỏi.
                </p>

                <CalloutBox type="warning" title="Vòng lặp thủ công này tốn hơn bạn nghĩ">
                  Giao thất bại lần đầu tốn chi phí giao lại hoặc hoàn hàng.
                  Không phát hiện kịp trong 24 giờ → khách hủy đơn → hàng hoàn
                  về kho → chi phí logistics x2. Với 500 đơn/ngày và tỷ lệ
                  giao thất bại 15–25%, mỗi ngày có 75–125 đơn cần xử lý gấp
                  — và không ai biết.
                </CalloutBox>

                <p>
                  Đây không phải vấn đề của riêng một doanh nghiệp. Khảo sát
                  cho thấy 68% doanh nghiệp logistics tại Việt Nam đã đầu tư
                  vào AI và tự động hóa trong 2 năm gần đây — và lý do chính
                  là để thoát khỏi đúng vòng lặp thủ công này.
                </p>

                <p>
                  Tin tốt: GHN và GHTK đều cung cấp API công khai, đầy đủ chức
                  năng — tạo vận đơn, tra cứu trạng thái, hủy đơn, tính phí.
                  n8n là lớp trung gian kết nối tất cả lại. Bạn không cần lập
                  trình — chỉ cần workflow đúng.
                </p>

                {/* Section 2: Thị trường */}
                <h2 id="thi-truong">Thị Trường Logistics Việt Nam Và Cơ Hội Tự Động Hóa</h2>

                <p>
                  Thị trường logistics Việt Nam đang tăng trưởng nhanh ở mức
                  hai con số mỗi năm: từ <strong>$52 tỷ năm 2024</strong> dự
                  báo đạt <strong>$76 tỷ vào năm 2031</strong>. Thương mại điện
                  tử bùng nổ là động lực chính — Shopee, TikTok Shop, Lazada,
                  Tiki cộng lại xử lý hàng triệu đơn mỗi ngày.
                </p>

                <StatCard
                  stats={[
                    {
                      value: "$76B",
                      label: "quy mô logistics VN năm 2031",
                      sub: "tăng từ $52B năm 2024, CAGR ~5,5%",
                      color: "text-accent",
                    },
                    {
                      value: "68%",
                      label: "doanh nghiệp đầu tư AI/automation",
                      sub: "trong 2 năm gần đây tại VN",
                      color: "text-accent",
                    },
                    {
                      value: "99%",
                      label: "tỷ lệ phân loại tự động của GHN",
                      sub: "nhờ hệ thống auto-sort tại bưu cục",
                    },
                    {
                      value: ">95%",
                      label: "tỷ lệ giao thành công lần đầu",
                      sub: "khi có hệ thống xác nhận địa chỉ trước",
                    },
                  ]}
                />

                <p>
                  GHN (Giao Hàng Nhanh) đã đạt tỷ lệ phân loại tự động 99% tại
                  các bưu cục xử lý — nghĩa là hạ tầng vận chuyển đã sẵn sàng
                  cho tự động hóa. Vấn đề còn lại nằm ở đầu người bán: quy
                  trình tạo đơn, theo dõi, xử lý ngoại lệ vẫn đang làm thủ
                  công.
                </p>

                <p>
                  Các công ty triển khai tự động hóa logistics báo cáo tiết
                  kiệm <strong>60% chi phí nhân sự vận hành</strong> và tăng
                  tỷ lệ giao thành công lần đầu lên trên 95% nhờ xác minh địa
                  chỉ tự động và thông báo khách hàng proactive. Đây là con số
                  thực tế — không phải lý thuyết.
                </p>

                <CalloutBox type="info" title="GHN & GHTK API: Công khai và đầy đủ">
                  Cả GHN lẫn GHTK đều cung cấp API REST công khai cho partner
                  và seller. GHN API v2 hỗ trợ: tạo đơn, hủy đơn, tra trạng
                  thái, tính phí vận chuyển, in nhãn. GHTK API tương tự với
                  thêm tính năng tracking webhook real-time. Đăng ký mất khoảng
                  1 ngày làm việc.
                </CalloutBox>

                {/* Section 3: Giải pháp */}
                <h2 id="giai-phap">
                  4 Workflow Logistics Tự Động Với GHN, GHTK Và n8n
                </h2>

                <p>
                  Dùng n8n làm lớp orchestration, bạn kết nối hệ thống đơn
                  hàng (Shopee, WooCommerce, Google Sheet...) với GHN/GHTK API
                  và các kênh thông báo (Zalo OA, Telegram, email) để tạo
                  pipeline logistics end-to-end. Đây là 4 workflow cốt lõi:
                </p>

                {/* WF1 */}
                <h3 id="workflow-1">
                  Workflow 1: Tự Động Tạo Vận Đơn GHN/GHTK Khi Có Đơn Mới
                </h3>

                <p>
                  Workflow quan trọng nhất — loại bỏ hoàn toàn việc nhập tay
                  từng vận đơn. Mỗi đơn hàng mới được xử lý và tạo vận đơn
                  tại GHN hoặc GHTK trong vòng dưới 10 giây.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger: đơn hàng mới xác nhận",
                      desc: "n8n lắng nghe webhook từ hệ thống đơn hàng (Shopee, WooCommerce, Google Sheet, Notion...). Khi đơn chuyển sang trạng thái 'đã xác nhận', workflow kích hoạt tức thì.",
                    },
                    {
                      title: "Validate địa chỉ và chọn đơn vị vận chuyển",
                      desc: "Kiểm tra địa chỉ giao hàng hợp lệ. Dựa trên tỉnh/thành, khối lượng, giá trị đơn và SLA — tự động chọn GHN hoặc GHTK tối ưu. Nếu địa chỉ không rõ → alert CSKH.",
                    },
                    {
                      title: "Gọi API tạo vận đơn",
                      desc: "Đẩy thông tin vào GHN API v2 (endpoint /v2/shipping-order/create) hoặc GHTK API. Nhận lại mã vận đơn, phí ship, thời gian dự kiến giao.",
                    },
                    {
                      title: "Cập nhật hệ thống đơn hàng và in nhãn",
                      desc: "Ghi mã vận đơn ngược lại vào hệ thống quản lý đơn. Gửi link in nhãn cho nhân viên kho. Log kết quả — nếu lỗi API → retry 3 lần, sau đó alert.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "Đơn xác nhận",
                      sub: "Webhook real-time",
                    },
                    {
                      icon: <span className="text-lg">🗺️</span>,
                      label: "Validate địa chỉ",
                      sub: "Chọn GHN/GHTK tối ưu",
                    },
                    {
                      icon: <span className="text-lg">🚚</span>,
                      label: "Tạo vận đơn",
                      sub: "API < 10 giây",
                    },
                    {
                      icon: <span className="text-lg">🏷️</span>,
                      label: "In nhãn + log",
                      sub: "Kho nhận link in",
                    },
                    {
                      icon: <span className="text-lg">🔔</span>,
                      label: "Alert nếu lỗi",
                      sub: "Retry 3 lần → CSKH",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Logic chọn đơn vị vận chuyển có thể phức tạp tùy nghiệp vụ:
                  GHN thường rẻ hơn cho hàng nhẹ nội thành, GHTK tốt hơn cho
                  hàng nặng tỉnh xa. n8n cho phép bạn cài điều kiện phân nhánh
                  (IF node) dựa trên bất kỳ tiêu chí nào — khối lượng, tỉnh
                  thành, giá trị COD, thậm chí tỷ lệ giao thành công lịch sử
                  theo khu vực.
                </CalloutBox>

                {/* WF2 */}
                <h3 id="workflow-2">
                  Workflow 2: Theo Dõi Vận Chuyển Real-Time → Zalo Thông Báo Khách Hàng
                </h3>

                <p>
                  Câu hỏi "đơn em đến đâu rồi?" là câu CSKH nhận nhiều nhất —
                  và hoàn toàn có thể xử lý tự động. Workflow này chủ động
                  thông báo khách hàng qua Zalo tại mỗi milestone vận chuyển,
                  trước khi họ cần hỏi.
                </p>

                <StepList
                  steps={[
                    {
                      title: "GHN/GHTK webhook kích hoạt khi trạng thái thay đổi",
                      desc: "Đăng ký webhook tracking tại GHN/GHTK. Mỗi khi trạng thái vận đơn thay đổi (đã lấy hàng, đang vận chuyển, đến bưu cục, đang giao, giao thành công/thất bại) → n8n nhận sự kiện tức thì.",
                    },
                    {
                      title: "Tra cứu thông tin khách và chọn template",
                      desc: "Từ mã vận đơn, tra cứu thông tin khách trong CRM hoặc hệ thống đơn hàng. Chọn template tin nhắn Zalo tương ứng với từng milestone. Điền thông tin động: tên khách, mã đơn, địa điểm hiện tại, thời gian dự kiến.",
                    },
                    {
                      title: "Gửi tin Zalo OA hoặc SMS backup",
                      desc: "Gọi Zalo OA API gửi tin nhắn template. Nếu khách chưa follow OA → gửi SMS backup qua Esms/Speedsms. Log trạng thái gửi.",
                    },
                    {
                      title: "Cập nhật trạng thái vào hệ thống",
                      desc: "Ghi trạng thái mới vào Google Sheet hoặc database theo dõi đơn hàng. Dashboard real-time tự cập nhật — quản lý nhìn vào bất kỳ lúc nào đều thấy đúng.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    {
                      icon: <span className="text-lg">📡</span>,
                      label: "Tracking webhook",
                      sub: "GHN/GHTK real-time",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "Tra cứu khách",
                      sub: "CRM + template",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Zalo OA → Khách",
                      sub: "Proactive notify",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "SMS backup",
                      sub: "Nếu chưa follow OA",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Cập nhật dashboard",
                      sub: "Real-time tất cả đơn",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả: giảm 70% câu hỏi CSKH về vận chuyển">
                  Chủ động thông báo trạng thái tại mỗi milestone giảm 70%
                  lượng tin nhắn "đơn tôi đâu rồi?" từ khách hàng. Đội CSKH
                  tập trung vào các vấn đề phức tạp hơn thay vì tra cứu mã
                  vận đơn suốt ngày. Review sản phẩm và tỷ lệ mua lại cũng
                  cải thiện khi khách cảm thấy được chăm sóc chủ động.
                </CalloutBox>

                {/* WF3 */}
                <h3 id="workflow-3">
                  Workflow 3: Giao Thất Bại → Tự Động Retry & Reroute
                </h3>

                <p>
                  Giao thất bại là nỗi đau lớn nhất của logistics thương mại
                  điện tử. Mỗi đơn thất bại mà không xử lý kịp trong 24 giờ
                  có thể biến thành hoàn hàng — chi phí logistics tăng gấp đôi.
                  Workflow này xử lý ngoại lệ tự động, quyết định retry hay
                  reroute dựa trên lý do thất bại.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Phát hiện giao thất bại qua webhook",
                      desc: "Khi GHN/GHTK báo trạng thái giao thất bại, n8n phân tích lý do: không có người nhận, địa chỉ sai, khách từ chối nhận, không liên lạc được. Mỗi lý do dẫn đến hành động khác nhau.",
                    },
                    {
                      title: "Lý do địa chỉ sai / không liên lạc được → CSKH alert ngay",
                      desc: "Tạo task CSKH tức thì trong hệ thống (Trello, Notion, hoặc Google Sheet). Gửi alert Telegram/Zalo cho team CSKH với đầy đủ thông tin đơn. SLA xử lý: liên hệ khách trong 1 giờ.",
                    },
                    {
                      title: "Lý do vắng mặt → tự động đặt lịch giao lại",
                      desc: "Gửi Zalo hỏi khách khung giờ thuận tiện để giao lại. Nếu khách xác nhận → gọi GHN/GHTK API đặt lại lịch giao (rebook). Nếu không phản hồi sau 4 giờ → tự động retry lần 2 ngay hôm sau.",
                    },
                    {
                      title: "Reroute nếu cần đổi đơn vị vận chuyển",
                      desc: "Nếu cùng khu vực đã thất bại 2 lần với GHN → tự động tạo vận đơn mới với GHTK (hoặc ngược lại). Log lý do đổi nhà vận chuyển để phân tích xu hướng.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    {
                      icon: <span className="text-lg">❌</span>,
                      label: "Giao thất bại",
                      sub: "Webhook cảnh báo",
                    },
                    {
                      icon: <span className="text-lg">🔎</span>,
                      label: "Phân tích lý do",
                      sub: "Địa chỉ / vắng / từ chối",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Zalo hỏi khách",
                      sub: "Lịch giao lại",
                    },
                    {
                      icon: <span className="text-lg">🔄</span>,
                      label: "Retry hoặc reroute",
                      sub: "GHN ↔ GHTK tự động",
                    },
                    {
                      icon: <span className="text-lg">🆘</span>,
                      label: "Alert CSKH",
                      sub: "Nếu cần can thiệp",
                    },
                  ]}
                />

                <CalloutBox type="warning" title="Đơn thất bại phải xử lý trong 24 giờ">
                  GHN và GHTK giữ hàng tại bưu cục tối đa 3–5 ngày sau khi
                  giao thất bại. Nếu quá hạn không xử lý → hàng tự động hoàn
                  về kho. Với 500 đơn/ngày, chỉ cần 15% thất bại là 75 đơn
                  mỗi ngày cần xử lý trong vòng 24 giờ — không thể làm tay.
                </CalloutBox>

                {/* WF4 */}
                <h3 id="workflow-4">Workflow 4: Báo Cáo Vận Chuyển Tự Động Hàng Ngày</h3>

                <p>
                  Quản lý cần biết: hôm qua bao nhiêu đơn giao thành công?
                  Bao nhiêu thất bại? Chi phí vận chuyển bao nhiêu? Đơn vị
                  nào đang vấn đề? Workflow này tổng hợp tất cả và gửi báo
                  cáo vào nhóm Zalo quản lý mỗi sáng — không cần ai làm.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger lúc 7:30 sáng mỗi ngày",
                      desc: "n8n chạy schedule trigger, kéo dữ liệu tracking từ Google Sheet hoặc database đã được cập nhật real-time bởi WF2.",
                    },
                    {
                      title: "Tính toán KPI vận chuyển",
                      desc: "Tổng đơn vận chuyển, số giao thành công, số thất bại, số đang trên đường, tỷ lệ thành công theo đơn vị (GHN vs GHTK), tổng chi phí ship, chi phí trung bình/đơn.",
                    },
                    {
                      title: "So sánh với ngày hôm qua và cùng kỳ tuần trước",
                      desc: "Tự động tính % thay đổi. Nếu tỷ lệ thất bại tăng >5% so với hôm qua → flag đỏ. Nếu chi phí ship tăng bất thường → highlight để kiểm tra.",
                    },
                    {
                      title: "Gửi báo cáo Zalo group quản lý",
                      desc: "Tóm tắt dạng text ngắn gọn gửi vào group Zalo quản lý. Báo cáo chi tiết dạng bảng lưu Google Sheet với link đính kèm. Quản lý đọc trong 30 giây mỗi sáng.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "7:30 mỗi sáng",
                      sub: "Schedule trigger",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Kéo dữ liệu",
                      sub: "Sheet/DB real-time",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Tính KPI",
                      sub: "Thành công, thất bại, phí",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Zalo group",
                      sub: "Tóm tắt + link chi tiết",
                    },
                  ]}
                />

                {/* Section 4: Trước/Sau */}
                <h2 id="truoc-sau">Trước Và Sau Khi Tự Động Hóa Logistics</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Logistics thủ công 100%",
                    items: [
                      "Nhập tay 500 vận đơn mỗi ngày — 3–4 giờ nhân sự",
                      "Khách hỏi đơn → CSKH tra thủ công từng mã",
                      "Giao thất bại phát hiện chậm, xử lý không kịp 24 giờ",
                      "Báo cáo vận chuyển mất 1–2 giờ tổng hợp cuối ngày",
                      "Không biết đơn vị nào đang có vấn đề theo khu vực",
                      "Chi phí logistics tăng vì hoàn hàng không kiểm soát",
                    ],
                  }}
                  after={{
                    title: "Sau — Logistics tự động với GHN/GHTK + n8n",
                    items: [
                      "Vận đơn tạo tự động dưới 10 giây sau khi đơn xác nhận",
                      "Khách nhận Zalo proactive mỗi milestone — 70% ít hỏi hơn",
                      "Giao thất bại → alert CSKH trong 5 phút, xử lý < 1 giờ",
                      "Báo cáo vận chuyển gửi tự động lúc 7:30 sáng mỗi ngày",
                      "Dashboard real-time theo đơn vị, khu vực, dịch vụ",
                      "Tiết kiệm 60% chi phí nhân sự logistics, tỷ lệ hoàn giảm rõ rệt",
                    ],
                  }}
                />

                {/* Section 5: So sánh */}
                <h2 id="so-sanh">
                  So Sánh Chi Tiết: Logistics Thủ Công vs Tự Động Hoá (GHN/GHTK + n8n)
                </h2>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Thủ công 100%",
                    "Tự động với n8n + GHN/GHTK",
                  ]}
                  highlightCol={2}
                  rows={[
                    [
                      "Tạo vận đơn",
                      "Nhập tay từng cái, 3–4 giờ/ngày",
                      "Tự động < 10 giây/đơn, 24/7",
                    ],
                    [
                      "Thông báo khách hàng",
                      "Không có hoặc thủ công",
                      "Zalo tự động mỗi milestone",
                    ],
                    [
                      "Xử lý giao thất bại",
                      "Phát hiện chậm 4–8 giờ",
                      "Alert trong 5 phút, SLA 1 giờ",
                    ],
                    [
                      "Tỷ lệ giao thành công lần đầu",
                      "70–85% (thiếu xác minh địa chỉ)",
                      ">95% (validate + notify trước)",
                    ],
                    [
                      "Chi phí nhân sự logistics",
                      "1–2 FTE chỉ để tạo vận đơn",
                      "Giảm 60% — redirect sang công việc giá trị cao",
                    ],
                    [
                      "Báo cáo vận chuyển",
                      "1–2 giờ tổng hợp cuối ngày",
                      "7:30 sáng tự động, 0 phút làm tay",
                    ],
                    [
                      "Hoạt động",
                      "Giờ hành chính",
                      "24/7, kể cả lễ tết",
                    ],
                    [
                      "Khả năng scale",
                      "Phải thuê thêm người khi tăng đơn",
                      "Scale vô hạn, không tăng chi phí vận hành",
                    ],
                    [
                      "Chi phí vận hành/tháng",
                      "15–30 triệu (lương nhân sự)",
                      "500k–1 triệu (server n8n)",
                    ],
                  ]}
                />

                {/* Section 6: Bắt đầu */}
                <h2 id="bat-dau">
                  Bắt Đầu Tự Động Hóa Logistics Của Bạn Như Thế Nào?
                </h2>

                <p>
                  Lộ trình triển khai thực tế cho doanh nghiệp thương mại điện
                  tử — từ chưa có gì đến vận hành ổn định trong 2–3 tuần:
                </p>

                <StepList
                  steps={[
                    {
                      title: "Ngày 1–2: Chuẩn bị API và môi trường",
                      desc: "Đăng ký GHN API tại api.ghn.vn, lấy Token và Shop ID. Đăng ký GHTK API tại docs.giaohangtietkiem.vn. Cài n8n self-hosted (VPS 1–2 USD/ngày) hoặc n8n Cloud. Cài Zalo OA nếu chưa có.",
                    },
                    {
                      title: "Ngày 3–6: Triển khai Workflow 1 — Tạo vận đơn tự động",
                      desc: "Đây là workflow có tác động cao nhất. Cần kết nối với hệ thống đơn hàng hiện tại của bạn. Test kỹ với đơn thật: kiểm tra địa chỉ nhận đúng, khối lượng đúng, dịch vụ chọn phù hợp trước khi bật live.",
                    },
                    {
                      title: "Ngày 7–9: Triển khai Workflow 2 — Theo dõi và thông báo Zalo",
                      desc: "Đăng ký webhook tracking tại GHN/GHTK. Cấu hình Zalo OA API. Viết template tin nhắn cho từng milestone. Test với đơn thật — đặt 1 đơn thử và kiểm tra toàn bộ flow thông báo.",
                    },
                    {
                      title: "Ngày 10–13: Workflow 3 — Xử lý giao thất bại",
                      desc: "Workflow phức tạp nhất do có nhiều nhánh logic (địa chỉ sai / vắng mặt / từ chối). Cần test từng nhánh. Cấu hình SLA alert cho team CSKH.",
                    },
                    {
                      title: "Ngày 14–15: Workflow 4 + giám sát và bàn giao",
                      desc: "Cài schedule báo cáo sáng. Chạy song song 2–3 ngày — vẫn làm một phần thủ công để kiểm tra chéo. Khi không thấy lỗi → chuyển sang tự động hoàn toàn.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không muốn tự triển khai? Có người làm cho bạn.">
                  <p className="mb-2">
                    Đặt lịch <strong>audit logistics miễn phí 30 phút</strong>{" "}
                    — chúng tôi phân tích quy trình vận chuyển hiện tại, số
                    đơn/ngày, đơn vị vận chuyển đang dùng, và đưa ra lộ trình
                    tự động hóa cụ thể với chi phí rõ ràng và thời gian hoàn
                    vốn.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit logistics miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 7: FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ
                  items={[
                    {
                      q: "GHN và GHTK có cung cấp API công khai không?",
                      a: "Có. GHN cung cấp REST API v2 tại api.ghn.vn, hỗ trợ đầy đủ: tạo đơn, hủy đơn, tra trạng thái, tính phí, in nhãn. GHTK cung cấp API tại docs.giaohangtietkiem.vn với tính năng tương tự và webhook tracking real-time. Cả hai đều yêu cầu đăng ký tài khoản đối tác/seller để lấy API token — thường mất 1 ngày làm việc.",
                    },
                    {
                      q: "n8n có thể kết nối với cả GHN lẫn GHTK trong cùng một workflow không?",
                      a: "Hoàn toàn có thể. n8n dùng HTTP Request node để gọi bất kỳ REST API nào. Bạn có thể tạo credential riêng cho GHN và GHTK, sau đó dùng IF node để phân nhánh: đơn nội thành → GHN, đơn tỉnh xa → GHTK. Thậm chí có thể gọi API tính phí cả hai rồi chọn cái rẻ hơn cho từng đơn.",
                    },
                    {
                      q: "Nếu GHN hoặc GHTK API bị downtime thì xử lý thế nào?",
                      a: "n8n có built-in retry logic — cấu hình retry 3 lần với interval 5 phút. Nếu vẫn thất bại → workflow gửi alert ngay cho nhân viên xử lý thủ công. Nên cài error workflow riêng để không bỏ sót đơn nào. GHN và GHTK API thường uptime >99,5%, downtime thực tế rất hiếm.",
                    },
                    {
                      q: "Tôi đang dùng Google Sheet để quản lý đơn hàng, có tích hợp được không?",
                      a: "Được. Google Sheet là trigger phổ biến nhất trong n8n — dùng Google Sheets trigger node để theo dõi sheet theo interval hoặc khi có dòng mới. Khi nhân viên thêm đơn vào Sheet → workflow tự động tạo vận đơn GHN/GHTK. Không cần hệ thống phức tạp.",
                    },
                    {
                      q: "Chi phí tổng thể để triển khai và vận hành là bao nhiêu?",
                      a: "Setup một lần: 5–10 triệu nếu tự làm, 15–25 triệu nếu thuê chuyên gia. Chi phí vận hành: VPS cho n8n khoảng 300k–700k/tháng, n8n Cloud từ $20/tháng. API GHN/GHTK không tính thêm phí ngoài phí ship bình thường. ROI thường đạt trong tháng đầu tiên với shop trên 100 đơn/ngày.",
                    },
                    {
                      q: "Có phù hợp cho shop nhỏ dưới 50 đơn/ngày không?",
                      a: "Vẫn có lợi, đặc biệt nếu chủ shop tự làm logistics. 50 đơn/ngày = 1.500 đơn/tháng, nếu mỗi đơn tốn 5 phút tạo tay = 125 giờ/tháng. Với n8n Cloud free tier (2.500 workflow executions/tháng), shop nhỏ có thể không tốn thêm phí server nào. Lợi ích WF2 (thông báo Zalo) và WF3 (xử lý thất bại) có giá trị bất kể quy mô.",
                    },
                  ]}
                />
    </BlogLayout>
  );
}
