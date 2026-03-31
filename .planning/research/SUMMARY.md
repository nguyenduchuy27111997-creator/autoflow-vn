# Project Research Summary

**Project:** Internal Lead Scoring Dashboard
**Domain:** B2B internal analytics — lead scoring, triage, and UTM attribution
**Researched:** 2026-03-29
**Confidence:** HIGH

## Executive Summary

This is an internal read-only dashboard that joins data from four existing Supabase tables (quiz_leads, audit_submissions, pdf_leads, email_queue) to produce a composite lead score, tier assignment, and UTM attribution view for a single authenticated admin user. The dominant architecture recommendation across all four research files is consistent: build inside the existing `/portal/dashboard/` route extension rather than a standalone app, use async Server Components for all data fetching, compute scoring logic as a PostgreSQL function embedded in a `v_all_leads` UNION view, and keep the service role key strictly server-side. The stack is almost entirely locked (Next.js 16, React 19, Supabase, Tailwind 4) with only three additions needed: Recharts (via shadcn/ui Chart), TanStack Table v8, and optionally nuqs for URL-state filters.

The most important architectural decision is that composite scoring is the dependency foundation for the entire dashboard. Six of the seven table-stakes features depend on computing a unified score from multiple tables before any UI can be built. This means the Supabase SQL layer (view + scoring function) must be the first deliverable, not the last. The correct build order is: SQL layer first, then typed query helpers, then page scaffolding, then UI components.

The top risks are security (service role key exposure in client bundles), performance (N+1 queries and analytical queries degrading production OLTP), and trust (a scoring formula that sales cannot explain or does not use). All three are avoidable with architectural constraints established in Phase 1 — they are expensive to fix post-launch. Score staleness from missing time decay and materialized views with no refresh scheduler are "looks done but isn't" traps that must be explicitly verified before shipping.

---

## Key Findings

### Recommended Stack

The core application stack is locked. Research scope was limited to charting, data tables, and auth patterns. shadcn/ui Chart (Recharts v3) is the clear choice for charts — it is already consistent with the existing design system, avoids a second component library, and Recharts v3 resolves the infinite render loop bugs present in v2. TanStack Table v8 is the correct choice for the lead list: it is headless (fits Tailwind perfectly), feature-complete for free, and the official shadcn/ui Data Table guide targets it explicitly. Auth reuses the existing Supabase project — no new auth system is needed. A separate admin client factory (`createAdminClient`) using the service role key handles the single-user internal admin access pattern.

**Core technologies:**
- **Recharts ^3.8.1** (via shadcn/ui Chart): Lead scoring charts, KPI cards, score distribution — avoids adding a second design system; Recharts v3 confirmed React 19 compatible
- **@tanstack/react-table ^8.21.3**: Sortable/filterable lead list — headless, Tailwind-native, full-featured in free tier; v9 is alpha, do not use
- **Supabase Auth (@supabase/ssr ^0.9.0, already locked)**: Single-user session auth — reuse existing Supabase project; middleware already protects `/portal/dashboard/**`
- **nuqs ^2.x** (optional): URL-based filter state — enables shareable filtered views; works with Next.js 16 App Router
- **date-fns ^4.x**: Timestamp formatting for lead created_at columns

### Expected Features

Research identifies composite score computation as the prerequisite that unblocks the majority of other features. The ops team's core need is replacing a manual spreadsheet workflow — the MVP must deliver sortable/filterable lead triage with score breakdown and UTM attribution.

**Must have (table stakes — v1 launch):**
- Lead list table with sort by score/tier/date, filter by tier and source
- Composite score computation (joins quiz + audit + pdf + email into 0-100 score per lead)
- Tier badges (Hot/Warm/Cold) derived from composite score — single source of truth
- Lead detail view with full signal breakdown: quiz answers, audit fields, email status, UTM
- UTM source quality summary (avg score + lead count per utm_source/utm_campaign)
- Date range filter across all views
- CSV export of filtered lead list

**Should have (v1.x post-validation):**
- Pain point clustering from audit_submissions (surfaces common lead needs)
- Lead velocity metric (hot leads per week with trend sparkline)
- Score decay indicator (visual aging on warm leads going cold)

**Defer (v2+):**
- Score history / trend line — requires new `lead_score_snapshots` table schema; cannot be retroactively derived
- Cohort view by UTM source — high complexity, defer until team has regular analytical rhythm
- CRM push integration — defer until CRM platform decision is made
- Predictive ML scoring — requires 6+ months of win/loss outcome labels

