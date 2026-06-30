import React, { useRef, useState, useEffect, useCallback } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import apps from "../../../Models/apps";
import AppCard from "./AppCard";
import "../../../Utils/global.css";

export default function FeaturedApps({ t }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="bg-tile-dark rounded-[2.5rem] overflow-hidden glass-border p-6 md:p-10">
      <div className="flex justify-between items-end mb-6 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            {t("featuredApps.title")}
          </h2>
          <p className="text-white/40 text-lg mt-4">
            {t("featuredApps.subtitle")}
          </p>
        </div>

        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95 disabled:opacity-25 disabled:pointer-events-none"
          >
            <MdChevronLeft className="text-2xl" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95 disabled:opacity-25 disabled:pointer-events-none"
          >
            <MdChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto flex items-stretch gap-4 snap-x snap-mandatory pb-4 scrollbar-hidden"
      >
        {apps.map((app) => (
          <AppCard
            key={app.id}
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
