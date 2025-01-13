import React, { useState, useRef, useEffect } from 'react';
import TableTopBar from './TableTopBar';
import ScrollButtons from '../../../common/ScrollButtons';
import ReusableTable from '../../../common/ReusableTable';

/*
Target Path
Full Name
Attachment Date
Free Text (little higher width)
Copy To Target Document
--
these columns in table

and 

on right side of that table add three buttons using Button component (Browse (default), Display (secondary), Delete (secondary))
*/

const Table = () => {
    // Array of objects to represent the table data with 22 rows
    const [data, setData] = useState(
        Array(10).fill().map(() => ({
            Project: '',
            ProjectName: '',
            BudgetEntry: '',
            BudgetLine: '',
            ItemNo: '',
            ItemDescription: '',
            UoMName: '',
            Quantity: '',
            OpenQty: '',
            UnitPrice: '',
            LPPrice: '',
            MarketPrice: '',
            LastPurchasePrice: '',
            GrossPriceAfterDisc: '',
            GrossTotalLC: '',
            IGPQuantity: '',
            MIR_Entry: '',
            Whse: '',
            BaseDocument: '',
            BaseLineRef: '',
            BudgetPrice: '',
            CostCenter: '',
            DeliveredDate: ''
        }))
    );

    // Columns definition
    const columns = [
        "SR#", "Project", "Project Name", "Budget Entry", "Budget Line", "Item No.",
        "Item Description", "UoM Name", "Quantity", "Open Qty", "Unit Price", "LPPrice",
        "Market Price", "Last Purchase Price", "Gross Price after Disc.", "Gross Total (LC)",
        "IGP Quantity", "MIR Entry", "Whse", "Base Document", "Base Line Ref", "Budget Price",
        "Cost Center", "Delivered Date"
    ];

    // Handle input change and update the data
    const handleInputChange = (index, field, value) => {
        const updatedData = [...data];
        updatedData[index][field] = value;
        setData(updatedData);
    };


    return (
        <div className='border border-border rounded-3xl p-2 relative'>
            <TableTopBar />
            <ReusableTable columns={columns} data={data} onInputChange={handleInputChange} />

        </div>
    );
};

export default Table;
