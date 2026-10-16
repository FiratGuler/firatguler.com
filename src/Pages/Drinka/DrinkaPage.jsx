import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "../../Features/UIComponents/LanguageSwitcher";
import DeveloperBackButton from "../../Features/UIComponents/DeveloperBackButton";
import ProductWidgetGallery from "../../Features/UIComponents/ProductWidgetGallery";
import ProductFollowSection from "../../Features/UIComponents/ProductFollowSection";
import ProductSocialSection from "../../Features/UIComponents/ProductSocialSection";
import DrinkaHero, { DrinkaStage } from "./Components/DrinkaHero";
import DrinkaExperience from "./Components/DrinkaExperience";
import DrinkaCapabilities from "./Components/DrinkaCapabilities";
import { useScrollStep } from "../../Core/Motion/useScrollStep";
import { Reveal } from "../../Core/Motion/Reveal";
import widgetQuickAddMedium from "./Assets/Widgets/widget.gallery.quickAdd.medium.png";
import widgetQuickAdd from "./Assets/Widgets/widget.gallery.quickAdd.png";
import widgetTryList from "./Assets/Widgets/widget.gallery.tryList.png";
import widgetTopRated from "./Assets/Widgets/widget.gallery.topRated.png";
import widgetMemory from "./Assets/Widgets/widget.gallery.memory.png";
import widgetWeek from "./Assets/Widgets/widget.gallery.weekly.series.png";
import widgetLastTasting from "./Assets/Widgets/widget.gallery.weeklySeries.png";
import widgetStats from "./Assets/Widgets/widget.gallery.statsSummary.png";
import en from "../../Locale/i18n/en/drinka.json";
import tr from "../../Locale/i18n/tr/drinka.json";
import "./drinka.css";

const widgets = [
  ["quickAddMedium", widgetQuickAddMedium, "half"],
  ["quickAdd", widgetQuickAdd, "half"],
  ["tryList", widgetTryList, "half"],
  ["topRated", widgetTopRated, "half"],
  ["memory", widgetMemory, "half"],
  ["week", widgetWeek, "half"],
  ["lastTasting", widgetLastTasting, "half"],
  ["stats", widgetStats, "half"],
];

const APP_STORE_URL =
  "https://apps.apple.com/tr/app/drinka-her-geceyi-hat%C4%B1rla/id6760046885?l=tr";

export default function DrinkaPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
  const locales = { en, tr };

  const storyRef = useRef(null);
  const step = useScrollStep(storyRef, 4);

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
        <div className="drinka-story" ref={storyRef}>
          <div className="drinka-story__flow">
            <DrinkaHero t={t} appStoreUrl={APP_STORE_URL} />
            <DrinkaExperience t={t} activeStep={step} />
          </div>
          <div className="drinka-story__stage">
            <DrinkaStage t={t} step={step} />
          </div>
        </div>
        <Reveal>
        <DrinkaCapabilities t={t} />
        </Reveal>
        <ProductWidgetGallery items={widgets} accent="#d3b5bc" tone="#b78390" caption="below" surface="rgba(21, 21, 23, 0.8)" t={t} />

        <ProductSocialSection
          variant="drinka"
          url="https://www.firatguler.com/drinka"
          t={t}
        />

        <ProductFollowSection appId="drinka" t={t} />

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
