import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import profileImage from "../../Pages/Home/Assets/profilePhoto.png";
import wordyImage from "../../Pages/Wordy/Assets/wordy_logo.png";
import boardyImage from "../../Pages/Boardy/Assets/boardy_logo.png";
import drinkaImage from "../../Pages/Drinka/Assets/drinka_logo.png";

const SITE_URL = "https://www.firatguler.com";

const apps = {
  "/maclet": {
    title: "Maclet — Native macOS Menu Bar Utility | Fırat Güler",
    description: "Control music and app audio, manage daily tasks, run a timer and search clipboard history from the macOS menu bar.",
    image: profileImage,
    favicon: "/favicon.ico",
    category: "UtilitiesApplication",
    operatingSystem: "macOS",
  },
  "/wordy": {
    title: "Wordy — Learn New Words Every Day | Fırat Güler",
    description: "Build a lasting vocabulary with ready-to-use flashcards, smart reminders and a focused iPhone learning experience.",
    image: wordyImage,
    favicon: "/wordy_logo.ico",
    appStore: "https://apps.apple.com/tr/app/wordy-flashcard/id6741209566",
    category: "EducationalApplication",
  },
  "/boardy": {
    title: "Boardy — Board Game Level Tracker | Fırat Güler",
    description: "Track levels during board games with digital meeples, card tracking and interactive map modes on iPhone.",
    image: boardyImage,
    favicon: "/boardy_logo.ico",
    appStore: "https://apps.apple.com/tr/app/boardy/id6739463985",
    category: "GameApplication",
  },
  "/drinka": {
    title: "Drinka — Remember Every Night | Fırat Güler",
    description: "Log every tasting, remember places and people, and build a personal journal of the nights worth remembering.",
    image: drinkaImage,
    favicon: "/drinka_logo.ico",
    appStore: "https://apps.apple.com/tr/app/drinka-her-geceyi-hat%C4%B1rla/id6760046885?l=tr",
    category: "LifestyleApplication",
  },
  "/glimpsie": {
    title: "Glimpsie — A Journal for Every Kind of Day | Fırat Güler",
    description: "Bring moods, emotions, dreams, notes, movement, people and music into one calm daily journal for iPhone.",
    image: profileImage,
    favicon: "/favicon.ico",
    category: "LifestyleApplication",
  },
};

const privacyRoutes = {
  "/WordyPrivacyPolicy": "Wordy Privacy Policy",
  "/BoardyPrivacyPolicy": "Boardy Privacy Policy",
  "/DrinkaPrivacyPolicy": "Drinka Privacy Policy",
  "/GlimpsiePrivacyPolicy": "Glimpsie Privacy Policy",
};

const home = {
  title: "Fırat Güler — iOS Developer",
  description: "Fırat Güler designs, builds and ships thoughtful native Apple-platform products with Swift and SwiftUI.",
  image: profileImage,
  favicon: "/favicon.ico",
};

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

function getAbsoluteImageUrl(image) {
  return new URL(image, SITE_URL).href;
}

function getStructuredData(pathname, page) {
  if (pathname === "/") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Fırat Güler",
      url: SITE_URL,
      image: getAbsoluteImageUrl(page.image),
      jobTitle: "iOS Developer",
      sameAs: [
        "https://github.com/FiratGuler",
        "https://www.linkedin.com/in/firatgulerr/",
      ],
      knowsAbout: ["Swift", "SwiftUI", "UIKit", "AppKit", "Firebase", "iOS Development", "macOS Development"],
    };
  }

  if (apps[pathname]) {
    const data = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: pathname.slice(1).replace(/^./, (letter) => letter.toUpperCase()),
      applicationCategory: page.category,
      operatingSystem: page.operatingSystem || "iOS",
      description: page.description,
      url: `${SITE_URL}${pathname}`,
      image: getAbsoluteImageUrl(page.image),
      author: { "@type": "Person", name: "Fırat Güler", url: SITE_URL },
    };

    if (page.appStore) data.installUrl = page.appStore;
    return data;
  }

  return null;
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isPrivacy = Boolean(privacyRoutes[pathname]);
    const isNotFound = pathname !== "/" && !apps[pathname] && !isPrivacy;
    const page = apps[pathname] || (pathname === "/" ? home : {
      ...home,
      title: isPrivacy ? `${privacyRoutes[pathname]} | Fırat Güler` : "Page Not Found | Fırat Güler",
      description: isPrivacy
        ? `${privacyRoutes[pathname]} for the corresponding iOS application.`
        : "The requested page could not be found. Explore Fırat Güler's iOS products and portfolio.",
    });
    const canonicalUrl = `${SITE_URL}${isNotFound ? "/" : pathname}`;
    const imageUrl = getAbsoluteImageUrl(page.image);
    const robots = isPrivacy || isNotFound ? "noindex, follow" : "index, follow";

    document.title = page.title;
    document.documentElement.lang = "en";

    const favicon = document.head.querySelector("link[rel~='icon']");
    if (favicon) favicon.setAttribute("href", page.favicon || "/favicon.ico");

    setMeta('meta[name="description"]', { name: "description", content: page.description });
    setMeta('meta[name="author"]', { name: "author", content: "Fırat Güler" });
    setMeta('meta[name="robots"]', { name: "robots", content: robots });
    setMeta('meta[property="og:title"]', { property: "og:title", content: page.title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: page.description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Fırat Güler" });
    setMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_US" });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: page.title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: page.description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const previousStructuredData = document.getElementById("structured-data");
    previousStructuredData?.remove();
    const structuredData = getStructuredData(pathname, page);
    if (structuredData) {
      const script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}
