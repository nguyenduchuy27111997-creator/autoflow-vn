"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import confetti from "canvas-confetti";
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

    // Small delay — match with Lottie circle-in animation timing
    const timer = setTimeout(() => {
      const duration = 2500;
      const end = Date.now() + duration;
      const colors = ["#10B981", "#0066FF", "#FBBF24", "#EC4899"];

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
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-28 h-28 mx-auto">
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
