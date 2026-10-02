import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack, MdNorthEast } from "react-icons/md";
import "./not-found.css";

const productLinks = [
  ["Maclet", "/maclet"],
  ["Drinka", "/drinka"],
  ["Glimpsie", "/glimpsie"],
  ["Wordy", "/wordy"],
  ["Boardy", "/boardy"],
];

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-page__grid" aria-hidden="true" />
      <main className="not-found-card">
        <div className="not-found-card__code" aria-hidden="true">404</div>
        <span className="not-found-card__eyebrow">Lost in the build</span>
        <h1>This page missed the release.</h1>
        <p>The address may have changed, or this route was never shipped. The portfolio and every published product are still close by.</p>
        <Link className="not-found-card__home" to="/">
          <MdArrowBack aria-hidden="true" />
          Back to portfolio
        </Link>
        <nav className="not-found-card__products" aria-label="Product pages">
          {productLinks.map(([name, path]) => (
            <Link key={path} to={path}>
              <span>{name}</span>
              <MdNorthEast aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
