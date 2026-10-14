import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdHistory, MdInfo, MdLanguage, MdMail, MdShield, MdStorage, MdTune } from "react-icons/md";
import macletLogo from "./Assets/maclet_logo.png";
import "./maclet.css";

const localData = [
  "Clipboard history (text only, up to 500 items) and its tags",
  "Daily tasks, priorities and tags",
  "Timer sessions and reminders",
  "Menu bar, mixer, shortcut and Access Bypass preferences",
  "Screenshots you capture, saved in the folder you choose",
];

const permissions = [
  ["Screen Recording", "Captures the screen region you select for Screenshot."],
  ["Accessibility", "Pastes a clipboard item into the previously active app."],
  ["System Audio", "Adjusts per-application volume; audio is not recorded or stored."],
  ["Automation (Spotify, Music, Chrome)", "Reads the current track and sends playback commands."],
  ["Chrome JavaScript access", "Reads media information from Chrome tabs for Now Playing."],
  ["Notifications", "Shows reminders when they finish."],
  ["Network Extension", "Routes only the sites and apps you choose for Access Bypass."],
];

export default function MacletPrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="maclet-page maclet-policy">
      <div className="maclet-policy__container">
        <button className="maclet-policy__back" type="button" onClick={() => navigate(-1)}><MdArrowBack /> Back to Maclet</button>
        <header className="maclet-policy__header"><img src={macletLogo} alt="Maclet app icon" /><span><h1>Privacy Policy</h1><p>Effective Date: October 14, 2026</p></span></header>
        <main>
          <section className="maclet-policy__notice">Maclet runs on your Mac. It has no account system, no remote backend, no analytics and no advertising. We do not collect, sell or share your personal information.</section>
          <section><h2><MdInfo />1. Information We Collect</h2><p>Maclet does not collect information from you. The content you create or capture while using the app stays on your Mac and is never sent to us.</p></section>
          <section><h2><MdStorage />2. Data Stored on Your Mac</h2><p>To provide its features, Maclet stores the following locally, in its app preferences and in Application Support:</p><ul>{localData.map((item) => <li key={item}>{item}</li>)}</ul><p>Clipboard history can contain anything you copy, including sensitive text. It is kept only on your device, and you can configure retention, clear it or delete the app data at any time. Uninstalling Maclet from its settings removes its preferences; screenshots you saved are not deleted.</p></section>
          <section><h2><MdShield />3. macOS Permissions</h2><p>Maclet requests protected capabilities only for the feature that needs them. You can grant or revoke each one in System Settings.</p><ul className="maclet-policy__perms">{permissions.map(([name, use]) => <li key={name}><strong>{name}</strong><span>{use}</span></li>)}</ul></section>
          <section><h2><MdTune />4. Access Bypass (Developer ID builds)</h2><p>Access Bypass is an optional feature that is not included in the App Store build. When you enable it, a network extension handles only the connections of the sites and apps you list. To reach those sites, their host names are resolved through DNS-over-HTTPS using Cloudflare’s public resolver (1.1.1.1). Those requests contain domain names you chose and are subject to Cloudflare’s privacy policy. Maclet does not log or transmit your traffic to us, and has no server in the path.</p></section>
          <section><h2>5. Third-Party Services</h2><p>Maclet contains no third-party SDKs, analytics, crash reporters or ad networks. The only external service it can contact is the DNS-over-HTTPS resolver described above. Links such as the Maclet website open in your browser.</p></section>
          <div className="maclet-policy__pair"><section><h2>6. Your Control</h2><p>You can turn off any module, delete clipboard items, tasks and timer records, clear saved shortcuts, revoke permissions in System Settings, and remove the app and its data from Settings.</p></section><section><h2>7. Children’s Privacy</h2><p>Maclet is not directed to children under 13 and does not knowingly collect personal data from anyone.</p></section></div>
          <section><h2><MdHistory />8. Changes to This Policy</h2><p>This policy may be updated as Maclet develops. Changes will be published on this page with a revised effective date.</p></section>
          <section><h2>9. Contact Us</h2><div className="maclet-policy__contacts"><a href="mailto:firattgulerrr@gmail.com"><MdMail /><span><small>Direct Email</small>firattgulerrr@gmail.com</span></a><a href="https://www.firatguler.com" target="_blank" rel="noreferrer"><MdLanguage /><span><small>Official Website</small>www.firatguler.com</span></a></div></section>
        </main>
        <footer>© 2026 Maclet · Created by Fırat Güler</footer>
      </div>
    </div>
  );
}
