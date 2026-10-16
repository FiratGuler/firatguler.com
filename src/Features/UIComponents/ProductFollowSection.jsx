import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaInstagram, FaThreads, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import apps from "../../Models/apps";
import { motionEase } from "../../Core/Motion/Reveal";
import "./product-follow-section.css";

const platforms = {
  instagram: { name: "Instagram", icon: FaInstagram },
  tiktok: { name: "TikTok", icon: FaTiktok },
  x: { name: "X", icon: FaXTwitter },
  youtube: { name: "YouTube", icon: FaYoutube },
  threads: { name: "Threads", icon: FaThreads },
};

const defaults = {
  eyebrow: "Follow along",
  title: "Stay close to the story.",
  description: "Updates, behind-the-scenes and new releases, straight from the app's own accounts.",
  action: "Follow on",
  live: "Active on {n} platforms",
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: motionEase } } };

function copy(t, key) {
  const value = t(`follow.${key}`);
  return value === `follow.${key}` ? defaults[key] : value;
}

export default function ProductFollowSection({ appId, theme = "dark", t }) {
  const reduce = useReducedMotion();
  const app = apps.find((entry) => entry.id === appId) ?? {};
  const links = (app.social ?? []).filter((link) => platforms[link.platform]);
  if (!links.length) return null;

  return (
    <motion.section
      className={`product-follow product-follow--${theme}`}
      style={{ "--follow-accent": app.accent }}
      variants={reduce ? undefined : container}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="product-follow__glow" aria-hidden="true" />
      <motion.header className="product-follow__intro" variants={reduce ? undefined : item}>
        <span>{copy(t, "eyebrow")}</span>
        <h2>{copy(t, "title")}</h2>
        <p>{copy(t, "description")}</p>
        <div className="product-follow__live"><i />{copy(t, "live").replace("{n}", links.length)}</div>
      </motion.header>

      <motion.div className="product-follow__list" variants={reduce ? undefined : item}>
        {links.map(({ platform, handle, url }) => {
          const { name, icon: Icon } = platforms[platform];
          return (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy(t, "action")} ${name}`}
              variants={reduce ? undefined : item}
              whileTap={reduce ? undefined : { scale: 0.99 }}
            >
              <span className="product-follow__icon"><Icon aria-hidden="true" /></span>
              <span className="product-follow__label">
                <strong>{handle}</strong>
                <small>{name}</small>
              </span>
              <MdArrowOutward className="product-follow__arrow" aria-hidden="true" />
            </motion.a>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
