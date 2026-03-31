# Feature Research

**Domain:** Internal lead scoring dashboard — B2B automation services company
**Researched:** 2026-03-29
**Confidence:** MEDIUM-HIGH (WebSearch verified across multiple sources; no proprietary analytics tools consulted)

---

## Context: Existing Data Sources

The dashboard consumes four live tables:

| Table | Key Fields | Scoring Relevance |
|-------|-----------|-------------------|
| `quiz_leads` | score, tier, answers, UTM columns | Primary lead score source |
| `audit_submissions` | industry, team_size, pain_points, UTM | Firmographic fit signals |
| `pdf_leads` | resource (which PDF), UTM | Top-of-funnel engagement signal |
| `email_queue` | sequence status, UTM | Nurture engagement signal |

All tables share UTM columns — this enables first-touch / last-touch attribution cross-referenced to lead quality.

---

## Lead Scoring Formula Patterns

### Standard B2B Formula Structure

Modern B2B scoring uses a **composite point model** on a 0–100 scale, combining two buckets:

```
Total Score = Fit Score (explicit) + Engagement Score (implicit)
```

**Fit Score (Firmographic/Demographic) — explicit data**

| Signal | Points |
|--------|--------|
| Industry matches ICP | +15 |
| Team size in target range (e.g., 10–200) | +10 to +20 |
| Decision-maker title (owner, director, C-suite) | +10 to +20 |
| Pain points align with service offering | +10 per match |
| Non-target industry | 0 |
| Disqualified industry (no budget signals) | −10 |

**Engagement Score (Behavioral) — implicit data**

| Signal | Points |
|--------|--------|
| Completed quiz (any) | +15 |
| High quiz score (top tier) | +20 |
| Submitted audit request | +30 |
| Downloaded PDF resource | +10 |
| Opened email (per open) | +2 |
| Clicked email link | +5 |
| Replied to email | +20 |
| Bounced email | −25 to −100 |
| Unsubscribed | −50 |

**Score Decay:** Scores degrade over time without fresh signals (e.g., −5 pts/week after 30 days of no activity). Critical for B2B services with longer sales cycles.

### Tier Thresholds (Standard B2B)

| Tier | Score Range | Label | Action |
|------|------------|-------|--------|
| Hot | 70–100 | SQL — Sales Qualified | Immediate follow-up |
| Warm | 40–69 | MQL — Marketing Qualified | Nurture, monitor |
| Cold | 10–39 | Prospect | Long-tail nurture |
| Disqualified | < 10 or negative | Discard | Remove from queue |

The existing `quiz_leads.tier` column likely already encodes a simplified version of this. The dashboard must reconcile quiz tier (quiz-only signal) with a composite tier (all signals combined).

---

## Feature Landscape

### Table Stakes (Internal Users Expect These)

Features internal sales/ops teams assume exist. Missing these = dashboard feels broken.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Lead list table with sort/filter | Every CRM has this; ops team needs to scan all leads | LOW | Sort by score, tier, date, source. Filter by tier/source/industry |
| Lead detail view | Need to see all signals for a single lead before calling | LOW | Quiz answers, audit pain points, email status, UTM source |
| Score breakdown per lead | "Why is this lead scored 74?" must be answerable | MEDIUM | Show fit + engagement components contributing to total |
| Tier badges (Hot/Warm/Cold) | Visual triage — ops needs quick visual scanning | LOW | Derives from composite score; must reconcile quiz tier vs composite |
| Lead count by tier summary | Executive summary at a glance | LOW | Simple stat cards: X Hot, Y Warm, Z Cold |
| UTM source breakdown | "Where are our best leads coming from?" | LOW-MEDIUM | Group by utm_source, utm_campaign; show avg score per source |
| Date range filtering | "Show me leads from last 30 days" | LOW | Standard date picker on list and summary views |
| CSV export | Sales rep needs a list to work from offline | LOW | Export filtered view with all relevant columns |
| Search by name/email | Find a specific lead quickly | LOW | Simple string search on list |
| Email sequence status per lead | Know where in nurture funnel each lead sits | LOW | Read from email_queue; show sequence name + step number |

### Differentiators (Competitive Advantage for Internal Use)

