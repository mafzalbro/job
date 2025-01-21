import React, { useState } from 'react';

const LeftSideHeader = () => {
    const [formData, setFormData] = useState({
        vendor: '',
        name: '',
        contactPerson: '',
        vendorRef: '',
        localCurrency: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Example data for contact persons and currencies
    const contactPersons = [
        'John Doe',
        'Jane Smith',
        'Alex Johnson'
    ];

    const localCurrencies = [
        'USD',
        'EUR',
        'GBP',
        'INR',
    ];

    return (
        <div className="space-y-0">
            {/* Vendor Field */}
            <div className="flex gap-2 input-group">
                <label htmlFor="vendor" className="text-sm font-medium">
                    Vendor
                </label>
                <input
                    id="vendor"
                    name="vendor"
                    type="text"
                    value={formData.vendor}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Name Field */}
            <div className="flex gap-2 input-group">
                <label htmlFor="name" className="text-sm font-medium">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Vendor Ref. No. Field */}
            <div className="flex gap-2 input-group">
                <label htmlFor="vendorRef" className="text-sm font-medium">
                    Vendor Ref. No.
                </label>
                <input
                    id="vendorRef"
                    name="vendorRef"
                    type="text"
                    value={formData.vendorRef}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Contact Person Dropdown */}
            <div className="flex gap-2 input-group">
                <label htmlFor="contactPerson" className="text-sm font-medium">
                    Contact Person
                </label>
                <select
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                >
                    <option value="">Select a Contact Person</option>
                    {contactPersons.map((person) => (
                        <option key={person} value={person}>
                            {person}
                        </option>
                    ))}
                </select>
            </div>

            {/* Local Currency Dropdown */}
            <div className="flex gap-2 input-group">
                <label htmlFor="localCurrency" className="text-sm font-medium">
                    Local Currency
                </label>
                <select
                    id="localCurrency"
                    name="localCurrency"
                    value={formData.localCurrency}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                >
                    <option value="">Select a Currency</option>
                    {localCurrencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default LeftSideHeader;