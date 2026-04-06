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
  title: "Tự Động Hóa Lead Facebook Ads Cho Bất Động Sản — Phản Hồi Trong 30 Giây",
  description:
    "Hướng dẫn tự động hóa lead Facebook Ads cho bất động sản: phản hồi trong 30 giây, lưu CRM, thông báo sale, chuỗi follow-up. Tăng 391% tỷ lệ chốt với n8n.",
  keywords: [
    "facebook ads bất động sản",
    "lead bds tự động",
    "tự động hóa lead bds",
    "n8n facebook lead ads",
    "crm bất động sản tự động",
    "facebook lead ads trigger",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề cốt lõi: tốc độ phản hồi", level: 2 },
  { id: "thong-ke", text: "Con số đáng sợ của thị trường", level: 2 },
  { id: "giai-phap", text: "4 workflow tự động hóa lead BDS", level: 2 },
  { id: "workflow-1", text: "Workflow 1: Lead → Google Sheet CRM", level: 3 },
  { id: "workflow-2", text: "Workflow 2: Thông báo sale qua Zalo", level: 3 },
  { id: "workflow-3", text: "Workflow 3: Phản hồi tự động cho khách", level: 3 },
  { id: "workflow-4", text: "Workflow 4: Chuỗi follow-up 7 ngày", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "cta-quiz", text: "Bạn đang mất bao nhiêu lead?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "n8n có node Facebook Lead Ads sẵn không hay phải tự code webhook?",
    a: "n8n có Facebook Lead Ads Trigger node tích hợp sẵn (built-in). Bạn chỉ cần kết nối tài khoản Facebook, chọn Page và Form là node tự lắng nghe lead mới — không cần viết webhook hay code thủ công.",
  },
  {
    q: "Lead giả (fake lead) chiếm bao nhiêu phần trăm khi chạy Facebook Ads BDS?",
    a: "Với targeting rộng, tỷ lệ lead giả dao động 25–40%. Giải pháp: dùng n8n để tự động chạy bước xác thực (validate số điện thoại định dạng VN, lọc email rác, kiểm tra trùng lặp trong 30 ngày) trước khi đẩy vào CRM và thông báo sale.",
  },
  {
    q: "Hệ thống này có hoạt động với lead từ Instagram Ads không?",
    a: "Có. Facebook Lead Ads Trigger của n8n xử lý cả lead từ Instagram Ads chạy qua Facebook Ads Manager — vì Instagram và Facebook dùng chung nền tảng quảng cáo và cùng một Lead Ads API.",
  },
  {
    q: "Tôi không có CRM, có thể dùng Google Sheet thay thế không?",
    a: "Hoàn toàn được. Google Sheet là điểm khởi đầu lý tưởng: miễn phí, dễ dùng, đội sale đã quen. Bạn có thể dùng Google Sheet làm CRM tạm thời, sau đó khi scale lên mới migrate sang HubSpot, Pipedrive, hay Salesforce — workflow n8n chỉ cần đổi node đích, không cần viết lại toàn bộ.",
  },
  {
    q: "Chi phí để triển khai hệ thống này khoảng bao nhiêu?",
    a: "n8n self-hosted miễn phí hoàn toàn. Google Sheet miễn phí. Zalo OA miễn phí. Chi phí chính là setup và cấu hình (thường 1–2 tuần làm việc). Nếu thuê chuyên gia, chi phí setup một lần dao động 5–15 triệu tuỳ độ phức tạp, sau đó không có chi phí vận hành thêm.",
  },
  {
    q: "Thị trường BDS Việt Nam 2026 có phù hợp để đầu tư vào automation không?",
    a: "Rất phù hợp. Thị trường đang trong chu kỳ phục hồi mạnh với dự báo tăng giá 5–8% và lượng giao dịch tăng đáng kể. Facebook vẫn chiếm hơn 70% tương tác quảng cáo BDS tại Việt Nam. Cạnh tranh cao đồng nghĩa tốc độ phản hồi trở thành lợi thế cạnh tranh quyết định — đây là thời điểm tốt nhất để đầu tư vào hệ thống tự động hóa.",
  },
];

