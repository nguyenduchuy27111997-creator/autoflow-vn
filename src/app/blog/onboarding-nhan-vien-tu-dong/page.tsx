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
  title: "Onboarding Nhân Viên Tự Động Cho SME — Từ Offer Letter Đến Ngày Đầu Tiên",
  description:
    "Hướng dẫn tự động hóa quy trình onboarding nhân viên cho SME: từ offer letter đến IT setup, thu thập hồ sơ, lịch đào tạo và check-in 30-60-90 ngày. Tiết kiệm 5 ngày/hire, tăng 16% retention.",
  keywords: [
    "onboarding tự động",
    "hr automation sme",
    "onboarding nhân viên tự động",
    "tự động hóa hr sme",
    "n8n hr automation",
    "onboarding workflow",
    "hr tự động hóa",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề: ngày đầu tiên hỗn loạn", level: 2 },
  { id: "thong-ke", text: "Con số thực tế về onboarding", level: 2 },
  { id: "giai-phap", text: "4 workflow onboarding tự động", level: 2 },
  { id: "workflow-1", text: "Workflow 1: Offer letter → Welcome email → IT setup", level: 3 },
  { id: "workflow-2", text: "Workflow 2: Thu thập hồ sơ và giấy tờ tự động", level: 3 },
  { id: "workflow-3", text: "Workflow 3: Lịch đào tạo tự động", level: 3 },
  { id: "workflow-4", text: "Workflow 4: Check-in 30-60-90 ngày", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi có onboarding tự động", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động hóa", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Triển khai onboarding tự động từng bước", level: 2 },
];

const faqItems = [
  {
    q: "SME bao nhiêu nhân viên thì nên tự động hóa onboarding?",
    a: "Ngay khi bạn tuyển hơn 5–10 người mỗi năm, chi phí và sự hỗn loạn của onboarding thủ công đã đủ lớn để đáng đầu tư vào tự động hóa. Với tốc độ tuyển dụng đó, mỗi quy trình onboarding thủ công tốn trung bình 46.4% thời gian của HR cho 1 tuần/người — nghĩa là khi tuyển 10 người, HR mất 10 tuần chỉ để xử lý giấy tờ và điều phối. Tự động hóa giải phóng thời gian đó để HR tập trung vào văn hóa và phát triển con người.",
  },
  {
    q: "Onboarding tự động có làm mất đi cảm giác cá nhân không?",
    a: "Hoàn toàn ngược lại. Tự động hóa xử lý phần hành chính (giấy tờ, tài khoản IT, lịch họp) để HR có nhiều thời gian hơn cho phần con người (gặp mặt, mentor, văn hóa). Nhân viên mới nhận được email welcome được cá nhân hóa theo tên, phòng ban, và vị trí — không phải email template chung chung. Và quan trọng hơn: mọi việc diễn ra đúng giờ, không ai bị bỏ quên, không ai phải chờ tài khoản email 3 ngày mới được setup.",
  },
  {
    q: "Chi phí triển khai onboarding tự động cho SME khoảng bao nhiêu?",
    a: "Chi phí tùy thuộc vào quy mô và stack hiện tại. Phương án cơ bản nhất: n8n self-hosted (miễn phí) + Google Workspace (đã có) + một số Google Form cho thu thập hồ sơ — chi phí setup 1 lần khoảng 5–15 triệu VND. Với tốc độ tuyển 10 người/năm và chi phí onboarding thủ công $4,000–7,000/người, chỉ cần tiết kiệm được 10–15% chi phí mỗi hire là đã hoàn vốn trong năm đầu. Chưa kể đến 16% improvement về retention — giữ được 1 nhân viên tốt đã tiết kiệm hơn toàn bộ chi phí hệ thống.",
  },
  {
    q: "Check-in 30-60-90 ngày tự động khác gì so với HR tự nhớ làm?",
    a: "Sự khác biệt cốt lõi là tính nhất quán. Khi HR nhớ, check-in xảy ra khi HR không bận — nghĩa là đôi khi sẽ bị trễ 1–2 tuần, đôi khi bị bỏ qua hoàn toàn khi công ty đang trong mùa bận. Workflow tự động kích hoạt chính xác vào ngày thứ 30, 60, 90 với survey phù hợp từng giai đoạn: ngày 30 hỏi về onboarding experience, ngày 60 hỏi về role clarity và team dynamics, ngày 90 hỏi về career development. Kết quả được tổng hợp tự động và alert HR nếu có điểm thấp — giúp phát hiện nhân viên có nguy cơ nghỉ sớm trước khi họ quyết định.",
  },
  {
    q: "Quy trình IT setup có thể tự động hóa hoàn toàn không?",
    a: "Phần lớn có thể tự động hóa: tạo tài khoản email, cấp quyền truy cập vào các tool (Slack, Google Drive, Notion, Jira), gửi hướng dẫn cài đặt, và thậm chí khởi tạo provisioning request với IT team. Phần không thể hoàn toàn tự động là cấp phát thiết bị vật lý — nhưng workflow có thể tự động tạo ticket request với IT department ngay khi offer được chấp nhận, đảm bảo laptop sẵn sàng đúng ngày nhân viên vào làm thay vì phải chờ 3–5 ngày.",
  },
  {
    q: "Nếu nhân viên không submit giấy tờ đúng hạn thì sao?",
    a: "Workflow tự động gửi reminder theo lịch: nhắc nhở nhẹ nhàng sau 3 ngày, nhắc nhở khẩn cấp sau 5 ngày, và escalate lên HR/manager sau 7 ngày. Toàn bộ quá trình được log lại — HR luôn biết ai đã submit, ai còn thiếu gì, mà không cần check thủ công từng người. Đây là một trong những điểm đau lớn nhất của onboarding thủ công: HR phải nhắn tin từng người hỏi giấy tờ, và không bao giờ có cái nhìn tổng thể về tình trạng.",
  },
];

export default function OnboardingNhanVienTuDongBlog() {
  return (
    <BlogLayout
      slug="onboarding-nhan-vien-tu-dong"
      title={<>Onboarding Nhân Viên Tự Động Cho SME —{" "}<span className="gradient-text">Từ Offer Letter Đến Ngày Đầu Tiên</span></>}
      description="Chi phí onboarding mỗi nhân viên từ $4,000 đến $7,000. 58% HR vẫn xử lý thủ công. 46.4% mất cả tuần làm việc chỉ để onboard một người. Đây là hệ thống 4 workflow biến quy trình hỗn loạn thành trải nghiệm nhất quán, tiết kiệm 5 ngày và tăng 16% tỷ lệ giữ chân."
      breadcrumbLabel="HR"
      badges={[
        { text: "HR Automation", color: "blue" },
        { text: "SME", color: "emerald" },
      ]}
      readTime="14 phút đọc"
      tocItems={tocItems}
      date="2026-04-01"
    >

                {/* Hook StatCard */}
                <StatCard
                  stats={[
                    {
                      value: "$4–7K",
                      label: "chi phí onboarding mỗi nhân viên mới",
                      sub: "phần lớn là thời gian HR xử lý thủ công",
                      color: "text-red-500",
                    },
                    {
                      value: "58%",
                      label: "HR vẫn xử lý paperwork thủ công",
                      sub: "nguồn sai sót và chậm trễ lớn nhất",
                      color: "text-amber-500",
                    },
                    {
                      value: "+16%",
                      label: "tỷ lệ giữ chân tăng khi onboarding tốt",
                      sub: "giữ người tốt hơn tuyển người mới",
                      color: "text-primary",
                    },
                    {
                      value: "+65%",
                      label: "năng suất tăng khi onboarding chuẩn hóa",
                      sub: "nhân viên vào guồng nhanh hơn đáng kể",
                      color: "text-accent",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Vấn Đề: Ngày Đầu Tiên Hỗn Loạn</h2>

                <p>
                  Bạn vừa tuyển được ứng viên tốt sau 2 tháng tìm kiếm. Offer được chấp nhận.
                  Ngày vào làm đã chốt. Và rồi — ngày đầu tiên diễn ra như thế nào trong thực tế
                  của hầu hết SME Việt Nam?
                </p>

                <CalloutBox type="warning" title="Kịch bản ngày đầu tiên điển hình không có onboarding tự động">
                  Nhân viên mới đến văn phòng lúc 9 giờ. Lễ tân không biết ai phụ trách, gọi cho HR.
                  HR đang trong cuộc họp, nhờ manager phòng ban tiếp nhận. Manager bận, chỉ chỗ ngồi
                  rồi bảo tự explore. Laptop chưa được setup. Tài khoản email chưa có. Nhân viên ngồi
                  xem điện thoại 2 tiếng đầu. Buổi chiều IT mới setup xong. Hôm sau mới nhận được
                  danh sách tool cần cài. Tuần sau mới có lịch đào tạo.{" "}
                  <strong>Ấn tượng đầu tiên đã bị phá vỡ — và cùng với đó là kỳ vọng ban đầu của nhân viên.</strong>
                </CalloutBox>

                <p>
                  Đây không phải ngoại lệ — đây là quy tắc. Không phải vì HR lười hay công ty không quan tâm,
                  mà vì onboarding là tập hợp của hàng chục tác vụ nhỏ cần điều phối đồng thời giữa
                  nhiều bộ phận: HR, IT, manager, phòng ban liên quan. Không có hệ thống, tất cả
                  đều phụ thuộc vào ai đó nhớ làm đúng lúc đúng việc.
                </p>

                <p>
                  Vấn đề không chỉ dừng lại ở ấn tượng xấu. Nghiên cứu của SHRM cho thấy
                  nhân viên có trải nghiệm onboarding kém có khả năng nghỉ việc trong 6 tháng đầu
                  cao hơn 50%. Với chi phí thay thế một nhân viên từ 50% đến 200% lương năm,
                  đây là bài toán kinh doanh nghiêm túc — không chỉ là vấn đề quy trình HR.
                </p>

                <p>
                  Và với SME, vấn đề còn trầm trọng hơn: HR team mỏng, không có chuyên gia
                  onboarding riêng, và mỗi lần tuyển mới là phải "reinvent the wheel" vì
                  không có quy trình chuẩn hóa. Tự động hóa không chỉ tiết kiệm thời gian —
                  nó tạo ra tính nhất quán mà team HR nhỏ không thể duy trì bằng sức người.
                </p>

                {/* Section 2: Thống kê */}
                <h2 id="thong-ke">Con Số Thực Tế Về Onboarding</h2>

                <p>
                  Trước khi đi vào giải pháp, hãy nhìn vào quy mô của vấn đề.
                  Những con số dưới đây phản ánh thực trạng ngành HR toàn cầu —
                  và SME Việt Nam không phải ngoại lệ.
                </p>

                <StatCard
                  stats={[
                    {
                      value: "46.4%",
                      label: "HR mất 1 tuần làm việc để onboard 1 người",
                      sub: "tuyển 10 người = 10 tuần chỉ cho giấy tờ",
                      color: "text-red-600",
                    },
                    {
                      value: "82%",
                      label: "retention tốt hơn với onboarding chuẩn",
                      sub: "Brandon Hall Group Research",
                      color: "text-emerald-600",
                    },
                    {
                      value: "45%",
                      label: "HR đang dùng AI/automation trong công việc",
                      sub: "xu hướng tăng nhanh trong 2 năm gần đây",
                      color: "text-blue-600",
                    },
                    {
                      value: "5 ngày",
                      label: "thời gian onboarding tiết kiệm được nhờ tự động hóa",
                      sub: "trên mỗi nhân viên mới được onboard",
                      color: "text-violet-600",
                    },
                  ]}
                />

                <p>
                  Con số 82% retention improvement nghe có vẻ khó tin — nhưng logic đằng sau
                  rất rõ ràng. Khi nhân viên mới có trải nghiệm onboarding tốt: họ hiểu rõ vai trò,
                  có công cụ để làm việc ngay từ ngày đầu, cảm thấy được quan tâm và chuẩn bị kỹ.
                  Tất cả những điều này tạo ra kết nối cảm xúc với công ty sớm hơn —
                  và nhân viên gắn kết cảm xúc với công ty ít có khả năng rời đi sau 3–6 tháng.
                </p>

                <CalloutBox type="info" title="Tại sao 58% HR vẫn làm thủ công dù biết có vấn đề?">
                  Không phải vì họ không muốn tự động hóa — mà vì họ không biết bắt đầu từ đâu.
                  Nhiều giải pháp HR enterprise quá phức tạp và đắt tiền cho SME.
                  n8n giải quyết vấn đề này: bạn tự build workflow vừa đủ với stack
                  hiện có (Google Workspace, Slack, Zalo), không cần mua thêm phần mềm HR đắt tiền.
                </CalloutBox>

                {/* Section 3: 4 Workflows */}
                <h2 id="giai-phap">4 Workflow Onboarding Tự Động Cho SME</h2>

                <p>
                  Bốn workflow này bao phủ toàn bộ hành trình onboarding — từ khoảnh khắc
                  offer được chấp nhận đến 90 ngày sau khi nhân viên vào làm. Mỗi workflow
                  giải quyết một điểm đau cụ thể. Bạn có thể triển khai theo thứ tự
                  hoặc bắt đầu với workflow phù hợp nhất với vấn đề lớn nhất hiện tại.
                </p>

                {/* Workflow 1 */}
                <h3 id="workflow-1">Workflow 1: Offer Letter → Welcome Email → IT Setup</h3>

                <p>
                  Khoảng cách từ lúc offer được chấp nhận đến ngày đầu tiên thường là 2–4 tuần.
                  Đây là cửa sổ vàng để chuẩn bị mọi thứ — nhưng cũng là nơi hầu hết SME
                  lãng phí bằng cách không làm gì cho đến 1 ngày trước. Workflow này
                  biến khoảng thời gian đó thành chuỗi action tự động và có hệ thống.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Offer chấp nhận → trigger toàn bộ chuỗi",
                      desc: "Khi HR đánh dấu offer là 'Accepted' trong hệ thống (Google Sheet, ATS, hay bất kỳ tool nào), n8n tự động kích hoạt toàn bộ onboarding pipeline — không cần ai nhớ làm bước tiếp theo",
                    },
                    {
                      title: "Email welcome được cá nhân hóa gửi ngay lập tức",
                      desc: "Email tự động với tên nhân viên, tên phòng ban, tên manager trực tiếp, ngày vào làm, địa chỉ văn phòng, và checklist chuẩn bị — gửi trong vòng vài phút sau khi offer được xác nhận",
                    },
                    {
                      title: "IT ticket được tạo tự động",
                      desc: "Tạo ticket với IT team: yêu cầu laptop theo spec phù hợp vị trí, setup tài khoản email theo format chuẩn, danh sách phần mềm cần cài theo role, và badge/access card — tất cả trước ngày nhân viên vào làm 5 ngày làm việc",
                    },
                    {
                      title: "Tài khoản các tool được provision tự động",
                      desc: "Tự động tạo tài khoản Slack, thêm vào đúng channel theo phòng ban, cấp quyền Google Drive/Notion theo role, và gửi hướng dẫn đăng nhập qua email cá nhân của nhân viên trước ngày vào làm",
                    },
                    {
                      title: "Thông báo cho manager và team",
                      desc: "Gửi Slack message cho manager: tên nhân viên mới, ngày vào làm, yêu cầu setup meeting 1:1 tuần đầu tiên. Gửi thông báo cho team để họ chuẩn bị tiếp nhận — không ai bị bất ngờ",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#2563EB"
                  steps={[
                    {
                      icon: <span className="text-lg">✅</span>,
                      label: "Offer chấp nhận",
                      sub: "Trigger tự động ngay lập tức",
                    },
                    {
                      icon: <span className="text-lg">💌</span>,
                      label: "Welcome email",
                      sub: "Cá nhân hóa theo role",
                    },
                    {
                      icon: <span className="text-lg">💻</span>,
                      label: "IT ticket tạo",
                      sub: "Laptop + tài khoản + access",
                    },
                    {
                      icon: <span className="text-lg">🔑</span>,
                      label: "Provision tool",
                      sub: "Slack, Drive, Notion...",
                    },
                    {
                      icon: <span className="text-lg">📣</span>,
                      label: "Notify team",
                      sub: "Manager và đồng nghiệp sẵn sàng",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Welcome email đầu tiên quan trọng hơn bạn nghĩ. Nghiên cứu cho thấy nhân viên
                  quyết định có gắn bó lâu dài với công ty hay không trong 45 ngày đầu tiên.
                  Một email cá nhân hóa, được gửi đúng lúc, với thông tin đầy đủ tạo ra
                  ấn tượng chuyên nghiệp ngay từ trước ngày đầu tiên — khi nhân viên còn
                  đang tự hỏi mình có chọn đúng nơi không.
                </CalloutBox>

                {/* Workflow 2 */}
                <h3 id="workflow-2">Workflow 2: Thu Thập Hồ Sơ Và Giấy Tờ Tự Động</h3>

                <p>
                  Thu thập giấy tờ onboarding là một trong những tác vụ tốn thời gian và
                  dễ sai sót nhất của HR. Nhân viên mới cần nộp CMND, bằng cấp, hợp đồng ký,
                  thông tin tài khoản ngân hàng, và hàng chục form khác — tất cả trước ngày
                  vào làm. Workflow này biến quá trình đó từ "HR nhắn tin từng người"
                  thành hệ thống tự động theo dõi từng bước.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Gửi Google Form onboarding tự động",
                      desc: "Khi offer được chấp nhận, n8n tự động tạo link Google Form được cá nhân hóa cho từng nhân viên và gửi qua email — form có deadline rõ ràng và checklist những gì cần chuẩn bị",
                    },
                    {
                      title: "Theo dõi trạng thái submit real-time",
                      desc: "Dashboard tự động cập nhật: ai đã submit đủ, ai còn thiếu gì, ai chưa mở form — HR có cái nhìn tổng thể mà không cần check từng người",
                    },
                    {
                      title: "Nhắc nhở tự động theo lịch",
                      desc: "Sau 3 ngày chưa submit: gửi reminder thân thiện. Sau 5 ngày: reminder có deadline. Sau 7 ngày: escalate alert đến HR manager và ghi log để follow up trực tiếp",
                    },
                    {
                      title: "Validate và xử lý hồ sơ tự động",
                      desc: "Kiểm tra đủ các trường bắt buộc, định dạng CMND/CCCD, format số tài khoản ngân hàng. Nếu thiếu hoặc sai: gửi yêu cầu bổ sung ngay thay vì để đến ngày vào làm mới phát hiện",
                    },
                    {
                      title: "Lưu trữ và phân loại vào hồ sơ nhân sự",
                      desc: "Tất cả tài liệu được tự động lưu vào Google Drive theo cấu trúc thư mục chuẩn (tên nhân viên / năm / loại tài liệu), cập nhật trạng thái trong HR sheet, và sẵn sàng để ký hợp đồng",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#059669"
                  steps={[
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Form gửi tự động",
                      sub: "Link cá nhân hóa cho mỗi người",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Tracking real-time",
                      sub: "HR thấy ai còn thiếu gì",
                    },
                    {
                      icon: <span className="text-lg">🔔</span>,
                      label: "Nhắc nhở tự động",
                      sub: "3 ngày, 5 ngày, 7 ngày",
                    },
                    {
                      icon: <span className="text-lg">✔️</span>,
                      label: "Validate hồ sơ",
                      sub: "Phát hiện thiếu sót ngay",
                    },
                    {
                      icon: <span className="text-lg">🗂️</span>,
                      label: "Lưu trữ có hệ thống",
                      sub: "Google Drive tự động phân loại",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Hợp đồng điện tử tích hợp vào workflow">
                  Với DocuSign, SignNow, hoặc thậm chí Google Docs + e-signature đơn giản,
                  n8n có thể tự động hóa toàn bộ quy trình ký hợp đồng: tạo hợp đồng từ template
                  với thông tin nhân viên điền sẵn, gửi để ký điện tử, nhận lại bản ký và
                  lưu vào hồ sơ — mà không cần in, scan, hay gặp mặt trực tiếp chỉ để ký giấy.
                </CalloutBox>

                {/* Workflow 3 */}
                <h3 id="workflow-3">Workflow 3: Lịch Đào Tạo Tự Động Theo Role</h3>

                <p>
                  Đào tạo onboarding thường là phần được lên kế hoạch kém nhất. HR biết
                  cần đào tạo những gì, nhưng việc schedule từng buổi, liên hệ từng trainer,
                  tạo calendar invite, và theo dõi completion — tất cả đều mất thời gian
                  và dễ bị bỏ sót. Với mỗi vị trí mới lại là một lần làm lại từ đầu.
                  Workflow này chuẩn hóa toàn bộ quy trình đó.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Template lịch đào tạo theo role",
                      desc: "Mỗi vị trí có template riêng: Sales cần biết gì trong tuần 1, tuần 2, tuần 3. Marketing khác. Developer khác. n8n tự động chọn đúng template dựa trên role của nhân viên mới",
                    },
                    {
                      title: "Tự động schedule và gửi calendar invite",
                      desc: "Kiểm tra lịch của trainer (Google Calendar API), tìm slot phù hợp, tạo Google Meet link, gửi invite cho cả trainer và nhân viên mới — không cần HR đi hỏi từng người còn trống lúc nào",
                    },
                    {
                      title: "Gửi tài liệu pre-reading trước mỗi buổi",
                      desc: "1 ngày trước mỗi buổi đào tạo, n8n tự động gửi email với tài liệu đọc trước, mục tiêu của buổi học, và câu hỏi chuẩn bị — giúp nhân viên vào buổi đào tạo đã có nền tảng",
                    },
                    {
                      title: "Theo dõi completion và quiz đánh giá",
                      desc: "Sau mỗi buổi: gửi quiz ngắn 5–10 câu để kiểm tra hiểu biết. Điểm được ghi vào progress tracker. HR và manager thấy ngay ai đang tiến bộ, ai cần support thêm",
                    },
                    {
                      title: "Điều chỉnh pace dựa trên performance",
                      desc: "Nếu quiz dưới 70%: n8n tự động schedule buổi review thêm và alert trainer. Nếu nhân viên hoàn thành sớm và điểm cao: mở sớm module nâng cao — không ai phải chờ cả nhóm",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#7C3AED"
                  steps={[
                    {
                      icon: <span className="text-lg">📚</span>,
                      label: "Template theo role",
                      sub: "Sales / Marketing / Dev...",
                    },
                    {
                      icon: <span className="text-lg">📅</span>,
                      label: "Auto schedule",
                      sub: "Calendar check + invite gửi",
                    },
                    {
                      icon: <span className="text-lg">📖</span>,
                      label: "Pre-reading tự động",
                      sub: "Tài liệu trước mỗi buổi",
                    },
                    {
                      icon: <span className="text-lg">📝</span>,
                      label: "Quiz và tracking",
                      sub: "Progress dashboard real-time",
                    },
                    {
                      icon: <span className="text-lg">🎯</span>,
                      label: "Điều chỉnh pace",
                      sub: "Dựa trên kết quả thực tế",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Onboarding buddy được assign tự động">
                  Một trong những yếu tố ít được chú ý nhưng tác động lớn nhất đến retention:
                  nhân viên mới có một người đồng nghiệp kỳ cựu được assign để hỗ trợ trong
                  2–4 tuần đầu. Workflow có thể tự động chọn buddy (dựa trên phòng ban, availability,
                  và lịch sử buddy thành công trước đó), gửi thông báo cho cả hai, và
                  schedule buổi coffee chat đầu tiên trong ngày đầu tiên.
                </CalloutBox>

                {/* Workflow 4 */}
                <h3 id="workflow-4">Workflow 4: Check-In 30-60-90 Ngày Tự Động</h3>

                <p>
                  Hầu hết công ty coi onboarding kết thúc vào cuối tuần đầu tiên.
                  Nhưng dữ liệu cho thấy khác: quyết định ở lại hay ra đi thường được đưa ra
                  trong 90 ngày đầu. Workflow này đảm bảo công ty lắng nghe nhân viên
                  đúng thời điểm — không phải khi họ đã quyết định nghỉ rồi mới hỏi.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Check-in ngày 30: Trải nghiệm onboarding",
                      desc: "Survey ngắn 5 câu: công cụ và quyền truy cập đã đủ chưa? Vai trò có rõ ràng không? Đào tạo có hữu ích không? Có vướng mắc gì chưa được giải quyết không? Kết quả gửi cho HR và manager ngay lập tức",
                    },
                    {
                      title: "Check-in ngày 60: Role clarity và team dynamics",
                      desc: "Đào sâu hơn: kỳ vọng về công việc có khớp với thực tế không? Mối quan hệ với team như thế nào? Có cần support gì từ manager không? Đây là thời điểm phát hiện early warning signs trước khi quá muộn",
                    },
                    {
                      title: "Check-in ngày 90: Career development",
                      desc: "Nhìn về phía trước: nhân viên thấy con đường phát triển của mình trong công ty như thế nào? Kỹ năng nào muốn phát triển thêm? Mục tiêu 6 tháng tới là gì? Dữ liệu này feed trực tiếp vào performance review cycle",
                    },
                    {
                      title: "Alert tự động khi có điểm thấp hoặc concern",
                      desc: "Nếu bất kỳ câu hỏi nào có điểm thấp hoặc comment tiêu cực, n8n ngay lập tức alert HR manager để schedule 1:1 follow-up — không đợi đến cuối chu kỳ review mới xử lý",
                    },
                    {
                      title: "Dashboard retention risk real-time",
                      desc: "Tổng hợp dữ liệu từ tất cả check-ins: nhân viên nào đang có retention risk cao (điểm thấp liên tục), nhân viên nào đang thriving, và trends theo phòng ban — để HR prioritize đúng chỗ",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#DC2626"
                  steps={[
                    {
                      icon: <span className="text-lg">📅</span>,
                      label: "Ngày 30",
                      sub: "Trải nghiệm onboarding",
                    },
                    {
                      icon: <span className="text-lg">🤝</span>,
                      label: "Ngày 60",
                      sub: "Role clarity + team fit",
                    },
                    {
                      icon: <span className="text-lg">🚀</span>,
                      label: "Ngày 90",
                      sub: "Career development",
                    },
                    {
                      icon: <span className="text-lg">⚠️</span>,
                      label: "Alert tự động",
                      sub: "Điểm thấp → HR vào ngay",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Retention dashboard",
                      sub: "Risk mapping theo team",
                    },
                  ]}
                />

                <CalloutBox type="warning" title="82% retention improvement không phải phép màu">
                  Con số 82% đến từ một cơ chế đơn giản: khi nhân viên được hỏi và lắng nghe
                  đúng thời điểm, những vấn đề nhỏ được giải quyết trước khi trở thành lý do nghỉ việc.
                  90% nhân viên nghỉ trong năm đầu không bắt đầu với quyết định đột ngột —
                  họ đã có dấu hiệu từ sớm mà không ai nhận ra. Check-in tự động là hệ thống
                  phát hiện sớm những dấu hiệu đó.
                </CalloutBox>

                {/* Before / After */}
                <h2 id="truoc-sau">Trước Và Sau Khi Có Onboarding Tự Động</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Onboarding thủ công tại SME",
                    items: [
                      "HR nhắn tin từng người hỏi giấy tờ — mất 2–3 ngày chỉ để thu thập đủ",
                      "IT setup laptop và tài khoản vào ngày nhân viên vào làm — nhân viên ngồi chờ",
                      "Lịch đào tạo được lên thủ công mỗi lần tuyển — không nhất quán giữa các batch",
                      "Không có check-in hệ thống — biết nhân viên không ổn khi họ thông báo nghỉ",
                      "46.4% thời gian của HR mỗi tuần dành cho 1 onboarding case — không scale được",
                      "Khi HR nghỉ việc: toàn bộ quy trình biến mất, phải build lại từ đầu",
                    ],
                  }}
                  after={{
                    title: "Sau — Onboarding tự động với n8n",
                    items: [
                      "Offer chấp nhận → toàn bộ pipeline khởi động tự động trong vài phút",
                      "IT ticket tạo ngay, laptop và tài khoản sẵn sàng trước ngày đầu tiên 5 ngày",
                      "Lịch đào tạo được tạo tự động theo role, calendar invite gửi không cần HR làm gì",
                      "Check-in 30-60-90 ngày chạy tự động, HR chỉ vào xử lý khi có alert",
                      "5 ngày/hire tiết kiệm được — HR tập trung vào văn hóa và phát triển con người",
                      "Quy trình được lưu trong workflow — không phụ thuộc vào bất kỳ cá nhân nào",
                    ],
                  }}
                />

                {/* Comparison Table */}
                <h2 id="so-sanh">So Sánh: Thủ Công vs Onboarding Tự Động</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "Onboarding thủ công", "Onboarding tự động với n8n"]}
                  highlightCol={2}
                  rows={[
                    [
                      "Thời gian HR mỗi hire",
                      "46.4% bỏ cả tuần làm việc",
                      "Giảm 5 ngày — HR chỉ xử lý exception",
                    ],
                    [
                      "IT setup",
                      "Ngày đầu tiên — nhân viên ngồi chờ",
                      "Sẵn sàng trước ngày vào làm 5 ngày",
                    ],
                    [
                      "Thu thập giấy tờ",
                      "HR nhắn tin từng người, dễ sót",
                      "Form tự động + reminder + tracking real-time",
                    ],
                    [
                      "Lịch đào tạo",
                      "Tạo thủ công mỗi lần — không nhất quán",
                      "Template theo role + auto-schedule + quiz tracking",
                    ],
                    [
                      "Check-in nhân viên mới",
                      "Không có hoặc không đều",
                      "30-60-90 ngày tự động, alert khi có risk",
                    ],
                    [
                      "Tỷ lệ giữ chân năm đầu",
                      "Chuẩn ngành",
                      "+16% retention improvement",
                    ],
                    [
                      "Năng suất nhân viên mới",
                      "Chuẩn",
                      "+65% khi onboarding được chuẩn hóa",
                    ],
                    [
                      "Khả năng scale",
                      "Tuyển thêm HR để theo kịp",
                      "Onboard 5x người với cùng team HR",
                    ],
                  ]}
                />

                {/* ROI block */}
                <div className="not-prose bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 my-8">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
                    Tính ROI: Tự động hóa onboarding tốn bao nhiêu và tiết kiệm bao nhiêu?
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-700 mb-2">
                        Kịch bản: SME 50 người, tuyển 15 nhân viên/năm
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-slate-500 mb-1">Chi phí setup hệ thống (1 lần)</p>
                          <p className="font-bold text-slate-800">8–15 triệu VND</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Chi phí vận hành/tháng</p>
                          <p className="font-bold text-slate-800">~500k–1.5 triệu VND</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Thời gian HR tiết kiệm/năm</p>
                          <p className="font-bold text-emerald-600">75 ngày làm việc</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Retention improvement/năm</p>
                          <p className="font-bold text-emerald-600">+2–3 người ở lại</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
                      <p className="text-sm font-semibold text-blue-800">
                        Chi phí thay thế 1 nhân viên nghỉ việc = 50–200% lương năm của họ.
                        Với mức lương trung bình 15 triệu/tháng, giữ được thêm 2 người/năm đã tiết kiệm
                        180–720 triệu VND — gấp nhiều lần chi phí triển khai toàn bộ hệ thống.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-xs text-slate-500 mb-3">
                      Muốn có ước tính cụ thể cho quy mô và ngành của bạn? Đặt lịch audit miễn phí — chúng tôi sẽ phân tích quy trình onboarding hiện tại và tính ROI thực tế.
                    </p>
                    <a
                      href="/audit"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-colors no-underline"
                    >
                      Tính ROI onboarding cho công ty tôi →
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Getting started */}
                <h2 id="bat-dau">Triển Khai Onboarding Tự Động Từng Bước</h2>

                <p>
                  Không cần triển khai cả 4 workflow cùng lúc. Cách tiếp cận hiệu quả nhất
                  là bắt đầu với Workflow 1 — nó giải quyết ấn tượng đầu tiên và IT readiness,
                  hai vấn đề dễ thấy nhất. Sau đó thêm dần các workflow còn lại theo mức độ
                  đau của team hiện tại.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Audit quy trình onboarding hiện tại",
                      desc: "Ghi lại từng bước: từ lúc offer chấp nhận đến ngày đầu tiên, ai làm gì, mất bao lâu, bước nào hay bị quên. Phỏng vấn 2–3 nhân viên đã vào gần đây về trải nghiệm của họ. Dữ liệu này sẽ cho thấy workflow nào cần ưu tiên nhất.",
                    },
                    {
                      title: "Chọn stack công nghệ phù hợp",
                      desc: "Hầu hết SME đã có Google Workspace (Gmail, Drive, Calendar, Forms) và Slack hoặc Zalo. n8n kết nối tất cả với nhau. Nếu chưa có ATS, bắt đầu với Google Sheet để track candidate status — n8n có thể watch Google Sheet và trigger workflow khi status thay đổi.",
                    },
                    {
                      title: "Build và test Workflow 1 với 1 hire thực tế",
                      desc: "Lần đầu triển khai: chạy song song với quy trình thủ công để verify mọi thứ đúng. Workflow 1 mất khoảng 2–4 giờ để build nếu đã quen n8n. Sau khi test thành công 2–3 case, chuyển hoàn toàn sang tự động.",
                    },
                    {
                      title: "Chuẩn hóa form thu thập hồ sơ và triển khai Workflow 2",
                      desc: "Tạo master checklist giấy tờ cần thiết cho từng loại hợp đồng (full-time, part-time, freelance). Build Google Form tương ứng. Workflow 2 đơn giản hơn Workflow 1 — trigger từ offer acceptance, send form link, track response.",
                    },
                    {
                      title: "Xây dựng training library và triển khai Workflow 3",
                      desc: "Đây là bước tốn thời gian nhất — không phải phần automation mà là phần nội dung. Bắt đầu với 1 role (thường là Sales vì hay tuyển nhất), viết ra 3–4 tuần training content, rồi mới build workflow để deliver. Sau đó nhân rộng cho các role khác.",
                    },
                    {
                      title: "Kích hoạt check-in 30-60-90 và build retention dashboard",
                      desc: "Workflow 4 là đơn giản nhất về mặt kỹ thuật nhưng quan trọng nhất về mặt chiến lược. Build survey template cho 3 checkpoint, cấu hình trigger theo ngày vào làm, và setup alert cho điểm thấp. Đây là workflow bạn sẽ thấy ROI rõ nhất sau 6–12 tháng.",
                    },
                    {
                      title: "Đo lường và cải thiện liên tục",
                      desc: "Theo dõi: thời gian HR per hire, điểm satisfaction của nhân viên mới, tỷ lệ nghỉ việc trong 90 ngày đầu, và time-to-productivity. Xem lại workflow mỗi quý — những gì nhân viên phàn nàn hoặc hay bị stuck là tín hiệu để cải thiện.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Chưa biết bắt đầu từ đâu?">
                  <p className="mb-3">
                    Đặt lịch{" "}
                    <strong>audit miễn phí 30 phút</strong> — chúng tôi sẽ xem xét quy trình
                    onboarding hiện tại của bạn, tính toán thời gian HR đang lãng phí mỗi tháng,
                    và đề xuất lộ trình tự động hóa phù hợp với quy mô và ngân sách của công ty.
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
