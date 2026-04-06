import type { Metadata } from "next";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import FAQ from "@/components/blog/FAQ";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import ReadingProgress from "@/components/blog/ReadingProgress";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Nghị Định 70/2025: Hóa Đơn Điện Tử Bắt Buộc Từ 1/6/2025 — SME Cần Làm Gì?",
  description:
    "Nghị định 70/2025/NĐ-CP bắt buộc hóa đơn điện tử từ 1/6/2025. Hướng dẫn đầy đủ: doanh nghiệp nào bị ảnh hưởng, phạt bao nhiêu nếu vi phạm, và cách tự động hóa quy trình xuất hóa đơn với n8n + MISA/meInvoice.",
  keywords: [
    "nghị định 70 2025 hóa đơn điện tử",
    "hóa đơn điện tử bắt buộc 2025",
    "nghị định 70 sme",
    "hóa đơn điện tử tự động hóa",
    "n8n misa hóa đơn điện tử",
    "tuân thủ nghị định 70",
    "phần mềm hóa đơn điện tử",
    "tự động xuất hóa đơn n8n",
  ],
  openGraph: {
    title: "Nghị Định 70/2025: Hóa Đơn Điện Tử Bắt Buộc — SME Cần Làm Gì?",
    description:
      "Hướng dẫn đầy đủ: ai bị ảnh hưởng, phạt bao nhiêu, và cách tự động hóa quy trình hóa đơn với n8n.",
    url: "https://autoflowvn.net/blog/nghi-dinh-70-hoa-don-dien-tu-bat-buoc",
  },
};