export default function LeadFacebookAdsBDSBlog() {
  return (
    <BlogLayout
      slug="lead-facebook-ads-bds"
      title={<>Tự Động Hóa Lead Facebook Ads Cho BĐS —{" "}<span className="gradient-text">Phản Hồi Trong 30 Giây</span></>}
      description="Sale BDS Việt Nam mất trung bình 917 phút để gọi lại cho khách hàng tiềm năng. Trong khi đó, 78% người mua nhà chốt với người phản hồi đầu tiên. Đây là hệ thống 4 workflow biến mỗi lead Facebook thành cuộc gọi trong vòng 30 giây."
      breadcrumbLabel="Bất động sản"
      badges={[
        { text: "Bất động sản", color: "blue" },
        { text: "Facebook Ads · n8n", color: "purple" },
      ]}
      readTime="14 phút đọc"
      tocItems={tocItems}
      date="2026-04-01"
    >

                {/* Hook StatCard */}
                <StatCard
                  stats={[
                    {
                      value: "917'",
                      label: "thời gian phản hồi trung bình",
                      sub: "sale BDS Việt Nam (15+ tiếng!)",
                      color: "text-red-500",
                    },
                    {
                      value: "78%",
                      label: "người mua chọn ai đầu tiên",
                      sub: "người phản hồi sớm nhất thắng",
                      color: "text-amber-500",
                    },
                    {
                      value: "+391%",
                      label: "tỷ lệ chốt tăng",
                      sub: "khi phản hồi trong vòng 1 phút",
                      color: "text-accent",
                    },
                    {
                      value: "30s",
                      label: "thời gian phản hồi với n8n",
                      sub: "tự động, 24/7, không bỏ sót lead",
                      color: "text-primary",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Vấn Đề Cốt Lõi: Tốc Độ Phản Hồi</h2>

                <p>
                  Bạn đang chạy Facebook Ads cho dự án căn hộ hoặc đất nền. Lead về đều.
                  Ngân sách quảng cáo không nhỏ. Nhưng tỷ lệ chốt thì… thấp đến mức khó hiểu.
                </p>

                <p>
                  Vấn đề thường không nằm ở chất lượng lead hay giá sản phẩm.
                  Vấn đề nằm ở khoảng thời gian giữa lúc khách điền form và lúc sale gọi lại.
                </p>

                <CalloutBox type="warning" title="Nghiên cứu từ MIT nói gì?">
                  Tỷ lệ liên lạc được với lead giảm <strong>100 lần</strong> nếu bạn chờ 30 phút
                  thay vì gọi trong 5 phút đầu. Không phải 2 lần. Không phải 10 lần.{" "}
                  <strong>100 lần.</strong> Đây là con số từ nghiên cứu thực tế của MIT —
                  và phần lớn sale BDS Việt Nam đang ở mốc 917 phút.
                </CalloutBox>

                <p>
                  Hãy tưởng tượng hành trình của một lead thông thường trong team BDS chưa có automation:
                  Khách điền form lúc 10 giờ sáng. Form gửi về email manager. Manager forward cho sale.
                  Sale đang trên đường, check email lúc 11 giờ. Gọi lại lúc 11h30.
                  Khách đã nói chuyện với đối thủ lúc 10h15.
                </p>

                <p>
                  <strong>Khách không chờ. Họ điền form của bạn và form của 3–4 dự án khác trong cùng buổi sáng.</strong>{" "}
                  Ai gọi đầu tiên, người đó có cơ hội chốt.
                </p>

                {/* Section 2: Thống kê */}
                <h2 id="thong-ke">Con Số Đáng Sợ Của Thị Trường BDS 2026</h2>

                <p>
                  Thị trường bất động sản Việt Nam 2026 đang trong chu kỳ phục hồi mạnh với
                  dự báo tăng giá 5–8% và thanh khoản cải thiện rõ rệt. Điều này có nghĩa là:
                  nhiều dự án hơn, nhiều ngân sách quảng cáo hơn, và cạnh tranh gay gắt hơn bao giờ hết
                  để giành chú ý của cùng một nhóm khách hàng.
                </p>

                <StatCard
                  stats={[
                    {
                      value: "70%+",
                      label: "tương tác quảng cáo BDS qua Facebook",
                      sub: "Facebook vẫn là kênh số 1 tại VN",
                      color: "text-blue-600",
                    },
                    {
                      value: "25–40%",
                      label: "lead giả với targeting rộng",
                      sub: "lãng phí ngân sách và thời gian sale",
                      color: "text-red-500",
                    },
                    {
                      value: "100x",
                      label: "giảm tỷ lệ liên lạc",
                      sub: "nếu gọi sau 30 phút thay vì 5 phút",
                      color: "text-amber-500",
                    },
                    {
                      value: "5–8%",
                      label: "dự báo tăng giá BDS 2026",
                      sub: "chu kỳ phục hồi mạnh",
                      color: "text-accent",
                    },
                  ]}
                />

                <p>
                  Trong bối cảnh đó, tốc độ phản hồi không còn là lợi thế cạnh tranh "tốt nếu có" —
                  nó là điều kiện tối thiểu để tồn tại trong thị trường. Facebook chiếm hơn 70% tương tác
                  quảng cáo BDS tại Việt Nam, và với tỷ lệ lead giả 25–40% khi targeting rộng,
                  bạn càng cần hệ thống lọc và phản hồi thông minh hơn.
                </p>

                <CalloutBox type="info" title="n8n có node Facebook Lead Ads tích hợp sẵn">
                  n8n cung cấp{" "}
                  <strong>Facebook Lead Ads Trigger node</strong> được xây dựng sẵn (built-in) —
                  kết nối trực tiếp với Facebook Lead Ads API, không cần cấu hình webhook thủ công,
                  không cần code. Đây là nền tảng kỹ thuật cho toàn bộ 4 workflow dưới đây.
                </CalloutBox>

                {/* Section 3: 4 Workflows */}
                <h2 id="giai-phap">4 Workflow Tự Động Hóa Lead BDS Với n8n</h2>

                <p>
                  Bốn workflow này được thiết kế để hoạt động theo chuỗi: mỗi workflow xử lý một
                  giai đoạn của hành trình từ khi lead điền form đến khi sale chốt hợp đồng.
                  Bạn có thể triển khai từng cái một theo thứ tự ưu tiên.
                </p>

                {/* Workflow 1 */}
                <h3 id="workflow-1">Workflow 1: Lead Facebook → Google Sheet CRM</h3>

                <p>
                  Đây là nền tảng của toàn hệ thống. Mọi lead từ Facebook Ads được tự động
                  ghi vào Google Sheet với đầy đủ thông tin, trạng thái, và timestamp —
                  không sót một lead nào, kể cả lúc 2 giờ sáng.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Facebook Lead Ads Trigger kích hoạt",
                      desc: "Ngay khi khách submit form trên Facebook/Instagram, n8n nhận tín hiệu real-time qua node tích hợp sẵn",
                    },
                    {
                      title: "Validate và làm sạch dữ liệu",
                      desc: "Kiểm tra định dạng số điện thoại VN, lọc email rác, kiểm tra trùng lặp trong 30 ngày gần nhất",
                    },
                    {
                      title: "Phân loại lead tự động",
                      desc: "Gắn tag theo form (dự án, loại bất động sản, ngân sách), nguồn (Facebook/Instagram), và thời gian",
                    },
                    {
                      title: "Ghi vào Google Sheet CRM",
                      desc: "Tên, SĐT, email, dự án quan tâm, ngân sách, thời gian lead về, trạng thái ban đầu: 'Mới — chưa gọi'",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#1877F2"
                  steps={[
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Khách điền form",
                      sub: "Facebook / Instagram Ads",
                    },
                    {
                      icon: <span className="text-lg">⚡</span>,
                      label: "n8n nhận lead",
                      sub: "Built-in trigger node",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "Validate & lọc",
                      sub: "Lọc lead giả, trùng lặp",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Google Sheet CRM",
                      sub: "Ghi tự động, đầy đủ",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Thêm cột "Lead Score" vào Sheet: +10 điểm nếu điền email thật,
                  +20 nếu số điện thoại hợp lệ, +30 nếu điền thêm ngân sách cụ thể.
                  Sale ưu tiên gọi lead điểm cao trước — tăng hiệu suất rõ rệt.
                </CalloutBox>

                {/* Workflow 2 */}
                <h3 id="workflow-2">Workflow 2: Thông Báo Sale Qua Zalo Ngay Lập Tức</h3>

                <p>
                  Lead đã vào Sheet. Bước tiếp theo: người phù hợp phải biết ngay lập tức.
                  Không qua email (sale không check email liên tục). Không qua group chat bị chôn.
                  Thông báo Zalo — nhân viên sale Việt Nam mở Zalo nhiều hơn bất kỳ app nào.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Lead mới → trigger Workflow 2",
                      desc: "Ngay sau khi ghi vào Sheet, n8n kích hoạt chuỗi thông báo",
                    },
                    {
                      title: "Xác định sale phụ trách",
                      desc: "Phân công tự động theo dự án, theo vòng quay (round-robin), hoặc theo workload hiện tại",
                    },
                    {
                      title: "Zalo nhắn tin cho sale được phân công",
                      desc: '"Lead mới: Nguyễn Văn A - 0912xxx - quan tâm căn 2PN dự án X - ngân sách 3-4 tỷ. Gọi NGAY!"',
                    },
                    {
                      title: "Nếu sale không phản hồi sau 5 phút",
                      desc: "Tự động thông báo lên manager và chuyển lead cho sale tiếp theo trong danh sách",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#0068FF"
                  steps={[
                    {
                      icon: <span className="text-lg">✅</span>,
                      label: "Lead hợp lệ",
                      sub: "Từ Workflow 1",
                    },
                    {
                      icon: <span className="text-lg">👤</span>,
                      label: "Phân công sale",
                      sub: "Round-robin tự động",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Zalo → Sale",
                      sub: "Thông báo đầy đủ thông tin",
                    },
                    {
                      icon: <span className="text-lg">⏱️</span>,
                      label: "Đợi 5 phút",
                      sub: "Không phản hồi → escalate",
                    },
                    {
                      icon: <span className="text-lg">🔔</span>,
                      label: "Alert Manager",
                      sub: "Chuyển sale tiếp theo",
                    },
                  ]}
                />

                {/* Workflow 3 */}
                <h3 id="workflow-3">Workflow 3: Tin Nhắn Phản Hồi Tự Động Cho Khách</h3>

                <p>
                  Trong khi sale đang chuẩn bị gọi, khách không nên ngồi chờ trong im lặng.
                  Một tin nhắn phản hồi tự động được cá nhân hóa — gửi trong vòng 30 giây —
                  xác nhận rằng form của họ đã được nhận và sẽ có người liên hệ sớm.
                  Điều này giúp khách không tìm kiếm thêm lựa chọn thay thế.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Gửi SMS/Zalo xác nhận cho khách ngay lập tức",
                      desc: '"Xin chào [Tên], chúng tôi đã nhận được thông tin của bạn về [Dự án]. Sale tư vấn sẽ gọi cho bạn trong ít phút."',
                    },
                    {
                      title: "Gửi thêm thông tin dự án",
                      desc: "Link brochure PDF, video căn hộ mẫu, bảng giá — cung cấp giá trị ngay cả trước khi gọi điện",
                    },
                    {
                      title: "Đặt reminder cho khách",
                      desc: '"Sale của chúng tôi sẽ gọi bạn vào lúc [giờ]. Bạn có thể nhận cuộc gọi không?"',
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    {
                      icon: <span className="text-lg">📩</span>,
                      label: "Lead vào hệ thống",
                      sub: "< 30 giây",
                    },
                    {
                      icon: <span className="text-lg">💌</span>,
                      label: "Tin xác nhận → Khách",
                      sub: "Cá nhân hóa theo dự án",
                    },
                    {
                      icon: <span className="text-lg">📁</span>,
                      label: "Gửi tài liệu",
                      sub: "Brochure, bảng giá PDF",
                    },
                    {
                      icon: <span className="text-lg">📞</span>,
                      label: "Hẹn giờ gọi",
                      sub: "Khách chủ động chuẩn bị",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Tại sao bước này quan trọng?">
                  Khách điền form BDS thường điền 3–5 form cùng một lúc để so sánh.
                  Tin nhắn phản hồi trong 30 giây tạo ra ấn tượng chuyên nghiệp ngay lập tức,
                  và quan trọng hơn — giữ khách trong "vòng orbit" của bạn trong khi sale chuẩn bị gọi.
                </CalloutBox>

                {/* Workflow 4 */}
                <h3 id="workflow-4">Workflow 4: Chuỗi Follow-Up Tự Động 7 Ngày</h3>

                <p>
                  Không phải mọi lead đều chốt ngay trong cuộc gọi đầu tiên.
                  Thực tế, hầu hết giao dịch BDS cần 3–7 điểm chạm trước khi khách quyết định.
                  Workflow này đảm bảo không lead nào bị "lạnh" sau cuộc gọi đầu tiên.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Ngày 1: Sau cuộc gọi đầu",
                      desc: "Zalo gửi tóm tắt thông tin đã trao đổi + link đặt lịch xem thực tế",
                    },
                    {
                      title: "Ngày 3: Nội dung giá trị",
                      desc: '"5 điều cần kiểm tra khi xem căn hộ mẫu" — xây dựng tin tưởng, không chỉ bán hàng',
                    },
                    {
                      title: "Ngày 5: Social proof",
                      desc: "Gửi testimonial khách hàng đã mua, ảnh/video căn hộ đã bàn giao, tin tức dự án mới nhất",
                    },
                    {
                      title: "Ngày 7: Tạo urgency",
                      desc: '"Chỉ còn 3 căn tầng cao view sông. Giữ chỗ với 50 triệu, hoàn lại toàn bộ nếu không mua."',
                    },
                    {
                      title: "Khách phản hồi bất kỳ lúc nào",
                      desc: "Dừng chuỗi tự động, thông báo sale ngay, chuyển trạng thái CRM sang 'Đang tư vấn'",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    {
                      icon: <span className="text-lg">📞</span>,
                      label: "Cuộc gọi đầu",
                      sub: "Ngày 0",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Tóm tắt + lịch xem",
                      sub: "Ngày 1",
                    },
                    {
                      icon: <span className="text-lg">💡</span>,
                      label: "Nội dung giá trị",
                      sub: "Ngày 3",
                    },
                    {
                      icon: <span className="text-lg">⭐</span>,
                      label: "Social proof",
                      sub: "Ngày 5",
                    },
                    {
                      icon: <span className="text-lg">🔥</span>,
                      label: "Urgency",
                      sub: "Ngày 7",
                    },
                  ]}
                />

                {/* Before / After */}
                <h2 id="truoc-sau">Trước Và Sau Khi Tự Động Hóa</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Quy trình thủ công",
                    items: [
                      "Lead về email → manager forward → sale check → 917 phút trung bình",
                      "25–40% lead giả lọt qua, sale mất thời gian gọi số rác",
                      "Khách chờ im lặng, điền thêm form của đối thủ",
                      "Sale quên follow-up sau cuộc gọi đầu tiên",
                      "Không có dữ liệu: không biết lead nào đã gọi, chưa gọi, không nghe máy",
                      "Ngoài giờ hành chính = không có lead nào được xử lý",
                    ],
                  }}
                  after={{
                    title: "Sau — n8n tự động hóa",
                    items: [
                      "Lead vào → sale nhận Zalo trong 30 giây, 24/7",
                      "Lead giả lọc tự động trước khi vào CRM",
                      "Khách nhận tin xác nhận + tài liệu trong 30 giây đầu",
                      "Chuỗi follow-up 7 ngày chạy tự động, không bỏ sót",
                      "Google Sheet CRM cập nhật real-time, manager thấy toàn bộ pipeline",
                      "2 giờ sáng vẫn nhận lead và phản hồi khách như bình thường",
                    ],
                  }}
                />

                {/* Comparison Table */}
                <h2 id="so-sanh">So Sánh: Thủ Công vs Tự Động</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "Thủ công", "n8n tự động hóa"]}
                  highlightCol={2}
                  rows={[
                    [
                      "Thời gian phản hồi",
                      "917 phút (trung bình VN)",
                      "< 30 giây",
                    ],
                    [
                      "Tỷ lệ chốt",
                      "Chuẩn thị trường",
                      "+391% khi phản hồi < 1 phút",
                    ],
                    [
                      "Lọc lead giả",
                      "Thủ công, dựa vào kinh nghiệm sale",
                      "Tự động: validate SĐT, email, trùng lặp",
                    ],
                    [
                      "Thông báo sale",
                      "Email / group chat, dễ bị bỏ sót",
                      "Zalo cá nhân, kèm đầy đủ thông tin",
                    ],
                    [
                      "Phân công lead",
                      "Manager phân công thủ công",
                      "Round-robin tự động theo workload",
                    ],
                    [
                      "Follow-up",
                      "Phụ thuộc vào sale nhớ",
                      "Chuỗi 7 ngày tự động, dừng khi khách phản hồi",
                    ],
                    [
                      "Hoạt động",
                      "8:00 – 18:00 ngày làm việc",
                      "24/7, kể cả lễ, Tết",
                    ],
                    [
                      "Báo cáo & tracking",
                      "Sale tự báo cáo (thường thiếu chính xác)",
                      "Google Sheet tự động, real-time",
                    ],
                  ]}
                />

                {/* Mid-post CTA quiz */}
                <h2 id="cta-quiz">Bạn Đang Mất Bao Nhiêu Lead Vì Phản Hồi Chậm?</h2>

                <div className="not-prose bg-gradient-to-br from-primary/5 to-indigo-500/5 border border-primary/20 rounded-2xl p-6 my-8">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                    Tính nhanh mức độ thất thoát của bạn
                  </h3>
                  <p className="text-sm text-slate-600 mb-5">
                    Trả lời 3 câu hỏi để ước tính số lead và doanh thu đang bị bỏ lại:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-700 mb-2">
                        1. Team của bạn nhận được bao nhiêu lead Facebook mỗi tháng?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Dưới 50", "50–200", "200–500", "Trên 500"].map((opt) => (
                          <span
                            key={opt}
                            className="px-3 py-1.5 text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 rounded-lg cursor-default"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-700 mb-2">
                        2. Sale thường gọi lại cho khách sau bao lâu?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Dưới 5 phút", "5–30 phút", "30 phút – 2 giờ", "Hơn 2 giờ"].map((opt) => (
                          <span
                            key={opt}
                            className="px-3 py-1.5 text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 rounded-lg cursor-default"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-700 mb-2">
                        3. Hiện tại có hệ thống follow-up tự động chưa?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Có đầy đủ", "Có nhưng rời rạc", "Chưa có, làm thủ công"].map((opt) => (
                          <span
                            key={opt}
                            className="px-3 py-1.5 text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 rounded-lg cursor-default"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 mb-3">
                      Muốn biết con số thực tế của team bạn? Đặt lịch audit miễn phí — chúng tôi sẽ phân tích và đưa ra ước tính cụ thể.
                    </p>
                    <a
                      href="/audit"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-colors no-underline"
                    >
                      Tính toán mức thất thoát của tôi →
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Getting started */}
                <h2 id="bat-dau">Bắt Đầu Như Thế Nào?</h2>

                <p>
                  Không cần triển khai cả 4 workflow cùng một lúc.
                  Bắt đầu với Workflow 1 + 2 — hai workflow đó đã giải quyết được vấn đề lớn nhất:
                  tốc độ phản hồi. Phần còn lại triển khai dần khi team đã quen.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Kiểm tra Facebook Page và Form hiện tại",
                      desc: "Đảm bảo Lead Ads Form đang hoạt động và bạn có quyền truy cập tài khoản Business Manager. Đây là điều kiện tiên quyết để kết nối n8n.",
                    },
                    {
                      title: "Cài n8n và kết nối Facebook Lead Ads",
                      desc: "n8n self-hosted hoặc cloud. Kết nối với tài khoản Facebook qua OAuth — built-in node xử lý toàn bộ, không cần cấu hình webhook thủ công.",
                    },
                    {
                      title: "Thiết lập Google Sheet CRM",
                      desc: "Tạo Sheet với các cột: Tên, SĐT, Email, Dự án, Ngân sách, Nguồn, Thời gian, Lead Score, Sale phụ trách, Trạng thái. Kết nối với n8n qua Google Sheets node.",
                    },
                    {
                      title: "Kết nối Zalo Business và cấu hình thông báo",
                      desc: "Đăng ký Zalo Official Account (OA). Cấu hình n8n gửi tin nhắn qua Zalo API — sale nhận thông báo real-time ngay trên Zalo cá nhân.",
                    },
                    {
                      title: "Chạy thử với lead test",
                      desc: "Facebook cho phép tạo lead test trong Business Manager. Chạy 5–10 lead test để kiểm tra toàn bộ chuỗi trước khi bật live.",
                    },
                    {
                      title: "Monitor tuần đầu và tinh chỉnh",
                      desc: "Theo dõi tỷ lệ lead giả bị lọc, thời gian phản hồi thực tế, và phản hồi của sale về chất lượng thông báo. Điều chỉnh threshold và nội dung tin nhắn cho phù hợp.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không biết bắt đầu từ đâu?">
                  <p className="mb-3">
                    Đặt lịch{" "}
                    <strong>audit miễn phí 30 phút</strong> — chúng tôi sẽ xem xét quy trình xử lý lead
                    hiện tại của team bạn, ước tính số lead đang bị mất, và đưa ra lộ trình triển khai
                    cụ thể với timeline thực tế.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>
    </BlogLayout>
  );
}
