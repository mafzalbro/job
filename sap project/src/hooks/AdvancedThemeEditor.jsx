import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/common/ImageUpload";
import convertToCapitalizedWithSpaces from "../utils/convertToCapitalizedWithSpaces";

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
            [key]: subKey ? {
                ...editedTheme[key],
                [subKey]: value,
            } : value,
        };

        // console.log({ updatedTheme });

        setEditedTheme(updatedTheme);
        updateTheme(updatedTheme, subKey); // Immediately update the theme
    };

    return (
        <div className="p-4 bg-background/10 pt-24 main space-y-10 text-center">
            <h2 className="text-2xl font-bold m-4">Advanced Theme Editor</h2>

            {/* Colors Section */}
            <div className="mb-6 border-b-[1px] pb-12 border-border">
                <h3 className="text-xl font-semibold mb-2">Colors</h3>
                <div className="flex gap-6 flex-wrap justify-center">
                    {Object.keys(theme.colors).map((colorKey) => (
                        <div key={colorKey} className="mb-2">
                            <label className="block font-medium mb-1">{convertToCapitalizedWithSpaces(colorKey, "colorKey")}:</label>
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
                                readOnly
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
                    {Object.keys(theme.fontSize).map((sizeKey) => (
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

            {/* Border Radius Section */}
            <div className="mb-6 border-b-[1px] pb-12 border-border">
                <h3 className="text-xl font-semibold mb-2">Border Radius</h3>
                <div className="flex gap-6 flex-wrap justify-center">
                    {Object.keys(theme.borderRadius).map((radiusKey) => (
                        <div key={radiusKey} className="mb-2">
                            <label className="block font-medium mb-1">
                                {convertToCapitalizedWithSpaces(radiusKey)} (px):
                            </label>
                            <input
                                type="number"
                                min={0}
                                value={parseInt(editedTheme.borderRadius[radiusKey], 10) || ""}
                                onChange={(e) =>
                                    handleChange(
                                        "borderRadius",
                                        radiusKey,
                                        `${e.target.value}px`
                                    )
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
                                <option value="Roboto, sans-serif" style={{ fontFamily: "Roboto, sans-serif" }}>
                                    Roboto, sans-serif
                                </option>
                                <option value="Lato, sans-serif" style={{ fontFamily: "Lato, sans-serif" }}>
                                    Lato, sans-serif
                                </option>
                                <option value="Oswald, sans-serif" style={{ fontFamily: "Oswald, sans-serif" }}>
                                    Oswald, sans-serif
                                </option>
                                <option value="Raleway, sans-serif" style={{ fontFamily: "Raleway, sans-serif" }}>
                                    Raleway, sans-serif
                                </option>
                                <option value="Open Sans, sans-serif" style={{ fontFamily: "Open Sans, sans-serif" }}>
                                    Open Sans, sans-serif
                                </option>
                                <option value="Merriweather, serif" style={{ fontFamily: "Merriweather, serif" }}>
                                    Merriweather, serif
                                </option>
                                <option value="Playfair Display, serif" style={{ fontFamily: "Playfair Display, serif" }}>
                                    Playfair Display, serif
                                </option>
                                <option value="Nunito, sans-serif" style={{ fontFamily: "Nunito, sans-serif" }}>
                                    Nunito, sans-serif
                                </option>
                                <option value="Ubuntu, sans-serif" style={{ fontFamily: "Ubuntu, sans-serif" }}>
                                    Ubuntu, sans-serif
                                </option>
                                <option value="Quicksand, sans-serif" style={{ fontFamily: "Quicksand, sans-serif" }}>
                                    Quicksand, sans-serif
                                </option>
                                <option value="Dancing Script, cursive" style={{ fontFamily: "Dancing Script, cursive" }}>
                                    Dancing Script, cursive
                                </option>
                            </select>
                        </div>
                    ))}
                </div>
            </div>

            {/* Logo Upload Section */}
            <div className="mb-6 border-b-[1px] pb-12 border-border">
                <h3 className="text-xl font-semibold mb-2">Upload Logo</h3>
                <ImageUpload
                    value={theme.logo}
                    onChange={(base64, file) => {
                        // logoUpload({ base64 });
                        handleChange("logo", null, base64);
                        // console.log("File selected:", { base64 });
                        // console.log("File selected:", { file });
                    }}
                />
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
                        navigate("/Theme")
                    }}
                    variant="warning"
                >
                    Go to Simple Theme
                </Button>

            </div>
        </div>
    );
};

export default ThemeEditor;
