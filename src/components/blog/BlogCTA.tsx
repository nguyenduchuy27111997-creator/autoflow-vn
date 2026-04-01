export default function BlogCTA() {
  return (
    <div className="my-12 not-prose relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10">
      {/* Decorative */}
      <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" fill="none" stroke="#0066FF" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h3 className="font-display font-extrabold text-xl text-white mb-2">
          Sẵn sàng tự động hóa?
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          Đặt lịch audit miễn phí 30 phút — mình sẽ phân tích quy trình của bạn
          và đưa ra lộ trình cụ thể. Hoặc làm quiz 2 phút để biết mức độ sẵn sàng.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/audit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            Nhận Audit Miễn Phí
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all"
          >
            Làm Quiz 2 Phút
          </a>
        </div>
      </div>
    </div>
  );
}
