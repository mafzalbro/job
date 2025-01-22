import React, { useState, useEffect, useRef } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import { useScrollContext } from '../../../hooks/ScrollContext';
import menuItems from "./data/menuItems";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isVisible } = useScrollContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clickedMenuIndex, setClickedMenuIndex] = useState(null);
  const [clickedSubMenuPath, setClickedSubMenuPath] = useState([]);

  const navbarRef = useRef(null);
  const submenuRefs = useRef([]);

  // Toggle menu visibility
  const toggleMenu = (index, type) => {
    if (clickedMenuIndex === index && !type) {
      setClickedMenuIndex(null);
      setClickedSubMenuPath([]);
    } else {
      if (!type) {
        setClickedMenuIndex(index);
        setClickedSubMenuPath([]);
      }
    }
  };

  // Handle submenu click toggling
  const toggleSubMenu = (path) => {
    setClickedSubMenuPath((prev) => {
      const parentPath = path.substring(0, path.lastIndexOf("-"));
      const isOpen = prev.includes(path);

      if (isOpen) {
        return prev.filter((p) => !p.startsWith(path));
      } else {
        return [
          ...prev.filter((p) => !p.startsWith(parentPath) || p === parentPath),
          path,
        ];
      }
    });
  };

  // Adjust submenu position after rendering
  useEffect(() => {
    submenuRefs.current.forEach((submenuElement, index) => {
      if (submenuElement) {
        const { right, bottom } = submenuElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Adjust submenu horizontally if it overflows
        if (right > viewportWidth) {
          submenuElement.style.left = `-${submenuElement.offsetWidth}px`;
        }

        // Adjust submenu vertically if it overflows
        if (bottom > viewportHeight) {
          submenuElement.style.top = `-${submenuElement.offsetHeight}px`;
        }
      }
    });
  }, [clickedSubMenuPath]); // Rerun this effect when submenu path changes

  // Render submenu recursively and apply z-index incrementally
  const renderSubMenu = (subMenu, parentPath, zIndex = 100) => (
    <ul
      className="bg-text text-background shadow-lg rounded-lg p-2 ml-3 min-w-[12rem]"
      style={{ zIndex }} // Apply dynamic zIndex
    >
      {subMenu.map((item, index) => {
        const path = `${parentPath}-${index}`;
        const isOpen = clickedSubMenuPath.includes(path);

        return (
          <li key={index} className="relative">
            <button
              onClick={() => item.subMenu && toggleSubMenu(path)}
              className="flex justify-between items-center w-full px-4 py-[1px] hover:bg-hoverBg hover:text-background rounded-lg"
            >
              <a href={item.link}>
                <span className="text-left">{item.label}</span>
              </a>
              {item.subMenu && (
                <span>
                  {isOpen ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
                </span>
              )}
            </button>
            {isOpen && item.subMenu && (
              <div
                ref={(el) => (submenuRefs.current[index] = el)} // Assign each submenu to submenuRefs
                className="absolute left-full top-0 mt-2"
              >
                {renderSubMenu(item.subMenu, path, zIndex + 10)} {/* Increment zIndex for each level */}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  const renderMenuItems = () => (
    <ul className="hidden md:flex space-x-6 text-text">
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
            </button>
            {isOpen && menu.subMenu && (
              <div className="absolute mt-2 rounded-lg p-2 min-w-[12rem] z-50">
                {renderSubMenu(menu.subMenu, `${index}`, 100)} {/* Start zIndex from 100 */}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

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
          {renderMenuItems()}

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden focus:outline-none"
            aria-label="Open Menu"
          >
            <CiMenuFries size={24} />
          </button>

          <Link to={"/"} className="text-xl font-bold text-white">
            {/* <img src="nitsel-icon.svg" alt="nitsel-icon" className="w-5" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 logo' viewBox="0 0 489.83 506"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M345.82,261.4a43.75,43.75,0,0,0,0-61.85L176.62,30.35A103.47,103.47,0,0,0,0,103.51V462.27a43.74,43.74,0,0,0,87.47,0V103.51a16,16,0,0,1,27.3-11.3L284,261.4A43.75,43.75,0,0,0,345.82,261.4Z" /><path className="cls-1" d="M446.09,0a43.73,43.73,0,0,0-43.73,43.74V402.49a16,16,0,0,1-27.3,11.31L205.86,244.6A43.74,43.74,0,1,0,144,306.46l169.2,169.19a103.47,103.47,0,0,0,176.62-73.16V43.74A43.74,43.74,0,0,0,446.09,0Z" /></g></g></svg>
          </Link>
        </div>
      </nav>

      <MobileMenu
        menuItems={menuItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;