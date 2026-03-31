'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const CONSENT_KEY = 'autoflow_cookie_consent';

export default function FacebookPixel() {
  const [pixelReady, setPixelReady] = useState(false);

  useEffect(() => {
    // Check consent already stored from a prior visit
    if (localStorage.getItem(CONSENT_KEY) === 'granted') {
      setPixelReady(true);
      return;
    }
    // Listen for late consent (user clicks Accept in current session)
    function onConsentGranted() {
      setPixelReady(true);
    }
    window.addEventListener('consent:granted', onConsentGranted);
    return () => window.removeEventListener('consent:granted', onConsentGranted);
  }, []);

  if (!PIXEL_ID || !pixelReady) return null;

  // The fbevents.js base code — copied verbatim from Meta's Pixel setup instructions.
  // fbq('init') + fbq('track', 'PageView') are called inline after the script loads.
  // DO NOT add a usePathname-based PageView listener — Pixel's built-in History API
  // listener handles SPA navigation automatically. Adding both causes double PageView.
  const pixelCode = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');
fbq('track','PageView');
`;

  return (
    <Script
      id="fb-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: pixelCode }}
    />
  );
}
