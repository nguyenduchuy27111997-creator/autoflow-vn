import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import TableOfContents from "@/components/blog/TableOfContents";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import FAQ from "@/components/blog/FAQ";
import BlogFooter from "@/components/blog/BlogFooter";
import CodeBlock from "@/components/blog/CodeBlock";

export const metadata: Metadata = {
  title: "n8n Error Handling: Xử Lý Lỗi Workflow Như Chuyên Gia",
  description:
    "Hướng dẫn đầy đủ về n8n error handling: 3 loại error node, retry với exponential backoff, Error Trigger workflow, logging lỗi vào Google Sheet. Xây dựng workflow production-ready không sợ lỗi.",
  keywords: [
    "n8n error handling",
    "xử lý lỗi n8n",
    "n8n retry",
    "n8n error trigger",
    "n8n workflow lỗi",
    "n8n production",
  ],
};

const tocItems = [
  { id: "van-de", text: "Tại sao workflow hay bị lỗi?", level: 2 },
  { id: "3-loai-loi", text: "3 loại lỗi trong n8n", level: 2 },
  { id: "retry", text: "Retry và exponential backoff", level: 2 },
  { id: "error-trigger", text: "Error Trigger Workflow", level: 2 },
  { id: "logging", text: "Logging lỗi vào Google Sheet", level: 2 },
  { id: "3-lop", text: "Hệ thống 3 lớp xử lý lỗi", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "ket-luan", text: "Production-ready checklist", level: 2 },
];

const faqItems = [
  {
    q: "Khi nào nên dùng Try/Catch node vs Error Trigger?",
    a: "Try/Catch: khi bạn muốn bắt lỗi trong một node cụ thể và xử lý inline (tiếp tục workflow theo nhánh khác). Error Trigger: khi bạn muốn một workflow riêng biệt chạy khi BẤT KỲ workflow nào khác bị lỗi — tốt cho monitoring tập trung.",
  },
  {
    q: "Retry On Fail khác Error Trigger như thế nào?",
    a: "Retry On Fail là thử lại cùng node đó sau khoảng thời gian nhất định (1-5 lần). Nếu vẫn thất bại sau hết retry thì workflow mới throw error. Error Trigger chỉ chạy khi workflow đã thực sự fail (hết retry). Nên dùng cả hai cùng nhau.",
  },
  {
    q: "Execution log trong n8n lưu bao lâu?",
    a: "Mặc định n8n lưu execution log không giới hạn (cho đến khi hết disk). Nên set giới hạn trong Settings → Executions → Prune execution data. Khuyến nghị: 30 ngày cho workflow bình thường, 7 ngày cho workflow có dữ liệu nhạy cảm.",
  },
  {
    q: "Workflow lỗi nhưng không nhận được thông báo, tại sao?",
    a: "Nguyên nhân phổ biến: (1) Error Trigger workflow chưa được active, (2) Error Trigger workflow cũng đang bị lỗi (vòng lặp lỗi), (3) Webhook URL trong Error Trigger không đúng, (4) n8n chưa được cấu hình Error Workflow trong Settings.",
  },
  {
    q: "Có thể test Error Trigger mà không cần tạo lỗi thật không?",
    a: "Có. Trong n8n, thêm một node Set với giá trị không hợp lệ, hoặc dùng HTTP Request node với URL sai, rồi chạy thủ công. Hoặc dùng n8n CLI: n8n execute --id [workflow-id] để trigger và quan sát Error Trigger workflow nhận event.",
  },
];

const retryCode = `// n8n Expression để tính exponential backoff delay
// Trong node Settings > Retry on Fail > Wait Between Retries

// Lần 1: 1 giây
// Lần 2: 2 giây
// Lần 3: 4 giây
// Lần 4: 8 giây
// Lần 5: 16 giây

{{ Math.pow(2, $runIndex) * 1000 }}`;

const errorTriggerCode = `// Expression trong Error Trigger để format thông báo lỗi
// Dùng trong Telegram/Slack notification node

Workflow lỗi: {{ $json.workflow.name }}
Error: {{ $json.execution.error.message }}
Node: {{ $json.execution.error.node.name }}
Thời gian: {{ DateTime.now().setZone('Asia/Ho_Chi_Minh').toFormat('dd/MM HH:mm') }}
Link: https://your-n8n.com/workflow/{{ $json.workflow.id }}`;

const sheetLogCode = `// Data để log vào Google Sheet
// Dùng trong Google Sheets node sau khi bắt error

[
  {
    "timestamp": "{{ DateTime.now().setZone('Asia/Ho_Chi_Minh').toISO() }}",
    "workflow_name": "{{ $workflow.name }}",
    "node_name": "{{ $node.name }}",
    "error_message": "{{ $json.error.message }}",
    "input_data": "{{ JSON.stringify($input.first().json).slice(0, 500) }}",
    "status": "failed"
  }
]`;

