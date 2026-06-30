import React from "react";
import { useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";

export default function DeveloperBackButton({ bgColor, textColor }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/")}
      style={{ backgroundColor: bgColor, color: textColor }}
      className="px-5 py-2 rounded-2xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1 uppercase tracking-widest text-xs border border-black/5"
    >
      <MdChevronLeft className="text-lg" />
      Developer
    </button>
  );
}
