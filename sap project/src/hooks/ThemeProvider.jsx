import React, { createContext, useState, useEffect } from "react";
import chroma from "chroma-js";

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
        hoverBg: "#69b19b", // You can adjust this based on background dynamically
        focusShadow: "rgba(52, 172, 144, 0.3)",
        scrollbarThumb: "rgba(52, 172, 144, 1)", // Adjust based on background
        scrollbarTrack: "#86cfa7",
        disabledBg: "#88ceac",
        disabledBorder: "#69b19b",
        thBg: "#227069", // Adjust based on background dynamically
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
    logo: "nitsel-logo.svg",
};

// Helper function to adjust dependent colors (darken and lighten)
const adjustColorForDarker = (color, factor = 0.2) => chroma(color).darken(factor).hex();
const adjustColorForLighter = (color, factor = 0.2) => chroma(color).brighten(factor).hex();
const adjustColorForHover = (color, background, hoverOpacity = 0.8) => {
    // Blend the color with the background using the hover opacity
    const hoverColor = chroma.mix(background, color, hoverOpacity).hex();

    return hoverColor;
};
const adjustColorForOpacity = (color, opacity) => chroma(color).alpha(opacity).hex();

// Create context
export const ThemeContext = createContext();

// ThemeProvider component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);
    const [isInvertedRequired, setIsInvertedRequired] = useState(false)

    const isBackgroundBright = (color) => {
        // Calculate the luminance of the color
        const luminance = chroma(color).luminance();

        // Check if the luminance is greater than the threshold (0.5 for bright/dark)
        // return luminance > 0.5 ? "bright" : "dark";
        return luminance > 0.5;
    };

    // Load theme from local storage or use default on mount
    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem("theme"));
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            localStorage.setItem("theme", JSON.stringify(defaultTheme));
        }

        setIsInvertedRequired(storedTheme?.logo?.includes("svg") && !isBackgroundBright(storedTheme.colors?.background))

    }, []);



    // Update theme function
    const updateTheme = (newTheme, subKey) => {
        setTheme((prev) => {
            const updatedTheme = { ...prev, ...newTheme }
            // console.log(subKey);

            setIsInvertedRequired(newTheme?.logo?.includes("svg") && isBackgroundBright(newTheme.colors?.background))

            if (newTheme.colors?.background && newTheme?.colors?.text) {
                updatedTheme.colors.hoverBg = adjustColorForHover(newTheme.colors.text, newTheme?.colors?.background, 0.5);  // Darker for hover
            }

            // Adjust dependent colors based on background and text
            if (subKey == "background") {
                if (newTheme.colors?.background) {
                    updatedTheme.colors.scrollbarThumb = adjustColorForDarker(newTheme.colors.background, 0.3); // More darkened for scrollbar thumb
                    updatedTheme.colors.thBg = adjustColorForDarker(newTheme.colors.background, 0.1);  // Lighter darken for table header background
                    updatedTheme.colors.disabledBg = adjustColorForLighter(newTheme.colors.background, 0.2); // Slightly lighter for disabled background
                }
            }
            if (subKey == "text") {
                if (newTheme.colors?.text) {
                    updatedTheme.colors.lightGray = adjustColorForOpacity(newTheme.colors.text, 0.6);  // Darker for hover
                    updatedTheme.colors.primary = adjustColorForDarker(newTheme.colors.text, 0.9);  // Darker for hover
                    updatedTheme.colors.border = adjustColorForOpacity(newTheme.colors.text, 0.2); // Slightly darker for border
                    updatedTheme.colors.borderLight = adjustColorForLighter(newTheme.colors.text, 0.3); // Much lighter for borderLight
                    updatedTheme.colors.white = newTheme.colors.text;  // No change for white text
                    updatedTheme.colors.scrollbarTrack = adjustColorForLighter(newTheme.colors.text, 0.25); // Lighter for scrollbar track
                    updatedTheme.colors.disabledBorder = adjustColorForDarker(newTheme.colors.text, 0.2); // Slightly darker for disabled border
                }
            }

            return updatedTheme;
        });

        // Save updated theme to local storage
        localStorage.setItem("theme", JSON.stringify(newTheme));
    };

    console.log({ isInvertedRequired });

    // Reset theme function
    const resetTheme = () => {
        setTheme(defaultTheme);  // Reset to default theme
        localStorage.setItem("theme", JSON.stringify(defaultTheme));  // Save default theme to local storage
    };

    // Set the theme variables dynamically in the root
    useEffect(() => {
        const root = document.documentElement;

        // Set colors as CSS variables
        Object.keys(theme.colors).forEach((key) => {
            root.style.setProperty(`--color-${key}`, theme.colors[key]);
        });

        root.style.setProperty("--background-logo", `url(${theme?.logo})`);

        // Set border-radius as CSS variables
        Object.keys(theme.borderRadius).forEach((key) => {
            root.style.setProperty(
                key?.includes("DEFAULT") ? `--border-radius` : `--border-radius-${key}`,
                theme.borderRadius[key]
            );
        });

        // Set border-width as CSS variables
        Object.keys(theme.borderWidth).forEach((key) => {
            root.style.setProperty(
                key.includes("DEFAULT") ? `--border-width` : `--border-width-${key}`,
                `${theme.borderWidth[key]}`
            );
        });

        // Set font-sizes as CSS variables
        Object.keys(theme.fontSize).forEach((key) => {
            root.style.setProperty(`--font-size-${key}`, theme.fontSize[key]);
        });

        // Set font-family as CSS variables
        Object.keys(theme.fontFamily).forEach((key) => {
            root.style.setProperty(
                `--font-family-${key}`,
                theme.fontFamily[key].join(", ")
            );
        });
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, updateTheme, resetTheme, isInvertedRequired }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;