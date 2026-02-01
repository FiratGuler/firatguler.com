import React from "react";

export default function AppCard({
  title,
  subtitle,
  desc,
  image,
  appStoreLink,
  detailLink,
  tags,
  buttonGet,
  buttonDetail,
}) {
  return (
    <div className="min-w-[290px] max-w-[280px] sm:min-w-[280px] sm:max-w-[280px] md:min-w-[360px] md:max-w-[360px] lg:min-w-[400px] lg:max-w-[400px] bg-white/5 rounded-[2rem] p-6 border border-white/5 flex flex-col h-full flex-shrink-0">
      {/* Image + Title */}
      <div className="flex items-center gap-5 mb-4">
        <div
          className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-cover bg-center border border-white/10 shadow-lg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div>
          <h4 className="font-black text-2xl leading-none mb-1">{title}</h4>
          <p className="text-[10px] text-primary font-bold tracking-widest">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-white/60 text-sm mb-4 flex-1">{desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-[10px] text-white/60 border border-white/20 rounded-full px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-1">
        {appStoreLink && (
          <a
            href={appStoreLink}
            className="bg-[#FEE715] text-[#121212] font-black rounded-full px-5 py-1.5 text-[11px] tracking-widest transition-all hover:scale-105 active:scale-95 uppercase flex-1 text-center"
          >
            {buttonGet}
          </a>
        )}
        {detailLink && (
          <a
            href={detailLink}
            target="_blank"
            className="border border-[#FEE715]/30 text-[#FEE715] font-bold rounded-full px-5 py-1.5 text-[11px] tracking-widest transition-all hover:bg-[#FEE715]/10 active:scale-95 uppercase flex-1 text-center"
          >
            {buttonDetail}
          </a>
        )}
      </div>
    </div>
  );
}
