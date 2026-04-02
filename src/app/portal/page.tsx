"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/ui/Logo";
import FormField from "@/components/ui/FormField";
import { createClient } from "@/lib/supabase/client";

export default function PortalLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
      setLoading(false);
      return;
    }

    router.push("/portal/dashboard");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <a href="/">
            <Logo dark />
          </a>
        </div>

        {/* Login card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h1 className="font-display font-bold text-xl text-slate-900 mb-1">
            Client Portal
          </h1>
          <p className="text-sm text-slate-500 mb-6">
            Đăng nhập để xem tiến độ project.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-xl">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              label="Email"
              name="email"
              type="email"
              required
              placeholder="email@company.com"
            />
            <FormField
              label="Mật khẩu"
              name="password"
              type="password"
              required
              placeholder="••••••••"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>

          <p className="text-xs text-center text-slate-500 mt-4">
            Quên mật khẩu?{" "}
            <a
              href="mailto:hello@autoflowvn.net"
              className="text-primary hover:text-primary-dark"
            >
              Liên hệ hỗ trợ
            </a>
          </p>
        </div>

        {/* Back to site */}
        <p className="text-center mt-6">
          <a
            href="/"
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
          >
            ← Quay lại trang chính
          </a>
        </p>
      </div>
    </div>
  );
}
