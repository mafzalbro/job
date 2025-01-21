import React, { useState, useRef, useEffect } from 'react';
import ReusableTable from '../../../../../../common/ReusableTable';
import Button from '../../../../../../common/Button';

const Table = () => {
    // Array of objects to represent the table data
    const [data, setData] = useState(
        Array(10).fill().map(() => ({
            TargetPath: '',
            FullName: '',
            AttachmentDate: '',
            FreeText: '',
            CopyToTargetDocument: '',
        }))
    );

    // Columns definition
    const columns = [
        "SR#", "Target Path", "Full Name", "Attachment Date", "Free Text", "Copy To Target Document"
    ];

    // Handle input change and update the data
    const handleInputChange = (index, field, value) => {
        const updatedData = [...data];
        updatedData[index][field] = value;
        setData(updatedData);
    };

    return (
        <div className='border border-border rounded-3xl overflow-x-auto max-h-[90vh] overflow-y-hiddeng p-2 relative flex gap-2'>

            {/* Table with right side content */}
            <ReusableTable
                columns={columns}
                data={data}
                onInputChange={handleInputChange}
            />
            <div>
                {/* <BiRightTopArrowCircle */}
            </div>

            <div className='flex flex-col space-y-2 justify-center'>
                <Button label="Browse">
                    Browse
                </Button>
                <Button label="Display" variant="secondary">
                    Display
                </Button>
                <Button label="Delete" variant="secondary">
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Table;