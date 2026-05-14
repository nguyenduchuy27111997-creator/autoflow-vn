import posthog from "posthog-js";

function gtag(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

// NEW: PostHog mirror — guarded, try/catch so PostHog failure NEVER breaks GA4.
function phCapture(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    posthog.capture(event, props);
  } catch {
    // silent — PostHog must never break GA4 events (D-02)
  }
}

// ── Conversions (existing — D-02 track-both) ──

export function trackGenerateLead(params: {
  form_type: "audit" | "quiz" | "pdf" | "fb-ads" | "chat";
  score?: number;
  result_tier?: string;
  resource?: string;
}) {
  gtag("generate_lead", { ...params, currency: "VND" });
  phCapture("generate_lead", params);
}

// ── Quiz Funnel (existing — D-02 track-both) ──

export function trackQuizStart() {
  gtag("quiz_start");
  phCapture("quiz_start");
}

export function trackQuizQuestion(question_number: number, answer_index: number) {
  gtag("quiz_question_answered", { question_number, answer_index });
  phCapture("quiz_question_answered", { question_number, answer_index });
}

export function trackQuizCompleted(score: number) {
  gtag("quiz_completed", { score });
  phCapture("quiz_completed", { score });
}

export function trackQuizAbandoned(last_question: number) {
  gtag("quiz_abandoned", { last_question });
  phCapture("quiz_abandoned", { last_question });
}

// ── CTA Clicks (existing — D-02 track-both) ──

export function trackCTAClick(location: string, label: string, destination?: string) {
  gtag("cta_click", { location, label, destination });
  phCapture("cta_click", { location, label, destination });
}

// ── Zalo Chat (existing — D-02 track-both) ──

export function trackZaloOpen() {
  gtag("zalo_widget_open");
  phCapture("zalo_widget_open");
}

// ── Blog (existing — D-02 track-both) ──

export function trackBlogRead(article: string, scroll_depth: number) {
  gtag("blog_read", { article, scroll_depth });
  phCapture("blog_read", { article, scroll_depth });
}

// ── NEW: ANL-01 funnel events (D-08 verbatim names — DO NOT RENAME) ──

export function trackChatbotOpened() {
  gtag("chat_opened"); // keep GA4 historical name
  phCapture("chatbot_opened"); // D-08 verbatim
}

export function trackChatbotMessageSent(props: {
  conversation_id: string; // UUID, not PII
  message_number: number;
  time_since_open_ms: number;
}) {
  gtag("chat_message_sent", { message_length: props.message_number });
  phCapture("chatbot_message_sent", props); // D-08 verbatim
}

export function trackLeadContactCaptured(distinct_id: string) {
  // distinct_id = sessionId for chat surface, audit_submission.id for audit surface (pre-resolved Q#1)
  // NEVER email/name/phone — D-06 strict.
  phCapture("lead_contact_captured", { lead_id: distinct_id });
  try {
    posthog.identify(distinct_id);
  } catch {}
}

export function trackAuditFormStarted(props?: { locale?: string }) {
  phCapture("audit_form_started", props);
}

export function trackAuditFormCompleted(props?: { locale?: string }) {
  phCapture("audit_form_completed", props);
}

// ── NEW: ANL-02 audit step drop-off pair (D-07 semantics) ──

export function trackAuditStepView(step_number: number, time_since_start_ms: number) {
  phCapture("audit_step_view", { step_number, time_since_start_ms });
}

export function trackAuditStepCompleted(step_number: number, time_on_step_ms: number) {
  phCapture("audit_step_completed", { step_number, time_on_step_ms });
}
