/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Palette principale Aetheris
        primary: {
          DEFAULT: "#00FFFF",      // cyan futuriste
          light: "#5BFFFF",
          dark: "#00B7B7",
        },
        secondary: {
          DEFAULT: "#0f172a",      // bleu nuit profond
          light: "#1e293b",
          dark: "#020617",
        },
        success: "#22c55e",         // vert validation médicale
        warning: "#f59e0b",         // jaune d’alerte
        danger: "#ef4444",          // rouge critique
        info: "#3b82f6",            // bleu analyse
      },

      // ✨ Police élégante et lisible
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        title: ["Orbitron", "sans-serif"],
      },

      // 🌈 Dégradés médicaux Aetheris
      backgroundImage: {
        "aetheris-gradient": "linear-gradient(135deg, #00FFFF 0%, #4B0082 100%)",
        "aetheris-dark": "linear-gradient(160deg, #0f172a 0%, #1e293b 100%)",
      },

      // 💫 Animations et effets
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF" },
          "50%": { boxShadow: "0 0 20px #00FFFF, 0 0 40px #00FFFF" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease-in forwards",
      },
    },
  },
  plugins: [],
};
