import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowOutward, MdCheckCircle, MdContentPaste, MdGraphicEq } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { navigateWithTransition } from "../../../Core/Motion/navigateWithTransition";

export default function AppCard({
  id,
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
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const reduce = useReducedMotion();
  const platformClass = platform.toLowerCase();
  const markStyle = id ? { viewTransitionName: `app-icon-${id}` } : undefined;
  const delay = Math.max(index - 1, 0) * 0.08;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 92%", "start 42%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
    restDelta: 0.001,
  });

  const fillX = useTransform(smoothProgress, [0, 1], ["-101%", "0%"]);

  const openDetail = (event) => {
    if (!detailLink || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    navigateWithTransition(navigate, detailLink);
  };

  const trackPointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      className={`app-card app-card--${platformClass}`}
      style={{ "--app-accent": accent }}
      onMouseMove={trackPointer}
      variants={{
        hidden: {},
        show: {},
      }}
    >
      <span className="app-card__rule" aria-hidden="true">
        <motion.span
          className="app-card__rule-fill"
          style={reduce ? undefined : { x: fillX }}
        />
      </span>
      <div className="app-card__spot" aria-hidden="true" />
      <div className="app-card__wash" aria-hidden="true" />
      <Link
        to={detailLink}
        className="app-card__detail-hitbox"
        aria-label={`${title} ${buttonDetail}`}
        onClick={openDetail}
      />

      <div className="app-card__topline">
        <span>PROJECT / {String(index).padStart(2, "0")}</span>
        <span className="app-card__platform"><FaApple aria-hidden="true" /> {platform} APP</span>
      </div>

      <div className="app-card__identity">
        <motion.span
          className="app-card__icon-wrap"
          variants={{
            hidden: { scale: 0.86 },
            show: {
              scale: 1,
              transition: { duration: 0.5, delay: delay + 0.14, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {image ? (
            <img className="app-card__icon" src={image} alt="" style={markStyle} />
          ) : (
            <div className="app-card__icon app-card__icon--placeholder" aria-hidden="true" style={markStyle}>{title.charAt(0)}</div>
          )}
        </motion.span>
        <div className="min-w-0">
          <h3>
            <motion.span
              variants={{
                hidden: { y: "110%" },
                show: {
                  y: "0%",
                  transition: { duration: 0.55, delay: delay + 0.24, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {title}
            </motion.span>
          </h3>
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
            onClick={openDetail}
          >
            {buttonDetail}
            <MdArrowOutward aria-hidden="true" />
          </Link>
        )}
      </div>
    </motion.article>
  );
}
