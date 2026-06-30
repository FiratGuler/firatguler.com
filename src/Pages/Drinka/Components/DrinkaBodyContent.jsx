import React from "react";
import heroImage from "../Assets/drinka_mobile.png";
import { FaApple } from "react-icons/fa";

export default function DrinkaBodyContent({ t }) {
  return (
    <section className="px-6 pt-0 pb-12 md:pb-20 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-[240px] md:w-[300px]">
            <div className="absolute -inset-4 bg-drinka-primary/20 blur-3xl rounded-full" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-drinka-surface-800 overflow-hidden shadow-2xl shadow-black/50 aspect-[9/19]">
              <img
                src={heroImage}
                alt="Drinka Map"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-drinka-surface-900/40 via-transparent to-drinka-surface-900/90" />
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">
                <div className="h-2 w-16 rounded-full bg-drinka-primary" />
                <p className="text-drinka-light text-lg font-bold leading-tight">Map</p>
                <p className="text-drinka-muted text-xs font-medium">Pin where every night happened</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-drinka-light">
              {t("drinkaHero.title")}{" "}
              <span className="text-drinka-primary block lg:inline">
                {t("drinkaHero.highlight")}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-drinka-muted leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              {t("drinkaHero.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <div className="bg-drinka-surface-800 border border-white/10 text-drinka-muted px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 w-full sm:w-auto justify-center cursor-default">
              <FaApple className="text-2xl text-drinka-light" />
              <div className="flex flex-col items-start leading-none text-left">
                <span className="text-[10px] uppercase font-bold opacity-60">
                  {t("drinkaHero.appstoreButton")}
                </span>
                <span className="text-xl text-drinka-light">{t("drinkaHero.comingSoon")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
