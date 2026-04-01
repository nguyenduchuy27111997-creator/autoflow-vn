"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  lang?: string;
  title?: string;
}

export default function CodeBlock({ code, lang = "bash", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-5 not-prose rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          {title && (
            <span className="text-[10px] font-medium text-slate-400 ml-2">{title}</span>
          )}
          {!title && lang && (
            <span className="text-[10px] font-medium text-slate-500 ml-2">{lang}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          {copied ? (
            <>
              <svg width="12" height="12" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="px-4 py-3 overflow-x-auto">
        <pre className="text-[13px] leading-relaxed font-mono">
          {code.split("\n").map((line, i) => (
            <div key={i} className="flex">
              {lang === "bash" && (
                <span className="select-none text-slate-600 mr-3 shrink-0">$</span>
              )}
              <code className="text-slate-300">
                {highlightLine(line, lang)}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

/** Simple syntax highlighting — no heavy library needed */
function highlightLine(line: string, lang: string): React.ReactNode {
  if (lang === "bash") {
    // Highlight commands, flags, strings, comments
    return line.split(/(\s+)/).map((part, i) => {
      if (part.startsWith("#")) return <span key={i} className="text-slate-500 italic">{part}</span>;
      if (part.startsWith("-")) return <span key={i} className="text-cyan-400">{part}</span>;
      if (part.startsWith('"') || part.startsWith("'")) return <span key={i} className="text-green-400">{part}</span>;
      if (["docker", "npm", "npx", "curl", "git", "mkdir", "cd", "apt", "brew", "ssh", "sudo", "chmod", "cat", "echo"].includes(part))
        return <span key={i} className="text-amber-400 font-semibold">{part}</span>;
      if (["compose", "install", "run", "build", "up", "clone", "init", "start"].includes(part))
        return <span key={i} className="text-blue-400">{part}</span>;
      return <span key={i}>{part}</span>;
    });
  }

  if (lang === "yaml" || lang === "yml") {
    if (line.trim().startsWith("#")) return <span className="text-slate-500 italic">{line}</span>;
    const colonIdx = line.indexOf(":");
    if (colonIdx > -1) {
      return (
        <>
          <span className="text-cyan-400">{line.slice(0, colonIdx)}</span>
          <span className="text-slate-500">:</span>
          <span className="text-green-400">{line.slice(colonIdx + 1)}</span>
        </>
      );
    }
    return <span>{line}</span>;
  }

  return <span>{line}</span>;
}
