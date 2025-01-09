import React, { useState, useRef, useEffect } from 'react';
import TableTopBar from './TableTopBar';

const Table = () => {
    // Array of objects to represent the table data with 22 rows
    const [data, setData] = useState(
        Array(22).fill().map(() => ({
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

    const [focusedCell, setFocusedCell] = useState({ row: 0, col: 0 });

    // Refs for input elements
    const inputRefs = useRef([]);


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

    // Handle key navigation (Arrow keys)
    const handleKeyDown = (e, index, colIndex) => {
        // Arrow key navigation
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (focusedCell.row < data.length - 1) {
                setFocusedCell({ row: focusedCell.row + 1, col: colIndex });
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (focusedCell.row > 0) {
                setFocusedCell({ row: focusedCell.row - 1, col: colIndex });
            }
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (focusedCell.col > 0) {
                setFocusedCell({ row: focusedCell.row, col: focusedCell.col - 1 });
            }
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (focusedCell.col < columns.length - 1) {
                setFocusedCell({ row: focusedCell.row, col: focusedCell.col + 1 });
            }
        }
    };

    // Handle Enter to move focus to the next row in the same column
    const handleEnterKey = (e, index, colIndex) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            // Move to next row in the same column
            if (index < data.length - 1) {
                setFocusedCell({ row: index + 1, col: colIndex });
            } else {
                setFocusedCell({ row: index + 1, col: colIndex });
                // Add a new row if it's the last row
                setData(prevData => [
                    ...prevData,
                    {
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
                    }
                ]);
            }
        }
    };


    // Use effect to focus the input element when focusedCell changes
    useEffect(() => {
        if (inputRefs.current[focusedCell.row] && inputRefs.current[focusedCell.row][focusedCell.col]) {
            inputRefs.current[focusedCell.row][focusedCell.col].focus();
        }
    }, [focusedCell]);

    return (
        <div className='border border-gray-400 p-2 relative'>
            <TableTopBar />

            <div className='overflow-x-auto'>
                <table className='border'>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {/* Display the SR# */}
                                <td className='border'>{index + 1}</td>
                                {Object.keys(row).map((key, colIndex) => (
                                    <td
                                        key={key}
                                        className={`border border-gray-300 ${focusedCell.row === index && focusedCell.col === colIndex ? "bg-blue-100" : ""}`}
                                    >
                                        <input
                                            ref={(el) => {
                                                if (!inputRefs.current[index]) {
                                                    inputRefs.current[index] = [];
                                                }
                                                inputRefs.current[index][colIndex] = el;
                                            }}
                                            type={key.includes("Price") ? "number" : "text"}
                                            className='bg-transparent focus:outline-none px-2'
                                            value={row[key]}
                                            onChange={(e) =>
                                                handleInputChange(index, key, e.target.value)
                                            }
                                            onKeyDown={(e) => {
                                                handleKeyDown(e, index, colIndex);
                                                handleEnterKey(e, index, colIndex);
                                            }}
                                            onFocus={() => setFocusedCell({ row: index, col: colIndex })}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
