import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WordyLogoText from "./Components/WordyLogoText";
import WordyBodyContent from "./Components/WordyBodyContent";
import WordyFeatures from "./Components/WordyFeatures";
import LanguageSwitcher from "../Home/Components/LanguageSwitcher";
import SocialSection from "./Components/WordySocial";
import en from "../../Locale/i18n/en/wordy.json";
import tr from "../../Locale/i18n/tr/wordy.json";

export default function WordyPage() {
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

    document.title = "Wordy - Flashcards";
    if (favicon) favicon.href = "wordy_logo.ico";

    return () => {
      document.title = prevTitle;
      if (favicon) favicon.href = prevIcon;
    };
  }, []);

  return (
    <div className="bg-wordy-bg text-wordy-text font-wordy min-h-screen pb-20 selection:bg-wordy-accent selection:text-white">
      {/* Üst Navigasyon & Dil Seçici */}
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-end">
        <LanguageSwitcher
          lang={lang}
          setLang={setLang}
          bgColor="#000000"
          textColor="#FFFFFF"
        />
      </div>

      <main className="max-w-[1200px] mx-auto px-6 space-y-12">
        {/* LOGO TEXT */}
        <section className="animate-fade-in">
          <WordyLogoText t={t} />
        </section>

        {/* Resimli KISIM */}
        <WordyBodyContent t={t} />

        {/* Özellikler Kartları */}
        <WordyFeatures t={t} />

        {/* Sosyal Medya Bölümü - Buraya eklendi */}
        <div className="pt-12">
          <SocialSection t={t} />
        </div>
      </main>

      <footer className="mt-24 py-12 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Telif Hakkı & Tasarımcı */}
          <p className="font-bold text-xs md:text-sm tracking-widest uppercase opacity-40 order-2 md:order-1">
            {t("wordyFeatures.designedBy")} Fırat Güler • © 2026
          </p>

          {/* Privacy Policy Butonu */}
          <div className="order-1 md:order-2">
            <button
              onClick={() => navigate("/WordyPrivacyPolicy")}
              className="text-xs md:text-sm font-black uppercase tracking-widest text-wordy-text opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 group "
            >
              <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform"></span>
              {t("wordyFeatures.privacyPolicy")}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
