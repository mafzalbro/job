import React, { useState, useRef, useEffect } from 'react';
import ScrollButtons from './ScrollButtons';

const ReusableTable = ({ columns, data, onInputChange, rightSideContent }) => {
    const [focusedCell, setFocusedCell] = useState({ row: 0, col: 0 });
    const [tableData, setTableData] = useState(data);
    const inputRefs = useRef([]);
    const scrollYRefs = useRef([]);
    const scrollAmount = 500;

    // Check if a row is empty
    const isRowEmpty = (row) => {
        return columns.slice(1).every((column) => !row[column]);
    };

    // Handle key navigation (Arrow keys)
    const handleKeyDown = (e, index, colIndex) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (focusedCell.row < tableData.length - 1) {
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
        } else if (e.key === 'Delete') {
            // Handle delete key to remove empty row
            e.preventDefault();
            if (isRowEmpty(tableData[index])) {
                const updatedTableData = tableData.filter((_, rowIndex) => rowIndex !== index);
                setTableData(updatedTableData);

                // Adjust focus to the correct row
                const newRowFocus = index === 0 ? 0 : index - 1;
                setFocusedCell({ row: newRowFocus, col: 0 });
            }
        }
    };

    // Handle Enter to move focus to the next row in the same column or add a new row
    const handleEnterKey = (e, index, colIndex) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (index < tableData.length - 1) {
                setFocusedCell({ row: index + 1, col: colIndex });
            } else {
                // Add a new row if Enter is pressed on the last row
                const newRow = columns.slice(1).reduce((acc, column) => {
                    acc[column] = ''; // Initialize all columns with empty values
                    return acc;
                }, {});
                const updatedTableData = [...tableData, newRow];
                setTableData(updatedTableData);
                setFocusedCell({ row: index + 1, col: colIndex });
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
        <div className='relative'>
            <ScrollButtons scrollAmount={scrollAmount} scrollYRefs={scrollYRefs} />

            <div className='overflow-x-auto max-h-[90vh] overflow-y-hidden' ref={scrollYRefs}>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-blue-100'>
                            {columns.map((column) => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className='border bg-blue-100'>{index + 1}</td>
                                {columns.slice(1).map((column, colIndex) => (
                                    <td
                                        key={column}
                                        className={`border border-gray-300 ${focusedCell.row === index && focusedCell.col === colIndex ? 'bg-blue-100' : ''
                                            }`}
                                    >
                                        <input
                                            ref={(el) => {
                                                if (!inputRefs.current[index]) {
                                                    inputRefs.current[index] = [];
                                                }
                                                inputRefs.current[index][colIndex] = el;
                                            }}
                                            type={column.toLowerCase().includes('price') ? 'number' : 'text'}
                                            className='bg-transparent focus:outline-none px-2'
                                            value={row[column] || ''}
                                            onChange={(e) => onInputChange(index, column, e.target.value)}
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

export default ReusableTable;
