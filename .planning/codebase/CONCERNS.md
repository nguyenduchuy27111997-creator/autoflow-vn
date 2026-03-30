# Codebase Concerns

**Analysis Date:** 2026-03-29

## Tech Debt

**In-Memory Rate Limiting — Memory Leak Risk:**
- Issue: Both `/api/audit` and `/api/tai-lieu` implement in-memory rate limiting using `Map<string, { count: number; resetAt: number }>()` that never expires old entries. Each Map grows unbounded with new IP addresses.
- Files: `src/app/api/audit/route.ts` (lines 8, 18-33), `src/app/api/tai-lieu/route.ts` (lines 15, 25-35)
- Impact: In production, the rate limit maps will accumulate entries forever, eventually causing memory exhaustion and server crashes. The `resetAt` expiry check only prevents old entries from being checked, not removed.
- Fix approach: Implement proper cleanup by either (1) using Redis for distributed rate limiting, or (2) adding periodic garbage collection to remove expired entries from the Map, or (3) use a library like `rate-limiter-flexible` or `express-rate-limit` that handles cleanup automatically.

**Silent Webhook Failures — No Error Visibility:**
- Issue: In `/api/audit/route.ts` (lines 86-93), webhook dispatch to n8n/Zapier/Make silently fails with `.catch()` that only logs errors. If the webhook is critical for business operations (CRM sync, lead distribution), failures are invisible to monitoring.
- Files: `src/app/api/audit/route.ts` (lines 86-93)
- Impact: Audit form submissions appear successful to users but webhook never fires. Leads never reach n8n/CRM. No alerting or dead-letter queue for recovery.
- Fix approach: Implement proper error tracking (Sentry/LogRocket), add dead-letter queue for failed webhooks, or make webhook failures return error responses to client with retry guidance.

**Inconsistent Error Handling in Email Flow:**
- Issue: In `/api/tai-lieu/route.ts`, database insertion errors are logged but ignored (line 91), yet email send errors return a 500 response (lines 150-155). If DB insert fails, the lead isn't tracked but email still sends. If email fails, user sees error despite DB being saved.
- Files: `src/app/tai-lieu/route.ts` (lines 81-93, 101-156)
- Impact: Asymmetric behavior creates confusion: email failures are visible, database failures are silent. Some leads lost from analytics. Can't implement proper compensation logic.
- Fix approach: Make both operations transactional — if email fails, either retry or delete the database record, or queue both for async processing. Provide consistent error response.

**Hardcoded Resend Sender Email:**
- Issue: Email sender is hardcoded as `onboarding@resend.dev` (line 106 in `/api/tai-lieu/route.ts`), which is Resend's demo domain. Production emails will be marked as spam/phishing and damage brand trust.
- Files: `src/app/tai-lieu/route.ts` (line 106)
- Impact: All PDF delivery emails appear to come from `onboarding@resend.dev` instead of AutoFlow VN domain. Email deliverability poor, higher bounce rates.
- Fix approach: Add `RESEND_FROM_EMAIL` to environment variables and use actual AutoFlow domain (e.g., `autoflowvn.com`). Verify domain in Resend dashboard.

**No Validation on PDF Resource Keys:**
- Issue: PDF_MAP in `/api/tai-lieu/route.ts` (lines 37-42) only defines one resource `10-quy-trinh`. If frontend changes and sends a different `resource` value, it returns 400 error. No other PDFs can be added without modifying API code.
- Files: `src/app/tai-lieu/route.ts` (lines 37-42, 71-78)
- Impact: Not scalable — new lead magnets require API code changes. Frontend and backend tightly coupled. Risk of frontend sending undefined resources causing silent failures.
- Fix approach: Move PDF_MAP to database or config file. Add validation that resource exists before processing.

## Known Bugs

**Email sent even if Resend key missing:**
- Symptoms: PDF lead form shows success message but no email delivered when `RESEND_API_KEY` is not configured.
- Files: `src/app/tai-lieu/route.ts` (lines 95-99)
- Trigger: Submit lead form with missing `RESEND_API_KEY` environment variable.
- Workaround: Admin must check server logs for `RESEND_API_KEY not configured` message to realize emails aren't sending.
- Root cause: Line 98 returns `{ success: true }` when Resend is not configured, masking the error from users and analytics.

