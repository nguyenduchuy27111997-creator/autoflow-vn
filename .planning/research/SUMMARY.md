# Project Research Summary

**Project:** autoflow-vn website — Facebook Pixel + Meta Conversions API
**Domain:** Client-side tracking + server-side event mirroring for lead-gen website
**Researched:** 2026-03-29
**Confidence:** HIGH

## Executive Summary

This milestone adds Facebook Pixel (browser-side) and Meta Conversions API / CAPI (server-side) tracking to an existing Next.js 16 App Router website that already has GA4 with Consent Mode v2 and a custom localStorage consent banner. The canonical approach for this domain is a dual-channel pattern: the browser Pixel fires immediately on user action to capture `_fbp`/`_fbc` cookies and provide real-time signal, while a server-side CAPI call mirrors every meaningful conversion event to recover signal lost to ad blockers and iOS 14+ Intelligent Tracking Prevention. Both channels share a single `event_id` per conversion so Meta deduplicates them into one counted event — not two.

The recommended implementation uses `next/script` with `strategy="afterInteractive"` (built-in to Next.js 16, zero new dependencies) for the browser Pixel, and the official `facebook-nodejs-business-sdk` v25.0.1 for CAPI calls inside existing Next.js Route Handlers. The site has three conversion points — quiz completion, audit form submission, PDF download — all mapped to Meta's `Lead` standard event differentiated by `content_name`. CAPI is required for all three because they are the primary optimization signals for Meta ad campaigns. Client-side-only events suffice for `PageView`, `ViewContent`, and a `QuizStart` custom event.

The three most consequential risks are: (1) broken deduplication from a mismatched or absent `event_id`, which silently inflates conversions 2x with no error signal; (2) the CAPI System User Access Token placed in a `NEXT_PUBLIC_` environment variable, exposing full ad account access to anyone with browser DevTools; and (3) the Pixel loading before user consent, a GDPR violation. All three are architectural decisions made at the start of implementation — they cannot be retrofitted safely after the fact. The existing consent system (localStorage + window event dispatch) provides the correct integration surface; it requires one modification to `ConsentBanner.tsx` to dispatch a `consent:granted` window event on accept.

---

## Key Findings

### Recommended Stack

The stack is almost entirely determined by locked existing dependencies (Next.js 16, React 19, TypeScript 5, Tailwind 4, Supabase). Two new production dependencies are required: `facebook-nodejs-business-sdk@^25.0.1` (official Meta SDK, server-only) and `uuid@^11.x` for `event_id` generation (verify it is not already a transitive dependency first; in modern browsers `crypto.randomUUID()` is available without any package). One new dev dependency: `@types/facebook-nodejs-business-sdk@^23.0.0` (types lag the SDK by approximately two major versions but cover all CAPI-relevant classes). The browser Pixel requires no new dependencies — `next/script` is built into Next.js 16.

**Core technologies:**
- `next/script` (built-in): Pixel script loading with `afterInteractive` strategy — consent-gated via conditional render in a `'use client'` component; no third-party wrapper needed
- `facebook-nodejs-business-sdk@^25.0.1`: Official Meta SDK for CAPI server events — `ServerEvent`, `UserData`, `EventRequest` classes; handles Graph API v25.0 auth and request formatting
- `crypto` (Node.js built-in): SHA-256 hashing of PII (email, phone) before CAPI transmission — no install required in Route Handlers
- `crypto.randomUUID()` / `uuid@^11.x`: Unique `event_id` per conversion event — the deduplication linchpin; browser-native in all modern browsers

**Critical constraints:**
- `FB_CAPI_ACCESS_TOKEN` must never use the `NEXT_PUBLIC_` prefix — server-only
- `NEXT_PUBLIC_FB_PIXEL_ID` is the only public-safe FB environment variable
- `facebook-nodejs-business-sdk` is a server-side-only package; must never be imported in Client Components
- `@types/facebook-nodejs-business-sdk` installs with `-D` flag (types-only, not runtime)

### Expected Features

The feature set maps cleanly to the existing GA4 event taxonomy. Three conversion points already fire GA4 events; this milestone maps them to FB standard events and adds CAPI server-side coverage for signal recovery.

