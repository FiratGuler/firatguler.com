import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MdApps, MdCode, MdPersonOutline, MdRoute } from "react-icons/md";

const items = [
  { id: "intro", icon: MdPersonOutline },
  { id: "work", icon: MdApps },
  { id: "process", icon: MdRoute },
  { id: "stack", icon: MdCode },
];

export default function HomeContentNavigation({ t, lang = "en" }) {
  const reduce = useReducedMotion();
  const [activeSection, setActiveSection] = useState("intro");

  const navigateToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-32% 0px -58%", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="content-navigation" aria-label={t("navigation.contentLabel")}>
      <span className="content-navigation__rail" aria-hidden="true" />
      {items.map(({ id, icon: Icon }, index) => {
        const isActive = activeSection === id;

        return (
          <button
            key={id}
            type="button"
            className={isActive ? "is-active" : ""}
            aria-current={isActive ? "location" : undefined}
            aria-label={t(`navigation.sections.${id}`)}
            onClick={() => navigateToSection(id)}
          >
            <span className="content-navigation__index">0{index + 1}</span>
            <Icon aria-hidden="true" />
            <span className="content-navigation__label">
              {reduce ? (
                t(`navigation.sections.${id}`)
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${lang}-${id}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t(`navigation.sections.${id}`)}
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
