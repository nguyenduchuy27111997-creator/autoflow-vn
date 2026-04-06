"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { usePathname } from "next/navigation";

import { formatChat } from "@/lib/format-chat";

const EXCLUDED_PATHS = ["/portal"];
const MAX_MESSAGES_PER_SESSION = 20;

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

  // Auto-scroll on new messages and when chat opens
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (open) {
      // Scroll to bottom when chat panel opens
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "instant" }), 50);
    }
  }, [open]);

  // Show tooltip after 2s, hide after 6s + smart re-trigger on high-intent sections
  const tooltipRetriggerCount = useRef(0);
  useEffect(() => {
    if (!open) {
      const showTimer = setTimeout(() => setShowTooltip(true), 2000);
      const hideTimer = setTimeout(() => setShowTooltip(false), 6000);

      // Smart re-trigger: show tooltip when user scrolls to pricing or CTA sections (max 2x)
      const sections = document.querySelectorAll("#bang-gia, #lien-he");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && tooltipRetriggerCount.current < 2) {
              tooltipRetriggerCount.current++;
              setShowTooltip(true);
              setTimeout(() => setShowTooltip(false), 4000);
            }
          });
        },
        { threshold: 0.3 }
      );
      sections.forEach((el) => observer.observe(el));

      return () => { clearTimeout(showTimer); clearTimeout(hideTimer); observer.disconnect(); };
    } else {
      setShowTooltip(false);
    }
  }, [open]);

  // Focus input when opened (desktop only — mobile auto-focus triggers keyboard + zoom)
  useEffect(() => {
    if (open) {
      const isDesktop = window.matchMedia("(min-width: 640px)").matches;
      if (isDesktop) inputRef.current?.focus();
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
          {/* Zalo button — secondary, smaller */}
          <a
            href="https://zalo.me/0935115248"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-full bg-[#0068FF] shadow-md shadow-blue-500/20 flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-0.5 transition-all group w-[40px] h-[40px] sm:w-[46px] sm:h-[46px]"
            aria-label="Chat Zalo"
            onClick={() => gtag("zalo_widget_open")}
          >
            {/* Official Zalo logo from SimpleIcons */}
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="white">
              <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
            </svg>
            <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-white shadow-md border border-slate-200 text-[11px] font-medium text-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Chat Zalo
            </span>
          </a>

          {/* AI Chat button — primary, larger, purple gradient, pulse */}
          <div className="relative">
            <div
              className={`absolute bottom-full right-0 mb-3 transition-all duration-300 pointer-events-none ${
                showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 px-4 py-2.5 whitespace-nowrap">
                <p className="text-sm font-medium text-slate-700">Hỏi mình bất cứ điều gì! 💬</p>
                <p className="text-[10px] text-slate-400">AI trả lời ngay 24/7</p>
              </div>
              <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45" />
            </div>
            <button
              onClick={handleOpen}
              className="relative rounded-full flex items-center justify-center text-white hover:-translate-y-0.5 transition-all animate-[chat-pulse_2s_ease-out_infinite] w-[50px] h-[50px] sm:w-[54px] sm:h-[54px]"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #8B5CF6)",
                boxShadow: "0 8px 24px rgba(124, 58, 237, 0.35)",
              }}
              aria-label="Mở chat AI"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              {unread > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {unread}
                </span>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Chat panel — responsive: full-screen mobile, floating desktop */}
      {open && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 sm:w-[380px] sm:max-h-[560px] flex flex-col bg-white sm:rounded-2xl shadow-2xl shadow-black/10 sm:border sm:border-slate-200 overflow-hidden h-[100dvh] sm:h-auto">
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
              className="flex-1 px-3 py-2 rounded-xl bg-slate-50 text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
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
