
import wordyImage from "../Pages/Wordy/Assets/wordy_logo.png"; 
import boardyImage from "../Pages/Boardy/Assets/boardy_logo.png";
import drinkaImage from "../Pages/Drinka/Assets/drinka_logo.png";
import glimpsieImage from "../Pages/Glimpsie/Assets/glimpsie_logo.png";
import macletImage from "../Pages/Maclet/Assets/maclet_logo.png";

const apps = [
  {
    id: "maclet",
    image: macletImage,
    platform: "macOS",
    accent: "#62a8ff",
    detailLink: "/maclet",
    tags: ["Swift", "SwiftUI", "AppKit", "Core Audio", "macOS"]
  },
  {
    id: "glimpsie",
    image: glimpsieImage,
    accent: "#b5ade1",
    detailLink: "/glimpsie",
    tags: ["Swift", "SwiftUI", "Firebase", "WidgetKit", "RevenueCat"]
  },
  {
    id: "drinka",
    image: drinkaImage,
    accent: "#9f2437",
    appStoreLink: "https://apps.apple.com/tr/app/drinka-her-geceyi-hat%C4%B1rla/id6760046885?l=tr",
    detailLink: "/drinka",
    tags: ["Swift", "SwiftUI", "Firebase", "MapKit", "MVVM"]
  },
  {
    id: "wordy",
    image: wordyImage,
    accent: "#f88222",
    appStoreLink: "https://apps.apple.com/tr/app/wordy-flashcard/id6741209566",
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
