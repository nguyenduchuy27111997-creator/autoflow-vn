# Feature Research

**Domain:** Facebook Pixel + Conversions API — Lead-gen website tracking
**Researched:** 2026-03-29
**Confidence:** HIGH (official Meta developer docs + verified across multiple current sources)

---

## Context: Conversion Points Being Tracked

This milestone adds FB tracking to an existing lead-gen website with three conversion points:

| Conversion Point | GA4 Event Already Firing | FB Standard Event to Map |
|-----------------|--------------------------|--------------------------|
| Quiz completion | `quiz_completed` | `Lead` |
| Audit form submission | `generate_lead` | `Lead` |
| PDF download | (implicit in `cta_click`) | `Lead` or `ViewContent` |

Existing GA4 events also in scope: `page_view`, `quiz_start`, `cta_click`, `blog_read`.

---

## Standard Events: Complete Reference

### PageView

**Fires:** Every page load automatically via base Pixel code.
**Parameters:** None required. The Pixel fires this implicitly — do not call `fbq('track', 'PageView')` manually unless the base init code is absent.
**CAPI:** Redundant for standard PageView — not worth the server overhead unless the site is SPA (client routing) where the base Pixel may not auto-fire on navigation.

```js
// Automatic via base init — no manual call needed
fbq('init', 'PIXEL_ID');
fbq('track', 'PageView');
```

---

### ViewContent

**Fires:** When a user views a high-value page (landing page, offer page, blog post with CTA).
**Use case here:** Blog posts (`blog_read`), service pages, quiz landing page before start.

**Parameters:**

| Parameter | Type | Status | Value for this site |
|-----------|------|--------|---------------------|
| `content_name` | String | Recommended | Page title or slug |
| `content_category` | String | Recommended | "blog", "service", "quiz-landing" |
| `content_type` | String | Recommended | "article" or "website" |
| `value` | Float | Optional | Estimated CPL for page |
| `currency` | String | Required if value set | "VND" or "USD" |

```js
fbq('track', 'ViewContent', {
  content_name: 'Cach tu dong hoa quy trinh ban hang',
  content_category: 'blog',
  content_type: 'article'
});
```

**CAPI:** Not required. Page views are low-stakes; missing a few due to ad blockers does not materially affect optimization. Client-side only is acceptable.

---

### Lead

**Fires:** On all three conversion points — quiz completion, audit form submission, PDF download.

**Parameters:**

| Parameter | Type | Status | Value for this site |
|-----------|------|--------|---------------------|
| `value` | Float | Recommended | Estimated lead value (e.g., 500000 VND for quiz lead) |
| `currency` | String | Recommended | "VND" |
| `content_name` | String | Recommended | "quiz", "audit-form", "pdf-download" |
| `content_category` | String | Recommended | "lead-gen" |
| `event_id` | String | REQUIRED for CAPI | Unique ID — same value sent from browser + server |

**Differentiate the three conversion types via `content_name`:**

```js
// Quiz completion
fbq('track', 'Lead', {
  content_name: 'quiz',
  content_category: 'lead-gen',
  value: 500000,
  currency: 'VND',
  event_id: generateEventId() // store this, send same ID to CAPI
});

// Audit form submission
fbq('track', 'Lead', {
  content_name: 'audit-form',
  content_category: 'lead-gen',
  value: 800000,
  currency: 'VND',
  event_id: generateEventId()
});

// PDF download
fbq('track', 'Lead', {
  content_name: 'pdf-download',
  content_category: 'lead-gen',
  value: 200000,
  currency: 'VND',
  event_id: generateEventId()
});
```

**CAPI:** REQUIRED for quiz completion and audit form. These are the primary optimization events — missing even 20–30% due to ad blockers or iOS 14+ restrictions directly degrades Meta's algorithm learning.

---

### Custom Events (Funnel Visibility Without Over-Engineering)

Use custom events sparingly — only for signals Meta's standard events can't express.

