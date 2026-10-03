import { flushSync } from "react-dom";

function snapToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function navigateWithTransition(navigate, to) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const commit = () => {
    flushSync(() => {
      navigate(to);
    });
    snapToTop();
  };

  if (reduce || typeof document.startViewTransition !== "function") {
    navigate(to);
    snapToTop();
    return;
  }

  document.startViewTransition(commit);
}
