import { useEffect, useState } from 'react';
import Button from './Button';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const ScrollButtons = ({ scrollYRefs, scrollAmount }) => {
    const [isScrollable, setIsScrollable] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const [atBottom, setAtBottom] = useState(false);

    // Handle scrolling up
    const handleScrollTop = () => {
        scrollYRefs.current.scrollBy(0, -scrollAmount);
    };

    // Handle scrolling down
    const handleScrollDown = () => {
        scrollYRefs.current.scrollBy(0, scrollAmount);
    };

    // Check if the content is scrollable and if the buttons should be visible
    useEffect(() => {
        const container = scrollYRefs.current;

        const updateScrollState = () => {
            // Check if the container has scrollable content
            const isContentScrollable = container.clientHeight < container.scrollHeight;
            setIsScrollable(isContentScrollable);

            // Check if we're at the top of the container
            setAtTop(container.scrollTop === 0);

            // Check if we're at the bottom of the container
            setAtBottom(container.scrollTop + container.clientHeight >= container.scrollHeight);
        };

        updateScrollState();  // Check on initial render

        // Add event listener for scrolling
        const handleScroll = () => {
            updateScrollState();
        };

        container.addEventListener('scroll', handleScroll);

        // Cleanup event listener
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [scrollYRefs, scrollAmount]);

    // Render scroll buttons only when there's scrollable content
    return (
        isScrollable && (
            <div className="scroll-btns h-full absolute right-0 flex flex-col justify-center gap-1">
                {<Button onClick={handleScrollTop} disabled={atTop}><MdOutlineKeyboardDoubleArrowUp /></Button>}
                {<Button onClick={handleScrollDown} disabled={atBottom}><MdOutlineKeyboardDoubleArrowDown /></Button>}
            </div>
        )
    );
};

export default ScrollButtons;
