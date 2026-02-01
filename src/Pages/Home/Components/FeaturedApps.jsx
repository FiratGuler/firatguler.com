import React from "react";
import apps from "../../../Models/apps";
import AppCard from "./AppCard";
import "../../../Utils/global.css";

export default function FeaturedApps({ t }) {
  return (
    <section className="bg-tile-dark rounded-[2.5rem] overflow-hidden glass-border p-6 md:p-10">
      {/* Başlık */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            {t("featuredApps.title")}
          </h2>
          <p className="text-white/40 text-lg mt-4">
            {t("featuredApps.subtitle")}
          </p>
        </div>
      </div>

      {/* App kartları */}
      <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scrollbar-hidden">
        {apps.map((app) => (
          <AppCard
            key={app.id} // apps objesinde id olduğundan emin ol
            image={app.image}
            appStoreLink={app.appStoreLink}
            detailLink={app.detailLink}
            tags={app.tags}
            title={t(`featuredApps.apps.${app.id}.title`)}
            subtitle={t(`featuredApps.apps.${app.id}.subtitle`)}
            desc={t(`featuredApps.apps.${app.id}.desc`)}
            buttonGet={t(`featuredApps.getButton`)}
            buttonDetail={t(`featuredApps.detailButton`)}
          />
        ))}
      </div>
    </section>
  );
}
