---
phase: 14-pixel-foundation-consent
plan: "03"
subsystem: ui
tags: [privacy-policy, facebook-pixel, gdpr, pdpd, cookies, meta]

# Dependency graph
requires:
  - phase: 14-pixel-foundation-consent
    provides: Facebook Pixel consent gate and banner implementation (14-01, 14-02)
provides:
  - Updated privacy policy disclosing Facebook Pixel, _fbp/_fbc cookies, and Meta as data recipient
affects: [compliance, legal, consent]

# Tech tracking
tech-stack:
  added: []
  patterns: [Privacy policy updates use targeted JSX edits preserving all structure and styles]

key-files:
  created: []
  modified:
    - src/app/chinh-sach-bao-mat/page.tsx

key-decisions:
  - "Added Meta privacy policy link (facebook.com/privacy/policy/) as external reference in Section 4"
  - "Section 8 Từ chối now explicitly mentions both GA and Pixel are disabled for clarity"

patterns-established:
  - "Privacy policy sections updated incrementally — only targeted list items changed, structure preserved"

requirements-completed:
  - COMP-01

# Metrics
duration: 5min
completed: 2026-03-29
---

# Phase 14 Plan 03: Privacy Policy Facebook Pixel Disclosure Summary

**Privacy policy updated with Facebook Pixel (Meta) disclosure: _fbp/_fbc cookie names, Meta as data recipient, and consent-gated activation in Sections 4 and 8**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-03-29T00:00:00Z
- **Completed:** 2026-03-29T00:05:00Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments
- Section 4 (Chia sẻ thông tin) now lists Facebook Pixel (Meta) as a third-party service with a link to Meta's privacy policy
- Section 8 (Cookies) Chấp nhận item updated to explain _fbp (browser ID) and _fbc (click ID) cookies set by Facebook Pixel
- Section 8 (Cookies) Từ chối item updated to state both Google Analytics and Facebook Pixel are disabled on rejection
- Build passes with no TypeScript errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Update privacy policy to disclose Facebook Pixel** - `5f82386` (feat)

**Plan metadata:** (docs commit follows)

## Files Created/Modified
- `src/app/chinh-sach-bao-mat/page.tsx` - Added Facebook Pixel/Meta disclosure in Section 4 and _fbp/_fbc cookie details in Section 8

## Decisions Made
- Added Meta's official privacy policy link as an external reference so users can review Meta's data handling
- "Từ chối" description now explicitly names both services as disabled (not just implied) for GDPR/PDPD clarity

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Privacy policy now fully compliant with Facebook Pixel disclosure requirements
- All three plans in phase 14 complete: Pixel script (14-01), consent banner (14-02), policy update (14-03)

---
*Phase: 14-pixel-foundation-consent*
*Completed: 2026-03-29*

## Self-Check: PASSED
- `src/app/chinh-sach-bao-mat/page.tsx` — FOUND
- Commit `5f82386` — FOUND
