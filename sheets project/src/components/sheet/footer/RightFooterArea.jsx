import React, { useState } from 'react'
import Button from '../../common/Button'

const RightSideFooter = () => {
    const [formData, setFormData] = useState({
        buyer: "Select a Buyer",
        owner: "",
        remarks: "",
        totalBeforeDiscount: "",
        discount: "",
        freight: "",
        rounding: "",
        tax: "",
        totalPaymentDue: "",
        budgetAmount: "",
        budgetDifference: "",
        budgetDifferencePercent: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div>
            <div className="flex gap-2 input-group">
                <label htmlFor="owner2" className="text-sm font-medium">
                    Owner
                </label>
                <input
                    id="owner2"
                    name="owner2"
                    type="text"
                    value={formData.owner}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Total Before Discount Input */}
            <div className="flex gap-2 input-group">
                <label htmlFor="totalBeforeDiscount" className="text-sm font-medium">
                    Total Before Discount
                </label>
                <input
                    id="totalBeforeDiscount"
                    name="totalBeforeDiscount"
                    type="number"
                    value={formData.totalBeforeDiscount}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Discount Input */}
            <div className="flex gap-2 input-group">
                <label htmlFor="discount" className="text-sm font-medium">
                    Discount (%)
                </label>
                <input
                    id="discount"
                    name="discount"
                    type="number"
                    value={formData.discount}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Freight Input */}
            <div className="flex gap-2 input-group">
                <label htmlFor="freight" className="text-sm font-medium">
                    Freight
                </label>
                <input
                    id="freight"
                    name="freight"
                    type="number"
                    value={formData.freight}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Rounding Input */}
            <div className="flex gap-2 input-group">
                <label htmlFor="rounding" className="text-sm font-medium">
                    Rounding
                </label>
                <input
                    id="rounding"
                    name="rounding"
                    type="number"
                    value={formData.rounding}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Tax Input */}
            <div className="flex gap-2 input-group">
                <label htmlFor="tax" className="text-sm font-medium">
                    Tax
                </label>
                <input
                    id="tax"
                    name="tax"
                    type="number"
                    value={formData.tax}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Total Payment Due */}
            <div className="flex gap-2 input-group">
                <label htmlFor="totalPaymentDue" className="text-sm font-medium">
                    Total Payment Due
                </label>
                <input
                    id="totalPaymentDue"
                    name="totalPaymentDue"
                    type="number"
                    value={formData.totalPaymentDue}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Budget Amount */}
            <div className="flex gap-2 input-group">
                <label htmlFor="budgetAmount" className="text-sm font-medium">
                    Budget Amount
                </label>
                <input
                    id="budgetAmount"
                    name="budgetAmount"
                    type="number"
                    value={formData.budgetAmount}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Budget Difference */}
            <div className="flex gap-2 input-group">
                <label htmlFor="budgetDifference" className="text-sm font-medium">
                    Budget Difference
                </label>
                <input
                    id="budgetDifference"
                    name="budgetDifference"
                    type="number"
                    value={formData.budgetDifference}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            {/* Budget Difference % */}
            <div className="flex gap-2 input-group">
                <label htmlFor="budgetDifferencePercent" className="text-sm font-medium">
                    Budget Difference (%)
                </label>
                <input
                    id="budgetDifferencePercent"
                    name="budgetDifferencePercent"
                    type="number"
                    value={formData.budgetDifferencePercent}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            <div className='flex gap-2 my-2 justify-end'>
                <Button variant='secondary' disabled>Copy From</Button>
                <Button variant='secondary' disabled>Copy To</Button>
            </div>
        </div>
    )
}

export default RightSideFooter