| Custom Event | Fires When | Why Not a Standard Event | FB Use |
|--------------|-----------|--------------------------|--------|
| `QuizStart` | User begins first quiz question | No `InitiateCheckout` equivalent for quizzes | Funnel drop-off audience; LOFunnel retargeting |
| `QuizProgress` | User passes 50% of questions | No mid-funnel standard event | Optional; adds noise, skip unless retargeting quiz abandoners |
| `CTAClick` | Any primary CTA is clicked | `Contact` event is for contact forms specifically | Mid-funnel engagement signal for Lookalike seed |

```js
// Quiz start
fbq('trackCustom', 'QuizStart', {
  quiz_name: 'automation-readiness',
  content_category: 'quiz'
});
```

**Do not fire custom events for:** blog reads (too broad, no action), page scrolls, or hover events. These generate noise without optimization signal.

---

## CAPI: Which Events Need Server-Side

### Decision Rule

| Event | CAPI Required? | Rationale |
|-------|---------------|-----------|
| `PageView` | No | Low signal value; server overhead not justified |
| `ViewContent` (blog/service pages) | No | Engagement signal only; not used for bid optimization |
| `Lead` (quiz completion) | YES | Primary conversion — every missed event degrades algorithm |
| `Lead` (audit form) | YES | Highest-value conversion — server-side ensures 100% capture |
| `Lead` (PDF download) | YES | Volume event for Lookalike audience building |
| `QuizStart` | No | Top-funnel signal; browser-only acceptable |
| `CTAClick` | No | Engagement only; not a conversion event |

### CAPI Architecture

The server sends the same event after the browser fires it. Deduplication prevents double-counting.

**Required server-side parameters:**

| Parameter | Type | Required | Notes |
|-----------|------|----------|-------|
| `event_name` | String | YES | Must match browser event name exactly: "Lead" |
| `event_time` | Unix timestamp | YES | Server time when event occurred |
| `event_id` | String | YES | Same unique ID sent by browser Pixel |
| `event_source_url` | String | YES | Full URL of page where event occurred; must match verified domain |
| `action_source` | String | YES | Always "website" for web events |
| `user_data.em` | String (SHA-256) | Highly recommended | Hashed email — primary matching signal |
| `user_data.ph` | String (SHA-256) | Recommended | Hashed phone in E.164 format |
| `user_data.fbc` | String | Recommended | `_fbc` cookie value (FB click ID) |
| `user_data.fbp` | String | Recommended | `_fbp` cookie value (FB browser ID) |
| `user_data.client_ip_address` | String | Recommended | Server-captured IP address |
| `user_data.client_user_agent` | String | Recommended | Browser User-Agent from request headers |

**Hashing rules (CRITICAL — violation is a privacy policy breach):**
- Email: lowercase, trim whitespace, then SHA-256
- Phone: strip all non-numeric chars, format as E.164 (+84xxxxxxxxx for Vietnam), then SHA-256
- Never send PII in plaintext

### event_id Deduplication Pattern

```js
// Browser (client-side)
const eventId = `lead_quiz_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;
fbq('track', 'Lead', {
  content_name: 'quiz',
  event_id: eventId,
  value: 500000,
  currency: 'VND'
});

// Immediately POST to your server endpoint with same eventId
await fetch('/api/track', {
  method: 'POST',
  body: JSON.stringify({ eventId, eventName: 'Lead', contentName: 'quiz', email: userEmail })
});

