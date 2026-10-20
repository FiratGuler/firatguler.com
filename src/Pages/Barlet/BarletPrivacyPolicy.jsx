import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdHistory, MdInfo, MdLanguage, MdMail, MdShield, MdStorage, MdTune } from "react-icons/md";
import barletLogo from "./Assets/barlet_logo.png";
import "./barlet.css";

const localData = [
  "Clipboard history (text, images, files and app content) and its tags",
  "Daily tasks, priorities and tags",
  "Timer sessions and reminders",
  "Menu bar, mixer and shortcut preferences",
  "Screenshots you capture, saved in the folder you choose",
];

const permissions = [
  ["Screen Recording", "Captures the screen region you select for Screenshot and Screen Text."],
  ["System Audio", "Adjusts per-application volume; audio is not recorded or stored."],
  ["Automation (Spotify, Music, Chrome)", "Reads the current track and sends playback commands."],
  ["Chrome JavaScript access", "Reads media information from Chrome tabs for Now Playing."],
  ["Notifications", "Shows reminders when they finish."],
  ["Bluetooth", "Shows the battery level of your connected keyboards, mice and headphones."],
];

export default function BarletPrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="barlet-page barlet-policy">
      <div className="barlet-policy__container">
        <button className="barlet-policy__back" type="button" onClick={() => navigate(-1)}><MdArrowBack /> Back to Barlet</button>
        <header className="barlet-policy__header"><img src={barletLogo} alt="Barlet app icon" /><span><h1>Privacy Policy</h1><p>Effective Date: October 20, 2026</p></span></header>
        <main>
          <section className="barlet-policy__notice">Barlet runs on your Mac. It has no account system, no remote backend, no analytics and no advertising. We do not collect, sell or share your personal information.</section>
          <section><h2><MdInfo />1. Information We Collect</h2><p>Barlet does not collect information from you. The content you create or capture while using the app stays on your Mac and is never sent to us.</p></section>
          <section><h2><MdStorage />2. Data Stored on Your Mac</h2><p>To provide its features, Barlet stores the following locally, in its app preferences and in Application Support:</p><ul>{localData.map((item) => <li key={item}>{item}</li>)}</ul><p>Clipboard history can contain anything you copy, including sensitive text. It is kept only on your device, and you can configure retention, clear it or delete the app data at any time. Uninstalling Barlet from its settings removes its preferences; screenshots you saved are not deleted.</p></section>
          <section><h2><MdShield />3. macOS Permissions</h2><p>Barlet requests protected capabilities only for the feature that needs them. You can grant or revoke each one in System Settings.</p><ul className="barlet-policy__perms">{permissions.map(([name, use]) => <li key={name}><strong>{name}</strong><span>{use}</span></li>)}</ul></section>
          <section><h2><MdTune />4. Third-Party Services</h2><p>Barlet contains no third-party SDKs, analytics, crash reporters or ad networks, and it does not connect to any external service. Screen Text recognition runs on your Mac using Apple’s Vision framework. Links such as the Barlet website open in your browser.</p></section>
          <div className="barlet-policy__pair"><section><h2>5. Your Control</h2><p>You can turn off any module, delete clipboard items, tasks and timer records, clear saved shortcuts, revoke permissions in System Settings, and remove the app and its data from Settings.</p></section><section><h2>6. Children’s Privacy</h2><p>Barlet is not directed to children under 13 and does not knowingly collect personal data from anyone.</p></section></div>
          <section><h2><MdHistory />7. Changes to This Policy</h2><p>This policy may be updated as Barlet develops. Changes will be published on this page with a revised effective date.</p></section>
          <section><h2>8. Contact Us</h2><div className="barlet-policy__contacts"><a href="mailto:firattgulerrr@gmail.com"><MdMail /><span><small>Direct Email</small>firattgulerrr@gmail.com</span></a><a href="https://www.firatguler.com" target="_blank" rel="noreferrer"><MdLanguage /><span><small>Official Website</small>www.firatguler.com</span></a></div></section>
        </main>
        <footer>© 2026 Barlet · Created by Fırat Güler</footer>
      </div>
    </div>
  );
}
