# Architecture Research

**Domain:** FB Pixel + Conversions API (CAPI) — Next.js 16 App Router, existing consent system
**Researched:** 2026-03-29
**Confidence:** HIGH (verified against local Next.js 16 docs, existing codebase, Meta developer docs)

---

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                          Browser (Visitor)                           │
│                                                                      │
│  localStorage: "autoflow_cookie_consent" = "granted" | "denied"     │
│  Cookies (set by Pixel after consent): _fbp, _fbc                   │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  FacebookPixel.tsx (Client Component, 'use client')            │ │
│  │  - Reads consent from localStorage on mount                    │ │
│  │  - Loads connect.facebook.net/fbevents.js via next/script      │ │
│  │    ONLY when consent === "granted"                             │ │
│  │  - Listens for custom "consent:granted" window event           │ │
│  │    to init Pixel if consent granted after page load            │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  lib/fbpixel.ts (client-side helpers)                          │ │
│  │  - fbpixelEvent(name, data, eventId)                           │ │
│  │  - reads _fbp, _fbc from document.cookie                       │ │
│  │  - called from: quiz handleSubmit, audit form submit           │ │
│  └────────────────────────────────────────────────────────────────┘ │
└───────────────────┬──────────────────────────────────────┬──────────┘
                    │ POST (form submit w/ event_id)        │ Pixel fire
                    │                                       │ fbq('track','Lead',{},{eventID})
┌───────────────────▼───────────────────────────────────────────────┐
│                   Next.js 16 App Router (Server)                   │
│                                                                    │
│  src/app/api/audit/route.ts  (existing — ADD CAPI call here)      │
│  src/app/api/tai-lieu/route.ts  (existing — ADD CAPI call here)   │
│  src/lib/capi.ts  (NEW — server-side CAPI helper)                 │
│                                                                    │
│  capi.ts responsibilities:                                         │
│  - hash PII (email, phone) with SHA-256                           │
│  - extract client_ip from x-forwarded-for header                  │
│  - extract client_user_agent from request headers                 │
│  - receive fbp, fbc from request body (sent by client)            │
│  - POST to graph.facebook.com/v19.0/<PIXEL_ID>/events             │
└───────────────────┬───────────────────────────────────────────────┘
                    │ HTTPS POST
┌───────────────────▼───────────────────────────────────────────────┐
│              Meta Conversions API (graph.facebook.com)             │
│                                                                    │
│  Deduplication: event_id + event_name match within 48h window     │
│  Pixel event (browser) + CAPI event (server) = counted ONCE       │
└───────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Lives In |
|-----------|----------------|----------|
| `FacebookPixel.tsx` | Conditional Pixel script loading based on consent; re-init on late consent | `src/components/analytics/` (NEW) |
| `lib/fbpixel.ts` | Client-side event helpers: `fbpixelEvent()`, cookie readers for `_fbp`/`_fbc`, `generateEventId()` | `src/lib/` (NEW) |
| `lib/capi.ts` | Server-side CAPI POST: hashing, request field extraction, `graph.facebook.com` call | `src/lib/` (NEW) |
| `ConsentBanner.tsx` | Existing: stores consent in `localStorage`, dispatches `consent:granted` window event (NEW) | `src/components/analytics/` (MODIFY) |
| `api/audit/route.ts` | Existing: ADD `capi()` call after Supabase insert; receives `event_id`, `fbp`, `fbc` from body | `src/app/api/audit/` (MODIFY) |
| `api/tai-lieu/route.ts` | Existing: ADD `capi()` call after Supabase insert; receives `event_id`, `fbp`, `fbc` from body | `src/app/api/tai-lieu/` (MODIFY) |
| `quiz/page.tsx` | Existing: ADD `fbpixelEvent()` call in `handleSubmit`; generate and pass `event_id` to both Pixel and API route | `src/app/quiz/` (MODIFY) |

---

## Recommended Project Structure

Only files that are NEW or MODIFIED for this milestone:

```
src/
├── components/
│   └── analytics/
│       ├── ConsentBanner.tsx      # MODIFY: dispatch window event on accept
│       ├── FacebookPixel.tsx      # NEW: conditional Pixel loader
│       └── (existing files unchanged)
├── app/
│   ├── layout.tsx                 # MODIFY: add <FacebookPixel /> next to <GoogleAnalytics />
│   ├── api/
│   │   ├── audit/route.ts         # MODIFY: add capi() call, accept event_id/fbp/fbc in body
│   │   └── tai-lieu/route.ts      # MODIFY: add capi() call, accept event_id/fbp/fbc in body
│   └── quiz/page.tsx              # MODIFY: add fbpixelEvent() + pass event_id to API
└── lib/
    ├── fbpixel.ts                 # NEW: client-side Pixel helpers
    └── capi.ts                    # NEW: server-side CAPI helper
```

