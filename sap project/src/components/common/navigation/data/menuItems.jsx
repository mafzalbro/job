import { AiOutlineFile, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { FiSettings, FiTool } from 'react-icons/fi';
import { RiDatabaseLine, RiWindowLine, RiQuestionLine } from 'react-icons/ri';
import { MdOutlineNavigation } from 'react-icons/md';
import modulesSubmenu from "./subMenu/modules/modules"

const menuItems = [
    {
        label: 'File',
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
        subMenu: [
            { label: 'Zoom In' },
            { label: 'Zoom Out' },
            { label: 'Fullscreen' },
        ],
    },
    {
        label: 'Data',
        subMenu: [
            { label: 'Import Data' },
            { label: 'Export Data' },
            { label: 'Refresh' },
        ],
    },
    {
        label: 'Go To',
        subMenu: [
            { label: 'Next' },
            { label: 'Previous' },
            { label: 'Line Number' },
        ],
    },
    {
        label: 'Modules',
        subMenu: modulesSubmenu,
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
