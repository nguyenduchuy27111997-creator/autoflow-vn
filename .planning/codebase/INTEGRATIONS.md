# External Integrations

**Analysis Date:** 2026-03-29

## APIs & External Services

**Email Delivery:**
- Resend - Email sending for lead magnet PDFs
  - SDK/Client: `resend@6.9.4`
  - Auth: `RESEND_API_KEY` environment variable
  - Usage: `src/app/api/tai-lieu/route.ts` sends PDF to leads via email with branded template

**Analytics:**
- Google Analytics 4 - Website traffic and user behavior tracking
  - Implementation: Google Tag Manager script injection
  - ID Config: `NEXT_PUBLIC_GA_ID` environment variable
  - Usage: `src/app/layout.tsx` injects GA script with event tracking
  - Integration Type: Client-side via script tag

**Customer Communication:**
- Zalo Official Account (Zalo OA) - Vietnamese chat messaging widget
  - Implementation: Zalo SDK script injection
  - ID Config: `NEXT_PUBLIC_ZALO_OA_ID` environment variable
  - Usage: `src/app/layout.tsx` loads Zalo SDK and renders chat widget
  - Widget Config: Welcome message "Chào bạn! Mình là AutoFlow. Bạn cần tư vấn về tự động hóa không?"
  - Integration Type: Client-side SDK widget

**Webhooks:**
- Configurable Webhook Endpoint - For audit form submissions
  - Service: Supports n8n, Zapier, Make, or custom endpoints
  - Config: `AUDIT_WEBHOOK_URL` environment variable (optional)
  - Usage: `src/app/api/audit/route.ts` forwards form submissions to webhook
  - Method: HTTP POST with JSON payload containing submission data and timestamp

## Data Storage

**Databases:**
- Supabase PostgreSQL - Primary database for application data
  - Connection: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - Client: `@supabase/supabase-js@2.100.1` and `@supabase/ssr@0.9.0`
  - Tables:
    - `pdf_leads` - Stores lead information (name, email, phone, resource type) from PDF download requests
    - `audit_submissions` - Stores audit form submissions (name, phone, company, industry, team size, pain points, details, source)
  - Authentication: Uses Supabase anonymous key with row-level security policies
  - Server Implementation: `src/lib/supabase/server.ts` - Server-side client with cookie-based session management
  - Browser Implementation: `src/lib/supabase/client.ts` - Client-side browser client
  - Middleware: `src/lib/supabase/middleware.ts` - Session refresh middleware

**File Storage:**
- Local filesystem only - PDFs stored in `public/pdfs/` directory
  - PDF Resources:
    - `AutoFlow-Lead-Magnet-10-Quy-Trinh.pdf` - "10 Quy Trình SME Nên Tự Động Hóa Ngay"
  - Usage: `src/app/api/tai-lieu/route.ts` reads PDF from disk and attaches to email

**Caching:**
- In-memory rate limiting - No external cache service
  - Implementation: `Map<string, { count: number; resetAt: number }>` in-memory store
  - Scope: Per-endpoint in-memory cache (lost on server restart)
  - Limits: 5 requests per hour per IP address

## Authentication & Identity

**Auth Provider:**
- Supabase - Authentication backend
  - Implementation: Server-side session management with cookies via `@supabase/ssr`
  - Session Storage: Cookies managed by Next.js `next/headers`
  - Type: Server-side rendered (SSR) compatible authentication
  - No user authentication currently exposed in API routes - only form submissions

## Monitoring & Observability

**Error Tracking:**
- Console logging only - No external error tracking service
  - Errors logged in:
    - `src/app/api/audit/route.ts` - Supabase and webhook errors
    - `src/app/api/tai-lieu/route.ts` - Email send and Supabase errors

**Logs:**
- Server-side console output only
  - Error messages logged with `console.error()`
  - No structured logging or log aggregation

## CI/CD & Deployment

**Hosting:**
- Vercel (inferred from Next.js framework and standard configuration)
- Alternative: Any Node.js 18+ hosting environment

**CI Pipeline:**
- Not configured - No GitHub Actions or CI/CD pipeline files present
- Deployments likely manual or via Vercel's automatic deployments on git push

## Environment Configuration

**Required env vars for deployment:**
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `RESEND_API_KEY` - Resend email service API key

**Optional env vars:**
- `NEXT_PUBLIC_GA_ID` - Google Analytics measurement ID
- `NEXT_PUBLIC_ZALO_OA_ID` - Zalo OA ID for chat widget
- `AUDIT_WEBHOOK_URL` - Webhook URL for audit form submissions

**Secrets location:**
- Local: `.env.local` file (ignored by git)
- Production: Environment variables configured in hosting platform (Vercel Environment Variables)
- Template: `.env.example` documents required configuration

## Webhooks & Callbacks

**Incoming:**
- Audit Form API - `POST /api/audit` endpoint
  - Receives: Form submission with name, phone, company, industry, team size, pain points, details
  - Response: `{ success: true }` or error JSON
  - Rate limiting: 5 requests per hour per IP
  - Honeypot: `website` field used as spam check

- PDF Lead Capture API - `POST /api/tai-lieu` endpoint
  - Receives: Name, email, phone, resource type
  - Response: `{ success: true }` or error JSON
  - Rate limiting: 5 requests per hour per IP
  - Honeypot: `website` field used as spam check

**Outgoing:**
- Webhook Forward - Audit submissions forwarded to configured webhook
  - Endpoint: `AUDIT_WEBHOOK_URL` (optional, from environment)
  - Method: HTTP POST with JSON payload
  - Payload: Submission object plus `submittedAt` ISO timestamp
  - Error handling: Failures logged but don't block response to client

- Email API - Resend sends PDF emails
  - Service: Resend SDK
  - Recipient: Lead's email address from form
  - Content: HTML template with PDF attachment
  - Sender: "AutoFlow VN <onboarding@resend.dev>"
  - Error handling: Failures logged and return error response to client

---

*Integration audit: 2026-03-29*
