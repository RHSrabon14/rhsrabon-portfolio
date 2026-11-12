/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#05060a",
        surface: "#0b0d14",
        graphite: "#14161f",
        accent: "#4f7cff",
        accent2: "#8b5cf6",
        cyan: "#22d3ee",
        text: "#e7e9f0",
        muted: "#8a8fa3",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};