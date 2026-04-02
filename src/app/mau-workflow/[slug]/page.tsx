import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import StepList from "@/components/blog/StepList";
import JsonLd from "@/components/JsonLd";
import { templates, COMPLEXITY_MAP, PRICING_MAP } from "@/data/templates";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = templates.find((t) => t.slug === slug);
  if (!t) return {};
  return {
    title: `${t.name} | Mẫu Workflow n8n — AutoFlow VN`,
    description: t.shortDesc,
    alternates: { canonical: `https://autoflowvn.net/mau-workflow/${t.slug}` },
    openGraph: {
      title: t.name,
      description: t.shortDesc,
      url: `https://autoflowvn.net/mau-workflow/${t.slug}`,
    },
  };
}

export default async function TemplateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = templates.find((t) => t.slug === slug);
  if (!t) notFound();

  const complexity = COMPLEXITY_MAP[t.complexity];
  const pricing = PRICING_MAP[t.pricingTier];
  const related = templates.filter((r) => r.slug !== t.slug && (r.category === t.category || r.industries.some((i) => t.industries.includes(i)))).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: t.name,
          description: t.shortDesc,
          step: t.steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.title,
            text: s.desc,
          })),
          tool: t.integrations.map((int) => ({
            "@type": "SoftwareApplication",
            name: int.name,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://autoflowvn.net" },
            { "@type": "ListItem", position: 2, name: "Mẫu Workflow", item: "https://autoflowvn.net/mau-workflow" },
            { "@type": "ListItem", position: 3, name: t.name, item: `https://autoflowvn.net/mau-workflow/${t.slug}` },
          ],
        }}
      />
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/mau-workflow" className="hover:text-primary transition-colors">Mẫu Workflow</Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[250px]">{t.name}</span>
          </nav>

          {/* Hero */}
          <div className="mb-8">
            {/* Integration icons */}
            <div className="flex items-center gap-2 mb-4">
              {t.integrations.map((int, i) => (
                <span key={i} className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-lg" title={int.name}>
                  {int.icon}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2.5 mb-3">
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${complexity.color}`}>
                {complexity.label}
              </span>
              <span className="text-[11px] text-slate-400">{t.categoryLabel}</span>
            </div>

            <h1 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-3">
              {t.name}
            </h1>
            <p className="text-slate-500 leading-relaxed">{t.shortDesc}</p>

            {/* Key stats */}
            <div className="flex flex-wrap gap-4 mt-5">
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-primary font-bold">⏱ {t.timeSaved}</span>
                <span className="text-slate-400">tiết kiệm</span>
              </div>
              {t.errorReduction && (
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="text-emerald-600 font-bold">✓ {t.errorReduction}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-slate-600 font-bold">💰 {pricing.label}</span>
                <span className="text-slate-400">{pricing.range}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={`/audit?template=${t.slug}&industry=${t.industries[0] || ""}`}
              className="flex-1 text-center px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Yêu Cầu Xây Dựng Workflow Này →
            </a>
            <Link
              href="/bang-gia"
              className="flex-1 text-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Xem Bảng Giá
            </Link>
          </div>

          {/* Pain point */}
          <div className="bg-red-50/50 border border-red-100 rounded-xl p-5 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-lg">😫</span>
              <div>
                <div className="font-semibold text-sm text-red-800 mb-1">Vấn đề hiện tại</div>
                <p className="text-sm text-red-700">{t.painPoint}</p>
              </div>
            </div>
          </div>

          {/* Workflow Flow diagram */}
          <h2 className="font-display font-bold text-lg text-slate-900 mb-1">Workflow hoạt động như thế nào?</h2>
          <WorkflowFlow
            steps={t.flowSteps.map((s) => ({
              icon: <span className="text-lg">{s.icon}</span>,
              label: s.label,
              sub: s.sub,
            }))}
            accentColor="#0066FF"
          />

          {/* Steps */}
          <h2 className="font-display font-bold text-lg text-slate-900 mt-10 mb-4">Các bước triển khai</h2>
          <StepList steps={t.steps} />

          {/* ROI */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mt-8 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-lg">💰</span>
              <div>
                <div className="font-semibold text-sm text-emerald-800 mb-1">ROI dự kiến</div>
                <p className="text-sm text-emerald-700">{t.roiHighlight}</p>
              </div>
            </div>
          </div>

          {/* DIY vs AutoFlow */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-8">
            <div className="grid grid-cols-2">
              <div className="p-5 border-r border-slate-200">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tự làm (DIY)</div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>⏱ Ước tính 2-4 tuần tự build</li>
                  <li>📚 Cần học n8n cơ bản</li>
                  <li>🔧 Tự debug khi có lỗi</li>
                  <li>💰 Miễn phí (chỉ tốn thời gian)</li>
                </ul>
                {t.blogSlug && (
                  <Link href={`/blog/${t.blogSlug}`} className="inline-block mt-3 text-xs text-primary font-semibold hover:underline">
                    Đọc hướng dẫn DIY →
                  </Link>
                )}
              </div>
              <div className="p-5 bg-primary/5">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">AutoFlow xây dựng</div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li>⚡ Giao trong 1-2 tuần</li>
                  <li>✅ Test kỹ trước bàn giao</li>
                  <li>🛡️ Bảo hành + hỗ trợ 30 ngày</li>
                  <li>💰 Từ {pricing.range}</li>
                </ul>
                <a href={`/audit?template=${t.slug}`} className="inline-block mt-3 text-xs text-primary font-semibold hover:underline">
                  Yêu cầu xây dựng →
                </a>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-slate-900 rounded-2xl p-8 text-center mb-10">
            <h3 className="font-display font-bold text-lg text-white mb-2">Sẵn sàng tự động hóa?</h3>
            <p className="text-sm text-slate-400 mb-5">Đặt audit miễn phí 30 phút — mình sẽ phân tích quy trình và đưa ra lộ trình cụ thể.</p>
            <a
              href={`/audit?template=${t.slug}&industry=${t.industries[0] || ""}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
            >
              Đặt Audit Miễn Phí →
            </a>
          </div>

          {/* Related templates */}
          {related.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-4">Mẫu workflow liên quan</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/mau-workflow/${r.slug}`}
                    className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md hover:border-slate-300 transition-all group"
                  >
                    <div className="flex gap-1 mb-2">
                      {r.integrations.slice(0, 3).map((int, i) => (
                        <span key={i} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center text-xs">{int.icon}</span>
                      ))}
                    </div>
                    <h4 className="font-semibold text-xs text-slate-900 group-hover:text-primary transition-colors mb-1 line-clamp-2">
                      {r.name}
                    </h4>
                    <span className="text-[10px] text-primary font-semibold">⏱ {r.timeSaved}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
