import CheckItem from "./ui/CheckItem";

export default function CTA() {
  return (
    <section
      id="lien-he"
      className="py-20 md:py-28 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
              Bắt đầu ngay hôm nay
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight mb-6">
              Audit quy trình miễn phí
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Mô tả pain → discovery call 30 phút → audit report cá nhân hóa
              48h. Bạn giữ report, quyết định bước tiếp theo.
            </p>

            {/* Trust signals */}
            <div className="space-y-3">
              {[
                "Discovery call 30 phút — focus vào pain, không pitch bán hàng",
                "Audit Report cá nhân hóa trong 48h",
                "Proposal chỉ gửi khi bạn chủ động confirm",
              ].map((item, i) => (
                <CheckItem key={i} dark>
                  {item}
                </CheckItem>
              ))}
            </div>
          </div>

          {/* Right: CTA card linking to /audit */}
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
              Mất 2 phút điền form
            </h3>
            <p className="text-slate-500 mb-6 max-w-sm mx-auto">
              Mô tả pain của bạn. Mình liên hệ trong 24h để sắp xếp discovery
              call.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Bắt đầu audit miễn phí
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <p className="text-xs text-slate-400 mt-4">
              Miễn phí · Không ràng buộc · Không spam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
