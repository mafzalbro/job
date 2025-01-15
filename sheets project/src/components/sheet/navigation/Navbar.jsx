import React, { useState, useEffect, useRef } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import { useScrollContext } from '../../../hooks/ScrollContext';
import menuItems from "./data/menuItems"

const Navbar = () => {
  const { isVisible } = useScrollContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clickedMenuIndex, setClickedMenuIndex] = useState(null); // Track click
  const [clickedSubMenuPath, setClickedSubMenuPath] = useState([]); // Track submenu clicks

  const navbarRef = useRef(null); // Ref to the Navbar component


  // Toggle menu visibility on click
  const toggleMenu = (index, type) => {
    if (clickedMenuIndex === index && !type) {
      setClickedMenuIndex(null);
      setClickedSubMenuPath([]); // Clear all submenus when top-level menu is closed
    } else {
      if (!type) {
        setClickedMenuIndex(index);
        setClickedSubMenuPath([]); // Clear submenus when switching menus
      }
    }
  };

  // Handle submenu click toggling
  const toggleSubMenu = (path) => {
    setClickedSubMenuPath((prev) => {
      const newPaths = prev.includes(path)
        ? prev.filter((p) => !p.startsWith(path)) // Remove current path and all its child paths
        : [...prev, path];
      return newPaths;
    });
  };

  const renderSubMenu = (subMenu, parentPath) => (
    <ul className="bg-primary text-background shadow-lg rounded-lg p-2 ml-3 min-w-[12rem]">
      {subMenu.map((item, index) => {
        const path = `${parentPath}-${index}`;
        const isOpen = clickedSubMenuPath.includes(path);

        return (
          <li key={index} className="relative">
            <button
              onClick={() => item.subMenu && toggleSubMenu(path)}
              className="flex justify-between items-center w-full px-4 py-2 hover:bg-hoverBg hover:text-white rounded-lg"
            >
              <span>{item.label}</span>
              {item.subMenu && (
                <span>
                  {isOpen ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
                </span>
              )}
            </button>
            {isOpen && item.subMenu && (
              <div className="absolute left-full top-0 mt-2">{renderSubMenu(item.subMenu, path)}</div>
            )}
          </li>
        );
      })}
    </ul>
  );

  const renderMenuItems = () => (
    <ul className="hidden md:flex space-x-6 text-white">
      {menuItems.map((menu, index) => {
        const isOpen = clickedMenuIndex === index;

        return (
          <li key={index} className="relative">
            <button
              onClick={() => toggleMenu(index)}
              onMouseOver={() => toggleMenu(index, "hover")}
              className="flex items-center space-x-2 hover:text-hoverBg focus:outline-none"
            >
              <span>{menu.label}</span>
              <span>
                {/* {isOpen ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />} */}
              </span>
            </button>
            {isOpen && menu.subMenu && (
              <div className="absolute mt-2 rounded-lg p-2 min-w-[12rem]">
                {renderSubMenu(menu.subMenu, `${index}`)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setClickedMenuIndex(null);
        setClickedSubMenuPath([]);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 w-full z-[1000] transition-transform duration-300 backdrop-blur-md bg-background/50 ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          {/* Menu Items for Larger Screens */}
          {renderMenuItems()}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Open Menu"
          >
            <CiMenuFries size={24} />
          </button>

          {/* Logo */}
          <div className="text-xl font-bold text-white">
            <img src="nitsel-icon.svg" alt="nitsel-icon" className="w-5" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        menuItems={menuItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
