import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

export default function LangSwap({ lang, children, className, as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduce) {
    const Plain = as === "div" ? "div" : as;
    return <Plain className={className} {...rest}>{children}</Plain>;
  }

  return (
    <AnimatePresence mode="wait">
      <Tag
        key={lang}
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease }}
        {...rest}
      >
        {children}
      </Tag>
    </AnimatePresence>
  );
}