// Server then sends to CAPI with the same eventId
// Meta receives both, matches by event_id, counts only once
```

---

## Event Match Quality (EMQ)

Meta scores each event 0–10 (Poor / OK / Good / Great). Target: 6+ minimum, 8+ for optimal optimization.

**EMQ improvement levers, ranked by impact:**

| Signal | EMQ Impact | Notes |
|--------|-----------|-------|
| Hashed email (`em`) | HIGH | Single best identifier; always send for form submissions |
| `fbc` click ID | HIGH | Captures users who clicked a Meta ad; read from `_fbc` cookie |
| `fbp` browser ID | MEDIUM | Read from `_fbp` cookie; set automatically by base Pixel |
| Hashed phone | MEDIUM | Vietnam market: E.164 format (+84...) |
| `client_ip_address` | MEDIUM | Server captures from request |
| `client_user_agent` | LOW-MEDIUM | Browser UA from request headers |
| External ID | LOW | Internal user/session ID; useful for CRM correlation later |

**For quiz completion:** email is collected at quiz end — always send hashed `em` in CAPI.
**For PDF download:** email collected at gate — always send hashed `em`.
**For audit form:** email + phone collected — send both hashed.

---

## Custom Audience Strategies

The three conversion events unlock specific audience building capabilities in Ads Manager:

### Retargeting Audiences (Website Custom Audiences)

| Audience | Source Event | Window | Use |
|----------|-------------|--------|-----|
| Quiz starters who didn't complete | `QuizStart` MINUS `Lead (quiz)` | 30 days | Re-engage with "See your results" ad |
| All Lead events (any conversion) | `Lead` | 180 days | Exclude from cold prospecting |
| Blog readers | `ViewContent` (category=blog) | 60 days | Middle-funnel nurture |
| High-value audit form leads | `Lead` (content_name=audit-form) | 30 days | Cross-sell / upsell campaigns |
| CTA clickers who didn't convert | `CTAClick` MINUS `Lead` | 14 days | Urgency / offer ads |

### Lookalike Audiences

| Seed Audience | Lookalike Purpose | Notes |
|---------------|-------------------|-------|
| `Lead (audit-form)` — all time | Find highest-intent lookalikes | Best quality seed; use for cold prospecting |
| `Lead (quiz)` — all time | Broader awareness lookalike | Higher volume seed for scale |
| `Lead (pdf-download)` — last 180d | Content-engaged lookalike | Top-funnel content ads |

**Minimum seed size:** 100 users on Facebook. Quiz leads accumulate fastest — start Lookalike campaigns after first 100 quiz completions are logged.

---

## Feature Landscape

### Table Stakes (Must Have for FB Tracking to Work)

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Base Pixel init on all pages | Without it, no events fire at all | LOW | Single snippet in `<head>`; use Next.js Script component |
| `PageView` auto-fire | Meta Ads Manager baseline; attribution requires it | LOW | Fires automatically after fbq('init', ...) |
| `Lead` event on all 3 conversion points | Primary optimization signal for Meta campaigns | LOW-MEDIUM | Must fire on quiz completion, audit submit, PDF gate |
| `event_id` generation and storage | Required for CAPI deduplication | MEDIUM | Generate on client, pass to server endpoint |
| Verified domain in Meta Business Manager | CAPI events rejected without domain verification | LOW | One-time setup; add DNS TXT record or meta tag |
| CAPI server endpoint for Lead events | Recover events blocked by ad blockers / iOS | MEDIUM | Server route calls Meta Graph API `/events` |
| Hashed user data in CAPI | Improves EMQ score; required for good optimization | MEDIUM | SHA-256 hashing of email/phone before send |
| Cookie capture of `_fbc` and `_fbp` | Required for accurate click attribution | LOW | Read from document.cookie; pass to CAPI |

### Differentiators (Better Than Minimum Setup)

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Per-conversion-type `value` parameter | Enables Value Optimization bidding in Meta — prioritizes high-value leads | LOW | Assign different VND values to quiz vs audit vs pdf |
| `QuizStart` custom event | Enables retargeting quiz abandoners; audience Meta can't build without it | LOW | Fire on quiz first question render |
| EMQ monitoring in Events Manager | Catch degraded matching before it hurts campaigns | LOW | Check weekly in Meta Events Manager |
| GTM Server-Side Container for CAPI | Cleaner than direct server calls; easier to maintain | HIGH | Overkill for this scale — defer unless team has GTM SS setup |
| Offline conversion upload for qualified leads | Closes the loop from initial lead to sales outcome | HIGH | Requires CRM integration; future consideration |

### Anti-Features (Avoid These)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Tracking every micro-interaction (scroll, hover, time-on-page) | "More data is better" | Creates noise; Meta's algorithm optimizes toward frequent events and will chase scroll events rather than leads | Track only the 3 conversion events + `QuizStart` |
| Duplicate `Lead` + `CompleteRegistration` on same action | "Cover all event types" | Double-counting in Ads Manager; confuses campaign attribution | Pick one standard event per conversion point — use `Lead` throughout |
| Sending PII (email/phone) unhashed | Easier to implement | Privacy policy violation; Meta will reject or ban the Pixel | Always SHA-256 hash before sending to CAPI |
| Custom events for every GA4 event | "Mirror GA4 in FB" | Meta's algorithm needs concentrated signal on few high-value events | Only custom events not covered by standard events |
| Server-side only (no browser Pixel) | "More private" | Loses `fbc` and `fbp` cookie values; destroys attribution for ad click traffic | Always run browser Pixel alongside CAPI; the combination is stronger than either alone |

---

## Feature Dependencies

```
CAPI Lead Event
    └──requires──> Base Pixel firing (to capture _fbc, _fbp cookies)
    └──requires──> event_id generated on client
    └──requires──> Verified domain in Meta Business Manager
    └──requires──> Server API endpoint (POST to Meta Graph API /events)

