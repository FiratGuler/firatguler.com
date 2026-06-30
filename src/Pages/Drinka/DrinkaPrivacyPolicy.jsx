import React from "react";
import {
  MdSecurity,
  MdArrowBack,
  MdMail,
  MdLanguage,
  MdInfo,
  MdSync,
  MdShield,
  MdPersonSearch,
  MdHistory,
  MdAdsClick,
  MdStorage,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function DrinkaPrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-drinka text-drinka-light pb-20 selection:bg-drinka-primary selection:text-white bg-gradient-to-b from-drinka-surface-800 to-drinka-surface-900">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <nav className="mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-drinka-primary font-bold hover:text-drinka-light transition-colors uppercase text-sm tracking-widest"
          >
            <MdArrowBack className="text-xl" /> Back to Drinka
          </button>
        </nav>

        <header className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <div className="w-20 h-20 bg-drinka-primary text-drinka-light rounded-[2rem] shadow-xl flex items-center justify-center shrink-0">
            <MdSecurity className="text-5xl" />
          </div>
          <div>
            <h1 className="text-5xl font-bold tracking-tighter">Privacy Policy</h1>
            <p className="text-sm font-medium text-drinka-muted uppercase tracking-[0.2em] mt-2">
              Effective Date: June 30, 2026
            </p>
          </div>
        </header>

        <main className="space-y-12">
          <section className="bg-drinka-primary/10 border border-drinka-primary/20 p-6 rounded-[2rem]">
            <p className="text-sm font-medium text-drinka-light leading-relaxed">
              Drinka is built around a simple principle: <strong>your data belongs to you</strong>.
              We do not analyze, profile, or sell your personal information. Data you enter is stored
              securely and shown back to you inside the app — nothing more.
            </p>
          </section>

          <section className="bg-drinka-surface-800 p-8 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MdInfo className="text-drinka-primary" /> 1. Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">1.1 Data You Provide</h3>
                <p className="text-drinka-muted font-medium mb-4">
                  When you use Drinka, you may voluntarily enter the following information. All of it
                  is stored to power your personal tasting journal and is only displayed back to you
                  within the app:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Tasting records (drink type, brand, style, ratings)",
                    "Notes, mood, and food pairing preferences",
                    "Tasting dates and buy-again preferences",
                    "Optional photos you attach to a tasting",
                    "Location coordinates when you mark where you drank",
                    "Names of people you tag on shared tastings",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="bg-drinka-surface-900 p-3 rounded-xl text-sm font-medium flex items-center gap-2 text-drinka-light"
                    >
                      <div className="w-1.5 h-1.5 bg-drinka-primary rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">1.2 Account Information</h3>
                <p className="text-drinka-muted font-medium mb-4">
                  Drinka uses <strong>Firebase Anonymous Authentication</strong>. We do not require
                  your name, email address, or phone number to use the app. A unique anonymous user ID
                  is created automatically so your data can be stored and synced.
                </p>
                <p className="text-drinka-muted font-medium">
                  Your profile may also store premium subscription status and in-app credit balance —
                  solely to enable those features inside the app.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">1.3 Automatically Collected Data (Advertising)</h3>
                <p className="text-drinka-muted font-medium mb-4">
                  Drinka displays ads through Google AdMob. AdMob may automatically collect device
                  identifiers, IP address, and ad interaction data to serve and measure advertisements.
                  This collection is handled by Google, not by us for any other purpose.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-drinka-surface-800 p-8 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MdSync className="text-drinka-primary" /> 2. How We Use Your Information
            </h2>
            <p className="text-drinka-muted font-medium mb-6">
              We use your data <strong>only</strong> for the following purposes. We do not use your
              data for marketing, profiling, analytics, or any form of automated decision-making:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-drinka-muted">
              <div className="p-4 bg-drinka-surface-900 rounded-2xl">
                Store and retrieve your tasting journal entries.
              </div>
              <div className="p-4 bg-drinka-surface-900 rounded-2xl">
                Display your drinks on the in-app map.
              </div>
              <div className="p-4 bg-drinka-surface-900 rounded-2xl">
                Sync your data across sessions via Firebase.
              </div>
              <div className="p-4 bg-drinka-surface-900 rounded-2xl">
                Show photos you uploaded alongside your tastings.
              </div>
              <div className="p-4 bg-drinka-surface-900 rounded-2xl">
                Manage premium features and in-app credits.
              </div>
              <div className="p-4 bg-drinka-surface-900 rounded-2xl col-span-full">
                We do <strong>not</strong> sell, rent, trade, or share your tasting data with third
                parties for their own purposes.
              </div>
            </div>
          </section>

          <section className="bg-drinka-primary text-drinka-light p-8 rounded-[2.5rem] shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <MdStorage /> 3. Firebase & Cloud Storage
            </h2>
            <p className="opacity-90 text-sm mb-6 leading-relaxed">
              Drinka uses Google Firebase as a secure cloud database. Firebase acts purely as
              infrastructure — your data is written to the database and read back when you open the
              app. We do not process or analyze your data beyond what is needed to store and display
              it.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-drinka-light/50 pl-4">
                <p className="font-bold">Firebase Authentication</p>
                <p className="text-xs opacity-70">
                  Creates an anonymous account so your journal is tied to you without requiring
                  personal login credentials.
                </p>
              </div>
              <div className="border-l-2 border-drinka-light/50 pl-4">
                <p className="font-bold">Cloud Firestore</p>
                <p className="text-xs opacity-70">
                  Stores your tastings, shared contacts, and user profile data. Data is scoped to your
                  anonymous user ID and is not accessible to other users.
                </p>
              </div>
              <div className="border-l-2 border-drinka-light/50 pl-4">
                <p className="font-bold">Cloudflare R2 (Image Storage)</p>
                <p className="text-xs opacity-70">
                  Optional photos you attach to tastings are uploaded to Cloudflare R2. Only the image
                  URL is stored in Firestore and displayed in your journal.
                </p>
              </div>
            </div>
            <p className="text-xs opacity-70 mt-6">
              Firebase is provided by Google LLC. Google's handling of infrastructure data is governed
              by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="underline hover:opacity-80"
              >
                Google's Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="bg-drinka-surface-800 p-8 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <MdAdsClick className="text-drinka-primary" /> 4. AdMob & Advertising
            </h2>
            <p className="text-drinka-muted text-sm mb-6 leading-relaxed font-medium">
              Drinka uses <strong>Google AdMob</strong> to display banner and rewarded advertisements.
              AdMob may collect cookies, device identifiers, and usage data to deliver and measure
              ads. This is separate from your tasting journal data — we do not combine or share your
              journal with advertisers.
            </p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-drinka-primary text-drinka-light px-6 py-2 rounded-full text-xs font-bold uppercase hover:opacity-90 transition-opacity"
            >
              Google Privacy Policy
            </a>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-drinka-surface-800 p-8 rounded-[2.5rem] border border-white/5">
              <h2 className="text-xl font-bold mb-4">5. Data Sharing</h2>
              <p className="text-sm text-drinka-muted font-medium leading-relaxed">
                We do not share your tasting journal, notes, photos, or location data with third
                parties. The only exceptions are: (a) cloud infrastructure providers (Firebase,
                Cloudflare) that store your data on our behalf, and (b) Google AdMob for ad delivery
                as described above. We never sell your data.
              </p>
            </div>
            <div className="bg-drinka-surface-800 p-8 rounded-[2.5rem] border border-white/5">
              <h2 className="text-xl font-bold mb-4">6. Your Rights & Control</h2>
              <p className="text-sm text-drinka-muted font-medium leading-relaxed">
                You can delete individual tastings within the app at any time. To request full
                account and data deletion, contact us at the email below. You can limit ad tracking
                in your device's privacy settings (Settings → Privacy → Tracking on iOS).
              </p>
            </div>
          </div>

          <section className="bg-drinka-surface-800 p-8 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <MdShield className="text-drinka-primary" /> 7. Security
            </h2>
            <p className="text-sm text-drinka-muted font-medium leading-relaxed">
              All communication between the app and Firebase is encrypted via SSL/TLS. Firestore
              security rules restrict each user's data to their own anonymous account. However, no
              internet-based system can guarantee absolute security.
            </p>
          </section>

          <section className="bg-drinka-surface-800 p-8 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <MdPersonSearch className="text-drinka-primary" /> 8. Age Restriction
            </h2>
            <p className="text-sm text-drinka-muted font-medium leading-relaxed">
              Drinka is an alcohol-related journaling app and is intended for users who are of legal
              drinking age in their country (18+ or 21+ depending on jurisdiction). We do not
              knowingly collect data from minors. If you believe a minor has used the app, please
              contact us and we will delete the associated data.
            </p>
          </section>

          <section className="bg-drinka-surface-800 p-8 rounded-[2.5rem] border border-white/5">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <MdHistory className="text-drinka-primary" /> 9. Changes to This Policy
            </h2>
            <p className="text-sm text-drinka-muted font-medium leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated effective date. Continued use of the app after changes constitutes
              acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">10. Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="mailto:firattgulerrr@gmail.com"
                className="flex items-center gap-4 bg-drinka-surface-800 p-6 rounded-[2rem] border border-white/5 hover:border-drinka-primary/40 transition-all group"
              >
                <MdMail className="text-3xl text-drinka-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-drinka-muted">Direct Email</p>
                  <p className="font-bold text-sm">firattgulerrr@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.firatguler.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-drinka-surface-800 p-6 rounded-[2rem] border border-white/5 hover:border-drinka-primary/40 transition-all group"
              >
                <MdLanguage className="text-3xl text-drinka-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-drinka-muted">Official Website</p>
                  <p className="font-bold text-sm">www.firatguler.com</p>
                </div>
              </a>
            </div>
          </section>
        </main>

        <footer className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] font-bold text-drinka-muted uppercase tracking-[0.3em]">
            © 2026 Drinka • Remember Every Night • Created by Fırat Güler
          </p>
        </footer>
      </div>
    </div>
  );
}
