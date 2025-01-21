const LeftSideHeader2 = () => {
    const contactPersons = [
        'John Doe',
        'Jane Smith',
        'Alex Johnson'
    ];
    return (
        <div className="space-y-4">
            {/* Vendor Field */}
            <div className="flex gap-2 input-group">
                <label htmlFor="vendor" className="text-sm font-medium">
                    Branch
                </label>
                <select
                    id="contactPerson"
                    name="contactPerson"
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
        </div>
    );
};

export default LeftSideHeader2;
