import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "../../Features/UIComponents/LanguageSwitcher";
import DeveloperBackButton from "../../Features/UIComponents/DeveloperBackButton";
import ProductSocialSection from "../../Features/UIComponents/ProductSocialSection";
import DrinkaHero from "./Components/DrinkaHero";
import DrinkaExperience from "./Components/DrinkaExperience";
import DrinkaCapabilities from "./Components/DrinkaCapabilities";
import en from "../../Locale/i18n/en/drinka.json";
import tr from "../../Locale/i18n/tr/drinka.json";
import "./drinka.css";

const APP_STORE_URL =
  "https://apps.apple.com/tr/app/drinka-her-geceyi-hat%C4%B1rla/id6760046885?l=tr";

export default function DrinkaPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
  const locales = { en, tr };

  const t = (key) => {
    const keys = key.split(".");
    let value = locales[lang];
    keys.forEach((currentKey) => {
      value = value?.[currentKey];
    });
    return value || key;
  };

  return (
    <div className="drinka-page product-page">
      <div className="drinka-ambient" aria-hidden="true">
        <span className="drinka-ambient__glow drinka-ambient__glow--one" />
        <span className="drinka-ambient__glow drinka-ambient__glow--two" />
        <span className="drinka-ambient__grain" />
      </div>

      <header className="drinka-nav">
        <DeveloperBackButton bgColor="#751523" textColor="#EFE6E9" />
        <span className="drinka-nav__identity" aria-hidden="true">
          DRINKA <i /> IOS
        </span>
        <LanguageSwitcher
          lang={lang}
          setLang={setLang}
          bgColor="#751523"
          textColor="#EFE6E9"
        />
      </header>

      <main className="drinka-main">
        <DrinkaHero t={t} appStoreUrl={APP_STORE_URL} />
        <DrinkaExperience t={t} />
        <DrinkaCapabilities t={t} />
        <ProductSocialSection
          variant="drinka"
          url="https://www.firatguler.com/drinka"
          t={t}
        />

        <section className="drinka-cta">
          <div className="drinka-cta__orb" aria-hidden="true" />
          <span className="drinka-eyebrow">{t("cta.eyebrow")}</span>
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.description")}</p>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true"></span>
            <span>
              <small>{t("hero.appStoreEyebrow")}</small>
              <strong>App Store</strong>
            </span>
          </a>
        </section>
      </main>

      <footer className="drinka-footer">
        <p>{t("footer.credit")} Fırat Güler · © 2026</p>
        <button type="button" onClick={() => navigate("/DrinkaPrivacyPolicy")}>
          {t("footer.privacy")}
        </button>
      </footer>
    </div>
  );
}
