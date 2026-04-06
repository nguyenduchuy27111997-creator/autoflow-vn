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

/** Format audit submission for Telegram */
export function formatAuditNotify(data: {
  name: string;
  phone: string;
  company?: string | null;
  industry?: string | null;
  source?: string;
}) {
  return [
    "🔔 <b>Lead mới — Audit</b>",
    "",
    `👤 <b>${data.name}</b>`,
    `📱 ${data.phone}`,
    data.company ? `🏢 ${data.company}` : null,
    data.industry ? `🏭 ${data.industry}` : null,
    data.source ? `📍 Nguồn: ${data.source}` : null,
    "",
    `🔗 <a href="https://autoflowvn.net/portal/dashboard/leads">Xem dashboard</a>`,
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
    `🔗 <a href="https://autoflowvn.net/portal/dashboard/leads">Xem dashboard</a>`,
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
    `🔗 <a href="https://autoflowvn.net/portal/dashboard/leads">Xem dashboard</a>`,
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