const tocItems = [
  { id: "nghi-dinh-70-la-gi", text: "Nghị Định 70 là gì?", level: 2 },
  { id: "ai-bi-anh-huong", text: "Ai bị ảnh hưởng?", level: 2 },
  { id: "phat-vi-pham", text: "Phạt bao nhiêu nếu vi phạm?", level: 2 },
  { id: "van-de-thu-cong", text: "Vấn đề xuất hóa đơn thủ công", level: 2 },
  { id: "giai-phap-tu-dong", text: "Giải pháp: Tự động hóa với n8n", level: 2 },
  { id: "workflow-1", text: "WF1: Đơn hàng → Hóa đơn tự động", level: 3 },
  { id: "workflow-2", text: "WF2: Xử lý hàng loạt cuối ngày", level: 3 },
  { id: "workflow-3", text: "WF3: Báo cáo thuế tự động", level: 3 },
  { id: "truoc-sau", text: "Trước và sau tự động hóa", level: 2 },
  { id: "lo-trinh-trien-khai", text: "Lộ trình triển khai 7 ngày", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const comparisonData = {
  headers: ["Tiêu chí", "Thủ công", "Tự động hóa n8n"],
  rows: [
    ["Thời gian xuất 1 hóa đơn", "5–10 phút", "< 30 giây"],
    ["Nhập liệu tay", "100%", "0%"],
    ["Sai sót / tháng", "10–30 lỗi", "~0 lỗi"],
    ["Hoạt động 24/7", "❌", "✅"],
    ["Xử lý hàng loạt (100+ HĐ)", "3–5 giờ", "< 5 phút"],
    ["Báo cáo thuế tự động", "❌", "✅"],
    ["Cảnh báo lỗi realtime", "❌", "✅"],
    ["Chi phí nhân sự kế toán", "Cao", "Giảm 60–80%"],
  ],
};

const faqItems = [
  {
    q: "Nghị Định 70/2025 có hiệu lực từ ngày nào?",
    a: "Nghị định 70/2025/NĐ-CP chính thức có hiệu lực từ ngày 1 tháng 6 năm 2025. Doanh nghiệp cần đảm bảo tuân thủ trước thời hạn này để tránh bị xử phạt.",
  },
  {
    q: "Hộ kinh doanh cá thể có phải dùng hóa đơn điện tử không?",
    a: "Có. Theo Nghị định 70/2025, hộ kinh doanh có doanh thu từ 1 tỷ đồng/năm trở lên bắt buộc phải sử dụng hóa đơn điện tử. Hộ kinh doanh nhỏ hơn được khuyến khích áp dụng. Thực tế, Cục Thuế nhiều tỉnh đang đẩy mạnh áp dụng toàn bộ hộ kinh doanh.",
  },
  {
    q: "n8n có tích hợp trực tiếp với MISA meInvoice không?",
    a: "MISA meInvoice có REST API đầy đủ. n8n kết nối qua HTTP Request node với API key của MISA. AutoFlow VN đã xây dựng sẵn workflow template cho tích hợp này, bao gồm xác thực, xử lý lỗi và retry tự động.",
  },
  {
    q: "Ngoài MISA, n8n có tích hợp được với phần mềm hóa đơn khác không?",
    a: "Có. n8n tích hợp được với VNPT e-Invoice, Viettel sinvoice, Fast e-Invoice, Bkav e-Invoice, Bravo và hầu hết các phần mềm hóa đơn điện tử có API. AutoFlow VN hỗ trợ tích hợp tất cả các nền tảng này.",
  },
  {
    q: "Nếu hệ thống tự động gặp lỗi thì sao?",
    a: "n8n có cơ chế Error Workflow — khi workflow chính lỗi, n8n tự động chạy error workflow: ghi log, gửi cảnh báo qua Zalo/email cho kế toán, và retry tự động theo lịch. Không có hóa đơn nào bị bỏ sót.",
  },
  {
    q: "Chi phí triển khai tự động hóa hóa đơn là bao nhiêu?",
    a: "AutoFlow VN triển khai trọn gói trong gói Starter (8–15 triệu đồng, 1–2 tuần). Bao gồm audit quy trình, xây dựng workflow, test với dữ liệu thật, bàn giao SOP và hỗ trợ 7 ngày. ROI thường đạt trong 1–2 tháng đầu.",
  },
];

export default function NghiDinh70Blog() {
  return (
    <BlogLayout
      slug="nghi-dinh-70-hoa-don-dien-tu-bat-buoc"
      title={<>Nghị Định 70/2025:{" "}<span className="gradient-text">Hóa Đơn Điện Tử Bắt Buộc</span>{" "}Từ 1/6/2025 — SME Cần Làm Gì?</>}
      description="Từ ngày 1/6/2025, Nghị định 70/2025/NĐ-CP yêu cầu toàn bộ doanh nghiệp và hộ kinh doanh có doanh thu từ 1 tỷ đồng/năm phải sử dụng hóa đơn điện tử theo chuẩn mới. Phạt lên đến 50 triệu đồng nếu vi phạm. Nhưng tuân thủ bằng cách nào — nhập tay từng hóa đơn hay tự động hóa toàn bộ quy trình? Bài này trả lời đầy đủ."
      breadcrumbLabel="Kế toán"
      badges={[
        { text: "Cập nhật pháp lý", color: "red" },
        { text: "Kế toán · n8n", color: "emerald" },
        { text: "MISA · meInvoice", color: "blue" },
      ]}
      readTime="14 phút đọc"
      tocItems={tocItems}
      date="2026-04-06"
      extraHead={<ReadingProgress />}
    >
                <StatCard stats={[
            { value: "1/6/2025", label: "Ngày hiệu lực", color: "text-red-600" },
            { value: "50M VNĐ", label: "Mức phạt tối đa", color: "text-red-600" },
            { value: "764K+", label: "DN đã đăng ký HĐĐT", color: "text-blue-600" },
            { value: "99%", label: "Giảm sai sót khi tự động hóa", color: "text-emerald-600" },
          ]} />

              {/* ═══ SECTION 1: Nghị Định 70 Là Gì ═══ */}
              <section id="nghi-dinh-70-la-gi" className="mb-12">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
                  Nghị Định 70/2025 Là Gì?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Nghị định 70/2025/NĐ-CP</strong> (ban hành ngày 15/3/2025) là
                  văn bản pháp luật quy định về hóa đơn điện tử, chứng từ điện tử
                  áp dụng cho toàn bộ hoạt động kinh doanh tại Việt Nam. Đây là bước
                  tiếp theo sau Nghị định 123/2020/NĐ-CP, với yêu cầu chặt chẽ hơn về
                  chuẩn định dạng, thời hạn xuất hóa đơn và tích hợp với hệ thống
                  của Tổng cục Thuế.
                </p>
                <CalloutBox type="warning" title="3 Thay Đổi Quan Trọng Nhất Của Nghị Định 70">
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>
                      <strong>Thời hạn xuất hóa đơn:</strong> Hóa đơn phải được xuất và
                      truyền đến cơ quan thuế trong vòng <strong>24 giờ</strong> kể từ
                      khi phát sinh giao dịch (thay vì 3 ngày như trước).
                    </li>
                    <li>
                      <strong>Chuẩn định dạng mới:</strong> XML theo chuẩn của Tổng cục
                      Thuế, bắt buộc đồng bộ realtime qua hệ thống cổng thông tin điện
                      tử của CQT.
                    </li>
                    <li>
                      <strong>Hộ kinh doanh:</strong> Lần đầu tiên mở rộng bắt buộc với
                      hộ kinh doanh có doanh thu từ 1 tỷ đồng/năm, không chỉ doanh nghiệp.
                    </li>
                  </ol>
                </CalloutBox>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Thực tế, nhiều doanh nghiệp đã dùng hóa đơn điện tử từ năm 2022
                  theo Nghị định 123/2020 — nhưng Nghị định 70/2025 nâng chuẩn và
                  mở rộng phạm vi. Nếu bạn đang dùng phần mềm hóa đơn cũ, có thể
                  cần cập nhật hoặc chuyển đổi nhà cung cấp.
                </p>
              </section>

              {/* ═══ SECTION 2: Ai Bị Ảnh Hưởng ═══ */}
              <section id="ai-bi-anh-huong" className="mb-12">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
                  Ai Bị Ảnh Hưởng?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Gần như toàn bộ doanh nghiệp và hộ kinh doanh tại Việt Nam.
                  Dưới đây là chi tiết theo từng đối tượng:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <div className="font-bold text-red-700 mb-3">🔴 Bắt Buộc Ngay (từ 1/6/2025)</div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>✅ Công ty TNHH, cổ phần, doanh nghiệp tư nhân</li>
                      <li>✅ Hộ kinh doanh doanh thu ≥ 1 tỷ/năm</li>
                      <li>✅ Hợp tác xã kinh doanh</li>
                      <li>✅ Chi nhánh, văn phòng đại diện có hoạt động kinh doanh</li>
                      <li>✅ Tổ chức kinh tế khác theo luật</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="font-bold text-amber-700 mb-3">🟡 Khuyến Khích Áp Dụng</div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>⚠️ Hộ kinh doanh doanh thu &lt; 1 tỷ/năm</li>
                      <li>⚠️ Cá nhân kinh doanh</li>
                      <li>⚠️ Hộ nông-lâm-ngư nghiệp nhỏ lẻ</li>
                    </ul>
                    <p className="text-xs text-amber-600 mt-3">
                      Lưu ý: Cục Thuế nhiều tỉnh đang vận động áp dụng toàn bộ,
                      không phân biệt doanh thu.
                    </p>
                  </div>
                </div>
                <CalloutBox type="info" title="Bạn Đang Bán Trên Shopee, TikTok Shop, Sàn TMĐT?">
                  <p className="text-sm">
                    Nếu doanh thu từ sàn thương mại điện tử vượt 1 tỷ đồng/năm, bạn{" "}
                    <strong>bắt buộc phải xuất hóa đơn điện tử</strong> cho từng đơn
                    hàng. Với seller có 50–200+ đơn/ngày, việc xuất tay từng hóa đơn
                    là bất khả thi — đây chính xác là vấn đề mà tự động hóa n8n giải
                    quyết.
                  </p>
                </CalloutBox>
              </section>

              {/* ═══ SECTION 3: Phạt Vi Phạm ═══ */}
              <section id="phat-vi-pham" className="mb-12">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
                  Phạt Bao Nhiêu Nếu Vi Phạm?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Theo Nghị định 125/2020/NĐ-CP (xử phạt vi phạm thuế) và các nghị
                  định bổ sung, mức phạt cho vi phạm hóa đơn điện tử khá nghiêm:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-4 font-semibold text-slate-700 border-b border-slate-200">
                          Hành vi vi phạm
                        </th>
                        <th className="text-left p-4 font-semibold text-slate-700 border-b border-slate-200">
                          Mức phạt
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="p-4 text-slate-700">Không xuất hóa đơn khi bán hàng</td>
                        <td className="p-4 font-semibold text-red-600">200K – 1 triệu VNĐ/lần</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        <td className="p-4 text-slate-700">Lập hóa đơn không đúng thời hạn (sau 24h)</td>
                        <td className="p-4 font-semibold text-red-600">4 – 8 triệu VNĐ</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-4 text-slate-700">Sử dụng hóa đơn không đúng chuẩn mới</td>
                        <td className="p-4 font-semibold text-red-600">6 – 12 triệu VNĐ</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        <td className="p-4 text-slate-700">Không truyền dữ liệu HĐ lên cổng CQT</td>
                        <td className="p-4 font-semibold text-red-600">10 – 20 triệu VNĐ</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-700">Vi phạm nghiêm trọng / có yếu tố gian lận</td>
                        <td className="p-4 font-semibold text-red-600">Lên đến 50 triệu VNĐ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CalloutBox type="warning" title="Rủi Ro Ẩn: Không Chỉ Là Tiền Phạt">
                  <p className="text-sm">
                    Ngoài tiền phạt, vi phạm hóa đơn có thể dẫn đến{" "}
                    <strong>không được khấu trừ VAT đầu vào</strong>, bị đưa vào
                    danh sách giám sát thuế, và ảnh hưởng đến uy tín khi đấu thầu
                    hoặc vay ngân hàng. Với SME, rủi ro này lớn hơn nhiều so với
                    tiền phạt.
                  </p>
                </CalloutBox>
              </section>

              {/* ═══ SECTION 4: Vấn Đề Thủ Công ═══ */}
              <section id="van-de-thu-cong" className="mb-12">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
                  Vấn Đề Của Xuất Hóa Đơn Thủ Công
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Nhiều doanh nghiệp phản ứng với Nghị định 70 bằng cách... tiếp
                  tục làm thủ công. Mua phần mềm hóa đơn, để kế toán ngồi xuất
                  từng tờ. Cách này đáp ứng pháp lý tối thiểu, nhưng tạo ra loạt
                  vấn đề mới:
                </p>
                <BeforeAfter
                  before={{
                    title: "Quy Trình Thủ Công Hiện Tại",
                    items: [
                      "Đơn hàng chốt → Kế toán kiểm tra email/chat",
                      "Mở phần mềm hóa đơn, nhập tay thông tin khách",
                      "Điền MST, địa chỉ, tên hàng, số tiền",
                      "Ký số, phát hành, gửi email cho khách",
                      "Lưu file, cập nhật sổ sách",
                      "Cuối ngày: tổng hợp báo cáo thủ công",
                      "Thời gian: 5–10 phút/hóa đơn",
                      "100 đơn/ngày = 8–17 giờ công",
                    ],
                  }}
                  after={{
                    title: "Sau Khi Tự Động Hóa",
                    items: [
                      "Đơn hàng chốt → n8n nhận webhook tự động",
                      "Lấy thông tin khách từ CRM/Shopee/TikTok",
                      "Gọi API MISA/meInvoice → tạo hóa đơn",
                      "Ký số tự động, gửi email cho khách",
                      "Lưu record vào Google Sheets/Supabase",
                      "Báo cáo tổng hợp tự động mỗi tối",
                      "Thời gian: < 30 giây/hóa đơn",
                      "100 đơn/ngày = < 5 phút",
                    ],
                  }}
                />
                <StatCard stats={[
                  { value: "99%", label: "Giảm sai sót nhập liệu", color: "text-emerald-600" },
                  { value: "8 giờ", label: "Tiết kiệm/ngày cho 100 đơn", color: "text-blue-600" },
                  { value: "24h", label: "Vẫn đáp ứng deadline pháp lý", color: "text-emerald-600" },
                ]} />
              </section>

              {/* ═══ SECTION 5: Giải Pháp n8n ═══ */}
              <section id="giai-phap-tu-dong" className="mb-12">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
                  Giải Pháp: Tự Động Hóa Với n8n
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  n8n là nền tảng automation open-source, có thể kết nối với{" "}
                  <strong>MISA meInvoice, VNPT e-Invoice, Viettel sinvoice</strong>{" "}
                  và hầu hết phần mềm hóa đơn điện tử tại Việt Nam qua API. Toàn bộ
                  quy trình từ khi có đơn hàng đến khi gửi hóa đơn cho khách diễn
                  ra tự động, không cần nhân viên can thiệp.
                </p>

                {/* WF1 */}
                <div id="workflow-1" className="mb-8">
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                    Workflow 1: Đơn Hàng → Hóa Đơn Tự Động (Realtime)
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Phù hợp với: shop Shopee, TikTok Shop, website có thanh toán
                    online, POS nhà hàng, phần mềm CRM. Mỗi khi đơn hàng được xác
                    nhận, hóa đơn được xuất tự động trong vòng 30 giây.
                  </p>
                  <WorkflowFlow
                    steps={[
                      { icon: "🛒", label: "Đơn hàng xác nhận", sub: "Shopee / TikTok / Website" },
                      { icon: "⚡", label: "n8n Webhook nhận", sub: "Trigger tức thì" },
                      { icon: "🔍", label: "Lấy thông tin khách", sub: "MST, địa chỉ, email" },
                      { icon: "📄", label: "Tạo hóa đơn XML", sub: "MISA API / meInvoice" },
                      { icon: "✍️", label: "Ký số tự động", sub: "Chứng thư số DN" },
                      { icon: "📤", label: "Gửi khách + CQT", sub: "Email + Cổng thuế" },
                      { icon: "📊", label: "Lưu vào sổ sách", sub: "Google Sheets / Supabase" },
                    ]}
                  />
                  <CalloutBox type="success" title="Đáp Ứng Điều Kiện Nghị Định 70">
                    <p className="text-sm">
                      Workflow này đảm bảo hóa đơn được xuất và truyền đến CQT trong
                      vòng 30 giây — hoàn toàn đáp ứng yêu cầu 24h của Nghị định 70.
                      Ngay cả khi bạn bán 200+ đơn/ngày.
                    </p>
                  </CalloutBox>
                </div>

                {/* WF2 */}
                <div id="workflow-2" className="mb-8">
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                    Workflow 2: Xử Lý Hàng Loạt Cuối Ngày
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Phù hợp với: doanh nghiệp B2B xuất hóa đơn theo lô, bán hàng
                    offline tại quầy, hoặc muốn gom nhóm theo khách hàng/hợp đồng.
                    Chạy lúc 23:00 mỗi ngày để xử lý tất cả giao dịch trong ngày.
                  </p>
                  <WorkflowFlow
                    steps={[
                      { icon: "🕙", label: "Cron 23:00 hàng ngày", sub: "n8n Scheduler" },
                      { icon: "📋", label: "Lấy danh sách giao dịch", sub: "Chưa có hóa đơn" },
                      { icon: "🔄", label: "Gom nhóm theo khách", sub: "Split in Batches" },
                      { icon: "📄", label: "Tạo hóa đơn theo lô", sub: "MISA Batch API" },
                      { icon: "✅", label: "Xác nhận & ký số", sub: "Tự động" },
                      { icon: "📧", label: "Gửi email hàng loạt", sub: "Resend / SMTP" },
                      { icon: "📊", label: "Báo cáo tổng hợp", sub: "Zalo notify cho kế toán" },
                    ]}
                  />
                </div>

                {/* WF3 */}
                <div id="workflow-3" className="mb-8">
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                    Workflow 3: Báo Cáo Thuế Tự Động Cuối Tháng
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Tổng hợp tất cả hóa đơn trong tháng, phân loại theo thuế suất
                    (0%, 5%, 10%), tạo file báo cáo thuế VAT và gửi cho kế toán để
                    nộp tờ khai. Chạy vào ngày 1 hàng tháng.
                  </p>
                  <WorkflowFlow
                    steps={[
                      { icon: "📅", label: "Ngày 1 hàng tháng", sub: "n8n Cron" },
                      { icon: "📥", label: "Lấy toàn bộ HĐ tháng trước", sub: "MISA API Query" },
                      { icon: "🔢", label: "Phân loại thuế suất", sub: "0% / 5% / 10%" },
                      { icon: "📊", label: "Tạo báo cáo Excel", sub: "Mẫu tờ khai VAT" },
                      { icon: "📨", label: "Gửi cho kế toán", sub: "Email + Zalo" },
                      { icon: "☁️", label: "Lưu Google Drive", sub: "Tự động backup" },
                    ]}
                  />
                </div>
              </section>

              {/* ═══ SECTION 6: Inline CTA ═══ */}
              <BlogInlineCTA category="Kế toán" slug="nghi-dinh-70-hoa-don-dien-tu-bat-buoc" />

              {/* ═══ SECTION 7: Trước & Sau ═══ */}
              <section id="truoc-sau" className="mb-12">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
                  So Sánh: Thủ Công vs Tự Động Hóa
                </h2>
                <ComparisonTable
                  headers={comparisonData.headers}
                  rows={comparisonData.rows}
                />
                <p className="text-sm text-slate-500 mt-3">
                  * Dựa trên doanh nghiệp 50–100 đơn hàng/ngày, 1 nhân viên kế toán phụ trách hóa đơn.
                </p>
              </section>

              {/* ═══ SECTION 8: Lộ Trình 7 Ngày ═══ */}
              <section id="lo-trinh-trien-khai" className="mb-12">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">
                  Lộ Trình Triển Khai 7 Ngày
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  AutoFlow VN triển khai tự động hóa hóa đơn điện tử theo quy trình
                  chuẩn hóa — bàn giao workflow chạy thật trong 7 ngày làm việc:
                </p>
                <StepList
                  steps={[
                    {
                      title: "Ngày 1–2: Audit & Discovery",
                      desc: "Call 2 giờ: phân tích quy trình hiện tại, xác định nguồn đơn hàng (Shopee, TikTok, CRM...), loại hóa đơn, phần mềm hóa đơn đang dùng. Tính ROI và confirm scope.",
                    },
                    {
                      title: "Ngày 3–4: Build Workflow",
                      desc: "Xây dựng workflow n8n: kết nối API nguồn đơn hàng + API phần mềm hóa đơn. Xử lý edge cases: đơn hủy, hoàn tiền, khách không có MST, hàng miễn thuế.",
                    },
                    {
                      title: "Ngày 5: Test với Dữ Liệu Thật",
                      desc: "Chạy thử với 20–50 đơn hàng thật của doanh nghiệp. Kiểm tra hóa đơn XML, chữ ký số, dữ liệu truyền lên CQT. Sửa nếu có lỗi.",
                    },
                    {
                      title: "Ngày 6: Bàn Giao & Hướng Dẫn",
                      desc: "Bàn giao workflow production, video Loom hướng dẫn vận hành, SOP document trên Notion. Đào tạo kế toán cách kiểm tra và xử lý ngoại lệ.",
                    },
                    {
                      title: "Ngày 7: Go Live & Monitor",
                      desc: "Chuyển sang môi trường production, monitor 24h đầu. Setup cảnh báo lỗi qua Zalo. Hỗ trợ trong 7 ngày sau bàn giao.",
                    },
                  ]}
                />
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6">
                  <div className="bg-violet-50 border border-violet-200 rounded-xl p-3 sm:p-5 text-center">
                    <div className="text-base sm:text-2xl font-black text-violet-600 mb-1">5–8 triệu</div>
                    <div className="text-[10px] sm:text-sm text-slate-600">Gói Pilot (1 workflow)</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-5 text-center">
                    <div className="text-base sm:text-2xl font-black text-blue-600 mb-1">7 ngày</div>
                    <div className="text-[10px] sm:text-sm text-slate-600">Từ audit đến go-live</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-5 text-center">
                    <div className="text-base sm:text-2xl font-black text-green-600 mb-1">1–2 tháng</div>
                    <div className="text-[10px] sm:text-sm text-slate-600">Hoàn vốn đầu tư</div>
                  </div>
                </div>
              </section>

              {/* ═══ SECTION 9: FAQ ═══ */}
              <section id="faq" className="mb-12">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-6">
                  Câu Hỏi Thường Gặp
                </h2>
                <FAQ items={faqItems} />
              </section>

    </BlogLayout>
  );
}
