import React from "react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function WordySocial({ t }) {
  const socials = [
    {
      name: "Instagram",
      handle: "@wordy.flashcard",
      icon: <FaInstagram className="w-8 h-8 text-[#E4405F]" />,
      link: "https://www.instagram.com/wordy.flashcard/",
      hoverColor: "hover:border-[#E4405F]/30",
    },
    {
      name: "TikTok",
      handle: "@wordy.flashcard",
      icon: <FaTiktok className="w-8 h-8 text-black" />,
      link: "https://www.tiktok.com/@wordy.flashcard",
      hoverColor: "hover:border-black/30",
    },
    {
      name: "X",
      handle: "@WordyFlashcard",
      icon: <FaXTwitter className="w-8 h-8 text-black" />, 
      link: "https://x.com/WordyFlashcard",
      hoverColor: "hover:border-black/30",
    },
  ];
  return (
    <section className="px-6 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 ${social.bgColor}`}
          >
            <div className="mb-4 bg-gray-50 p-4 rounded-full">
              {social.icon}
            </div>
            <h4 className="text-xl font-black leading-tight mb-1">
              {social.name}
            </h4>
            <p className="text-wordy-text/50 text-sm font-bold">
              {social.handle}
            </p>
            
            {/* Buton Görünümlü Etiket */}
            <div className="mt-6 px-6 py-2 bg-wordy-text text-white rounded-full text-xs font-black uppercase tracking-wider">
              {t("social.follow") || "Takip Et"}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}