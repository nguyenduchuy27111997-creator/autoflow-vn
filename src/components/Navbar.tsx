"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./ui/Logo";

const services = [
  { label: "E-commerce", href: "/dich-vu/e-commerce", desc: "Shopee, Tiki, TikTok Shop" },
  { label: "Giáo dục & Đào tạo", href: "/dich-vu/giao-duc", desc: "Trung tâm, chuỗi trường học" },
  { label: "Bất động sản", href: "/dich-vu/bat-dong-san", desc: "Agency, sàn giao dịch" },
  { label: "F&B / Nhà hàng", href: "/dich-vu/fnb", desc: "Quán cafe, chuỗi nhà hàng" },
];

const navLinks = [
  { label: "Quy trình", href: "/#quy-trinh" },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Kết quả", href: "/ket-qua" },
  { label: "Tài liệu", href: "/tai-lieu" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // Pages with dark backgrounds need navbar always visible
  const forceSolid = pathname === "/quiz";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || forceSolid
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="group">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Dịch vụ dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <a
              href="/#dich-vu"
              className="text-sm font-medium text-slate-500 hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              Dịch vụ
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`}
              >
                <path d="M3 5l3 3 3-3" />
              </svg>
            </a>

            {serviceOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-2 w-64">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-900">
                        {s.label}
                      </span>
                      <span className="text-xs text-slate-400">{s.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/audit"
            className="text-sm font-semibold text-white bg-primary hover:bg-primary-dark px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Audit miễn phí
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-600"
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          {/* Mobile services */}
          <div className="py-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
              Dịch vụ
            </p>
            {services.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-primary py-1.5 pl-3"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/audit"
            onClick={() => setMobileOpen(false)}
            className="block text-center text-sm font-semibold text-white bg-primary px-5 py-2.5 rounded-lg mt-2"
          >
            Audit miễn phí
          </a>
        </div>
      )}
    </nav>
  );
}
