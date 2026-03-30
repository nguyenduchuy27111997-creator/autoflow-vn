# Architecture

**Analysis Date:** 2026-03-29

## Pattern Overview

**Overall:** Next.js 16 Full-Stack Application with Marketing Site + Client Portal

**Key Characteristics:**
- Marketing/content-heavy website with embedded conversion flows
- Client authentication portal with protected dashboard
- Server-side form processing with rate limiting and webhook forwarding
- Multi-language support (Vietnamese primary, English supported)
- Email delivery integration with PDF attachments
- Real-time client-server communication via Supabase

## Layers

**Presentation Layer (Components & Pages):**
- Purpose: React Server Components and Client Components for rendering UI
- Location: `src/app/` (pages), `src/components/` (reusable UI)
- Contains: Page templates, layout wrappers, form components, marketing sections
- Depends on: Utilities (`@/lib`), data constants (`@/data`)
- Used by: Next.js router and middleware

**API Layer:**
- Purpose: Backend endpoints handling form submissions, authentication, and data processing
- Location: `src/app/api/`
- Contains: Route handlers for audit form (`/api/audit`), PDF lead capture (`/api/tai-lieu`)
- Depends on: Supabase SDK, Resend email service, rate limiting logic
- Used by: Client-side fetch calls from form components

**Data Access Layer:**
- Purpose: Database abstraction and Supabase client initialization
- Location: `src/lib/supabase/`
- Contains: Server-side client (`server.ts`), browser client (`client.ts`), middleware (`middleware.ts`)
- Depends on: @supabase/ssr, @supabase/supabase-js
- Used by: API routes and authenticated pages

**Middleware Layer:**
- Purpose: Session management and route protection
- Location: `middleware.ts`, `src/lib/supabase/middleware.ts`
- Contains: Auth session refresh, dashboard redirect protection
- Depends on: Supabase auth SDK, Next.js server utilities
- Used by: Portal routes (`/portal/dashboard/*`)

**Content & Data Layer:**
- Purpose: Static and configuration data
- Location: `src/data/` (constants, quiz data, blog posts)
- Contains: Industry definitions, team size options, quiz questions, blog metadata
- Depends on: None (pure data)
- Used by: Form components, page templates

## Data Flow

**Audit Form Submission:**

1. User fills audit form on `src/app/audit/page.tsx` (client-side state management)
2. Form submits POST to `/api/audit` with honeypot and rate limit checks
3. Route handler validates fields, saves to `audit_submissions` table in Supabase
4. Webhook payload forwarded to external automation platform (n8n/Zapier/Make)
5. Response returned to client with success/error message

**PDF Lead Capture:**

1. User enters email on content pages (blog, resources, tools)
2. Form posts to `/api/tai-lieu` with PDF resource identifier
3. Route handler validates email, saves to `pdf_leads` table
4. PDF file read from `public/pdfs/` and attached to email
5. Email sent via Resend with styled HTML template
6. Success confirmation shown to user

**Portal Authentication:**

1. User navigates to `/portal` (login page)
2. Supabase auth flow initiated via client SDK (`src/lib/supabase/client.ts`)
3. On successful auth, user redirected to `/portal/dashboard`
4. Middleware intercepts request, calls `createClient()` server function
5. `updateSession()` refreshes auth tokens and protects dashboard route
6. Unauthenticated users automatically redirected to `/portal`

**SEO & Metadata:**

1. Root layout (`src/app/layout.tsx`) provides global metadata, fonts, scripts
2. Page-specific metadata set in individual page exports
3. JsonLd schema markup injected for local business and service types
4. Google Analytics and Zalo OA scripts conditionally loaded based on env vars

## Key Abstractions

**Button Component:**
- Purpose: Unified button styling with variants and states
- Examples: `src/components/ui/Button.tsx`
- Pattern: Props-based variant/size system with Tailwind classes, supports `href` for links or `type` for form buttons

**Container Component:**
- Purpose: Consistent max-width layout wrapper with responsive padding
- Examples: `src/components/ui/Container.tsx`
- Pattern: Flexible semantic HTML (div/section) with centered max-w-6xl content

**Form Components:**
- Purpose: Styled input fields and form utilities
- Examples: `src/components/ui/FormField.tsx`
- Pattern: Controlled inputs with validation feedback

**Rate Limiting:**
- Purpose: Prevent form abuse via client IP tracking
- Examples: `src/app/api/audit/route.ts` (lines 8-33), `src/app/api/tai-lieu/route.ts` (lines 13-35)
- Pattern: In-memory Map with window-based counters, extracting client IP from headers

**Honeypot Protection:**
- Purpose: Filter bot submissions on forms
- Examples: Both `/api/audit` and `/api/tai-lieu` check for `body.website` field
- Pattern: Silent rejection with success response (returns 200 without processing)

**Supabase SSR Pattern:**
- Purpose: Consistent auth session management across server/client boundaries
- Examples: `src/lib/supabase/server.ts`, `src/lib/supabase/client.ts`, `src/lib/supabase/middleware.ts`
- Pattern: Separate client instances for SSR (with cookies) vs browser, middleware refreshes tokens

## Entry Points

**Root Layout:**
- Location: `src/app/layout.tsx`
- Triggers: All page loads
- Responsibilities: Global metadata, font imports, analytics/chat scripts, Zalo OA widget setup

**Marketing Homepage:**
- Location: `src/app/page.tsx`
- Triggers: `/` route
- Responsibilities: Compose hero, integrations, pain points, process, pricing, results, FAQ sections

**Portal Entry:**
- Location: `src/app/portal/page.tsx`
- Triggers: `/portal` route
- Responsibilities: Supabase login form with email/password

**Protected Dashboard:**
- Location: `src/app/portal/dashboard/page.tsx`
- Triggers: `/portal/dashboard` route (protected by middleware)
- Responsibilities: Check auth via server-side `createClient()`, render project list, sign out

**API Routes:**
- `/api/audit` (`src/app/api/audit/route.ts`): POST form submissions
- `/api/tai-lieu` (`src/app/api/tai-lieu/route.ts`): POST email for PDF delivery

## Error Handling

**Strategy:** Try-catch with HTTP response codes, logging errors to console, user-friendly Vietnamese messages

**Patterns:**
- Missing required fields → 400 Bad Request
- Rate limit exceeded → 429 Too Many Requests
- Invalid email format → 400 Bad Request
- Supabase insert error → 500 Internal Server Error (logged, success=true still sent to maintain UX)
- Email send failure → 500 with error message
- Catch-all → 500 with generic Vietnamese message

**Example:** `src/app/api/tai-lieu/route.ts` lines 150-156 gracefully handles email failures separately from database success

## Cross-Cutting Concerns

**Logging:** Console.error for database and webhook failures, preserved in server logs

**Validation:**
- Email: regex check with `@` character
- Phone: required string (no format validation)
- Required fields: name/phone for audit, email for PDF
- Honeypot: `website` field presence indicates bot

**Authentication:**
- Supabase Auth (email/password) for portal access
- Public marketing routes require no auth
- Protected routes: `/portal/dashboard/*`
- Session refresh via middleware before each request

**Rate Limiting:**
- Window: 1 hour (3,600,000 ms)
- Max requests: 5 per IP per window
- Applies to both `/api/audit` and `/api/tai-lieu`

---

*Architecture analysis: 2026-03-29*
