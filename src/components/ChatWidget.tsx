"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { usePathname } from "next/navigation";

const EXCLUDED_PATHS = ["/portal"];
const MAX_MESSAGES_PER_SESSION = 20;
const STORAGE_KEY = "autoflow_chat_open";

/** Format: escape HTML → bold → links → newlines */
function formatChat(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener" class="underline underline-offset-2">$1</a>'
    )
    .replace(
      /(?<!=")\/(?:audit|quiz|bang-gia|tai-lieu|blog)(?:\/[^\s<]*)?/g,
      (match) =>
        `<a href="${match}" class="underline underline-offset-2">${match}</a>`
    )
    .replace(/\n/g, "<br />");
}

function gtag(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

const QUICK_REPLIES = [
  { label: "📋 Xem bảng giá", value: "Bảng giá các gói dịch vụ của AutoFlow là bao nhiêu?" },
  { label: "🎯 Đặt audit miễn phí", value: "Mình muốn đặt lịch audit miễn phí 30 phút" },
  { label: "📝 Làm quiz", value: "Quiz đánh giá mức độ sẵn sàng tự động hóa là gì?" },
];

const GREETING = "Chào bạn! 👋 Mình là trợ lý AI của AutoFlow VN. Hỏi mình bất cứ điều gì về tự động hóa quy trình cho doanh nghiệp nhé!";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [input, setInput] = useState("");
  const [msgCount, setMsgCount] = useState(0);
  const [unread, setUnread] = useState(0);
  const sessionIdRef = useRef<string>("");

  // Generate session ID only on client to avoid hydration mismatch
  useEffect(() => {
    if (!sessionIdRef.current) {
      sessionIdRef.current = crypto.randomUUID();
    }
  }, []);

  const sessionId = sessionIdRef.current || "pending";
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const prevMsgCount = useRef(0);

  const { messages, status, sendMessage, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: { sessionId },
    }),
    messages: [
      {
        id: "greeting",
        role: "assistant" as const,
        content: GREETING,
        parts: [{ type: "text" as const, text: GREETING }],
      },
    ] as unknown as import("ai").UIMessage[],
    onError: () => {
      gtag("chat_error");
    },
  });

  const isBusy = status === "streaming" || status === "submitted";
  const rateLimited = msgCount >= MAX_MESSAGES_PER_SESSION;

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  // Show tooltip after 2s, hide after 6s
  useEffect(() => {
    if (!open) {
      const showTimer = setTimeout(() => setShowTooltip(true), 2000);
      const hideTimer = setTimeout(() => setShowTooltip(false), 6000);
      return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
    } else {
      setShowTooltip(false);
    }
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setUnread(0);
    }
  }, [open]);

  // Track unread when panel closed + new assistant message
  useEffect(() => {
    if (!open && messages.length > prevMsgCount.current) {
      const lastMsg = messages[messages.length - 1];
      if ((lastMsg?.role as string) === "assistant" && lastMsg?.id !== "greeting") {
        setUnread((prev) => prev + 1);
      }
    }
    prevMsgCount.current = messages.length;
  }, [messages, open]);

  // GA4: track chat opened
  const handleOpen = useCallback(() => {
    setOpen(true);
    setUnread(0);
    gtag("chat_opened");
  }, []);

  const handleSend = useCallback(
    (text: string) => {
      if (!text.trim() || isBusy || rateLimited) return;
      sendMessage({ text });
      setInput("");
      setMsgCount((prev) => prev + 1);
      gtag("chat_message_sent", { message_length: text.length });
    },
    [sendMessage, isBusy, rateLimited]
  );

  // Get text from message parts
  const getMessageText = useCallback((m: (typeof messages)[0]) => {
    return (
      m.parts
        ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
        .map((p) => p.text)
        .join("") || ""
    );
  }, []);

  if (EXCLUDED_PATHS.some((p) => pathname.startsWith(p))) return null;

  return (
    <>
      {/* Floating buttons: Zalo + AI Chat */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
          {/* Tooltip — positioned above the BOTTOM button (AI Chat) */}
          <div
            className={`absolute bottom-[calc(100%+8px)] right-0 transition-all duration-300 pointer-events-none ${
              showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 px-4 py-2.5 whitespace-nowrap">
              <p className="text-sm font-medium text-slate-700">Hỏi mình bất cứ điều gì! 🤖</p>
              <p className="text-[10px] text-slate-400">AI trả lời ngay 24/7</p>
            </div>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45" />
          </div>

          {/* Zalo button — green, smaller */}
          <a
            href="https://zalo.me/0935115248"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-11 h-11 rounded-full bg-[#0068FF] shadow-md shadow-blue-500/20 flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-0.5 transition-all group"
            aria-label="Chat Zalo"
            onClick={() => gtag("zalo_widget_open")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.03 2 11c0 2.97 1.81 5.58 4.5 7.12V22l3.6-2.08c.61.12 1.24.08 1.9.08 5.52 0 10-4.03 10-9S17.52 2 12 2zm1.13 12.22l-2.54-2.72-4.97 2.72L10.84 9l2.6 2.72L18.32 9l-5.19 5.22z" /></svg>
            {/* Hover label */}
            <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-white shadow-md border border-slate-200 text-[11px] font-medium text-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Chat Zalo
            </span>
          </a>

          {/* AI Chat button — dark/slate, larger (primary action) */}
          <button
            onClick={handleOpen}
            className="relative w-13 h-13 rounded-full bg-slate-900 shadow-lg shadow-slate-900/30 flex items-center justify-center text-white hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            style={{ width: 52, height: 52 }}
            aria-label="Mở chat AI"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                {unread}
              </span>
            )}
          </button>
        </div>
      )}

      {/* Chat panel — responsive: full-screen mobile, floating desktop */}
      {open && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 sm:w-[380px] sm:max-h-[560px] flex flex-col bg-white sm:rounded-2xl shadow-2xl shadow-black/10 sm:border sm:border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-white shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-sm">AutoFlow VN</div>
                <div className="text-[10px] text-white/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online — trả lời ngay
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Đóng chat"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${(m.role as string) === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    (m.role as string) === "user"
                      ? "bg-primary text-white rounded-br-md [&_a]:text-white/90"
                      : "bg-slate-100 text-slate-700 rounded-bl-md [&_a]:text-primary"
                  }`}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: formatChat(getMessageText(m)),
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isBusy && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span className="text-[10px] text-slate-400">AutoFlow đang trả lời...</span>
                </div>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="flex justify-start">
                <div className="bg-red-50 text-red-600 rounded-2xl rounded-bl-md px-3.5 py-2.5 text-sm">
                  Xin lỗi, có lỗi xảy ra. Vui lòng thử lại! 🙏
                </div>
              </div>
            )}

            {/* Rate limit warning */}
            {rateLimited && (
              <div className="flex justify-center">
                <div className="bg-amber-50 text-amber-700 rounded-xl px-4 py-2 text-xs text-center">
                  Bạn đã hết lượt chat trong phiên này. <a href="/audit" className="underline font-semibold">Đặt lịch audit</a> để được tư vấn chi tiết!
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && !isBusy && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr.label}
                  onClick={() => handleSend(qr.value)}
                  className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {qr.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-2 px-3 py-3 border-t border-slate-100 shrink-0"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={rateLimited ? "Đã hết lượt chat" : "Nhập tin nhắn..."}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
              disabled={isBusy || rateLimited}
            />
            <button
              type="submit"
              disabled={!input.trim() || isBusy || rateLimited}
              className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>

          {/* Footer */}
          <div className="px-4 pb-2 text-center shrink-0">
            <span className="text-[9px] text-slate-300">Powered by AutoFlow VN · AI Assistant</span>
          </div>
        </div>
      )}
    </>
  );
}
