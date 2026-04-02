import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckItem from "@/components/ui/CheckItem";

export const metadata: Metadata = {
  title: "Tự làm automation bằng n8n — Có nên không? | AutoFlow VN",
  description:
    "Hướng dẫn thật về tự học n8n automation: learning path, thời gian cần, chi phí, và khi nào nên thuê chuyên gia. So sánh trung thực DIY vs thuê AutoFlow.",
};

const learningSteps = [
  {
    step: "01",
    title: "Học n8n cơ bản",
    duration: "2–4 tuần",
    description:
      "Đăng ký n8n cloud (free tier) hoặc self-host trên VPS. Xem hết n8n Academy (miễn phí). Làm quen giao diện, hiểu node, trigger, workflow. Thử build 2–3 workflow đơn giản theo tutorial.",
    resources: ["n8n Academy (n8n.io/learn)", "YouTube: n8n tutorials", "n8n Community forum"],
  },
  {
    step: "02",
    title: "Build workflow thật",
    duration: "2–3 tháng practice",
    description:
      "Tích hợp với hệ thống thật (Zalo OA, Shopee, Google Sheet). Xử lý error handling, retry logic, edge cases. Đây là phần khó nhất — tutorial không cover hết những lỗi thực tế khi data không clean.",
    resources: ["Zalo OA API docs", "Shopee Open Platform", "n8n Community nodes"],
  },
  {
    step: "03",
    title: "Vận hành & bảo trì",
    duration: "Ongoing — mỗi tuần 2–4 giờ",
    description:
      "Monitor workflow chạy ổn định. Fix lỗi khi API thay đổi (Shopee update API ~2 lần/năm). Update n8n version. Backup data. Đây là phần nhiều người quên — build xong không phải là xong.",
    resources: ["n8n changelog", "Monitoring tools (Uptime Kuma)", "Backup scripts"],
  },
];

const comparison = [
  {
    criteria: "Thời gian đến kết quả",
    diy: "3–6 tháng (học + build + debug)",
    autoflow: "2–4 tuần (build xong, chạy ngay)",
  },
  {
    criteria: "Chi phí",
    diy: "~0 đ (nhưng mất 200–400 giờ học)",
    autoflow: "8–80 triệu (tùy scope)",
  },
  {
    criteria: "Rủi ro lỗi",
    diy: "Cao — bạn chưa gặp edge cases",
    autoflow: "Thấp — đã build 50+ workflows tương tự",
  },
  {
    criteria: "Bảo trì",
    diy: "Tự fix mọi thứ, mọi lúc",
    autoflow: "Retainer: fix trong 24h, monitor 24/7",
  },
  {
    criteria: "Kết quả",
    diy: "Được, nhưng mất thời gian trial & error",
    autoflow: "Workflow production-ready từ ngày 1",
  },
];

const faqs = [
  {
    q: "Tôi không biết code. Có tự làm được không?",
    a: "Được, n8n là no-code/low-code. Nhưng khi tích hợp Zalo OA hoặc Shopee API, bạn sẽ cần hiểu JSON, webhook, và HTTP request. Không cần code, nhưng cần tư duy logic tốt. Thực tế: 70% người bắt đầu tự học sẽ stuck ở bước tích hợp API thật.",
  },
  {
    q: "Mất bao lâu để tự học n8n đủ dùng?",
    a: "Cơ bản: 2–4 tuần nếu học mỗi ngày 1–2 giờ. Đủ build workflow production: 2–3 tháng practice với hệ thống thật. Thành thạo xử lý edge cases và error handling: 6+ tháng. Tùy background — nếu bạn đã quen Google Sheet, Zapier thì nhanh hơn.",
  },
  {
    q: "Chi phí tự host n8n là bao nhiêu?",
    a: "VPS tại VN (2GB RAM, 1 vCPU): ~125.000 đ/tháng (~1.5 triệu/năm). Domain (nếu cần): ~250.000 đ/năm. SSL: miễn phí (Let's Encrypt). Tổng: dưới 2 triệu đ/năm. Rẻ hơn Zapier rất nhiều ($240/năm cho plan rẻ nhất).",
  },
];

