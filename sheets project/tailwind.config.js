/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#217b72", // Deep green
        text: "#1a5759", // Dark rich green for text
        primary: "#86cfa7", // Earthy light green (primary color)
        lightGray: "#88ceac", // Subtle light green for placeholders
        border: "#34ac90", // Muted bright green for borders
        white: "#bae9da", // Soft white
        hoverBg: "#69b19b", // Bright green for hover effects
        focusShadow: "rgba(52, 172, 144, 0.3)", // Green glow for focus effects
        scrollbarThumb: "rgba(52, 172, 144, 0.5)", // Muted green for scrollbar thumb
        scrollbarTrack: "#86cfa7", // Lighter green for scrollbar track
        disabledBg: "#88ceac", // Pale green for disabled background
        disabledBorder: "#69b19b", // Light green for disabled borders
      },
    },
  },
  plugins: [],
}
