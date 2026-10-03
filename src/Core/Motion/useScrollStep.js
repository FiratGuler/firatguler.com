import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useScrollStep(targetRef, count) {
  const [step, setStep] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = targetRef.current;
    if (!node || reduce || count < 2) return undefined;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      const passed = Math.min(Math.max(-rect.top, 0), travel);
      const next = Math.min(count - 1, Math.round((passed / travel) * (count - 1)));
      setStep((current) => (current === next ? current : next));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef, count, reduce]);

  return step;
}
