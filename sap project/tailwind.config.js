/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        lightGray: "var(--color-light-gray)",
        border: "var(--color-border)",
        borderLight: "var(--color-border-light)",
        white: "var(--color-white)",
        hoverBg: "var(--color-hover-bg)",
        focusShadow: "var(--color-focus-shadow)",
        scrollbarThumb: "var(--color-scrollbar-thumb)",
        scrollbarTrack: "var(--color-scrollbar-track)",
        disabledBg: "var(--color-disabled-bg)",
        disabledBorder: "var(--color-disabled-border)",
        thBg: "var(--color-th-bg)",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
        textarea: "var(--textarea-border-radius)",
      },
      borderWidth: {
        DEFAULT: "var(--border-width-default)",
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
      },
      fontFamily: {
        sans: "var(--font-family-sans)",
        serif: "var(--font-family-serif)",
        mono: "var(--font-family-mono)",
      },
    },
  },
  plugins: [],
};
