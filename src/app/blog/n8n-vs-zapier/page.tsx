import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "So sánh n8n vs Zapier cho doanh nghiệp Việt Nam — Nên chọn cái nào? | AutoFlow VN",
  description:
    "So sánh chi tiết n8n vs Zapier vs Make.com: giá, giới hạn, tích hợp Zalo/MISA/Shopee, bảo mật data. Giúp SME Việt Nam chọn đúng nền tảng automation.",
};

export default function N8nVsZapierPage() {
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
              &larr; Blog
            </a>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                So sánh
              </span>
              <span className="text-xs text-slate-400">10 phút đọc</span>
              <span className="text-xs text-slate-400">29/03/2026</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              So sánh n8n vs Zapier cho doanh nghiệp Việt Nam — Nên chọn cái nào?
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              So sánh chi tiết n8n vs Zapier vs Make.com: giá, giới hạn, tích hợp
              Zalo/MISA/Shopee, bảo mật data. Giúp SME Việt Nam chọn đúng nền
              tảng automation.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>Tại sao cần so sánh?</h2>

            <p>
              Ngày càng nhiều doanh nghiệp SME Việt Nam tìm đến automation để
              giảm thao tác thủ công, tiết kiệm nhân sự, và tăng tốc vận hành.
              Nhưng khi bắt đầu, câu hỏi đầu tiên luôn là:{" "}
              <strong>Nên dùng Zapier, Make.com, hay n8n?</strong>
            </p>

            <p>
              Ba nền tảng này đều là &ldquo;no-code / low-code automation&rdquo;
              — cho phép bạn kết nối các ứng dụng lại với nhau mà không cần viết
              code. Nhưng mỗi cái có thế mạnh riêng, và{" "}
              <strong>
                đối với doanh nghiệp Việt Nam, sự khác biệt là rất lớn
              </strong>
              : từ giá cả, giới hạn tasks, đến khả năng tích hợp với Zalo OA,
              MISA, KiotViet, và Shopee API.
            </p>

            <p>
              Bài viết này so sánh trung thực cả 3 nền tảng để giúp bạn chọn
              đúng công cụ cho doanh nghiệp mình.
            </p>

            <h2>n8n là gì?</h2>

            <p>
              n8n (đọc là &ldquo;nodemation&rdquo;) là nền tảng tự động hóa
              workflow <strong>mã nguồn mở</strong> (open source). Bạn có thể tự
              cài đặt (self-host) trên VPS của mình, hoặc dùng bản cloud của
              n8n.
            </p>

            <ul>
              <li>
                <strong>Mã nguồn mở:</strong> Code công khai trên GitHub, cộng
                đồng lớn, update liên tục. Bạn kiểm soát toàn bộ hệ thống.
              </li>
              <li>
                <strong>Self-host:</strong> Chạy trên VPS tại Việt Nam (VNG
                Cloud, Bizfly, hoặc bất kỳ VPS nào). Data không gửi ra nước
                ngoài.
              </li>
              <li>
                <strong>Không giới hạn:</strong> Self-host = chạy bao nhiêu
                workflow, bao nhiêu tasks cũng được. Không tính tiền theo số
                lượng.
              </li>
              <li>
                <strong>Low-code:</strong> Giao diện kéo thả trực quan, nhưng
                cũng hỗ trợ viết JavaScript/Python khi cần xử lý logic phức tạp.
              </li>
            </ul>

            <h2>So sánh chi tiết</h2>

            <p>
              Dưới đây là bảng so sánh 8 tiêu chí quan trọng nhất khi chọn nền
              tảng automation cho doanh nghiệp Việt Nam:
            </p>

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
                    ["Giới hạn tasks", "Không giới hạn (self-host)", "750–2.000 tasks/tháng", "10.000 ops/tháng"],
                    ["Zalo OA", "Hỗ trợ qua HTTP Request / custom node", "Không hỗ trợ", "Không hỗ trợ"],
                    ["MISA / KiotViet", "Hỗ trợ qua API", "Không hỗ trợ", "Không hỗ trợ"],
                    ["Shopee API", "Hỗ trợ đầy đủ", "Không hỗ trợ", "Không hỗ trợ"],
                    ["Data location", "VPS Việt Nam (self-host)", "Server Mỹ/EU", "Server EU"],
                    ["Mã nguồn mở", "Có (MIT license)", "Không", "Không"],
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

            <p>
              Nhìn vào bảng trên, bạn sẽ thấy:{" "}
              <strong>
                Zapier và Make.com không hỗ trợ các nền tảng Việt Nam
              </strong>{" "}
              như Zalo OA, MISA, KiotViet, hay Shopee API. Đây là điểm yếu lớn
              nhất của chúng đối với doanh nghiệp VN.
            </p>

            <h2>Khi nào dùng Zapier?</h2>

            <p>
              Zapier vẫn là lựa chọn tốt trong một số trường hợp cụ thể:
            </p>

            <ul>
              <li>
                <strong>Task đơn giản, quốc tế:</strong> Kết nối Gmail + Google
                Sheet + Slack + Notion. Zapier có 6.000+ tích hợp sẵn, chỉ cần
                vài click là xong.
              </li>
              <li>
                <strong>Không cần nền tảng VN:</strong> Nếu bạn không dùng Zalo
                OA, MISA, KiotViet, Shopee — Zapier đủ dùng.
              </li>
              <li>
                <strong>Đội non-tech:</strong> Giao diện Zapier cực kỳ dễ dùng,
                nhân viên văn phòng cũng có thể tạo workflow trong 10 phút.
              </li>
              <li>
                <strong>Khối lượng thấp:</strong> Dưới 750 tasks/tháng thì gói
                free của Zapier cũng đã đủ.
              </li>
            </ul>

            <p>
              <strong>Tóm lại:</strong> Zapier phù hợp cho doanh nghiệp dùng
              công cụ quốc tế, task đơn giản, không cần tích hợp sâu với hệ
              thống Việt Nam.
            </p>

            <h2>Khi nào dùng n8n?</h2>

            <p>
              n8n là lựa chọn tốt hơn khi doanh nghiệp bạn cần:
            </p>

            <ul>
              <li>
                <strong>Tích hợp Zalo OA:</strong> Tự động gửi tin nhắn, follow-up
                khách hàng, chăm sóc sau bán qua Zalo — Zapier và Make không
                làm được.
              </li>
              <li>
                <strong>Kết nối MISA / KiotViet:</strong> Đồng bộ đơn hàng, hóa
                đơn, tồn kho giữa các hệ thống kế toán và bán hàng đang dùng.
              </li>
              <li>
                <strong>Shopee / TikTok Shop API:</strong> Đồng bộ đơn, cập nhật
                tồn kho, auto-reply review — tất cả tự động.
              </li>
              <li>
                <strong>Self-host, data tại VN:</strong> Data khách hàng, đơn
                hàng nằm trên VPS Việt Nam. Không gửi ra nước ngoài, đảm bảo
                tuân thủ quy định bảo mật dữ liệu.
              </li>
              <li>
                <strong>Không giới hạn tasks:</strong> Self-host = chạy bao nhiêu
                workflow cũng được. Không lo vượt giới hạn như Zapier ($20/tháng
                chỉ được 750 tasks).
              </li>
              <li>
                <strong>Tiết kiệm chi phí dài hạn:</strong> VPS ~125.000 đ/tháng
                thay vì $20–$100/tháng của Zapier. Chạy càng nhiều workflow càng
                tiết kiệm.
              </li>
            </ul>

            <p>
              <strong>Tóm lại:</strong> n8n phù hợp cho doanh nghiệp cần tích hợp
              sâu với hệ sinh thái Việt Nam, cần self-host, và muốn tiết kiệm
              chi phí khi scale.
            </p>

            <h2>Kết luận</h2>

            <p>
              Đối với <strong>SME Việt Nam</strong>, n8n là lựa chọn tốt hơn
              trong đa số trường hợp vì:
            </p>

            <ul>
              <li>
                Hỗ trợ Zalo OA, MISA, KiotViet, Shopee — những nền tảng mà 90%
                SME VN đang dùng.
              </li>
              <li>
                Self-host tại Việt Nam — data không ra nước ngoài.
              </li>
              <li>
                Không giới hạn tasks — tiết kiệm chi phí khi doanh nghiệp lớn
                dần.
              </li>
              <li>
                Mã nguồn mở — kiểm soát toàn bộ, không phụ thuộc vendor.
              </li>
            </ul>

            <p>
              <strong>Zapier</strong> vẫn phù hợp nếu bạn chỉ cần kết nối các
              công cụ quốc tế (Gmail, Slack, Notion) với khối lượng thấp và
              không cần tích hợp nền tảng Việt Nam.
            </p>

            <p>
              Nếu bạn chưa chắc nên chọn gì, hãy để AutoFlow audit quy trình
              doanh nghiệp bạn miễn phí — mình sẽ tư vấn cụ thể nên dùng công cụ
              nào và bắt đầu từ đâu.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-light/50 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Muốn biết nên dùng gì cho doanh nghiệp bạn?
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Audit miễn phí 30 phút — mình phân tích quy trình và tư vấn nền
              tảng automation phù hợp nhất.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Audit miễn phí 30 phút
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
                href="/blog/huong-dan-n8n"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-primary font-semibold">
                  Hướng dẫn
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Hướng dẫn n8n tiếng Việt — Từ zero đến workflow đầu tiên
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Cài đặt, 3 workflow đầu tay, và khi nào nên thuê chuyên gia
                </p>
              </a>
              <a
                href="/tu-lam"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs text-amber-600 font-semibold">
                  Tự làm
                </span>
                <p className="font-semibold text-sm text-slate-900 mt-1">
                  Tự làm automation — có nên không?
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  So sánh trung thực DIY vs thuê chuyên gia
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
