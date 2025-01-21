import React, { useState } from 'react';
import {
    FiHome,
    FiUser,
    FiSettings,
    FiBell,
    FiHelpCircle,
    FiLogOut,
} from 'react-icons/fi';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { useScrollContext } from '../../../hooks/ScrollContext';

const Sidebar = () => {
    const { isVisible } = useScrollContext();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { icon: <FiHome size={20} />, tooltip: 'Home' },
        { icon: <FiUser size={20} />, tooltip: 'Profile' },
        { icon: <FiSettings size={20} />, tooltip: 'Settings' },
        { icon: <FiBell size={20} />, tooltip: 'Notifications' },
        { icon: <FiHelpCircle size={20} />, tooltip: 'Help' },
        { icon: <FiLogOut size={20} />, tooltip: 'Logout' },
    ];

    return (
        <div className="relative">
            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-background bg-opacity-20 backdrop-blur-md z-10"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 ${isVisible ? 'translate-y-20' : 'translate-y-0'} z-50 bg-background h-screen shadow-lg transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } w-64`}
            >
                <div className="flex flex-col h-full p-4 space-y-6">
                    {/* Menu Items */}
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative group">
                            <button
                                className="flex items-center space-x-3 text-white hover:text-hoverBg focus:outline-none transition"
                            >
                                {item.icon}
                                <span
                                    className={`${isSidebarOpen ? 'block' : 'hidden'
                                        } transition duration-200`}
                                >
                                    {item.tooltip}
                                </span>
                            </button>
                            {!isSidebarOpen && (
                                <span className="absolute select-none pointer-events-none left-full top-0 ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition">
                                    {item.tooltip}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={`fixed top-10 left-4 ${isVisible ? 'translate-y-12' : 'translate-y-0'} bg-white p-2 rounded-full text-text focus:outline-none shadow-md transition-transform duration-300 z-10`}
            >
                {isSidebarOpen ? <GoSidebarCollapse size={20} /> : <GoSidebarExpand size={20} />}
            </button>
        </div>
    );
};

export default Sidebar;
