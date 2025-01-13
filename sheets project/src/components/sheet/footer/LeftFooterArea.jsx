import React, { useState } from 'react'
import Button from '../../common/Button'

const LeftFooterArea = () => {
    const [formData, setFormData] = useState({ buyer: "Select a Buyer", owner: "", remarks: "" })

    const buyers = [
        { name: "Zahid Mansoor" },
        { name: "Ali" }
    ]

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))

        console.log({ [name]: value });
    }

    return (
        <div>

            <div className="flex gap-2 input-group">
                <label htmlFor="buyer" className="text-sm font-medium">
                    Buyer
                </label>
                <select
                    id="buyer"
                    name="buyer"
                    value={formData.buyer}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                >
                    <option value="Select a Buyer" disabled>Select a Buyer</option>
                    {buyers.map((buyer, i) => (
                        <option key={i} value={buyer.name}>
                            {buyer.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex gap-2 input-group">
                <label htmlFor="owner" className="text-sm font-medium">
                    Owner
                </label>
                <input
                    id="owner"
                    name="owner"
                    type="text"
                    value={formData.owner}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>


            <div className="flex gap-2 input-group">
                <label htmlFor="remarks" className="text-sm font-medium">
                    Remarks
                </label>
                <textarea
                    rows={4}
                    id="remarks"
                    name="remarks"
                    type="text"
                    value={formData.remarks}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
            </div>

            <div className='flex gap-2 my-2'>
                <Button>Add & New</Button>
                <Button variant='secondary' disabled>Add Draft & New</Button>
                <Button>Cancel</Button>
            </div>
        </div>
    )
}

export default LeftFooterArea
