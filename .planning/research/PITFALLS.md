# Pitfalls Research

**Domain:** Facebook Pixel + Conversions API (CAPI) on Next.js website
**Researched:** 2026-03-29
**Confidence:** HIGH (Meta official docs + community post-mortems + enforcement actions), MEDIUM (Next.js-specific patterns from community)

---

## Critical Pitfalls

### Pitfall 1: Deduplication Broken Due to Missing or Mismatched event_id

**What goes wrong:**
Both the browser Pixel and the server-side CAPI event fire for the same user action (e.g., Lead or Purchase). Without a shared `event_id`, Meta cannot recognize them as the same event and counts both. Reported conversion volume inflates by 2x. ROAS appears higher than reality. Budget decisions are made on fabricated data. Meta's own audits show 70% of stores running Pixel + CAPI simultaneously have broken or incomplete deduplication configurations — and it fails silently.

**Why it happens:**
Developers add Pixel to the frontend and CAPI to the API route independently. The `event_id` requirement is documented but easy to skip when prototyping. The Pixel fires automatically; the CAPI event is written separately. No shared identifier is threaded between them. Additionally, `event_name` is case-sensitive — "purchase" and "Purchase" are treated as different events, preventing deduplication even when `event_id` matches.

**How to avoid:**
- Generate a single UUID (e.g., `crypto.randomUUID()`) at the moment the event is triggered on the client.
- Pass this `event_id` to both `fbq('track', 'Lead', {}, { eventID: uuid })` (client) and the CAPI payload `{ event_id: uuid }` (server).
- Standardize event names to match Meta's Standard Events list exactly, including case. Do not invent custom spellings.
- Log both the client-side `eventID` and the server-side `event_id` during QA; confirm they are identical for the same user action.
- Meta deduplicates within a 48-hour window when `event_name` AND `event_id` both match.

**Warning signs:**
- Events Manager shows both a "Browser" and "Server" source for the same event with counts that nearly double when both are running.
- `event_id` field is absent from CAPI payloads in server logs.
- Reported conversions are approximately 2x what the business expects.

**Phase to address:** Implementation phase — define the `event_id` threading pattern before writing any tracking code. Make it a code review requirement.

---

### Pitfall 2: CAPI Access Token Exposed in Client-Side Code

**What goes wrong:**
The CAPI System User Access Token is placed in a client-accessible environment variable (e.g., `NEXT_PUBLIC_FB_ACCESS_TOKEN`). It becomes visible in the JavaScript bundle, browser DevTools, and any decompiled client code. Anyone who reads it gains full access to the Facebook ad account: can send arbitrary conversion events, pollute attribution data, modify datasets, and drain ad budget by injecting fake high-value conversions.

**Why it happens:**
Developers prefix secrets with `NEXT_PUBLIC_` out of habit (needed for client-side values), without realizing the CAPI token should only ever be used in a server-side context. It "works" immediately — the mistake is invisible until exploited.

**How to avoid:**
- Store the CAPI token as a server-only environment variable: `FB_CAPI_ACCESS_TOKEN` (no `NEXT_PUBLIC_` prefix).
- All CAPI calls must be made from Next.js Route Handlers (`app/api/`) or Server Actions — never from client components.
- In Vercel: set the environment variable with "Server" scope only. Do not enable "Browser" exposure.
- Audit: `grep -r "NEXT_PUBLIC_FB" src/` should return zero matches for anything CAPI-related.

**Warning signs:**
- `NEXT_PUBLIC_` prefix on any variable named `FB_ACCESS_TOKEN`, `FB_CAPI_TOKEN`, or similar.
- CAPI `fetch()` calls written inside `.tsx` client components or any file with `'use client'`.
- The token is visible when running `JSON.stringify(process.env)` from a client component (it should not be).

**Phase to address:** Initial setup phase — define server-only environment variable naming conventions before writing the first API route.

---

### Pitfall 3: Facebook Pixel Fires Before User Consent (GDPR/CCPA Violation)

