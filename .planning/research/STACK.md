# Stack Research

**Domain:** Internal lead scoring dashboard (Next.js, Supabase)
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

Research scope: charting library, data table component, auth for single-user internal tool.

---

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| shadcn/ui Chart (Recharts) | Recharts ^3.8.1 | Lead scoring charts, KPI cards, trend lines | shadcn/ui chart components are built on Recharts v3. Since the project already uses shadcn/ui patterns and Tailwind 4, this avoids adding a second design system. Components are copy-pasted (no abstraction lock-in), and Recharts v3 resolves the previous infinite render loop bugs from v2. |
| `@tanstack/react-table` | ^8.21.3 | Sortable/filterable lead data table | Headless — renders nothing itself, so Tailwind + shadcn Table primitives style it exactly. All features (sorting, filtering, pagination, row selection) are free with no enterprise tier. v9 is in alpha; v8 is stable. shadcn/ui's official Data Table guide explicitly targets this library. |
| Supabase Auth (`@supabase/ssr`) | already locked ^0.9.0 | Single-user session auth via existing Supabase project | The Supabase project already exists. Using Supabase Auth avoids introducing a second auth system. One hard-coded admin user is created in the Supabase dashboard. Middleware uses `supabase.auth.getUser()` (never `getSession()`) to protect all dashboard routes. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `shadcn/ui` components (via `npx shadcn@latest add`) | latest CLI | Table, Badge, Button, Select, Input, Dropdown primitives | Add individual components as needed — they integrate directly with Tailwind 4 and generate into your codebase |
| `date-fns` | ^4.x | Date formatting for lead timestamps | When displaying/comparing created_at columns from Supabase |
| `nuqs` | ^2.x | URL-based search params for table filters | Lets filter/sort/page state live in the URL so users can share filtered views; works with Next.js App Router |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| shadcn CLI (`npx shadcn@latest`) | Scaffold components into project | Generates into `components/ui/` — run per-component, not globally |
| Supabase CLI | Type generation from existing schema | Run `supabase gen types typescript --local` to get typed table rows for leads |

---

## Installation

```bash
# Charting — Recharts (shadcn chart is copy-paste, Recharts is its peer dep)
npm install recharts

# Data table
npm install @tanstack/react-table

# URL state for table filters (optional but recommended)
npm install nuqs

# Date formatting
npm install date-fns

# shadcn components (run individually as needed)
npx shadcn@latest add table
npx shadcn@latest add badge
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add select
npx shadcn@latest add dropdown-menu
npx shadcn@latest add card
npx shadcn@latest add chart
```

---

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| shadcn/ui Chart (Recharts) | Tremor | If you need a complete pre-built dashboard UI in hours with no customization — Tremor ships KPI cards, metric blocks, all wired up. Overkill here since shadcn/ui is already in use. |
| shadcn/ui Chart (Recharts) | Chart.js / react-chartjs-2 | Chart.js is fine but requires a separate design token system; no natural fit with Tailwind CSS variables. Recharts is React-native (no canvas wrapper), better for RSC boundaries. |
| shadcn/ui Chart (Recharts) | Victory | Less maintained, smaller community, no benefit over Recharts for this use case. |
| `@tanstack/react-table` v8 | AG Grid Community | AG Grid has better virtual scrolling for 100k+ rows and built-in Excel export. Not needed for lead tables (typically < 10k rows). TanStack is headless so it fits Tailwind perfectly; AG Grid imposes its own CSS. |
| `@tanstack/react-table` v8 | `@tanstack/react-table` v9 alpha | v9 is at alpha.19 as of March 2026. Not stable. Use v8.21.3 which is the current stable release. |
| Supabase Auth (existing) | NextAuth.js / Auth.js | Would add a second auth system on top of Supabase. No benefit for a single-user internal tool. |
| Supabase Auth (existing) | HTTP Basic Auth middleware | HTTP Basic Auth (env var + middleware) is the simplest possible approach, but stores credentials in plaintext env vars with no session management. Acceptable for staging, not for production dashboards with real lead data. |

