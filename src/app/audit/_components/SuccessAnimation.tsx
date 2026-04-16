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

  useEffect(() => {
    if (confettiFired.current) return;
    confettiFired.current = true;

    // Dynamic import — canvas-confetti needs window, import only client-side
    import("canvas-confetti").then(({ default: confetti }) => {
      const duration = 2500;
      const end = Date.now() + duration;
      const colors = ["#10B981", "#0066FF", "#FBBF24", "#EC4899"];

      // Center big burst immediately
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.4 },
        colors,
      });

      // Side cannons streaming
      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          startVelocity: 45,
          origin: { x: 0, y: 0.7 },
          colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          startVelocity: 45,
          origin: { x: 1, y: 0.7 },
          colors,
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }).catch((err) => {
      console.error("[SuccessAnimation] confetti import failed:", err);
    });
  }, []);

  return (
    <div className="w-28 h-28 mx-auto mb-2 relative">
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