### Structure Rationale

- **`FacebookPixel.tsx` separate from `GoogleAnalytics.tsx`:** GA uses the existing Google Consent Mode via `gtag('consent',...)`. Pixel has its own conditional loading logic that is meaningfully different — merging them creates an unmaintainable component. Keep tracking providers isolated.
- **`lib/fbpixel.ts` (client) vs `lib/capi.ts` (server):** The client file uses `document.cookie`, `window.fbq`, and `crypto.randomUUID()`. The server file uses `crypto` (Node.js), `fetch`, and environment secrets. They cannot coexist in the same file because of client/server boundary rules.
- **CAPI call in existing API routes, not a new `/api/fb-events` route:** The form submission already goes to `/api/audit` and `/api/tai-lieu`. Adding a second API call would require the client to make two requests. Instead, the existing route calls `capi()` after its Supabase insert — one HTTP round trip from the client, two outgoing calls from the server.

---

## Architectural Patterns

### Pattern 1: Conditional Pixel Loading via Consent State

**What:** `FacebookPixel.tsx` is a Client Component that reads consent from `localStorage` on mount. If `"granted"`, it renders the `<Script>` for `fbevents.js`. If `"denied"` or `null` (no decision yet), it renders nothing. It also listens for a `"consent:granted"` window event dispatched by `ConsentBanner.tsx` when the user clicks Accept, so late consent after page load also loads the Pixel without requiring a page refresh.

**When to use:** Any analytics script that must respect user consent but cannot rely on Google Consent Mode (which is GA-specific). Pixel does not have its own consent mode that integrates with gtag.

**Trade-offs:** Script is not loaded at all until consent — good for compliance and page weight. A user who accepts consent will see the Pixel fire on their next page load or via the window event trigger (same session, no refresh needed).

