"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/client";
import { getStoredUTM } from "@/lib/utm";
import { trackGenerateLead, trackQuizStart, trackQuizQuestion, trackQuizCompleted, trackQuizAbandoned } from "@/lib/analytics";
import {
  quizQuestions,
  getResultTier,
  getResultTierKey,
} from "@/data/quiz-data";

type Screen = "intro" | "quiz" | "lead" | "result";

interface AnswerRecord {
  index: number;
  score: number;
}

const svgIcons = {
  target: (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className="w-4 h-4"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" strokeWidth="2" />
    </svg>
  ),
  clock: (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className="w-4 h-4"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
    </svg>
  ),
  trending: (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  ),
};

export default function QuizPage() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerRecord>>({});
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  const totalScore = Object.values(answers).reduce(
    (sum, a) => sum + a.score,
    0,
  );
  const result = getResultTier(totalScore);
  const q = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadData.email.trim());
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectAnswer = useCallback(
    (qId: number, index: number, score: number) => {
      setAnswers((prev) => ({ ...prev, [qId]: { index, score } }));
      trackQuizQuestion(qId, index);
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = setTimeout(() => {
        setCurrentQuestion((prev) => {
          if (prev < quizQuestions.length - 1) return prev + 1;
          setScreen("lead");
          return prev;
        });
      }, 350);
    },
    [],
  );

  const nextQuestion = useCallback(() => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setScreen("lead");
    }
  }, [currentQuestion]);

  const prevQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  // Keyboard navigation
  useEffect(() => {
    if (screen !== "quiz") return;

    function handleKeyDown(e: KeyboardEvent) {
      const keyMap: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };
      const idx = keyMap[e.key.toLowerCase()];
      const currentQ = quizQuestions[currentQuestion];

      if (idx !== undefined && idx < currentQ.answers.length) {
        selectAnswer(currentQ.id, idx, currentQ.answers[idx].score);
        return;
      }
      if (e.key === "ArrowRight" || e.key === "Enter") {
        if (answers[currentQ.id] !== undefined) nextQuestion();
      }
      if (e.key === "ArrowLeft") prevQuestion();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    screen,
    currentQuestion,
    answers,
    selectAnswer,
    nextQuestion,
    prevQuestion,
  ]);

  async function handleSubmit() {
    if (!emailValid || submitting) return;

    // Honeypot check
    const honeypot = document.querySelector<HTMLInputElement>(
      'input[name="website"]',
    );
    if (honeypot?.value) return;

    setSubmitting(true);

    try {
      const supabase = createClient();
      const utm = getStoredUTM();
      const tier = getResultTierKey(totalScore);
      const { error } = await supabase.from("quiz_leads").insert({
        name: leadData.name.trim() || null,
        email: leadData.email.trim(),
        phone: leadData.phone.trim() || null,
        score: totalScore,
        result_tier: tier,
        answers,
        ...utm,
      });
      if (error) {
        console.error("Quiz submission failed:", error);
      } else {
        trackQuizCompleted(totalScore);
        trackGenerateLead({ form_type: "quiz", score: totalScore, result_tier: tier });

        // Enqueue 3-email sequence for this lead
        try {
          const now = new Date();
          const day3 = new Date(now); day3.setDate(day3.getDate() + 3);
          const day7 = new Date(now); day7.setDate(day7.getDate() + 7);
          const queueMeta = { score: totalScore, tier };

          // Duplicate check: skip if already enrolled
          const { count } = await supabase
            .from("email_queue")
            .select("id", { count: "exact", head: true })
            .eq("email", leadData.email.trim())
            .eq("sequence_type", "quiz");

          if ((count ?? 0) === 0) {
            await supabase.from("email_queue").insert([
              {
                email: leadData.email.trim(),
                name: leadData.name.trim() || null,
                sequence_type: "quiz",
                email_number: 1,
                scheduled_at: now.toISOString(),
                status: "pending",
                metadata: queueMeta,
              },
              {
                email: leadData.email.trim(),
                name: leadData.name.trim() || null,
                sequence_type: "quiz",
                email_number: 2,
                scheduled_at: day3.toISOString(),
                status: "pending",
                metadata: queueMeta,
              },
              {
                email: leadData.email.trim(),
                name: leadData.name.trim() || null,
                sequence_type: "quiz",
                email_number: 3,
                scheduled_at: day7.toISOString(),
                status: "pending",
                metadata: queueMeta,
              },
            ]);
          }
        } catch (queueErr) {
          console.error("Email queue enqueue failed:", queueErr);
          // Non-fatal — do not block user flow
        }
      }
    } catch (err) {
      console.error("Quiz submission failed:", err);
    }

    setScreen("result");
    setSubmitting(false);
  }

  function shareResult() {
    const text = `Toi vua lam quiz Automation Readiness va duoc ${totalScore}/40 diem! Ban thu chua?`;
    const url = "https://autoflowvn.net/quiz";
    if (navigator.share) {
      navigator
        .share({ title: "Automation Readiness Quiz", text, url })
        .catch(() => {});
    } else {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
        "_blank",
      );
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-24 md:py-32">
        <div className="w-full max-w-[680px] bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
          {/* Intro Screen */}
          {screen === "intro" && (
            <div className="p-10 md:p-12 text-center animate-fade-up">
              <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                <svg
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  className="w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <h1 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-3 leading-tight">
                Doanh nghiệp bạn <span className="gradient-text">sẵn sàng</span>{" "}
                tự động hóa chưa?
              </h1>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-[480px] mx-auto mb-7">
                Trả lời 10 câu hỏi nhanh để nhận báo cáo cá nhân hóa: mức độ sẵn
                sàng, điểm nghẽn chính, và lộ trình tự động hóa phù hợp nhất cho
                doanh nghiệp bạn.
              </p>

              <div className="flex justify-center gap-8 mb-8">
                {[
                  { num: "10", label: "Câu hỏi" },
                  { num: "2 phút", label: "Hoàn thành" },
                  { num: "100%", label: "Miễn phí" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-extrabold text-2xl text-primary">
                      {s.num}
                    </div>
                    <div className="text-[0.7rem] text-slate-500 uppercase tracking-wide">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setScreen("quiz");
                  setCurrentQuestion(0);
                  trackQuizStart();
                }}
                className="bg-gradient-to-br from-primary to-secondary text-white font-display font-bold text-lg px-10 py-4 rounded-2xl shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                Bắt Đầu Làm Quiz
              </button>
              <p className="mt-4 text-xs text-slate-400">
                Kết quả được gửi qua email. Không spam, hủy bất cứ lúc nào.
              </p>
            </div>
          )}

          {/* Quiz Screen */}
          {screen === "quiz" && (
            <>
              {/* Progress bar */}
              <div className="h-[5px] bg-slate-100">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-r-sm transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div key={currentQuestion} className="animate-fade-up">
                <div className="px-6 md:px-9 pt-8">
                  <div className="text-xs font-semibold text-primary uppercase tracking-[1.5px] mb-3">
                    Câu {currentQuestion + 1} / {quizQuestions.length}
                  </div>
                  <h2 className="font-display font-extrabold text-xl md:text-[1.45rem] text-slate-900 leading-tight mb-1.5">
                    {q.question}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {q.description}
                  </p>
                </div>

                <div className="px-6 md:px-9 py-5 space-y-2.5">
                  {q.answers.map((a, i) => {
                    const selected = answers[q.id]?.index === i;
                    return (
                      <button
                        key={i}
                        onClick={() => selectAnswer(q.id, i, a.score)}
                        className={`w-full flex items-start gap-3.5 p-4 rounded-xl border-2 text-left transition-all ${
                          selected
                            ? "border-primary bg-blue-50 shadow-[0_0_0_3px_rgba(0,102,255,0.15)]"
                            : "border-slate-200 hover:border-primary hover:bg-blue-50/50 hover:-translate-y-px"
                        }`}
                      >
                        <span
                          className={`w-[34px] h-[34px] min-w-[34px] rounded-[10px] flex items-center justify-center font-display font-bold text-sm transition-all ${
                            selected
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-primary group-hover:text-white"
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        <div className="pt-1">
                          <div className="font-semibold text-sm text-slate-800 leading-snug">
                            {a.text}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {a.sub}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="px-6 md:px-9 pb-7">
                  {currentQuestion > 0 && (
                    <button
                      onClick={prevQuestion}
                      className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors px-4 py-3"
                    >
                      &larr; Quay lại
                    </button>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Lead Capture Screen */}
          {screen === "lead" && (
            <>
              <div className="h-[5px] bg-slate-100">
                <div className="h-full bg-gradient-to-r from-primary to-secondary w-full rounded-r-sm" />
              </div>
              <div className="p-8 md:p-10 text-center animate-fade-up">
                <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-2">
                  Kết quả đã sẵn sàng!
                </h2>
                <p className="text-sm text-slate-500 mb-7">
                  Nhập thông tin để nhận báo cáo cá nhân hóa qua email
                </p>

                <div className="space-y-3.5 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={leadData.name}
                      onChange={(e) =>
                        setLeadData((p) => ({ ...p, name: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      value={leadData.email}
                      onChange={(e) =>
                        setLeadData((p) => ({ ...p, email: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      placeholder="0912 345 678"
                      value={leadData.phone}
                      onChange={(e) =>
                        setLeadData((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <p className="text-[0.7rem] text-slate-400 mt-2 mb-5">
                  Chúng tôi tôn trọng quyền riêng tư của bạn. Không spam, không
                  chia sẻ cho bên thứ ba.
                </p>

                <button
                  onClick={handleSubmit}
                  disabled={!emailValid || submitting}
                  className="w-full bg-gradient-to-br from-primary to-secondary text-white font-display font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitting ? "Đang xử lý..." : "Xem Kết Quả Ngay"}
                </button>
              </div>
            </>
          )}

          {/* Result Screen */}
          {screen === "result" && (
            <>
              <div className="h-[5px] bg-slate-100">
                <div className="h-full bg-gradient-to-r from-primary to-secondary w-full rounded-r-sm" />
              </div>
              <div className="p-8 md:p-10 text-center animate-fade-up">
                <span
                  className="inline-block text-[0.7rem] font-bold px-3.5 py-1 rounded-full uppercase tracking-[1.5px] mb-4"
                  style={{
                    background: `${result.badgeColor}15`,
                    color: result.badgeColor,
                  }}
                >
                  {result.badge}
                </span>

                <div
                  className="w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center mx-auto mb-5"
                  style={{ background: result.ringGradient }}
                >
                  <span className="font-display font-extrabold text-4xl text-white">
                    {totalScore}
                  </span>
                  <span className="text-[0.7rem] text-white/80">/ 40 điểm</span>
                </div>

                <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-2">
                  {result.level}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[520px] mx-auto mb-6">
                  {result.description}
                </p>

                <div className="space-y-2.5 text-left mb-6">
                  {result.insights.map((ins, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-slate-50 rounded-xl p-3.5"
                    >
                      <div
                        className="w-8 h-8 min-w-[32px] rounded-lg flex items-center justify-center"
                        style={{
                          background: `${result.badgeColor}15`,
                          color: result.badgeColor,
                        }}
                      >
                        {svgIcons[ins.icon]}
                      </div>
                      <div>
                        <h5 className="font-display font-bold text-sm text-slate-800 mb-0.5">
                          {ins.title}
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {ins.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-primary rounded-2xl p-5 mb-5 text-center">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-primary mb-1">
                    Gói đề xuất cho bạn
                  </div>
                  <div className="font-display font-extrabold text-lg text-slate-900 mb-1">
                    AutoFlow {result.package.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {result.package.price} &middot; {result.package.timeline}
                  </div>
                </div>

                <div className="flex justify-center">
                  <a
                    href="/audit"
                    className="inline-flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white font-display font-bold px-7 py-3.5 rounded-xl shadow-md shadow-primary/30 hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Đặt Lịch Audit Miễn Phí
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <div className="bg-slate-900 text-center py-4 text-xs text-slate-500">
        Powered by{" "}
        <a
          href="https://autoflowvn.net"
          className="text-primary font-semibold hover:underline"
        >
          AutoFlow VN
        </a>
      </div>
      <Footer />
    </>
  );
}
