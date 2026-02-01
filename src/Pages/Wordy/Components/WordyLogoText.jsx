import React from "react";
import wordyLogo from "../Assets/wordy_logo.png";

export default function WordyLogoText({ t }) {
  return (
    <div className="flex flex-row items-center gap-4 md:gap-8">
      <div className="relative shrink-0 group">
        <img 
          src={wordyLogo} 
          alt="Wordy Logo" 
          className="size-20 md:size-40 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 border-2 md:border-4 border-white/20"
        />
        <div className="absolute inset-0 bg-wordy-accent/20 blur-2xl -z-10 rounded-full scale-75" />
      </div>

      {/* Yazı Alanı */}
      <div className="flex flex-col text-left justify-center">
        <h1 className="text-3xl md:text-7xl font-bold tracking-tighter text-wordy-text leading-none uppercase">
          {t("wordyLogoText.title")}
        </h1>
        <p className="text-wordy-accent font-800 text-sm md:text-xl italic mt-1 md:mt-3 max-w-[180px] md:max-w-sm leading-tight">
          {t("wordyLogoText.subtitle")}
        </p>
      </div>
    </div>
  );
}