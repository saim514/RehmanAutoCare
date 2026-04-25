import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#071526",
          card: "#0d2040",
          blue: "#1a8cff",
          "blue-dark": "#0d6fd4",
          "blue-glow": "#1a8cff33",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(26, 140, 255, 0.25)",
        "glow-lg": "0 0 40px rgba(26, 140, 255, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
