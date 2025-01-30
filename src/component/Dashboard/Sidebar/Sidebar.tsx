import React, { useState } from "react";
import { FaBars, FaHome, FaUser, FaCog, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();
  
  const handleSettingsClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`h-screen bg-gray-100 text-white transition-all duration-300 ${
        isExpanded ? "w-52" : "w-16"
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        {isExpanded && <h1 className="text-xl font-bold text-black">Dashboard</h1>}
        <button onClick={toggleSidebar} className="focus:outline-none">
          <FaBars className="w-5 h-5 text-black" />
        </button>
      </div>
      <nav className="mt-10">
        <ul>
          <li onClick={handleSettingsClick} className="p-3 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaHome className="w-5 h-5 text-black" />
            {isExpanded && <span className="ml-3 text-black">Home</span>}
          </li>
          <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaUser className="w-5 h-5 text-black" />
            {isExpanded && <span className="ml-3 text-black">Profile</span>}
          </li>
          <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaChartLine className="w-5 h-5 text-black" />
            {isExpanded && <span className="ml-3 text-black">Analytics</span>}
          </li>
          <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaCog className="w-5 h-5 text-black" />
            {isExpanded && <span className="ml-3 text-black">Settings</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;