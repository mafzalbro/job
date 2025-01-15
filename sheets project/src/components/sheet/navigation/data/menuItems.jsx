
import { AiOutlineFile, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
const menuItems = [
    {
        label: 'File',
        icon: <AiOutlineFile />,
        subMenu: [
            { label: 'New' },
            { label: 'Open' },
            {
                label: 'Advanced',
                subMenu: [
                    { label: 'Export' },
                    { label: 'Import' },
                    {
                        label: 'Settings',
                        subMenu: [{ label: 'Preferences' }, { label: 'Themes' }],
                    },
                ],
            },
        ],
    },
    {
        label: 'Edit',
        icon: <AiOutlineEdit />,
        subMenu: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map((label) => ({ label })),
    },
    {
        label: 'View',
        icon: <AiOutlineEye />,
        subMenu: [{ label: 'Zoom In' }, { label: 'Zoom Out' }, { label: 'Fullscreen' }],
    },
    {
        label: 'Modules',
        icon: <FiSettings />,
        subMenu: [
            { label: 'Install' },
            { label: 'Manage' },
            {
                label: 'Advanced',
                subMenu: [
                    { label: 'Diagnostics' },
                    { label: 'Updates' },
                    {
                        label: 'Logs',
                        subMenu: [
                            { label: 'Error Logs' },
                            { label: 'Debug Logs' },
                        ],
                    },
                ],
            },
        ],
    },
];

export default menuItems