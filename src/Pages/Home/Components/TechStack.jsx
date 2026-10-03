import React from "react";
import techData from "../../../Models/TechData";
import { RevealGroup, RevealItem } from "../../../Core/Motion/Reveal";

const tickerItems = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Firebase",
  "Architecture",
  "Product Design",
  "Swift",
  "SwiftUI",
  "UIKit",
  "Firebase",
  "Architecture",
  "Product Design",
];

export default function TechStack({ t }) {
  return (
    <RevealGroup as="section" className="stack-section" id="stack">
      <div className="stack-ticker" aria-hidden="true">
        <div className="stack-ticker__track">
          {tickerItems.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <span>{item}</span>
              <i>•</i>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="stack-section__body">
        <div className="section-heading section-heading--stack">
          <div className="section-heading__copy">
            <span className="section-index">02 / {t("techStack.eyebrow")}</span>
            <h2 className="section-title">{t("techStack.title")}</h2>
          </div>
          <p className="stack-section__summary">{t("techStack.summary")}</p>
        </div>

        <div className="stack-grid">
          {techData.map((tech, index) => (
            <RevealItem as="article" className="stack-card" key={tech.category}>
              <div className="stack-card__index">0{index + 1}</div>
              <h3>{t(`techStack.categories.${tech.category}`)}</h3>
              <ul>
                {tech.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </RevealItem>
          ))}
        </div>
      </div>
    </RevealGroup>
  );
}
