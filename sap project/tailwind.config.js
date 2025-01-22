/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      },
      colors: {
        background: "var(--color-background)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        lightGray: "var(--color-lightGray)",
        border: "var(--color-border)",
        borderLight: "var(--color-borderLight)",
        white: "var(--color-white)",
        hoverBg: "var(--color-hoverBg)",
        focusShadow: "var(--color-focusShadow)",
        scrollbarThumb: "var(--color-scrollbarThumb)",
        scrollbarTrack: "var(--color-scrollbarTrack)",
        disabledBg: "var(--color-disabledBg)",
        disabledBorder: "var(--color-disabledBorder)",
        thBg: "var(--color-thBg)",
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
