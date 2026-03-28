"use client";

import { useState, useEffect } from "react";
import Logo from "./ui/Logo";

const navLinks = [
  { label: "Dịch vụ", href: "/#dich-vu" },
  { label: "Quy trình", href: "/#quy-trinh" },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Kết quả", href: "/#ket-qua" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
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
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
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