Features that make this dashboard genuinely useful vs a basic spreadsheet or raw DB view.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Composite score (multi-table) | Merges quiz + audit + pdf + email into one score; far more accurate than quiz alone | MEDIUM | Requires score computation layer joining all four tables |
| Score history / trend line | Shows if a lead is heating up or cooling down over time | HIGH | Requires timestamped score snapshots; high value for timing outreach |
| UTM-to-quality correlation | Shows which campaigns produce HIGH-tier leads, not just volume | MEDIUM | utm_source × avg composite score; informs marketing spend |
| Pain point clustering | Groups audit_submissions pain_points to surface common needs | MEDIUM | Simple frequency count on pain_points JSONB/array column |
| Lead velocity metric | How many hot leads generated per week / trend | MEDIUM | Rolling count with sparkline; reveals funnel health |
| Cohort view by source | "Leads from Google Ads in Jan 2026 — where are they now?" | HIGH | Requires cohort slicing; defer to v2 |
| Score decay visualization | Shows leads losing score due to inactivity — triggers re-engagement | HIGH | Requires decay algorithm + visual aging indicator |
| One-click CRM push | Export a hot lead record directly into HubSpot/Notion/Sheets | MEDIUM | Integration point; scope depends on existing CRM |

### Anti-Features (Commonly Requested, Often Problematic)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Real-time score updates (WebSockets) | "I want live updates" | Complexity without value — leads don't change score every second | Refresh on page load; auto-refresh every 5 min if needed |
| AI-generated outreach suggestions per lead | "AI writes my email for me" | Prompt engineering, LLM costs, hallucination risk — out of scope for a scoring dashboard | Link to email sequence tool; don't build in-dashboard AI writing |
| Full CRM replacement | "Can we add deal stages, notes, tasks?" | Scope creep — this is a READ dashboard over existing data, not a new CRM | Build read/score view; integrate with existing CRM for write operations |
| Complex role-based permissions | "Sales rep A should only see their leads" | Unnecessary for small internal team; adds auth complexity | Single authenticated internal route; revisit if team grows |
| Predictive ML scoring model | "Can we use machine learning?" | Requires labeled training data (won/lost outcomes) you don't have yet; over-engineered for current volume | Use rule-based weighted scoring now; revisit after 6 months of outcome data |

---

## Feature Dependencies

```
Lead Detail View
    └──requires──> Composite Score Computation
                       └──requires──> Multi-table JOIN (quiz + audit + pdf + email)

UTM-to-Quality Correlation
    └──requires──> Composite Score Computation
    └──requires──> UTM normalization (all 4 tables have UTM cols)

Score History / Trend
    └──requires──> Score Snapshot Storage (new table or audit log)
    └──enhances──> Lead Detail View

Pain Point Clustering
    └──requires──> audit_submissions.pain_points parseable field

Tier Badges
    └──requires──> Composite Score Computation (or uses quiz_leads.tier directly as fallback)

CSV Export
    └──requires──> Lead List Table (filtered view)
```

### Dependency Notes

- **Composite score is the foundation:** Six other features depend on it. Build the scoring computation layer before any visualization.
- **Score history requires schema addition:** You need a `lead_score_snapshots` table or similar. Cannot be derived retroactively from current data.
- **Pain point clustering depends on data shape:** `audit_submissions.pain_points` must be inspectable (array, JSONB, or text). Check column type before building.
- **UTM normalization is non-trivial:** UTM values are often inconsistent (`google` vs `Google` vs `google-ads`). Needs a normalization step.

---

## MVP Definition

### Launch With (v1)

Minimum viable product — what's needed for the ops team to replace their current spreadsheet workflow.

- [ ] **Lead list table** — sortable by score/tier/date, filterable by tier and source; replaces manual spreadsheet triage
- [ ] **Composite score computation** — joins quiz + audit + pdf + email data into a single 0-100 score per lead
- [ ] **Tier assignment** — Hot/Warm/Cold badges derived from composite score; single source of truth
- [ ] **Lead detail view** — full signal breakdown: quiz answers, audit fields, email sequence status, UTM attribution
- [ ] **UTM source summary** — table or chart showing avg score and lead count per utm_source/utm_campaign
- [ ] **Date range filter** — filter all views by lead creation date
- [ ] **CSV export** — filtered list export for offline sales work

