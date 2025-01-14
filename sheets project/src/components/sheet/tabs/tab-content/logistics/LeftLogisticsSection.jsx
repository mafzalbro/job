import React, { useState } from 'react';
import CustomSelectWithInput from '../../../../common/CustomSelectWithInput';

const LeftLogisticsSection = () => {
    const [shipTo, setShipTo] = useState('');
    const [payTo, setPayTo] = useState('');

    const shipToOptions = ['Option 1', 'Option 2', 'Option 3'];
    const payToOptions = ['Option A', 'Option B', 'Option C'];

    return (
        <div className="space-y-6 p-6">
            <CustomSelectWithInput
                label="Ship To"
                options={shipToOptions}
                value={shipTo}
                onChange={setShipTo}
            />

            <CustomSelectWithInput
                label="Pay To"
                options={payToOptions}
                value={payTo}
                onChange={setPayTo}
            />

            <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">Shopping Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="standard">Standard</option>
                    <option value="express">Express</option>
                    <option value="overnight">Overnight</option>
                </select>
            </div>
        </div>
    );
};

export default LeftLogisticsSection;