**Example:**
```typescript
// src/components/analytics/FacebookPixel.tsx
'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const CONSENT_KEY = 'autoflow_cookie_consent';

export default function FacebookPixel() {
  const [pixelReady, setPixelReady] = useState(false);

  useEffect(() => {
    // Check existing consent
    if (localStorage.getItem(CONSENT_KEY) === 'granted') {
      setPixelReady(true);
      return;
    }
    // Listen for late consent (user clicks Accept after page load)
    function onConsentGranted() { setPixelReady(true); }
    window.addEventListener('consent:granted', onConsentGranted);
    return () => window.removeEventListener('consent:granted', onConsentGranted);
  }, []);

  if (!PIXEL_ID || !pixelReady) return null;

  return (
    <>
      <Script id="fb-pixel-init" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){...}(window,...);
          fbq('init','${PIXEL_ID}');
          fbq('track','PageView');`}
      </Script>
    </>
  );
}
```

**Required modification to `ConsentBanner.tsx`:** Add one line to `handleAccept`:
```typescript
window.dispatchEvent(new Event('consent:granted'));
```

---

### Pattern 2: event_id Generation and Dual-Channel Firing

**What:** Before firing a conversion event (Lead, Submit), generate a unique `event_id` string in the client. Pass the same `event_id` to both: (1) `fbq('track', 'Lead', {}, { eventID: event_id })` for the Pixel, and (2) the API route body for CAPI. Meta's deduplication system matches by `event_name + event_id` within a 48-hour window and counts the conversion once.

**When to use:** Every meaningful conversion event — form submissions, PDF downloads, quiz completions. Do NOT use for PageView since CAPI does not typically mirror PageView server-side.

**Trade-offs:** Requires passing `event_id` through form submission logic. The generation must happen before either the Pixel fire or the API call. If `event_id` is generated in the API route (server), the Pixel call (client) fires without an ID — deduplication breaks. Generation must happen client-side first.

**event_id format:** Timestamp + random string. UUID v4 from `crypto.randomUUID()` is also acceptable and simpler.

**Example in `lib/fbpixel.ts`:**
```typescript
// src/lib/fbpixel.ts
export function generateEventId(): string {
  // Use crypto.randomUUID() if available (all modern browsers + Node 14.17+)
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback: timestamp + random
  return `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

export function fbpixelEvent(
  eventName: string,
  data: Record<string, unknown>,
  eventId: string
): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  window.fbq('track', eventName, data, { eventID: eventId });
}
```

---

### Pattern 3: CAPI Call in Existing API Routes

**What:** `lib/capi.ts` exports a single async function `sendCapiEvent(params)`. It hashes PII, constructs the payload, and POSTs to the Meta Graph API. The existing route handlers (`api/audit/route.ts`, `api/tai-lieu/route.ts`) call `sendCapiEvent()` after the Supabase insert, fire-and-forget with `.catch(console.error)` — the CAPI call must never block or fail the user-facing form response.

**When to use:** Any server-side route that processes a lead form submission. Do NOT create a separate `/api/fb-events` client-facing route — that exposes CAPI credentials to client-reachable endpoints unnecessarily.

**PII hashing rule:** Email and phone must be SHA-256 hashed (lowercase, trimmed) before sending. `fbp` and `fbc` cookie values must NOT be hashed — send raw. `client_ip_address` and `client_user_agent` must NOT be hashed — send raw.

**Example `lib/capi.ts`:**
```typescript
// src/lib/capi.ts  — server-only, never import in 'use client' components
import { createHash } from 'crypto';

const PIXEL_ID = process.env.FB_PIXEL_ID;       // no NEXT_PUBLIC_ prefix
const ACCESS_TOKEN = process.env.FB_CAPI_TOKEN; // no NEXT_PUBLIC_ prefix

function sha256(value: string): string {
  return createHash('sha256').update(value.toLowerCase().trim()).digest('hex');
}

export interface CapiEventParams {
  eventName: string;           // 'Lead', 'CompleteRegistration', etc.
  eventId: string;             // must match the Pixel eventID for dedup
  eventSourceUrl: string;      // full URL of the page where conversion occurred
  email?: string;              // hashed in this function
  phone?: string;              // hashed in this function; E.164 format digits only
  fbp?: string | null;         // _fbp cookie value — NOT hashed
  fbc?: string | null;         // _fbc cookie value — NOT hashed
  clientIp?: string | null;    // from x-forwarded-for — NOT hashed
  clientUserAgent?: string | null; // from user-agent header — NOT hashed
}

export async function sendCapiEvent(params: CapiEventParams): Promise<void> {
  if (!PIXEL_ID || !ACCESS_TOKEN) return;

  const userData: Record<string, string> = {};
  if (params.email) userData.em = sha256(params.email);
  if (params.phone) userData.ph = sha256(params.phone.replace(/\D/g, ''));
  if (params.fbp) userData.fbp = params.fbp;
  if (params.fbc) userData.fbc = params.fbc;
  if (params.clientIp) userData.client_ip_address = params.clientIp;
  if (params.clientUserAgent) userData.client_user_agent = params.clientUserAgent;

  const payload = {
    data: [
      {
        event_name: params.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: params.eventId,
        event_source_url: params.eventSourceUrl,
        action_source: 'website',
        user_data: userData,
      },
    ],
  };

  await fetch(
    `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );
}
```

**Integration in `api/audit/route.ts` (addition only):**
```typescript
// Add to request body parsing:
const { name, phone, email, ..., event_id, fbp, fbc } = body;

// After the Supabase insert, fire CAPI without blocking:
sendCapiEvent({
  eventName: 'Lead',
  eventId: event_id,
  eventSourceUrl: req.headers.get('referer') || 'https://autoflowvn.net/audit',
  email: body.email,
  phone: body.phone,
  fbp: fbp || null,
  fbc: fbc || null,
  clientIp: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null,
  clientUserAgent: req.headers.get('user-agent'),
}).catch(err => console.error('CAPI error (audit):', err));
```

---

### Pattern 4: Passing fbp/fbc from Browser to Server

**What:** The `_fbp` and `_fbc` cookies are set by the Pixel in the browser. The API route needs them to enrich the CAPI payload and improve event match quality. The client reads them from `document.cookie` (using `getCookie()` from `lib/fbpixel.ts`) and includes them as plain string fields in the JSON body of the form POST request.

**Why not read cookies server-side from request headers:** Next.js 16 Route Handlers can read cookies via `req.headers.get('cookie')` and parse them, which works if Pixel cookies are same-site. However, the Pixel sets `_fbp` as `SameSite=Lax` — it will be included in POST bodies initiated from first-party JavaScript (fetch). Reading from the request cookie header is slightly simpler but couples cookie parsing to the server. The explicit body approach keeps the server code clean.

**Why not use a separate `/api/fb-events` endpoint:** An additional client-facing route adds a second HTTP round trip per form submission. The form data (email, phone, UTMs) is already going to `/api/audit` — piggyback the pixel metadata in the same request.

**What to do when Pixel is blocked or denied:** If consent was denied, the Pixel was never loaded, so `_fbp` and `_fbc` will be `null`. The `sendCapiEvent()` function omits `null` fields. CAPI still works without `fbp`/`fbc` — it falls back to email/phone matching. Event match score drops but the event is still recorded.

---

## Data Flow

### Lead Submission (Audit Form — Full Flow)

```
User fills audit form → clicks submit
    ↓
