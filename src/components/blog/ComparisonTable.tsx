"use client";

import { useRef, useState, useEffect } from "react";

export default function ComparisonTable({
  headers,
  rows,
  highlightCol,
}: {
  headers: string[];
  rows: string[][];
  highlightCol?: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [scrolledToEnd, setScrolledToEnd] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      const hasOverflow = el.scrollWidth > el.clientWidth + 2;
      setCanScroll(hasOverflow);
      setScrolledToEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };

    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div className="my-8 not-prose relative">
      {/* Fade hint on right edge when scrollable */}
      {canScroll && !scrolledToEnd && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      )}

      <div ref={scrollRef} className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {headers.map((h, i) => {
                const isHighlight = i === highlightCol;
                const isFirst = i === 0;
                const isLast = i === headers.length - 1;
                return (
                  <th
                    key={i}
                    className={`px-4 py-3 text-left font-display font-bold text-xs uppercase tracking-wider whitespace-nowrap ${
                      isHighlight ? "bg-primary text-white" : "bg-slate-100 text-slate-600"
                    } ${isFirst ? "rounded-tl-lg sticky left-0 z-20" : ""} ${
                      isLast ? "rounded-tr-lg" : ""
                    }`}
                  >
                    {h}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-slate-100">
                {row.map((cell, ci) => {
                  const isHighlight = ci === highlightCol;
                  const isFirst = ci === 0;
                  return (
                    <td
                      key={ci}
                      className={`px-4 py-3 ${
                        isHighlight
                          ? "bg-primary/5 font-medium text-slate-900"
                          : "text-slate-600"
                      } ${
                        isFirst
                          ? `font-medium text-slate-800 sticky left-0 z-10 ${
                              isHighlight ? "bg-primary/5" : "bg-white"
                            }`
                          : ""
                      }`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile scroll hint */}
      {canScroll && (
        <div className="text-[10px] text-slate-400 text-right mt-1 sm:hidden">
          ← vuốt để xem thêm →
        </div>
      )}
    </div>
  );
}
