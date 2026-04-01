"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const SITE_URL = "https://autoflowvn.net";

export default function ShareButtons({ title }: { title: string }) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}${pathname}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 not-prose">
      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mr-1">Chia sẻ</span>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors"
        title="Chia sẻ Facebook"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>

      {/* Zalo */}
      <a
        href={`https://zalo.me/share?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-50 flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors"
        title="Chia sẻ Zalo"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.037 0 11.25c0 3.525 1.7 6.675 4.35 8.775V24l3.6-1.95c1.275.375 2.625.45 3.975.45h.075c6.627 0 12-5.037 12-11.25S18.627 0 12 0zm1.2 15.15H9.9l-.15-.225L6.6 11.1h1.95l2.1 2.55 2.1-2.55h1.95l-3.15 3.825-.15.225zm3.6-5.85H9.6v-.975h7.2v.975zm0-2.1H9.6V6.225h7.2V7.2z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-50 flex items-center justify-center text-slate-400 hover:text-blue-700 transition-colors"
        title="Chia sẻ LinkedIn"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>

      {/* Copy link */}
      <button
        onClick={handleCopy}
        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
          copied ? "bg-green-50 text-green-600" : "bg-slate-100 hover:bg-slate-200 text-slate-400"
        }`}
        title={copied ? "Đã copy!" : "Copy link"}
      >
        {copied ? (
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        )}
      </button>
    </div>
  );
}
