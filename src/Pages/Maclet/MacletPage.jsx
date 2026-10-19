import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { MdMusicNote, MdOutlineTimer, MdShield, MdTune } from "react-icons/md";
import ProductFollowSection from "../../Features/UIComponents/ProductFollowSection";
import DeveloperBackButton from "../../Features/UIComponents/DeveloperBackButton";
import LanguageSwitcher from "../../Features/UIComponents/LanguageSwitcher";
import { useScrollStep } from "../../Core/Motion/useScrollStep";
import { scenes, sceneIcons as featureIcons } from "./MacletScenes";
import macletLogo from "./Assets/maclet_logo.png";
import en from "../../Locale/i18n/en/maclet.json";
import tr from "../../Locale/i18n/tr/maclet.json";
import "./maclet.css";

export default function MacletPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
  const locales = { en, tr };
  const featuresRef = useRef(null);
  const featureKeys = Object.keys(featureIcons);
  const step = useScrollStep(featuresRef, featureKeys.length);
  const activeKey = featureKeys[step];
  const t = (key) => key.split(".").reduce((value, item) => value?.[item], locales[lang]) || key.split(".").reduce((value, item) => value?.[item], en) || key;

  return (
    <div className="maclet-page product-page">
      <div className="maclet-ambient" aria-hidden="true"><i /><i /></div>

      <header className="maclet-nav">
        <DeveloperBackButton bgColor="#e8edf5" textColor="#111722" />
        <span>BARLET · macOS</span>
        <LanguageSwitcher lang={lang} setLang={setLang} bgColor="#202938" textColor="#f6f8fb" />
      </header>

      <main className="maclet-main">
        <div className="product-story">
          <div className="product-story__flow">
        <section className="maclet-hero maclet-hero--copy">
          <div className="maclet-hero__copy">
            <div className="maclet-brand"><img src={macletLogo} alt="" style={{ viewTransitionName: "app-icon-maclet" }} /><span>Barlet<small>{t("brand.tagline")}</small></span></div>
            <span className="maclet-eyebrow">{t("hero.eyebrow")}</span>
            <h1>{t("hero.title")} <em>{t("hero.highlight")}</em></h1>
            <p>{t("hero.description")}</p>
            <div className="maclet-status"><span />{t("hero.status")}</div>
          </div>
        </section>

        <section className="maclet-features" ref={featuresRef}>
          <header><div><span className="maclet-eyebrow">01 / {t("features.eyebrow")}</span><h2>{t("features.title")}</h2></div><p>{t("features.description")}</p></header>
          <div className="maclet-feature-grid">
            {Object.entries(featureIcons).map(([key, Icon], index) => (
              <article key={key} className={`${"maclet-feature"}${step === index ? " is-active" : ""}`}>
                <span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{t(`features.items.${key}.title`)}</h3><p>{t(`features.items.${key}.description`)}</p>
              </article>
            ))}
          </div>
        </section>
          </div>

          <aside className="product-story__stage">
          <div className="maclet-demo" aria-label={t("hero.previewLabel")}>
            <div className="maclet-demo__menubar">
              <span className="maclet-demo__app"><img src={macletLogo} alt="" />Barlet</span><i />
              <span><MdMusicNote /> Focus</span><span><MdOutlineTimer /> 24:18</span>
            </div>
            <div className="maclet-panel">
              <div className="maclet-panel__title"><span>{React.createElement(featureIcons[activeKey])}</span><div><strong>{t(`features.items.${activeKey}.title`)}</strong><small>BARLET</small></div><MdTune /></div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeKey}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                >
                  {React.createElement(scenes[activeKey], { t })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          </aside>
        </div>

        <section className="maclet-native">
          <div className="maclet-native__copy"><span className="maclet-eyebrow">02 / {t("native.eyebrow")}</span><h2>{t("native.title")}</h2><p>{t("native.description")}</p></div>
          <ul>
            {Object.keys(locales.en.native.points).map((key) => <li key={key}><MdShield aria-hidden="true" /><span>{t(`native.points.${key}`)}</span></li>)}
          </ul>
        </section>

        <ProductFollowSection appId="barlet" t={t} />

        <section className="maclet-cta">
          <span className="maclet-eyebrow">{t("cta.eyebrow")}</span>
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.description")}</p>
          <div><span />{t("hero.status")}</div>
        </section>
      </main>

      <footer className="maclet-footer"><p>© 2026 Barlet · {t("footer.credit")} Fırat Güler</p><button type="button" onClick={() => navigate("/BarletPrivacyPolicy")}>{t("footer.privacy")}</button><span>SWIFT · SWIFTUI · APPKIT · CORE AUDIO</span></footer>
    </div>
  );
}
