"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="hidden xl:block sticky top-24 w-56 shrink-0 self-start max-h-[calc(100vh-8rem)] overflow-y-auto not-prose">
      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
        Mục lục
      </div>
      <ul className="space-y-1.5 border-l border-slate-200">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-xs leading-relaxed transition-colors pl-3 border-l-2 -ml-px ${
                activeId === item.id
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              } ${item.level === 3 ? "pl-6" : ""}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
