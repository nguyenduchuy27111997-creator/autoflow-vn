import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import DeepProfileForm from "./DeepProfileForm";
import { loadAuditForProfile } from "./loader";

export default async function DeepProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const id = typeof params.id === "string" ? params.id : null;

  // No id → redirect to audit form
  if (!id) {
    redirect("/audit");
  }

  const audit = await loadAuditForProfile(id);

  // Invalid id → redirect to audit form
  if (!audit) {
    redirect("/audit");
  }

  // Already completed
  if (audit.tier2_completed_at) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20">
          <section className="max-w-2xl mx-auto px-6 text-center">
            <div className="bg-white rounded-2xl border border-slate-200 p-12">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.5"
                >
                  <path d="M6 20l10 10 18-18" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">
                Đã hoàn thành trước đó
              </h2>
              <p className="text-slate-500 mb-8">
                Bạn đã hoàn thành deep profile rồi. Huy sẽ liên hệ trong 2h với
                audit report cá nhân hóa.
              </p>
              <Link
                href="/audit"
                className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all"
              >
                Quay về trang audit
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Deep Profile · ~10 phút · Nhận audit trong 2 giờ
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight tracking-tight mb-4">
            Xin chào{audit.name ? `, ${audit.name}` : ""}!
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            Hoàn thành 5 phần dưới đây để nhận audit report cá nhân hóa trong
            2 giờ thay vì 24 giờ. Tất cả trường không bắt buộc — điền càng
            nhiều, tư vấn càng chính xác.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-6">
          <DeepProfileForm
            auditId={audit.id}
            industry={audit.industry ?? "other"}
            painPrimary={audit.pain_primary}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
