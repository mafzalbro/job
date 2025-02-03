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
            if (focusedCell.row < tableData.length - 1) {
                e.preventDefault();
                setFocusedCell({ row: focusedCell.row + 1, col: colIndex });
            }
        } else if (e.key === 'ArrowUp') {
            if (focusedCell.row > 0) {
                e.preventDefault();
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

    // Function to handle paste event
    const handlePaste = (e, rowIndex, colIndex) => {
        e.preventDefault(); // Prevent default paste action
        console.log({ clip: e.clipboardData });

        const clipboardData = e.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData('text/plain');

        // Split the pasted data into rows and columns
        const rows = pastedData.split('\n');
        const rowData = rows.map(row => row.split('\t'));

        // Determine how many rows and columns to update
        const maxRows = Math.min(rowData.length, tableData.length - rowIndex);
        const maxCols = Math.min(rowData[0].length, columns.length - colIndex - 1); // Subtract 1 for the first column

        // Update the tableData state
        setTableData(prevData => {
            let newData = [...prevData];
            for (let r = 0; r < maxRows; r++) {
                for (let c = 0; c < maxCols; c++) {
                    const column = columns[colIndex + c + 1]; // Skip the first column
                    newData[rowIndex + r][column] = rowData[r][c];
                }
            }
            return newData;
        });

        // Optionally adjust focus to the last pasted cell
        setFocusedCell({
            row: rowIndex + maxRows - 1,
            col: colIndex + maxCols
        });
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

            <div className='overflow-x-auto max-h-[65vh] sm:max-h-[60vh] overflow-y-hidden' ref={scrollYRefs}>
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
                                <td>{index + 1}</td>
                                {columns.slice(1).map((column, colIndex) => (
                                    <td
                                        key={column}
                                        className={`${focusedCell.row === index && focusedCell.col === colIndex ? '' : ''
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
                                            onPaste={(e) => handlePaste(e, index, colIndex)}
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
