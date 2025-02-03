import React, { useState, useRef, useEffect } from 'react';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';

const CustomSelectWithInput = ({ label, options, value, onChange }) => {
    const [showList, setShowList] = useState(false);
    const [inputValue, setInputValue] = useState(value || '');
    const containerRef = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value); // Propagate changes to parent
        }
    };

    const handleSelectOption = (option) => {
        setInputValue(option);
        setShowList(false); // Hide the list after selection
        if (onChange) {
            onChange(option); // Propagate selected value to parent
        }
    };

    const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setShowList(false); // Close the list when clicking outside
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col space-y-2" ref={containerRef}>
            <label className="font-medium text-gray-700">{label}</label>
            <div className="relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={`Enter ${label}`}
                    className="w-full px-4 py-2 border border-borderLight placeholder:!text-hoverBg rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={() => setShowList(!showList)}
                    className="absolute top-1/2 -right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 border rounded-md p-2 bg-white"
                >
                    <PiDotsThreeOutlineFill />
                </button>
                {showList && (
                    <ul className="absolute z-10 mt-1 w-full bg-background border border-border rounded-lg shadow-lg p-1 max-h-52 overflow-y-auto overflow-x-auto">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                tabIndex={0}
                                className="px-4 py-2 cursor-pointer rounded-lg hover:bg-hoverBg focus:outline-none focus:bg-hoverBg"
                                onClick={() => handleSelectOption(option)}
                                onKeyDown={(e) => e.key === "Enter" ? handleSelectOption(option) : null}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CustomSelectWithInput;