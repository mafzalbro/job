import React, { useState } from 'react';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';

const CustomSelectWithInput = ({ label, options, value, onChange }) => {
    const [showList, setShowList] = useState(false);
    const [inputValue, setInputValue] = useState(value || '');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);  // Propagate changes to parent
        }
    };

    const handleSelectOption = (option) => {
        setInputValue(option);
        setShowList(false); // Hide the list after selection
        if (onChange) {
            onChange(option);  // Propagate selected value to parent
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-700">{label}</label>
            <div className="relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={`Enter ${label}`}
                // className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span
                    onClick={() => setShowList(!showList)}
                    className="absolute top-1/2 -right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 border rounded-md p-2 bg-white"
                >
                    <PiDotsThreeOutlineFill />
                </span>
                {showList && (
                    <ul className="absolute z-10 mt-1 w-full bg-background border border-border rounded-md shadow-lg">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 cursor-pointer hover:bg-hoverBg"
                                onClick={() => handleSelectOption(option)}
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
