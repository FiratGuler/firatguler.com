import React from "react";
import { MdBook, MdMap, MdLocalBar, MdPeople, MdNightlife } from "react-icons/md";

export default function DrinkaFeatures({ t }) {
  const features = [
    {
      title: t("drinkaFeatures.items.journal.title"),
      desc: t("drinkaFeatures.items.journal.desc"),
      icon: <MdBook className="text-drinka-primary w-10 h-10" />,
      size: "small",
    },
    {
      title: t("drinkaFeatures.items.map.title"),
      desc: t("drinkaFeatures.items.map.desc"),
      icon: <MdMap className="text-drinka-primary w-10 h-10" />,
      size: "small",
    },
    {
      title: t("drinkaFeatures.items.types.title"),
      desc: t("drinkaFeatures.items.types.desc"),
      icon: <MdLocalBar className="text-drinka-primary w-10 h-10" />,
      size: "small",
    },
    {
      title: t("drinkaFeatures.items.social.title"),
      desc: t("drinkaFeatures.items.social.desc"),
      icon: <MdPeople className="text-drinka-primary w-10 h-10" />,
      size: "wide",
    },
  ];

  return (
    <section className="px-6 py-0 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="col-span-2 row-span-2 bg-drinka-surface-800 rounded-[2.5rem] p-8 md:p-10 border border-white/5 flex flex-col justify-center min-h-[320px]">
          <MdNightlife className="text-drinka-primary w-14 h-14 mb-4" />
          <h4 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-drinka-light">
            {t("drinkaFeatures.mainTitle")}
          </h4>
          <p className="text-drinka-muted text-base md:text-lg font-medium leading-snug">
            {t("drinkaFeatures.mainDesc")}
          </p>
        </div>

        {features.map((f, i) => (
          <div
            key={i}
            className={`bg-drinka-surface-800 rounded-[2rem] p-6 border border-white/5 flex flex-col items-center justify-center text-center hover:scale-[1.02] hover:border-drinka-primary/30 transition-all duration-300 gap-3 ${
              f.size === "wide" ? "col-span-2 sm:flex-row sm:text-left sm:px-10" : ""
            }`}
          >
            <div className="shrink-0">{f.icon}</div>
            <div>
              <h4 className="text-lg font-bold leading-tight text-drinka-light">{f.title}</h4>
              <p className="text-drinka-muted text-sm font-medium mt-1">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
