---
phase: 260401-pcw
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - src/components/Hero.tsx
  - src/components/PainPoints.tsx
  - src/components/Integrations.tsx
  - src/components/Process.tsx
  - src/components/SocialProof.tsx
  - src/app/layout.tsx
  - src/app/globals.css
  - package.json
autonomous: true
requirements: [PERF-01, PERF-02, PERF-03, PERF-04, PERF-05, PERF-06, PERF-07]

must_haves:
  truths:
    - "Hero video no longer triggers full preload on page load (preload=metadata)"
    - "PainPoints, Integrations, and Process components are pure server components with no 'use client'"
    - "SocialProof only queries Supabase once per browser session, not on every page visit"
    - "vanilla-cookieconsent is removed from package.json and node_modules"
    - "Be_Vietnam_Pro weight 300 is no longer loaded in layout.tsx"
    - "Users with prefers-reduced-motion see no keyframe animations and no invisible opacity-0 elements"
    - "html scroll-behavior: smooth is wrapped in a motion-safe media query"
  artifacts:
    - path: "src/components/Hero.tsx"
      provides: "Video with preload=metadata + motion guard on animate-fade-up elements"
    - path: "src/app/globals.css"
      provides: "All keyframes wrapped in @media (prefers-reduced-motion: no-preference), scroll-behavior wrapped in motion media query, opacity-1 fallback for reduced-motion"
    - path: "src/components/SocialProof.tsx"
      provides: "sessionStorage cache so Supabase query fires at most once per session"
    - path: "src/app/layout.tsx"
      provides: "weight 300 removed from Be_Vietnam_Pro"
    - path: "package.json"
      provides: "vanilla-cookieconsent removed from dependencies"
  key_links:
    - from: "src/app/globals.css"
      to: "opacity-0 elements in Hero.tsx"
      via: "@media (prefers-reduced-motion: reduce) sets opacity: 1 and removes animation"
      pattern: "prefers-reduced-motion.*reduce"
    - from: "src/components/SocialProof.tsx"
      to: "supabase v_recent_activity"
      via: "sessionStorage check before fetch — skip if cached key exists"
      pattern: "sessionStorage"
---

<objective>
Fix all identified website performance issues: video preload, unnecessary use client directives, SocialProof query deduplication, unused dependency removal, font weight cleanup, and prefers-reduced-motion accessibility compliance.

Purpose: Reduce unnecessary network bytes on page load, improve accessibility for reduced-motion users, and eliminate dead code.
Output: Leaner bundle, LCP-friendly video loading, motion-safe animations, single Supabase query per session.
</objective>

<execution_context>
@/Users/huynguyen/Desktop/autoflow-vn/.claude/get-shit-done/workflows/execute-plan.md
@/Users/huynguyen/Desktop/autoflow-vn/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/ROADMAP.md

Research confirmed findings (from planning context):
- Hero.tsx line 152: `preload="auto"` → change to `preload="metadata"`
- PainPoints.tsx, Integrations.tsx, Process.tsx: pure static JSX, no hooks, no browser APIs — safely remove "use client"
- SocialProof.tsx: fires Supabase query on every page; use sessionStorage to cache — skip fetch if key "sp_proof_cache" already exists
- layout.tsx: Be_Vietnam_Pro weight array includes "300" — remove it
- package.json: "vanilla-cookieconsent" is listed but never imported — remove
- globals.css: 4 keyframe animations (fade-up, fade-in, slide-in-right, count-up) + scroll-behavior need motion guards. CRITICAL: Hero uses opacity-0 class, so reduced-motion rule MUST set opacity:1 on those elements or they stay invisible forever
</context>

<tasks>

<task type="auto">
  <name>Task 1: Fix video preload, remove use client, clean font + dep</name>
  <files>
    src/components/Hero.tsx,
    src/components/PainPoints.tsx,
    src/components/Integrations.tsx,
    src/components/Process.tsx,
    src/app/layout.tsx,
    package.json
  </files>
  <action>
    1. **Hero.tsx** — line 152: change `preload="auto"` to `preload="metadata"`. No other changes.

    2. **PainPoints.tsx** — remove the `"use client";` directive at line 1. Verify the file has no hooks (useState, useEffect, useRef, etc.) and no browser APIs before removing. It is pure static JSX.

    3. **Integrations.tsx** — remove the `"use client";` directive at line 1. Same verification: pure static JSX, no hooks.

    4. **Process.tsx** — remove the `"use client";` directive at line 1. Pure static JSX.

    5. **layout.tsx** — in the `Be_Vietnam_Pro` font config (lines 15-20), remove `"300"` from the weight array. Result: `weight: ["400", "500", "600", "700"]`.

    6. **package.json** — remove the `"vanilla-cookieconsent": "^3.1.0"` entry from `dependencies`. Then run `npm uninstall vanilla-cookieconsent` via terminal.
  </action>
  <verify>
    <automated>cd /Users/huynguyen/Desktop/autoflow-vn/website && npm run build 2>&1 | tail -20</automated>
  </verify>
  <done>
    Build completes without errors. Hero.tsx has preload="metadata". PainPoints/Integrations/Process have no "use client". layout.tsx weight array has 4 entries (no 300). package.json has no vanilla-cookieconsent entry.
  </done>
</task>

