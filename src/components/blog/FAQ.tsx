"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="my-8 not-prose">
      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors ${
                isOpen ? "border-primary/30 bg-primary/[0.02]" : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display font-semibold text-sm text-slate-800 leading-snug">
                  {item.q}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
