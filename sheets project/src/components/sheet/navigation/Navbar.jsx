import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AiOutlineFile, AiOutlineEdit, AiOutlineEye, AiOutlineTool } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { useScrollContext } from '../../../hooks/ScrollContext';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
  const { isVisible } = useScrollContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Track which submenu is open

  const menuItems = [
    { label: 'File', icon: <AiOutlineFile />, subMenu: ['New', 'Open', 'Save', 'Save As'] },
    { label: 'Edit', icon: <AiOutlineEdit />, subMenu: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'] },
    { label: 'View', icon: <AiOutlineEye />, subMenu: ['Zoom In', 'Zoom Out', 'Fullscreen'] },
    { label: 'GoTo', icon: <AiOutlineFile />, subMenu: ['Line', 'Definition', 'Symbol'] },
    { label: 'Modules', icon: <FiSettings />, subMenu: ['Install', 'Manage', 'Remove'] },
    { label: 'Tools', icon: <AiOutlineTool />, subMenu: ['Options', 'Extensions', 'Settings'] },
    { label: 'Window', icon: <AiOutlineFile />, subMenu: ['Minimize', 'Maximize', 'Close'] },
    { label: 'Help', icon: <FiSettings />, subMenu: ['Documentation', 'FAQ', 'Contact Support'] },
  ];

  // Toggle submenu visibility
  const handleSubMenuToggle = (index) => {
    if (openSubMenuIndex === index) {
      setOpenSubMenuIndex(null); // Close submenu if it's already open
    } else {
      setOpenSubMenuIndex(index); // Open the selected submenu
    }
  };

  return (
    // max-w-7xl mx-auto
    <nav
      className={`bg-background sticky top-0 w-full z-50 transition-transform duration-300 backdrop-blur-md bg-background/50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="
       flex justify-between items-center px-4 py-3">
        {/* Logo */}

        {/* Menu Items */}
        <ul className="hidden sm:flex space-x-6 text-white">
          {menuItems.map((menu, index) => (
            <li key={index} className="group relative">
              <button className="flex items-center space-x-2 hover:text-hoverBg focus:outline-none transition">
                {menu.icon}
                <span>{menu.label}</span>
              </button>
              {/* Dropdown */}
              <ul className="absolute min-w-28 p-1 left-0 mt-2 hidden group-hover:block bg-primary text-background rounded shadow-lg">
                {menu.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 hover:bg-hoverBg hover:text-white cursor-pointer"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Open Menu"
        >
          <CiMenuFries size={24} />
        </button>

        <div className="text-xl font-bold text-white">
          <img src="nitsel-icon.svg" alt="nitsel-icon" className='w-5' />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-background text-white shadow-lg block sm:hidden">
          {menuItems.map((menu, index) => (
            <li key={index} className="border-b border-border">
              <button
                onClick={() => handleSubMenuToggle(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center"
              >
                <div className="flex items-center space-x-2">
                  {menu.icon}
                  <span>{menu.label}</span>
                </div>
                {openSubMenuIndex === index ? (
                  <FaChevronUp size={16} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </button>
              {/* Submenu */}
              {openSubMenuIndex === index && (
                <ul className="bg-primary text-background">
                  {menu.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-6 py-2 hover:bg-hoverBg hover:text-white cursor-pointer"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
