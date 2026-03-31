# Stack Research

**Domain:** Facebook Pixel + Meta Conversions API (CAPI) — subsequent milestone
**Researched:** 2026-03-29
**Confidence:** HIGH

## Context

This is a SUBSEQUENT MILESTONE. The following are already decided and must not change:

| Technology | Version | Status |
|------------|---------|--------|
| Next.js | 16.2.1 | Locked |
| React | 19.2.4 | Locked |
| Supabase (`@supabase/supabase-js`) | ^2.100.1 | Locked |
| `@supabase/ssr` | ^0.9.0 | Locked |
| Tailwind CSS | ^4 | Locked |
| Resend | ^6.9.4 | Locked |
| TypeScript | ^5 | Locked |
| GA4 with Consent Mode v2 | — | Locked (existing) |
| Custom consent banner (localStorage) | — | Locked (existing pattern) |

Research scope: FB Pixel client-side loading strategy, Meta CAPI Node.js SDK, deduplication between Pixel and CAPI.

---

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| `next/script` (built-in) | ships with Next.js 16 | Load Meta Pixel base code client-side | No third-party wrapper needed. The `strategy="afterInteractive"` loads the fbq snippet after hydration. Conditionally render the `<Script>` component in a `'use client'` component gated by the existing localStorage consent flag — same pattern already used for GA4. Zero extra dependencies. |
| `facebook-nodejs-business-sdk` | ^25.0.1 | Send server-side CAPI events from Next.js Route Handlers | Official Meta SDK. Provides `ServerEvent`, `UserData`, `CustomData`, `EventRequest` classes. Handles Graph API authentication and request formatting. v25 is the current major release (released March 2026). Install alongside `@types/facebook-nodejs-business-sdk` for TypeScript. |
| `@types/facebook-nodejs-business-sdk` | ^23.0.0 | TypeScript definitions for the SDK | The main SDK does not bundle types. The DefinitelyTyped package is a separate install. Note: the types package lags the SDK by approximately two major versions (types are at v23, SDK is at v25). Types cover all CAPI-relevant classes (`ServerEvent`, `UserData`, `EventRequest`). Accept minor type gaps for newer fields if they arise. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `crypto` (Node.js built-in) | built-in | SHA-256 hash PII before sending to CAPI | Meta requires `em` (email), `ph` (phone), etc. to be SHA-256 hashed lowercase. Use `crypto.createHash('sha256').update(value).digest('hex')`. No install needed in Next.js Route Handlers. |
| `uuid` | ^11.x | Generate `event_id` for deduplication | Both the client Pixel call and the CAPI server call must carry the same `event_id`. Generate a UUID per conversion event. Already a common transitive dependency — check if it's already present before installing. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Meta Pixel Helper (Chrome extension) | Verify Pixel fires correctly in browser | Shows which events fired, event data, and whether `eventID` is present — critical for validating deduplication setup |
| Meta Events Manager — Test Events tab | Validate CAPI server events arrive at Meta | Set `test_event_code` on `EventRequest` during development; remove from production code. Events appear in real-time in the Test Events view, labelled as Server or Browser source. |
| Meta Payload Helper | Validate CAPI request structure | Available inside Events Manager — paste a raw payload to check for required fields and hashing format |

---

## Installation

```bash
# CAPI server-side SDK
npm install facebook-nodejs-business-sdk

# TypeScript types for SDK
npm install -D @types/facebook-nodejs-business-sdk

# UUID for event_id generation (check if already present first)
npm install uuid
npm install -D @types/uuid
```

No additional install needed for client-side Pixel — `next/script` is built into Next.js.

---

## CAPI Endpoint Details

Meta CAPI sends events via the Graph API. No direct HTTP call is needed when using the SDK — `EventRequest.execute()` handles the POST internally.

**Underlying endpoint (for reference):**
```
POST https://graph.facebook.com/v25.0/{PIXEL_ID}/events?access_token={ACCESS_TOKEN}
```

**Authentication:** A System User Access Token generated in Meta Business Manager (Events Manager > Settings > Generate Access Token). This is a long-lived token scoped to the pixel. Store as `FB_CAPI_ACCESS_TOKEN` environment variable — never expose client-side.

**Required event fields:**
| Field | Type | Notes |
|-------|------|-------|
| `event_name` | string | Standard event names: `PageView`, `Lead`, `Contact`, `Purchase`, `ViewContent` |
| `event_time` | Unix timestamp (seconds) | `Math.floor(Date.now() / 1000)` |
| `action_source` | string | Always `"website"` for web events |
| `user_data` | `UserData` object | At minimum: `client_ip_address`, `client_user_agent`. Add hashed `em` and `ph` when available. |
| `event_id` | string | Shared with client Pixel call for deduplication — a UUID generated per event |