export default function TuLamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold mb-5">
            Tự làm hay thuê?
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-5">
            Tự động hóa bằng n8n —{" "}
            <span className="gradient-text">bạn có thể tự làm không?</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Câu trả lời thật: <strong className="text-slate-700">có, bạn có thể.</strong>{" "}
            n8n là nền tảng mã nguồn mở, ai cũng học được. Nhưng &quot;có thể&quot;
            và &quot;nên tự làm&quot; là hai câu hỏi khác nhau. Bài viết này giúp
            bạn quyết định — không bán hàng, chỉ nói thật.
          </p>
        </section>

        {/* Learning Path */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">
            Lộ trình tự học n8n
          </h2>
          <p className="text-sm text-slate-500 mb-8">
            3 giai đoạn — từ zero đến chạy workflow thật cho doanh nghiệp.
          </p>

          <div className="space-y-6">
            {learningSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-amber-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-extrabold text-2xl text-amber-500/30">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    Resources:
                  </p>
                  <ul className="space-y-1">
                    {step.resources.map((r, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-500 flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-sm text-amber-800">
              <strong>Tổng thời gian thực tế:</strong> 3–6 tháng từ zero đến
              workflow production-ready. Nếu bạn có thời gian và thích học —
              hoàn toàn worth it.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">
            So sánh trung thực: DIY vs thuê AutoFlow
          </h2>
          <p className="text-sm text-slate-500 mb-8">
            Không thiên vị — mỗi cách đều có trade-off.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 pr-4 font-display font-bold text-slate-900">
                    Tiêu chí
                  </th>
                  <th className="text-left py-3 px-4 font-display font-bold text-amber-600">
                    Tự làm (DIY)
                  </th>
                  <th className="text-left py-3 pl-4 font-display font-bold text-primary">
                    Thuê AutoFlow
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="py-3.5 pr-4 font-medium text-slate-900">
                      {row.criteria}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">{row.diy}</td>
                    <td className="py-3.5 pl-4 text-slate-500">
                      {row.autoflow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-8">
            Khi nào nên tự làm, khi nào nên thuê?
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* DIY */}
            <div className="bg-amber-50 rounded-2xl border border-amber-100 p-7">
              <h3 className="font-display font-bold text-amber-800 mb-4">
                Tự làm phù hợp khi...
              </h3>
              <div className="space-y-3">
                {[
                  "Bạn thích học công nghệ mới",
                  "Workflow đơn giản (1–2 apps, logic thẳng)",
                  "Không gấp — có 3–6 tháng để thử",
                  "Budget rất hạn chế",
                  "Bạn muốn kiểm soát 100% hệ thống",
                ].map((item, i) => (
                  <CheckItem key={i}>{item}</CheckItem>
                ))}
              </div>
            </div>

            {/* AutoFlow */}
            <div className="bg-primary-light/50 rounded-2xl border border-primary/10 p-7">
              <h3 className="font-display font-bold text-primary-dark mb-4">
                Thuê AutoFlow phù hợp khi...
              </h3>
              <div className="space-y-3">
                {[
                  "Bạn cần kết quả trong 2–4 tuần",
                  "Workflow phức tạp (3+ apps, logic rẽ nhánh)",
                  "Đang mất tiền mỗi ngày vì nhập tay",
                  "Không có người tech trong team",
                  "Cần tích hợp Zalo OA, MISA, KiotViet",
                ].map((item, i) => (
                  <CheckItem key={i}>{item}</CheckItem>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA — Dual Path */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-8">
              {/* DIY Path */}
              <div>
                <h3 className="font-display font-bold text-white text-lg mb-3">
                  Muốn tự làm?
                </h3>
                <p className="text-sm text-slate-400 mb-5">
                  Bắt đầu với resources miễn phí — mình ủng hộ 100%.
                </p>
                <ul className="space-y-2.5">
                  {[
                    { label: "n8n Academy — Khóa học miễn phí", href: "https://n8n.io/learn" },
                    { label: "n8n Community — Hỏi đáp", href: "https://community.n8n.io" },
                    { label: "Self-host guide", href: "https://docs.n8n.io/hosting/" },
                  ].map((link, i) => (
                    <li key={i}>
                      <span className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                        {link.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AutoFlow Path */}
              <div>
                <h3 className="font-display font-bold text-white text-lg mb-3">
                  Muốn nhanh hơn?
                </h3>
                <p className="text-sm text-slate-400 mb-5">
                  30 phút audit miễn phí — mình phân tích quy trình và nói thẳng
                  bạn nên tự làm hay thuê.
                </p>
                <a
                  href="/audit"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Audit miễn phí
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
                <p className="text-xs text-slate-400 mt-3">
                  Không bán hàng. Nếu tự làm hợp lý hơn, mình sẽ nói thẳng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-8">
            Câu hỏi thường gặp về tự làm automation
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-display font-bold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
