// src/components/analytics/ConsentBanner.tsx
// Client-only component — MUST be imported with dynamic({ ssr: false }) in layout.tsx.
// Runs CookieConsent.run() in useEffect to initialize the consent banner.
// All three callbacks (onFirstConsent, onConsent, onChange) wire to gtag consent update.
'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function ConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      // CRITICAL: Wire all 3 callbacks.
      // onFirstConsent: fires when user makes their first-ever choice.
      // onConsent:      fires on every page load where consent was already stored.
      //                 Without this, return visitors start each session in denied state.
      // onChange:       fires if user changes preference after initial choice.
      onFirstConsent: updateGtagConsent,
      onConsent: updateGtagConsent,
      onChange: updateGtagConsent,

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: '_gid' },
            ],
          },
          services: {
            analytics_storage: {
              label: 'Google Analytics',
            },
          },
        },
      },

      guiOptions: {
        consentModal: {
          layout: 'bar',
          position: 'bottom',
          flipButtons: false,
          equalWeightButtons: false,
        },
      },

      language: {
        default: 'vi',
        translations: {
          vi: {
            consentModal: {
              description:
                'Chúng tôi dùng cookie để cải thiện trải nghiệm của bạn.',
              acceptAllBtn: 'Chấp nhận',
              acceptNecessaryBtn: 'Từ chối',
            },
            preferencesModal: {
              title: 'Tùy chọn cookie',
              acceptAllBtn: 'Chấp nhận tất cả',
              acceptNecessaryBtn: 'Chỉ cần thiết',
              savePreferencesBtn: 'Lưu tùy chọn',
              sections: [
                {
                  title: 'Cookie cần thiết',
                  description: 'Các cookie này cần thiết để website hoạt động.',
                },
                {
                  title: 'Cookie phân tích',
                  description:
                    'Giúp chúng tôi hiểu cách bạn sử dụng website để cải thiện trải nghiệm.',
                  linkedCategory: 'analytics',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}

function updateGtagConsent() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: CookieConsent.acceptedService(
      'analytics_storage',
      'analytics'
    )
      ? 'granted'
      : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}
