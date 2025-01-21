import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const MobileMenu = ({ menuItems, isOpen, onClose }) => {
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (path) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const renderMenuItems = (items, path = '') => {
    return items.map((menu, index) => {
      const currentPath = `${path}/${index}`;
      const hasSubMenu = menu.subMenu && menu.subMenu.length > 0;
      const isOpen = openSubMenus[currentPath];

      return (
        <li key={currentPath} className="border-b border-border">
          <button
            onClick={() => hasSubMenu && toggleSubMenu(currentPath)}
            className="w-full text-left px-4 py-3 flex justify-between items-center focus:rounded-full"
          >
            <div className="flex items-center space-x-2">
              {/* {menu.icon} */}
              <span>{menu.label}</span>
            </div>
            {hasSubMenu && (isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />)}
          </button>
          {hasSubMenu && isOpen && (
            <ul className="bg-primary/20 rounded-xl p-4 text-primary ml-4">
              {renderMenuItems(menu.subMenu, currentPath)}
            </ul>
          )}
        </li>
      );
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-background z-[1000] overflow-y-auto md:hidden">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-white font-bold">Menu</h2>
        <button onClick={onClose} className="text-white text-2xl focus:outline-none">
          <MdClose />
        </button>
      </div>
      <ul className="space-y-4 px-4">{renderMenuItems(menuItems)}</ul>
    </div>
  );
};

export default MobileMenu;