**Batch limit:** Up to 1,000 events per request. For this website use-case, single-event requests per Route Handler call are appropriate.

---

## Deduplication: How It Works

Meta deduplicates when both a browser Pixel event and a CAPI server event share the **same `event_name` + `event_id`** within a 48-hour window.

**Client-side Pixel call (in browser):**
```typescript
// Pass eventID as the 4th argument to fbq()
const eventId = crypto.randomUUID(); // generate before both calls
fbq('track', 'Lead', { content_name: 'Contact Form' }, { eventID: eventId });

// Also POST eventId to your own API route so the server can mirror it
await fetch('/api/events/lead', { body: JSON.stringify({ eventId }) });
```

**Server-side CAPI call (in Next.js Route Handler):**
```typescript
import { ServerEvent, UserData, EventRequest } from 'facebook-nodejs-business-sdk';

const serverEvent = new ServerEvent();
serverEvent.setEventName('Lead');
serverEvent.setEventTime(Math.floor(Date.now() / 1000));
serverEvent.setEventId(eventId);  // same UUID from client
serverEvent.setActionSource('website');

const userData = new UserData();
userData.setClientIpAddress(ip);
userData.setClientUserAgent(userAgent);
// hash email if available: userData.setEmail(sha256(email.toLowerCase()))

const eventRequest = new EventRequest(
  process.env.FB_CAPI_ACCESS_TOKEN!,
  process.env.NEXT_PUBLIC_FB_PIXEL_ID!
);
eventRequest.setEvents([serverEvent]);
await eventRequest.execute();
```

**Critical constraint:** The `event_id` must be generated once per event, passed to `fbq()` in the browser, AND passed to the CAPI Route Handler. The Route Handler must receive this ID from the client (e.g., in the request body). Do not independently generate it server-side.

**Fallback deduplication (no event_id):** Meta can match on `event_name + fbp + event_time` within 48 hours, but this is less reliable. Always use `event_id`.

---

## Pixel Loading with Consent

The existing site uses a custom localStorage consent banner (same pattern as GA4 Consent Mode v2). Apply the same pattern for Pixel:

- Store consent in localStorage under the existing consent key(s)
- In a `'use client'` component (e.g., `components/providers/analytics.tsx`), read consent on mount via `useEffect`
- Conditionally render `<Script id="fb-pixel" strategy="afterInteractive">` only when `ads_storage` consent is granted
- When consent is denied, do NOT load the Pixel script — Meta does not have a native "consent mode" like Google; the correct approach is to simply not fire the Pixel

**Environment variables needed:**
```bash
NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id        # public — used in browser fbq() calls
FB_CAPI_ACCESS_TOKEN=your_system_user_token  # private — Route Handler only
```

