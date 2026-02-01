import React from "react";
import { MdSchool, MdVerifiedUser, MdTranslate, MdPsychology } from "react-icons/md";

export default function WordyFeatures({ t }) {
  const features = [
    { 
      title: t("wordyFeatures.items.education.title"), 
      desc: t("wordyFeatures.items.education.desc"), 
      icon: <MdSchool className="text-wordy-accent w-10 h-10" />, // mb-2 kaldırıldı
      size: "small" 
    },
    { 
      title: t("wordyFeatures.items.age.title"), 
      desc: t("wordyFeatures.items.age.desc"), 
      icon: <MdVerifiedUser className="text-wordy-accent w-10 h-10" />, // mb-2 kaldırıldı
      size: "small" 
    },
    { 
      title: t("wordyFeatures.items.languages.title"), 
      desc: t("wordyFeatures.items.languages.desc"), 
      icon: <MdTranslate className="text-wordy-accent w-10 h-10" />, // mb-2 kaldırıldı
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
            <MdPsychology className="text-wordy-accent w-14 h-14 mb-4" /> {/* mb-6 -> mb-4 */}
            <h4 className="text-4xl font-black mb-3 leading-tight"> {/* mb-4 -> mb-3 */}
              {t("wordyFeatures.mainTitle")}
            </h4>
            <p className="text-wordy-text/60 text-lg font-bold leading-snug">
              {t("wordyFeatures.mainDesc")}
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
              <p className="text-wordy-text/50 text-sm font-bold">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}