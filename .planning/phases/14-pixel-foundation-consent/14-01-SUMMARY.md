---
phase: 14-pixel-foundation-consent
plan: "01"
subsystem: analytics
tags: [facebook-pixel, consent, privacy, next-script, localstorage, custom-events]

# Dependency graph
requires: []
provides:
  - Consent-gated FacebookPixel component that loads only after user grants consent
  - ConsentBanner dispatches window consent:granted event enabling same-session Pixel activation
  - FacebookPixel wired into root layout after GoogleAnalytics
affects: [any future Meta conversion event tracking, retargeting campaigns, Pixel event helpers]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Consent gate via localStorage check + window event listener pattern for deferred script loading"
    - "Custom window event (consent:granted) as decoupled bridge between consent UI and analytics components"

key-files:
  created:
    - src/components/analytics/FacebookPixel.tsx
  modified:
    - src/components/analytics/ConsentBanner.tsx
    - src/app/layout.tsx

key-decisions:
  - "Used dangerouslySetInnerHTML with inline fbq base code (official Next.js with-facebook-pixel pattern) rather than src= pointing to fbevents.js — avoids needing separate init call"
  - "No usePathname PageView listener added — Pixel's built-in History API listener handles SPA navigation to prevent double PageView"
  - "FacebookPixel renders directly from Server Component layout without dynamic ssr:false wrapper — pixelReady starts false and only sets in useEffect, making SSR safe"
  - "consent:granted window event as the decoupled signal from ConsentBanner to FacebookPixel — avoids prop drilling or shared state"

patterns-established:
  - "Consent gate pattern: check localStorage on mount, listen for consent:granted event for late consent, gate script render on state"
  - "Analytics components loaded via strategy=afterInteractive to avoid blocking page render"

requirements-completed: [PIX-01, PIX-02]

# Metrics
duration: 2min
completed: 2026-03-31
---

# Phase 14 Plan 01: Facebook Pixel Consent Foundation Summary

**Consent-gated FacebookPixel component using localStorage check + window event listener, with ConsentBanner dispatching consent:granted for same-session Pixel activation without page refresh**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-31T17:49:06Z
- **Completed:** 2026-03-31T17:51:04Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Created FacebookPixel.tsx that blocks Pixel loading until consent is granted (zero requests to connect.facebook.net before Accept)
- Modified ConsentBanner.tsx handleAccept to dispatch window consent:granted event, enabling immediate Pixel init in the same session without page refresh
- Added FacebookPixel to root layout.tsx after GoogleAnalytics, making Pixel active site-wide once consent is given

## Task Commits

Each task was committed atomically:

1. **Task 1: Create FacebookPixel.tsx** - `c559a5c` (feat)
2. **Task 2: Wire ConsentBanner + layout.tsx** - `e15c6f1` (feat)

**Plan metadata:** (docs commit follows)

## Files Created/Modified

- `src/components/analytics/FacebookPixel.tsx` - Consent-gated Pixel loader: reads localStorage, listens for consent:granted event, renders Script tag with fbq init + PageView only when pixelReady=true
- `src/components/analytics/ConsentBanner.tsx` - Added `window.dispatchEvent(new Event('consent:granted'))` to handleAccept after updateGtag call
- `src/app/layout.tsx` - Added FacebookPixel import and `<FacebookPixel />` render after `<GoogleAnalytics />`

## Decisions Made

- Used `dangerouslySetInnerHTML` with inline fbq base code (official Next.js with-facebook-pixel pattern) rather than pointing `src=` directly at fbevents.js — the inline approach bundles init and PageView calls together after script loads.
- No `usePathname`-based PageView listener added — Pixel's built-in History API pushState listener handles SPA navigation automatically. Adding both would cause double PageView events.
- FacebookPixel renders directly from the Server Component layout without a `dynamic({ ssr: false })` wrapper — `pixelReady` initializes to `false` and only transitions to `true` inside `useEffect`, making the component SSR-safe without special wrapping.
- `consent:granted` window event used as decoupled signal between ConsentBanner and FacebookPixel — avoids prop drilling or shared state management between the two independent components.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

Environment variable required before Pixel activates:
- `NEXT_PUBLIC_FB_PIXEL_ID` — set to your Facebook Pixel ID in `.env.local` and in Vercel environment settings
- Without this variable, the FacebookPixel component returns null safely and causes no errors

## Next Phase Readiness

- FacebookPixel foundation is complete and consent-gated
- Ready for Plan 14-02: fbpixel.ts event helpers (ViewContent, Lead, Contact events)
- No blockers

---
*Phase: 14-pixel-foundation-consent*
*Completed: 2026-03-31*
