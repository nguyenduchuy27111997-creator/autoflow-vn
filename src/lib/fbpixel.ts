// src/lib/fbpixel.ts
// Client-side Facebook Pixel helpers.
// NEVER import this file in Server Components, Route Handlers, or lib/capi.ts.
// All functions are safe no-ops when called server-side (window/document guards).

/* eslint-disable @typescript-eslint/no-explicit-any */

// Extend Window to include fbq without TypeScript errors
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

/**
 * Generate a unique event ID for Pixel + CAPI deduplication.
 * Generate ONCE per event, pass to both fbpixelEvent() and the API route body.
 */
export function generateEventId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Fallback for environments without crypto.randomUUID
  return `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Read a cookie value by name from document.cookie.
 * Returns null if running server-side or cookie not present.
 * Used to read _fbp and _fbc before passing to API routes.
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
  );
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Fire a Pixel track event.
 * Safe no-op if Pixel is not loaded (consent denied or not yet granted).
 *
 * @param eventName - Standard Meta event name (e.g. 'ViewContent', 'Lead')
 * @param data - Event data object (e.g. { content_name: 'Bất động sản' })
 * @param eventId - Optional UUID for deduplication with CAPI. Generate with generateEventId().
 */
export function fbpixelEvent(
  eventName: string,
  data: Record<string, unknown> = {},
  eventId?: string
): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  if (eventId) {
    window.fbq('track', eventName, data, { eventID: eventId });
  } else {
    window.fbq('track', eventName, data);
  }
}

/**
 * Fire Lead event on client Pixel.
 * CAPI dedup handled by Stape — no event_id needed.
 */
export function fbqTrackLead(params: {
  content_name: string;
}): void {
  fbpixelEvent("Lead", {
    content_name: params.content_name,
    content_category: "lead_gen",
  });
}
