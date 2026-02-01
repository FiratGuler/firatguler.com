module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FEE715",
        "background-dark": "#121212",
        "tile-dark": "#1C1C1E",
        "tile-hover": "#2C2C2E",

        // Wordy özel
        "wordy-bg": "#f8eee2",
        "wordy-text": "#333333",
        "wordy-accent": "#f88222",

        "boardy-bg": "#8B1430",        // Biraz daha derin, kaliteli bir şarap/bordo tonu
        "boardy-text": "#1A1A1A",      // Tam siyah değil, gözü yormayan çok koyu bir antrasit
        "boardy-accent": "#FDFBF0",    // Kirli beyaz yerine daha "fildişi/kağıt" hissi veren bir krem


      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "wordy": ["Nunito", "sans-serif"],
        "boardy": ["Grenze", "serif"]
      },
    }
  },
  plugins: [],
}
