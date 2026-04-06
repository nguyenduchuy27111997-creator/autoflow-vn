import type { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import FAQ from "@/components/blog/FAQ";

export const metadata: Metadata = {
  title: "Tạo Nội Dung Bằng AI + n8n: Blog, Social, Email Tự Động 2026",
  description:
    "77% doanh nghiệp đã dùng AI để tạo nội dung. Khám phá cách kết hợp AI + n8n để tự động hóa blog, social media caption, email newsletter và video script — tiết kiệm 2.2 giờ/tuần, tăng 40% năng suất.",
  keywords: [
    "tạo nội dung ai",
    "ai content n8n",
    "tự động hóa nội dung",
    "n8n content automation",
    "ai blog writer",
    "social media tự động",
    "email newsletter ai",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vòng lặp nội dung không hồi kết", level: 2 },
  { id: "thi-truong", text: "Thị trường AI Content 2026", level: 2 },
  { id: "4-workflow", text: "4 workflow tạo nội dung thực tế", level: 2 },
  { id: "wf-1", text: "1. AI Blog Writer tự động", level: 3 },
  { id: "wf-2", text: "2. Social Caption Generator", level: 3 },
  { id: "wf-3", text: "3. Email Newsletter tự động", level: 3 },
  { id: "wf-4", text: "4. Video Script → Short-form", level: 3 },
  { id: "canh-bao", text: "Cảnh báo: AI detection & chất lượng", level: 2 },
  { id: "truoc-sau", text: "Trước và sau khi dùng AI + n8n", level: 2 },
  { id: "so-sanh", text: "Manual vs ChatGPT vs n8n Pipeline", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const faqItems = [
  {
    q: "Nội dung AI có bị Google phạt không?",
    a: "Google không phạt nội dung vì nó được viết bởi AI — Google phạt nội dung kém chất lượng, thiếu giá trị hoặc được tạo ra chỉ để thao túng ranking. Nếu bạn dùng AI như một công cụ hỗ trợ (tạo nháp, gợi ý cấu trúc) nhưng bổ sung insight thực tế, kinh nghiệm cá nhân và dữ liệu độc quyền, nội dung hoàn toàn an toàn và có thể xếp hạng tốt. Google chính thức xác nhận điều này trong hướng dẫn cập nhật 2024.",
  },
  {
    q: "Pipeline n8n có tạo ra nội dung trùng lặp không?",
    a: "Đây là rủi ro có thật nếu bạn dùng prompt quá đơn giản và không có dữ liệu đầu vào phong phú. Để tránh: (1) cung cấp briefing chi tiết cho mỗi bài (góc độ, audience cụ thể, điểm khác biệt), (2) inject dữ liệu mới (stats, case study, quote) vào prompt, (3) luôn có bước editor review trước khi publish. Với n8n, bạn có thể thêm bước kiểm tra plagiarism tự động qua Copyscape API.",
  },
  {
    q: "52% người tiêu dùng ít tương tác với nội dung AI hơn — làm sao vẫn hiệu quả?",
    a: "Con số này nói lên vấn đề với nội dung AI generic, thiếu cá tính. Giải pháp: dùng AI để xử lý phần cơ học (research, cấu trúc, format, phân phối) nhưng đảm bảo giọng văn, góc nhìn và insight là của con người thực. Người đọc không ghét AI — họ ghét nội dung nhàm chán. AI giúp bạn xuất bản nhiều hơn; chất lượng vẫn phải đến từ kiến thức và kinh nghiệm của bạn.",
  },
  {
    q: "Tôi cần biết lập trình để dùng n8n tạo nội dung không?",
    a: "Không cần. n8n có giao diện kéo-thả và hơn 900 template sẵn. Bạn chỉ cần biết quy trình bạn muốn tự động hóa, và viết được prompt cho AI. Kỹ năng quan trọng nhất không phải code — mà là prompt engineering và hiểu rõ quy trình nội dung của mình. Thường mất 1-2 tuần để làm quen và có workflow chạy ổn định đầu tiên.",
  },
  {
    q: "Chi phí chạy pipeline AI content tốn bao nhiêu mỗi tháng?",
    a: "Phụ thuộc vào khối lượng. Ví dụ: tạo 30 bài blog/tháng (~1,000 words/bài), dùng GPT-4o mini tốn khoảng 100-200k VND. Thêm social caption (150 posts) và email newsletter (4 issues) tốn thêm 50-100k. Tổng chi phí AI khoảng 200-400k VND/tháng — so với thuê content writer part-time 5-8 triệu/tháng. Server n8n self-hosted: thêm 100-200k VND/tháng.",
  },
  {
    q: "Pipeline có hỗ trợ đa ngôn ngữ (Anh/Việt) không?",
    a: "Hoàn toàn có. Bạn có thể cấu hình pipeline để output song ngữ, hoặc tạo workflow riêng cho từng ngôn ngữ. Các model như GPT-4o, Claude 3.5 và Gemini 1.5 Pro xử lý tiếng Việt rất tốt. Mẹo: thêm bước 'native review' trong prompt để AI tự kiểm tra tính tự nhiên của tiếng Việt trước khi output.",
  },
];

export default function TaoNoiDungAIN8nBlog() {
  return (
    <BlogLayout
      slug="tao-noi-dung-ai-n8n"
      title={<>Tạo Nội Dung Bằng AI + n8n:{" "}<span className="gradient-text">Blog, Social, Email Tự Động</span></>}
      description="Mỗi tuần bạn phải viết blog, đăng social, gửi newsletter, làm script video — nhưng không bao giờ đủ thời gian. 77% doanh nghiệp đã dùng AI để tạo nội dung. Phần tiếp theo: kết hợp AI với n8n để toàn bộ pipeline chạy tự động — từ ý tưởng đến publish, không cần can thiệp thủ công."
      breadcrumbLabel="AI"
      badges={[
        { text: "AI Content", color: "violet" },
        { text: "n8n", color: "blue" },
        { text: "Automation", color: "emerald" },
      ]}
      readTime="12 phút đọc"
      tocItems={tocItems}
      date="2026-04-01"
    >
                {/* Section 1: Problem */}
                <h2 id="van-de">Vòng Lặp Nội Dung Không Hồi Kết</h2>

                <p>
                  Bạn biết vấn đề này. Thứ Hai bắt đầu tuần mới với danh sách nội dung dài dằng dặc:
                  3 bài blog, 15 caption mạng xã hội, 1 newsletter, 2 video script. Thứ Sáu — bạn chỉ hoàn thành được 1.
                  Tuần sau lại bắt đầu lại từ đầu.
                </p>

                <p>
                  Không phải vì bạn lười. Mà vì <strong>mỗi mảnh nội dung đòi hỏi quá nhiều bước thủ công</strong>:
                  research keyword, outline, viết draft, chỉnh sửa, format, tạo ảnh, đăng lên từng kênh, theo dõi kết quả.
                  Với một người làm toàn bộ, đây là công việc không bao giờ dứt.
                </p>

                <p>
                  Đó là lý do tại sao <strong>tạo nội dung AI kết hợp n8n</strong> không chỉ là xu hướng —
                  đó là cách duy nhất để content team nhỏ cạnh tranh với đội ngũ lớn hơn. Không phải thay thế
                  người viết; mà là loại bỏ tất cả phần công việc cơ học để người viết tập trung vào điều duy nhất
                  quan trọng: insight và giọng văn của thương hiệu.
                </p>

                {/* Section 2: Market */}
                <h2 id="thi-truong">Thị Trường AI Content 2026: Số Liệu Nói Lên Tất Cả</h2>

                <StatCard stats={[
                  { value: "77%", label: "doanh nghiệp dùng AI tạo nội dung", sub: "tăng mạnh từ 51% năm 2023", color: "text-violet-600" },
                  { value: "83%", label: "creator sử dụng AI trong quy trình", sub: "ít nhất 1 bước trong workflow" },
                  { value: "2.2h", label: "tiết kiệm mỗi tuần trung bình", sub: "+40% năng suất nội dung tổng thể", color: "text-emerald-600" },
                  { value: "$10.6B", label: "thị trường AI content 2033", sub: "từ $2.15B (2024), CAGR 19.4%" },
                ]} />

                <p>
                  Con số 83% creator dùng AI có vẻ ấn tượng — nhưng điểm mấu chốt là <strong>cách họ dùng</strong>.
                  Phần lớn chỉ dùng ChatGPT để viết nội dung thô rồi chỉnh tay. Đó là cải tiến tốt, nhưng chưa phải
                  tự động hóa thực sự.
                </p>

                <p>
                  Tự động hóa thực sự là khi pipeline chạy từ đầu đến cuối mà không cần bạn ngồi trước màn hình:
                  từ keyword research, tới outline, draft, format, tạo social variant, schedule post — tất cả theo
                  trigger tự động. Đó là điều n8n cho phép làm mà ChatGPT đơn lẻ không thể.
                </p>

                <CalloutBox type="warning" title="Mặt trái cần biết">
                  52% người tiêu dùng cho biết họ giảm tương tác với nội dung khi biết được tạo bởi AI.
                  Và đến 2026, ước tính 10% video trên internet sẽ là AI-generated. Nội dung AI ngày càng nhiều —
                  điều đó có nghĩa là <strong>chất lượng và góc nhìn độc đáo</strong> sẽ càng trở nên quan trọng hơn.
                  Dùng AI để tăng tốc độ, nhưng đừng đánh đổi bằng tính chân thực.
                </CalloutBox>

                {/* Section 3: 4 Workflows */}
                <h2 id="4-workflow">4 Workflow Tạo Nội Dung Với AI + n8n</h2>

                <p>
                  Đây là 4 workflow thực tế, không phải lý thuyết — mỗi cái giải quyết một điểm đau cụ thể
                  trong quy trình nội dung và có thể triển khai với n8n trong vài giờ đến vài ngày.
                </p>

                {/* Workflow 1: AI Blog Writer */}
                <h3 id="wf-1">1. AI Blog Writer — Từ Keyword Đến Bài Đăng</h3>

                <p>
                  Quy trình viết blog đầy đủ: nhận keyword hoặc topic, research SERP, tạo outline SEO-friendly,
                  viết nội dung hoàn chỉnh, format HTML/Markdown, và publish lên CMS — không cần mở tab nào.
                </p>

                <StepList steps={[
                  { title: "Trigger: Keyword/topic từ Google Sheet hoặc form", desc: "Thêm keyword vào Google Sheet hoặc điền form → n8n trigger tự động. Có thể batch nhiều keywords cùng lúc cho publishing calendar." },
                  { title: "Research: Phân tích SERP và intent", desc: "AI tìm kiếm 10 kết quả top cho keyword, phân tích cấu trúc bài đang rank, xác định search intent (informational/transactional) và các sub-topic cần đề cập." },
                  { title: "Outline: Tạo cấu trúc bài SEO-friendly", desc: "Dựa trên SERP analysis, AI tạo outline với H2/H3 logic, xác định word count mục tiêu, các câu hỏi PAA cần trả lời, và internal link opportunities." },
                  { title: "Draft: Viết nội dung hoàn chỉnh", desc: "AI viết bài theo outline, inject stats và data cụ thể từ nguồn đã research, dùng brand voice từ style guide của bạn (lưu trong system prompt)." },
                  { title: "Publish: Format và đưa lên CMS", desc: "Format sang HTML hoặc Markdown, tạo meta title/description, gợi ý alt text cho ảnh, và publish lên WordPress/Webflow/Ghost qua API — hoặc lưu vào draft chờ review." },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">📝</span>, label: "Keyword input", sub: "Sheet / Form / Notion" },
                    { icon: <span className="text-lg">🔍</span>, label: "SERP research", sub: "Top 10 + intent analysis" },
                    { icon: <span className="text-lg">📐</span>, label: "AI outline", sub: "H2/H3 + SEO structure" },
                    { icon: <span className="text-lg">✍️</span>, label: "AI viết draft", sub: "Brand voice + data inject" },
                    { icon: <span className="text-lg">🚀</span>, label: "Publish / Draft", sub: "CMS qua API" },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả điển hình">
                  Một blog post 1,500 words từ keyword đến draft hoàn chỉnh: 8-12 phút.
                  So với viết thủ công: 3-4 giờ. Tiết kiệm 90% thời gian viết thô —
                  để dành cho editing và bổ sung insight cá nhân.
                </CalloutBox>

                {/* Workflow 2: Social Caption Generator */}
                <h3 id="wf-2">2. Social Caption Generator — Một Nội Dung, Nhiều Kênh</h3>

                <p>
                  Viết xong một bài blog hay một thông tin sản phẩm mới? Thay vì ngồi viết lại cho
                  Facebook, Instagram, LinkedIn, TikTok với tone khác nhau — workflow này tự động tạo
                  tất cả variants phù hợp từng platform.
                </p>

                <StepList steps={[
                  { title: "Input: URL bài viết hoặc brief ngắn", desc: "Dán URL bài blog mới đăng, hoặc điền brief 2-3 dòng về thông điệp chính. n8n tự động scrape nội dung nếu là URL." },
                  { title: "AI trích xuất key messages", desc: "Từ nội dung dài, AI xác định 3-5 điểm chính đáng chia sẻ nhất, câu hook tiềm năng, và dữ liệu/số liệu nổi bật để highlight." },
                  { title: "Tạo caption riêng cho từng platform", desc: "Facebook: dài hơn, storytelling, câu hỏi cuối. Instagram: ngắn gọn + hashtag list. LinkedIn: professional tone, business insight. TikTok/Reels: hook mạnh đầu, CTA clear." },
                  { title: "Schedule tự động theo lịch đã cài", desc: "Caption được gửi vào Buffer, Hootsuite, hoặc trực tiếp qua API đến từng platform — theo lịch tối ưu (thứ 3, thứ 4, thứ 5 thường có engagement cao nhất)." },
                ]} />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    { icon: <span className="text-lg">🔗</span>, label: "URL / brief input", sub: "Bài viết hoặc sản phẩm" },
                    { icon: <span className="text-lg">🧠</span>, label: "AI trích key points", sub: "Hook + data + CTA" },
                    { icon: <span className="text-lg">✂️</span>, label: "Tạo variants", sub: "FB / IG / LinkedIn / TikTok" },
                    { icon: <span className="text-lg">📅</span>, label: "Schedule tự động", sub: "Buffer / Hootsuite / API" },
                  ]}
                />

                {/* Workflow 3: Email Newsletter */}
                <h3 id="wf-3">3. Email Newsletter Tự Động — Từ Curated Content Đến Gửi</h3>

                <p>
                  Newsletter hàng tuần là kênh marketing ROI cao nhất — nhưng cũng tốn nhiều thời gian nhất.
                  Workflow này tự động curate nội dung, viết intro, format email, và gửi theo lịch — chỉ cần
                  bạn approve trong 5 phút.
                </p>

                <StepList steps={[
                  { title: "Thu thập nội dung từ nhiều nguồn", desc: "n8n theo dõi RSS feeds, Twitter/X lists, Reddit threads, và các keyword alerts bạn cài — tự động gom bài hay nhất trong tuần vào danh sách." },
                  { title: "AI tóm tắt và đánh giá relevance", desc: "Mỗi bài được AI tóm tắt thành 2-3 câu, đánh giá độ liên quan với audience của bạn (1-10), và gợi ý góc nhìn bình luận từ quan điểm thương hiệu." },
                  { title: "Tổng hợp thành newsletter draft", desc: "AI tạo intro cá nhân hóa (đề cập đến sự kiện tuần/theme), format các items với summary + link, và viết outro với CTA phù hợp chiến dịch hiện tại." },
                  { title: "Gửi draft để approve (5 phút)", desc: "Bạn nhận email với preview newsletter, nút 'Approve & Send' và 'Edit first'. Nếu approve, n8n tự động gửi qua Mailchimp/ConvertKit/Brevo đúng lịch." },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">📰</span>, label: "Curate nội dung", sub: "RSS / Twitter / Reddit" },
                    { icon: <span className="text-lg">📊</span>, label: "AI tóm tắt + score", sub: "Relevance cho audience" },
                    { icon: <span className="text-lg">📧</span>, label: "Tạo newsletter draft", sub: "Intro + curated + CTA" },
                    { icon: <span className="text-lg">👤</span>, label: "Approve 1 click", sub: "Hoặc edit trước khi gửi" },
                    { icon: <span className="text-lg">📤</span>, label: "Gửi tự động", sub: "Mailchimp / ConvertKit" },
                  ]}
                />

                <CalloutBox type="tip" title="Mẹo cá nhân hóa">
                  Thêm bước "Editor Note" trong prompt — AI sẽ tạo phần mở đầu ngắn theo phong cách
                  "tuần này tôi nghĩ về..." dựa trên theme của các bài bạn chọn. Đây là phần
                  làm newsletter cảm giác do người thật viết, không phải robot curate.
                </CalloutBox>

                {/* Workflow 4: Video Script */}
                <h3 id="wf-4">4. Video Script → Short-form Content Pipeline</h3>

                <p>
                  Từ một script video dài (YouTube, podcast, webinar), workflow này tự động tạo:
                  short-form script cho Reels/TikTok, caption mạng xã hội, key quotes để làm ảnh,
                  và bản tóm tắt blog — tất cả trong một lần chạy.
                </p>

                <StepList steps={[
                  { title: "Input: Script hoặc transcript của video gốc", desc: "Dán script YouTube / upload transcript từ Whisper AI (n8n có thể tự transcribe audio) hoặc Rev.ai — một nguồn, nhiều output." },
                  { title: "AI phân tích và tìm moments hay nhất", desc: "AI xác định 3-5 đoạn có hook mạnh nhất (insight độc đáo, số liệu ấn tượng, câu chuyện ngắn) — phù hợp để cắt thành short-form." },
                  { title: "Tạo short-form scripts (60-90 giây)", desc: "Mỗi moment được viết lại thành script ngắn với cấu trúc: Hook (3 giây) → Value (45 giây) → CTA (12 giây). Tối ưu cho vertical video." },
                  { title: "Output đa định dạng tự động", desc: "Đồng thời tạo: caption cho mỗi short video, 5-7 quote cards text, bản tóm tắt blog 800 words, và thread Twitter/X 10 tweets — tất cả từ cùng một source." },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">🎬</span>, label: "Script / transcript", sub: "YouTube / Podcast" },
                    { icon: <span className="text-lg">💡</span>, label: "AI tìm best moments", sub: "Hook + insight + story" },
                    { icon: <span className="text-lg">📱</span>, label: "Short-form scripts", sub: "60-90 giây / video" },
                    { icon: <span className="text-lg">🔀</span>, label: "Multi-format output", sub: "Caption / Quote / Blog / Thread" },
                  ]}
                />

                {/* Warning section */}
                <h2 id="canh-bao">Cảnh Báo Quan Trọng: AI Detection Và Vấn Đề Chất Lượng</h2>

                <CalloutBox type="warning" title="Không phải mọi thứ đều nên tự động hóa hoàn toàn">
                  <p>
                    Trước khi triển khai bất kỳ pipeline nào, hãy rõ ràng về điều này:
                    <strong> tự động hóa không có nghĩa là không cần con người</strong>.
                    AI xử lý tốt phần cơ học — nhưng chất lượng nội dung vẫn phụ thuộc vào bạn.
                  </p>
                  <ul>
                    <li><strong>AI detection tools đang tiến bộ nhanh.</strong> GPTZero, Originality.ai, và tính năng built-in của Google ngày càng chính xác hơn. Nội dung thuần AI không có editing sẽ bị detect dễ dàng.</li>
                    <li><strong>Hallucination là rủi ro thực.</strong> AI có thể bịa số liệu, trích dẫn sai nguồn, hoặc đưa ra thông tin lỗi thời. Luôn verify facts trước khi publish.</li>
                    <li><strong>Brand voice drift theo thời gian.</strong> Nếu không cập nhật style guide và system prompt thường xuyên, AI output sẽ dần drift khỏi giọng điệu thương hiệu.</li>
                    <li><strong>Publish gate là bắt buộc.</strong> Không bao giờ cài pipeline publish hoàn toàn tự động không có bước human review — dù chỉ 5 phút.</li>
                  </ul>
                </CalloutBox>

                <p>
                  Cách tiếp cận đúng: dùng AI + n8n để <strong>loại bỏ 80% công việc cơ học</strong>,
                  giữ lại 20% cho human judgement — phần quyết định chất lượng và tính chân thực của nội dung.
                  Workflow tốt nhất không phải "AI làm tất cả" — mà là "AI làm phần nhàm chán, người làm phần quan trọng".
                </p>

                {/* Before/After */}
                <h2 id="truoc-sau">Trước Và Sau Khi Dùng AI + n8n</h2>

                <BeforeAfter
                  before={{
                    title: "Quy trình nội dung thủ công",
                    items: [
                      "1 bài blog: 4-6 giờ từ research đến publish",
                      "Social caption: 30-45 phút cho 5 platforms",
                      "Newsletter hàng tuần: 2-3 giờ curate + viết",
                      "Mỗi bước phụ thuộc vào sự có mặt của người viết",
                      "Khó scale khi cần xuất bản nhiều hơn",
                      "Burnout thường xảy ra với content team nhỏ",
                    ],
                  }}
                  after={{
                    title: "Pipeline AI + n8n tự động",
                    items: [
                      "1 bài blog: 10-15 phút draft, 30 phút review + edit",
                      "Social variants: tự động tạo khi bài blog publish",
                      "Newsletter: AI curate + draft, bạn approve trong 5 phút",
                      "Pipeline chạy ngay cả khi bạn đang ngủ",
                      "Scale bằng cách thêm keywords, không thêm người",
                      "Team tập trung vào strategy và creative — không grind",
                    ],
                  }}
                />

                {/* Comparison Table */}
                <h2 id="so-sanh">So Sánh: Manual vs ChatGPT Đơn Lẻ vs n8n Pipeline</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "Viết tay hoàn toàn", "ChatGPT đơn lẻ", "n8n AI Pipeline"]}
                  highlightCol={3}
                  rows={[
                    ["Thời gian / bài blog", "4-6 giờ", "1.5-2 giờ (có assist)", "15-30 phút (review)"],
                    ["Đa kênh (social variants)", "Viết riêng từng kênh", "Copy-paste prompt lại", "Tự động tạo đồng thời"],
                    ["Consistency giọng văn", "Phụ thuộc người viết", "Cần nhắc brand voice mỗi lần", "Style guide trong system prompt"],
                    ["Publish / schedule", "Thủ công lên từng kênh", "Thủ công sau khi có text", "Tự động qua API"],
                    ["Khả năng scale", "Giới hạn bởi số người", "Giới hạn bởi thời gian dùng", "Scale theo storage + API quota"],
                    ["Chi phí tháng", "10-20M (content writer)", "500k (ChatGPT Plus) + thời gian", "200-400k (API + server)"],
                    ["Tính linh hoạt", "Cao nhất", "Cao", "Cao — cần thiết lập ban đầu"],
                    ["Phù hợp với", "High-stakes, brand-defining content", "Nội dung ad hoc, ý tưởng mới", "Volume cao, quy trình lặp lại"],
                  ]}
                />

                <CalloutBox type="info" title="Không phải either/or">
                  Chiến lược tối ưu thường là kết hợp: dùng n8n pipeline cho content volume cao (social,
                  newsletter, SEO blog), ChatGPT interactive cho brainstorming và ý tưởng mới, và viết tay cho
                  content chiến lược quan trọng (thought leadership, case study chuyên sâu, brand manifesto).
                </CalloutBox>

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về AI Content + n8n</h2>

                <FAQ items={faqItems} />

                {/* CTA Section */}
                <div className="not-prose mt-12 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-100 p-8">
                  <div className="max-w-xl">
                    <div className="text-sm font-semibold text-violet-600 mb-2">Miễn phí — Không cam kết</div>
                    <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                      Sẵn sàng tự động hóa quy trình nội dung của bạn?
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      Đặt lịch <strong>tư vấn miễn phí 45 phút</strong> — chuyên gia Autoflow sẽ phân tích
                      quy trình nội dung hiện tại của bạn, xác định workflow nào nên tự động hóa đầu tiên,
                      và demo pipeline AI + n8n phù hợp với team và ngân sách của bạn.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/audit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
                      >
                        Đặt lịch tư vấn miễn phí
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="/quiz"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
                      >
                        Làm quiz: Workflow nào phù hợp với bạn?
                      </a>
                    </div>
                  </div>
                </div>

    </BlogLayout>
  );
}
