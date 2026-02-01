import React from "react";
import { MdSportsEsports, MdPerson, MdLanguage, MdCasino } from "react-icons/md";

export default function BoardyFeatures({ t }) {
  const features = [
    { 
      // Kart ve Harita Modları
      title: t("boardyFeatures.items.education.title"), 
      desc: t("boardyFeatures.items.education.desc"), 
      icon: <MdSportsEsports className="text-boardy-bg w-10 h-10" />, 
      size: "small" 
    },
    { 
      // Piyon (Meeple) Seçimi
      title: t("boardyFeatures.items.age.title"), 
      desc: t("boardyFeatures.items.age.desc"), 
      icon: <MdPerson className="text-boardy-bg w-10 h-10" />, 
      size: "small" 
    },
    { 
      // Diller ve Çevrimdışı Kullanım
      title: t("boardyFeatures.items.languages.title"), 
      desc: t("boardyFeatures.items.languages.desc"), 
      icon: <MdLanguage className="text-boardy-bg w-10 h-10" />, 
      size: "wide" 
    }
  ];

  return (
    // py-12 md:py-20 yerine py-0 yapıldı. Eğer çok yapışık olursa py-4 yapabilirsin.
    <section className="px-6 py-0 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Ana Büyük Kart */}
        <div className="col-span-2 row-span-2 bg-white rounded-[2.5rem] p-10 shadow-sm border border-black/5 flex flex-col justify-center min-h-[350px]">
          <div>
            <MdCasino className="text-boardy-bg w-14 h-14 mb-4" /> {/* mb-6 -> mb-4 */}
            <h4 className="text-4xl font-black mb-3 leading-tight"> {/* mb-4 -> mb-3 */}
              {t("boardyFeatures.mainTitle")}
            </h4>
            <p className="text-boardy-text/60 text-lg font-bold leading-snug">
              {t("boardyFeatures.mainDesc")}
            </p>
          </div>
        </div>

        {/* Diğer Bento Kartları */}
        {features.map((f, i) => (
          <div 
            key={i} 
            className={`bg-white rounded-[2rem] p-6 shadow-sm border border-black/5 flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-all duration-300 gap-3 ${
              f.size === 'wide' ? 'col-span-2 sm:flex-row sm:text-left sm:px-10' : ''
            }`}
          >
            <div className="shrink-0">{f.icon}</div>
            <div>
              <h4 className="text-xl font-black leading-tight">{f.title}</h4>
              <p className="text-boardy-text/50 text-sm font-bold">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}