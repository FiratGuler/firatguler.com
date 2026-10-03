import { motion, useReducedMotion } from "motion/react";

export const motionEase = [0.22, 1, 0.36, 1];

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: motionEase },
  },
};

function Plain({ as, className, children, id, ...rest }) {
  const Tag = as;
  return (
    <Tag id={id} className={className} {...rest}>
      {children}
    </Tag>
  );
}

export function Reveal({ as = "div", className, children, delay = 0, id, ...rest }) {
  const reduce = useReducedMotion();
  if (reduce) return <Plain as={as} id={id} className={className} {...rest}>{children}</Plain>;

  const Tag = motion[as];
  return (
    <Tag
      id={id}
      className={className}
      {...rest}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.62, delay, ease: motionEase }}
    >
      {children}
    </Tag>
  );
}

export function RevealGroup({ as = "div", className, children, id }) {
  const reduce = useReducedMotion();
  if (reduce) return <Plain as={as} id={id} className={className}>{children}</Plain>;

  const Tag = motion[as];
  return (
    <Tag
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
      }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ as = "div", className, children }) {
  const reduce = useReducedMotion();
  if (reduce) return <Plain as={as} className={className}>{children}</Plain>;

  const Tag = motion[as];
  return (
    <Tag className={className} variants={rise}>
      {children}
    </Tag>
  );
}
