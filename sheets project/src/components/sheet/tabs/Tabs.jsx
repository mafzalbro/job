import React, { useState } from 'react';
import Table from '../table/contents/Table';

const General = ({ children }) => {
    return <div className='h-screen flex justify-center items-center'>
        {children}
    </div>
}


const Tabs = () => {


    // Define the tab content
    const tabContent = [
        { name: "Contents", Component: <Table /> },
        { name: "Logistics", Component: <General>Logistics</General> },
        { name: "Accounting", Component: <General>Accounting</General> },
        { name: "Electronic Documents", Component: <General>Electronic Documents</General> },
        { name: "Attachments", Component: <General>Attachments</General> },
    ];

    // State to track the selected tab
    const [selectedTab, setSelectedTab] = useState(tabContent[0].name);

    return (
        <div>
            {/* Tab buttons */}
            <div className="flex">
                {tabContent.map((tab) => (
                    <div
                        key={tab.name}
                        onClick={() => setSelectedTab(tab.name)}
                        className={`border border-gray-300 px-6 py-0.5 shadow-sm cursor-pointer ${selectedTab === tab.name ? 'bg-blue-100' : ''}`}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>

            {/* Tab content */}
            <div>
                {tabContent
                    .filter(tab => tab.name === selectedTab)
                    .map(tab => (
                        <React.Fragment key={tab.name}>
                            {tab.Component}
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
};

export default Tabs;
