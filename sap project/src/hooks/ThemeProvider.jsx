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
        setTheme((prev) => ({
            ...prev,
            ...newTheme,
        }));

        // Save updated theme to local storage
        localStorage.setItem("theme", JSON.stringify(newTheme));
    };

    // Reset theme function
    const resetTheme = () => {
        setTheme(defaultTheme);  // Reset to default theme
        localStorage.setItem("theme", JSON.stringify(defaultTheme));  // Save default theme to local storage
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