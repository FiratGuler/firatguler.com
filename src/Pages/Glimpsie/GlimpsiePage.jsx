import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdAutoAwesome,
  MdBedtime,
  MdCalendarMonth,
  MdDraw,
  MdEmojiEmotions,
  MdFavorite,
  MdHeadphones,
  MdLocalFireDepartment,
  MdNotes,
  MdOutlineDirectionsRun,
  MdOutlineWidgets,
  MdPeople,
} from "react-icons/md";
import DeveloperBackButton from "../../Features/UIComponents/DeveloperBackButton";
import LanguageSwitcher from "../../Features/UIComponents/LanguageSwitcher";
import ProductSocialSection from "../../Features/UIComponents/ProductSocialSection";
import glimpsieLogo from "./Assets/glimpsie_logo.png";
import en from "../../Locale/i18n/en/glimpsie.json";
import tr from "../../Locale/i18n/tr/glimpsie.json";
import "./glimpsie.css";

const modules = [
  ["mood", MdEmojiEmotions], ["emotions", MdFavorite], ["doodle", MdDraw],
  ["dream", MdBedtime], ["note", MdNotes], ["movement", MdOutlineDirectionsRun],
  ["people", MdPeople], ["music", MdHeadphones],
];

export default function GlimpsiePage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
  const locales = { en, tr };
  const t = (key) => key.split(".").reduce((value, item) => value?.[item], locales[lang]) || key;

  return (
    <div className="glimpsie-page product-page">
      <div className="glimpsie-orb glimpsie-orb--one" aria-hidden="true" />
      <div className="glimpsie-orb glimpsie-orb--two" aria-hidden="true" />

      <header className="glimpsie-nav">
        <DeveloperBackButton bgColor="#A299D9" textColor="#161927" />
        <span>GLIMPSIE · IOS</span>
        <LanguageSwitcher lang={lang} setLang={setLang} bgColor="#2D303D" textColor="#F6F5FB" />
      </header>

      <main className="glimpsie-main">
        <section className="glimpsie-hero">
          <div className="glimpsie-hero__copy">
            <div className="glimpsie-brand"><img src={glimpsieLogo} alt="" /><span>Glimpsie<small>{t("brand.tagline")}</small></span></div>
            <span className="glimpsie-eyebrow">{t("hero.eyebrow")}</span>
            <h1>{t("hero.title")} <em>{t("hero.highlight")}</em></h1>
            <p>{t("hero.description")}</p>
            <div className="glimpsie-status"><span />{t("hero.status")}</div>
          </div>

          <div className="glimpsie-preview" aria-label={t("hero.previewLabel")}>
            <div className="glimpsie-preview__top"><span>{t("preview.month")}</span><b>12</b></div>
            <div className="glimpsie-preview__calendar">
              {["8", "9", "10", "11", "12", "13", "14"].map((day) => <span key={day} className={day === "12" ? "active" : ""}>{day}</span>)}
            </div>
            <div className="glimpsie-preview__question">{t("preview.question")}</div>
            <div className="glimpsie-preview__moods"><i>☹</i><i>◔</i><i className="selected">●</i><i>◕</i><i>☺</i></div>
            <div className="glimpsie-preview__glance"><span>{t("preview.glance")}</span><strong>{t("preview.summary")}</strong></div>
          </div>
        </section>

        <section className="glimpsie-modules">
          <header><div><span className="glimpsie-eyebrow">01 / {t("modules.eyebrow")}</span><h2>{t("modules.title")}</h2></div><p>{t("modules.description")}</p></header>
          <div className="glimpsie-module-grid">
            {modules.map(([key, Icon], index) => (
              <article key={key}><span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{t(`modules.items.${key}.title`)}</h3><p>{t(`modules.items.${key}.description`)}</p></article>
            ))}
          </div>
        </section>

        <section className="glimpsie-world">
          <header><span className="glimpsie-eyebrow">02 / {t("world.eyebrow")}</span><h2>{t("world.title")}</h2><p>{t("world.description")}</p></header>
          <div className="glimpsie-world__grid">
            <article><MdCalendarMonth /><h3>{t("world.calendar.title")}</h3><p>{t("world.calendar.description")}</p></article>
            <article><MdLocalFireDepartment /><h3>{t("world.streak.title")}</h3><p>{t("world.streak.description")}</p></article>
            <article><MdAutoAwesome /><h3>{t("world.themes.title")}</h3><p>{t("world.themes.description")}</p><div className="glimpsie-theme-dots"><i /><i /><i /><i /><i /></div></article>
            <article><MdOutlineWidgets /><h3>{t("world.widgets.title")}</h3><p>{t("world.widgets.description")}</p></article>
          </div>
        </section>

        <ProductSocialSection
          variant="glimpsie"
          url="https://www.firatguler.com/glimpsie"
          t={t}
        />

        <section className="glimpsie-cta">
          <span className="glimpsie-eyebrow">{t("cta.eyebrow")}</span>
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.description")}</p>
          <div><span />{t("hero.status")}</div>
        </section>
      </main>

      <footer className="glimpsie-footer">
        <p>© 2026 Glimpsie · {t("footer.credit")}</p>
        <button type="button" onClick={() => navigate("/GlimpsiePrivacyPolicy")}>{t("footer.privacy")}</button>
      </footer>
    </div>
  );
}
