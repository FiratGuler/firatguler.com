import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import WordyPage from "../Pages/Wordy/WordyPage.jsx";
import BoardyPage from "../Pages/Boardy/BoardyPage.jsx";
import WordyPrivacyPolicy from "../Pages/Wordy/WordyPrivacyPolicy";
import BoardyPrivacyPolicy from "../Pages/Boardy/BoardyPrivacyPolicy";
import DrinkaPage from "../Pages/Drinka/DrinkaPage.jsx";
import DrinkaPrivacyPolicy from "../Pages/Drinka/DrinkaPrivacyPolicy";
import GlimpsiePage from "../Pages/Glimpsie/GlimpsiePage";
import GlimpsiePrivacyPolicy from "../Pages/Glimpsie/GlimpsiePrivacyPolicy";
import MacletPage from "../Pages/Maclet/MacletPage";
import NotFoundPage from "../Pages/NotFound/NotFoundPage";
import SeoManager from "../Core/SEO/SeoManager";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SeoManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wordy" element={<WordyPage />} />
        <Route path="/boardy" element={<BoardyPage />} />
        <Route path="/drinka" element={<DrinkaPage />} />
        <Route path="/glimpsie" element={<GlimpsiePage />} />
        <Route path="/maclet" element={<MacletPage />} />
        <Route path="/WordyPrivacyPolicy" element={<WordyPrivacyPolicy />} />
        <Route path="/BoardyPrivacyPolicy" element={<BoardyPrivacyPolicy />} />
        <Route path="/DrinkaPrivacyPolicy" element={<DrinkaPrivacyPolicy />} />
        <Route path="/GlimpsiePrivacyPolicy" element={<GlimpsiePrivacyPolicy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