**Must have (table stakes — v1 launch blockers):**
- Base Pixel init on all pages (consent-gated) — no attribution works without this
- `Lead` event on quiz completion — highest-volume conversion, primary algorithm signal
- `Lead` event on audit form submission — highest-value conversion
- `Lead` event on PDF download — volume signal for Lookalike audience seed building
- `event_id` generation and client-to-server threading — required for deduplication
- Domain verification in Meta Business Manager — CAPI events silently rejected without it
- CAPI server endpoint for all three `Lead` events — recovers events blocked by ad blockers / iOS
- Hashed email + phone in CAPI `user_data` — required for Event Match Quality (EMQ) score ≥ 6

**Should have (differentiators — v1.x after validation):**
- `_fbc` and `_fbp` cookie capture and forwarding to CAPI — improves ad click attribution accuracy
- `value` + `currency` parameters on `Lead` events (VND per conversion type) — unlocks Meta Value Optimization bidding
- `QuizStart` custom event — enables quiz abandoner retargeting audience in Ads Manager

**Defer (v2+):**
- Offline conversion upload (requires CRM integration)
- GTM Server-Side container (overkill for current scale — fewer than 200 CAPI calls/hour)
- Catalog-based dynamic ads (irrelevant for a services lead-gen site)

**Anti-features to reject:**
- Tracking scroll, hover, or micro-interactions — creates noise, degrades Meta algorithm optimization
- Firing both `Lead` and `CompleteRegistration` on the same action — causes double-counting
- Custom events mirroring every GA4 event — concentrate signal on fewer high-value events

### Architecture Approach

The architecture is a minimal extension of the existing codebase: two new library files, one new Client Component, one minor modification each to `ConsentBanner.tsx` and `layout.tsx`, and CAPI call additions to two existing API routes. A key special case is the quiz, which currently uses the browser Supabase client directly with no API route — this prevents server-side CAPI. The recommended resolution (Option A) is to extract the quiz Supabase insert into a new `/api/quiz` Route Handler, an approximately 30-minute refactor that gives the highest-traffic conversion full CAPI coverage.

**Major components:**

1. `FacebookPixel.tsx` (Client Component, NEW) — Conditional Pixel script loading; reads consent from localStorage on mount, listens for `consent:granted` window event for late consent (after banner accept without page reload), renders `<Script strategy="afterInteractive">` only when consent is granted
2. `lib/fbpixel.ts` (client-only, NEW) — `generateEventId()`, `getCookie()` for `_fbp`/`_fbc`, `fbpixelEvent()` wrapper around `window.fbq`; must never be imported in Server Components
3. `lib/capi.ts` (server-only, NEW) — `sendCapiEvent()` async function; SHA-256 PII hashing, Graph API POST via `facebook-nodejs-business-sdk`, fire-and-forget integration; must never be imported in `'use client'` components
4. `api/audit/route.ts` + `api/tai-lieu/route.ts` (MODIFY) — Accept `event_id`, `fbp`, `fbc` in request body; call `sendCapiEvent()` fire-and-forget after Supabase insert
5. `api/quiz/route.ts` (NEW, Option A) — Extract quiz Supabase insert server-side; enables CAPI on the highest-volume conversion point

**Key patterns:**
- Client/server module boundary is strict — `lib/fbpixel.ts` and `lib/capi.ts` must never be cross-imported
- `event_id` is always generated client-side before any event fires, then passed in the POST body to the server
- CAPI calls are always fire-and-forget — `sendCapiEvent(...).catch(err => console.error(...))` — never block the user-facing form response
- Only `em` (email) and `ph` (phone) are SHA-256 hashed; `fbp`, `fbc`, `client_ip_address`, and `client_user_agent` are passed as raw strings

