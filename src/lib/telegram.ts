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
  // Tier 1 quantified pain fields (optional — new leads only)
  painPrimary?: string | null;
  painHoursPerWeek?: number | null;
  monthlyVolume?: string | null;
}) {
  return [
    "🔔 <b>Lead mới — Audit</b>",
    "",
    `👤 <b>${data.name}</b>`,
    `📱 ${data.phone}`,
    data.company ? `🏢 ${data.company}` : null,
    data.industry ? `🏭 ${data.industry}` : null,
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
