import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import TableOfContents from "@/components/blog/TableOfContents";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import AnimatedCounter from "@/components/blog/AnimatedCounter";
import FAQ from "@/components/blog/FAQ";
import BlogFooter from "@/components/blog/BlogFooter";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Tăng Khách Quay Lại Quán Cafe: Loyalty, Sinh Nhật, Zalo Tự Động",
  description:
    "Hướng dẫn tự động hóa chương trình loyalty, chúc sinh nhật, re-engagement cho quán cafe bằng n8n + Zalo OA. Tăng 45% khách quay lại, giảm 67% khách mất.",
  keywords: [
    "tăng khách quay lại quán cafe",
    "loyalty cafe tự động",
    "sinh nhật khách hàng zalo",
    "re-engagement f&b",
    "zalo oa quán cafe",
    "automation loyalty",
    "chăm sóc khách hàng cafe",
  ],
};

const tocItems = [
  { id: "van-de", text: "Tại sao khách không quay lại?", level: 2 },
  { id: "so-lieu", text: "Những con số cần biết", level: 2 },
  { id: "giai-phap", text: "3 workflow giữ chân khách", level: 2 },
  { id: "workflow-1", text: "WF1: Loyalty tự động", level: 3 },
  { id: "workflow-2", text: "WF2: Chúc sinh nhật + ưu đãi", level: 3 },
  { id: "workflow-3", text: "WF3: Re-engagement khách mất", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function TangKhachQuayLaiQuanCafeBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="tang-khach-quay-lai-quan-cafe" title="Tăng Khách Quay Lại Quán Cafe" />
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-5">
              <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
              <span>/</span>
              <span className="text-slate-600 truncate max-w-[300px]">F&B</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">
                F&B
              </span>
              <span className="px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold">
                Loyalty
              </span>
              <span className="text-xs text-slate-500">11 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Tăng Khách Quay Lại Quán Cafe:{" "}
              <span className="gradient-text">Loyalty, Sinh Nhật, Zalo Tự Động</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              67% khách uống 1 lần rồi không quay lại — không phải vì cafe dở, mà vì họ quên bạn tồn tại.
              3 workflow tự động: loyalty tích điểm, chúc sinh nhật, nhắc khách quay lại — chạy 24/7 trên Zalo OA,
              không cần thêm nhân viên.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <AnimatedCounter stats={[
                  { value: 67, suffix: "%", label: "khách không quay lại", sub: "sau lần đầu tiên", color: "text-red-500" },
                  { value: 5, suffix: "x", label: "rẻ hơn để giữ khách cũ", sub: "so với tìm khách mới" },
                  { value: 45, suffix: "%", label: "tăng khách quay lại", sub: "nhờ automation loyalty" },
                  { value: 0, suffix: " đồng", label: "chi phí thêm", sub: "Zalo OA miễn phí" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">🤔 Tại Sao Khách Không Quay Lại?</h2>

                <p>
                  Bạn làm cafe ngon. Khách khen. Check-in Instagram. 5 sao trên Google Maps.
                  Nhưng 2 tuần sau — họ uống ở quán khác. Không phải vì quán bạn tệ.
                  Mà vì:
                </p>

                <ul>
                  <li><strong>Họ quên bạn tồn tại.</strong> Trong khu vực 500m có 10 quán cafe. Nếu bạn không nhắc, họ chọn quán gần nhất.</li>
                  <li><strong>Không có lý do để quay lại.</strong> Cafe ở đâu cũng giống nhau. Cần 1 &quot;hook&quot; — loyalty, ưu đãi, cảm giác được nhớ đến.</li>
                  <li><strong>Không ai chăm sóc.</strong> Khách mua 20 ly mà không ai nói &quot;cảm ơn&quot;. Sinh nhật khách — im lặng. Lâu không thấy ghé — cũng im lặng.</li>
                </ul>

                <CalloutBox type="warning" title="Một phép tính đơn giản">
                  Quán cafe trung bình có 80 khách/ngày. 67% không quay lại = mất 54 khách/ngày.
                  Nếu chỉ 10% trong số đó quay lại (nhờ automation) = +5 khách/ngày = +150 khách/tháng.
                  Với giá trị trung bình 50K/ly = <strong>thêm 7.5 triệu doanh thu/tháng</strong> — tự động, không mất gì.
                </CalloutBox>

                {/* Section 2 */}
                <h2 id="so-lieu">📊 Những Con Số Cần Biết</h2>

                <p>
                  Đây là dữ liệu từ các nghiên cứu và thực tế nhà hàng/cafe tại Việt Nam:
                </p>

                <StatCard stats={[
                  { value: "5x", label: "chi phí tìm khách mới", sub: "so với giữ khách cũ (Harvard Business Review)" },
                  { value: "25-95%", label: "tăng lợi nhuận", sub: "khi tăng 5% tỉ lệ khách quay lại (Bain & Co)" },
                  { value: "77%", label: "khách muốn được nhớ tên", sub: "và nhận ưu đãi cá nhân hóa (Salesforce)" },
                  { value: "3.5x", label: "open rate Zalo vs Email", sub: "Zalo 85% vs Email 24% tại VN" },
                ]} />

                <p>
                  Zalo là kênh lý tưởng cho việc này tại Việt Nam: 79.6 triệu người dùng,
                  85% open rate (email chỉ 24%), và <strong>miễn phí gửi tin cho người đã follow OA</strong>.
                </p>

                <p>
                  Đọc thêm về cách setup Zalo OA cho F&B:{" "}
                  <a href="/blog/zalo-oa-fnb">Tự Động Hóa Zalo OA Cho Nhà Hàng, Quán Cafe</a>
                </p>

                {/* Section 3 */}
                <h2 id="giai-phap">⚡ 3 Workflow Giữ Chân Khách</h2>

                <h3 id="workflow-1">Workflow 1: Loyalty Tích Điểm Tự Động</h3>

                <p>
                  Thay vì thẻ giấy đập ghim (khách hay mất), dùng Zalo OA làm thẻ loyalty số.
                  Mỗi lần mua = tự động tích điểm. Đủ điểm = tự động gửi voucher.
                </p>

                <StepList steps={[
                  { title: "Khách mua hàng → scan QR trên bill", desc: "QR link đến Zalo OA. Lần đầu: follow + đăng ký. Lần sau: tự động nhận diện." },
                  { title: "n8n tự động tích điểm", desc: "Mỗi 50K = 1 điểm. Lưu vào Google Sheet: tên, SĐT, số điểm, lịch sử mua." },
                  { title: "Đủ 10 điểm → Zalo gửi voucher", desc: "'Chúc mừng bạn! Bạn đã tích đủ 10 điểm — tặng 1 ly cafe bất kỳ. Voucher: LOYAL10'" },
                  { title: "Tag khách theo hành vi", desc: "Mua > 3 lần/tuần = 'VIP'. Thích trà sữa = 'Tea Lover'. Mua sáng sớm = 'Early Bird'." },
                  { title: "Gửi ưu đãi theo tag", desc: "VIP nhận ưu đãi độc quyền. Tea Lover nhận khuyến mãi trà mới. Early Bird nhận combo sáng." },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">🛒</span>, label: "Khách mua hàng", sub: "Scan QR bill" },
                    { icon: <span className="text-lg">⚡</span>, label: "n8n tích điểm", sub: "Tự động +1 điểm" },
                    { icon: <span className="text-lg">🏷️</span>, label: "Tag hành vi", sub: "VIP, Tea Lover..." },
                    { icon: <span className="text-lg">🎁</span>, label: "Đủ điểm → voucher", sub: "Zalo OA gửi" },
                    { icon: <span className="text-lg">🎯</span>, label: "Ưu đãi cá nhân", sub: "Đúng người, đúng lúc" },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả thực tế">
                  Một quán cafe specialty ở Quận 3 dùng workflow này trong 3 tháng:
                  tỉ lệ khách quay lại tăng từ 28% lên 52%. Doanh thu từ khách cũ tăng 35%.
                  Và 40% khách VIP tự giới thiệu bạn bè — marketing miễn phí.
                </CalloutBox>

                <h3 id="workflow-2">Workflow 2: Chúc Sinh Nhật + Ưu Đãi</h3>

                <p>
                  Ai cũng thích được nhớ ngày sinh nhật. Và ai cũng muốn được tặng quà.
                  Workflow này kết hợp cả 2 — tự động 100%.
                </p>

                <StepList steps={[
                  { title: "Thu thập ngày sinh khi đăng ký loyalty", desc: "Form đăng ký Zalo OA hỏi: Tên, SĐT, Ngày sinh. Chỉ 3 trường — đơn giản." },
                  { title: "7 ngày trước sinh nhật → n8n trigger", desc: "n8n kiểm tra Sheet mỗi sáng: ai có sinh nhật trong 7 ngày tới?" },
                  { title: "Zalo gửi lời chúc + voucher", desc: "'Chúc mừng sinh nhật [Tên]! Tặng bạn voucher giảm 50% cho 1 ly bất kỳ. Hết hạn: [ngày sinh + 7]'" },
                  { title: "Ngày sinh nhật → nhắc lại", desc: "'Hôm nay là ngày của bạn! Ghé quán để mình làm ly đặc biệt nhé'" },
                  { title: "Sau 3 ngày — hỏi feedback", desc: "'Bạn đã dùng voucher sinh nhật chưa? Còn 4 ngày nữa là hết hạn nhé!'" },
                ]} />

                <WorkflowFlow
                  accentColor="#EC4899"
                  steps={[
                    { icon: <span className="text-lg">📅</span>, label: "7 ngày trước", sub: "Check danh sách" },
                    { icon: <span className="text-lg">🎂</span>, label: "Gửi lời chúc", sub: "Zalo + voucher 50%" },
                    { icon: <span className="text-lg">🎉</span>, label: "Ngày sinh nhật", sub: "Nhắc đúng ngày" },
                    { icon: <span className="text-lg">💌</span>, label: "+3 ngày sau", sub: "Nhắc dùng voucher" },
                  ]}
                />

                <CalloutBox type="tip">
                  <strong>Tip pro:</strong> Cho phép khách mời thêm 1 người bạn đến trong ngày sinh nhật —
                  &quot;Tặng bạn + 1 người bạn mỗi ly free&quot;. Tỉ lệ đến tăng 60% vì ai cũng muốn đi với bạn bè.
                  Và bạn có thêm 1 khách mới — có thể trở thành khách quen.
                </CalloutBox>

                <h3 id="workflow-3">Workflow 3: Re-engagement Khách Mất</h3>

                <p>
                  Khách mua hàng đều đặn rồi đột nhiên biến mất. Nếu bạn không làm gì,
                  họ sẽ không bao giờ quay lại. Workflow này tự động phát hiện và kéo họ về.
                </p>

                <StepList steps={[
                  { title: "n8n kiểm tra mỗi tuần: ai chưa mua 14 ngày?", desc: "Lọc danh sách khách có lần mua cuối cách hôm nay > 14 ngày" },
                  { title: "Ngày 14: Zalo nhắc nhẹ", desc: "'Lâu rồi không thấy bạn ghé! Tuần này mình có [món mới]. Ghé thử nhé?'" },
                  { title: "Ngày 21: Gửi ưu đãi", desc: "'Nhớ bạn quá! Tặng voucher 20% cho lần tới. Code: MISSYOU20. Hết hạn 7 ngày.'" },
                  { title: "Ngày 30: Ưu đãi mạnh hơn", desc: "'Tặng 1 ly free (món bạn hay uống). Chỉ cần ghé quán và cho nhân viên biết. Hẹn gặp bạn!'" },
                  { title: "Ngày 45: Final attempt", desc: "'Mình vẫn ở đây nếu bạn cần 1 ly cafe ngon. 30% off bất kỳ lúc nào bạn quay lại.'" },
                ]} />

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    { icon: <span className="text-lg">👤</span>, label: "Khách biến mất", sub: "> 14 ngày không mua" },
                    { icon: <span className="text-lg">👋</span>, label: "Ngày 14", sub: "Nhắc nhẹ" },
                    { icon: <span className="text-lg">🎁</span>, label: "Ngày 21", sub: "Voucher 20%" },
                    { icon: <span className="text-lg">☕</span>, label: "Ngày 30", sub: "Tặng 1 ly free" },
                    { icon: <span className="text-lg">💌</span>, label: "Ngày 45", sub: "30% final offer" },
                  ]}
                />

                <CalloutBox type="info" title="Tại sao 14-21-30-45 ngày?">
                  <p className="mb-2">
                    Đây là &quot;win-back sequence&quot; đã được chứng minh trong ngành F&B:
                  </p>
                  <ul className="text-sm space-y-1 mb-0">
                    <li>14 ngày: nhắc nhẹ, không push quá mạnh</li>
                    <li>21 ngày: ưu đãi nhỏ, tạo lý do quay lại</li>
                    <li>30 ngày: ưu đãi lớn, &quot;last chance&quot; tâm lý</li>
                    <li>45 ngày: final attempt trước khi chuyển sang &quot;inactive&quot;</li>
                  </ul>
                </CalloutBox>

                <p>
                  Kết hợp với{" "}
                  <a href="/blog/email-marketing-automation-n8n">email marketing automation</a> để
                  tiếp cận khách trên nhiều kênh — Zalo + Email = tăng 30% tỉ lệ quay lại so với chỉ dùng 1 kênh.
                </p>

                {/* Section 4 */}
                <h2 id="truoc-sau">📊 Trước Và Sau Khi Tự Động Hóa</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Không có hệ thống",
                    items: [
                      "Thẻ giấy đập ghim — khách mất, hỏng, quên mang",
                      "Không biết sinh nhật khách",
                      "Khách đi 2 tuần không ai biết",
                      "Khuyến mãi gửi đại cho tất cả",
                      "67% khách không quay lại",
                      "Không có data khách hàng",
                    ],
                  }}
                  after={{
                    title: "Sau — Loyalty + Zalo tự động",
                    items: [
                      "Thẻ số trên Zalo — không mất, tự động tích điểm",
                      "Chúc sinh nhật + voucher 50% tự động",
                      "Phát hiện khách mất sau 14 ngày, kéo về tự động",
                      "Ưu đãi cá nhân theo hành vi (VIP, Tea Lover...)",
                      "45% khách quay lại — tăng 2x",
                      "Data 100% khách: tên, SĐT, hành vi, sở thích",
                    ],
                  }}
                />

                <AnimatedCounter stats={[
                  { value: 45, suffix: "%", label: "khách quay lại", sub: "tăng từ 28% lên 52%", color: "text-accent" },
                  { value: 35, suffix: "%", label: "doanh thu từ khách cũ", sub: "tăng nhờ loyalty" },
                  { value: 73, suffix: "%", label: "voucher sinh nhật được dùng", sub: "tỉ lệ sử dụng rất cao" },
                  { value: 22, suffix: "%", label: "khách mất được kéo về", sub: "nhờ re-engagement" },
                ]} />

                {/* Section 5 */}
                <h2 id="bat-dau">🚀 Bắt Đầu Như Thế Nào?</h2>

                <StepList steps={[
                  { title: "Tạo Zalo OA (miễn phí)", desc: "Vào oa.zalo.me → tạo OA cho quán cafe. Mất 5 phút. Đây là 'nhà' của khách trên Zalo." },
                  { title: "In QR code Zalo OA lên bill và bàn", desc: "Khách scan → follow OA → đăng ký loyalty. Khuyến khích: 'Follow OA để tích điểm mỗi lần mua.'" },
                  { title: "Setup WF1 (loyalty) trước", desc: "Đây là workflow có impact lớn nhất. 2-3 ngày setup. Khách bắt đầu tích điểm ngay." },
                  { title: "Thu thập ngày sinh → setup WF2", desc: "Sau 2-4 tuần có đủ data sinh nhật, bắt đầu gửi lời chúc tự động." },
                  { title: "Sau 1 tháng → setup WF3 (re-engagement)", desc: "Cần data mua hàng 1 tháng để biết ai là 'khách mất'. Lúc này mới chạy re-engagement." },
                ]} />

                <p>
                  Toàn cảnh lộ trình tự động hóa:{" "}
                  <a href="/blog/lo-trinh-tu-dong-hoa-sme">Lộ trình tự động hóa cho SME Việt Nam 2026</a>
                </p>

                <CalloutBox type="info" title="Muốn mình giúp setup?">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — mình sẽ xem quán cafe của bạn đang ở đâu,
                    có bao nhiêu khách, và thiết kế chương trình loyalty phù hợp nhất.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Inline CTA */}
                <BlogInlineCTA category="F&B" slug="tang-khach-quay-lai-quan-cafe" />

                {/* FAQ */}
                <h2 id="faq">❓ Câu Hỏi Thường Gặp</h2>

                <FAQ items={[
                  {
                    q: "Zalo OA gửi tin có mất phí không?",
                    a: "Gửi tin cho người đã follow OA: miễn phí (trong quota nhất định). Gửi tin ZNS (Zalo Notification Service) cho người chưa follow: mất phí ~200-500đ/tin. Bắt đầu với follower trước — miễn phí hoàn toàn."
                  },
                  {
                    q: "Quán mình nhỏ (30-50 khách/ngày), có cần loyalty không?",
                    a: "Càng cần! Quán nhỏ thì mỗi khách càng quý. Mất 1 khách quen = mất 50K x 20 lần/tháng = 1 triệu/tháng. Giữ được 5 khách quen thêm = +5 triệu/tháng. Loyalty là cách rẻ nhất để làm điều này."
                  },
                  {
                    q: "Khách không muốn follow Zalo OA thì sao?",
                    a: "Tặng voucher cho lần đầu follow — VD 'Follow OA để nhận giảm 10% hôm nay'. Tỉ lệ follow khi có khuyến khích là 60-70%. Và sau khi follow, họ nhận được giá trị từ loyalty — nên hiếm khi unfollow."
                  },
                  {
                    q: "Làm sao biết khách mua hàng để tích điểm?",
                    a: "2 cách: (1) QR code trên bill — khách scan sau khi mua. (2) Nhân viên nhập SĐT khách vào POS — n8n tự động tích điểm. Cách 2 nhanh hơn nhưng cần nhân viên hợp tác."
                  },
                  {
                    q: "Voucher có bị lạm dụng không? VD khách share cho người khác?",
                    a: "Voucher có mã riêng (1 lần dùng). n8n kiểm tra: mã này đã dùng chưa? Nếu rồi → từ chối. Ngoài ra, nếu khách share cho bạn bè — đó cũng là marketing miễn phí cho bạn!"
                  },
                  {
                    q: "Mất bao lâu để thấy kết quả?",
                    a: "Loyalty: thấy kết quả sau 2-4 tuần (khách bắt đầu tích điểm và quay lại). Sinh nhật: phụ thuộc vào số lượng data sinh nhật — thường sau 1-2 tháng. Re-engagement: thấy kết quả ngay tuần đầu tiên."
                  },
                  {
                    q: "Có thể dùng cho nhà hàng (không chỉ cafe) không?",
                    a: "Hoàn toàn! Tất cả 3 workflow áp dụng cho mọi loại F&B: nhà hàng, trà sữa, bánh mì, kem... Chỉ cần điều chỉnh nội dung tin nhắn và mức tích điểm cho phù hợp với giá trị đơn hàng."
                  },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="Tăng Khách Quay Lại Quán Cafe" slug="tang-khach-quay-lai-quan-cafe" date="2026-04-02" />
        </article>
      </main>
      <Footer />
    </>
  );
}
