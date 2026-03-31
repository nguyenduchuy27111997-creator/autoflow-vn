import crypto from "crypto";

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const API_VERSION = "v25.0";

interface CapiEventParams {
  eventName: "Lead" | "PageView" | "ViewContent";
  eventId: string;
  sourceUrl: string;
  userEmail?: string | null;
  userPhone?: string | null;
  userName?: string | null;
  fbp?: string | null;
  fbc?: string | null;
  clientIp?: string;
  clientUserAgent?: string;
  customData?: Record<string, unknown>;
}

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

/**
 * Send event to Meta Conversions API (server-side).
 * Fire-and-forget — never blocks the response.
 * Server-only: uses FB_ACCESS_TOKEN (never expose client-side).
 */
export async function sendCapiEvent(params: CapiEventParams): Promise<void> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn("CAPI: Missing FB_PIXEL_ID or FB_ACCESS_TOKEN");
    return;
  }

  const userData: Record<string, unknown> = {};

  // PII: SHA-256 hash (lowercase, trimmed)
  if (params.userEmail) userData.em = sha256(params.userEmail);
  if (params.userPhone) {
    // Normalize Vietnamese phone: remove spaces, ensure +84 prefix
    let phone = params.userPhone.replace(/\s/g, "");
    if (phone.startsWith("0")) phone = "+84" + phone.slice(1);
    if (!phone.startsWith("+")) phone = "+" + phone;
    userData.ph = sha256(phone);
  }
  if (params.userName) {
    const names = params.userName.trim().split(/\s+/);
    if (names.length > 1) {
      userData.fn = sha256(names[0]);
      userData.ln = sha256(names[names.length - 1]);
    } else {
      userData.fn = sha256(names[0]);
    }
  }

  // Non-PII: send raw (NOT hashed)
  if (params.fbp) userData.fbp = params.fbp;
  if (params.fbc) userData.fbc = params.fbc;
  if (params.clientIp) userData.client_ip_address = params.clientIp;
  if (params.clientUserAgent) userData.client_user_agent = params.clientUserAgent;

  const event: Record<string, unknown> = {
    event_name: params.eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: params.eventId,
    event_source_url: params.sourceUrl,
    action_source: "website",
    user_data: userData,
  };

  if (params.customData) {
    event.custom_data = params.customData;
  }

  const body = {
    data: [event],
    ...(process.env.FB_TEST_EVENT_CODE
      ? { test_event_code: process.env.FB_TEST_EVENT_CODE }
      : {}),
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("CAPI error:", err);
    }
  } catch (err) {
    console.error("CAPI fetch error:", err);
  }
}
