import React from "react";
import { MdSecurity, MdArrowBack, MdMail, MdLanguage, MdInfo, MdSync, MdShield, MdPersonSearch, MdHistory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function WordyPrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafafa] min-h-screen font-sans text-gray-800 pb-20 selection:bg-wordy-accent selection:text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Navigation */}
        <nav className="mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-wordy-text font-black hover:text-wordy-accent transition-colors uppercase text-sm tracking-widest"
          >
            <MdArrowBack className="text-xl" /> Back to Wordy
          </button>
        </nav>

        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <div className="w-20 h-20 bg-wordy-accent text-white rounded-[2rem] shadow-xl shadow-wordy-accent/20 flex items-center justify-center shrink-0">
            <MdSecurity className="text-5xl" />
          </div>
          <div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter">Privacy Policy</h1>
            <p className="text-sm font-bold opacity-40 uppercase tracking-[0.2em] mt-2">Effective Date: October 19, 2025</p>
          </div>
        </header>

        <main className="space-y-12">
          
          {/* 1. Information We Collect */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
              <MdInfo className="text-wordy-accent" /> 1. Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-black text-lg mb-3">1.1 Personal Information</h3>
                <p className="opacity-70 font-medium mb-4">We may collect limited personal information through our app, including but not limited to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {["Email address and display name (Firebase Auth)", "Anonymous identifiers", "User-generated data (flashcards, categories)", "Progress and learning preferences"].map((item, i) => (
                    <li key={i} className="bg-gray-50 p-3 rounded-xl text-sm font-bold flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wordy-accent rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 text-amber-900 text-sm font-bold italic">
                  We do NOT collect sensitive personal data such as financial information, health data, or location data.
                </div>
              </div>
              <div>
                <h3 className="font-black text-lg mb-3">1.2 Non-Personal Information</h3>
                <p className="opacity-70 font-medium mb-2">We may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-1 opacity-70 text-sm font-bold">
                  <li>Device information (e.g., model, operating system version).</li>
                  <li>App usage data (e.g., session duration, features used).</li>
                  <li>Crash logs or diagnostic data (for debugging purposes).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Use of Information */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
              <MdSync className="text-wordy-accent" /> 2. Use of Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold opacity-70">
              <div className="p-4 bg-gray-50 rounded-2xl">Authenticate users and manage accounts.</div>
              <div className="p-4 bg-gray-50 rounded-2xl">Store and sync progress via Firebase Firestore.</div>
              <div className="p-4 bg-gray-50 rounded-2xl">Improve app functionality and user experience.</div>
              <div className="p-4 bg-gray-50 rounded-2xl">Fix bugs, optimize performance, and enhance reliability.</div>
              <div className="p-4 bg-gray-50 rounded-2xl col-span-full">Provide optional reminders or learning notifications (if enabled).</div>
            </div>
          </section>

          {/* 3. Firebase Services */}
          <section className="bg-wordy-text text-white p-8 rounded-[2.5rem] shadow-xl">
            <h2 className="text-2xl font-black mb-4">3. Firebase Services</h2>
            <p className="opacity-80 text-sm mb-6 leading-relaxed">
              Wordy uses Firebase, a service provided by Google LLC. Firebase may collect and process data as described in Google’s Privacy Policy.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-wordy-accent pl-4">
                <p className="font-black">Firebase Authentication:</p>
                <p className="text-xs opacity-60">Manages user sign-in and identity securely.</p>
              </div>
              <div className="border-l-2 border-wordy-accent pl-4">
                <p className="font-black">Firebase Firestore:</p>
                <p className="text-xs opacity-60">Stores flashcard data, preferences, and progress.</p>
              </div>
              <div className="border-l-2 border-wordy-accent pl-4">
                <p className="font-black">Firebase Crashlytics:</p>
                <p className="text-xs opacity-60">Helps identify and fix app crashes (if enabled).</p>
              </div>
            </div>
          </section>

          {/* 4 & 5. Data Sharing & User Control */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
              <h2 className="text-xl font-black mb-4">4. Data Sharing</h2>
              <p className="text-sm opacity-70 font-bold leading-relaxed">
                We do not share your personal data with third parties, except to comply with legal obligations or to maintain Firebase services. We do NOT sell, rent, or trade your data.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
              <h2 className="text-xl font-black mb-4">5. User Control</h2>
              <p className="text-sm opacity-70 font-bold leading-relaxed">
                You can request account/data deletion by contacting us, control notifications in device settings, or clear local app data for anonymous accounts.
              </p>
            </div>
          </div>

          {/* 6. Security */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
            <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
              <MdShield className="text-wordy-accent" /> 6. Security
            </h2>
            <p className="text-sm opacity-70 font-bold leading-relaxed">
              We take reasonable measures to protect your data. All transmissions between the app and Firebase are encrypted using SSL/TLS. However, no internet-based system can guarantee complete security.
            </p>
          </section>

          {/* 7. Children’s Privacy */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
            <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
              <MdPersonSearch className="text-wordy-accent" /> 7. Children’s Privacy
            </h2>
            <p className="text-sm opacity-70 font-bold leading-relaxed">
              Wordy is not intended for children under 13. We do not knowingly collect personal data from children. If we learn we have collected such data, we will delete it promptly.
            </p>
          </section>

          {/* 8. Changes to this Policy */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
            <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
              <MdHistory className="text-wordy-accent" /> 8. Changes to this Policy
            </h2>
            <p className="text-sm opacity-70 font-bold leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted within the app. Your continued use of the app after updates constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* 9. Contact Us */}
          <section>
            <h2 className="text-2xl font-black mb-8 text-center">9. Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:firattgulerrr@gmail.com" className="flex items-center gap-4 bg-white p-6 rounded-[2rem] border border-black/5 hover:border-wordy-accent transition-all group">
                <MdMail className="text-3xl text-wordy-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] uppercase font-black opacity-40">Direct Email</p>
                  <p className="font-black text-sm">firattgulerrr@gmail.com</p>
                </div>
              </a>
              <a href="https://www.firatguler.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-6 rounded-[2rem] border border-black/5 hover:border-wordy-accent transition-all group">
                <MdLanguage className="text-3xl text-wordy-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] uppercase font-black opacity-40">Official Website</p>
                  <p className="font-black text-sm">www.firatguler.com</p>
                </div>
              </a>
            </div>
          </section>

        </main>

        <footer className="mt-20 pt-8 border-t border-black/5 text-center">
          <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em]">
            © 2026 Wordy Flashcards • Created by Fırat Güler
          </p>
        </footer>
      </div>
    </div>
  );
}