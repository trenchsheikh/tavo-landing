/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        instrument: ['"Instrument Serif"', "serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseBar: {
          "0%": { opacity: "0.7" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        pulseBar: "pulseBar 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
