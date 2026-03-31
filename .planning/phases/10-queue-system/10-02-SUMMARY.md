---
phase: 10-queue-system
plan: "02"
subsystem: api
tags: [supabase, email-queue, drip-sequence, next-api-routes, client-side-insert]

# Dependency graph
requires:
  - phase: 10-queue-system/10-01
    provides: enqueueEmailSequence helper and email_queue Supabase table

provides:
  - All three lead capture entry points enqueue 3-email drip sequences on submit
  - Quiz page client-side direct email_queue insert with duplicate prevention
  - Audit and PDF routes server-side enqueueEmailSequence fire-and-forget calls

affects: [email-sending-cron, email-queue-processor, any future lead capture forms]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Client-side forms insert directly to email_queue via Supabase anon client (RLS allows)
    - Server API routes use enqueueEmailSequence import with fire-and-forget .catch()
    - Duplicate prevention via count check before insert (client-side pattern)
    - Enqueue errors logged but never surfaced to users (non-fatal wrapping)

key-files:
  created: []
  modified:
    - src/app/quiz/page.tsx
    - src/app/api/audit/route.ts
    - src/app/api/tai-lieu/route.ts

key-decisions:
  - "Quiz page uses direct anon Supabase insert instead of enqueueEmailSequence (server-only function incompatible with use client)"
  - "Audit route conditionally enqueues only when body.email is present - audit form does not require email"
  - "Both server routes use fire-and-forget (.catch()) to keep route response times fast"
  - "Quiz uses inner try/catch so enqueue failure never blocks setScreen('result')"

patterns-established:
  - "Client-side enqueue pattern: direct supabase.from('email_queue').insert() with duplicate count check"
  - "Server-side enqueue pattern: enqueueEmailSequence(...).catch(console.error) fire-and-forget"

requirements-completed:
  - QUEUE-04
  - QUEUE-05

# Metrics
duration: 10min
completed: 2026-03-31
---

# Phase 10 Plan 02: Queue Wiring Summary

**Email drip sequences wired into all three lead capture forms: quiz (client-side direct insert), audit (conditional server-side), and PDF download (server-side fire-and-forget)**

## Performance

- **Duration:** 10 min
- **Started:** 2026-03-31T10:09:28Z
- **Completed:** 2026-03-31T10:19:00Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Quiz page inserts 3 email_queue rows (now, +3d, +7d) directly via browser Supabase client after successful quiz_leads insert, with duplicate prevention
- Audit route calls enqueueEmailSequence fire-and-forget when body.email is present (field is optional in audit form)
- PDF route calls enqueueEmailSequence fire-and-forget after pdf_leads insert, before Resend email send
- All enqueue failures are caught and logged, never surfaced to users

## Task Commits

Each task was committed atomically:

1. **Task 1: Wire email queue into quiz page (client-side direct insert)** - `705350e` (feat)
2. **Task 2: Wire email queue into audit and PDF API routes (server-side)** - `89de5ea` (feat)

**Plan metadata:** (docs commit follows)

## Files Created/Modified
- `src/app/quiz/page.tsx` - Added inner try/catch block with direct email_queue insert (3 rows) and duplicate check after successful quiz_leads insert
- `src/app/api/audit/route.ts` - Added enqueueEmailSequence import and conditional fire-and-forget call when body.email is present
- `src/app/api/tai-lieu/route.ts` - Added enqueueEmailSequence import and fire-and-forget call after pdf_leads insert

## Decisions Made
- Quiz page cannot import `enqueueEmailSequence` because it is a server-only function (uses `createClient` from `@/lib/supabase/server`). Used direct Supabase anon client insert instead — RLS on `email_queue` allows anon inserts.
- Audit form does not require an email field, so the enqueue call is gated on `body.email` presence with `typeof` and `includes('@')` checks to prevent invalid calls.
- Both server routes use `.catch()` fire-and-forget rather than `await` to avoid adding latency to the response path.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required. All changes use existing Supabase anon client and the `enqueueEmailSequence` helper from plan 10-01.

## Next Phase Readiness
- All lead capture entry points now automatically enroll leads into 3-email drip sequences
- The cron job from plan 10-01 (`/api/cron/send-emails`) will process the queued emails when scheduled
- No blockers for subsequent phases

---
*Phase: 10-queue-system*
*Completed: 2026-03-31*