---

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| `facebook-nodejs-business-sdk` (official) | Raw `fetch` to Graph API | Raw fetch is fine for simple single-event CAPI calls if you want zero dependencies. The SDK becomes worth its weight when sending batched events or needing `testEventCode` support during development. For a marketing website with a handful of conversion events, raw fetch is a legitimate alternative. |
| `facebook-nodejs-business-sdk` (official) | `@rivercode/facebook-conversion-api` community wrapper | Community wrapper is simpler API but unmaintained (last release ~2022). Official SDK is actively maintained and aligned with Graph API version cadence. |
| `next/script` (built-in) | `react-facebook-pixel` npm package | `react-facebook-pixel` wraps fbq() but has known SSR issues with Next.js App Router (see GitHub issue #53). The package is also infrequently maintained. Direct `next/script` with inline `dangerouslySetInnerHTML` is the pattern used in the official Next.js `with-facebook-pixel` example. |
| `next/script` (built-in) | Google Tag Manager loading Pixel | GTM is the correct choice if a non-developer marketing team needs to manage pixel configuration. For a developer-owned Next.js codebase with existing consent logic, direct integration avoids GTM complexity and keeps consent gating in code. |

---

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| `react-facebook-pixel` (npm) | SSR-incompatible with Next.js App Router. Not maintained for RSC boundaries. GitHub issues show it breaks with Next.js 14+. | Direct `next/script` with inline fbq() initialization |
| `beforeInteractive` script strategy | Pixel does not need to load before hydration — it only needs to fire on user interaction events. `beforeInteractive` blocks page rendering and is reserved for scripts that must execute before any JS runs. | `afterInteractive` strategy |
| Expose `FB_CAPI_ACCESS_TOKEN` as `NEXT_PUBLIC_*` | Access tokens in client bundles can be extracted and abused to send fraudulent conversions to your pixel. | Keep token server-only; only `NEXT_PUBLIC_FB_PIXEL_ID` should be public |
| Generating `event_id` independently on server | Server-generated IDs that don't match client Pixel calls break deduplication entirely — Meta can't pair the events and you double-count conversions. | Generate UUID once client-side, pass to both fbq() and the API Route body |
| `@types/facebook-nodejs-business-sdk` as a runtime dependency | It's a types-only package. | Install with `-D` flag |

---

## Stack Patterns by Variant

**For PageView events (every route navigation):**
- Fire `fbq('track', 'PageView')` in a `'use client'` component listening to `usePathname()` changes
- Do NOT send PageView to CAPI — PageView deduplication is not needed and CAPI PageView adds no signal value for most marketing websites
- Only gate the initial `fbq('init', PIXEL_ID)` call on consent

**For Lead / Contact form submissions:**
- Generate UUID client-side before form submission
- Fire `fbq('track', 'Lead', data, { eventID: uuid })` immediately
- POST form data + `eventId` to a Next.js Route Handler
- Route Handler hashes PII, builds `ServerEvent` with matching `eventId`, calls CAPI
- This dual-fire pattern achieves ~100% signal coverage (client fires immediately, server fires with richer user data)

**For ViewContent (service pages, pricing page):**
- Client Pixel only is sufficient — CAPI for ViewContent has minimal incremental value
- Skip CAPI for this event type to reduce Route Handler overhead

**If consent is denied:**
- Do not load Pixel at all (no lazy or deferred load)
- Do not send CAPI events (even server-side CAPI fires are subject to Meta's privacy policies when tied to identifiable user data)

---

## Version Compatibility

| Package | Compatible With | Notes |
|---------|-----------------|-------|
| `facebook-nodejs-business-sdk@^25.0.1` | Node.js 18+, Next.js 16 Route Handlers | SDK is a server-side package only. Never import in client components or pages. |
| `@types/facebook-nodejs-business-sdk@^23.0.0` | `typescript@^5` | Types lag SDK by ~2 major versions. CAPI classes (`ServerEvent`, `UserData`, `EventRequest`, `CustomData`) are covered. Newer Campaign-level additions may lack types. |
| `next/script` with `afterInteractive` | Next.js 16, App Router | Fully supported in App Router layouts and Client Components. Do not use in Server Components. |
| `uuid@^11.x` | Node.js 18+, browser (via crypto.randomUUID()) | In browser, `crypto.randomUUID()` (no package needed) is available in all modern browsers. Use the `uuid` package only server-side for consistency, or use `crypto.randomUUID()` everywhere. |
| Graph API v25.0 | Current as of March 2026 | Meta's Graph API versions are supported for ~2 years. v25.0 is the current version used by SDK v25. |

---

## Sources

- [Meta Conversions API official docs](https://developers.facebook.com/docs/marketing-api/conversions-api/) — endpoint, auth, required fields (MEDIUM confidence — page partially in Vietnamese locale)
- [Meta CAPI Using the API](https://developers.facebook.com/docs/marketing-api/conversions-api/using-the-api/) — confirmed v25.0 endpoint, required fields (HIGH confidence)
- [Meta CAPI Deduplication guide](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/) — event_id + event_name matching, 48-hour window (HIGH confidence)
- [facebook-nodejs-business-sdk GitHub Releases](https://github.com/facebook/facebook-nodejs-business-sdk/releases) — v25.0.1 released March 30 2026, confirmed latest (HIGH confidence)
- [@types/facebook-nodejs-business-sdk npm](https://www.npmjs.com/package/@types/facebook-nodejs-business-sdk) — v23.0.0 latest types package, last published ~November 2025 (HIGH confidence)
- [Vercel next.js with-facebook-pixel example](https://github.com/vercel/next.js/tree/canary/examples/with-facebook-pixel) — official Next.js Pixel loading pattern using next/script (HIGH confidence)
- [Next.js Script Component docs](https://nextjs.org/docs/app/api-reference/components/script) — afterInteractive strategy, App Router compatibility (HIGH confidence)
- [WebSearch: react-facebook-pixel Next.js App Router issue #53](https://github.com/zsajjad/react-facebook-pixel/issues/53) — SSR compatibility problems confirmed (MEDIUM confidence)
- [facebook-nodejs-business-sdk CAPI gist example](https://gist.github.com/remarkablemark/0de93d964fd0a344b8ead875722d2bcf) — ServerEvent, UserData, EventRequest usage pattern (MEDIUM confidence)
- [Meta Events Manager test_event_code docs](https://docs.addingwell.com/en/meta-capi/test-events) — test event debugging workflow (MEDIUM confidence)

---
*Stack research for: Facebook Pixel + Meta Conversions API — autoflow-vn website*
*Researched: 2026-03-29*
