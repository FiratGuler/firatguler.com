import React from "react";
import heroImage from "../Assets/wordy_mobile.png";
import { FaApple } from "react-icons/fa";

export default function WordyBodyContent({ t }) {
  return (
    <section className="px-6 pt-0 pb-12 md:pb-20 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-[240px] md:w-[320px] aspect-[9/19] group">
            <img
              src={heroImage}
              alt="Wordy App Interface"
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-float"
            />
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-wordy-text">
              {t("wordyHero.title")}{" "}
              <span className="text-wordy-accent block lg:inline">
                {t("wordyHero.highlight")}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-wordy-text/70 leading-relaxed max-w-lg mx-auto lg:mx-0 font-bold">
              {t("wordyHero.subtitle")}
            </p>
          </div>

          {/* App Store Butonu Alanı */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <button
              onClick={() =>
                window.open(
                  "https://apps.apple.com/tr/app/wordy-flashcard/id6741209566",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="bg-black text-white px-10 py-4 rounded-2xl font-900 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <FaApple className="text-2xl" />
              <div className="flex flex-col items-start leading-none text-left">
                <span className="text-[10px] uppercase font-bold opacity-60">
                  {t("wordyHero.appstoreButton")}
                </span>
                <span className="text-xl">App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
