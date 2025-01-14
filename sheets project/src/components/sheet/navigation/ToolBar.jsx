import React from 'react';
import {
  FiTool,
  FiSettings,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiBox,
  FiCode,
  FiMonitor,
  FiActivity,
  FiTerminal,
  FiEdit,
  FiSearch,
  FiCloud,
  FiDownload,
  FiUpload,
  FiShare2,
  FiUserCheck,
  FiLock,
  FiKey,
  FiFolder,
} from 'react-icons/fi';
import { useScrollContext } from '../../../hooks/ScrollContext';

const Toolbar = () => {
  const { isVisible } = useScrollContext();

  const tools = [
    { icon: <FiTool size={20} />, tooltip: 'Tool Settings' },
    { icon: <FiSettings size={20} />, tooltip: 'System Settings' },
    { icon: <FiCpu size={20} />, tooltip: 'Performance Monitor' },
    { icon: <FiDatabase size={20} />, tooltip: 'Database Tools' },
    { icon: <FiLayers size={20} />, tooltip: 'Layer Management' },
    { icon: <FiBox size={20} />, tooltip: 'Packaging' },
    { icon: <FiCode size={20} />, tooltip: 'Code Editor' },
    { icon: <FiMonitor size={20} />, tooltip: 'Monitor' },
    { icon: <FiActivity size={20} />, tooltip: 'Activity Log' },
    { icon: <FiTerminal size={20} />, tooltip: 'Terminal' },
    { icon: <FiEdit size={20} />, tooltip: 'Edit Tool' },
    { icon: <FiSearch size={20} />, tooltip: 'Search' },
    { icon: <FiCloud size={20} />, tooltip: 'Cloud Tools' },
    { icon: <FiDownload size={20} />, tooltip: 'Download Manager' },
    { icon: <FiUpload size={20} />, tooltip: 'Upload Manager' },
    { icon: <FiShare2 size={20} />, tooltip: 'Sharing Tools' },
    { icon: <FiUserCheck size={20} />, tooltip: 'User Management' },
    { icon: <FiLock size={20} />, tooltip: 'Security Settings' },
    { icon: <FiKey size={20} />, tooltip: 'Access Keys' },
    { icon: <FiFolder size={20} />, tooltip: 'File Manager' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-md bg-background/50 ${isVisible ? 'translate-y-full' : 'translate-y-0'
        } flex justify-start pl-4 items-center py-2 space-x-6 bg-background border`}
    >
      {tools.map((tool, index) => (
        <div key={index} className="relative group">
          <button
            className="text-white focus:outline-none hover:text-hoverBg transition"
            aria-label={tool.tooltip}
          >
            {tool.icon}
          </button>
          <span className="absolute top-10 left-1/2 select-none pointer-events-none transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition">
            {tool.tooltip}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
