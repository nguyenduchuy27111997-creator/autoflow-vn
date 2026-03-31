---
phase: 14-pixel-foundation-consent
plan: "02"
subsystem: analytics
tags: [facebook-pixel, meta-pixel, viewcontent, tracking, consent, client-component]

# Dependency graph
requires:
  - phase: 14-pixel-foundation-consent/14-01
    provides: FacebookPixel component and consent-gated window.fbq setup in layout
provides:
  - src/lib/fbpixel.ts — fbpixelEvent, generateEventId, getCookie helpers
  - PixelViewContent client component for Server Component pages
  - ViewContent events on all /dich-vu/* and /ket-qua/* pages (8 total)
affects:
  - future CAPI phases (generateEventId used for deduplication)
  - any page needing additional Pixel events (Lead, CompleteRegistration, etc.)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "PixelViewContent null-rendering client component pattern for Server Component pages with metadata"
    - "fbpixelEvent no-op guard: typeof window.fbq !== 'function' prevents errors when Pixel absent"
    - "ViewContent on mount via useEffect with empty deps array"

key-files:
  created:
    - src/lib/fbpixel.ts
    - src/components/analytics/PixelViewContent.tsx
  modified:
    - src/app/dich-vu/bat-dong-san/page.tsx
    - src/app/dich-vu/e-commerce/page.tsx
    - src/app/dich-vu/fnb/page.tsx
    - src/app/dich-vu/giao-duc/page.tsx
    - src/app/ket-qua/bat-dong-san/page.tsx
    - src/app/ket-qua/e-commerce/page.tsx
    - src/app/ket-qua/fnb/page.tsx
    - src/app/ket-qua/giao-duc/page.tsx

key-decisions:
  - "ket-qua pages use PixelViewContent client component instead of converting to 'use client' — preserves metadata export which cannot coexist with 'use client' in Next.js"
  - "dich-vu pages use inline useEffect + fbpixelEvent — already 'use client', no wrapper needed"
  - "No eventId for ViewContent — client-only tracking, CAPI deduplication not needed for this event"

patterns-established:
  - "Server Component pages needing client-side Pixel events: use null-rendering PixelViewContent component"
  - "Client Component pages needing Pixel events: inline useEffect(() => fbpixelEvent(...), [])"
  - "fbpixelEvent always safe to call — window.fbq guard makes it a no-op when consent denied"

requirements-completed: [PIX-03, PIX-04]

# Metrics
duration: 10min
completed: 2026-03-29
---

# Phase 14 Plan 02: ViewContent Pixel Tracking Summary

**fbpixel.ts helper library + ViewContent on all 8 service/result pages, with PixelViewContent client component for Server Component metadata pages**

## Performance

- **Duration:** ~10 min
- **Started:** 2026-03-29T00:00:00Z
- **Completed:** 2026-03-29T00:10:00Z
- **Tasks:** 2
- **Files modified:** 10 (2 created, 8 modified)

## Accomplishments
- Created `src/lib/fbpixel.ts` with three named exports: `fbpixelEvent`, `generateEventId`, `getCookie`
- Added ViewContent tracking on mount to all 4 `/dich-vu/*` pages via inline useEffect
- Added ViewContent tracking to all 4 `/ket-qua/*` pages via reusable `PixelViewContent` null-rendering client component
- Build passes cleanly with no TypeScript errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Create src/lib/fbpixel.ts** - `16351ac` (feat)
2. **Task 2: Add ViewContent tracking to all 8 pages** - `d52cdcf` (feat)

**Plan metadata:** `[pending]` (docs: complete plan)

## Files Created/Modified
- `src/lib/fbpixel.ts` — Client-side Pixel helpers: fbpixelEvent (no-op guard), generateEventId (UUID), getCookie (document.cookie reader)
- `src/components/analytics/PixelViewContent.tsx` — Null-rendering client component that fires ViewContent on mount; used by Server Component ket-qua pages
- `src/app/dich-vu/bat-dong-san/page.tsx` — ViewContent 'Dịch vụ Bất động sản'
- `src/app/dich-vu/e-commerce/page.tsx` — ViewContent 'Dịch vụ E-commerce'
- `src/app/dich-vu/fnb/page.tsx` — ViewContent 'Dịch vụ F&B'
- `src/app/dich-vu/giao-duc/page.tsx` — ViewContent 'Dịch vụ Giáo dục'
- `src/app/ket-qua/bat-dong-san/page.tsx` — PixelViewContent 'Kết quả Bất động sản'
- `src/app/ket-qua/e-commerce/page.tsx` — PixelViewContent 'Kết quả E-commerce'
- `src/app/ket-qua/fnb/page.tsx` — PixelViewContent 'Kết quả F&B'
- `src/app/ket-qua/giao-duc/page.tsx` — PixelViewContent 'Kết quả Giáo dục'

## Decisions Made
- **ket-qua pages: PixelViewContent component instead of 'use client' conversion.** The `/ket-qua/*` pages export `metadata` (Next.js static metadata API). A file with both `'use client'` and `export const metadata` would cause a Next.js build error. Solution: keep the page as Server Component, embed a tiny null-rendering `PixelViewContent` client component inside it. The client component fires the useEffect on mount.
- **dich-vu pages: inline useEffect pattern.** Already `'use client'` with `useState`, so adding `useEffect` directly is simpler and avoids extra component indirection.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Created PixelViewContent component instead of adding 'use client' to ket-qua pages**
- **Found during:** Task 2 (ViewContent tracking on ket-qua pages)
- **Issue:** Plan said "add 'use client' directive at the very top" for Server Component pages, but ket-qua pages have `export const metadata` which is incompatible with 'use client' in Next.js — would cause build failure
- **Fix:** Created `src/components/analytics/PixelViewContent.tsx` as a null-rendering client component; Server Component pages render it as a child, preserving metadata export
- **Files modified:** src/components/analytics/PixelViewContent.tsx (created), all 4 ket-qua pages (import + render PixelViewContent)
- **Verification:** Build passes cleanly; all ket-qua pages still have metadata exports; ViewContent fires on client mount
- **Committed in:** d52cdcf (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (Rule 1 - architectural correctness within task scope)
**Impact on plan:** Fix necessary to avoid Next.js build error. Outcome is equivalent: ViewContent fires on mount for all 8 pages. ket-qua pages retain SEO metadata.

## Issues Encountered
- None beyond the metadata/client directive incompatibility handled above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- `fbpixelEvent` and `generateEventId` are ready for use in Plan 03 (Lead event tracking on form submissions)
- `getCookie` available for reading `_fbp`/`_fbc` before sending to CAPI
- `PixelViewContent` pattern available for any future Server Component page needing Pixel events
- All consent-gated: events only fire when `window.fbq` is present (consent granted, Pixel loaded)

---
*Phase: 14-pixel-foundation-consent*
*Completed: 2026-03-29*
