import React, { useState } from 'react';

const RightSideHeader = () => {
  const [formData, setFormData] = useState({
    number1: '',
    number2: '',
    thirdField: '',
    status: '',
    postingDate: '',
    deliveryDate: '',
    documentDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Example data for the third field's list options
  const thirdFieldOptions = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="space-y-0">
      {/* No. Section - Three Fields */}
      <div className="flex space-x-2">
        <div className="flex gap-2 input-group">
          <label htmlFor="thirdField" className="text-sm font-medium">
            No.
          </label>
          <div className='flex justify-center items-center gap-0.5 input-group'>
            <select
              id="thirdField"
              name="thirdField"
              value={formData.thirdField}
              onChange={handleChange}
              className="mt-1 p-2 border w-[140%] border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
            >
              <option value="" disabled>Primary</option>
              {thirdFieldOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="flex gap-2">
              <input
                id="number1"
                name="number1"
                type="text"
                value={formData.number1}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
              />
            </div>
            <div>-</div>
            <div className="flex gap-2">
              <input
                id="number2"
                name="number2"
                type="text"
                value={formData.number2}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Status Section - One Field */}
      <div className="flex gap-2 input-group">
        <label htmlFor="status" className="text-sm font-medium">
          Status
        </label>
        <input
          id="status"
          name="status"
          type="text"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
        />
      </div>

      {/* Posting Date Section - One Date Field */}
      <div className="flex gap-2 input-group">
        <label htmlFor="postingDate" className="text-sm font-medium">
          Posting Date
        </label>
        <input
          id="postingDate"
          name="postingDate"
          type="date"
          value={formData.postingDate}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
        />
      </div>

      {/* Delivery Date Section - One Date Field */}
      <div className="flex gap-2 input-group">
        <label htmlFor="deliveryDate" className="text-sm font-medium">
          Delivery Date
        </label>
        <input
          id="deliveryDate"
          name="deliveryDate"
          type="date"
          value={formData.deliveryDate}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
        />
      </div>

      {/* Document Date Section - One Date Field */}
      <div className="flex gap-2 input-group">
        <label htmlFor="documentDate" className="text-sm font-medium">
          Document Date
        </label>
        <input
          id="documentDate"
          name="documentDate"
          type="date"
          value={formData.documentDate}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
        />
      </div>
    </div>
  );
};

export default RightSideHeader;
