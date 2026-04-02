"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface ProofItem {
  name: string;
  action: string;
  timeAgo: string;
}

const EXCLUDED_PATHS = ["/portal", "/quiz"];

function getTimeAgo(date: string): string {
  const diff = Date.now() - new Date(date).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "vừa xong";
  if (mins < 60) return `${mins} phút trước`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  return `${days} ngày trước`;
}

function maskName(name: string | null): string {
  if (!name || name.length < 2) return "Ai đó";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0] + "***";
  // Show first name + masked last: "Nguyễn V***"
  const last = parts[parts.length - 1];
  return parts.slice(0, -1).join(" ") + " " + last[0] + "***";
}

export default function SocialProof() {
  const [items, setItems] = useState<ProofItem[]>([]);
  const [current, setCurrent] = useState<ProofItem | null>(null);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Fetch recent leads on mount
  useEffect(() => {
    if (EXCLUDED_PATHS.some((p) => pathname.startsWith(p))) return;

    async function fetchRecent() {
      // Return cached data if available (avoid re-querying on every page visit)
      const cached = sessionStorage.getItem("sp_proof_cache");
      if (cached) {
        try {
          const proofs: ProofItem[] = JSON.parse(cached);
          proofs.sort(() => Math.random() - 0.5);
          setItems(proofs);
          return;
        } catch {
          sessionStorage.removeItem("sp_proof_cache");
        }
      }

      const supabase = createClient();

      const { data } = await supabase
        .from("v_recent_activity")
        .select("name, action_type, created_at");

      if (!data) return;

      const actionMap: Record<string, string> = {
        quiz: "vừa làm quiz đánh giá",
        audit: "vừa đăng ký audit miễn phí",
        pdf: "vừa tải tài liệu",
      };

      const proofs: ProofItem[] = data.map((r) => ({
        name: maskName(r.name),
        action: actionMap[r.action_type] || "vừa tương tác",
        timeAgo: getTimeAgo(r.created_at),
      }));

      // Cache in sessionStorage — expires when tab closes
      sessionStorage.setItem("sp_proof_cache", JSON.stringify(proofs));

      // Shuffle
      proofs.sort(() => Math.random() - 0.5);
      setItems(proofs);
    }

    fetchRecent();
  }, [pathname]);

  // Rotate notifications
  useEffect(() => {
    if (items.length === 0) return;
    if (EXCLUDED_PATHS.some((p) => pathname.startsWith(p))) return;

    let index = 0;

    const show = () => {
      setCurrent(items[index % items.length]);
      setVisible(true);

      // Hide after 4s
      setTimeout(() => {
        setVisible(false);
      }, 4000);

      index++;
    };

    // First show after 8s delay
    const initialTimer = setTimeout(show, 8000);

    // Then every 15s
    const interval = setInterval(show, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [items, pathname]);

  const dismiss = useCallback(() => setVisible(false), []);

  if (!current || EXCLUDED_PATHS.some((p) => pathname.startsWith(p))) return null;

  return (
    <div
      className={`fixed bottom-20 left-4 z-50 transition-all duration-500 ease-out ${
        visible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg shadow-black/5 border border-slate-200 p-3.5 pr-10 max-w-xs relative">
        <button
          onClick={dismiss}
          className="absolute top-2 right-2 w-5 h-5 rounded flex items-center justify-center text-slate-300 hover:text-slate-500 transition-colors"
        >
          <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-start gap-2.5">
          {/* Avatar placeholder */}
          <div className="w-8 h-8 min-w-[32px] rounded-full bg-accent/10 flex items-center justify-center">
            <svg width="14" height="14" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong className="font-semibold">{current.name}</strong>{" "}
              {current.action}
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5">{current.timeAgo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
