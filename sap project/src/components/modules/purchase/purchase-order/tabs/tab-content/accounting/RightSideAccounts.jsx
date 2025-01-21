import React, { useState } from 'react';
import CustomSelectWithInput from '../../../../../../common/CustomSelectWithInput';

const RightSideAccounts = () => {
  const [businessPartnerProject, setBusinessPartnerProject] = useState('');
  const [createQRCodeFrom, setCreateQRCodeFrom] = useState('');
  const [cancellationDate, setCancellationDate] = useState('');
  const [requiredDate, setRequiredDate] = useState('');
  const [indicator, setIndicator] = useState('');
  const [federalTaxID, setFederalTaxID] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [referencedDocument, setReferencedDocument] = useState('');

  const indicatorOptions = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-700">Business Partner Project</label>
        <input
          type="text"
          value={businessPartnerProject}
          onChange={(e) => setBusinessPartnerProject(e.target.value)}
          placeholder="Enter Business Partner Project"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-700">Create QR Code From</label>
        <input
          type="text"
          value={createQRCodeFrom}
          onChange={(e) => setCreateQRCodeFrom(e.target.value)}
          placeholder="Enter information"
          className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-700">Cancellation Date</label>
        <input
          type="date"
          value={cancellationDate}
          onChange={(e) => setCancellationDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-700">Required Date</label>
        <input
          type="date"
          value={requiredDate}
          onChange={(e) => setRequiredDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-700">Indicator</label>
        <select
          value={indicator}
          onChange={(e) => setIndicator(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select an option</option>
          {indicatorOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-700">Federal Tax ID</label>
        <input
          type="text"
          value={federalTaxID}
          onChange={(e) => setFederalTaxID(e.target.value)}
          placeholder="Enter Federal Tax ID"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-700">Order Number</label>
        <input
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Enter Order Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <CustomSelectWithInput
          label="Referenced Document"
          options={indicatorOptions}
          value={referencedDocument}
          onChange={setReferencedDocument}
        />
      </div>
    </div>
  );
};

export default RightSideAccounts;
