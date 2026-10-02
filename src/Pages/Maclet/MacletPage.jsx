import React, { useState } from "react";
import {
  MdCheckCircle,
  MdContentPaste,
  MdGraphicEq,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdMusicNote,
  MdOutlineTimer,
  MdPause,
  MdShield,
  MdTune,
} from "react-icons/md";
import DeveloperBackButton from "../../Features/UIComponents/DeveloperBackButton";
import LanguageSwitcher from "../../Features/UIComponents/LanguageSwitcher";
import macletLogo from "./Assets/maclet_logo.png";
import en from "../../Locale/i18n/en/maclet.json";
import tr from "../../Locale/i18n/tr/maclet.json";
import "./maclet.css";

const featureIcons = {
  playing: MdMusicNote,
  mixer: MdGraphicEq,
  tasks: MdCheckCircle,
  timer: MdOutlineTimer,
  clipboard: MdContentPaste,
};

export default function MacletPage() {
  const [lang, setLang] = useState("en");
  const locales = { en, tr };
  const t = (key) => key.split(".").reduce((value, item) => value?.[item], locales[lang]) || key;

  return (
    <div className="maclet-page product-page">
      <div className="maclet-ambient" aria-hidden="true"><i /><i /></div>

      <header className="maclet-nav">
        <DeveloperBackButton bgColor="#e8edf5" textColor="#111722" />
        <span>MACLET · macOS</span>
        <LanguageSwitcher lang={lang} setLang={setLang} bgColor="#202938" textColor="#f6f8fb" />
      </header>

      <main className="maclet-main">
        <section className="maclet-hero">
          <div className="maclet-hero__copy">
            <div className="maclet-brand"><img src={macletLogo} alt="" /><span>Maclet<small>{t("brand.tagline")}</small></span></div>
            <span className="maclet-eyebrow">{t("hero.eyebrow")}</span>
            <h1>{t("hero.title")} <em>{t("hero.highlight")}</em></h1>
            <p>{t("hero.description")}</p>
            <div className="maclet-status"><span />{t("hero.status")}</div>
          </div>

          <div className="maclet-demo" aria-label={t("hero.previewLabel")}>
            <div className="maclet-demo__menubar">
              <span className="maclet-demo__app"><img src={macletLogo} alt="" />Maclet</span><i />
              <span><MdMusicNote /> Focus</span><span><MdOutlineTimer /> 24:18</span>
            </div>
            <div className="maclet-panel">
              <div className="maclet-panel__title"><span><MdMusicNote /></span><div><strong>{t("hero.nowPlaying")}</strong><small>MACLET</small></div><MdTune /></div>
              <div className="maclet-player">
                <div className="maclet-player__art"><MdGraphicEq /></div>
                <div><strong>{t("hero.track")}</strong><small>{t("hero.artist")}</small></div>
                <div className="maclet-player__controls"><MdKeyboardArrowLeft /><MdPause /><MdKeyboardArrowRight /></div>
              </div>
              <div className="maclet-volume"><span><MdGraphicEq /> Music</span><i><b /></i><strong>72%</strong></div>
              <div className="maclet-quick-grid">
                <div><MdCheckCircle /><span>{t("hero.tasks")}</span></div>
                <div><MdOutlineTimer /><span>{t("hero.timer")}</span></div>
                <div><MdContentPaste /><span>{t("hero.clipboard")}</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="maclet-features">
          <header><div><span className="maclet-eyebrow">01 / {t("features.eyebrow")}</span><h2>{t("features.title")}</h2></div><p>{t("features.description")}</p></header>
          <div className="maclet-feature-grid">
            {Object.entries(featureIcons).map(([key, Icon], index) => (
              <article key={key} className={index === 0 ? "maclet-feature maclet-feature--wide" : "maclet-feature"}>
                <span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{t(`features.items.${key}.title`)}</h3><p>{t(`features.items.${key}.description`)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="maclet-native">
          <div className="maclet-native__copy"><span className="maclet-eyebrow">02 / {t("native.eyebrow")}</span><h2>{t("native.title")}</h2><p>{t("native.description")}</p></div>
          <ul>
            {Object.keys(locales.en.native.points).map((key) => <li key={key}><MdShield aria-hidden="true" /><span>{t(`native.points.${key}`)}</span></li>)}
          </ul>
        </section>

        <section className="maclet-cta">
          <span className="maclet-eyebrow">{t("cta.eyebrow")}</span>
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.description")}</p>
          <div><span />{t("hero.status")}</div>
        </section>
      </main>

      <footer className="maclet-footer"><p>© 2026 Maclet · {t("footer.credit")} Fırat Güler</p><span>SWIFT · SWIFTUI · APPKIT · CORE AUDIO</span></footer>
    </div>
  );
}
