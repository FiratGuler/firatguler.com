import React from "react";
import { motion } from "motion/react";

export default function LanguageSwitcher({ lang, setLang, bgColor, textColor }) {
  const switchLanguage = () => {
    const nextLanguage = lang === "en" ? "tr" : "en";
    document.documentElement.lang = nextLanguage;
    setLang(nextLanguage);
  };

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color: textColor }}
      className="language-switcher"
      onClick={switchLanguage}
      aria-label={lang === "en" ? "Türkçeye geç" : "Switch to English"}
    >
      <motion.span
        className={lang === "tr" ? "is-active" : ""}
        animate={{ opacity: lang === "tr" ? 1 : 0.32, y: lang === "tr" ? 0 : 2 }}
        transition={{ duration: 0.18 }}
      >
        TR
      </motion.span>
      <span className="language-switcher__divider" aria-hidden="true" />
      <motion.span
        className={lang === "en" ? "is-active" : ""}
        animate={{ opacity: lang === "en" ? 1 : 0.32, y: lang === "en" ? 0 : 2 }}
        transition={{ duration: 0.18 }}
      >
        EN
      </motion.span>
    </button>
  );
}
