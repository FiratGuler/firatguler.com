import React from "react";
import techData from "../../../Models/TechData";

export default function TechStack({ t }) {
  return (
    <section className="bg-tile-dark rounded-[2.5rem] glass-border p-10 md:p-14">
      {/* Başlık Bölümü */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-black uppercase tracking-tight">
          {t("techStack.title")}
        </h2>
      </div>

      {/* Grid Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techData.map((tech, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-3xl p-6 border border-white/5 hover:bg-white/[0.08] transition-all group"
          >
            <p className="text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
              {t(`techStack.categories.${tech.category}`)}
            </p>

            <ul className="space-y-3">
              {tech.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-3">
                  {/* Küçük sarı nokta (indicator) */}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shadow-[0_0_8px_rgba(254,231,21,0.4)]"></span>
                  <span className="font-bold text-white/90 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
