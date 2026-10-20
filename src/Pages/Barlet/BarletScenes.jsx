import React from "react";
import {
  MdAlarm,
  MdCheck,
  MdCropFree,
  MdGraphicEq,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdMusicNote,
  MdNotificationsActive,
  MdOutlineTimer,
  MdPause,
  MdSearch,
  MdVolumeOff,
  MdVolumeUp,
  MdContentPaste,
  MdCheckCircle,
  MdWidgets,
} from "react-icons/md";

export const sceneIcons = {
  playing: MdMusicNote,
  mixer: MdGraphicEq,
  tasks: MdCheckCircle,
  timer: MdOutlineTimer,
  reminder: MdAlarm,
  clipboard: MdContentPaste,
  screenshot: MdCropFree,
  hub: MdWidgets,
};

const Bars = () => <span className="mc-eq" aria-hidden="true"><i /><i /><i /><i /><i /></span>;

function Playing({ t }) {
  return (
    <div className="mc-scene">
      <div className="mc-card mc-player">
        <div className="mc-art"><Bars /></div>
        <div className="mc-grow"><strong>{t("hero.track")}</strong><small>{t("hero.artist")}</small>
          <div className="mc-progress"><b /></div>
        </div>
        <div className="mc-controls"><MdKeyboardArrowLeft /><MdPause /><MdKeyboardArrowRight /></div>
      </div>
      <div className="mc-chips"><span className="is-on">Spotify</span><span>Apple Music</span><span>Chrome</span></div>
      <div className="mc-card mc-row"><MdVolumeUp /><span>MacBook Speakers</span><div className="mc-slider"><b style={{ "--v": "64%" }} /></div></div>
    </div>
  );
}

function Mixer({ t }) {
  const rows = [["Spotify", "72%"], ["Chrome", "46%"], ["Zoom", "88%"], ["Slack", "0%"]];
  return (
    <div className="mc-scene">
      {rows.map(([name, v], i) => (
        <div key={name} className={`mc-card mc-row${v === "0%" ? " is-muted" : ""}`} style={{ "--i": i }}>
          <span className="mc-app">{name[0]}</span><span className="mc-grow">{name}</span>
          <div className="mc-slider"><b style={{ "--v": v }} /></div>
          {v === "0%" ? <MdVolumeOff /> : <strong>{v}</strong>}
        </div>
      ))}
      <small className="mc-hint">{t("scene.mixerHint")}</small>
    </div>
  );
}

function Tasks({ t }) {
  const tasks = [["urgent", t("scene.task1"), "work"], ["high", t("scene.task2"), "home"], ["normal", t("scene.task3"), ""], ["low", t("scene.task4"), "read"]];
  return (
    <div className="mc-scene">
      {tasks.map(([p, title, tag], i) => (
        <div key={p} className={`mc-card mc-row mc-task${i === 2 ? " is-done" : ""}`} style={{ "--i": i }}>
          <span className="mc-check"><MdCheck /></span><i className={`mc-prio mc-prio--${p}`} />
          <span className="mc-grow">{title}</span>{tag && <em className="mc-tag">#{tag}</em>}
        </div>
      ))}
      <div className="mc-chips"><span className="is-on">{t("scene.carry")}</span></div>
    </div>
  );
}

function Timer({ t }) {
  return (
    <div className="mc-scene">
      <div className="mc-card mc-timer">
        <svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" /><circle className="mc-ring" cx="60" cy="60" r="52" /></svg>
        <div><strong>24:18</strong><small><i className="mc-live" />{t("scene.running")}</small></div>
      </div>
      {[["09:40", "42:10"], ["Dün", "25:00"]].map(([d, v]) => (
        <div key={d} className="mc-card mc-row"><MdOutlineTimer /><span className="mc-grow">{d}</span><strong>{v}</strong></div>
      ))}
    </div>
  );
}

function Reminder({ t }) {
  return (
    <div className="mc-scene">
      <div className="mc-chips">{[5, 10, 20, 60].map((m) => <span key={m} className={m === 10 ? "is-on" : ""}>{m} {t("scene.min")}</span>)}</div>
      <div className="mc-card mc-row mc-ring-row"><span className="mc-bell"><MdNotificationsActive /></span><span className="mc-grow">{t("scene.reminder")}<small className="mc-block">{t("scene.reminderIn")}</small></span><strong>09:58</strong></div>
      <div className="mc-seg"><span className="is-on">{t("scene.notification")}</span><span>{t("scene.alarm")}</span></div>
    </div>
  );
}

function Clipboard({ t }) {
  const cards = ["npm run build", "https://firatguler.com", "Toplantı notları…", "#6b5cff"];
  return (
    <div className="mc-scene">
      <div className="mc-card mc-row"><MdSearch /><span className="mc-grow mc-caret">{t("scene.search")}</span><kbd>⌘</kbd><kbd>⇧</kbd><kbd>V</kbd></div>
      <div className="mc-chips"><span className="is-on">History 24</span><span>Untagged</span><span>#code</span></div>
      <div className="mc-cards">
        {cards.map((c, i) => <div key={c} className="mc-card mc-clip" style={{ "--i": i }}><small>{i === 0 ? "#code" : ""}</small><span>{c}</span></div>)}
      </div>
    </div>
  );
}

function Screenshot({ t }) {
  return (
    <div className="mc-scene">
      <div className="mc-shot">
        <i className="mc-win mc-win--a" /><i className="mc-win mc-win--b" />
        <span className="mc-sel"><em>640 × 360</em></span>
        <svg viewBox="0 0 120 60" aria-hidden="true"><path className="mc-arrow" d="M12 48 C 40 10, 70 12, 98 22" /><path className="mc-arrow mc-arrow--head" d="M88 12 L100 22 L87 30" /></svg>
        <span className="mc-thumb" />
      </div>
      <div className="mc-chips"><span className="is-on">{t("scene.copy")}</span><span>PNG</span><span>{t("scene.undo")}</span></div>
    </div>
  );
}

function Hub({ t }) {
  const items = [[MdMusicNote, "Now Playing"], [MdGraphicEq, "Mixer"], [MdCheckCircle, "Tasks"], [MdOutlineTimer, "Timer"], [MdAlarm, "Reminder"]];
  return (
    <div className="mc-scene mc-hub">
      <div className="mc-hub__side">{items.map(([Icon], i) => <span key={i} style={{ "--i": i }}><Icon /></span>)}</div>
      <div className="mc-hub__body">
        {items.map(([, name], i) => (
          <div key={name} className="mc-card mc-row mc-toggle" style={{ "--i": i }}><span className="mc-grow">{name}</span><i className="mc-switch" /></div>
        ))}
        <small className="mc-hint">{t("scene.hubHint")}</small>
      </div>
    </div>
  );
}

export const scenes = { playing: Playing, mixer: Mixer, tasks: Tasks, timer: Timer, reminder: Reminder, clipboard: Clipboard, screenshot: Screenshot, hub: Hub };
