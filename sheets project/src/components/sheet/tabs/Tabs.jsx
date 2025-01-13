import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Table from '../table/contents/Table';
import Logistics from '../table/logistics/Logistics';
import Accounting from '../table/accounting/Accounting';
import ElectronicDocuments from '../table/electronic-documents/ElectronicDocuments';
import AttachmentsTable from '../table/attachments/AttachmentsTable';

const General = ({ children }) => {
    return <div className='h-screen flex justify-center items-center'>{children}</div>;
};

const Tabs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // Define the tab content
    const tabContent = [
        { name: 'Contents', Component: <Table /> },
        { name: 'Logistics', Component: <Logistics /> },
        { name: 'Accounting', Component: <Accounting /> },
        { name: 'Electronic Documents', Component: <ElectronicDocuments /> },
        { name: 'Attachments', Component: <AttachmentsTable /> },
    ];

    // Check if the URL has the `tab` query parameter, otherwise default to the first tab
    const initialTab = searchParams.get('tab') || tabContent[0].name;

    // State to track the selected tab
    const [selectedTab, setSelectedTab] = useState(initialTab);

    useEffect(() => {
        // Update the URL whenever the selected tab changes
        setSearchParams({ tab: selectedTab });
    }, [selectedTab, setSearchParams]);

    return (
        <div className="p-6">
            {/* Tab buttons */}
            <div className="flex space-x-4 border-b border-border text-nowrap overflow-auto">
                {tabContent.map((tab) => (
                    <div
                        key={tab.name}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            e.key === 'Enter' ? setSelectedTab(tab.name) : null;
                        }}
                        onClick={() => setSelectedTab(tab.name)}
                        className={`relative cursor-pointer select-none py-2 px-6 my-2 text-lg outline-none font-medium transition-all duration-300
                            ${selectedTab === tab.name ? 'border-b-2 border-border' : 'text-primary hover:text-primary'}
                            focus:ring-2 focus:ring-primary focus:rounded-full focus:active:ring-0`}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>

            {/* Tab content */}
            <div className="mt-4">
                {tabContent
                    .filter((tab) => tab.name === selectedTab)
                    .map((tab) => (
                        <React.Fragment key={tab.name}>{tab.Component}</React.Fragment>
                    ))}
            </div>
        </div>
    );
};

export default Tabs;
