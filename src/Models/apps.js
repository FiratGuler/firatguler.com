
import wordyImage from "../Pages/Wordy/Assets/wordy_logo.png"; 
import boardyImage from "../Pages/Boardy/Assets/boardy_logo.png";

const apps = [
  {
    id: "wordy",
    image: wordyImage,
    appStoreLink: "https://apps.apple.com/tr/app/wordy-flashcard/id6741209566",
    detailLink: "/wordy",
    tags: ["Swift", " UIKit", "Firebase", "Superwall", "Mvvm-c"]
  },
  {
    id: "boardy",
    subtitle: "Real-time collaborative whiteboarding using UIKit and Firebase.",
    image: boardyImage,
    appStoreLink: "https://apps.apple.com/tr/app/boardy/id6739463985",
    detailLink: "/boardy",
    tags: ["Swift", "UIKit", "Core Data", "Google Ads", "Mvvm-c"]
  }
];

export default apps;