AuditForm (Client Component)
  1. generateEventId() → event_id = "uuid-v4"
  2. getCookie('_fbp') → fbp = "fb.1.1234567890.9876543210"
  3. getCookie('_fbc') → fbc = null (no fbclid in URL)
  4. fbpixelEvent('Lead', {}, event_id)
     → fbq('track', 'Lead', {}, { eventID: event_id })  [BROWSER → Meta]
  5. fetch('/api/audit', { body: { ...formData, event_id, fbp, fbc } })
    ↓
/api/audit route.ts (Server)
  6. Validate, rate limit, honeypot check
  7. supabase.from('audit_submissions').insert(...)
  8. sendCapiEvent({ eventName: 'Lead', eventId: event_id, ... })
     → POST graph.facebook.com/v19.0/<ID>/events  [SERVER → Meta]
  9. Return { success: true } to client
    ↓
Meta deduplication:
  event_name='Lead' + event_id match → counted once
  Browser signal (fbp, fbc, pixel) + server signal (email hash, ip) = best of both
```

### Quiz Submission (Client-only Supabase insert — special case)

The quiz uses `createClient()` (browser Supabase client) directly in `quiz/page.tsx` — there is no server API route. The CAPI call cannot go server-side without adding a new API route or converting the quiz to use an API route.

**Decision required:** Two options with clear tradeoffs:

**Option A (recommended): Add `/api/quiz` route**
- Converts quiz insert to use an API route (matches audit/pdf pattern)
- Enables CAPI call from server with full data (ip, user agent)
- Build cost: ~30 minutes to extract Supabase insert + email queue logic into a route
- This is the correct long-term architecture — the client Supabase insert bypasses server-side processing

**Option B: Client-only CAPI proxy**
- Keep existing quiz client Supabase insert, add only `fbpixelEvent()` (no CAPI)
- Pixel-only tracking for quiz (no server-side signal)
- Lower event match quality for quiz vs audit/pdf
- Zero build cost beyond adding `fbpixelEvent()` call

**Recommendation: Option A.** The quiz is the highest-traffic form. CAPI signal quality matters most here. The refactor is small.

### Consent → Pixel Initialization Flow

```
First visit (no stored consent)
    ↓
FacebookPixel.tsx: localStorage.getItem('autoflow_cookie_consent') = null
→ renders nothing
→ attaches window event listener for 'consent:granted'
    ↓
ConsentBanner appears (0.8s delay, existing behaviour)
    ↓
User clicks "Chấp nhận"
    ↓
ConsentBanner.tsx handleAccept():
  1. setStoredConsent('granted')     [existing]
  2. updateGtag('granted')           [existing]
  3. window.dispatchEvent(new Event('consent:granted'))  [NEW]
    ↓
FacebookPixel.tsx event listener fires:
  setPixelReady(true)
    ↓
Component re-renders → <Script> for fbevents.js is rendered
→ Pixel loads → fbq('init', PIXEL_ID) → fbq('track', 'PageView')

Subsequent visits (consent already stored):
FacebookPixel.tsx: localStorage = 'granted' → setPixelReady(true) immediately
→ Pixel loads normally via afterInteractive strategy
```

---

## Integration Points

### External Services

| Service | Integration Pattern | Credentials |
|---------|---------------------|-------------|
| Meta Pixel (browser) | `<Script strategy="afterInteractive">` in `FacebookPixel.tsx` | `NEXT_PUBLIC_FB_PIXEL_ID` |
| Meta CAPI (server) | `fetch` POST from `lib/capi.ts` called inside existing API routes | `FB_PIXEL_ID` + `FB_CAPI_TOKEN` (no `NEXT_PUBLIC_` prefix) |
| Existing consent system | `localStorage` key `autoflow_cookie_consent`, window event `consent:granted` | No credentials — window event only |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| `FacebookPixel.tsx` → Consent | Read `localStorage` on mount + listen `window` event | No prop passing — avoids making consent a React context dependency |
| Client form → API route | `event_id`, `fbp`, `fbc` added to existing POST body fields | API routes already parse JSON body; these are additive fields |
| API route → `lib/capi.ts` | Direct function call, fire-and-forget `.catch()` | CAPI failure must never cause form submission failure |
| `lib/fbpixel.ts` | Client-only; uses `window.fbq`, `document.cookie` | Must never be imported in Server Components or `lib/capi.ts` |
| `lib/capi.ts` | Server-only; uses Node.js `crypto`, `process.env` secrets | Must never be imported in `'use client'` components |

---

## Environment Variables

```bash
# Public — safe to expose in client bundle (NEXT_PUBLIC_ prefix)
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345