**Build order (dependency-aware):**
1. `lib/fbpixel.ts` — no dependencies; unblocks client event calls
2. `lib/capi.ts` — no dependencies; requires env vars in `.env.local`
3. `ConsentBanner.tsx` modification — one line; unblocks `FacebookPixel.tsx` late-consent path
4. `FacebookPixel.tsx` + `layout.tsx` modification — Pixel now live for consenting users
5. `api/audit/route.ts` + `api/tai-lieu/route.ts` modifications — CAPI live on form submissions
6. `/api/quiz` Route Handler + `quiz/page.tsx` update — CAPI live on quiz completion

### Critical Pitfalls

1. **Broken deduplication from mismatched `event_id`** — Generate UUID once client-side before any event fires; pass the same value to both `fbq()` and the API route body simultaneously; never generate it independently on the server. The most common failure mode — inflates conversions 2x silently, no error in console.

2. **CAPI Access Token in a `NEXT_PUBLIC_` environment variable** — Store as `FB_CAPI_ACCESS_TOKEN` with no `NEXT_PUBLIC_` prefix. Verify with `grep -r "NEXT_PUBLIC_FB" src/` returning zero matches for any access token variable. A leaked token grants full ad account write access.

3. **Pixel loading before consent** — Never add Pixel directly to `layout.tsx`. Use the `FacebookPixel.tsx` conditional loading pattern. Verify in incognito: zero requests to `connect.facebook.net` before the user clicks "Accept" on the consent banner. This is a GDPR violation with fines up to 4% of global turnover.

4. **PII sent unhashed or incorrectly normalized** — Lowercase and trim email before SHA-256; strip all non-digits and format as E.164 (`+84...`) for Vietnamese phone numbers before hashing. Do not hash `fbp`, `fbc`, `client_ip_address`, or `client_user_agent` — Meta requires these as raw strings and hashing them destroys Event Match Quality.

5. **CAPI blocking the Route Handler response** — Always fire-and-forget. If Meta's Graph API is slow (>2s response is common), the user's form submission hangs. CAPI latency is never the user's problem; it should never appear in the critical path.

---

## Implications for Roadmap

Based on the dependency chain across all four research files, three implementation phases are appropriate. The ordering is constrained: consent architecture must exist before Pixel fires; Pixel must load before CAPI events have `_fbp`/`_fbc` cookies to forward; domain verification must be complete before CAPI events are accepted by Meta.

### Phase 0: Audit and Environment Setup

**Rationale:** PITFALLS.md explicitly calls for an audit phase before any implementation to inventory existing CAPI connections in Meta Events Manager. Uncoordinated CAPI sources from multiple systems create attribution corruption that cannot be resolved after the fact. Environment variable naming conventions (server-only vs public) must be locked before the first line of tracking code is written, because retrofitting them breaks deduplication.

**Delivers:** Verified clean state in Meta Events Manager (no unexpected CAPI sources), domain verification completed in Meta Business Manager, environment variables defined in `.env.local` and Vercel (`NEXT_PUBLIC_FB_PIXEL_ID`, `FB_PIXEL_ID`, `FB_CAPI_TOKEN`), test Pixel ID ready for development use

**Addresses:** Domain verification (table stakes — CAPI silently rejects events to unverified domains); Multi-source CAPI audit (Pitfall 8)

**Avoids:** Multiple CAPI sources double-counting; token exposure from wrong env var naming

**Research flag:** Configuration only — no code research needed; Pitfalls file documents the audit process explicitly

### Phase 1: Core Pixel + Consent Integration

**Rationale:** Consent architecture is the prerequisite for everything and is not safely retroactable. Building the Pixel with consent gating first validates the `next/script` + localStorage pattern in isolation before CAPI complexity is layered on top. It also establishes the Pixel base code that will set `_fbp`/`_fbc` cookies — cookies that Phase 2 CAPI calls depend on for Event Match Quality.

**Delivers:** `lib/fbpixel.ts` helpers, `FacebookPixel.tsx` conditional loader, `ConsentBanner.tsx` window event modification, `layout.tsx` integration, `PageView` firing for consented users, verified in Meta Pixel Helper and Events Manager Test Events tab

**Addresses:** Base Pixel on all pages (P1 table stakes); `PageView` auto-fire; consent architecture

**Avoids:** Pixel fires before consent (Pitfall 3 / GDPR); PageView double-firing from App Router SPA navigation (Pitfall 4); loading Pixel unconditionally in layout (Architecture Anti-Pattern 1)