**Anti-features to reject:**
- Real-time WebSocket updates (complexity without value — refresh on load is sufficient)
- AI-generated outreach suggestions (out of scope for a scoring dashboard)
- Full CRM replacement with deal stages, notes, tasks (scope creep)
- Complex role-based permissions (single user, no need)

### Architecture Approach

The dashboard extends the existing `/portal/dashboard/` route rather than spinning up a separate Next.js app. All data fetching happens in async Server Components using a dedicated `createAdminClient()` factory with the service role key — this bypasses RLS safely for an admin-only internal tool. A PostgreSQL `v_all_leads` UNION ALL view normalizes all three lead source tables into one queryable shape, and a `score_lead(email)` Postgres function computes the composite score as a computed column in that view. Client Components are limited to filter controls (UTMFilter) which communicate with the server exclusively through URL search params. No client-side state store, no API routes, no WebSockets.

**Major components:**
1. **`v_all_leads` (Supabase view)** — UNION ALL of quiz_leads, audit_submissions, pdf_leads with normalized columns + computed_score column; single query surface for all dashboard data
2. **`score_lead()` (Postgres function)** — deterministic scoring function embedded in the view; eliminates N+1 pattern at the database layer
3. **`src/lib/supabase/admin.ts`** — server-only admin client factory using service role key; never imported into client components
4. **`src/lib/leads.ts`** — typed query helpers wrapping the admin client; called directly from Server Components (no API routes needed)
5. **`leads/page.tsx`** — async Server Component; fetches `v_all_leads` with search param filters, passes pre-fetched data to child components
6. **`UTMFilter.tsx`** — only Client Component; updates URL search params to trigger server re-render; never calls Supabase directly
7. **`LeadTable.tsx`** — Server Component rendering TanStack Table v8 with shadcn Table primitives

**Build order (dependency-aware):**
1. Supabase SQL layer (view + scoring function) — unblocks everything
2. `admin.ts` client factory + env var — unblocks query helpers
3. `types/leads.ts` — unblocks both query helpers and UI components
4. `src/lib/leads.ts` query helpers — unblocks page component
5. `leads/page.tsx` + `loading.tsx` + `error.tsx` — confirm data flows end-to-end
6. `LeadTable.tsx` — Server Component with scored rows
7. `UTMFilter.tsx` — Client Component for filter controls

### Critical Pitfalls

1. **Service role key in client bundle** — Use `SUPABASE_SERVICE_ROLE_KEY` (no `NEXT_PUBLIC_` prefix) exclusively in Server Components and `lib/` files. Add CI grep check: zero matches for `service_role` in `src/`, `components/`, `pages/`. Catastrophic if leaked — bypasses all RLS.

2. **N+1 query pattern** — Embed `score_lead(email)` as a computed column in `v_all_leads` so all leads with scores load in one query. Never call scoring functions per-row in application code. A real-world case study recorded 61 queries per page load dropping to 1 after consolidation, cutting load time from 2.8s to 150ms.

3. **Analytical queries degrading production OLTP** — Dashboard aggregate queries run on the same Postgres instance as production writes. At current scale (early-stage SaaS, likely under 50k leads), direct queries are acceptable. Plan for read replica routing before table exceeds 50k rows. Add `statement_timeout = '30s'` on the admin role to kill runaway queries.

4. **Lead score staleness without decay** — A lead scoring 85 from a demo six months ago must rank below a lead scoring 65 with activity last week. Build time decay into the `score_lead()` function from day one using `last_activity_at`. Decay computed in Postgres via scheduled Edge Function or pg_cron — never on every page load. Define "active event" before writing the schema.

5. **Overly complex scoring formula that no one trusts** — Start with 5-7 criteria. Make score breakdown visible in the lead detail view (each factor + its point contribution). Get sales team sign-off on the formula before writing any scoring logic. If sales cannot explain why a lead scores 73 vs 74, the formula will be ignored.

6. **Materialized views with no refresh scheduler** — If materialized views are used for aggregate stats (lead count by tier, score distribution histogram), ship the pg_cron refresh job at the same time as the view. Never deploy a materialized view without a scheduler — data goes stale and dashboard credibility collapses.

---

## Implications for Roadmap

Based on the dependency graph across all four research files, the recommended phase structure is:

### Phase 1: SQL Foundation + Scoring Engine

**Rationale:** Composite score computation is the prerequisite for six of seven table-stakes features. Nothing meaningful can be built until the database layer is correct. This phase also establishes the security boundary (admin client, server-side key) that all subsequent phases depend on. Establishing score decay logic here prevents painful retroactive formula rebuilds.

**Delivers:** `v_all_leads` UNION view, `score_lead()` Postgres function with decay logic, `admin.ts` client factory, `types/leads.ts`, verified end-to-end data flow to a stub page.

