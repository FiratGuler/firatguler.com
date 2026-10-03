import React from "react";
import { motion, useReducedMotion } from "motion/react";
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

const ease = [0.22, 1, 0.36, 1];

function HeroLine({ children, delay, playIntro }) {
  const reduce = useReducedMotion();
  if (reduce || !playIntro) return <span className="hero-title__mask">{children}</span>;

  return (
    <span className="hero-title__mask">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.7, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function HomeHeaderCard({ t, playIntro = true }) {
  const reduce = useReducedMotion();
  const animateIntro = playIntro && !reduce;
  const hidden = animateIntro ? { opacity: 0 } : false;
  const shown = { opacity: 1 };

  return (
    <section className="hero-card" id="intro">
      <div className="hero-card__glow" aria-hidden="true" />
      <div className="hero-card__content">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            {t("hero.availability")}
          </div>

          <h1 className="hero-title" aria-label="Fırat Güler">
            <HeroLine delay={0} playIntro={animateIntro}>Fırat</HeroLine>
            <HeroLine delay={0.09} playIntro={animateIntro}>
              Güler
              <motion.span
                className="hero-title__dot"
                initial={animateIntro ? { scale: 0, opacity: 0 } : false}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.79, ease }}
              >
                .
              </motion.span>
            </HeroLine>
          </h1>

          <motion.span
            className="hero-rule"
            aria-hidden="true"
            initial={animateIntro ? { scaleX: 0 } : false}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.7, ease }}
          />

          <div className="hero-intro-row">
            <motion.p
              className="hero-intro"
              initial={hidden}
              animate={shown}
              transition={{ duration: 0.4, delay: 1.15, ease }}
            >
              {t("hero.intro")}
            </motion.p>
            <motion.span
              className="hero-intro-row__mark"
              initial={animateIntro ? { opacity: 0, x: -10 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7, ease }}
            >
              <MdArrowOutward className="hero-intro-row__arrow" aria-hidden="true" />
            </motion.span>
          </div>

          <motion.div
            className="hero-socials scrollbar-hidden"
            initial={hidden}
            animate={shown}
            transition={{ duration: 0.4, delay: 1.15, ease }}
          >
            <SocialButton icon={FaGithub} text="GitHub" href="https://github.com/FiratGuler" />
            <SocialButton icon={FaLinkedin} text="LinkedIn" href="https://www.linkedin.com/in/firatgulerr/" />
            <SocialButton icon={MdMail} text="Mail" href="mailto:firattgulerrr@gmail.com" />
          </motion.div>
        </div>

        <div className="portrait-composition" aria-label={t("hero.portraitLabel")}>
          <div className="portrait-composition__backdrop" aria-hidden="true" />
          <motion.div
            className="portrait-composition__label"
            aria-hidden="true"
            initial={hidden}
            animate={shown}
            transition={{ duration: 0.35, delay: 1.25, ease }}
          >
            <span>PORTRAIT</span>
            <span>01 / 01</span>
          </motion.div>

          <motion.div
            className="portrait-composition__enter"
            initial={animateIntro ? { opacity: 0, y: 28, rotate: 6 } : false}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            <div className="portrait-composition__media">
              <img src={profilePic} alt={t("hero.portraitAlt")} />
              <div className="portrait-composition__shine" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div
            className="portrait-composition__rail"
            aria-hidden="true"
            initial={hidden}
            animate={shown}
            transition={{ duration: 0.35, delay: 1.25, ease }}
          >
            <span>SWIFT</span>
            <i />
            <span>SWIFTUI</span>
            <i />
            <span>IOS</span>
          </motion.div>

          <motion.div
            className="portrait-composition__card"
            initial={hidden}
            animate={shown}
            transition={{ duration: 0.35, delay: 1.25, ease }}
          >
            <span className="portrait-composition__location">
              <i aria-hidden="true" />
              {t("hero.location")}
            </span>
            <strong>{t("hero.portraitNote")}</strong>
          </motion.div>
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
