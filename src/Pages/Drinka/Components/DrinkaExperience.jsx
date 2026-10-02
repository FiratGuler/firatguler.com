import React from "react";
import { MdAddAPhoto, MdLocationPin, MdPeople, MdAutoStories } from "react-icons/md";

const steps = [
  { key: "capture", icon: MdAddAPhoto },
  { key: "place", icon: MdLocationPin },
  { key: "people", icon: MdPeople },
  { key: "revisit", icon: MdAutoStories },
];

const drinkTypes = [
  "Beer", "Wine", "Gin", "Rakı", "Rum", "Tequila", "Vodka", "Whisky", "Cocktail",
];

export default function DrinkaExperience({ t }) {
  return (
    <section className="drinka-experience">
      <header className="drinka-section-heading">
        <div>
          <span className="drinka-eyebrow">01 / {t("experience.eyebrow")}</span>
          <h2>{t("experience.title")}</h2>
        </div>
        <p>{t("experience.description")}</p>
      </header>

      <div className="drinka-steps">
        {steps.map(({ key, icon: Icon }, index) => (
          <article key={key} className="drinka-step">
            <span className="drinka-step__number">0{index + 1}</span>
            <Icon aria-hidden="true" />
            <h3>{t(`experience.steps.${key}.title`)}</h3>
            <p>{t(`experience.steps.${key}.description`)}</p>
          </article>
        ))}
      </div>

      <div className="drinka-types" aria-label={t("experience.typesLabel")}>
        <div className="drinka-types__track">
          {[...drinkTypes, ...drinkTypes].map((type, index) => (
            <React.Fragment key={`${type}-${index}`}>
              <span>{type}</span><i>◆</i>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
