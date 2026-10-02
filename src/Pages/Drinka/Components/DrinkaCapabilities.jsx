import React from "react";
import {
  MdBookmarkBorder,
  MdExplore,
  MdFavoriteBorder,
  MdInsights,
  MdLanguage,
  MdLocalBar,
  MdMap,
  MdNotificationsNone,
  MdOutlineWidgets,
  MdPersonOutline,
  MdSearch,
  MdShare,
} from "react-icons/md";

const capabilities = [
  { key: "collection", icon: MdFavoriteBorder, tone: "wine" },
  { key: "tryList", icon: MdBookmarkBorder, tone: "rose" },
  { key: "venues", icon: MdExplore, tone: "olive" },
  { key: "map", icon: MdMap, tone: "blue" },
  { key: "contacts", icon: MdPersonOutline, tone: "violet" },
  { key: "cocktails", icon: MdLocalBar, tone: "plum" },
  { key: "profile", icon: MdInsights, tone: "amber" },
  { key: "reminders", icon: MdNotificationsNone, tone: "wine" },
  { key: "widgets", icon: MdOutlineWidgets, tone: "rose" },
  { key: "search", icon: MdSearch, tone: "blue" },
  { key: "sharing", icon: MdShare, tone: "violet" },
  { key: "languages", icon: MdLanguage, tone: "olive" },
];

export default function DrinkaCapabilities({ t }) {
  return (
    <section className="drinka-capabilities">
      <header className="drinka-section-heading">
        <div>
          <span className="drinka-eyebrow">02 / {t("capabilities.eyebrow")}</span>
          <h2>{t("capabilities.title")}</h2>
        </div>
        <p>{t("capabilities.description")}</p>
      </header>

      <div className="drinka-capability-grid">
        {capabilities.map(({ key, icon: Icon, tone }, index) => (
          <article className={`drinka-capability drinka-capability--${tone}`} key={key}>
            <div className="drinka-capability__topline">
              <span>0{index + 1}</span>
              <Icon aria-hidden="true" />
            </div>
            <h3>{t(`capabilities.items.${key}.title`)}</h3>
            <p>{t(`capabilities.items.${key}.description`)}</p>
          </article>
        ))}
      </div>

      <div className="drinka-platform-strip">
        <div>
          <span className="drinka-eyebrow">{t("platform.eyebrow")}</span>
          <h3>{t("platform.title")}</h3>
        </div>
        <ul>
          {["cloud", "account", "privacy", "sync"].map((key) => (
            <li key={key}><span>✓</span>{t(`platform.items.${key}`)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
