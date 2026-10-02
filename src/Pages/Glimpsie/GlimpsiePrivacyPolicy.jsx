import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdInfo, MdShield, MdStorage, MdHistory, MdMail, MdLanguage } from "react-icons/md";
import glimpsieLogo from "./Assets/glimpsie_logo.png";
import "./glimpsie.css";

const providedData = [
  "Mood and emotion selections",
  "Notes, dreams, sleep and self-care entries",
  "Drawings, movement, leisure and music selections",
  "Display name and journaling preferences",
  "Calendar dates and day-entry streak information",
];

export default function GlimpsiePrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="glimpsie-policy">
      <div className="glimpsie-policy__container">
        <button className="glimpsie-policy__back" type="button" onClick={() => navigate(-1)}><MdArrowBack /> Back to Glimpsie</button>
        <header className="glimpsie-policy__header"><div><img src={glimpsieLogo} alt="Glimpsie app icon" /></div><span><h1>Privacy Policy</h1><p>Effective Date: September 27, 2026</p></span></header>
        <main>
          <section className="glimpsie-policy__notice">Glimpsie is designed as a personal journal. Your entries are used to provide the app experience and are not sold or used to build advertising profiles.</section>
          <section><h2><MdInfo />1. Information We Collect</h2><p>You may voluntarily add the following information to your private day entries:</p><ul>{providedData.map((item) => <li key={item}>{item}</li>)}</ul><p>Glimpsie may also create an anonymous account identifier. If you link an account, Firebase Authentication processes the credentials supplied through email, Apple, or Google.</p></section>
          <section><h2><MdStorage />2. How Data Is Used and Stored</h2><p>Your information is used to create, update and display your journal, calendar, streaks, widgets, preferences and purchased mood themes. Day entries and account information are stored with Firebase. Small widget snapshots and preferences may also be stored locally or in the shared App Group container.</p></section>
          <section><h2><MdShield />3. Services and Data Sharing</h2><p>Glimpsie uses Firebase for authentication, database, analytics and crash reporting; RevenueCat for purchases; and Google Mobile Ads for advertising. These providers may process limited device, transaction or diagnostic information under their own privacy policies. We do not sell your journal content.</p></section>
          <div className="glimpsie-policy__pair"><section><h2>4. Your Control</h2><p>You can edit or delete individual day entries in the app. Account deletion removes the associated user data according to the in-app account deletion flow. You can also control notification and tracking permissions from iOS Settings.</p></section><section><h2>5. Security</h2><p>Network communication is encrypted using SSL/TLS and Firebase security rules restrict access to account-scoped data. No online storage system can guarantee absolute security.</p></section></div>
          <section><h2>6. Children’s Privacy</h2><p>Glimpsie is not directed to children under 13. We do not knowingly collect personal data from children under 13. Contact us if you believe such data has been provided.</p></section>
          <section><h2><MdHistory />7. Changes to This Policy</h2><p>This policy may be updated as Glimpsie develops. Changes will be published on this page with a revised effective date.</p></section>
          <section><h2>8. Contact Us</h2><div className="glimpsie-policy__contacts"><a href="mailto:firattgulerrr@gmail.com"><MdMail /><span><small>Direct Email</small>firattgulerrr@gmail.com</span></a><a href="https://www.firatguler.com" target="_blank" rel="noreferrer"><MdLanguage /><span><small>Official Website</small>www.firatguler.com</span></a></div></section>
        </main>
        <footer>© 2026 Glimpsie · Created by Fırat Güler</footer>
      </div>
    </div>
  );
}