**What goes wrong:**
The Pixel script loads in `<head>` or via `next/script` without a consent gate. On page load — before any consent banner is displayed or accepted — Pixel fires a `PageView` event and sets `_fbp`/`_fbc` cookies. This is a GDPR Article 7 violation in the EU: personal data is processed without lawful basis. EU regulators have issued fines up to €15 million for exactly this pattern. Even with a cookie banner present, if the banner is "cosmetic" (does not actually block the script), it does not satisfy GDPR.

**Why it happens:**
Adding Pixel to `layout.tsx` or `_document.tsx` is the simplest implementation. Most tutorials do it this way. Consent management is treated as a secondary concern. CMP (Consent Management Platform) is installed visually but not wired to actually block script execution.

**How to avoid:**
- Conditionally render the Pixel script only after the user accepts marketing/advertising cookies.
- Use a CMP that categorizes Meta Pixel as an "Advertising" vendor requiring opt-in, and provides a JavaScript callback/event when consent is granted — then load the Pixel on that callback.
- For Vietnam-based operations: if processing data of EU citizens (GDPR applies extraterritorially), or Vietnamese personal data under Vietnam's PDPD (Decree 13/2023), consent requirements apply.
- Verify with technical testing: open an incognito window, open DevTools Network tab, confirm zero requests to `connect.facebook.net` or `facebook.com/tr` before clicking "Accept" on the banner.
- CAPI is also not exempt: sending personal data server-side for users who have not consented is still a violation. The consent signal must be respected end-to-end.

**Warning signs:**
- Pixel script added directly to `layout.tsx` without a consent wrapper.
- Network tab shows `facebook.com/tr` requests on first page load before consent interaction.
- CMP is installed but no JavaScript callback triggers Pixel initialization.
- No `data-processing-consent` or equivalent guard in the Pixel initialization code.

**Phase to address:** Consent architecture phase — must be designed before implementing any tracking. Do not add Pixel first and "add consent later."

---

### Pitfall 4: PageView Double-Firing in Next.js App Router SPA Navigation

**What goes wrong:**
The Pixel script's built-in HTML5 History API listener fires `PageView` automatically on every `history.pushState` call. In Next.js App Router, client-side navigation uses `pushState`. If a developer also wires `usePathname` + `useEffect` to call `fbq('track', 'PageView')` manually, every navigation fires PageView twice. Additionally, if `ReactPixel.init()` is called in both `layout.tsx` and a separate tracking component, the Pixel initializes twice, causing all events to double-fire regardless of navigation.

**Why it happens:**
App Router is different from Pages Router. Existing tutorials use Pages Router patterns (`router.events`). Porting these patterns to App Router without accounting for the Pixel's own listener is a common mistake. The double-fire is invisible unless inspecting network requests with browser tooling.

**How to avoid:**
- Choose one approach: either rely on the Pixel's built-in History listener (`disablePushState: false`, the default), OR manually track route changes — never both.
- Call `fbq('init', ...)` exactly once, in one place. For App Router, a single client component wrapped in `Suspense` (because of `useSearchParams`) is the correct location.
- Use `dynamic(() => import('./PixelTracker'), { ssr: false })` to avoid server-side rendering of the Pixel component, which has no effect on the server but can cause hydration mismatches.
- Disable the Pixel's built-in push state listener if doing manual tracking: pass `{ disablePushState: true }` in the Pixel init options.
- Test navigation: click between 3 routes and confirm exactly 3 PageView events in Events Manager "Test Events" tab (not 6).

**Warning signs:**
- Network tab shows two consecutive `facebook.com/tr?ev=PageView` requests on each client-side navigation.
- Pixel `init()` called in multiple files (e.g., both `layout.tsx` and `PixelTracker.tsx`).
- PageView count in Events Manager is approximately double actual page sessions.

**Phase to address:** Implementation phase — audit for double-init before connecting CAPI. Fix the client-side tracking first, then layer server-side events.

