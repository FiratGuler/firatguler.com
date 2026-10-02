import React from "react";
import { MdNorthEast } from "react-icons/md";

export default function SocialButton({ icon: Icon, text, href, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-link ${className || ""}`}
    >
      <Icon className="social-link__icon" aria-hidden="true" />
      <span>{text}</span>
      <MdNorthEast className="social-link__arrow" aria-hidden="true" />
    </a>
  );
}
