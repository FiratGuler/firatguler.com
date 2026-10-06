import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
import { useScrollStep } from "../../Core/Motion/useScrollStep";
import { Reveal } from "../../Core/Motion/Reveal";
import glimpsieLogo from "./Assets/glimpsie_logo.png";
import widgetAdd from "./Assets/Widgets/widget.preview.add.small.png";
import widgetCalendarMedium from "./Assets/Widgets/widget.preview.calendar.medium.png";
import widgetCalendarSmall from "./Assets/Widgets/widget.preview.calendar.small.png";
import widgetFortune from "./Assets/Widgets/widget.preview.fortune.cookie.small.png";
import widgetStreak from "./Assets/Widgets/widget.preview.streak.small.png";
import widgetWeekEntries from "./Assets/Widgets/widget.preview.week.entries.medium.png";
import widgetWeeklyStreak from "./Assets/Widgets/widget.preview.weekly.streak.medium.png";
import en from "../../Locale/i18n/en/glimpsie.json";
import tr from "../../Locale/i18n/tr/glimpsie.json";
import "./glimpsie.css";

const modules = [
  ["mood", MdEmojiEmotions], ["emotions", MdFavorite], ["doodle", MdDraw],
  ["dream", MdBedtime], ["note", MdNotes], ["movement", MdOutlineDirectionsRun],
  ["people", MdPeople], ["music", MdHeadphones],
];

const widgets = [
  ["calendarMedium", widgetCalendarMedium, "glimpsie-widget-card--wide"],
  ["add", widgetAdd, "glimpsie-widget-card--compact"],
  ["weekEntries", widgetWeekEntries, "glimpsie-widget-card--wide"],
  ["fortune", widgetFortune, "glimpsie-widget-card--compact"],
  ["calendarSmall", widgetCalendarSmall, "glimpsie-widget-card--third"],
  ["streak", widgetStreak, "glimpsie-widget-card--third"],
  ["weeklyStreak", widgetWeeklyStreak, "glimpsie-widget-card--third"],
];

export default function GlimpsiePage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
  const locales = { en, tr };
  const modulesRef = useRef(null);
  const step = useScrollStep(modulesRef, modules.length);
  const activeKey = modules[step][0];
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
        <div className="product-story">
          <div className="product-story__flow">
            <section className="glimpsie-hero glimpsie-hero--copy">
              <div className="glimpsie-hero__copy">
                <div className="glimpsie-brand"><img src={glimpsieLogo} alt="" style={{ viewTransitionName: "app-icon-glimpsie" }} /><span>Glimpsie<small>{t("brand.tagline")}</small></span></div>
                <span className="glimpsie-eyebrow">{t("hero.eyebrow")}</span>
                <h1>{t("hero.title")} <em>{t("hero.highlight")}</em></h1>
                <p>{t("hero.description")}</p>
                <div className="glimpsie-status"><span />{t("hero.status")}</div>
              </div>
            </section>

            <section className="glimpsie-modules" ref={modulesRef}>
              <header><div><span className="glimpsie-eyebrow">01 / {t("modules.eyebrow")}</span><h2>{t("modules.title")}</h2></div><p>{t("modules.description")}</p></header>
              <div className="glimpsie-module-grid">
                {modules.map(([key, Icon], index) => (
                  <article key={key} className={step === index ? "is-active" : undefined}><span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{t(`modules.items.${key}.title`)}</h3><p>{t(`modules.items.${key}.description`)}</p></article>
                ))}
              </div>
            </section>
          </div>

          <aside className="product-story__stage">
            <div className="glimpsie-preview" aria-label={t("hero.previewLabel")}>
              <div className="glimpsie-preview__top"><span>{t("preview.month")}</span><b>12</b></div>
              <div className="glimpsie-preview__calendar">
                {["8", "9", "10", "11", "12", "13", "14"].map((day) => <span key={day} className={day === "12" ? "active" : ""}>{day}</span>)}
              </div>
              <div className="glimpsie-preview__question">{t("preview.question")}</div>
              <div className="glimpsie-preview__moods"><i>☹</i><i>◔</i><i className="selected">●</i><i>◕</i><i>☺</i></div>
              <div className="glimpsie-preview__glance">
                <span>{t("preview.glance")}</span>
                <AnimatePresence mode="wait">
                  <motion.strong
                    key={activeKey}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                  >
                    {t(`modules.items.${activeKey}.title`)}
                  </motion.strong>
                </AnimatePresence>
              </div>
            </div>
          </aside>
        </div>

        <Reveal as="section" className="glimpsie-world">
          <header><span className="glimpsie-eyebrow">02 / {t("world.eyebrow")}</span><h2>{t("world.title")}</h2><p>{t("world.description")}</p></header>
          <div className="glimpsie-world__grid">
            <article><MdCalendarMonth /><h3>{t("world.calendar.title")}</h3><p>{t("world.calendar.description")}</p></article>
            <article><MdLocalFireDepartment /><h3>{t("world.streak.title")}</h3><p>{t("world.streak.description")}</p></article>
            <article><MdAutoAwesome /><h3>{t("world.themes.title")}</h3><p>{t("world.themes.description")}</p><div className="glimpsie-theme-dots"><i /><i /><i /><i /><i /></div></article>
            <article><MdOutlineWidgets /><h3>{t("world.widgets.title")}</h3><p>{t("world.widgets.description")}</p></article>
          </div>
        </Reveal>

        <Reveal as="section" className="glimpsie-widgets">
          <header>
            <div>
              <span className="glimpsie-eyebrow">03 / {t("widgets.eyebrow")}</span>
              <h2>{t("widgets.title")}</h2>
            </div>
            <p>{t("widgets.description")}</p>
          </header>
          <div className="glimpsie-widget-gallery">
            {widgets.map(([key, image, className], index) => (
              <figure className={`glimpsie-widget-card ${className}`} key={key}>
                <img src={image} alt={t(`widgets.items.${key}`)} loading="lazy" />
                <figcaption><span>0{index + 1}</span>{t(`widgets.items.${key}`)}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

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
