import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LanguageSwitcher from "../Home/Components/LanguageSwitcher";

import BoardyLogoText from "./Components/BoardyLogoText";
import BoardyBodyContent from "./Components/BoardyBodyContent";
import BoardyFeatures from "./Components/BoardyFeatures";

import en from "../../Locale/i18n/en/boardy.json";
import tr from "../../Locale/i18n/tr/boardy.json";

export default function BoardyPage() {
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

    document.title = "Boardy - Level Tracker";
    if (favicon) favicon.href = "boardy_logo.ico";

    return () => {
      document.title = prevTitle;
      if (favicon) favicon.href = prevIcon;
    };
  }, []);

  return (
    <div className="bg-boardy-bg text-boardy-text font-boardy min-h-screen pb-20 selection:bg-boardy-accent selection:text-white">
      {/* Üst Navigasyon & Dil Seçici */}
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-end">
<LanguageSwitcher 
  lang={lang} 
  setLang={setLang} 
  bgColor="#9E1838" 
  textColor="#FFFDF5" 
/>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 space-y-12">
        {/* LOGO TEXT */}
        <section className="animate-fade-in">
          <BoardyLogoText t={t} />
        </section>

        {/* Resimli KISIM */}
        <BoardyBodyContent t={t} />

        {/* Özellikler Kartları */}
        <BoardyFeatures t={t} />
        
      </main>

      <footer className="mt-24 py-12 border-t border-red-300/5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Telif Hakkı & Tasarımcı */}
          <p className="font-bold text-xs md:text-sm tracking-widest text-boardy-accent uppercase opacity-80 order-2 md:order-1">
            {t("boardyFeatures.designedBy")} Fırat Güler • © 2026
          </p>

          {/* Privacy Policy Butonu */}
          <div className="order-1 md:order-2">
            <button
              onClick={() => navigate("/BoardyPrivacyPolicy")}
              className="text-xs md:text-sm font-black uppercase tracking-widest text-boardy-accent opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2 group "
            >
              <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform"></span>
              {t("boardyFeatures.privacyPolicy")}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
