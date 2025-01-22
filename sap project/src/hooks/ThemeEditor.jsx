import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const ThemeEditor = () => {
    const navigate = useNavigate()
    const { theme, resetTheme, updateTheme } = useContext(ThemeContext);
    const [editedTheme, setEditedTheme] = useState(theme);

    // Load theme from local storage or fallback to default if not available
    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem("theme"));
        if (storedTheme) {
            setEditedTheme(storedTheme);
        } else {
            setEditedTheme(theme); // If no stored theme, fallback to context theme
        }
    }, [theme]); // Dependency array includes `theme` to refresh when it changes

    // Handle input change and update theme immediately
    const handleChange = (key, subKey, value) => {
        const updatedTheme = {
            ...editedTheme,
            [key]: {
                ...editedTheme[key],
                [subKey]: value,
            },
        };

        setEditedTheme(updatedTheme);
        updateTheme(updatedTheme); // Immediately update the theme
    };

    return (
        <div className="p-4 bg-background pt-24 main space-y-10 text-center">
            <h2 className="text-2xl font-bold m-4">Theme Editor</h2>

            {/* Colors Section */}
            <div className="mb-6 border-b-[1px] pb-12 border-border">
                <h3 className="text-xl font-semibold mb-2">Colors</h3>
                <div className="flex gap-6 flex-wrap justify-center">
                    {Object.keys(theme.colors).slice(0, 2).map((colorKey) => (
                        <div key={colorKey} className="mb-2">
                            <label className="block font-medium mb-1">
                                {colorKey}:
                            </label>
                            <input
                                type="color"
                                value={editedTheme.colors[colorKey]}
                                onChange={(e) =>
                                    handleChange("colors", colorKey, e.target.value)
                                }
                                className="border p-1 my-2 rounded bg-transparent"
                            />
                            <input
                                type="text"
                                value={editedTheme.colors[colorKey]}
                                onChange={(e) =>
                                    handleChange("colors", colorKey, e.target.value)
                                }
                                className="ml-2 border p-1 rounded bg-transparent"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Font Sizes Section */}
            <div className="mb-6 border-b-[1px] pb-12 border-border">
                <h3 className="text-xl font-semibold mb-2">Font Sizes</h3>
                <div className="flex gap-6 flex-wrap justify-center">
                    {Object.keys(theme.fontSize).slice(1, 2).map((sizeKey) => (
                        <div key={sizeKey} className="mb-2">
                            <label className="block font-medium mb-1">
                                {sizeKey} (px):
                            </label>
                            <input
                                type="number"
                                min={10}
                                max={40}
                                value={parseInt(editedTheme.fontSize[sizeKey], 10) || ""}
                                onChange={(e) =>
                                    handleChange("fontSize", sizeKey, `${e.target.value}px`)
                                }
                                className="border p-1 rounded w-full bg-transparent"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Font Family Section */}
            <div className="mb-6 border-b-[1px] pb-12 border-border">
                <h3 className="text-xl font-semibold mb-2">Font Family</h3>
                <div className="flex gap-6 flex-wrap justify-center">
                    {Object.entries(theme.fontFamily).map(([key, value]) => (
                        <div key={key} className="mb-2">
                            <label className="block font-medium mb-1">
                                {key}:
                            </label>
                            <select
                                value={value.join(", ")} // Display as a comma-separated string
                                onChange={(e) =>
                                    handleChange(
                                        "fontFamily",
                                        key,
                                        e.target.value.split(",").map((f) => f.trim()) // Convert back to an array
                                    )
                                }
                                className="border p-2 rounded w-full bg-transparent"
                            >
                                <option value="Outfit, sans-serif" style={{ fontFamily: "Outfit, sans-serif" }}>
                                    Outfit, sans-serif
                                </option>
                                <option value="Helvetica, Arial, sans-serif" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                    Helvetica, Arial, sans-serif
                                </option>
                                <option value="Georgia, serif" style={{ fontFamily: "Georgia, serif" }}>
                                    Georgia, serif
                                </option>
                                <option value="Courier New, monospace" style={{ fontFamily: "Courier New, monospace" }}>
                                    Courier New, monospace
                                </option>
                                <option value="Montserrat, sans-serif" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                    Montserrat, sans-serif
                                </option>
                                <option value="Poppins, sans-serif" style={{ fontFamily: "Poppins, sans-serif" }}>
                                    Poppins, sans-serif
                                </option>
                            </select>
                        </div>
                    ))}
                </div>
            </div>



            <div className="flex gap-6 justify-center items-center my-10">
                {/* Save Changes Button */}
                <Button
                    onClick={() => updateTheme(editedTheme)}
                >
                    Save Changes
                </Button>

                {/* Reset Button */}
                <Button
                    onClick={resetTheme}
                    variant="danger"
                >
                    Reset to Default
                </Button>

                <Button
                    onClick={() => {
                        navigate("/themeAdvanced")
                    }}
                    variant="warning"
                >
                    Edit Advanced Settings
                </Button>

            </div>
        </div>
    );
};

export default ThemeEditor;