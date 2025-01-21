import React, { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const RightSideElectronicDocuments = () => {
    const [eDocFormat, setEDocFormat] = useState('');
    const [documentStatus, setDocumentStatus] = useState('');
    const [totalImportedDocument, setTotalImportedDocument] = useState('');
    const [dateReceived, setDateReceived] = useState('');

    const indicatorOptions = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="space-y-6 p-6">
            <div className="text-lg font-semibold underline">Generic eDoc Protocol</div>

            <div className="flex space-y-2 w-full items-center">
                <label className="font-medium w-1/2 ">eDoc Format</label>
                <input
                    type="text"
                    value={eDocFormat}
                    onChange={(e) => setEDocFormat(e.target.value)}
                    // placeholder="Enter eDoc Format"
                    className="px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div className="flex space-y-2 w-full items-center">
                <label className="font-medium  w-1/2 flex items-center">
                    Document Status <FaArrowAltCircleRight className="mr-2 text-yellow-400" size={32} />
                </label>
                <input
                    type="text"
                    value={documentStatus}
                    onChange={(e) => setDocumentStatus(e.target.value)}
                    // placeholder="Enter Document Status"
                    className="px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div className="flex space-y-2 w-full items-center">
                <label className="font-medium w-1/2 ">Total of Imported Document</label>
                <input
                    type="number"
                    value={totalImportedDocument}
                    onChange={(e) => setTotalImportedDocument(e.target.value)}
                    // placeholder="Enter Total of Imported Document"
                    className="px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div className="flex space-y-2 w-full items-center">
                <label className="font-medium w-1/2 ">Date Received</label>
                <input
                    type="date"
                    value={dateReceived}
                    onChange={(e) => setDateReceived(e.target.value)}
                    className="px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

        </div>
    );
};

export default RightSideElectronicDocuments;