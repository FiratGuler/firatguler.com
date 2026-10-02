import React from "react";
import profilePic from "../../Assets/profilePhoto.png";
import SocialButton from "../SocialButton";
import "../../../../Utils/global.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdArrowOutward, MdMail } from "react-icons/md";

const marqueeItems = [
  "SWIFT",
  "SWIFTUI",
  "PRODUCT",
  "FIREBASE",
  "DESIGN SYSTEMS",
  "SWIFT",
  "SWIFTUI",
  "PRODUCT",
  "FIREBASE",
  "DESIGN SYSTEMS",
];

export default function HomeHeaderCard({ t }) {
  return (
    <section className="hero-card reveal reveal--two" id="intro">
      <div className="hero-card__glow" aria-hidden="true" />
      <div className="hero-card__content">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            {t("hero.availability")}
          </div>

          <h1 className="hero-title" aria-label="Fırat Güler">
            <span>Fırat</span>
            <span>
              Güler<span className="hero-title__dot">.</span>
            </span>
          </h1>

          <div className="hero-intro-row">
            <p className="hero-intro">{t("hero.intro")}</p>
            <MdArrowOutward className="hero-intro-row__arrow" aria-hidden="true" />
          </div>

          <div className="hero-socials scrollbar-hidden">
            <SocialButton icon={FaGithub} text="GitHub" href="https://github.com/FiratGuler" />
            <SocialButton icon={FaLinkedin} text="LinkedIn" href="https://www.linkedin.com/in/firatgulerr/" />
            <SocialButton icon={MdMail} text="Mail" href="mailto:firattgulerrr@gmail.com" />
          </div>
        </div>

        <div className="portrait-composition" aria-label={t("hero.portraitLabel")}>
          <div className="portrait-composition__backdrop" aria-hidden="true" />
          <div className="portrait-composition__label" aria-hidden="true">
            <span>PORTRAIT</span>
            <span>01 / 01</span>
          </div>

          <div className="portrait-composition__media">
            <img src={profilePic} alt={t("hero.portraitAlt")} />
            <div className="portrait-composition__shine" aria-hidden="true" />
          </div>

          <div className="portrait-composition__rail" aria-hidden="true">
            <span>SWIFT</span>
            <i />
            <span>SWIFTUI</span>
            <i />
            <span>IOS</span>
          </div>

          <div className="portrait-composition__card">
            <span className="portrait-composition__location">
              <i aria-hidden="true" />
              {t("hero.location")}
            </span>
            <strong>{t("hero.portraitNote")}</strong>
          </div>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee__track">
          {marqueeItems.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <span>{item}</span>
              <i>✦</i>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