### Add After Validation (v1.x)

Features to add once team is using v1 and feedback confirms value.

- [ ] **Pain point clustering** — surface top pain points from audit submissions; trigger: team asks "what are leads struggling with?"
- [ ] **Lead velocity metric** — hot leads per week with trend; trigger: team wants to track funnel health over time
- [ ] **Score decay indicator** — visual aging on warm leads going cold; trigger: team complains about stale leads

### Future Consideration (v2+)

Features to defer until outcome data exists or team scales.

- [ ] **Score history / trend line** — requires `lead_score_snapshots` table; defer until schema extension is prioritized
- [ ] **Cohort view by source** — high analytical value but HIGH complexity; defer until team has regular analytical rhythm
- [ ] **CRM push integration** — depends on which CRM the team standardizes on; don't build until CRM decision is made
- [ ] **Predictive ML scoring** — needs 6+ months of win/loss outcome labels before any model is trainable

---

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Lead list table (sort/filter) | HIGH | LOW | P1 |
| Composite score computation | HIGH | MEDIUM | P1 |
| Tier badges (Hot/Warm/Cold) | HIGH | LOW | P1 |
| Lead detail view | HIGH | LOW | P1 |
| UTM source quality breakdown | HIGH | MEDIUM | P1 |
| Date range filter | MEDIUM | LOW | P1 |
| CSV export | MEDIUM | LOW | P1 |
| Pain point clustering | MEDIUM | MEDIUM | P2 |
| Lead velocity metric | MEDIUM | MEDIUM | P2 |
| Score decay indicator | MEDIUM | HIGH | P2 |
| Score history / trend line | HIGH | HIGH | P3 |
| Cohort view by source | MEDIUM | HIGH | P3 |
| CRM push integration | HIGH | HIGH | P3 |

**Priority key:**
- P1: Must have for launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

---

## Dashboard Widget Types (Reference)

Based on standard internal sales dashboard patterns:

| Widget Type | Use Case in This Dashboard | Table |
|-------------|---------------------------|-------|
| Stat card (KPI) | Total leads, hot count, warm count, avg score | All |
| Table with sort/filter | Lead list — primary interaction surface | All joined |
| Bar chart | Leads by utm_source, leads by tier | quiz_leads + UTM |
| Heatmap or grouped bar | Score distribution histogram | Computed score |
| Funnel chart | quiz → audit → email sequence conversion | All |
| Sparkline | Lead velocity trend (hot leads/week) | quiz_leads |
| Detail panel / drawer | Single lead signal breakdown | All |
| Tag/badge | Tier label, sequence status | quiz_leads, email_queue |

---

## Sources

- [B2B Lead Scoring: Belkins' Formula & Criteria Examples](https://belkins.io/blog/lead-scoring) — HIGH confidence, practitioner detail on scoring formula
- [How CRM Lead Scoring Works in B2B Sales — instantly.ai](https://instantly.ai/blog/how-crm-scores-b2b-leads/) — HIGH confidence, specific point values and tier thresholds
- [Lead Scoring: Complete Guide — outfunnel.com](https://outfunnel.com/lead-scoring/) — referenced but content not fully accessible
- [B2B Lead Scoring — martal.ca](https://martal.ca/b2b-lead-scoring-lb/) — MEDIUM confidence, general practices
- [CRM Dashboards: Real-Time KPIs, Pipeline Views — monday.com](https://monday.com/blog/crm-and-sales/crm-dashboards/) — MEDIUM confidence, widget patterns
- [Sales Dashboard Templates — monday.com](https://monday.com/blog/crm-and-sales/sales-dashboard-templates/) — MEDIUM confidence, widget inventory
- [2026 B2B Lead Prioritization Playbook — saleswingsapp.com](https://www.saleswingsapp.com/inside-sales/how-to-prioritize-high-volume-b2b-leads-2026-playbook/) — MEDIUM confidence, current year patterns

---

*Feature research for: Internal lead scoring dashboard — B2B automation services*
*Researched: 2026-03-29*