High EMQ Score
    └──requires──> Hashed email in user_data
    └──requires──> _fbc cookie captured at form submission
    └──requires──> _fbp cookie captured at form submission

Quiz Abandoner Retargeting Audience
    └──requires──> QuizStart custom event
    └──requires──> Lead event on quiz completion
    └──requires──> Both events use same Pixel ID

Value-Based Lookalike Audience
    └──requires──> value parameter on Lead events
    └──requires──> currency parameter on Lead events
    └──requires──> 100+ Lead events with value in last 180 days

Deduplication (no double-counting)
    └──requires──> Matching event_id on browser AND server event
    └──requires──> event_name identical on both sides ("Lead" not "lead")
```

### Dependency Notes

- **Domain verification is a blocker:** CAPI events sent to an unverified domain are rejected silently. Must be completed before any server-side testing.
- **_fbc cookie requires active ad click:** `_fbc` only exists if the user arrived via a Meta ad with fbclid parameter. Test with organic traffic — `_fbc` will be absent, and that is correct behavior.
- **event_id must be truly unique per event instance:** Using a static ID (e.g., hardcoded string) breaks deduplication entirely. Use timestamp + random string combination.
- **email availability varies by conversion point:** PDF downloads and quiz completions collect email — always pass it. Audit form collects email + phone — pass both. Do not attempt to retrieve email from browser storage for CAPI if not explicitly provided by the user.

---

## MVP Definition

### Launch With (v1)

Minimum required for Meta ad campaigns to function correctly.

- [ ] **Base Pixel on all pages** — init + PageView; no campaign attribution works without this
- [ ] **Lead event on quiz completion** — highest-volume conversion; primary signal for algorithm
- [ ] **Lead event on audit form submission** — highest-value conversion; required for optimization
- [ ] **Lead event on PDF download** — volume signal for Lookalike seed building
- [ ] **`event_id` generation** — prevents double-counting when CAPI is added
- [ ] **Domain verification** — unblock CAPI; one-time configuration in Meta Business Manager
- [ ] **CAPI server endpoint for Lead events** — server-side recovery for blocked browser events

### Add After Validation (v1.x)

Add once base tracking is confirmed working in Events Manager (EMQ visible, events flowing).

- [ ] **Hashed email + phone in CAPI user_data** — improves EMQ from "OK" to "Good/Great"
- [ ] **_fbc and _fbp cookie capture** — improves ad click attribution accuracy
- [ ] **`value` parameter on Lead events** — unlocks Value Optimization bidding in Meta
- [ ] **`QuizStart` custom event** — enables quiz abandoner retargeting audience

### Future Consideration (v2+)

Defer until campaign performance data justifies additional complexity.

- [ ] **Offline conversion upload** — closes loop from lead to qualified/closed deal; requires CRM integration
- [ ] **GTM Server-Side container** — cleaner CAPI architecture if team expands tracking across multiple tools
- [ ] **Catalog-based dynamic ads** — not relevant for services lead-gen; skip entirely

---

## Feature Prioritization Matrix

| Feature | Business Value | Implementation Cost | Priority |
|---------|---------------|---------------------|----------|
| Base Pixel (all pages) | HIGH | LOW | P1 |
| Lead event — quiz completion | HIGH | LOW | P1 |
| Lead event — audit form | HIGH | LOW | P1 |
| Lead event — PDF download | HIGH | LOW | P1 |
| event_id generation | HIGH | LOW | P1 |
| Domain verification | HIGH | LOW (config only) | P1 |
| CAPI server endpoint | HIGH | MEDIUM | P1 |
| Hashed user data in CAPI | HIGH | MEDIUM | P1 |
| _fbc / _fbp cookie capture | MEDIUM | LOW | P2 |
| value parameter on Lead events | MEDIUM | LOW | P2 |
| QuizStart custom event | MEDIUM | LOW | P2 |
| CTAClick custom event | LOW | LOW | P3 |
| Offline conversion upload | HIGH | HIGH | P3 |

**Priority key:**
- P1: Required for campaigns to function; blocking
- P2: Measurable improvement to optimization quality
- P3: Nice to have; defer until v1 is stable

---

## Ads Manager Validation Checklist

Before running paid campaigns, verify in Meta Events Manager:

- [ ] `PageView` fires on every page load (check "Test Events" tab)
- [ ] `Lead` fires on all 3 conversion points with correct `content_name`
- [ ] Browser Pixel event and CAPI event appear as deduplicated (not double-counted) in "Aggregated Events Measurement"
- [ ] `QuizStart` appears as a custom event
- [ ] EMQ for `Lead` events shows "Good" or "Great" (6+/10)
- [ ] Event Source URL matches verified domain
- [ ] No PII visible in plaintext in Events Manager payload inspector

---

## Sources

- [Meta Pixel Reference — developers.facebook.com](https://developers.facebook.com/docs/meta-pixel/reference) — HIGH confidence, official docs
- [Conversions API Server Event Parameters — developers.facebook.com](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event/) — HIGH confidence, official docs
- [Deduplication: Pixel and Conversions API — developers.facebook.com](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/) — HIGH confidence, official docs
- [Specifications for Meta Pixel Standard Events — facebook.com/business](https://www.facebook.com/business/help/402791146561655) — HIGH confidence, official help center
- [Advanced Matching — developers.facebook.com](https://developers.facebook.com/docs/meta-pixel/advanced/advanced-matching/) — HIGH confidence, official docs
- [Advanced Facebook Pixel Setup 2025 Guide — advertstar.net](https://advertstar.net/2025/11/03/advanced-facebook-pixel-setup-a-complete-2025-guide-to-events-capi-and-optimization/) — MEDIUM confidence, practitioner guide verified against official docs
- [Event Match Quality (EMQ) — customerlabs.com](https://www.customerlabs.com/blog/improve-your-event-match-quality-from-ok-to-great/) — MEDIUM confidence, EMQ scoring detail
- [Conversions API vs Meta Pixel 2026 — conversios.io](https://www.conversios.io/blog/facebook-conversions-api-vs-facebook-pixel/) — MEDIUM confidence, comparative analysis

---

*Feature research for: Facebook Pixel + Conversions API — lead-gen website (quiz, audit form, PDF download)*
*Researched: 2026-03-29*
