import React, { useState } from 'react'

const TableTopBar = () => {
    // Define initial state for selected values
    const [selectedValues, setSelectedValues] = useState({
        itemServiceType: '',
        summaryType: ''
    })

    // Define the options in JSON format
    const itemServiceTypeOptions = [
        { value: '', label: 'Select Item/Service Type' },
        { value: 'item', label: 'Item' },
        { value: 'service', label: 'Service' },
        { value: 'product', label: 'Product' },
        { value: 'subscription', label: 'Subscription' },
    ]

    const summaryTypeOptions = [
        { value: '', label: 'Select Summary Type' },
        { value: 'financial', label: 'Financial' },
        { value: 'operational', label: 'Operational' },
        { value: 'inventory', label: 'Inventory' },
        { value: 'sales', label: 'Sales' },
    ]

    // Handle the change in dropdown selection
    const handleChange = (e) => {
        const { name, value } = e.target
        setSelectedValues((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className='flex gap-8 justify-between header-section mb-2 mt-0'>
            {/* Item/Service Type Dropdown */}
            <div className="flex gap-2 items-center input-group">
                <label htmlFor="itemServiceType" className="text-sm font-medium">
                    Item/Service Type
                </label>
                <select
                    id="itemServiceType"
                    name="itemServiceType"
                    value={selectedValues.itemServiceType} // Bind to state value
                    onChange={handleChange} // Handle change in selection
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                >
                    {itemServiceTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Summary Type Dropdown */}
            <div className="flex gap-2 input-group items-center">
                <label htmlFor="summaryType" className="text-sm font-medium">
                    Summary Type
                </label>
                <select
                    id="summaryType"
                    name="summaryType"
                    value={selectedValues.summaryType} // Bind to state value
                    onChange={handleChange} // Handle change in selection
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                >
                    {summaryTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default TableTopBar
