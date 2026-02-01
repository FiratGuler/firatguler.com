import React from "react";
import profilePic from "../../Assets/profilePhoto.png";
import SocialButton from "../SocialButton";
import "../../../../Utils/global.css";
// React Icons import
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function HomeHeaderCard() {
  return (
    <section className="relative w-full max-w-full overflow-hidden rounded-[2.5rem] p-6 md:p-14 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12 glass-border 
      bg-gradient-to-br from-primary/20 via-tile-dark to-tile-dark">
      
      {/* Profil Resmi */}
<div className="absolute top-4 right-4 w-32 h-32 md:w-64 md:h-64 lg:static lg:order-2 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
  <img
    src={profilePic}
    alt="Profile"
    className="w-full h-full object-contain scale-110"
  />
</div>


      {/* Text alanı - min-w-0 BURADA KRİTİK */}
      <div className="flex-1 lg:order-1 mt-32 lg:mt-0 min-w-0 w-full">
        <span className="text-primary font-bold text-s tracking-[0.3em] uppercase mb-4 block">
          iOS Developer
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.85] break-words">
            Fırat Güler
        </h1>

        {/* Butonlar - Kaydırma Alanı */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-hidden">
          <div className="flex gap-3 whitespace-nowrap">
            <SocialButton icon={FaGithub} text="GitHub" href="https://github.com/FiratGuler" />
            <SocialButton icon={FaLinkedin} text="LinkedIn" href="https://www.linkedin.com/in/firatgulerr/" />
            <SocialButton icon={MdMail} text="Mail" href="mailto:firattgulerrr@gmail.com" />
          </div>
        </div>
      </div>
    </section>
  );
}
