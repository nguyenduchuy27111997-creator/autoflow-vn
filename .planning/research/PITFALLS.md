# Pitfalls Research

**Domain:** Internal lead scoring dashboard on Supabase (production database read layer)
**Researched:** 2026-03-29
**Confidence:** HIGH (Supabase-specific pitfalls from official docs + community post-mortems), MEDIUM (lead scoring formula pitfalls from industry sources)

---

## Critical Pitfalls

### Pitfall 1: Analytical Queries Degrading Production OLTP Performance

**What goes wrong:**
Dashboard aggregate queries — COUNT(*), SUM(), GROUP BY across large tables — run on the same Postgres instance as transactional writes. A dashboard refresh that triggers a complex aggregation across 500k+ rows can cause write latency spikes, connection exhaustion, and in extreme cases, transaction timeouts for production operations. Postgres is row-oriented (OLTP), not column-oriented (OLAP). It is not optimized for aggregating functions at scale.

**Why it happens:**
Developers treat "read-only" as "safe." They assume SELECT queries cannot hurt production. In practice, large scans consume I/O, CPU, and connection slots — finite resources shared with writes.

**How to avoid:**
- Route dashboard queries through Supabase Read Replicas (available on Pro and above). The read replica absorbs analytical I/O without touching the primary.
- Use materialized views for expensive aggregates (score distributions, funnel breakdowns, lead count summaries). Refresh them on a schedule (pg_cron or Edge Function trigger), not on every dashboard load.
- Set `statement_timeout` on the dashboard's Postgres role to kill runaway queries before they block the primary: `SET statement_timeout = '30s'`.
- Monitor `pg_stat_activity` for long-running dashboard queries; add query cancellation if duration exceeds threshold.

**Warning signs:**
- Production API response times spike around dashboard refresh intervals.
- `pg_stat_activity` shows dashboard queries with `wait_event_type = 'Lock'` or long `query_duration`.
- Cache hit rate drops below 95% in Supabase Reports after dashboard goes live.

**Phase to address:** Foundation / Data Access Layer phase — before any dashboard query is written.

---

### Pitfall 2: N+1 Query Pattern in Dashboard Components

**What goes wrong:**
A real-world Supabase case study recorded 61 queries firing to render a single dashboard page (1 query for a list of 20 records, then 3 follow-up queries per record). Load time was 2.8 seconds. After consolidation to 1 RPC query, load time dropped to 150ms. This pattern is endemic to component-level data fetching where each card/row fetches its own supplementary data.

**Why it happens:**
Frontend components fetch their own data in isolation. When a list renders, each row independently queries for owner name, score, last activity — instead of the parent query joining all of it.

**How to avoid:**
- Define data requirements at the page level, not the component level. One query (or one RPC call) provides all data a page needs.
- Use Supabase RPC functions with JOINs and LATERAL subqueries for complex multi-entity aggregations.
- If using React Query or SWR, batch-load related data in a single key, not per-row keys.

**Warning signs:**
- Browser network tab shows 10+ parallel `/rest/v1/` requests per page load.
- Dashboard feels fast per-card but total Time to Interactive is 2s+.
- Supabase Reports show API request count spiking proportionally with table row count.

**Phase to address:** Dashboard UI implementation phase — enforce as an architectural constraint before any component ships.

---

### Pitfall 3: RLS Policies Causing Full-Table Scans

**What goes wrong:**
Row Level Security policies evaluated on every row of a large table without supporting indexes cause sequential scans. A basic `auth.uid() = user_id` RLS policy on a 1M-row table can take over 3 minutes and time out. Internal dashboards that use the service role key bypass this — but dashboards that query as an authenticated user role hit it hard.

**Why it happens:**
RLS is added for safety, but the columns referenced in policies (`user_id`, `team_id`, `org_id`) are often not indexed. Postgres evaluates the policy predicate for every row it considers, multiplying the cost by the number of rows in scope.

