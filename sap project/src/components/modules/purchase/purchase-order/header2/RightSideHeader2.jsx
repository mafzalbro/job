import React from 'react'

const RightSideHeader2 = () => {
  return (
    <div>
      {/* Vendor Field */}
      <div className="flex gap-2 input-group">
        <label htmlFor="brachRegNo" className="text-sm font-medium">
          Branch Reg No.
        </label>
        <input
          id="brachRegNo"
          name="brachRegNo"
          type="text"
          className="mt-1 p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
        />
      </div>
    </div>
  )
}

export default RightSideHeader2
