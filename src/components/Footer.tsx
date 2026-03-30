import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo dark className="mb-4" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Giúp doanh nghiệp vừa và nhỏ Việt Nam tự động hóa quy trình lặp
              lại. Tích hợp Zalo, MISA, Shopee, KiotViet. Kết quả trong 2–4
              tuần.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Zalo"
              >
                <span className="text-xs font-bold">Z</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <span className="text-xs font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4">
              Dịch vụ
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "E-commerce Automation", href: "/dich-vu/e-commerce" },
                { label: "Giáo dục & Đào tạo", href: "/dich-vu/giao-duc" },
                { label: "Bất động sản", href: "/dich-vu/bat-dong-san" },
                { label: "F&B / Nhà hàng", href: "/dich-vu/fnb" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4">
              Liên hệ
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-slate-400">📱 Zalo: 0912 345 678</li>
              <li className="text-sm text-slate-400">
                ✉️ hello@autoflowvn.net
              </li>
              <li className="text-sm text-slate-400">📍 TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2026 AutoFlow.vn — Tự động hóa thông minh cho SME Việt Nam
          </p>
          <div className="flex gap-6">
            <a
              href="/chinh-sach-bao-mat"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Chính sách bảo mật
            </a>
            <a
              href="/dieu-khoan"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Điều khoản
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
