import React, { createContext, useContext, useState } from "react";

import enHome from "../i18n/en/home.json";
import enWordy from "../i18n/en/wordy.json";
import enBoardy from "../i18n/en/boardy.json";

import trHome from "../i18n/tr/home.json";
import trWordy from "../i18n/tr/wordy.json";
import trBoardy from "../i18n/tr/boardy.json";

const translations = {
  en: {
    home: enHome,
    wordy: enWordy,
    boardy: enBoardy,
  },

  tr: {
    home: trHome,
    wordy: trWordy,
    boardy: trBoardy,
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = (page, key) => {
    const keys = key.split(".");
    let value = translations[lang][page];
    keys.forEach(k => {
      value = value?.[k];
    });
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