---

### Pitfall 5: PII Sent Unhashed or Incorrectly Normalized to CAPI

**What goes wrong:**
Meta requires all Personally Identifiable Information (PII) sent via CAPI to be SHA-256 hashed before transmission. Sending raw email addresses or phone numbers is a privacy violation and may trigger Meta's data quality warnings. More subtly: hashing `"User@Email.com"` instead of `"user@email.com"` (lowercase, trimmed) produces a different hash, which does not match Meta's internal hashed copy of the user's email — destroying match quality. Hashing `"(555) 123-4567"` instead of `"15551234567"` (E.164 format, digits only) similarly fails to match.

**Why it happens:**
Developers know to hash but skip normalization. The SHA-256 output is valid — it just does not match Meta's stored hash for the same user. There is no error; Event Match Quality silently degrades. Fields like `client_ip_address`, `client_user_agent`, `fbc`, and `fbp` must NOT be hashed (Meta uses them raw) — but this is non-obvious and some developers hash everything.

**How to avoid:**
- Before hashing: lowercase emails, trim whitespace, format phone numbers as E.164 (country code + digits, no spaces/dashes/parentheses: `15551234567` for a US number).
- Hash with SHA-256: `crypto.createHash('sha256').update(normalized).digest('hex')` (Node.js).
- Do NOT hash: `client_ip_address`, `client_user_agent`, `fbc`, `fbp`, `external_id` (unless specified).
- Use Meta's [Payload Helper](https://developers.facebook.com/docs/marketing-api/conversions-api/payload-helper) to validate hashing before deploying.
- Write a dedicated `hashUserData(userData)` utility function with normalization built in. Test it with known email → expected hash pairs.

**Warning signs:**
- Event Match Quality score below 6.0 despite sending email and phone fields.
- Raw email addresses visible in CAPI request logs (should always be 64-character hex strings).
- Phone numbers in CAPI payloads contain spaces, dashes, or parentheses.

**Phase to address:** Implementation phase — write and test the `hashUserData` utility before integrating it into any event payload.

---

### Pitfall 6: Low Event Match Quality (EMQ) From Sparse User Data

**What goes wrong:**
The CAPI payload sends only `event_name`, `event_time`, and `event_source_url`. No user identifiers are included. Meta cannot match the event to a user in its system. Event Match Quality (EMQ) score is 0-3 ("Poor"). Conversions go unattributed. Retargeting audiences are empty. The CAPI investment delivers no improvement over Pixel alone, which is the opposite of its purpose.

**Why it happens:**
Including user data requires collecting it (email from form fills, phone from checkout), which requires building a data pipeline from user interactions to the CAPI payload. This feels like extra work after the basic event fires. The Pixel fires with a valid event; the developer assumes CAPI is "working."

**How to avoid:**
- Identify the minimum viable user data for each event: for a `Lead` event (form submission), you likely have email, first name, last name — send all three (hashed).
- Include `fbc` (from `_fbc` cookie, set when user clicks a Facebook ad) and `fbp` (from `_fbp` cookie, always set by Pixel) — these are the two highest-impact identifiers for attribution.
- Include `client_ip_address` and `client_user_agent` from the server-side request context (available in Next.js Route Handlers via request headers).
- Target EMQ score 7+ for meaningful attribution improvement; 9+ for maximum ROAS impact.
- An EMQ improvement from 8.6 to 9.3 has been documented to reduce CPA by 18% and increase ROAS by 22%.

**Warning signs:**
- EMQ score below 6.0 in Events Manager > Datasets > Event Match Quality.
- CAPI payloads have empty or missing `user_data` objects.
- `_fbc` and `_fbp` cookies are not being read and forwarded to the CAPI payload.

**Phase to address:** Implementation phase — design the `user_data` collection and forwarding strategy before writing CAPI events. For server-side events, plan how cookies and request metadata flow from client to server.

---

### Pitfall 7: _fbc and _fbp Cookie Loss Breaking Attribution

