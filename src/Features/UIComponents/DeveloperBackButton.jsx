import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { navigateWithTransition } from "../../Core/Motion/navigateWithTransition";

export default function DeveloperBackButton({ bgColor, textColor }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigateWithTransition(navigate, "/")}
      style={{ backgroundColor: bgColor, color: textColor }}
      className="product-back-button"
    >
      <MdArrowBack aria-hidden="true" />
      <span>Developer</span>
    </button>
  );
}
