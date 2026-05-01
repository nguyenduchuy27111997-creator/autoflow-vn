'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const CONSENT_KEY = 'autoflow_cookie_consent';

export default function FacebookPixel() {
  const [pixelReady, setPixelReady] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) === 'granted') {
      setPixelReady(true);
      return;
    }
    function onConsentGranted() {
      setPixelReady(true);
    }
    window.addEventListener('consent:granted', onConsentGranted);
    return () => window.removeEventListener('consent:granted', onConsentGranted);
  }, []);

  if (!PIXEL_ID || !pixelReady) return null;

  return (
    <>
      <meta name="fb-pixel-id" content={PIXEL_ID} />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        src="/scripts/fb-pixel.js"
      />
    </>
  );
}