**What goes wrong:**
`_fbc` (click ID cookie, set when a user arrives via a Facebook ad link containing `fbclid`) and `_fbp` (browser ID cookie, set by the Pixel on first visit) are the primary identifiers linking CAPI events to Meta users. Safari's ITP (Intelligent Tracking Prevention) deletes `_fbc` after 24 hours if set by a tracking URL, and deletes `_fbp` after 7 days. Many ad blockers strip `fbclid` from URLs before the page loads, preventing `_fbc` from ever being created. In Next.js SPA navigation, the `_fbc` cookie may not be set on client-navigated pages that were not the landing page.

**Why it happens:**
Cookie behavior differences across browsers are not obvious during development (which typically uses Chrome). Testing is done on the developer's own browser where cookies persist. Safari and Firefox users (a significant share of mobile traffic) have degraded tracking without any error signal.

**How to avoid:**
- Read `_fbc` and `_fbp` from `document.cookie` on the client at event-fire time and pass them to the API route for CAPI forwarding — do not rely on cookies being present server-side (they may have expired).
- Store `fbclid` from the URL query parameter in `localStorage` or a first-party cookie with a longer TTL when the user lands from a Facebook ad. This enables reconstructing `_fbc` for subsequent events.
- For the server-side Route Handler, extract cookies from the incoming request headers (via `cookies()` in Next.js 15+) as a fallback.
- Accept that some percentage of events will lack `_fbc` (users who did not come from a Facebook ad) — this is normal and does not break CAPI; it just reduces attribution for non-click traffic.

**Warning signs:**
- CAPI payloads consistently show `fbc: null` or missing `fbc` field even for campaign traffic.
- Meta ads attribution window shows fewer conversions than expected for Safari/iOS users.
- `_fbc` cookie disappears between page navigations in Safari.

**Phase to address:** Implementation phase — write cookie extraction utilities before integrating user data into CAPI payloads. Test on Safari explicitly.

---

### Pitfall 8: Multiple CAPI Sources Sending Duplicate Events to the Same Pixel

**What goes wrong:**
A second CAPI integration is added (e.g., a third-party CRM connector, a Shopify app, or a tag manager server-side container) without coordinating with the existing custom CAPI implementation. Both systems send `Purchase` events to the same pixel/dataset. There is no shared `event_id` between the two systems. Conversions are counted twice, but from different sources, so Meta's deduplication logic does not catch it. Attribution is corrupted.

**Why it happens:**
Marketing teams install third-party integrations independently of engineering teams. A CRM integration "also supports Facebook CAPI" and marketing enables it without knowing a custom CAPI implementation already exists. The Meta Events Manager shows the combined volume, which looks like a performance improvement.

**How to avoid:**
- Audit Events Manager > Datasets > Overview before starting implementation to see if any existing CAPI connections are active.
- Document all CAPI event sources in a single place and make it a requirement that no new CAPI source is added without engineering review.
- If a third-party integration must coexist, ensure it uses a different event dataset (pixel ID) or that its events carry `event_id` values that your custom implementation can match for deduplication.
- Meta explicitly warns: avoid configuring additional CAPI integrations that send duplicate data to the same dataset.

**Warning signs:**
- Events Manager shows two "Server" sources for the same event type.
- Event volume inexplicably doubles after a third-party integration is installed.
- `event_id` is absent or inconsistent across event sources in the raw data.

**Phase to address:** Audit phase (before any implementation) — inventory existing integrations. Then enforcement during ongoing operations.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Skip `event_id` on initial Pixel-only setup | Faster to ship | Deduplication broken when CAPI is added later; requires retrofitting all events | Never if CAPI is planned |
| Use GTM for Pixel instead of direct Next.js integration | No code deployment needed for tracking changes | GTM loads async, increases consent complexity, harder to control with React lifecycle | Acceptable if team manages GTM and no SSR events needed |
| Use `test_event_code` in production during debugging | Easier to debug | Test events pollute the dataset if left in; Meta flags it | Never in production longer than a debugging session |
| Read `_fbp`/`_fbc` server-side only (from cookies header) | Simpler code | Misses cookies that expired before the server request; degrades EMQ | Acceptable only if no Safari/iOS audience |
| Send only `PageView` via CAPI | Simple implementation | CAPI provides no attribution value without conversion events; wasted infrastructure | Never — CAPI is only valuable for conversion events |
| Skip consent gate for CAPI (server-side is "invisible") | Simpler implementation | GDPR violation; enforcement actions increasing; no valid legal basis for processing | Never |

