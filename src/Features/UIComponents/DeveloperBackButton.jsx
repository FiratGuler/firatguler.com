import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

export default function DeveloperBackButton({ bgColor, textColor }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/")}
      style={{ backgroundColor: bgColor, color: textColor }}
      className="product-back-button"
    >
      <MdArrowBack aria-hidden="true" />
      <span>Developer</span>
    </button>
  );
}
