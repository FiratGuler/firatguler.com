import React from "react";

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
      <span className={lang === "tr" ? "is-active" : ""}>TR</span>
      <span className="language-switcher__divider" aria-hidden="true" />
      <span className={lang === "en" ? "is-active" : ""}>EN</span>
    </button>
  );
}