---

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Meta Pixel + Next.js App Router | Calling `fbq('init')` inside `layout.tsx` without SSR guard | Use `dynamic(() => import('./PixelTracker'), { ssr: false })` to prevent server-side execution |
| CAPI + Next.js Route Handlers | Using `NEXT_PUBLIC_` prefix on the access token | Server-only env var (no prefix); call CAPI only from Route Handlers or Server Actions |
| Pixel + CMP (consent platform) | CMP shows banner but does not block script execution | Wire CMP consent callback to conditionally render the Pixel component or call `fbq('consent', 'grant')` |
| CAPI + GDPR consent | Assuming server-side calls bypass consent requirements | Respect consent signal server-side too; do not call CAPI for users who declined advertising cookies |
| `_fbc` cookie + SPA navigation | Expecting `_fbc` to be set on every page | Read `fbclid` from URL on landing and persist it; do not assume cookie exists on subsequent pages |
| CAPI + existing CRM integration | Installing both independently | Audit Events Manager for active CAPI sources before implementing; coordinate `event_id` generation |
| Pixel + Meta Pixel Helper extension | Using extension to verify CAPI events | Pixel Helper only validates browser-side events; use Events Manager > Test Events tab for CAPI verification |
| CAPI `user_data` hashing | Hashing IP address, user agent, `fbc`, `fbp` | Only hash PII (email, phone, name, address); leave technical identifiers raw |

---

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Synchronous CAPI call blocking Route Handler response | Form submission feels slow; user waits for Meta API round-trip | Use `after()` (Next.js 15) or fire-and-forget pattern — do not await CAPI call in the critical path | Any time Meta API latency > 200ms |
| CAPI call in Server Component render | Page SSR is blocked by Meta API | CAPI calls belong in Route Handlers or Server Actions triggered by user action, not in render | Every page load |
| Loading Pixel script without `next/script` strategy | Pixel blocks page rendering; affects LCP/FCP scores | Use `next/script` with `strategy="afterInteractive"` to defer Pixel until page is interactive | Every page with Pixel in `<head>` |
| Batching CAPI events without retry logic | Silent event loss when Meta API returns 429 or 5xx | Implement exponential backoff retry; log failed event payloads for manual re-submission | High-traffic events (>1000/batch) |

---

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| CAPI System User Token in `NEXT_PUBLIC_` env var | Full ad account access for anyone with DevTools open | Server-only env var; CI check: `grep -r "NEXT_PUBLIC_" .env` should not include FB token |
| Raw PII (email, phone) sent to CAPI without hashing | Privacy regulation violation; Meta TOS violation | Dedicated `hashUserData()` utility; automated tests verifying output is 64-char hex strings |
| Pixel fires before consent | GDPR/CCPA violation; potential fines up to 4% of global turnover | CMP blocks script execution; technical verification in incognito before each production deploy |
| CAPI call includes URL with sensitive query params as `event_source_url` | PII leakage in URL (e.g., `?email=user@example.com`) | Sanitize `event_source_url` before sending; strip query parameters that contain user data |
| Logging full CAPI payloads to application logs | Hashed PII in server logs; accessible to anyone with log access | Log only event name, event ID, and success/failure status — never the full `user_data` object |

