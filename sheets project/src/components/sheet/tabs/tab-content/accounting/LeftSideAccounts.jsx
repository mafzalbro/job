import React, { useState } from 'react';

const LeftSideAccounts = () => {
    const [journalRemark, setJournalRemark] = useState('');
    const [paymentTerms, setPaymentTerms] = useState('');
    const [centralBankInd, setCentralBankInd] = useState('');
    const [recalculateDueDate, setRecalculateDueDate] = useState('');
    const [months, setMonths] = useState('');
    const [days, setDays] = useState('');
    const [cashDiscountDateOffset, setCashDiscountDateOffset] = useState('');

    const handleJournalRemarkChange = (e) => setJournalRemark(e.target.value);
    const handlePaymentTermsChange = (e) => setPaymentTerms(e.target.value);
    const handleCentralBankIndChange = (e) => setCentralBankInd(e.target.value);
    const handleRecalculateDueDateChange = (e) => setRecalculateDueDate(e.target.value);
    const handleMonthsChange = (e) => setMonths(e.target.value);
    const handleDaysChange = (e) => setDays(e.target.value);
    const handleCashDiscountDateOffsetChange = (e) => setCashDiscountDateOffset(e.target.value);

    return (
        <div className="space-y-6 md:w-1/4">
            <div>
                <label className="block text-sm font-medium mb-1">Journal Remark:</label>
                <input
                    type="text"
                    value={journalRemark}
                    onChange={handleJournalRemarkChange}
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Payment Terms:</label>
                <select
                    value={paymentTerms}
                    onChange={handlePaymentTermsChange}
                    className="w-full px-3 py-2 border rounded-md"
                >
                    <option value="">Select an option</option>
                    <option value="net30">Net 30</option>
                    <option value="net60">Net 60</option>
                    <option value="net90">Net 90</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Central Bank Ind.:</label>
                <select
                    value={centralBankInd}
                    onChange={handleCentralBankIndChange}
                    className="w-full px-3 py-2 border rounded-md"
                >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Manually Recalculate Due Date:</label>
                <select
                    value={recalculateDueDate}
                    onChange={handleRecalculateDueDateChange}
                    className="w-full px-3 py-2 border rounded-md"
                >
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
            </div>

            <div className="flex gap-4 items-center">
                <div className="flex-1">
                    <input
                        type="number"
                        value={months}
                        onChange={handleMonthsChange}
                        placeholder="Months"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="flex-1">
                    <input
                        type="number"
                        value={days}
                        onChange={handleDaysChange}
                        placeholder="Days"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Cash Discount Date Offset:</label>
                <input
                    type="number"
                    value={cashDiscountDateOffset}
                    onChange={handleCashDiscountDateOffsetChange}
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>
        </div>
    );
};

export default LeftSideAccounts;