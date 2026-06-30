import React from "react";
import drinkaLogo from "../Assets/drinka_logo.png";

export default function DrinkaLogoText({ t }) {
  return (
    <div className="flex flex-row items-center gap-4 md:gap-8">
      <div className="relative shrink-0 group">
        <img
          src={drinkaLogo}
          alt="Drinka Logo"
          className="size-20 md:size-40 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-drinka-primary/30 rotate-2 group-hover:rotate-0 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-drinka-primary/25 blur-2xl -z-10 rounded-full scale-75" />
      </div>

      <div className="flex flex-col text-left justify-center">
        <h1 className="text-3xl md:text-7xl font-bold tracking-tighter text-drinka-light leading-none uppercase">
          {t("drinkaLogoText.title")}
        </h1>
        <p className="text-drinka-primary font-semibold text-sm md:text-xl italic mt-1 md:mt-3 max-w-[180px] md:max-w-sm leading-tight">
          {t("drinkaLogoText.subtitle")}
        </p>
      </div>
    </div>
  );
}
