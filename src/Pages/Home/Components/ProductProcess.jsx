import React from "react";
import { MdArrowForward, MdBrush, MdCode, MdLightbulb, MdRocketLaunch } from "react-icons/md";

const steps = [
  { key: "product", icon: MdLightbulb },
  { key: "design", icon: MdBrush },
  { key: "build", icon: MdCode },
  { key: "ship", icon: MdRocketLaunch },
];

export default function ProductProcess({ t }) {
  return (
    <section className="process-section reveal reveal--three" id="process">
      <div className="process-section__intro">
        <span className="section-index">00 / {t("process.eyebrow")}</span>
        <h2>{t("process.title")}</h2>
        <p>{t("process.description")}</p>
        <div className="process-section__learning">
          <span>{t("process.learningLabel")}</span>
          <strong>Node.js · PostgreSQL</strong>
        </div>
      </div>

      <div className="process-flow">
        {steps.map(({ key, icon: Icon }, index) => (
          <React.Fragment key={key}>
            <article className="process-step">
              <span>0{index + 1}</span>
              <Icon aria-hidden="true" />
              <h3>{t(`process.steps.${key}.title`)}</h3>
              <p>{t(`process.steps.${key}.description`)}</p>
            </article>
            {index < steps.length - 1 && <MdArrowForward className="process-flow__arrow" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