**Research flag:** Standard patterns — well-documented in the official Next.js `with-facebook-pixel` example and the existing codebase consent system. No additional research needed.

### Phase 2: CAPI + Lead Event Integration

**Rationale:** CAPI is the primary value of this milestone. It depends on Phase 1 being stable: the Pixel must initialize and set `_fbp`/`_fbc` cookies before CAPI events can forward them for attribution. The quiz Route Handler extraction (Option A) belongs in this phase because the quiz is the highest-traffic conversion and should have CAPI coverage from launch, not as an afterthought.

**Delivers:** `lib/capi.ts` server helper, CAPI calls in `api/audit/route.ts` and `api/tai-lieu/route.ts`, new `/api/quiz` Route Handler, `Lead` events on all three conversion points with `event_id` deduplication, hashed email/phone in `user_data`, verified deduplication showing combined (not doubled) events in Events Manager Test Events tab

**Uses:** `facebook-nodejs-business-sdk@^25.0.1`, Node.js `crypto` built-in, `crypto.randomUUID()`

**Addresses:** All P1 features: CAPI server endpoint, `Lead` on quiz/audit/pdf, `event_id` generation, hashed user data

**Avoids:** Deduplication broken from missing `event_id` (Pitfall 1); PII sent unhashed (Pitfall 5); CAPI blocking response (Pitfall / Architecture Anti-Pattern 4); separate `/api/fb-events` public endpoint as abuse vector (Architecture Anti-Pattern 5)

**Research flag:** Standard patterns — Meta CAPI docs are authoritative and complete; existing Route Handler patterns are established in the codebase. No additional research needed.

### Phase 3: Attribution Quality + Signal Optimization

**Rationale:** Once base tracking is confirmed working (Events Manager shows events, EMQ score is visible), enrich the signal quality. These features are additive and non-breaking. EMQ baseline data from Phase 2 is needed to confirm the current score before applying improvements. Value parameters require confirmation that Meta Ads Manager accepts VND for value optimization in the Vietnam market.

**Delivers:** `_fbc` and `_fbp` cookie forwarding from client to CAPI payloads; `value` + `currency` parameters on `Lead` events (differentiated VND values per conversion type); `QuizStart` custom event; EMQ score verified at 7+ for all Lead event types in Events Manager; quiz abandoner retargeting audience configured in Ads Manager

**Addresses:** P2 features: cookie capture, value parameters, QuizStart event; EMQ monitoring

**Avoids:** Low EMQ from sparse user data (Pitfall 6); `_fbc`/`_fbp` cookie loss breaking attribution (Pitfall 7)

**Research flag:** Standard patterns — EMQ improvement is incremental enrichment of existing CAPI payloads; no novel architecture. Validate VND currency support in Meta Ads Manager before assigning monetary values (see Gaps section).

### Phase Ordering Rationale

- Consent architecture before Pixel prevents GDPR exposure from day one; it is not safely retrofittable
- Pixel initialization before CAPI is a hard technical dependency: `_fbp` cookie only exists after the Pixel has loaded; CAPI Event Match Quality depends on forwarding it
- Domain verification in Phase 0 saves wasted debugging time in Phase 2 — events are silently rejected without it and there is no error to diagnose
- Quiz Route Handler extraction belongs in Phase 2 (not a separate phase) because it is a small refactor (~30 minutes) that gates CAPI on the most critical conversion point
- Attribution enrichment (Phase 3) is intentionally deferred until base event flow is confirmed — adding `value` parameters and cookie forwarding before confirming base events work is premature

### Research Flags

Phases needing deeper research during planning:
- **Phase 0:** One-time Business Manager configuration — if the Meta Business Manager account does not yet have a Pixel created or is missing System User setup, this phase may surface organizational blockers requiring marketing/legal input before code work begins

