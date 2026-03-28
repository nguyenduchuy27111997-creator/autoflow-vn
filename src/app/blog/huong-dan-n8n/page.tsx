import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hướng dẫn n8n tiếng Việt — Từ zero đến workflow đầu tiên | AutoFlow VN",
  description:
    "n8n là gì? So sánh với Zapier, Make.com. Hướng dẫn cài đặt, 3 workflow đầu tay, và khi nào nên thuê chuyên gia — tất cả bằng tiếng Việt cho người mới.",
};

export default function HuongDanN8nPage() {
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
              ← Blog
            </a>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                Hướng dẫn
              </span>
              <span className="text-xs text-slate-400">12 phút đọc</span>
              <span className="text-xs text-slate-400">28/03/2026</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Hướng dẫn n8n tiếng Việt — từ zero đến workflow đầu tiên
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              n8n là nền tảng automation mạnh nhất mà ít người Việt Nam biết đến.
              Bài viết này giải thích n8n là gì, so sánh với Zapier và Make.com,
              hướng dẫn cài đặt, và 3 workflow đầu tay bạn có thể build ngay hôm
              nay — tất cả bằng tiếng Việt.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>n8n là gì?</h2>

            <p>
              n8n (đọc là &quot;n-eight-n&quot; hoặc &quot;nodemation&quot;) là
              nền tảng tự động hóa workflow <strong>mã nguồn mở</strong>. Nói đơn
              giản: n8n giúp bạn kết nối các ứng dụng lại với nhau để chúng tự
              động làm việc — không cần code.
            </p>

            <p>Ví dụ thực tế:</p>

            <ul>
              <li>
                Khách đặt đơn trên Shopee → <strong>tự động</strong> lưu vào
                Google Sheet → <strong>tự động</strong> tạo phiếu trên MISA →
                <strong> tự động</strong> gửi xác nhận qua Zalo
              </li>
              <li>
                Lead mới từ Facebook → <strong>tự động</strong> lưu vào CRM →
                <strong> tự động</strong> gửi tin chào hàng qua Zalo OA →
                <strong> tự động</strong> nhắc follow-up sau 3 ngày
              </li>
            </ul>

            <p>
              Tất cả diễn ra không cần ai bấm nút. Bạn setup một lần, n8n chạy
              24/7.
            </p>

            <h2>So sánh: n8n vs Zapier vs Make.com</h2>

            <p>
              Đây là 3 nền tảng automation phổ biến nhất. Nhưng với doanh nghiệp
              Việt Nam, sự khác biệt rất lớn:
            </p>
          </div>

          {/* Comparison Table */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 pr-4 font-display font-bold text-slate-900">
                    Tiêu chí
                  </th>
                  <th className="text-left py-3 px-3 font-display font-bold text-primary">
                    n8n
                  </th>
                  <th className="text-left py-3 px-3 font-display font-bold text-orange-500">
                    Zapier
                  </th>
                  <th className="text-left py-3 pl-3 font-display font-bold text-purple-500">
                    Make.com
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-500">
                {[
                  ["Giá", "Miễn phí (self-host) hoặc $20/tháng (cloud)", "$20–$100/tháng", "$9–$29/tháng"],
                  ["Giới hạn tasks", "Không giới hạn (self-host)", "750 tasks/tháng (plan rẻ nhất)", "10.000 ops/tháng"],
                  ["Zalo OA", "✅ Kết nối được qua API", "❌ Không hỗ trợ", "❌ Không hỗ trợ"],
                  ["MISA / KiotViet", "✅ Kết nối qua HTTP node", "❌ Không có integration", "⚠️ Phải tự build"],
                  ["Shopee API", "✅ Kết nối trực tiếp", "❌ Không hỗ trợ", "⚠️ Hạn chế"],
                  ["Data ở đâu?", "VPS của bạn (VN)", "Server nước ngoài", "Server nước ngoài"],
                  ["Mã nguồn mở", "✅ Có", "❌ Không", "❌ Không"],
                  ["Độ khó", "Trung bình", "Dễ", "Trung bình"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    <td className="py-3 pr-4 font-medium text-slate-900">{row[0]}</td>
                    <td className="py-3 px-3">{row[1]}</td>
                    <td className="py-3 px-3">{row[2]}</td>
                    <td className="py-3 pl-3">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900">
            <p>
              <strong>Kết luận:</strong> Nếu bạn chỉ cần kết nối Gmail + Google
              Sheet, Zapier đơn giản hơn. Nhưng nếu bạn cần tích hợp
              <strong> Zalo OA, MISA, KiotViet, Shopee</strong> — n8n là lựa chọn
              duy nhất hoạt động tốt với ecosystem Việt Nam.
            </p>

            <h2>Cài đặt n8n: Cloud vs Self-host</h2>

            <h3>Option 1: n8n Cloud (nhanh nhất, 5 phút)</h3>
            <p>
              Đăng ký tại n8n.io → chọn plan (có free trial) → bắt đầu build
              workflow ngay trên trình duyệt. Phù hợp nếu bạn muốn thử nghiệm
              trước khi commit.
            </p>
            <p>
              <strong>Ưu điểm:</strong> Không cần setup server. <strong>Nhược
              điểm:</strong> Data ở server nước ngoài, $20/tháng sau trial.
            </p>

            <h3>Option 2: Self-host trên VPS Việt Nam (khuyến nghị)</h3>
            <p>
              Thuê VPS tại VN (Vultr Singapore hoặc VNETWORK) → cài Docker →
              chạy n8n bằng 1 lệnh. Chi phí ~125.000 đ/tháng.
            </p>

            <p>Các bước cơ bản:</p>

            <ol>
              <li>Thuê VPS 2GB RAM, 1 vCPU (~125.000 đ/tháng)</li>
              <li>SSH vào server, cài Docker</li>
              <li>
                Chạy: <code>docker run -d --name n8n -p 5678:5678
                n8nio/n8n</code>
              </li>
              <li>Truy cập <code>http://your-ip:5678</code> → tạo account</li>
              <li>Setup domain + SSL (Let&apos;s Encrypt miễn phí)</li>
            </ol>

            <p>
              <strong>Ưu điểm:</strong> Data 100% trong nước, không giới hạn,
              chi phí cực thấp. <strong>Nhược điểm:</strong> Cần biết cơ bản
              về server (hoặc nhờ người setup).
            </p>

            <h2>3 workflow đầu tay cho người mới</h2>

            <p>
              Sau khi cài n8n, đây là 3 workflow bạn nên build đầu tiên — sắp
              xếp từ dễ đến khó:
            </p>

            <h3>Workflow 1: Google Form → Google Sheet → Email thông báo</h3>
            <p>
              <strong>Độ khó:</strong> ⭐ (Rất dễ — 15 phút) <br />
              Khi có ai submit Google Form → n8n tự động lưu vào Sheet riêng →
              gửi email thông báo cho bạn. Đây là workflow &quot;Hello World&quot;
              của n8n — giúp bạn hiểu cách trigger, node, và connection hoạt
              động.
            </p>

            <h3>Workflow 2: Lead Facebook → Google Sheet → Zalo thông báo</h3>
            <p>
              <strong>Độ khó:</strong> ⭐⭐ (Trung bình — 30 phút) <br />
              Facebook Lead Ad submit → n8n webhook nhận data → lưu vào Google
              Sheet → gửi tin nhắn Zalo cho bạn: &quot;Lead mới: Nguyễn Văn A, SĐT
              0912...&quot;. Workflow này bắt đầu cho bạn thấy sức mạnh thực tế
              của automation.
            </p>

            <h3>Workflow 3: Đơn Shopee → Google Sheet → MISA</h3>
            <p>
              <strong>Độ khó:</strong> ⭐⭐⭐ (Nâng cao — 1–2 giờ) <br />
              Đơn hàng mới trên Shopee → n8n gọi Shopee API → lưu vào Google
              Sheet → tạo phiếu bán hàng trên MISA. Đây là workflow
              &quot;real-world&quot; — cần hiểu API authentication, data mapping,
              và error handling.
            </p>

            <p>
              Chi tiết về workflow Shopee, đọc thêm:{" "}
              <a href="/blog/tu-dong-hoa-shopee" className="text-primary hover:text-primary-dark">
                Tự động hóa đơn hàng Shopee — hết nhập tay, hết sai sót
              </a>
            </p>

            <h2>Khi nào nên tự học, khi nào nên thuê chuyên gia?</h2>

            <p>
              Tự học n8n hoàn toàn khả thi — nhưng không phải lúc nào cũng là
              lựa chọn tốt nhất. Rule of thumb:
            </p>

            <ul>
              <li>
                <strong>Tự học</strong> nếu: workflow đơn giản (2–3 apps), không
                gấp, bạn thích tìm hiểu công nghệ
              </li>
              <li>
                <strong>Thuê chuyên gia</strong> nếu: cần 3+ workflows, tích hợp
                Zalo/MISA/Shopee, cần chạy trong 2–4 tuần, không có người tech
              </li>
            </ul>

            <p>
              Đọc chi tiết so sánh tại:{" "}
              <a href="/tu-lam" className="text-primary hover:text-primary-dark">
                Tự làm automation — có nên không?
              </a>
            </p>

            <h2>Bước tiếp theo</h2>

            <p>
              Nếu bạn muốn bắt đầu với n8n ngay hôm nay — đăng ký n8n Cloud
              (free trial) và thử Workflow 1 ở trên. Mất 15 phút và bạn sẽ hiểu
              ngay n8n hoạt động thế nào.
            </p>

            <p>
              Nếu bạn muốn tự động hóa cho doanh nghiệp nhưng không muốn tự
              mày mò — AutoFlow giúp bạn setup trong 2–4 tuần, với giá phù hợp
              SME Việt Nam.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-light/50 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Muốn n8n chạy cho doanh nghiệp bạn trong 2 tuần?
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Audit miễn phí 30 phút — mình phân tích quy trình và đề xuất
              workflows phù hợp nhất.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Nhận audit miễn phí
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
          </div>

          {/* Related */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
              Bài viết liên quan
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/blog/zalo-oa-automation"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Hướng dẫn
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Tự động hóa Zalo OA cho doanh nghiệp
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  5 workflow Zalo OA phổ biến nhất
                </p>
              </a>
              <a
                href="/blog/tu-dong-hoa-shopee"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Hướng dẫn
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Tự động hóa đơn hàng Shopee
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  4 workflows cho shop Shopee, tiết kiệm 4+ giờ/ngày
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
