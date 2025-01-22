import React from 'react';
import { useScrollContext } from '../../../hooks/ScrollContext';
import tools from "./data/tools"
import { Link } from 'react-router-dom';

const Toolbar = () => {
  const { isVisible } = useScrollContext();

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-md bg-background/50 ${isVisible ? 'translate-y-full' : 'translate-y-0'
      }`}>
      <div
        className={`flex justify-start px-4 items-center py-2 space-x-6 overflow-auto hide-scrollbar`}
      >
        {tools.map((tool, index) => (
          <div key={index} className="group">
            <button
              className="focus:outline-none hover:text-hoverBg transition"
              aria-label={tool.tooltip}
            > <Link to={tool.link} key={index} className="tool-item" title={tool.tooltip}>
            {/* > <Link to={tool.link} key={index} className="tool-item"> */}
                {tool.icon}
              </Link>
            </button>
            {/* Tooltip */}
            {/* <span className={`absolute top-10 ${index ? "-ml-4" : "ml-2"} z-[1000] select-none pointer-events-none transform -translate-x-1/2 px-3 py-1 bg-hoverBg/10 text-background text-center rounded opacity-0 group-hover:opacity-100 transition text-xs`}>
              {tool.tooltip}
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;