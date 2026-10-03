import React, { useEffect, useRef, useState } from "react";
import HeaderCard from "./Components/HomeHeaderCard/HomeHeaderCard";
import FeaturedApps from "./Components/FeaturedApps";
import TechStack from "./Components/TechStack";
import ProductProcess from "./Components/ProductProcess";
import HomeContentNavigation from "./Components/HomeContentNavigation";
import LanguageSwitcher from "../../Features/UIComponents/LanguageSwitcher";
import { Reveal } from "../../Core/Motion/Reveal";
import LangSwap from "../../Core/Motion/LangSwap";
import en from "../../Locale/i18n/en/home.json";
import tr from "../../Locale/i18n/tr/home.json";

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const introPlayed = useRef(false);
  const locales = { en, tr };

  useEffect(() => {
    introPlayed.current = true;
  }, []);

  const t = (key) => {
    const keys = key.split(".");
    let value = locales[lang];
    keys.forEach((k) => {
      value = value?.[k];
    });
    return value || key;
  };

  return (
    <div className="home-shell font-display">
      <div className="home-ambient" aria-hidden="true">
        <span className="home-ambient__orb home-ambient__orb--one" />
        <span className="home-ambient__orb home-ambient__orb--two" />
        <span className="home-ambient__grid" />
      </div>

      <HomeContentNavigation t={t} lang={lang} />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 py-5 md:py-8">
        <Reveal as="nav" className="home-nav" aria-label="Primary navigation">
          <LangSwap lang={lang} className="home-nav__meta" aria-hidden="true">
            <span>{t("navigation.location")}</span>
            <span className="home-nav__line" />
            <span>{t("navigation.role")}</span>
          </LangSwap>
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </Reveal>

        <LangSwap lang={lang}>
          <main id="top" className="space-y-5 md:space-y-6">
            <HeaderCard t={t} playIntro={!introPlayed.current} />
            <FeaturedApps t={t} />
            <ProductProcess t={t} />
            <TechStack t={t} />
          </main>

          <footer className="home-footer">
            <p>© 2026 Fırat Güler</p>
            <p>{t("footer.note")}</p>
          </footer>
        </LangSwap>
      </div>
    </div>
  );
}