**Addresses:** Composite score (P1 feature), tier assignment (P1 feature), UTM normalization across all source tables.

**Avoids:** N+1 scoring queries (score computed in SQL), service role key exposure (admin client pattern established), production OLTP degradation (query structure defined before UI adds complexity), scoring formula nobody trusts (decay logic designed upfront).

**Research flag:** Standard patterns — Supabase view/function creation is well-documented. No additional research needed.

---

### Phase 2: Core Dashboard — Lead List + Detail View

**Rationale:** With the SQL layer validated, build the primary interaction surface. The lead list with sort/filter is the dashboard's main job — it replaces the ops team's spreadsheet. Lead detail view is the second highest-value feature (explains score, surfaces full signal breakdown). Both are low-to-medium complexity but high user value.

**Delivers:** `leads/page.tsx` async Server Component, `LeadTable.tsx` with TanStack Table v8 + shadcn Table primitives, `UTMFilter.tsx` Client Component with nuqs URL state, lead detail view with score breakdown, tier badges, date range filter.

**Uses:** `@tanstack/react-table ^8.21.3`, shadcn/ui Table + Badge + Input + Select + Card + Button components.

**Implements:** Server Component data fetching pattern, URL-state-only client components, `loading.tsx` Suspense skeleton.

**Avoids:** Client-side data fetching anti-pattern (all data in Server Components), N+1 per-row queries (data pre-fetched at page level).

**Research flag:** Standard patterns — TanStack Table v8 + shadcn/ui Data Table guide is well-documented. No additional research needed.

---

### Phase 3: Analytics + UTM Attribution Views

**Rationale:** Once the lead list is validated by the ops team, add the analytical layer: UTM attribution quality summary and lead count summary stats. These are the features that give the dashboard value beyond a read-only DB view — they answer "where are our best leads coming from?" without building custom queries.

**Delivers:** UTM source quality chart (avg score per utm_source/utm_campaign), KPI stat cards (total leads, hot count, warm count, avg composite score), score distribution histogram, CSV export of filtered view.

**Uses:** Recharts ^3.8.1 via shadcn/ui Chart components (`<ChartContainer>`, `<BarChart>`, `<AreaChart>`), shadcn/ui Card components.

**Avoids:** Materialized views deployed without refresh schedulers (if aggregate views are added, pg_cron jobs ship simultaneously).

**Research flag:** Standard patterns — shadcn/ui Chart documentation + Recharts v3 usage is well-documented. No additional research needed.

---

### Phase 4: v1.x Enhancements (Post-Validation)

**Rationale:** Defer until the ops team is actively using v1 and confirms which gap hurts most. Research identifies three post-validation candidates: pain point clustering, lead velocity metric, and score decay visualization. Build only what feedback validates.

**Delivers:** Pain point clustering from audit_submissions.pain_points, lead velocity sparkline (hot leads/week), score decay visual indicator on warm leads.

**Dependency note:** Pain point clustering requires `audit_submissions.pain_points` to be parseable (check column type: array, JSONB, or text). Validate the data shape before scheduling this phase.

**Research flag:** May need targeted research for pain_points column shape if it is a complex JSONB structure.

---

### Phase Ordering Rationale

- SQL foundation must precede all UI work because composite score is the dependency for all P1 features.
- Admin client and types are infrastructure that both query helpers and UI components require — they belong in Phase 1 not Phase 2.
- Score decay logic must be specified before the schema is finalized because it requires a `last_activity_at` column that cannot be retroactively populated.
- UTM normalization (standardizing case/format across all four source tables) must happen in the SQL layer (Phase 1) before any UTM-based analytics are built (Phase 3).
- CSV export and analytics views are deferred to Phase 3 because they depend on the stable data shape and filter state established in Phase 2.
- Score history/trend line and cohort views are deferred to v2+ because they require schema additions (`lead_score_snapshots` table) that cannot be retroactively populated from current data.

### Research Flags

Phases needing deeper research during planning:
- **Phase 1 (score decay formula):** The specific decay rate (% per week, definition of "active event") needs alignment with the sales team before writing SQL. This is a business logic question, not a technical one, but it shapes the schema.
- **Phase 4 (pain point clustering):** Requires inspection of `audit_submissions.pain_points` column type before planning. If it is unstructured text, parsing strategy differs from JSONB or array.

