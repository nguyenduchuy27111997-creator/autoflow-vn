// src/components/analytics/GoogleAnalytics.tsx
// Server component — no "use client" needed; no event handlers.
// Emits inline consent defaults synchronously, then deferred gtag.js scripts.
// CRITICAL: The plain <script dangerouslySetInnerHTML> block MUST come before
// the deferred <Script> components so the consent default fires before gtag.js loads.

import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* Step 1: Inline consent default — runs synchronously during HTML parsing,
          BEFORE any deferred script executes. This is NOT a <Script> component;
          it is a plain <script> tag rendered by the server. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
`,
        }}
      />
      {/* Step 2: Load gtag.js after page becomes interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      {/* Step 3: Initialize gtag with the property ID */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`gtag('js', new Date()); gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
