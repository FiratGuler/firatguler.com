import React from "react";
import { MdSecurity, MdArrowBack, MdMail, MdLanguage, MdInfo, MdAdsClick, MdShield, MdPersonSearch, MdHistory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function BoardyPrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF6E3] min-h-screen font-sans text-boardy-text pb-20 selection:bg-boardy-bg selection:text-boardy-accent">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Navigation */}
        <nav className="mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-boardy-bg font-black hover:opacity-70 transition-all uppercase text-sm tracking-widest"
          >
            <MdArrowBack className="text-xl" /> Back to Boardy
          </button>
        </nav>

        {/* Header - Boardy Temasına Uygun */}
        <header className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <div className="w-20 h-20 bg-boardy-bg text-boardy-accent rounded-[2rem] shadow-xl flex items-center justify-center shrink-0">
            <MdSecurity className="text-5xl" />
          </div>
          <div>
            <h1 className="text-5xl font-boardy font-black text-boardy-bg tracking-tighter">Privacy Policy</h1>
            <p className="text-sm font-bold opacity-60 uppercase tracking-[0.2em] mt-2">Effective Date: 15/12/2024</p>
          </div>
        </header>

        <main className="space-y-12">
          
          {/* 1. Information We Collect */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-boardy-bg/5 shadow-sm">
            <h2 className="text-2xl font-boardy font-black mb-6 flex items-center gap-3 text-boardy-bg">
              <MdInfo /> 1. Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-black text-lg mb-3">1.1 Personal Information</h3>
                <p className="opacity-70 font-medium mb-4">
                  We do not collect any personal information directly through our app unless explicitly provided by you (e.g., via feedback forms or support requests).
                </p>
              </div>
              <div>
                <h3 className="font-black text-lg mb-3">1.2 Non-Personal Information</h3>
                <p className="opacity-70 font-medium mb-4">We may automatically collect non-personal data Bundled as:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["Device info (model, OS version)", "App usage statistics", "Screens visited", "Advertising identifiers (Google Ad ID)"].map((item, i) => (
                    <li key={i} className="bg-boardy-accent/30 p-3 rounded-xl text-sm font-bold flex items-center gap-2 text-boardy-bg">
                      <div className="w-1.5 h-1.5 bg-boardy-bg rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Use of Information */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-boardy-bg/5 shadow-sm">
            <h2 className="text-2xl font-boardy font-black mb-6 flex items-center gap-3 text-boardy-bg">
              <MdHistory /> 2. Use of Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-black uppercase tracking-tight">
              <div className="p-4 bg-boardy-accent/50 rounded-2xl flex items-center justify-center text-center">Improve user experience</div>
              <div className="p-4 bg-boardy-accent/50 rounded-2xl flex items-center justify-center text-center">Analyze performance & bugs</div>
              <div className="p-4 bg-boardy-accent/50 rounded-2xl flex items-center justify-center text-center">Serve ads via AdMob</div>
            </div>
          </section>

          {/* 3. AdMob and Advertising Partners */}
          <section className="bg-boardy-bg text-boardy-accent p-8 rounded-[2.5rem] shadow-xl">
            <h2 className="text-2xl font-boardy font-black mb-4 flex items-center gap-3">
              <MdAdsClick /> 3. AdMob & Advertising
            </h2>
            <p className="opacity-80 text-sm mb-6 leading-relaxed">
              Our app uses **Google AdMob** for in-app advertisements. AdMob may collect and use information such as cookies and device identifiers for analytics and ad targeting.
            </p>
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-boardy-accent text-boardy-bg px-6 py-2 rounded-full text-xs font-black uppercase hover:scale-105 transition-transform"
            >
              Google Privacy Policy
            </a>
          </section>

          {/* 4 & 5. Data Sharing & User Choices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-boardy-bg/5 shadow-sm">
              <h2 className="text-xl font-boardy font-black mb-4 text-boardy-bg">4. Data Sharing</h2>
              <p className="text-sm opacity-70 font-bold leading-relaxed">
                We do not share your personal data with third parties except to comply with legal obligations or as required by advertising partners like AdMob to serve ads.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-boardy-bg/5 shadow-sm">
              <h2 className="text-xl font-boardy font-black mb-4 text-boardy-bg">5. User Choices</h2>
              <p className="text-sm opacity-70 font-bold leading-relaxed">
                Manage personalized ads by adjusting device settings to limit ad tracking or via Google Ads Settings.
              </p>
            </div>
          </div>

          {/* 6. Security */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-boardy-bg/5 shadow-sm">
            <h2 className="text-2xl font-boardy font-black mb-4 flex items-center gap-3 text-boardy-bg">
              <MdShield /> 6. Security
            </h2>
            <p className="text-sm opacity-70 font-bold leading-relaxed">
              We take reasonable measures to protect your information. However, no system is entirely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 7. Children's Privacy */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-boardy-bg/5 shadow-sm">
            <h2 className="text-2xl font-boardy font-black mb-4 flex items-center gap-3 text-boardy-bg">
              <MdPersonSearch /> 7. Children's Privacy
            </h2>
            <p className="text-sm opacity-70 font-bold leading-relaxed">
              Our app is not intended for children under 13. We do not knowingly collect personal information from children. If data is provided by a child, we will delete it upon notification.
            </p>
          </section>

          {/* 8. Changes to this Policy */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-boardy-bg/5 shadow-sm">
            <h2 className="text-2xl font-boardy font-black mb-4 flex items-center gap-3 text-boardy-bg">
              <MdHistory /> 8. Changes to Policy
            </h2>
            <p className="text-sm opacity-70 font-bold leading-relaxed">
              We may update this Privacy Policy. Changes will be posted within the app, and the "Effective Date" will be updated accordingly.
            </p>
          </section>

          {/* 9. Contact Us */}
          <section>
            <h2 className="text-2xl font-boardy font-black mb-8 text-center text-boardy-bg">9. Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:firattgulerrr@gmail.com" className="flex items-center gap-4 bg-white p-6 rounded-[2rem] border border-boardy-bg/10 hover:border-boardy-bg transition-all group">
                <MdMail className="text-3xl text-boardy-bg group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] uppercase font-black opacity-40">Support Email</p>
                  <p className="font-black text-sm">firattgulerrr@gmail.com</p>
                </div>
              </a>
              <a href="https://www.firatguler.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-6 rounded-[2rem] border border-boardy-bg/10 hover:border-boardy-bg transition-all group">
                <MdLanguage className="text-3xl text-boardy-bg group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] uppercase font-black opacity-40">Developer Website</p>
                  <p className="font-black text-sm">www.firatguler.com</p>
                </div>
              </a>
            </div>
          </section>

        </main>

        <footer className="mt-20 pt-8 border-t border-boardy-bg/10 text-center">
          <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.3em] text-boardy-bg">
            © 2026 Boardy App • Privacy Protection
          </p>
        </footer>
      </div>
    </div>
  );
}