Phases with standard patterns (skip research-phase):
- **Phase 2 (lead list UI):** TanStack Table v8 + shadcn/ui Data Table guide covers this exactly.
- **Phase 3 (charts):** shadcn/ui Chart documentation + Recharts v3 migration guide covers this.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All additions (Recharts v3, TanStack Table v8, nuqs v2) verified against official docs; version compatibility with React 19 and Next.js 16 confirmed |
| Features | MEDIUM-HIGH | Table-stakes features verified across multiple practitioner B2B sources; exact scoring weights and decay rates are business decisions not researchable |
| Architecture | HIGH | Verified against local Next.js 16 docs in `node_modules/next/dist/docs/` and existing codebase patterns in `portal/dashboard/`; not inferred from training data |
| Pitfalls | HIGH (Supabase-specific), MEDIUM (lead scoring) | Supabase pitfalls from official docs + community post-mortems; lead scoring trust/adoption pitfalls from industry practitioner sources |

**Overall confidence:** HIGH

### Gaps to Address

- **Score decay rate and "active event" definition:** Research identifies that decay is necessary and common approaches (10-20%/week), but the actual rate and the list of events that reset the inactivity clock are business decisions requiring sales team input. Must be resolved before writing `score_lead()`.

- **`audit_submissions.pain_points` column shape:** The pain point clustering feature (Phase 4) depends on whether this column is a structured array, JSONB, or unstructured text. Inspect the actual column type before scheduling Phase 4 work.

- **UTM value consistency across source tables:** Research flags UTM normalization as non-trivial (`google` vs `Google` vs `google-ads`). Requires sampling actual UTM data from all four tables before writing the normalization logic in the SQL view.

- **Lead volume baseline:** Performance guidance (when to add read replicas, when to switch to cursor pagination) depends on actual row counts. The current volume is unknown from research. Verify row counts in `quiz_leads`, `audit_submissions`, `pdf_leads` to calibrate Phase 1 performance decisions.

---

## Sources

### Primary (HIGH confidence)

- Local Next.js 16 docs (`node_modules/next/dist/docs/`) — server components, data fetching, streaming patterns
- Existing codebase: `src/app/portal/dashboard/page.tsx`, `src/lib/supabase/server.ts`, `middleware.ts` — confirmed architectural patterns already in use
- [Supabase SSR Auth for Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs) — `getUser()` over `getSession()`, middleware pattern
- [Supabase RLS Performance and Best Practices](https://supabase.com/docs/guides/troubleshooting/rls-performance-and-best-practices-Z5Jjwv) — RLS index requirements
- [Supabase Query Optimization](https://supabase.com/docs/guides/database/query-optimization) — performance guidance
- [Supabase Read Replicas](https://supabase.com/docs/guides/platform/read-replicas) — dashboard query routing
- [shadcn/ui Chart documentation](https://ui.shadcn.com/docs/components/radix/chart) — Recharts v3 usage, CSS variable theming
- [shadcn/ui Data Table documentation](https://ui.shadcn.com/docs/components/radix/data-table) — TanStack Table v8 integration
- [Recharts v3 migration guide](https://github.com/recharts/recharts/wiki/3.0-migration-guide) — v3 vs v2 breaking changes
- [TanStack Table v8 releases](https://github.com/TanStack/table/releases) — v8.21.3 stable confirmed
- [Supabase Security Retro 2025](https://supabase.com/blog/supabase-security-2025-retro) — service role key security guidance

### Secondary (MEDIUM confidence)

- [Case Study: 61 Queries to 1 on a Supabase Dashboard](https://medium.com/@maximedalessandro/case-study-how-our-ai-cut-our-supabase-dashboard-queries-from-61-to-1-043ef525fd5c) — N+1 pattern consequences; 2.8s to 150ms improvement
- [B2B Lead Scoring: Belkins' Formula](https://belkins.io/blog/lead-scoring) — scoring formula structure and point values
- [CRM Lead Scoring in B2B — instantly.ai](https://instantly.ai/blog/how-crm-scores-b2b-leads/) — tier thresholds (Hot/Warm/Cold)
- [TanStack Table v9 roadmap discussion](https://github.com/TanStack/table/discussions/5270) — confirms v9 not stable as of March 2026
- [Optimizing Supabase with Materialized Views](https://dev.to/kovidr/optimize-read-performance-in-supabase-with-postgres-materialized-views-12k5) — refresh strategy patterns
- [Common Lead Scoring Mistakes](https://www.reform.app/blog/common-lead-scoring-mistakes-and-fixes) — formula adoption pitfalls
- [2026 B2B Lead Prioritization Playbook — saleswingsapp.com](https://www.saleswingsapp.com/inside-sales/how-to-prioritize-high-volume-b2b-leads-2026-playbook/) — current year scoring patterns

---

*Research completed: 2026-03-29*
*Ready for roadmap: yes*
