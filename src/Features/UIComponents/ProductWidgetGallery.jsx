import React from "react";
import { Reveal } from "../../Core/Motion/Reveal";
import "./product-widget-gallery.css";

const sizes = { wide: "wide", compact: "compact", half: "half", third: "third" };

export default function ProductWidgetGallery({ items, index, accent, tone, surface, caption = "overlay", t }) {
  const style = { "--pw-accent": accent, "--pw-tone": tone ?? accent, "--pw-surface": surface };
  const eyebrow = index ? `${index} / ${t("widgets.eyebrow")}` : t("widgets.eyebrow");

  return (
    <Reveal as="section" className={`product-widgets product-widgets--${caption}`} style={style}>
      <header>
        <div>
          <span className="product-widgets__eyebrow">{eyebrow}</span>
          <h2>{t("widgets.title")}</h2>
        </div>
        <p>{t("widgets.description")}</p>
      </header>
      <div className="product-widgets__gallery">
        {items.map(([key, image, size], position) => (
          <figure className={`product-widgets__card product-widgets__card--${sizes[size]}`} key={key}>
            <img src={image} alt={t(`widgets.items.${key}`)} loading="lazy" />
            <figcaption><span>0{position + 1}</span>{t(`widgets.items.${key}`)}</figcaption>
          </figure>
        ))}
      </div>
    </Reveal>
  );
}
