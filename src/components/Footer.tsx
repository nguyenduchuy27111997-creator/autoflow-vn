import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
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
                href="https://zalo.me/0935115248"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Zalo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z"/></svg>
              </a>
              <a
                href="https://facebook.com/autoflowvn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <span className="text-xs font-bold">f</span>
              </a>
              <a
                href="https://linkedin.com/company/autoflowvn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Dịch vụ */}
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

          {/* Khám phá */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4">
              Khám phá
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Bảng giá", href: "/bang-gia" },
                { label: "Quy trình", href: "/quy-trinh" },
                { label: "Kết quả", href: "/ket-qua" },
                { label: "Mẫu Workflow", href: "/mau-workflow" },
                { label: "Về chúng tôi", href: "/ve-chung-toi" },
                { label: "Đối tác", href: "/doi-tac" },
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

          {/* Liên hệ */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4">
              Liên hệ
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-slate-400">
                <a
                  href="tel:0935115248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  📱 Zalo: 0935115248
                </a>
              </li>
              <li className="text-sm text-slate-400">
                <a
                  href="mailto:support@autoflowvn.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  ✉️ support@autoflowvn.net
                </a>
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
