// PostHog Cloud EU initialisation — website app.
//
// ANL-05 HARD GATE: this file ships EU residency + maskAllInputs +
// autocapture allowlist BEFORE any event leaves a real browser. Removing
// NEXT_PUBLIC_POSTHOG_KEY from the deployed env is the documented rollback
// path (the if-guard below short-circuits posthog.init entirely).
//
// File convention: Next.js 16.2.4 auto-discovers `instrumentation-client.ts`
// at the app root (NOT inside src/ or app/). Runs after HTML load, before
// React hydration — see node_modules/next/dist/docs/01-app/03-api-reference/
// 03-file-conventions/instrumentation-client.md.
//
// Why not <PostHogProvider> / useEffect: Phase 121 RESEARCH §"Why NOT
// useEffect / PostHogProvider" — instrumentation-client.ts initialises
// earlier, has no React lifecycle coupling, and is the Next.js 16 official
// recommendation for analytics SDKs.
import posthog from 'posthog-js';

// Env-guard: no key = no init = full disable. This is CONTEXT.md D-02's
// single toggle point and the documented rollback path (Pitfall 7).
if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    // EU ingestion endpoint (NOT the dashboard URL eu.posthog.com).
    // ANL-05 / CONTEXT.md D-05c — VN Law 91/2025 EU residency.
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
    defaults: '2026-01-30',
    // Start globally disabled; Plan 121-02 ships PostHogSessionGate which
    // calls posthog.startSessionRecording() ONLY on allowlisted public pages
    // (/, /bang-gia, /blog/*, /tai-lieu/*) per D-05b.
    disable_session_recording: true,
    session_recording: {
      // ANL-05: every <input>/<textarea>/<select> masked in replay frames.
      maskAllInputs: true,
      // ANL-05 defense-in-depth: redact text inside any element tagged
      // [data-ph-no-capture]. Pairs with the `ph-no-capture` CSS class
      // for full element blocking on the sensitive non-input elements.
      maskTextSelector: '[data-ph-no-capture]',
    },
    autocapture: {
      // ANL-05 opt-in: PostHog autocapture fires ONLY on elements explicitly
      // tagged [data-ph-capture]. Until call sites add the attribute,
      // autocapture is effectively off — every event must be manual.
      css_selector_allowlist: ['[data-ph-capture]'],
    },
    persistence: 'localStorage+cookie',
    loaded: (ph) => {
      if (process.env.NODE_ENV === 'development') ph.debug();
    },
  });
}

// Optional Next.js 16 hook — fires on client-side route transitions so we
// keep $pageview events accurate without relying on autocapture (which is
// off-by-default per the allowlist above).
export function onRouterTransitionStart(url: string) {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('$pageview', { $current_url: url });
  }
}
