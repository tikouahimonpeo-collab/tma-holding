/** @type {import('tailwindcss').Config} */
const relumePreset = require("@relume_io/relume-tailwind");

module.exports = {
  presets: [relumePreset],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./accueil/**/*.{js,jsx,ts,tsx}",
    "./a-propos/**/*.{js,jsx,ts,tsx}",
    "./investisseurs/**/*.{js,jsx,ts,tsx}",
    "./carrieres/**/*.{js,jsx,ts,tsx}",
    "./presse/**/*.{js,jsx,ts,tsx}",
    "./impact/**/*.{js,jsx,ts,tsx}",
    "./services/**/*.{js,jsx,ts,tsx}",
    "./services/sections/**/*.{js,jsx,ts,tsx}",
    "./tma-shop/**/*.{js,jsx,ts,tsx}",
    "./projet/**/*.{js,jsx,ts,tsx}",
    "./réalisations/**/*.{js,jsx,ts,tsx}",
    "./produit/**/*.{js,jsx,ts,tsx}",
    "./contact-/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
      },
      opacity: {
        2: "0.02",
        4: "0.04",
        6: "0.06",
        8: "0.08",
        12: "0.12",
        15: "0.15",
        18: "0.18",
        22: "0.22",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      colors: {
        // TMA Holding — identité premium BTP
        tma: {
          // Bleu nuit profond — dominante
          night: {
            DEFAULT: "#0A1A2F",
            50: "#E6EAF0",
            100: "#C0CAD8",
            200: "#8B9CB5",
            300: "#5A7093",
            400: "#324C71",
            500: "#132845",
            600: "#0A1A2F",
            700: "#061224",
            800: "#030A17",
            900: "#01050C",
          },
          // Bleu électrique — accent conversion
          electric: {
            DEFAULT: "#1E90FF",
            50: "#E6F2FF",
            100: "#B8DBFF",
            200: "#7DBEFF",
            300: "#42A1FF",
            400: "#1E90FF",
            500: "#0070DB",
            600: "#0059B3",
          },
          // Doré chantier — rare, pour accents premium
          gold: "#D4A84B",
          // Noir profond — typographie
          ink: "#0B0B0F",
          // Blanc pur + neutres
          bone: "#FAFAFA",
          stone: "#F2F2F4",
          ash: "#8A8A93",
        },
      },
      fontFamily: {
        display: ["var(--font-inter)", "'Helvetica Neue'", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "'Helvetica Neue'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        premium:
          "0 10px 40px -10px rgba(10, 26, 47, 0.25), 0 2px 6px -2px rgba(10, 26, 47, 0.08)",
        glow: "0 0 0 3px rgba(30, 144, 255, 0.25)",
      },
      backgroundImage: {
        "tma-gradient":
          "linear-gradient(135deg, #0A1A2F 0%, #132845 55%, #1E90FF 120%)",
        "tma-dark":
          "linear-gradient(180deg, rgba(10,26,47,0.0) 0%, rgba(10,26,47,0.85) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideIn: {
          from: { opacity: 0, transform: "translateX(-24px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