<task type="auto">
  <name>Task 2: SocialProof sessionStorage cache + motion guards in CSS</name>
  <files>
    src/components/SocialProof.tsx,
    src/app/globals.css
  </files>
  <action>
    **SocialProof.tsx** — Add sessionStorage caching to the `fetchRecent` function so Supabase is only queried once per browser session:

    ```typescript
    async function fetchRecent() {
      // Return cached data if available (avoid re-querying on every page visit)
      const cached = sessionStorage.getItem("sp_proof_cache");
      if (cached) {
        try {
          const proofs: ProofItem[] = JSON.parse(cached);
          proofs.sort(() => Math.random() - 0.5);
          setItems(proofs);
          return;
        } catch {
          // Corrupted cache — fall through to fetch
          sessionStorage.removeItem("sp_proof_cache");
        }
      }

      const supabase = createClient();
      const { data } = await supabase
        .from("v_recent_activity")
        .select("name, action_type, created_at");

      if (!data) return;

      const actionMap: Record<string, string> = {
        quiz: "vừa làm quiz đánh giá",
        audit: "vừa đăng ký audit miễn phí",
        pdf: "vừa tải tài liệu",
      };

      const proofs: ProofItem[] = data.map((r) => ({
        name: maskName(r.name),
        action: actionMap[r.action_type] || "vừa tương tác",
        timeAgo: getTimeAgo(r.created_at),
      }));

      // Cache in sessionStorage — expires when tab closes
      sessionStorage.setItem("sp_proof_cache", JSON.stringify(proofs));

      proofs.sort(() => Math.random() - 0.5);
      setItems(proofs);
    }
    ```

    **globals.css** — Apply prefers-reduced-motion guards:

    1. Wrap `html { scroll-behavior: smooth; }` inside `@media (prefers-reduced-motion: no-preference)`:
    ```css
    @media (prefers-reduced-motion: no-preference) {
      html {
        scroll-behavior: smooth;
      }
    }
    ```

    2. Move ALL animation utility classes and keyframe definitions inside a motion-safe media query. Wrap the existing `@keyframes` blocks and `.animate-*` / `.delay-*` classes in:
    ```css
    @media (prefers-reduced-motion: no-preference) {
      @keyframes fade-up { ... }
      @keyframes fade-in { ... }
      @keyframes slide-in-right { ... }
      @keyframes pulse-dot { ... }
      @keyframes flow-line { ... }
      @keyframes count-up { ... }

      .animate-fade-up { animation: fade-up 0.6s ease-out forwards; }
      .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      .animate-slide-in-right { animation: slide-in-right 0.6s ease-out forwards; }

      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-400 { animation-delay: 400ms; }
      .delay-500 { animation-delay: 500ms; }
      .delay-600 { animation-delay: 600ms; }
      .delay-700 { animation-delay: 700ms; }
    }
    ```

    3. CRITICAL — Add a reduced-motion override that fixes invisible elements. Hero.tsx uses `opacity-0 animate-fade-up` on several elements. When animations are disabled, those elements would remain invisible. Fix by adding OUTSIDE the media query:
    ```css
    @media (prefers-reduced-motion: reduce) {
      .animate-fade-up,
      .animate-fade-in,
      .animate-slide-in-right {
        opacity: 1 !important;
        transform: none !important;
        animation: none !important;
      }
    }
    ```

    Keep `pulse-dot`, `flow-line`, and `count-up` keyframes inside the no-preference block only — they have no visibility concern (no opacity-0 initial state).
  </action>
  <verify>
    <automated>cd /Users/huynguyen/Desktop/autoflow-vn/website && npm run build 2>&1 | tail -20</automated>
  </verify>
  <done>
    Build completes without errors. globals.css has @media (prefers-reduced-motion: no-preference) blocks wrapping all keyframes and animation utilities. globals.css has a reduce block setting opacity:1 on animate-* classes. SocialProof.tsx checks sessionStorage before calling Supabase.
  </done>
</task>

</tasks>

<verification>
After both tasks:
1. `npm run build` exits 0 with no TypeScript or module errors
2. Grep confirms: `grep "preload" src/components/Hero.tsx` → returns `preload="metadata"`
3. Grep confirms: `grep -n '"use client"' src/components/PainPoints.tsx src/components/Integrations.tsx src/components/Process.tsx` → returns nothing
4. Grep confirms: `grep "300" src/app/layout.tsx` → returns nothing in weight array
5. Grep confirms: `grep "vanilla-cookieconsent" package.json` → returns nothing
6. Grep confirms: `grep "prefers-reduced-motion" src/app/globals.css` → returns 2+ matches
7. Grep confirms: `grep "sessionStorage" src/components/SocialProof.tsx` → returns matches
</verification>

<success_criteria>
- Hero video loads with preload="metadata" (no full video download on page load)
- Three static components have no "use client" directive (smaller JS bundle)
- SocialProof fires Supabase query at most once per browser session
- Be_Vietnam_Pro no longer requests the 300 weight font file
- vanilla-cookieconsent package removed
- Users with prefers-reduced-motion enabled see all page content (opacity:1 fallback) and no animations
- html scroll-behavior: smooth only applies when user has no motion preference
</success_criteria>

<output>
After completion, create `.planning/quick/260401-pcw-fix-all-website-performance-issues-video/260401-pcw-SUMMARY.md`
</output>
