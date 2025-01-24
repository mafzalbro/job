import React, { createContext, useState, useEffect } from "react";

// Default root variables
const defaultTheme = {
    colors: {
        background: "#217b72",
        text: "#bae9da",
        primary: "#86cfa7",
        lightGray: "#88ceac",
        border: "#34ac90",
        borderLight: "#88ceac",
        white: "#bae9da",
        hoverBg: "#69b19b",
        focusShadow: "rgba(52, 172, 144, 0.3)",
        scrollbarThumb: "rgba(52, 172, 144, 1)",
        scrollbarTrack: "#86cfa7",
        disabledBg: "#88ceac",
        disabledBorder: "#69b19b",
        thBg: "#227069",
    },
    borderRadius: {
        DEFAULT: "100px",
        textarea: "20px",
    },
    borderWidth: {
        DEFAULT: "2px",
    },
    fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
    },
    fontFamily: {
        current: ["Outfit", "sans-serif"],
    },
};

// Helper functions to adjust colors
const adjustColorForDarker = (color) => {
    // Basic darkening logic (can use libraries like `polished` for accuracy)
    const darken = (hex, amount) => {
        const num = parseInt(hex.slice(1), 16);
        const r = Math.max((num >> 16) - amount, 0);
        const g = Math.max((num & 0x0000ff) - amount, 0);
        const b = Math.max(((num >> 8) & 0x00ff) - amount, 0);
        return `#${(r << 16) | (b << 8) | g}`;
    };
    return darken(color, 20);
};

const adjustColorForLighter = (color) => {
    // Basic lightening logic
    const lighten = (hex, amount) => {
        const num = parseInt(hex.slice(1), 16);
        const r = Math.min((num >> 16) + amount, 255);
        const g = Math.min((num & 0x0000ff) + amount, 255);
        const b = Math.min(((num >> 8) & 0x00ff) + amount, 255);
        return `#${(r << 16) | (b << 8) | g}`;
    };
    return lighten(color, 20);
};

// Create context
export const ThemeContext = createContext();

// ThemeProvider component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    // Load theme from local storage or use default on mount
    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem("theme"));
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            localStorage.setItem("theme", JSON.stringify(defaultTheme));
        }
    }, []);

    // Update theme function
    const updateTheme = (newTheme) => {
        setTheme((prev) => {
            const updatedTheme = { ...prev, ...newTheme };

            // Adjust dependent colors based on background and text
            if (newTheme.colors?.background) {
                updatedTheme.colors.primary = adjustColorForLighter(newTheme.colors.background);
                updatedTheme.colors.hoverBg = adjustColorForDarker(newTheme.colors.background);
                updatedTheme.colors.scrollbarThumb = adjustColorForDarker(newTheme.colors.background);
                updatedTheme.colors.thBg = adjustColorForDarker(newTheme.colors.background);
            }

            if (newTheme.colors?.text) {
                updatedTheme.colors.lightGray = adjustColorForLighter(newTheme.colors.text);
                updatedTheme.colors.border = newTheme.colors.text;
                updatedTheme.colors.borderLight = adjustColorForLighter(newTheme.colors.text);
                updatedTheme.colors.white = newTheme.colors.text;
                updatedTheme.colors.scrollbarTrack = adjustColorForLighter(newTheme.colors.text);
                updatedTheme.colors.disabledBorder = adjustColorForLighter(newTheme.colors.text);
            }

            return updatedTheme;
        });

        // Save updated theme to local storage
        localStorage.setItem("theme", JSON.stringify(newTheme));
    };

    // Reset theme function
    const resetTheme = () => {
        setTheme(defaultTheme); // Reset to default theme
        localStorage.setItem("theme", JSON.stringify(defaultTheme)); // Save default theme to local storage
    };

    // Set the theme variables dynamically
    useEffect(() => {
        const root = document.documentElement;

        // Set colors
        Object.keys(theme.colors).forEach((key) => {
            root.style.setProperty(`--color-${key}`, theme.colors[key]);
        });

        // Set border-radius
        Object.keys(theme.borderRadius).forEach((key) => {
            root.style.setProperty(key?.includes("DEFAULT") ? `--border-radius` : `--border-radius-${key}`, theme.borderRadius[key]);
        });

        // Set border-width
        Object.keys(theme.borderWidth).forEach((key) => {
            root.style.setProperty(key.includes("DEFAULT") ? `--border-width` : `--border-width-${key}`, `${theme.borderWidth[key]}`);
        });

        // Set font-sizes
        Object.keys(theme.fontSize).forEach((key) => {
            root.style.setProperty(`--font-size-${key}`, theme.fontSize[key]);
        });

        // Set font-family
        Object.keys(theme.fontFamily).forEach((key) => {
            root.style.setProperty(`--font-family-${key}`, theme.fontFamily[key].join(", "));
        });
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;