Phases with standard patterns (skip research-phase):
- **Phase 1:** Official Next.js Pixel example and existing codebase consent pattern cover implementation completely
- **Phase 2:** Meta CAPI docs are authoritative; Route Handler pattern is already established in the codebase
- **Phase 3:** Incremental payload enrichment with documented fields — no novel patterns required

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Official Meta SDK v25.0.1 released March 2026 confirmed current; Next.js `with-facebook-pixel` example verified; all locked deps are known quantities |
| Features | HIGH | Official Meta Pixel Reference and CAPI Server Event Parameters docs used; three conversion points and their event mappings are unambiguous from existing GA4 taxonomy |
| Architecture | HIGH | Verified against actual codebase files (`ConsentBanner.tsx`, `api/audit/route.ts`, `api/tai-lieu/route.ts`); existing patterns confirmed, not inferred |
| Pitfalls | HIGH (Meta docs) / MEDIUM (Next.js specifics) | Core pitfalls from official Meta docs; App Router-specific patterns from community sources with multiple corroborating examples |

**Overall confidence:** HIGH

### Gaps to Address

- **Quiz architecture decision (Option A vs B):** Research recommends Option A (new `/api/quiz` Route Handler), but this refactors existing quiz code that currently uses a direct browser Supabase insert. Validate before planning that the quiz `quiz/page.tsx` has no side-effects that would be lost by moving the insert server-side. Budget ~30 minutes for refactor plus time for quiz flow regression testing.

- **`@types/facebook-nodejs-business-sdk` version lag:** Types package is at v23, SDK is at v25. Newer SDK fields added in v24-v25 may lack TypeScript coverage. The CAPI-relevant classes (`ServerEvent`, `UserData`, `EventRequest`, `CustomData`) are confirmed covered; accept minor type gaps for campaign-level additions if they arise.

- **VND currency support for value optimization:** FEATURES.md assigns VND values to `Lead` events for Meta Value Optimization bidding. Confirm Meta Ads Manager accepts VND as a valid currency for value-based audience optimization in the Vietnam market before implementing the `value` parameter in Phase 3. This is a configuration verification, not a code question.

- **Meta Business Manager account access:** Domain verification and System User Access Token generation require admin access to the Meta Business Manager account. Confirm this access exists before Phase 0 begins to avoid blocking Phase 2 implementation.

---

## Sources

### Primary (HIGH confidence)

- Meta Conversions API official docs — endpoint, auth, required fields, `event_id` deduplication
- Meta CAPI Using the API — confirmed v25.0 endpoint and required fields
- Meta CAPI Deduplication guide — `event_id` + `event_name` matching, 48-hour window
- Meta Pixel Reference — standard events, parameters, advanced matching
- Conversions API Server Event Parameters — `user_data` fields and hashing rules
- `facebook-nodejs-business-sdk` GitHub Releases — v25.0.1 confirmed current (March 2026)
- `@types/facebook-nodejs-business-sdk` npm — v23.0.0 confirmed
- Next.js official `with-facebook-pixel` example (vercel/next.js canary) — `next/script` App Router pattern
- Next.js Script Component docs — `afterInteractive` strategy, App Router compatibility
- Existing codebase: `src/components/analytics/ConsentBanner.tsx`, `GoogleAnalytics.tsx`, `api/audit/route.ts`, `api/tai-lieu/route.ts` — confirmed patterns

### Secondary (MEDIUM confidence)

- Meta Events Manager test_event_code docs — development debugging workflow
- SecurePrivacy: Meta Consent Mode Explained 2025 — Pixel consent requirements, GDPR guidance
- Stape.io: FB CAPI + Next.js setup 2026 — full data flow for leads, fbc/fbp extraction
- Watsspace: `fbc`/`fbp` parameters — confirmed NOT hashed, format reference
- AdAmigo.ai: Standardize conversion data for Meta — hashing normalization rules
- Brad Farleigh 2025: `event_id` generation and deduplication — timestamp+random format confirmed valid
- Analyzify, Seresa, Trackbee, CustomerLabs — deduplication patterns and EMQ scoring confirmed across multiple sources
- DEV Community: Facebook Pixel App Directory + Plain English: Next.js 14 App Router guides — community confirmation of official patterns

---

*Research completed: 2026-03-29*
*Ready for roadmap: yes*