export default function N8nErrorHandlingBlog() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-5">
              <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
              <span>/</span>
              <span className="text-slate-600 truncate max-w-[300px]">Hướng dẫn</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">
                Hướng dẫn
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                n8n
              </span>
              <span className="text-xs text-slate-400">15 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              n8n Error Handling:{" "}
              <span className="gradient-text">Xử Lý Lỗi Workflow Như Chuyên Gia</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Workflow chạy tốt trong môi trường test — rồi crash lúc 2 giờ sáng khi có đơn
              hàng quan trọng. API third-party timeout, data format sai, rate limit vượt ngưỡng.
              Đây là hướng dẫn xây dựng hệ thống 3 lớp xử lý lỗi để workflow của bạn
              production-ready thực sự.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "3", label: "loại error node trong n8n", sub: "Try/Catch, Error Trigger, Stop & Error", color: "text-orange-500" },
                  { value: "3-5 lần", label: "số lần retry khuyến nghị", sub: "với exponential backoff" },
                  { value: "99.9%", label: "uptime có thể đạt được", sub: "với error handling đúng cách" },
                  { value: "0 phút", label: "downtime không phát hiện", sub: "khi có Error Trigger monitoring" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">Tại Sao Workflow "Hoàn Hảo" Lại Bị Lỗi?</h2>

                <p>
                  Trong môi trường development, workflow chạy với dữ liệu sạch, API phản hồi
                  nhanh, không ai dùng hệ thống cùng lúc. Production khác hoàn toàn.
                </p>

                <StepList steps={[
                  { title: "API third-party timeout hoặc down", desc: "Shopee API có SLA 99.5% — nghĩa là có thể down 43 giờ/năm. Zalo OA API rate limit 1000 requests/phút. Khi vượt ngưỡng, toàn bộ workflow fail." },
                  { title: "Dữ liệu không đúng format", desc: 'Khách nhập số điện thoại "0912 345 678" thay vì "0912345678". Ngày tháng "15-04" thay vì "2026-04-15". Workflow không xử lý edge case sẽ crash.' },
                  { title: "Null và undefined values", desc: "Field không bắt buộc bị bỏ trống. Webhook payload thiếu field. Response API thay đổi format. Tất cả dẫn đến null reference error." },
                  { title: "Race condition và concurrent execution", desc: "Hai workflow chạy cùng lúc cùng xử lý một record trong Sheet — conflict và ghi đè lẫn nhau." },
                ]} />

                <CalloutBox type="warning" title="Workflow không có error handling = quả bom hẹn giờ">
                  Không phải &ldquo;nếu&rdquo; workflow lỗi — mà là &ldquo;khi nào&rdquo;. Câu hỏi là bạn có
                  biết và xử lý được không.
                </CalloutBox>

                {/* Section 2 */}
                <h2 id="3-loai-loi">3 Loại Error Node Trong n8n</h2>

                <h3>1. Retry On Fail</h3>
                <p>
                  Cài đặt đơn giản nhất: khi node fail, thử lại tự động. Không cần thêm node mới.
                  Chỉ cần vào node settings → &ldquo;Retry On Fail&rdquo;.
                </p>
                <p>
                  Phù hợp cho: API call có thể bị lỗi tạm thời (timeout, rate limit, network
                  glitch). Không phù hợp cho lỗi logic (data sai format — retry 100 lần vẫn fail).
                </p>

                <h3>2. Try/Catch (Error Output)</h3>
                <p>
                  Mỗi node trong n8n có output bình thường và output lỗi. Kết nối &ldquo;error output&rdquo;
                  vào một nhánh xử lý lỗi — workflow tiếp tục thay vì dừng lại.
                </p>
                <p>
                  Phù hợp cho: xử lý lỗi inline, tiếp tục workflow theo nhánh dự phòng, gửi
                  dữ liệu sang hàng đợi để xử lý sau.
                </p>

                <h3>3. Error Trigger Workflow</h3>
                <p>
                  Một workflow riêng biệt chỉ chạy khi workflow khác fail. Nhận thông tin đầy
                  đủ về lỗi: tên workflow, tên node, error message, timestamp, input data.
                </p>
                <p>
                  Phù hợp cho: monitoring tập trung, alert Telegram/Slack, logging vào Sheet.
                </p>

                <ComparisonTable
                  headers={["Phương pháp", "Khi nào dùng", "Ưu điểm", "Nhược điểm"]}
                  highlightCol={1}
                  rows={[
                    ["Retry On Fail", "API lỗi tạm thời", "Đơn giản, built-in", "Không xử lý được lỗi logic"],
                    ["Error Output", "Cần fallback inline", "Workflow tiếp tục chạy", "Phức tạp hơn, nhiều nhánh"],
                    ["Error Trigger", "Monitoring tập trung", "Bắt tất cả lỗi mọi workflow", "Cần setup thêm workflow riêng"],
                    ["Stop & Error node", "Cần dừng có kiểm soát", "Rõ ràng, có message custom", "Workflow dừng hoàn toàn"],
                  ]}
                />

                {/* Section 3 */}
                <h2 id="retry">Retry và Exponential Backoff</h2>

                <p>
                  Retry đơn giản (retry mỗi 1 giây) có thể làm nghiêm trọng hơn vấn đề rate
                  limit. Exponential backoff là giải pháp: mỗi lần retry, đợi lâu hơn lần trước
                  theo cấp số nhân.
                </p>

                <CodeBlock
                  code={retryCode}
                  lang="yaml"
                  title="n8n Expression — Exponential Backoff"
                />

                <StepList steps={[
                  { title: "Bật Retry On Fail trong node settings", desc: "Click node → Settings (tab) → Toggle 'Retry On Fail' → Set max tries: 3-5" },
                  { title: "Set Wait Between Retries", desc: "Dùng expression {{ Math.pow(2, $runIndex) * 1000 }} để có delay 1s, 2s, 4s, 8s..." },
                  { title: "Kết nối Error Output cho fallback", desc: "Kéo từ dấu X đỏ của node → kết nối vào Set node ghi log lỗi" },
                  { title: "Test với network error giả lập", desc: "Dùng HTTP Request node với URL sai để test retry hoạt động đúng" },
                ]} />

                <CalloutBox type="tip">
                  Rule of thumb: API external → retry 3 lần với exponential backoff. Database/Sheet
                  internal → retry 5 lần vì network local nhanh hơn. Logic error (validation fail)
                  → không retry, xử lý ngay.
                </CalloutBox>

                {/* Section 4 */}
                <h2 id="error-trigger">Error Trigger Workflow — Monitoring Tập Trung</h2>

                <p>
                  Error Trigger là workflow đặc biệt: thay vì có trigger thông thường (webhook,
                  schedule), nó được kích hoạt tự động mỗi khi một workflow khác trong n8n instance
                  bị lỗi.
                </p>

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    { icon: <span className="text-lg">💥</span>, label: "Workflow A fail", sub: "Bất kỳ workflow nào" },
                    { icon: <span className="text-lg">⚡</span>, label: "Error Trigger", sub: "Tự động kích hoạt" },
                    { icon: <span className="text-lg">📊</span>, label: "Log vào Sheet", sub: "Timestamp + details" },
                    { icon: <span className="text-lg">📱</span>, label: "Alert Telegram", sub: "Thông báo ngay" },
                    { icon: <span className="text-lg">🔍</span>, label: "Link debug", sub: "URL đến execution" },
                  ]}
                />

                <StepList steps={[
                  { title: "Tạo workflow mới, chọn Error Trigger làm trigger node", desc: "Trong n8n → New Workflow → Add node → tìm 'Error Trigger'. Workflow này sẽ nhận data từ mọi workflow fail." },
                  { title: "Cấu hình trong Settings → Workflows → Error Workflow", desc: "Vào Settings của n8n instance → chỉ định Error Trigger workflow. Chỉ cần làm một lần cho toàn bộ instance." },
                  { title: "Thêm Telegram node để nhận alert ngay lập tức", desc: "Format message bao gồm: tên workflow, error message, tên node, timestamp, link đến execution để debug." },
                  { title: "Thêm Google Sheets node để log dài hạn", desc: "Append vào Sheet theo dõi lỗi: ngày, workflow, node, message, trạng thái xử lý." },
                ]} />

                <CodeBlock
                  code={errorTriggerCode}
                  lang="yaml"
                  title="Error Trigger — Format Telegram Alert"
                />

                <BeforeAfter
                  before={{
                    title: "Không có Error Trigger",
                    items: [
                      "Workflow fail lúc 2:00 sáng",
                      "Không ai biết cho đến sáng hôm sau",
                      "Đơn hàng bị miss, khách hàng phàn nàn",
                      "Debug mất 2-3 giờ vì không có log",
                      "Không biết lỗi xảy ra bao nhiêu lần",
                    ],
                  }}
                  after={{
                    title: "Có Error Trigger",
                    items: [
                      "Workflow fail lúc 2:00 sáng",
                      "Telegram alert đến trong 10 giây",
                      "Link debug trực tiếp đến execution",
                      "Log đầy đủ trong Google Sheet",
                      "SLA: phát hiện và xử lý trong 30 phút",
                    ],
                  }}
                />

                {/* Section 5 */}
                <h2 id="logging">Logging Lỗi Vào Google Sheet</h2>

                <p>
                  Telegram alert cho real-time awareness. Google Sheet cho historical analysis và
                  pattern recognition. Kết hợp cả hai cho error handling toàn diện.
                </p>

                <CodeBlock
                  code={sheetLogCode}
                  lang="yaml"
                  title="Google Sheets — Error Log Data"
                />

                <StepList steps={[
                  { title: "Tạo Sheet với columns chuẩn", desc: "Timestamp | Workflow | Node | Error Message | Input Data | Status | Resolved By | Resolved At" },
                  { title: "Append row mỗi khi có error", desc: "Dùng Google Sheets node → Append Row. Truncate input_data nếu quá dài (500 chars) để tránh quota." },
                  { title: "Thêm cột Status để track xử lý", desc: "Default: 'failed'. Sau khi fix: update thành 'resolved'. Dễ dàng filter lỗi chưa xử lý." },
                  { title: "Tạo filter view cho từng loại lỗi", desc: "Filter theo workflow, ngày, loại lỗi. Google Sheets free tier đủ cho hầu hết SME." },
                ]} />

                {/* Section 6 */}
                <h2 id="3-lop">Hệ Thống 3 Lớp Xử Lý Lỗi — Production-Ready</h2>

                <p>
                  Đây là architecture đầy đủ cho workflow chạy production:
                </p>

                <StepList steps={[
                  { title: "Lớp 1: Phòng ngừa (Prevention)", desc: "Validate input data trước khi xử lý. Kiểm tra null/undefined. Format chuẩn hóa số điện thoại, ngày tháng. Lỗi này không cần retry — xử lý ngay." },
                  { title: "Lớp 2: Phục hồi (Recovery)", desc: "Retry với exponential backoff cho API lỗi tạm thời. Error Output node cho fallback logic. Queue để xử lý sau nếu cần." },
                  { title: "Lớp 3: Visibility (Observability)", desc: "Error Trigger workflow → Telegram alert + Google Sheet log. Dashboard theo dõi error rate theo thời gian. Weekly review để tìm pattern." },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">🛡️</span>, label: "Lớp 1: Validate", sub: "Phòng ngừa lỗi data" },
                    { icon: <span className="text-lg">🔄</span>, label: "Lớp 2: Retry", sub: "Phục hồi lỗi tạm thời" },
                    { icon: <span className="text-lg">👁️</span>, label: "Lớp 3: Monitor", sub: "Alert + Log mọi lỗi" },
                    { icon: <span className="text-lg">📊</span>, label: "Review tuần", sub: "Cải thiện liên tục" },
                    { icon: <span className="text-lg">✅</span>, label: "99.9% uptime", sub: "Production-ready" },
                  ]}
                />

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>
                <FAQ items={faqItems} />

                {/* Conclusion */}
                <h2 id="ket-luan">Production-Ready Checklist</h2>

                <StepList steps={[
                  { title: "Tất cả API node có Retry On Fail bật", desc: "Ít nhất 3 lần retry, tốt nhất dùng exponential backoff expression." },
                  { title: "Error Output được kết nối và xử lý", desc: "Không để node có error output treo lơ lửng không kết nối — đây là lỗi thầm lặng." },
                  { title: "Error Trigger workflow đang active", desc: "Kiểm tra Settings → đã set Error Workflow chưa. Test bằng cách tạo lỗi thủ công." },
                  { title: "Google Sheet log đang nhận data", desc: "Check Sheet sau khi test error — dữ liệu có vào đúng không." },
                  { title: "Telegram/Slack alert được nhận trong < 30 giây", desc: "Test end-to-end: tạo lỗi → nhận thông báo. Đo thời gian phản hồi." },
                  { title: "Input validation cho tất cả webhook", desc: "Kiểm tra required fields, format, size limits trước khi xử lý." },
                ]} />

                <CalloutBox type="info" title="Cần review workflow hiện tại của bạn?">
                  <p className="mb-2">
                    Đặt lịch <strong>workflow audit miễn phí</strong> — mình sẽ review error
                    handling của các workflow hiện tại và chỉ ra điểm yếu cần fix trước.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>

          <BlogFooter
            title="n8n Error Handling"
            slug="n8n-error-handling"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
