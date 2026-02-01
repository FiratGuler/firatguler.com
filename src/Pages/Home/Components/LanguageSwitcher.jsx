import React from "react";

export default function LanguageSwitcher({ lang, setLang, bgColor, textColor }) {
  return (
    <div className="flex justify-end mb-6">
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        className="px-6 py-2 rounded-2xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest text-xs border border-black/5"
        onClick={() => setLang(lang === "en" ? "tr" : "en")}
      >
        <span className={lang === "tr" ? "opacity-100" : "opacity-30"}>TR</span>
        <span className="w-[1px] h-3 opacity-20" style={{ backgroundColor: textColor }}></span>
        <span className={lang === "en" ? "opacity-100" : "opacity-30"}>EN</span>
      </button>
    </div>
  );
}