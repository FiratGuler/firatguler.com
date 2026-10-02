import React from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward, MdCheckCircle, MdContentPaste, MdGraphicEq } from "react-icons/md";
import { FaApple } from "react-icons/fa";

export default function AppCard({
  title,
  subtitle,
  desc,
  image,
  appStoreLink,
  detailLink,
  platform = "iOS",
  tags,
  accent,
  index,
  buttonGet,
  buttonDetail,
}) {
  const platformClass = platform.toLowerCase();

  return (
    <article className={`app-card app-card--${platformClass}`} style={{ "--app-accent": accent }}>
      <div className="app-card__wash" aria-hidden="true" />
      <Link
        to={detailLink}
        className="app-card__detail-hitbox"
        aria-label={`${title} ${buttonDetail}`}
      />

      <div className="app-card__topline">
        <span>PROJECT / {String(index).padStart(2, "0")}</span>
        <span className="app-card__platform"><FaApple aria-hidden="true" /> {platform} APP</span>
      </div>

      <div className="app-card__identity">
        {image ? (
          <img className="app-card__icon" src={image} alt="" />
        ) : (
          <div className="app-card__icon app-card__icon--placeholder" aria-hidden="true">{title.charAt(0)}</div>
        )}
        <div className="min-w-0">
          <h3>{title}</h3>
          <p className="app-card__tagline">{subtitle}</p>
        </div>
      </div>

      <p className="app-card__description">{desc}</p>

      <div className="app-card__tags" aria-label="Technology stack">
        {tags?.map((tag) => <span key={tag}>{tag}</span>)}
      </div>

      {platform === "macOS" && (
        <div className="app-card__desktop-preview" aria-hidden="true">
          <div className="app-card__desktop-bar">
            <span><FaApple /> Maclet</span>
            <i />
            <span>⌘ M</span>
          </div>
          <div className="app-card__desktop-panel">
            <div className="app-card__desktop-heading"><b>Menu Bar Utilities</b><small>ACTIVE</small></div>
            <div className="app-card__desktop-now"><MdGraphicEq /><span><strong>Now Playing</strong><small>Focus soundtrack · 72%</small></span><i><b /></i></div>
            <div className="app-card__desktop-tools">
              <span><MdCheckCircle /><small>Daily Tasks</small><b>3 left</b></span>
              <span><MdContentPaste /><small>Clipboard</small><b>Ready</b></span>
            </div>
          </div>
        </div>
      )}

      <div className="app-card__actions">
        {appStoreLink && (
          <a
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="app-card__button app-card__button--ghost"
          >
            <FaApple className="app-card__apple" aria-hidden="true" />
            {buttonGet}
            <MdArrowOutward aria-hidden="true" />
          </a>
        )}
        {detailLink && (
          <Link
            to={detailLink}
            className="app-card__button app-card__button--primary"
          >
            {buttonDetail}
            <MdArrowOutward aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
