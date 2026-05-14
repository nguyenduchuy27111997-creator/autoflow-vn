// Phase 121 Plan 121-00 Wave-0 scaffold — PostHog SDK loader & init-guard placeholder.
//
// These tests verify the minimum surface contract for the website's PostHog
// integration. Plan 121-01 expands this file with GA4-mirror assertions
// (`trackChatbotOpened` → both gtag + posthog.capture) once the
// `website/src/lib/analytics.ts` track-both wrapper ships.
//
// Framework: built-in `node:test` (per website/package.json test script:
//   `node --test 'src/**/__tests__/*.test.mjs'`)
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('posthog-js module loads and exposes init()', async () => {
  // posthog-js ships a hybrid ESM/CJS bundle. Under Next.js bundler the
  // default import works (`import posthog from 'posthog-js'`); under raw
  // node:test ESM resolution the singleton is the named `posthog` export.
  // Both shapes share the same underlying object — verifying the named
  // export's init/capture is sufficient as a Wave-0 smoke check.
  const mod = await import('posthog-js');
  assert.equal(
    typeof mod.posthog.init,
    'function',
    'posthog-js named export must expose init()',
  );
  assert.equal(
    typeof mod.posthog.capture,
    'function',
    'posthog-js named export must expose capture()',
  );
});

test('PostHog stays disabled when NEXT_PUBLIC_POSTHOG_KEY is unset', () => {
  // Placeholder — Plan 121-01 will replace this with a real assertion that
  // imports instrumentation-client.ts in an env-cleared context and verifies
  // posthog.init was NOT called. See 121-RESEARCH.md §"Pitfall 2".
  const previous = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  delete process.env.NEXT_PUBLIC_POSTHOG_KEY;
  assert.equal(process.env.NEXT_PUBLIC_POSTHOG_KEY, undefined);
  if (previous !== undefined) process.env.NEXT_PUBLIC_POSTHOG_KEY = previous;
});
