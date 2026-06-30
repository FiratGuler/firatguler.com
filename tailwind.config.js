module.exports = {
  content: [
    "./index.html",
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

        "drinka-primary": "#751523",
        "drinka-light": "#EFE6E9",
        "drinka-muted": "#9F9F9F",
        "drinka-surface-800": "#1A1B1D",
        "drinka-surface-900": "#121212",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "wordy": ["Nunito", "sans-serif"],
        "boardy": ["Grenze", "serif"],
        "drinka": ["Epilogue", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    }
  },
  plugins: [],
}