# Secret — server-only, never in client bundle
FB_PIXEL_ID=123456789012345     # same value, server copy without prefix
FB_CAPI_TOKEN=EAAxxxxxxxx...    # Meta system user access token
```

Note: Two env vars for the same Pixel ID are needed because `NEXT_PUBLIC_` is required for `FacebookPixel.tsx` (client component) but the server copy should not use `NEXT_PUBLIC_` to avoid confusion about whether it is sensitive. The access token must never have `NEXT_PUBLIC_` under any circumstances.

---

## Build Order (Dependency-Aware)

1. **`lib/fbpixel.ts`** — Defines `generateEventId()`, `getCookie()`, `fbpixelEvent()`. No dependencies. Unblocks pixel event calls in quiz/audit forms.

2. **`lib/capi.ts`** — Defines `sendCapiEvent()`. Requires `FB_PIXEL_ID` + `FB_CAPI_TOKEN` env vars in `.env.local`. No dependencies on other new files. Unblocks API route modifications.

3. **`ConsentBanner.tsx` modification** — Add `window.dispatchEvent(new Event('consent:granted'))` in `handleAccept`. One line. Unblocks `FacebookPixel.tsx` late-consent path.

4. **`FacebookPixel.tsx`** — New Client Component. Depends on `NEXT_PUBLIC_FB_PIXEL_ID` env var and the consent window event. Add to `layout.tsx` next to `<GoogleAnalytics />`.

5. **`layout.tsx` modification** — Import and render `<FacebookPixel />` after `<GoogleAnalytics />`. One line addition. Pixel is now live for consenting users.

6. **`api/audit/route.ts` modification** — Accept `event_id`, `fbp`, `fbc` in body. Call `sendCapiEvent()` fire-and-forget after Supabase insert. Verify with Meta Events Manager test tool.

7. **`api/tai-lieu/route.ts` modification** — Same pattern as audit route. PDF download as `Lead` event (or `CompleteRegistration`).

8. **Quiz API route + client modification** — If Option A is chosen: extract quiz Supabase insert into `/api/quiz`, update `quiz/page.tsx` to use `fetch('/api/quiz',...)` instead of direct Supabase client insert, add `fbpixelEvent()` + CAPI call.

---

## Anti-Patterns

### Anti-Pattern 1: Loading Pixel Unconditionally in layout.tsx

**What people do:** Add `fbq('init', ...)` via a `<Script>` component in `layout.tsx` without checking consent — matching the GA pattern but ignoring that GA has its own consent mode.

**Why it's wrong:** The Pixel sets `_fbp` cookies on load. Loading before consent violates GDPR/ePrivacy. GA4 is legal without prior consent because it uses consent mode to suppress cookie writes. The Pixel has no equivalent mechanism — it must not load until consent is granted.

**Do this instead:** `FacebookPixel.tsx` with the conditional loading pattern in Pattern 1 above.

---

### Anti-Pattern 2: Generating event_id Server-Side Only

**What people do:** Generate `event_id` in the API route (server), then try to use it in the Pixel call.

**Why it's wrong:** The Pixel fires before the API response returns. By the time the server generates the ID and returns it to the client, the Pixel event has already fired without an `eventID`. The deduplication fails — both events are counted as separate conversions.

**Do this instead:** Generate `event_id` client-side before any event fires (Pattern 2). Pass it to both the Pixel call and the API route body simultaneously.

---

### Anti-Pattern 3: Hashing fbp/fbc Values

**What people do:** Apply SHA-256 to all fields in `user_data` including `fbp` and `fbc`, following the same rule as email/phone.

**Why it's wrong:** Meta explicitly requires `fbp` and `fbc` to be sent as raw (unhashed) strings. Hashing them produces a string Meta cannot decode, so the browser-pixel-to-CAPI match fails and event match quality drops to near zero.

**Do this instead:** Hash only `em` (email) and `ph` (phone). Pass `fbp`, `fbc`, `client_ip_address`, and `client_user_agent` as plain strings.

---

### Anti-Pattern 4: Blocking the API Response on CAPI

**What people do:** `await sendCapiEvent(...)` before `return NextResponse.json({ success: true })`.

**Why it's wrong:** If `graph.facebook.com` is slow (>2s is common) or down, the user's form submission hangs. CAPI latency is not the user's problem. A 3-second form submit feels broken.

**Do this instead:** `sendCapiEvent(...).catch(err => console.error('CAPI error:', err))` — fire and forget. The CAPI call runs concurrently with the response being sent to the client. Log errors for monitoring but never surface them to the user.

---

### Anti-Pattern 5: A Separate `/api/fb-events` Client Route

**What people do:** Create a dedicated `/api/fb-events` route and make a second `fetch` call from the client form after the main form submission.

**Why it's wrong:** Two HTTP round trips per form submission. More importantly, this route becomes a public endpoint that accepts arbitrary data and calls the CAPI token — a potential abuse vector. The existing form routes already have rate limiting, honeypot, and validation. Reusing them keeps all protections in one place.

**Do this instead:** Add CAPI call to the existing form API routes where form data is already validated.

---

## Scaling Considerations

This is a marketing website with low concurrent form submissions. No scaling concerns at current traffic levels.

| Scale | Notes |
|-------|-------|
| Current (low volume) | Direct `fetch` to Meta API from route handler is fine |
| >1000 submissions/day | Consider queuing CAPI events (e.g., via Supabase Edge Function or n8n) if `graph.facebook.com` rate limits appear in logs |
| CAPI rate limits | Meta Graph API allows 200 calls/hour per access token by default; for a lead gen site this is never a constraint |

---

## Sources

### Primary (HIGH confidence)

- Local Next.js 16 docs: `node_modules/next/dist/docs/01-app/03-api-reference/02-components/script.md` — `<Script>` strategies, `afterInteractive`, `onLoad`/`onReady` client-only
- Existing codebase: `src/components/analytics/ConsentBanner.tsx` — `CONSENT_KEY`, `getStoredConsent()`, `setStoredConsent()` patterns confirmed
- Existing codebase: `src/components/analytics/GoogleAnalytics.tsx` — inline consent default + deferred `<Script>` pattern confirmed
- Existing codebase: `src/app/api/audit/route.ts`, `src/app/api/tai-lieu/route.ts` — JSON body parsing, Supabase insert, fire-and-forget webhook pattern confirmed
- [Meta Pixel Advanced — eventID fourth parameter syntax](https://developers.facebook.com/docs/meta-pixel/advanced/) — `fbq('track', 'Lead', {}, { eventID: 'xxx' })` confirmed
- [Meta CAPI Deduplication docs](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/) — 48h window, event_name + event_id matching
- [Meta CAPI Original Event parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/original-event/) — `event_id` optional but required for dedup; any unique string
- [fbp/fbc parameter capture — Watsspace](https://watsspace.com/blog/meta-conversions-api-fbc-and-fbp-parameters/) — cookie format `fb.1.<ts>.<random>`, confirmed NOT hashed
- [Meta CAPI SHA-256 hashing — WebSearch via AdAmigo](https://www.adamigo.ai/blog/how-to-standardize-conversion-data-for-meta-integration) — lowercase+trim before hash for em/ph; raw for fbp/fbc/ip/ua

### Secondary (MEDIUM confidence)

- [FB CAPI + Next.js setup — stape.io 2026 guide](https://stape.io/blog/how-to-set-up-facebook-conversion-api) — full data flow for leads, fbc/fbp field extraction
- [event_id generation — Brad Farleigh 2025](https://www.bradfarleigh.com/2025/02/facebook-pixel-signal-deduplication-using-event_id/) — timestamp+random format confirmed valid; UUID also acceptable
- [Meta Consent Mode for Pixel — secureprivacy.ai 2025](https://secureprivacy.ai/blog/meta-consent-mode-explained-2025) — Pixel must not load before consent; no native consent mode integration unlike GA4
- [Next.js Facebook Pixel example — vercel/next.js canary](https://github.com/vercel/next.js/tree/canary/examples/with-facebook-pixel) — `'use client'` Script pattern for Pixel

---

*Architecture research for: FB Pixel + Conversions API — Next.js 16 App Router*
*Researched: 2026-03-29*