---

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Consent banner blocks the page until interaction | Frustrating UX; high bounce rate from EU users | Use a non-blocking banner style; allow navigation before consent is given (just do not fire Pixel yet) |
| No "Reject All" button at the same level as "Accept All" | Violates GDPR dark pattern rules; regulators actively targeting | "Accept" and "Reject" must be equally prominent; no extra clicks to reject |
| Consent preference not persisted across sessions | User must re-consent every visit | Store consent choice in a first-party cookie (e.g., `_consent`) with 12-month expiry |
| Pixel fires on internal team traffic inflating metrics | Marketing makes decisions on skewed data | Filter internal IP ranges in Events Manager; add `?notrack=1` parameter support for QA |

---

## "Looks Done But Isn't" Checklist

- [ ] **Deduplication:** Both Pixel and CAPI events fire — verify `event_id` is identical in the browser request (`fbq` call) and the CAPI payload for the same user action.
- [ ] **Token security:** CAPI calls work from the server — verify the access token is NOT visible in `window.__NEXT_DATA__` or any client-side bundle (check DevTools > Sources > search for the token).
- [ ] **Consent blocking:** Cookie banner displays — verify in incognito that zero requests go to `connect.facebook.net` before the user clicks "Accept" (DevTools > Network tab).
- [ ] **PII hashing:** `user_data` is populated — verify emails are lowercase 64-char hex strings in server logs, not raw email addresses.
- [ ] **EMQ score:** Events are received in Events Manager — verify the EMQ score is 7+ (not just that events arrive, but that they match users).
- [ ] **No double PageView:** App Router navigation is tracked — verify exactly 1 `PageView` fires per route change (not 2), using Events Manager Test Events tab.
- [ ] **fbc/fbp forwarding:** CAPI events send user data — verify `fbc` and `fbp` fields are populated for users who arrived via Facebook ad campaigns.
- [ ] **CAPI non-blocking:** Form submission returns fast — verify the Route Handler responds before the CAPI API call completes (use `after()` or fire-and-forget).

---

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Deduplication broken (inflated conversions) | MEDIUM | Add `event_id` to all events; audit historical data in Events Manager; expect conversion counts to drop to accurate levels — communicate this to marketing before fixing |
| Access token exposed | HIGH | Immediately regenerate token in Meta Business Manager > System Users; audit Events Manager for unauthorized event submissions; add server-only env var; redeploy |
| GDPR consent violation discovered | HIGH | Disable Pixel immediately; conduct data audit; notify DPO; add technical consent blocking; document remediation; consult legal before re-enabling |
| Low EMQ score | LOW | Add missing `user_data` fields to CAPI payloads; fix normalization/hashing; EMQ improves within 24-48 hours of corrected events flowing |
| Double PageView from App Router | LOW | Remove duplicate `fbq('init')` call; disable built-in push state listener if using manual tracking; no historical data impact |
| Multiple CAPI sources double-counting | MEDIUM | Disable third-party CAPI integration or coordinate `event_id` generation; historical data in Events Manager cannot be corrected; affects attribution retroactively |

---

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Deduplication broken (missing event_id) | Phase 1: Core Pixel + CAPI setup | QA test: same user action shows 1 combined event in Events Manager (not Browser + Server separate counts) |
| CAPI token exposed client-side | Phase 1: Core setup and environment config | CI check: grep for token pattern in client bundles; Vercel env var scope audit |
| Pixel fires before consent | Phase 1: Consent architecture | Technical test in incognito: zero Facebook network requests before banner interaction |
| Double PageView in App Router | Phase 1: Pixel integration | Events Manager Test Events: exactly 1 PageView per navigation, confirmed across 3+ route changes |
| PII sent unhashed | Phase 1: CAPI implementation | Unit tests on `hashUserData()` utility; server log audit showing hex strings not raw emails |
| Low EMQ from sparse user data | Phase 2: Conversion event optimization | Events Manager > Datasets > EMQ score ≥ 7 for each conversion event type |
| _fbc/_fbp cookie loss | Phase 2: Attribution hardening | Test on Safari: confirm `fbc`/`fbp` fields populated in CAPI payload when arriving from a FB ad link |
| Multiple CAPI sources duplicating | Phase 0: Audit before implementation | Events Manager audit confirms no active CAPI connections before new implementation starts |
| CAPI blocking request latency | Phase 2: Performance optimization | Route Handler p95 response time <300ms even when Meta API is slow; verified with load testing |

