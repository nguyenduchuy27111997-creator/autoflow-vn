function gtag(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

// ── Conversions ──

export function trackGenerateLead(params: {
  form_type: "audit" | "quiz" | "pdf" | "fb-ads" | "chat";
  score?: number;
  result_tier?: string;
  resource?: string;
}) {
  gtag("generate_lead", { ...params, currency: "VND" });
}

// ── Quiz Funnel ──

export function trackQuizStart() {
  gtag("quiz_start");
}

export function trackQuizQuestion(question_number: number, answer_index: number) {
  gtag("quiz_question_answered", { question_number, answer_index });
}

export function trackQuizCompleted(score: number) {
  gtag("quiz_completed", { score });
}

export function trackQuizAbandoned(last_question: number) {
  gtag("quiz_abandoned", { last_question });
}

// ── CTA Clicks ──

export function trackCTAClick(location: string, label: string, destination?: string) {
  gtag("cta_click", { location, label, destination });
}

// ── Zalo Chat ──

export function trackZaloOpen() {
  gtag("zalo_widget_open");
}

// ── Blog ──

export function trackBlogRead(article: string, scroll_depth: number) {
  gtag("blog_read", { article, scroll_depth });
}
