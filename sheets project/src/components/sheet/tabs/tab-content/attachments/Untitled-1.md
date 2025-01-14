<div className='relative'>

                <ScrollButtons scrollAmount={scrollAmount} scrollYRefs={scrollYRefs} />

                <div className='overflow-x-auto max-h-[90vh] overflow-y-hidden' ref={scrollYRefs}>
                    <table className='border'>
                        <thead>
                            <tr className='bg-blue-100'>
                                {columns.map((column) => (
                                    <th key={column}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    {/* Display the SR# */}
                                    <td className='border bg-blue-100'>{index + 1}</td>
                                    {Object.keys(row).map((key, colIndex) => (
                                        <td
                                            key={key}
                                            className={`border border-gray-300 ${focusedCell.row === index && focusedCell.col === colIndex ? "bg-blue-100" : ""} ${key.includes("Price") ? "text-right" : ""}`}
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