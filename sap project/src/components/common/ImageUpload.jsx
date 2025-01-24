import React, { useEffect, useState } from "react";

const ImageUpload = ({ value, onChange, uploadFunction }) => {
    const [preview, setPreview] = useState(""); // For previewing the image
    const [uploading, setUploading] = useState(false); // For upload state management

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async () => {
                const base64 = reader.result;
                setPreview(base64); // Update the preview
                if (onChange) onChange(base64, file); // Trigger onChange with base64 and file

                if (uploadFunction) {
                    setUploading(true); // Indicate upload is in progress
                    try {
                        const response = await uploadFunction(file); // Call upload function with file
                        console.log("Image uploaded successfully:", response);
                    } catch (error) {
                        console.error("Image upload failed:", error);
                    } finally {
                        setUploading(false); // Reset uploading state
                    }
                }
            };
            reader.readAsDataURL(file); // Convert file to base64
        }
    };

    useEffect(() => {
        setPreview(value); // Sync preview with initial value
    }, [value]);

    return (
        <div className="flex flex-col items-center gap-4">
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="w-24 h-24 object-contain my-4 shadow-2xl"
                    style={{
                        filter: "drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.5))", // Adds a drop shadow
                    }}
                />
            )}
            <label
                htmlFor="file-upload"
                className={`cursor-pointer px-4 py-2 text-sm font-medium !text-background !bg-text rounded hover:shadow-lg ${uploading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                {uploading ? "Uploading..." : "Choose File"}
            </label>
            <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden" // Hide the actual input
                disabled={uploading} // Disable input during upload
            />
        </div>
    );
};

export default ImageUpload;