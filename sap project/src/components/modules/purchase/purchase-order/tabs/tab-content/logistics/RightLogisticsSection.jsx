import React, { useState } from 'react';

const RightLogisticsSection = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [isSplitOrderChecked, setIsSplitOrderChecked] = useState(false);
    const [isConfirmedChecked, setIsConfirmedChecked] = useState(false);


    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleSplitOrderChange = () => {
        setIsSplitOrderChecked(!isSplitOrderChecked);
    };

    const handleConfirmedChange = () => {
        setIsConfirmedChecked(!isConfirmedChecked);
    };

    return (
        <div className="space-y-4 p-4">
            <div>
                <label htmlFor="language" className="block text-gray-700 font-medium mb-2">
                    Language (Select Options)
                </label>
                <select
                    id="language"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="">Select a language</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    {/* Add more options as needed */}
                </select>
            </div>

            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="split-order"
                    checked={isSplitOrderChecked}
                    onChange={handleSplitOrderChange}
                    className="text-indigo-500 focus:ring-indigo-500"
                />
                <label htmlFor="split-order" className="text-gray-700 font-medium">
                    Split Purchase Order
                </label>
            </div>

            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="confirmed"
                    checked={isConfirmedChecked}
                    onChange={handleConfirmedChange}
                    className="text-indigo-500 focus:ring-indigo-500"
                />
                <label htmlFor="confirmed" className="text-gray-700 font-medium">
                    Confirmed
                </label>
            </div>
        </div>
    );
};

export default RightLogisticsSection;