**How to avoid:**
- For every column referenced in an RLS policy, create a btree index: `CREATE INDEX ON leads (user_id);`
- For internal-only admin dashboards, consider a dedicated Postgres role with `BYPASSRLS` privilege accessed via a server-side function — never expose this role's credentials client-side.
- Run Supabase's built-in Performance Advisor; it flags missing RLS-supporting indexes automatically.
- Benchmark RLS impact: test with and without `SET row_security = off` to quantify overhead.

**Warning signs:**
- `EXPLAIN ANALYZE` shows `Seq Scan` on large tables inside RLS policy checks.
- Query duration increases linearly (not logarithmically) as table grows.
- Supabase Performance Advisor flags "RLS Performance" warnings.

**Phase to address:** Database schema and access layer phase, before any query benchmarking.

---

### Pitfall 4: Service Role Key Exposed in Client-Side Dashboard Code

**What goes wrong:**
An internal dashboard needs to bypass RLS to see all leads (not just the logged-in user's leads). Developer uses `supabase.createClient(url, SERVICE_ROLE_KEY)` in the frontend. The service role key is now embedded in JavaScript bundle, visible to anyone who opens DevTools. This key bypasses all RLS and grants full read/write/delete access to the entire database — equivalent to root access.

**Why it happens:**
The dashboard "works" immediately with the service role key. RLS policies that restrict per-user access feel like obstacles for an admin view. The shortcut ships.

**How to avoid:**
- Never pass the service role key to any client-side code. Server-side only: Next.js Route Handlers, Edge Functions, or a dedicated backend API.
- For admin views that need all rows: create a Postgres function with `SECURITY DEFINER` owned by a role with `BYPASSRLS`. Call it via `supabase.rpc()` with the anon key. The function runs with elevated privileges server-side but the key in the client remains low-privilege.
- Alternatively, set a custom `app.role = 'admin'` claim in the JWT and write RLS policies that check `(auth.jwt() ->> 'role') = 'admin'`.
- Audit: grep the codebase for `service_role` to verify it never appears in any client-side file.

**Warning signs:**
- `SUPABASE_SERVICE_ROLE_KEY` imported in a `.tsx` or `.ts` file outside `/api/` or `/app/api/` directories.
- Environment variable names not prefixed with `SECRET_` or stored in server-only `.env` files.
- Vercel environment variables with service role key set to "Preview" + "Browser" exposure.

**Phase to address:** Authentication and access control phase — define access patterns before writing any query.

---

### Pitfall 5: Lead Score Staleness With No Decay Mechanism

**What goes wrong:**
Lead scores are computed once and stored. A lead who scored 85 from a product demo six months ago but has had zero activity since continues to rank above a lead who scored 65 last week with active engagement. Sales teams see "hot" leads that are actually cold. Trust in the dashboard erodes; sales reverts to gut instinct.

**Why it happens:**
Score computation is implemented as a one-time calculation or a simple recalculation that adds/removes points based on events but never subtracts for time elapsed. Time decay requires a background job, which is an architectural addition developers defer.

**How to avoid:**
- Build time decay into the score formula from day one. Common approach: reduce score by a configurable percentage (e.g., 10-20%) per week of inactivity. Store `last_activity_at` on every lead record.
- Use `pg_cron` or a scheduled Edge Function to recompute scores nightly. Do not recompute on every page load.
- Display `score_updated_at` on the dashboard so users can see data freshness.
- Define "active" explicitly: what events reset the inactivity clock? (page visit, email open, form submission).

**Warning signs:**
- Score distribution is bimodal — many leads stuck at high scores from months-old events, few in the middle range.
- Sales team ignores the dashboard score column and sorts by `created_at` instead.
- No `last_activity_at` or `score_updated_at` column exists on the leads table.

**Phase to address:** Lead scoring formula design phase — decay must be specified before the schema is finalized.

---

### Pitfall 6: Overly Complex Scoring Formula That No One Trusts

**What goes wrong:**
A scoring model with 20+ criteria, arbitrary point values, and multiple weighted sub-scores becomes a black box. Sales cannot explain why a lead scores 73 vs 74. When the model contradicts their intuition, they ignore it. Adoption collapses.

**Why it happens:**
More criteria feels more accurate. Developers add every available signal. The resulting score is defensible on paper but opaque in practice.

**How to avoid:**
- Start with 5-7 criteria that predict 80% of conversions. Analyze historical win/loss data to identify which attributes actually correlate with closed deals.
- Make score breakdown visible: show each contributing factor and its point value alongside the total score. "Score: 73 (Company size: +20, Recent demo: +30, Email opens: +15, Inactive 3 weeks: -12)."
- Include sales in formula design from the start. They own the definition of a qualified lead.
- Validate the model: does it agree with deals already closed? Run the formula retroactively on converted leads and verify they score high.

**Warning signs:**
- Formula defined entirely by marketing/engineering without sales input.
- Dashboard has no "score breakdown" or "score explanation" column.
- Sales team uses the CRM "notes" field to add their own informal quality ratings alongside the dashboard score.

**Phase to address:** Score formula design phase (pre-build) — get sales sign-off before writing a single line of scoring logic.

---

### Pitfall 7: Materialized Views With No Refresh Strategy

**What goes wrong:**
Materialized views are created to precompute expensive aggregates (e.g., lead count by stage, score distribution histogram). They are refreshed manually during development. In production, no automated refresh is wired up. The dashboard shows data from the day the view was last manually refreshed. Users notice numbers that don't match the source tables. Dashboard credibility is lost.

**Why it happens:**
`REFRESH MATERIALIZED VIEW` works locally. Deploying the refresh scheduler (pg_cron, Edge Function, or cron job) is a separate infrastructure task that gets deprioritized.

**How to avoid:**
- Treat refresh scheduling as part of the materialized view definition — ship them together, never separately.
- Use pg_cron for simple periodic refreshes: `SELECT cron.schedule('refresh-lead-stats', '*/15 * * * *', 'REFRESH MATERIALIZED VIEW CONCURRENTLY lead_stats_mv;')`.
- Use `CONCURRENTLY` on refresh to avoid locking the view during refresh (requires a unique index on the materialized view).
- Supabase does not support realtime subscriptions on materialized views — if the dashboard requires live updates, materialized views are the wrong tool; use direct table queries with proper indexes instead.
- Display a "Last updated: X minutes ago" timestamp sourced from the materialized view's refresh metadata.

**Warning signs:**
- Dashboard aggregate numbers are static for hours while the underlying tables are actively updated.
- No `pg_cron` jobs exist in the database for view refresh.
- `REFRESH MATERIALIZED VIEW` appears only in migration files, not in any scheduled job.

**Phase to address:** Data layer / infrastructure phase — before any materialized view is created.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Query production DB directly without read replica | No infrastructure setup needed | Dashboard queries impact production write latency at scale | MVP only if table is under 50k rows |
| Hardcode score weights in application code | Fast to ship | Requires deploy to adjust weights; sales cannot tune | Never for long-running product |
| Single global lead score (no per-segment scoring) | Simple to implement | Misranks leads from different product lines or geographies | Acceptable at MVP if single product |
| Compute scores on every dashboard page load | Always fresh data | 10x query cost at scale; production impact | Never — use scheduled computation |
| Use service role key server-side via Vercel env vars | Easy RLS bypass | Fine if truly server-side only; catastrophic if leaked | Acceptable only in server-side code |
| Skip `CONCURRENTLY` on materialized view refresh | Simpler setup | Locks view for all reads during refresh | Acceptable for low-traffic dashboards refreshing infrequently |

---

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Supabase Auth + dashboard admin view | Using service role key client-side to bypass RLS for admin | Server-side only: use SECURITY DEFINER functions or admin JWT claims |
| Supabase RPC for complex queries | Calling individual table endpoints in a loop | Define RPC functions that JOIN and aggregate in a single database round-trip |
| pg_cron for score refresh | Assuming it is enabled by default on all plans | Verify pg_cron is enabled in Database Extensions; it requires Pro plan or manual activation on some tiers |
| Supabase Realtime + materialized views | Subscribing to materialized view changes for live dashboard | Realtime does not support materialized views; subscribe to source tables or use polling |
| Next.js + Supabase server-side rendering | Fetching dashboard data in client components | Use Server Components or Route Handlers to keep database logic server-side; reduces network round-trips and hides credentials |

---

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Unindexed ORDER BY + LIMIT for lead list pagination | Fast at 100 rows, progressively slower | Add composite index on (score DESC, id) for the primary sort | ~10k rows |
| Aggregate COUNT(*) on full table without index | Dashboard header stat "Total Leads: X" takes 2s | Use partial indexes or materialized views for counts | ~50k rows |
| RLS policy on unindexed foreign key column | All dashboard queries slow for authenticated users | Index every column referenced in RLS policies | ~5k rows with complex policies |
| Fetching complete lead records to compute dashboard metrics in application code | Works fast; silently fetches entire table | Compute aggregates in SQL, not in JavaScript | ~1k rows |
| No connection pooling (PgBouncer/Supavisor) for dashboard tool | Dashboard works; unexplained 503s during peak traffic | Use Supabase's built-in Supavisor (port 6543) for connection pooling | ~50 concurrent dashboard users |

---

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| Service role key in client bundle | Full DB read/write access for anyone with DevTools | Server-side only; grep CI checks for `SERVICE_ROLE` in client files |
| RLS disabled on leads table | All leads visible to any authenticated user | Enable RLS on all tables; Supabase now sends email alerts when tables have RLS disabled |
| Dashboard exposes raw PII (email, phone) without access controls | Regulatory exposure (GDPR, CCPA); internal data leakage | Role-based access: restrict PII columns to specific user roles in the dashboard |
| No audit log for lead data access | Cannot detect or investigate data exfiltration | Enable Supabase Vault or add a simple access log trigger for sensitive queries |
| Exposing Supabase project URL + anon key in public repo | Low risk if RLS is correct, but invites probing | Move to environment variables; anon key exposure with weak RLS is a high-risk combination |

---

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| No score explanation / breakdown visible | Sales cannot act on the score; low trust | Show each scoring factor inline (why did this lead score 73?) |
| Showing stale "last updated" data with no timestamp | Users act on outdated scores; missed opportunities | Display `Score last updated: 2 hours ago` on every lead row |
| Single dashboard for all use cases (daily ops + weekly reports + management view) | Overwhelms users; wrong metrics for each job | Separate views: "Today's hot leads" vs "Weekly pipeline health" vs "Monthly score trends" |
| No sort/filter by score change | Users cannot spot leads that recently became hot | Add "Score change (7d)" column with delta indicator |
| Pagination without cursor-based approach on large sorted datasets | Offset pagination degrades at high page numbers | Use cursor-based pagination (id + score cursor) for lead list over 10k rows |

---

## "Looks Done But Isn't" Checklist

- [ ] **Score computation:** Score updates on new events — verify it also decays on inactivity, not just increases on activity.
- [ ] **Materialized views:** View shows correct data — verify a refresh job is scheduled and running in production (not just local).
- [ ] **RLS policies:** Policies exist — verify they have supporting indexes (check Supabase Performance Advisor for RLS warnings).
- [ ] **Read replica routing:** Dashboard uses read replica — verify the Supabase client is pointed at the read replica URL for dashboard queries specifically.
- [ ] **Service role key:** Dashboard can see all leads — verify the key is not accessible in any client-side bundle (check browser DevTools > Sources).
- [ ] **Lead score formula:** Sales team reviewed the formula — verify they can explain why a specific lead scores high; if not, it's not adopted.
- [ ] **N+1 queries:** Dashboard loads fast in development — verify network tab in production against a realistic dataset (500+ leads, not 5).

---

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Production slowdown from dashboard queries | MEDIUM | Add read replica routing (same day); add materialized views for heaviest aggregates (1-2 days) |
| N+1 query problem found post-launch | LOW | Consolidate queries into RPC functions; no schema changes needed |
| Service role key leaked in frontend | HIGH | Rotate key immediately in Supabase dashboard; audit logs for unauthorized access; add server-side access layer |
| Lead scores trusted by no one | MEDIUM | Rebuild formula with sales input; retroactively validate against historical closed deals; add score breakdown UI |
| Materialized views showing stale data | LOW | Add pg_cron refresh job; add `CONCURRENTLY` flag; add last-updated timestamp to dashboard |
| Over-complex scoring formula | MEDIUM | Simplify to 5-7 factors; requires sales alignment meeting + formula rebuild + recomputation of all scores |

---

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Analytical queries degrading production | Phase 1: Data access layer setup | Confirm read replica is used for all dashboard queries; benchmark with realistic data volume |
| N+1 query pattern | Phase 2: Dashboard UI architecture | Code review gate: no per-row individual queries; all page data loads in ≤3 queries |
| RLS full-table scans | Phase 1: Schema and access layer | Run Supabase Performance Advisor after schema finalized; zero RLS warnings before shipping |
| Service role key in client | Phase 1: Auth and security setup | CI check: grep for service_role in `src/`, `components/`, `pages/` — zero matches required |
| Lead score staleness without decay | Phase 1: Score formula design | Decay formula specified in writing + unit tested before any frontend work begins |
| Overly complex scoring formula | Pre-build: Formula alignment with sales | Sales team sign-off document + retroactive validation on 20 historical closed deals |
| Materialized views with no refresh | Phase 2: Data infrastructure | pg_cron jobs listed in schema migration; integration test verifies refresh fires |

---

## Sources

- [Supabase RLS Performance and Best Practices](https://supabase.com/docs/guides/troubleshooting/rls-performance-and-best-practices-Z5Jjwv) — official, HIGH confidence
- [Supabase Query Optimization](https://supabase.com/docs/guides/database/query-optimization) — official, HIGH confidence
- [Supabase Performance Tuning](https://supabase.com/docs/guides/platform/performance) — official, HIGH confidence
- [Supabase Read Replicas](https://supabase.com/docs/guides/platform/read-replicas) — official, HIGH confidence
- [Case Study: 61 Queries to 1 on a Supabase Dashboard](https://medium.com/@maximedalessandro/case-study-how-our-ai-cut-our-supabase-dashboard-queries-from-61-to-1-043ef525fd5c) — MEDIUM confidence (community post-mortem)
- [How to Secure Your Supabase Service Role Key](https://chat2db.ai/resources/blog/secure-supabase-role-key) — MEDIUM confidence
- [Supabase Security Retro 2025](https://supabase.com/blog/supabase-security-2025-retro) — official, HIGH confidence
- [Optimizing Supabase with Materialized Views](https://dev.to/kovidr/optimize-read-performance-in-supabase-with-postgres-materialized-views-12k5) — MEDIUM confidence
- [Common Lead Scoring Mistakes](https://www.reform.app/blog/common-lead-scoring-mistakes-and-fixes) — MEDIUM confidence
- [Common Problems with Lead Scoring](https://www.passagetechnology.com/passage-technology-blog/common-problems-with-lead-scoring-and-how-to-fix-them) — MEDIUM confidence
- [B2B Lead Scoring Mistakes](https://vereigenmedia.com/how-to-avoid-the-most-common-b2b-lead-scoring-mistakes/) — MEDIUM confidence
- [Data Freshness vs Latency](https://tacnode.io/post/data-freshness-vs-latency) — MEDIUM confidence
- [OLTP vs OLAP and dashboard impact](https://clickhouse.com/resources/engineering/oltp-vs-olap) — HIGH confidence

---
*Pitfalls research for: Internal lead scoring dashboard on Supabase*
*Researched: 2026-03-29*
