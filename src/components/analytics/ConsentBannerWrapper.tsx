// src/components/analytics/ConsentBannerWrapper.tsx
// Client component wrapper required by Next.js 16 — `ssr: false` is only
// allowed inside Client Components, not Server Components (layout.tsx).
'use client';

import dynamic from 'next/dynamic';

const ConsentBanner = dynamic(
  () => import('@/components/analytics/ConsentBanner'),
  { ssr: false }
);

export default function ConsentBannerWrapper() {
  return <ConsentBanner />;
}
