const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/** Send a notification to Telegram. Fire-and-forget. */
export async function notifyTelegram(message: string) {
  if (!BOT_TOKEN || !CHAT_ID) return;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
  } catch {
    // Silent fail — notification is not critical
  }
}

const VOLUME_LABELS: Record<string, string> = {
  lt_100: "< 100",
  "100_1k": "100 – 1.000",
  "1k_10k": "1.000 – 10.000",
  "10k_plus": "> 10.000",
};

/** Format audit submission for Telegram */
export function formatAuditNotify(data: {
  name: string;
  phone: string;
  company?: string | null;
  industry?: string | null;
  source?: string;
  // Phase 98: narrative-primary field
  painNarrative?: string | null;
  // Tier 1 quantified pain fields (optional — old form leads)
  painPrimary?: string | null;
  painHoursPerWeek?: number | null;
  monthlyVolume?: string | null;
}) {
  const narrativeSnippet = data.painNarrative
    ? data.painNarrative.length > 150
      ? `${data.painNarrative.slice(0, 150)}...`
      : data.painNarrative
    : null;

  return [
    "🔔 <b>Lead mới — Audit</b>",
    "",
    `👤 <b>${data.name}</b>`,
    `📱 ${data.phone}`,
    data.company ? `🏢 ${data.company}` : null,
    data.industry ? `🏭 ${data.industry}` : null,
    narrativeSnippet ? `💭 ${narrativeSnippet}` : null,
    data.source ? `📍 Nguồn: ${data.source}` : null,
    data.painPrimary
      ? `💔 Pain: ${data.painPrimary}${data.painHoursPerWeek != null ? ` (${data.painHoursPerWeek}h/tuần)` : ""}`
      : null,
    data.monthlyVolume
      ? `📊 Volume: ${VOLUME_LABELS[data.monthlyVolume] ?? data.monthlyVolume}`
      : null,
    "",
    `🔗 Xem chi tiết trong Client Ops dashboard (localhost:3000/dashboard/leads)`,
  ].filter(Boolean).join("\n");
}

/** Format chat lead for Telegram */
export function formatChatLeadNotify(data: {
  phone?: string | null;
  email?: string | null;
  name?: string | null;
}) {
  return [
    "💬 <b>Lead mới — Chat AI</b>",
    "",
    data.name ? `👤 ${data.name}` : null,
    data.phone ? `📱 ${data.phone}` : null,
    data.email ? `✉️ ${data.email}` : null,
    "",
    `🔗 Xem chi tiết trong Client Ops dashboard (localhost:3000/dashboard/leads)`,
  ].filter(Boolean).join("\n");
}

/** Format partner application for Telegram */
export function formatPartnerNotify(data: {
  name: string;
  company?: string | null;
  phone: string;
  partner_type: string;
}) {
  return [
    "🤝 <b>Đối tác mới đăng ký</b>",
    "",
    `👤 <b>${data.name}</b>`,
    data.company ? `🏢 ${data.company}` : null,
    `📱 ${data.phone}`,
    `📋 Loại: ${data.partner_type}`,
    "",
    `🔗 Xem chi tiết trong Client Ops dashboard (localhost:3000/dashboard/leads)`,
  ].filter(Boolean).join("\n");
}

const BUDGET_LABELS: Record<string, string> = {
  lt_5m: "< 5 triệu",
  "5_15m": "5–15 triệu",
  "15_30m": "15–30 triệu",
  "30m_plus": "30 triệu+",
  unclear: "Chưa rõ",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP (< 1 tháng)",
  "1_3_months": "1–3 tháng",
  "3_6_months": "3–6 tháng",
  exploring: "Đang tìm hiểu",
};

const AUTHORITY_LABELS: Record<string, string> = {
  self: "Tự quyết",
  need_approval: "Cần approve sếp",
  multi_level: "Multi-level",
};

/** Format Tier 2 HOT lead alert for Telegram */
export function formatAuditTier2CompletedNotify(data: {
  name: string;
  industry?: string | null;
  budget_range?: string | null;
  timeline?: string | null;
  decision_authority?: string | null;
  pain_primary?: string | null;
  pain_hours_per_week?: number | null;
  monthly_volume?: string | null;
}) {
  return [
    "🔥 <b>Lead HOT — Deep profile completed</b>",
    "━━━━━━━━━━━━━━━",
    `👤 ${data.name}`,
    data.industry ? `🏭 ${data.industry}` : null,
    data.budget_range
      ? `💰 Budget: ${BUDGET_LABELS[data.budget_range] ?? data.budget_range}`
      : null,
    data.timeline
      ? `⏰ Timeline: ${TIMELINE_LABELS[data.timeline] ?? data.timeline}`
      : null,
    data.decision_authority
      ? `🎯 Authority: ${AUTHORITY_LABELS[data.decision_authority] ?? data.decision_authority}`
      : null,
    "━━━━━━━━━━━━━━━",
    data.pain_primary
      ? `📊 Pain chính: ${data.pain_primary}${data.pain_hours_per_week != null ? ` (${data.pain_hours_per_week}h/tuần)` : ""}`
      : null,
    data.monthly_volume
      ? `📦 Volume: ${VOLUME_LABELS[data.monthly_volume] ?? data.monthly_volume}`
      : null,
    "━━━━━━━━━━━━━━━",
    "<b>Response &lt; 2h required!</b>",
    "Mở client-ops: localhost:3000/dashboard/leads",
  ].filter(Boolean).join("\n");
}

/** Format PDF download for Telegram */
export function formatPdfNotify(data: {
  email: string;
  name?: string | null;
  resource: string;
}) {
  return [
    "📄 <b>Tải tài liệu mới</b>",
    "",
    data.name ? `👤 ${data.name}` : null,
    `✉️ ${data.email}`,
    `📋 Tài liệu: ${data.resource}`,
  ].filter(Boolean).join("\n");
}
