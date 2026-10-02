import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import "./product-social-section.css";

const channels = [
  {
    key: "x",
    name: "X",
    icon: FaXTwitter,
    getUrl: (url, text) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    icon: FaLinkedinIn,
    getUrl: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    key: "whatsapp",
    name: "WhatsApp",
    icon: FaWhatsapp,
    getUrl: (url, text) =>
      `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  },
];

export default function ProductSocialSection({ variant, url, t }) {
  const shareText = t("social.shareText");

  return (
    <section className={`product-social product-social--${variant}`}>
      <header className="product-social__intro">
        <span>{t("social.eyebrow")}</span>
        <h2>{t("social.title")}</h2>
        <p>{t("social.description")}</p>
      </header>

      <div className="product-social__channels">
        {channels.map(({ key, name, icon: Icon, getUrl }) => (
          <a
            key={key}
            href={getUrl(url, shareText)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("social.action")} ${name}`}
          >
            <span className="product-social__icon"><Icon aria-hidden="true" /></span>
            <span className="product-social__label">
              <small>{t("social.action")}</small>
              <strong>{name}</strong>
            </span>
            <MdArrowOutward className="product-social__arrow" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
