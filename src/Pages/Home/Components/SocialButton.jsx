import React from "react";

export default function SocialButton({ icon: Icon, text, href, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center shrink-0 gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-primary font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all ${className}`}
    >
      <Icon className="text-xl" />
      <span>{text}</span>
    </a>
  );
}

