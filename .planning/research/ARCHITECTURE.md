# Architecture Research

**Domain:** Internal lead scoring dashboard — read-only, single user, Next.js 16 + existing Supabase project
**Researched:** 2026-03-29
**Confidence:** HIGH (verified against local Next.js 16 docs + existing codebase patterns)

---

## Standard Architecture

### System Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                     Browser (1 internal user)                     │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │  /portal/dashboard/leads  (Server Component page)         │    │
│  │  ├── LeadTable (Server Component — streams per section)   │    │
│  │  ├── ScoreBreakdown (Server Component)                    │    │
│  │  └── UTMFilter (Client Component — search params only)    │    │
│  └──────────────────────────────────────────────────────────┘    │
└─────────────────────────┬────────────────────────────────────────┘
                           │ HTTP (same Next.js app, /portal prefix)
┌─────────────────────────▼────────────────────────────────────────┐
│                    Next.js 16 App Router                          │
│                                                                    │
│  middleware.ts → /portal/dashboard/** guards (already exists)     │
│                                                                    │
│  src/app/portal/dashboard/                                         │
│  ├── leads/page.tsx         (async Server Component, reads DB)    │
│  ├── leads/loading.tsx      (Suspense skeleton)                   │
│  └── leads/error.tsx        (error boundary)                      │
│                                                                    │
│  src/lib/supabase/server.ts  (createClient — already exists)      │
│  src/lib/leads.ts            (query helpers, NEW)                  │
└─────────────────────────┬────────────────────────────────────────┘
                           │ supabase-js (server-side, service_role key)
┌─────────────────────────▼────────────────────────────────────────┐
│                 Supabase project: peniykvgzysirjwkyzyy            │
│                                                                    │
│  Tables (existing):                                                │
│  ├── quiz_leads          (id, email, score, utm_*, created_at)    │
│  ├── audit_submissions   (id, email, utm_*, created_at)           │
│  ├── pdf_leads           (id, email, utm_*, created_at)           │
│  └── email_queue         (id, to_email, status, created_at)       │
│                                                                    │
│  Views / Functions (NEW — defined in Supabase SQL editor):        │
│  ├── v_all_leads          (UNION ALL of all 3 lead sources)       │
│  └── score_lead(email)    (Postgres function — lead scoring)      │
└──────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| `middleware.ts` | Auth guard on `/portal/dashboard/**` — already implemented | `updateSession()` with `supabase.auth.getUser()` redirect |
| `leads/page.tsx` | Server Component: fetches from `v_all_leads`, renders table | `async` page component, `await createClient()` |
| `leads/loading.tsx` | Suspense fallback shown during streaming | Skeleton table with `animate-pulse` |
| `leads/error.tsx` | Catches Supabase query errors | Simple error card |
| `UTMFilter` | Client Component: updates URL search params for filtering | `useSearchParams` + `useRouter` — no server state |
| `src/lib/leads.ts` | Query helpers: fetch, score, filter | Plain async functions calling `createClient()` |
| `v_all_leads` (Supabase view) | UNION ALL normalized leads from 3 tables | PostgreSQL view, queryable via SDK |
| `score_lead` (Supabase function) | Deterministic scoring per lead | PostgreSQL function, called via `.rpc()` |

---

## Recommended Project Structure

This is an extension to the existing app inside `/portal`. No separate Next.js app is needed — the milestone context says "standalone" but the codebase already has the Supabase client, auth, and portal route. Building inside the same app avoids duplicating infrastructure.

```
src/
├── app/
│   └── portal/
│       ├── layout.tsx              # existing — robots: noindex
│       ├── page.tsx                # existing — login page
│       └── dashboard/
│           ├── page.tsx            # existing — redirects to /leads
│           ├── PortalDashboard.tsx # existing — client portal view
│           └── leads/              # NEW — lead scoring dashboard
│               ├── page.tsx        # Server Component, fetches v_all_leads
│               ├── loading.tsx     # Suspense skeleton
│               ├── error.tsx       # Error boundary
│               ├── LeadTable.tsx   # Server Component — renders rows
│               └── UTMFilter.tsx   # Client Component — filter controls
├── lib/
│   ├── supabase/
│   │   ├── server.ts               # existing
│   │   ├── client.ts               # existing
│   │   └── middleware.ts           # existing
│   └── leads.ts                    # NEW — query + scoring helpers
└── types/
    └── leads.ts                    # NEW — Lead, LeadSource, Score types
```

### Structure Rationale

- **`/portal/dashboard/leads/`:** Extends existing portal rather than a new app — reuses auth, layout, and Supabase client setup already present. Keeps the middleware matcher unchanged.
- **`src/lib/leads.ts`:** Centralizes all Supabase queries in one file. Server Components import directly — no API route indirection needed for internal dashboards.
- **`types/leads.ts`:** Single source of truth for the normalized lead shape returned by `v_all_leads`.

---

## Architectural Patterns

### Pattern 1: Service Role Key for Internal Read-Only Dashboard

**What:** Use `SUPABASE_SERVICE_ROLE_KEY` (not the anon key) in a server-side-only Supabase client for the leads dashboard. This bypasses RLS entirely, which is correct for an internal tool where the auth guard is the middleware check.

**When to use:** Internal dashboards accessed only by authenticated admin users. The service role key must never be passed to client components — it stays in Server Components and `src/lib/` server-only code.

**Trade-offs:** Simpler than writing RLS policies for admin read access. Risk: accidental exposure if the client is used in a `'use client'` component. Mitigation: keep a separate admin client factory.

**Example:**
```typescript
// src/lib/supabase/admin.ts  (NEW — server-only)
import { createClient } from "@supabase/supabase-js";

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // never NEXT_PUBLIC_
  );
}
```

The page then calls `createAdminClient()` directly — no cookie handling needed since this is not session-based.

---

### Pattern 2: Server Component Data Fetching with Suspense Streaming

**What:** `leads/page.tsx` is an `async` Server Component that `await`s Supabase queries. Wrap in `<Suspense>` from the parent or use `loading.tsx` for the full-page skeleton. This matches the pattern already used in `portal/dashboard/page.tsx`.

**When to use:** Any dashboard page that reads from a database. Confirmed as the canonical pattern in the local Next.js 16 docs (`06-fetching-data.md`): "Since Server Components are rendered on the server, credentials and query logic will not be included in the client bundle so you can safely make database queries."

**Trade-offs:** Data is always fresh on navigation (no stale client cache). For a read-only internal tool this is ideal — no staleness concerns, no client-state complexity.

**Example:**
```typescript
// src/app/portal/dashboard/leads/page.tsx
import { createAdminClient } from "@/lib/supabase/admin";
import { LeadTable } from "./LeadTable";
import { UTMFilter } from "./UTMFilter";

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ utm_source?: string; utm_medium?: string }>;
}) {
  const { utm_source, utm_medium } = await searchParams;
  const supabase = createAdminClient();

  let query = supabase.from("v_all_leads").select("*").order("created_at", { ascending: false });
  if (utm_source) query = query.eq("utm_source", utm_source);
  if (utm_medium) query = query.eq("utm_medium", utm_medium);

  const { data: leads, error } = await query;
  if (error) throw error;

  return (
    <div>
      <UTMFilter />
      <LeadTable leads={leads} />
    </div>
  );
}
```

---

### Pattern 3: Supabase `v_all_leads` UNION ALL View

**What:** A single PostgreSQL view that normalizes quiz_leads, audit_submissions, and pdf_leads into a common shape. Queried directly via the Supabase SDK. Scoring logic runs as a computed column or a companion `score_lead` function.

**When to use:** Whenever the dashboard needs to display leads across sources without JOIN complexity in application code. Views are first-class citizens in Supabase's PostgREST layer — `.from("v_all_leads").select("*")` works identically to a real table.

**Trade-offs:** View logic lives in Supabase SQL editor, not in version-controlled TypeScript. Mitigation: write the view SQL in a migration file under `/supabase/migrations/` if using Supabase CLI, or document it in a `supabase/views.sql` file.

**Recommended view SQL:**
```sql
-- supabase/views/v_all_leads.sql
CREATE OR REPLACE VIEW v_all_leads AS
  SELECT
    id::text,
    'quiz'           AS source,
    email,
    score            AS raw_score,
    NULL::text       AS resource,
    utm_source, utm_medium, utm_campaign, utm_term, utm_content,
    created_at
  FROM quiz_leads

  UNION ALL

  SELECT
    id::text,
    'audit'          AS source,
    email,
    NULL::int        AS raw_score,
    NULL::text       AS resource,
    utm_source, utm_medium, utm_campaign, utm_term, utm_content,
    created_at
  FROM audit_submissions

  UNION ALL

  SELECT
    id::text,
    'pdf'            AS source,
    email,
    NULL::int        AS raw_score,
    resource::text,
    utm_source, utm_medium, utm_campaign, utm_term, utm_content,
    created_at
  FROM pdf_leads;
```

---

### Pattern 4: Lead Scoring as a PostgreSQL Function

**What:** A `score_lead(email text)` function that aggregates across all source tables and returns a numeric score. Called from the dashboard via `.rpc('score_lead', { email })` or pre-computed and included as a column in `v_all_leads` via a subquery.

**When to use:** When score is derived from multiple signals (e.g., quiz_leads.score + whether audit was submitted + whether PDF was downloaded + email_queue delivery). Keeping scoring logic in Postgres avoids N+1 queries from the application layer.

**Recommended scoring logic (example rules):**
```sql
CREATE OR REPLACE FUNCTION score_lead(p_email text)
RETURNS integer
LANGUAGE sql
STABLE
AS $$
  SELECT
    COALESCE((SELECT score FROM quiz_leads WHERE email = p_email ORDER BY created_at DESC LIMIT 1), 0)
    + CASE WHEN EXISTS (SELECT 1 FROM audit_submissions WHERE email = p_email) THEN 30 ELSE 0 END
    + CASE WHEN EXISTS (SELECT 1 FROM pdf_leads WHERE email = p_email) THEN 10 ELSE 0 END
    + CASE WHEN EXISTS (SELECT 1 FROM email_queue WHERE to_email = p_email AND status = 'sent') THEN 5 ELSE 0 END;
$$;
```

For the dashboard view, embed the score directly in `v_all_leads` rather than calling `.rpc()` per row:
```sql
-- Add to the SELECT in v_all_leads (or create a separate v_leads_scored view):
score_lead(email) AS computed_score
```

**Trade-off:** Scoring in SQL means it runs on every view query. For 1 internal user this is inconsequential. If lead volume grows large (>50k rows), consider materializing the view or adding a `score` column updated via trigger.

---

## Data Flow

### Request Flow (Filter + Display)

```
User changes UTM filter (client-side)
    ↓
UTMFilter (Client Component) → router.push("?utm_source=fb")
    ↓
Next.js re-renders leads/page.tsx (Server Component, searchParams change)
    ↓
page.tsx: createAdminClient() → .from("v_all_leads").select().eq("utm_source","fb")
    ↓
Supabase: evaluates v_all_leads UNION ALL + score_lead() → returns rows
    ↓
LeadTable (Server Component) renders rows → streamed HTML to browser
```

### Auth Flow (already implemented)

```
Request to /portal/dashboard/**
    ↓
middleware.ts → updateSession(request) → supabase.auth.getUser()
    ↓
No user? → redirect to /portal (login page)
User exists? → proceed, page.tsx gets rendered
    ↓
page.tsx additionally calls supabase.auth.getUser() as defense-in-depth
    (existing pattern from portal/dashboard/page.tsx)
```

### State Management

No client-side state store needed. The only client state is URL search params (UTM filters), managed by the browser URL. Server Components re-fetch on every navigation. This is correct for an internal read-only dashboard.

---

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Supabase (peniykvgzysirjwkyzyy) | `createAdminClient()` — service_role key, server-only | Key stored in `SUPABASE_SERVICE_ROLE_KEY` (no `NEXT_PUBLIC_` prefix — never exposed to browser) |
| Supabase Auth | Already wired: `createClient()` (anon key) in middleware + portal login | Admin dashboard uses `createAdminClient()` separately — no cookie session needed post-auth-check |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Server Component → Supabase | Direct SDK call in `page.tsx` or `lib/leads.ts` | No API route needed — server components run server-side |
| Client Component (UTMFilter) → Server Component (page) | URL search params only | UTMFilter calls `router.push()`, never calls Supabase directly |
| `v_all_leads` view → score_lead function | SQL function call inside view query | Keeps scoring server-side; no app-level aggregation |
| Existing portal auth → leads dashboard | Shared middleware matcher | Middleware already protects `/portal/dashboard/:path*` — no new auth wiring needed |

---

## Build Order (Dependency-Aware)

This is the correct implementation sequence given the dependency graph:

1. **Supabase SQL layer** — Create `v_all_leads` view and `score_lead()` function in Supabase SQL editor. Verify via Supabase Table Editor that the view returns data. This unblocks everything else.

2. **`src/lib/supabase/admin.ts`** — Create the service_role client factory. Add `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`. This unblocks query helpers.

3. **`src/types/leads.ts`** — Define the `Lead` type matching `v_all_leads` columns. This unblocks both the query helpers and the UI components.

4. **`src/lib/leads.ts`** — Write typed query helpers (`getLeads(filters)`, etc.) using `createAdminClient()`. This unblocks the page component.

5. **`leads/page.tsx` + `loading.tsx` + `error.tsx`** — Implement the async Server Component page. Stub `UTMFilter` and `LeadTable` as empty shells first to confirm data flows end-to-end.

6. **`LeadTable.tsx`** — Server Component rendering the lead rows with score column.

7. **`UTMFilter.tsx`** — Client Component adding UTM filter controls via URL search params.

---

## Anti-Patterns

### Anti-Pattern 1: Fetching in Client Components

**What people do:** Mark the dashboard page `'use client'`, use `useEffect` + `supabase.from(...).select()` from `@supabase/supabase-js` browser client.

**Why it's wrong:** Exposes data-fetching credentials on the client. Adds loading flash and waterfall. The existing codebase already demonstrates the correct pattern: `portal/dashboard/page.tsx` is an async Server Component that calls `createClient()` server-side and passes results as props.

**Do this instead:** Async Server Component + `createAdminClient()` server-side. Client components receive pre-fetched data as props.

---

### Anti-Pattern 2: Using NEXT_PUBLIC_ for Service Role Key

**What people do:** Prefix the service role key with `NEXT_PUBLIC_` to "make it available" in the component.

**Why it's wrong:** `NEXT_PUBLIC_` variables are embedded in the client bundle and visible to anyone in the browser. The service role key bypasses all RLS — its exposure is a critical security issue.

**Do this instead:** Use `SUPABASE_SERVICE_ROLE_KEY` (no prefix). It is only available in Server Components, Route Handlers, and `lib/` files that are never imported into client components.

---

### Anti-Pattern 3: N+1 Scoring Queries

**What people do:** Fetch all leads from `v_all_leads`, then loop in TypeScript calling `score_lead()` per email via `.rpc()`.

**Why it's wrong:** 100 leads = 101 round trips to Supabase. Even on a fast connection this adds seconds of latency.

**Do this instead:** Embed `score_lead(email)` directly as a computed column in the `v_all_leads` view (or a wrapper view). One query returns all leads with scores.

---

### Anti-Pattern 4: Separate Next.js App for the Dashboard

**What people do:** Spin up a new Next.js project for the "standalone" dashboard.

**Why it's wrong:** The existing app already has Supabase client setup, auth middleware, Supabase SSR pattern, and the `/portal` route. A separate app doubles infrastructure, requires duplicating env vars, and creates a deployment dependency.

**Do this instead:** Extend `/portal/dashboard/` with a `/leads` sub-route. The milestone says "standalone" in the sense of a discrete deliverable, not a separate codebase.

---

## Scaling Considerations

This is a 1-user internal tool. Scaling is not a concern. Notes for if it grows:

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 1 user (current) | Server Component direct query — ideal |
| 5-10 internal users | No change needed. Supabase connection pooling handles this trivially. |
| Public-facing or high-frequency | Add `'use cache'` directive with `cacheLife('minutes')` on the data-fetching function (Next.js 16 feature, requires `cacheComponents: true` in `next.config.ts`). Currently not needed. |

---

## Sources

- Local Next.js 16 docs: `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- Local Next.js 16 docs: `node_modules/next/dist/docs/01-app/01-getting-started/06-fetching-data.md`
- Local Next.js 16 docs: `node_modules/next/dist/docs/01-app/02-guides/streaming.md`
- Existing codebase patterns: `src/app/portal/dashboard/page.tsx`, `src/lib/supabase/server.ts`, `middleware.ts`
- [Supabase Understanding API keys](https://supabase.com/docs/guides/api/api-keys) — service_role vs anon key
- [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) — why service_role bypasses RLS
- [Supabase Server-Side Auth for Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs) — `createServerClient` patterns
- [Supabase Joins and Nested tables](https://supabase.com/docs/guides/database/joins-and-nesting) — views queryable via PostgREST SDK

---
*Architecture research for: Lead scoring dashboard — Next.js 16 + Supabase (peniykvgzysirjwkyzyy)*
*Researched: 2026-03-29*