**Audit form client error handling misleading:**
- Symptoms: Audit form shows success message even if submission failed.
- Files: `src/app/audit/page.tsx` (lines 44-52)
- Trigger: Network error or API timeout when submitting form.
- Workaround: None — user sees success but data may not be recorded. Check Supabase manually.
- Root cause: Lines 51-52 set `submitted=true` even if fetch fails, with comment "webhook may retry" which assumes retry mechanism exists (it doesn't).

**Portal layout metadata blocks indexing but no auth check:**
- Symptoms: Client portal page metadata sets `robots: { index: false }` but page is not behind authentication UI.
- Files: `src/app/portal/layout.tsx` (line 5)
- Trigger: Access `/portal` route before login.
- Workaround: Middleware at `/portal/dashboard` redirects, but `/portal` itself shows login form (accessible to search engines crawl).
- Root cause: Metadata robots rule only hides from search, middleware only protects dashboard.

## Security Considerations

**Credential Exposure via Non-SSL Webhook URLs:**
- Risk: AUDIT_WEBHOOK_URL in `.env.example` shows n8n webhook pattern which often includes credentials in the URL. If webhook URL is logged, exposed in error messages, or intercepted, credentials leak to attackers.
- Files: `.env.example` (line 5), `src/app/api/audit/route.ts` (lines 4, 86)
- Current mitigation: Webhook URL is in environment variables only (not committed). But no validation that URL uses HTTPS.
- Recommendations: (1) Validate webhook URL must use HTTPS, (2) add webhook signature verification (HMAC), (3) never log full webhook URL in errors, (4) rotate webhooks regularly.

**Client-side form submission to unvalidated webhook:**
- Risk: If AUDIT_WEBHOOK_URL is compromised or misconfigured, user form data (name, phone, company, pain points) sent to attacker's webhook without user knowledge.
- Files: `src/app/api/audit/route.ts` (line 90)
- Current mitigation: Webhook URL is backend-configured, not user-controlled.
- Recommendations: (1) Validate webhook URL on each send (no typosquatting), (2) implement webhook signing (HMAC-SHA256), (3) log webhook sends for audit trail.

**Supabase Anon Key exposed in bundle:**
- Risk: `NEXT_PUBLIC_SUPABASE_ANON_KEY` is deliberately public, but abuse risk if anon key is unrestricted (can read/write all tables).
- Files: `src/lib/supabase/client.ts` (lines 5-6), `src/lib/supabase/server.ts` (lines 8-9), `src/lib/supabase/middleware.ts` (lines 8-9)
- Current mitigation: Supabase RLS policies should restrict access. Audit/PDF leads tables assume read-only operations.
- Recommendations: (1) Verify Supabase RLS policies enforce table-level access control, (2) set up separate anon vs authenticated keys, (3) monitor Supabase API usage for unusual patterns.

**No CSRF protection on form submissions:**
- Risk: Audit and PDF lead forms don't include CSRF tokens. Attacker can forge requests from different domains.
- Files: `src/app/api/audit/route.ts`, `src/app/api/tai-lieu/route.ts`
- Current mitigation: Rate limiting provides some protection, honeypot field blocks simple bots.
- Recommendations: (1) Add CSRF token to forms (Next.js middleware or custom), (2) validate referrer header strictly, (3) use SameSite cookies.

**Rate limit key derivation weak for IPv6:**
- Risk: Rate limit key uses `x-forwarded-for` header which can be spoofed by client if proxy not trusted. Also splits on "," and takes first value — doesn't handle IPv6 properly.
- Files: `src/app/api/audit/route.ts` (lines 10-15), `src/app/api/tai-lieu/route.ts` (lines 17-22)
- Current mitigation: Header-based rate limiting is standard. Honeypot and phone validation provide secondary defense.
- Recommendations: (1) Validate that x-forwarded-for comes from trusted proxy (Netlify edge), (2) use Cloudflare rate limiting or Netlify edge functions for more reliable IP detection.

**Portal login uses client-side password submission:**
- Risk: Password sent in FormData to `/api/auth/login` (if it exists) or Supabase directly via client. No indication of password transmission security.
- Files: `src/app/portal/page.tsx` (lines 19-27)
- Current mitigation: Supabase handles auth securely on backend. HTTPS enforced in production.
- Recommendations: (1) Add password strength indicator, (2) implement 2FA for portal access, (3) log login attempts for audit.

## Performance Bottlenecks

**Large page component files — slow builds:**
- Problem: Page components are very large (up to 587 lines), making builds slower and TypeScript checking slower. Examples: `tai-lieu/bat-dong-san/page.tsx` (587 lines), `tai-lieu/giao-duc/page.tsx` (561 lines), `tai-lieu/e-commerce/page.tsx` (538 lines).
- Files: `src/app/tai-lieu/**/*.tsx`, `src/app/quiz/page.tsx` (502 lines), `src/app/audit/page.tsx` (500 lines)
- Cause: Heavy use of inline JSX with hardcoded content, repeated component patterns not extracted.
- Improvement path: (1) Extract reusable components from page files into `src/components/`, (2) move inline data arrays (benefitsList, toolsList, etc.) to separate data files, (3) use dynamic imports for below-fold content.

**No image optimization:**
- Problem: Public image files likely served unoptimized. No `<Image>` components detected; likely using `<img>` tags.
- Files: Unknown (static images in `/public`)
- Cause: Large image files increase LCP (Largest Contentful Paint).
- Improvement path: (1) Use Next.js `<Image>` component for automatic optimization, (2) provide WebP versions, (3) add lazy loading to below-fold images.

**Rate limit maps grow with traffic:**
- Problem: In-memory rate limit maps never cleaned up, causing memory usage to grow linearly with number of unique IPs.
- Files: `src/app/api/audit/route.ts`, `src/app/api/tai-lieu/route.ts`
- Cause: `resetAt` timestamp only prevents stale entries from being checked, not removed from Map.
- Improvement path: Add periodic cleanup (e.g., every 5 min) to delete entries with `resetAt < now()`.

## Fragile Areas

**Portal Dashboard Component:**
- Files: `src/app/portal/dashboard/PortalDashboard.tsx`
- Why fragile: Not reviewed in detail but portal features are typically sensitive. Single dashboard component likely has complex state management.
- Safe modification: Read component fully before making changes. Ensure auth middleware is working before modifying dashboard. Test with multiple user roles if role-based access exists.
- Test coverage: Unknown — no test files detected in repo.

**Form state management in large forms:**
- Files: `src/app/audit/page.tsx` (multi-step form), `src/app/quiz/page.tsx` (quiz logic with timers)
- Why fragile: Complex local state with manual state updates (`setForm`, `setAnswers`). Multi-step navigation logic can break if step numbers change. Timer-based auto-advance in quiz can cause race conditions.
- Safe modification: Test multi-step flow thoroughly. Verify each step transition. Check timer cleanup on unmount.
- Test coverage: No unit tests detected for form state.

**Supabase middleware session handling:**
- Files: `src/lib/supabase/middleware.ts`
- Why fragile: Cookie management is complex; try-catch swallows all errors (line 20). If cookies fail to set, no error logged. Session may not persist correctly.
- Safe modification: Add debug logging around cookie operations. Test portal login/logout flow carefully.
- Test coverage: No tests detected.

## Scaling Limits

**In-Memory Rate Limiting:**
- Current capacity: Handles 1 IP per unique address in Map. No limit to Map size.
- Limit: With default 5 requests per hour per IP, memory grows ~10KB per 100 unique IPs per hour (rough estimate).
- Scaling path: Switch to Redis-backed rate limiting (e.g., `ioredis` + `rate-limiter-flexible`) or use Cloudflare Workers for edge-based rate limiting.

**Single Webhook for All Audit Submissions:**
- Current capacity: One AUDIT_WEBHOOK_URL handles all submissions.
- Limit: If webhook is slow (>5s) or down, form responses hang. No queue, no retry.
- Scaling path: Implement background job queue (Bull, AWS SQS) to decouple form submission from webhook delivery.

**Supabase Anon Key Access:**
- Current capacity: All client requests use same anon key with same permissions.
- Limit: Cannot differentiate between users or rate-limit per user without per-user RLS policies.
- Scaling path: Implement custom auth tokens or Supabase RLS policies that scope access per user.

## Dependencies at Risk

**Resend API Dependency — No Fallback:**
- Risk: All PDF delivery emails depend on Resend. If Resend is down or API key is invalid, leads never get PDFs.
- Impact: Lead magnet feature breaks completely. No retry mechanism.
- Migration plan: (1) Add backup email provider (SendGrid, AWS SES), (2) implement queue with retries, (3) fallback to direct download link if email fails.

**Supabase Single Project:**
- Risk: All auth, data storage, and session management via one Supabase project. Project outage = site features down.
- Impact: Portal login fails, lead data not saved, audit webhooks don't complete.
- Migration plan: (1) Set up DR (read replica), (2) implement client-side retry logic, (3) cache auth state locally.

**Next.js 16.2.1 Rapid Iteration:**
- Risk: Next.js 16.x is still in active development. Minor versions may introduce breaking changes.
- Impact: Unexpected breaking changes in future patches.
- Migration plan: (1) Pin to specific version or v-range, (2) test thoroughly before upgrading, (3) monitor Next.js release notes.

## Missing Critical Features

**No Error Tracking / Monitoring:**
- Problem: No Sentry, LogRocket, or similar. Errors in production only visible via console.logs that admins must check manually.
- Blocks: Can't detect silent failures in webhook delivery, Resend outages, or Supabase errors until users report.
- Recommendation: Add Sentry for error tracking, set up alerts for high error rates.

**No Analytics for Form Conversions:**
- Problem: Audit and PDF lead submissions tracked in Supabase but no funnel analytics or GA events for tracking conversion metrics.
- Blocks: Can't measure form performance, drop-off rates, or ROI of lead magnets.
- Recommendation: Add GA4 events to form submissions, set up conversion funnels in GA4.

**No Automated Backup for Supabase:**
- Problem: Lead data stored in Supabase with no visible backup strategy. If Supabase data is deleted or corrupted, no recovery.
- Blocks: Risk of permanent data loss.
- Recommendation: Enable Supabase automated backups, set up manual backups to S3 weekly.

## Test Coverage Gaps

**No Unit Tests for API Routes:**
- What's not tested: `/api/audit` and `/api/tai-lieu` route logic, rate limiting logic, error handling.
- Files: `src/app/api/audit/route.ts`, `src/app/api/tai-lieu/route.ts`
- Risk: Rate limit bugs, validation bugs, webhook failures go undetected. Refactoring rate limiting is risky.
- Priority: High — API routes handle critical business logic.

**No Integration Tests for Supabase:**
- What's not tested: Supabase insert/read operations, authentication flow, session persistence.
- Files: `src/lib/supabase/**`, `src/app/portal/**`
- Risk: Portal login issues or data loss bugs only caught by manual testing.
- Priority: High — portal is revenue-critical.

**No E2E Tests for User Flows:**
- What's not tested: End-to-end audit form submission → webhook delivery, PDF lead form → email delivery.
- Files: All form pages + API routes
- Risk: Silent failures in critical business flows not caught.
- Priority: High — these are key conversion paths.

**No Tests for Quiz State Machine:**
- What's not tested: Quiz progression, answer validation, timer-based auto-advance, lead capture screen.
- Files: `src/app/quiz/page.tsx`
- Risk: Quiz state race conditions or flow breaks only caught by manual testing.
- Priority: Medium — quiz is engagement tool, not revenue-critical.

**No Lighthouse/Performance Tests:**
- What's not tested: Core Web Vitals, image optimization, bundle size.
- Files: All pages
- Risk: Performance regressions go undetected until users complain.
- Priority: Medium — impacts SEO and conversion rates.

---

*Concerns audit: 2026-03-29*
