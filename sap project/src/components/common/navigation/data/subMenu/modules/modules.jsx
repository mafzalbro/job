import administration from "./administration"
import financials from "./financials"
import crm from "./crm"

export default [
    {
        label: 'Administration',
        subMenu: administration
    },
    {
        label: 'Financials',
        subMenu: financials
    },
    {
        label: 'CRM',
        subMenu: crm
    },
    {
        label: 'Opportunities',
        subMenu: [
            { label: 'Opportunity' },
            { label: 'Opportunity Reports' },
        ]
    },
    {
        label: 'Sales - A/R',
        subMenu: [
            { label: "Sales Blanket Agreement" },
            { label: "Sales Quotation" },
            { label: "Sales Order" },
            { label: "Delivery" },
            { label: "Return Request" },
            { label: "Return" },
            { label: "A/R Down Payment Request" },
            { label: "A/R Down Payment Invoice" },
            { label: "A/R Invoice" },
            { label: "A/R Invoice + Payment" },
            { label: "A/R Credit Memo" },
            { label: "A/R Reserve Invoice" },
            { label: "Document Generation Wizard" },
            { label: "Recurring Transactions" },
            { label: "Recurring Transaction Templates" },
            { label: "Available-to-Promise Check", disabled: true },
            { label: "Delivery Schedule Management", disabled: true },
            { label: "Document Printing" },
            { label: "Dunning Wizard" },
            { label: "Sales Reports" }
        ]
    },
    {
        label: 'Purchasing - A/P',
        subMenu: [
            { label: "Purchase Blanket Agreement" },
            { label: "Purchase Request" },
            { label: "Purchase Quotation" },
            { label: "Purchase Order" },
            { label: "Goods Receipt PO" },
            { label: "Goods Return Request" },
            { label: "Goods Return" },
            { label: "A/P Down Payment Request" },
            { label: "A/P Down Payment Invoice" },
            { label: "A/P Invoice" },
            { label: "A/P Credit Memo" },
            { label: "A/P Reserve Invoice" },
            { label: "Recurring Transactions" },
            { label: "Recurring Transaction Templates" },
            { label: "Landed Costs" },
            { label: "Procurement Confirmation Wizard" },
            { label: "Purchase Quotation Generation Wizard" },
            { label: "Document Printing" },
            { label: "Purchasing Reports" },
        ],
    },
    {
        label: 'Business Partners',
        subMenu: [
            { label: "Business Partner Master Data" },
            { label: "Activity" },
            { label: "Campaign Generation Wizard" },
            { label: "Campaign" },
            { label: "Internal Reconciliations" },
            { label: "Business Partner Reports" },
        ]
    },
    {
        label: 'Banking',
        subMenu: [
            { label: "Incoming Payments" },
            { label: "Deposits" },
            { label: "Qutgoing Payments" },
            { label: "Payment Wizard" },
            { label: "Bank Statements and External Reconciliations" },
            { label: "Check Number Confirmation" },
            { label: "Document Printing" },
            { label: "Payment Orders" },
            { label: "Banking Reports" },
        ]
    },
    {
        label: 'Inventory',
        subMenu: [
            { label: "Item Master Data" },
            { label: "Bar Codes" },
            { label: "Document Printing" },
            { label: "Item Management" },
            { label: "Inventory Transactions" },
            { label: "Price Lists" },
            { label: "Pick and Pack" },
            { label: "Inventory Reports" },
        ]
    },
    {
        label: 'Resources',
        subMenu: [
            { label: "Resource Master Data" },
            { label: "Resource Capacity" },
            { label: "Set Daily Internal Capacities" },
        ]
    },
    {
        label: 'Production',
        subMenu: [
            { label: "Bill of Materials" },
            { label: "Production Order" },
            { label: "Procurement Confirmation Wizard" },
            { label: "Receipt from Production" },
            { label: "Issue for Production" },
            { label: "Update Parent Item Prices Globally" },
            { label: "Bill of Materials Management" },
            { label: "Production Std Cost Management" },
            { label: "Production Reports" },
        ]
    },
    {
        label: 'MRP',
        subMenu: [
            { label: "Forecasts" },
            { label: "MRP Wizard" },
            { label: "Order Recommendation" },
            { label: "MRP Reports" },
        ]
    },
    {
        label: 'Services',
        subMenu: [
            { label: "Service Call" },
            { label: "Equipment Card" },
            { label: "Service Contract" },
            { label: "Solution Knowladge Base" },
            { label: "Document Printing" },
            {
                label: "Service Reports",
                // subMenu: []
            },
        ]
    },
    {
        label: 'Human Resources',
        subMenu: [
            { label: "Financials" },
            { label: "CRM" },
            { label: "Opportunities" },
            { label: "Sales and Purchasing" },
            { label: "Business Partners" },
            { label: "Banking" },
            { label: "Inventory" },
            { label: "Production" },
            { label: "MRP" },
            { label: "Service" },
            { label: "Human Resources" },
        ]
    },
    { label: 'Action' },
    { label: 'Reports' },
    {
        label: 'Project Management',
    },
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
]