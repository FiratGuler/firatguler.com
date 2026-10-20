
import wordyImage from "../Pages/Wordy/Assets/wordy_logo.png"; 
import boardyImage from "../Pages/Boardy/Assets/boardy_logo.png";
import drinkaImage from "../Pages/Drinka/Assets/drinka_logo.png";
import glimpsieImage from "../Pages/Glimpsie/Assets/glimpsie_logo.png";
import barletImage from "../Pages/Barlet/Assets/barlet_logo.png";

const apps = [
  /*
  {
    id: "barlet",
    image: barletImage,
    platform: "macOS",
    accent: "#6b5cff",
    detailLink: "/barlet",
    tags: ["Swift", "SwiftUI", "AppKit", "Core Audio", "macOS"]
  },
  */
  {
    id: "glimpsie",
    image: glimpsieImage,
    accent: "#b5ade1",
    social: [
      { platform: "instagram", handle: "@glimpsie.app", url: "https://www.instagram.com/glimpsie.app/" },
      { platform: "tiktok", handle: "@glimpsie.app", url: "https://www.tiktok.com/@glimpsie.app" },
      { platform: "x", handle: "@GlimpsieApp", url: "https://x.com/GlimpsieApp" },
    ],
    detailLink: "/glimpsie",
    tags: ["Swift", "SwiftUI", "Firebase", "WidgetKit", "RevenueCat"]
  },
  {
    id: "drinka",
    image: drinkaImage,
    accent: "#9f2437",
    appStoreLink: "https://apps.apple.com/tr/app/drinka-her-geceyi-hat%C4%B1rla/id6760046885?l=tr",
    social: [
      { platform: "instagram", handle: "@drinka.app", url: "https://www.instagram.com/drinka.app/" },
      { platform: "tiktok", handle: "@drinka.app", url: "https://www.tiktok.com/@drinka.app" },
      { platform: "x", handle: "@DrinkaApp", url: "https://x.com/DrinkaApp" },
    ],
    detailLink: "/drinka",
    tags: ["Swift", "SwiftUI", "Firebase", "MapKit", "MVVM"]
  },
  {
    id: "wordy",
    image: wordyImage,
    accent: "#f88222",
    appStoreLink: "https://apps.apple.com/tr/app/wordy-flashcard/id6741209566",
    social: [
      { platform: "instagram", handle: "@wordy.flashcard", url: "https://www.instagram.com/wordy.flashcard/" },
      { platform: "tiktok", handle: "@wordy.flashcard", url: "https://www.tiktok.com/@wordy.flashcard" },
      { platform: "x", handle: "@WordyFlashcard", url: "https://x.com/WordyFlashcard" },
    ],
    detailLink: "/wordy",
    tags: ["Swift", " UIKit", "Firebase", "Superwall", "Mvvm-c"]
  },
  {
    id: "boardy",
    subtitle: "Real-time collaborative whiteboarding using UIKit and Firebase.",
    image: boardyImage,
    accent: "#d65774",
    appStoreLink: "https://apps.apple.com/tr/app/boardy/id6739463985",
    detailLink: "/boardy",
    tags: ["Swift", "UIKit", "Core Data", "Google Ads", "Mvvm-c"]
  }
];

export default apps;
