import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the ScrollContext
const ScrollContext = createContext();

// Custom hook to use the ScrollContext
export const useScrollContext = () => useContext(ScrollContext);

const ScrollProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true); // Show on scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <ScrollContext.Provider value={{ isVisible, lastScrollY }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
