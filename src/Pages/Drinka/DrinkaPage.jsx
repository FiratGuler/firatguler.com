import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "../Home/Components/LanguageSwitcher";
import DeveloperBackButton from "../Home/Components/DeveloperBackButton";
import DrinkaLogoText from "./Components/DrinkaLogoText";
import DrinkaBodyContent from "./Components/DrinkaBodyContent";
import DrinkaFeatures from "./Components/DrinkaFeatures";
import en from "../../Locale/i18n/en/drinka.json";
import tr from "../../Locale/i18n/tr/drinka.json";

export default function DrinkaPage() {
  const navigate = useNavigate();
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

  useEffect(() => {
    const prevTitle = document.title;
    const favicon = document.querySelector("link[rel~='icon']");
    const prevIcon = favicon ? favicon.href : "";

    document.title = "Drinka - Remember Every Night";
    if (favicon) favicon.href = "drinka_logo.ico";

    return () => {
      document.title = prevTitle;
      if (favicon) favicon.href = prevIcon;
    };
  }, []);

  return (
    <div className="min-h-screen pb-20 font-drinka text-drinka-light selection:bg-drinka-primary selection:text-white bg-gradient-to-b from-drinka-surface-800 to-drinka-surface-900">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center gap-3">
        <DeveloperBackButton bgColor="#751523" textColor="#EFE6E9" />
        <LanguageSwitcher
          lang={lang}
          setLang={setLang}
          bgColor="#751523"
          textColor="#EFE6E9"
        />
      </div>

      <main className="max-w-[1200px] mx-auto px-6 space-y-12">
        <section>
          <DrinkaLogoText t={t} />
        </section>
        <DrinkaBodyContent t={t} />
        <DrinkaFeatures t={t} />
      </main>

      <footer className="mt-24 py-12 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-semibold text-xs md:text-sm tracking-widest text-drinka-muted uppercase order-2 md:order-1">
            {t("drinkaFeatures.designedBy")} Fırat Güler • © 2026
          </p>
          <div className="order-1 md:order-2">
            <button
              onClick={() => navigate("/DrinkaPrivacyPolicy")}
              className="text-xs md:text-sm font-bold uppercase tracking-widest text-drinka-primary hover:text-drinka-light transition-colors"
            >
              {t("drinkaFeatures.privacyPolicy")}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