---

## Sources

- [Meta Conversions API Deduplication — Official Docs](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/) — HIGH confidence
- [Meta Business Help: About Deduplication](https://www.facebook.com/business/help/823677331451951) — HIGH confidence
- [Meta Pixel Helper — Official Docs](https://developers.facebook.com/docs/meta-pixel/support/pixel-helper/) — HIGH confidence
- [Meta Dataset Quality API](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/) — HIGH confidence
- [About Event Match Quality — Meta Business Help](https://www.facebook.com/business/help/765081237991954) — HIGH confidence
- [Deduplication in Meta Pixel + CAPI — Analyzify](https://analyzify.com/hub/event-deduplication-for-meta-conversions) — MEDIUM confidence
- [Facebook Pixel + CAPI Deduplication Guide — Seresa](https://seresa.io/blog/marketing-pixels-tags/facebook-pixel-capi-are-both-firing) — MEDIUM confidence
- [Meta Consent Mode Explained 2025 — SecurePrivacy](https://secureprivacy.ai/blog/meta-consent-mode-explained-2025) — MEDIUM confidence
- [Facebook Pixel and GDPR — DEV Community](https://dev.to/custodiaadmin/facebook-pixel-and-gdpr-how-to-use-meta-pixel-without-violating-privacy-law-424f) — MEDIUM confidence
- [Fix Pre-Consent Cookie Loading — SecurePrivacy Support](https://support.secureprivacy.ai/article/ensuring-prior-consent-for-nonessential-cookies-gdpr-compliance/) — MEDIUM confidence
- [Meta Conversions API fbc and fbp Parameters — Watsspace](https://watsspace.com/blog/meta-conversions-api-fbc-and-fbp-parameters/) — MEDIUM confidence
- [Stop Losing Meta CAPI Conversions: Fix _fbc Cookie Expiration — EGO Digital](https://ego-digital.io/fix-fbc-cookie-expiration-meta-capi/) — MEDIUM confidence
- [How to Standardize Conversion Data for Meta — AdAmigo.ai](https://www.adamigo.ai/blog/how-to-standardize-conversion-data-for-meta-integration) — MEDIUM confidence
- [How to Improve Meta EMQ Score — Trackbee](https://www.trackbee.io/blog/how-to-improve-metas-event-match-quality-score-for-better-ad-performance-with-trackbee) — MEDIUM confidence
- [Facebook Pixel Event Tracking in NextJS App Directory — DEV Community](https://dev.to/dankedev/add-facebook-pixel-event-tracking-in-nextjs-app-directory-3ipc) — MEDIUM confidence
- [Add Facebook Pixel in Next.js 14 App Router — Plain English](https://plainenglish.io/blog/how-to-add-facebook-pixel-in-next-js-14-app-router-a-step-by-step-guide) — MEDIUM confidence
- [How to Fix Potentially Violating Personal Data Sent to Meta — Stape](https://stape.io/blog/fix-personal-data-violations-meta) — MEDIUM confidence
- [Facebook CAPI: Common Errors & FAQs — Stape](https://stape.io/helpdesk/documentation/common-errors-and-questions) — MEDIUM confidence
- [Using event_id For Proper Deduplication — Brad Farleigh](https://www.bradfarleigh.com/2025/02/facebook-pixel-signal-deduplication-using-event_id/) — MEDIUM confidence
- [Vercel Next.js with-facebook-pixel example](https://github.com/vercel/next.js/tree/canary/examples/with-facebook-pixel) — HIGH confidence

---
*Pitfalls research for: Facebook Pixel + Conversions API on Next.js website*
*Researched: 2026-03-29*
