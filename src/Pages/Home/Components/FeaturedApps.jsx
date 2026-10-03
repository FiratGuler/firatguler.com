import React from "react";
import { motion, useReducedMotion } from "motion/react";
import apps from "../../../Models/apps";
import AppCard from "./AppCard";
import { Reveal } from "../../../Core/Motion/Reveal";
import "../../../Utils/global.css";

export default function FeaturedApps({ t }) {
  const reduce = useReducedMotion();

  return (
    <section className="portfolio-section" id="work">
      <Reveal className="section-heading">
        <div className="section-heading__copy">
          <span className="section-index">01 / {t("featuredApps.eyebrow")}</span>
          <h2 className="section-title">{t("featuredApps.title")}</h2>
          <p className="section-subtitle">{t("featuredApps.subtitle")}</p>
        </div>
      </Reveal>

      <motion.div
        className="app-grid"
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        variants={{
          hidden: {},
          show: {},
        }}
      >
        {apps.map((app, index) => (
          <AppCard
            key={app.id}
            id={app.id}
            image={app.image}
            appStoreLink={app.appStoreLink}
            detailLink={app.detailLink}
            platform={app.platform}
            tags={app.tags}
            accent={app.accent}
            index={index + 1}
            title={t(`featuredApps.apps.${app.id}.title`)}
            subtitle={t(`featuredApps.apps.${app.id}.subtitle`)}
            desc={t(`featuredApps.apps.${app.id}.desc`)}
            buttonGet={t("featuredApps.getButton")}
            buttonDetail={t("featuredApps.detailButton")}
          />
        ))}
      </motion.div>
    </section>
  );
}
