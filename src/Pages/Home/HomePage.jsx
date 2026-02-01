import React, { useState } from "react";
import HeaderCard from "./Components/HomeHeaderCard/HomeHeaderCard";
import FeaturedApps from "./Components/FeaturedApps";
import TechStack from "./Components/TechStack";
import LanguageSwitcher from "./Components/LanguageSwitcher";
import en from "../../Locale/i18n/en/home.json";
import tr from "../../Locale/i18n/tr/home.json";

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const locales = { en, tr };

  const t = (key) => {
    const keys = key.split(".");
    let value = locales[lang];
    keys.forEach((k) => {
      value = value?.[k];
    });
    return value || key;
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 space-y-6 font-display">
      {/* Dil Butonu */}
      <LanguageSwitcher lang={lang} setLang={setLang} />

      {/* Sayfa */}
      <HeaderCard t={t} />
      <FeaturedApps t={t} />
      <TechStack t={t} />
    </div>
  );
}