---

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| AG Grid (enterprise) | Paid license required for features like row grouping/pivoting. Not justified for an internal lead dashboard. Community edition lacks key features. | `@tanstack/react-table` v8 |
| `@tanstack/react-table` v9 | Alpha stage (v9.0.0-alpha.19 as of March 2026). No stable release date. Breaking API changes expected. | `@tanstack/react-table` ^8.21.3 |
| Recharts v2 | v2 had known infinite render loop bugs (`SetTooltipEntrySettings`). shadcn/ui has migrated to v3. Starting on v2 means migrating immediately. | Recharts ^3.8.1 |
| Tremor (the UI library) | Tremor migrated to a "raw" components model and is no longer a standalone dashboard framework. Its value proposition collapsed. The community moved to shadcn/ui charts. | shadcn/ui Chart |
| `next-auth` / Auth.js | Adds complexity (session DB or JWT config, adapter setup) with no benefit for a single pre-known admin user. Your Supabase project already has auth. | Supabase Auth via `@supabase/ssr` |
| `react-chartjs-2` / Chart.js | Renders to `<canvas>`. No native React component model. Harder to integrate with Tailwind CSS variables for theming. Accessibility inferior to SVG-based Recharts. | Recharts via shadcn/ui Chart |
| Custom HTTP Basic Auth middleware | Credentials in env vars, no session, no CSRF protection. Acceptable for zero-stakes staging, not for a tool viewing real customer lead data. | Supabase Auth |

---

## Stack Patterns by Variant

**For the lead data table (main view):**
- Use `@tanstack/react-table` v8 with `getCoreRowModel`, `getSortedRowModel`, `getFilteredRowModel`, `getPaginationRowModel`
- Render with shadcn `<Table>` primitives (do not use AG Grid or a pre-styled grid)
- Column definitions are typed from Supabase-generated types

**For score distribution charts:**
- Use shadcn `<ChartContainer>` wrapping a Recharts `<BarChart>` or `<AreaChart>`
- CSS variables (`--chart-1` through `--chart-5`) provide theme-consistent colors
- Keep charts in Server Components where possible; move to `'use client'` only for interactive charts

**For auth (single internal user):**
- Create one user in Supabase Dashboard (Auth > Users)
- Protect all `/dashboard/*` routes in `middleware.ts` using `supabase.auth.getUser()`
- Login page at `/login` with email/password form calling `supabase.auth.signInWithPassword()`
- No OAuth, no magic links, no role system needed

**If leads table grows beyond ~5,000 rows:**
- Add server-side pagination: pass `page` and `pageSize` from URL state (nuqs) to Supabase `.range()` queries
- Keep `@tanstack/react-table` but disable `getPaginationRowModel` in favour of manual controlled state

---

## Version Compatibility

| Package | Compatible With | Notes |
|---------|-----------------|-------|
| `recharts@^3.8.1` | `react@19.x` | Recharts v3 supports React 19. v2 had React 18 dependency issues. |
| `@tanstack/react-table@^8.21.3` | `react@19.x` | Confirmed compatible. v9 alpha is not production-ready. |
| `shadcn/ui` chart components | `recharts@^3` | shadcn/ui officially migrated charts to Recharts v3 in 2025. Use Recharts v3, not v2. |
| `nuqs@^2.x` | `next@16.x`, App Router | nuqs v2 supports Next.js 15+ App Router. Compatible with Next.js 16. |
| `@supabase/ssr@^0.9.0` | `next@16.x` | Already in use. Middleware pattern with `getUser()` works in Next.js 16 middleware. |

---

## Sources

- [shadcn/ui Chart documentation](https://ui.shadcn.com/docs/components/radix/chart) — Recharts v3 usage, CSS variable theming (HIGH confidence)
- [shadcn/ui Data Table documentation](https://ui.shadcn.com/docs/components/radix/data-table) — TanStack Table v8 integration pattern (HIGH confidence)
- [Recharts v3 migration guide](https://github.com/recharts/recharts/wiki/3.0-migration-guide) — v3 breaking changes vs v2 (HIGH confidence)
- [TanStack Table v8 releases](https://github.com/TanStack/table/releases) — v8.21.3 stable, v9 in alpha (HIGH confidence)
- [TanStack Table v9 roadmap discussion](https://github.com/TanStack/table/discussions/5270) — confirms v9 not stable (HIGH confidence)
- [Supabase SSR Auth for Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs) — `getUser()` over `getSession()` in middleware (HIGH confidence)
- [WebSearch: recharts latest version 2026](https://github.com/recharts/recharts/releases) — v3.8.1 confirmed current (MEDIUM confidence, npm registry)
- [WebSearch: TanStack Table comparison 2025](https://www.simple-table.com/blog/tanstack-table-vs-ag-grid-comparison) — TanStack vs AG Grid for internal tools (MEDIUM confidence)
- [WebSearch: shadcn charts Recharts v3 issue #7669](https://github.com/shadcn-ui/ui/issues/7669) — shadcn migration to Recharts v3 timeline (MEDIUM confidence)

---
*Stack research for: Lead scoring dashboard (internal tool)*
*Researched: 2026-03-29*
