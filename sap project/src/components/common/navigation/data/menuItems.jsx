import { AiOutlineFile, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { FiSettings, FiTool } from 'react-icons/fi';
import { RiDatabaseLine, RiWindowLine, RiQuestionLine } from 'react-icons/ri';
import { MdOutlineNavigation } from 'react-icons/md';

const menuItems = [
    {
        label: 'File',
        icon: <AiOutlineFile />,
        subMenu: [
            { label: 'New' },
            { label: 'Open' },
            { label: 'Save' },
            { label: 'Save As' },
            { label: 'Exit' },
        ],
    },
    {
        label: 'Edit',
        icon: <AiOutlineEdit />,
        subMenu: [
            { label: 'Undo' },
            { label: 'Redo' },
            { label: 'Cut' },
            { label: 'Copy' },
            { label: 'Paste' },
            { label: 'Find' },
        ],
    },
    {
        label: 'View',
        icon: <AiOutlineEye />,
        subMenu: [
            { label: 'Zoom In' },
            { label: 'Zoom Out' },
            { label: 'Fullscreen' },
        ],
    },
    {
        label: 'Data',
        icon: <RiDatabaseLine />,
        subMenu: [
            { label: 'Import Data' },
            { label: 'Export Data' },
            { label: 'Refresh' },
        ],
    },
    {
        label: 'Go To',
        icon: <MdOutlineNavigation />,
        subMenu: [
            { label: 'Next' },
            { label: 'Previous' },
            { label: 'Line Number' },
        ],
    },
    {
        label: 'Modules',
        icon: <FiSettings />,
        subMenu: [
            {
                label: 'Administration',
                subMenu: [
                    { label: "Choose Company" },
                    { label: "Web Client" },
                    { label: "Exchange Rates and Indexes" },
                    { label: "System Initialization" },
                    { label: "Setup" },
                    { label: "Data Import/Export" },
                    { label: "Utilities" },
                    { label: "Approval Process" },
                    { label: "License" },
                    { label: "Integration Service" },
                    { label: "Add-Ons" },
                    { label: "Workflow" },
                    { label: "Alerts Management" }
                ]
            },
            {
                label: 'Financials',
                subMenu: [
                    { label: "Chart of Accounts" },
                    { label: "Edit Chart of Accounts" },
                    { label: "Journal Entry" },
                    { label: "Journal Vouchers" },
                    { label: "Posting Templates" },
                    { label: "Recurring Postings" },
                    { label: "Reverse Transactions" },
                    { label: "Exchange Rate Differences" },
                    { label: "Conversion Differences" },
                    { label: "Financial Report Templates" },
                    { label: "Process Checklist" },
                    { label: "Document Printing" },
                    { label: "Journal Voucher Report" },
                    { label: "Fixed Assets" },
                    { label: "Internal Reconciliations" },
                    { label: "Budget Setup" },
                    { label: "Cost Accounting" },
                    { label: "Financial Reports" }
                ]
            },
            {
                label: 'CRM',
                subMenu: [
                    { label: "Business Partner Master Data" },
                    { label: "Activity" },
                    { label: "Campaign Generation Wizard" },
                    { label: "Campaign" },
                    { label: "Opportunity" },
                    { label: "Sales Quotation" },
                    { label: "Sales Order" },
                    { label: "Customer 360" },
                    { label: "CRM Report" }
                ]
            },
            { label: 'Opportunities' },
            { label: 'Sales - A/R' },
            {
                label: 'Purchasing - A/P',
                subMenu: [
                    { label: 'Purchase Request' },
                    { label: 'Purchase Quotation' },
                    { label: 'Purchase Order' },
                    { label: 'A/P Down Payment Request' },
                    { label: 'Inward Gate Pass' },
                    { label: 'Material Inspection Report' },
                    { label: 'Goods Receipt PO' },
                    { label: 'Goods Return' },
                    { label: 'A/P Invoice' },
                    { label: 'A/P Credit Memo' },
                    { label: 'Landed Costs' },
                    { label: 'Purchase Reports' },
                ],
            },
            { label: 'Business Partners' },
            { label: 'Banking' },
            { label: 'Inventory' },
            { label: 'Resources' },
            { label: 'Production' },
            { label: 'MRP' },
            { label: 'Services' },
            { label: 'Human Resources' },
            { label: 'Action' },
            { label: 'Reports' },
            { label: 'Project Management' },
            { label: 'Reports' },
            {
                label: 'Excel Report and Interactive Analysis',
                subMenu: [
                    { label: "Customer Relationship Management" },
                    { label: "Opportunities" },
                    { label: "Opportunity Win Rate Analysis" },
                    { label: "TENDERLIST" },
                    { label: "OPENPRITEMLIST" },
                    { label: "OPENPRLIST" },
                    { label: "ProjectBudgetExpenseBooking" },
                    { label: "ProjectBudgetExpenseBookingDraft" },
                    { label: "STOCKINTRANSIT" },
                    { label: "POVENDORS" },
                    { label: "OPENPOLIST" },
                    { label: "SITEMATERIALCONSUMPTIONREPORT" },
                    { label: "SITEMATERIALCONSUMPTIONREPORTDATEWISE" },
                    { label: "SITEMATERIALCONSUMPTIONREPORTUSERWISE" },
                    { label: "SITEMATERIALCONSUMPTIONREPORTWHSEWISE" },
                    { label: "MATERIALINHAND" },
                    { label: "VENDORDPOTOPPO" },
                    { label: "USERSDEFAULTS" },
                    { label: "VENDORSOPENPO" },
                    { label: "ProjectBUB" }
                ]
            },
        ],
    },
    {
        label: 'Tools',
        icon: <FiTool />,
        subMenu: [
            { label: 'Options' },
            { label: 'Extensions' },
            { label: 'Batch Process' },
        ],
    },
    {
        label: 'Window',
        icon: <RiWindowLine />,
        subMenu: [
            { label: 'Minimize' },
            { label: 'Maximize' },
            { label: 'Close' },
        ],
    },
    {
        label: 'Help',
        icon: <RiQuestionLine />,
        subMenu: [
            { label: 'View Help' },
            { label: 'Send Feedback' },
            { label: 'About' },
        ],
    },
];

export default menuItems;
