import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import WordyPage from "../Pages/Wordy/WordyPage.jsx";
import BoardyPage from "../Pages/Boardy/BoardyPage.jsx";
import WordyPrivacyPolicy from "../Pages/Wordy/WordyPrivacyPolicy";
import BoardyPrivacyPolicy from "../Pages/Boardy/BoardyPrivacyPolicy";
import DrinkaPage from "../Pages/Drinka/DrinkaPage.jsx";
import DrinkaPrivacyPolicy from "../Pages/Drinka/DrinkaPrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wordy" element={<WordyPage />} />
        <Route path="/boardy" element={<BoardyPage />} />
        <Route path="/drinka" element={<DrinkaPage />} />
        <Route path="/WordyPrivacyPolicy" element={<WordyPrivacyPolicy />} />
        <Route path="/BoardyPrivacyPolicy" element={<BoardyPrivacyPolicy />} />
        <Route path="/DrinkaPrivacyPolicy" element={<DrinkaPrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
