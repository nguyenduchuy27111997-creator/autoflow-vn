"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "./success-check.json";

/**
 * Success animation — Lottie checkmark + confetti burst.
 * Renders on mount. Confetti fires once (idempotent via ref).
 */
export default function SuccessAnimation() {
  const confettiFired = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (confettiFired.current) return;
    confettiFired.current = true;

    // Compute icon center as normalized viewport coordinates
    const rect = wrapperRef.current?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.3;

    // Single burst từ vị trí icon — dynamic import tránh SSR issue
    import("canvas-confetti").then(({ default: confetti }) => {
      confetti({
        particleCount: 100,
        spread: 90,
        startVelocity: 35,
        origin: { x, y },
        colors: ["#10B981", "#0066FF", "#FBBF24", "#EC4899"],
      });
    }).catch((err) => {
      console.error("[SuccessAnimation] confetti failed:", err);
    });
  }, []);

  return (
    <div ref={wrapperRef} className="w-28 h-28 mx-auto mb-2 relative">
      {/* Fallback circle visible even if Lottie fails */}
      <div className="absolute inset-0 rounded-full bg-accent/10 flex items-center justify-center">
        <svg width="40" height="40" fill="none" stroke="#10B981" strokeWidth="3">
          <path d="M8 20l10 10 18-18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* Lottie overlay — fills container */}
      {/* Lottie overlay — if animationData is valid, it covers fallback */}{true && (
        <div className="absolute inset-0">
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
    </div>
  );
}
