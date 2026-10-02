import React from "react";
import { FaApple } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import drinkaLogo from "../Assets/drinka_logo.png";
import heroImage from "../Assets/drinka_mobile.png";

export default function DrinkaHero({ t, appStoreUrl }) {
  return (
    <section className="drinka-hero">
      <div className="drinka-hero__copy">
        <div className="drinka-brand-lockup">
          <img src={drinkaLogo} alt="" />
          <div>
            <strong>Drinka</strong>
            <span>{t("brand.tagline")}</span>
          </div>
        </div>

        <span className="drinka-eyebrow">{t("hero.eyebrow")}</span>
        <h1>
          {t("hero.title")}
          <span>{t("hero.highlight")}</span>
        </h1>
        <p className="drinka-hero__description">{t("hero.description")}</p>

        <div className="drinka-hero__actions">
          <a
            className="drinka-store-button"
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple aria-hidden="true" />
            <span>
              <small>{t("hero.appStoreEyebrow")}</small>
              <strong>App Store</strong>
            </span>
            <MdArrowOutward aria-hidden="true" />
          </a>
          <span className="drinka-version-pill">{t("hero.version")}</span>
        </div>

        <dl className="drinka-hero__stats">
          <div><dt>09</dt><dd>{t("hero.stats.types")}</dd></div>
          <div><dt>10</dt><dd>{t("hero.stats.languages")}</dd></div>
          <div><dt>∞</dt><dd>{t("hero.stats.memories")}</dd></div>
        </dl>
      </div>

      <div className="drinka-device-stage">
        <div className="drinka-device-stage__ring" aria-hidden="true" />
        <span className="drinka-device-stage__label drinka-device-stage__label--map">
          {t("hero.floating.map")}
        </span>
        <span className="drinka-device-stage__label drinka-device-stage__label--journal">
          {t("hero.floating.journal")}
        </span>
        <div className="drinka-device">
          <div className="drinka-device__island" aria-hidden="true" />
          <img src={heroImage} alt={t("hero.imageAlt")} />
          <div className="drinka-device__fade" aria-hidden="true" />
        </div>
        <div className="drinka-memory-card">
          <span>{t("hero.memoryCard.eyebrow")}</span>
          <strong>{t("hero.memoryCard.title")}</strong>
          <small>{t("hero.memoryCard.detail")}</small>
        </div>
      </div>
    </section>
  );
}
