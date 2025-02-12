import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBug,
  FaTachometerAlt,
  FaShieldAlt,
  FaUserCheck,
  FaMobileAlt,
  FaCreditCard,
  FaUser,
  FaSearch,
  FaTruck,
  FaCheckCircle,
  FaUniversalAccess,
  FaExclamationTriangle,
  FaLanguage,
  FaGlobe,
} from "react-icons/fa";

const MainContent: React.FC = () => {
  const categories = [
    {
      name: "Functional Testing",
      path: "/dashboard/functional-testing",
      icon: <FaBug className="w-4 h-4 mb-2 text-blue-600" />,
    },
    {
      name: "Performance Testing",
      path: "/dashboard/performance-testing",
      icon: <FaTachometerAlt className="w-6 h-7 mb-2 text-purple-600" />,
    },
    {
      name: "Security Testing",
      path: "/dashboard/security-testing",
      icon: <FaShieldAlt className="w-6 h-7 mb-2 text-red-600" />,
    },
    {
      name: "Usability Testing",
      path: "/dashboard/usability-testing",
      icon: <FaUserCheck className="w-6 h-7 mb-2 text-green-600" />,
    },
    {
      name: "Compatibility Testing",
      path: "/dashboard/compatibility-testing",
      icon: <FaMobileAlt className="w-6 h-7 mb-2 text-yellow-600" />,
    },
  ];

  const scenarios = [
    {
      name: "Login Page Testing",
      path: "/dashboard/login-testing",
      icon: <FaBug className="w-6 h-7 mb-2 text-blue-600" />,
    },
    {
      name: "User Registration Testing",
      path: "/dashboard/registration-testing",
      icon: <FaUserCheck className="w-6 h-7 mb-2 text-green-600" />,
    },
    {
      name: "Checkout & Payment Testing",
      path: "/dashboard/payment-testing",
      icon: <FaCreditCard className="w-6 h-7 mb-2 text-purple-600" />,
    },
    {
      name: "Profile Management Testing",
      path: "/dashboard/profile-testing",
      icon: <FaUser className="w-6 h-7 mb-2 text-orange-600" />,
    },
    {
      name: "Search & Filter Testing",
      path: "/dashboard/search-testing",
      icon: <FaSearch className="w-6 h-7 mb-2 text-yellow-600" />,
    },
    {
      name: "Order History & Tracking",
      path: "/dashboard/order-tracking",
      icon: <FaTruck className="w-6 h-7 mb-2 text-red-600" />,
    },
    {
      name: "Form Validation Testing",
      path: "/dashboard/form-validation",
      icon: <FaCheckCircle className="w-6 h-7 mb-2 text-teal-600" />,
    },
    {
      name: "Accessibility Testing",
      path: "/dashboard/accessibility-testing",
      icon: <FaUniversalAccess className="w-6 h-7 mb-2 text-indigo-600" />,
    },
    {
      name: "Cross-Browser Testing",
      path: "/dashboard/cross-browser",
      icon: <FaGlobe className="w-6 h-7 mb-2 text-gray-600" />,
    },
    {
      name: "Responsive Design Testing",
      path: "/dashboard/responsive-testing",
      icon: <FaMobileAlt className="w-6 h-7 mb-2 text-blue-500" />,
    },
    {
      name: "Error Handling & Alerts",
      path: "/dashboard/error-handling",
      icon: <FaExclamationTriangle className="w-6 h-7 mb-2 text-red-500" />,
    },
    {
      name: "Performance & Load Testing",
      path: "/dashboard/performance-testing",
      icon: <FaTachometerAlt className="w-6 h-7 mb-2 text-green-700" />,
    },
    {
      name: "Security Testing",
      path: "/dashboard/security-testing",
      icon: <FaShieldAlt className="w-6 h-7 mb-2 text-red-700" />,
    },
    {
      name: "Localization & Language Support",
      path: "/dashboard/localization-testing",
      icon: <FaLanguage className="w-6 h-7 mb-2 text-purple-500" />,
    },
  ];

  const marqueeRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let offset = 0;
    const speed = 0.5; // Adjust speed as needed

    function animate() {
      if (marquee) {
        offset -= speed;
        marquee.style.transform = `translateX(${offset}px)`;
        if (Math.abs(offset) > marquee.scrollWidth) {
          offset = window.innerWidth;
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  const placeholders = [
    "Search scenarios...",
    "Search test cases...",
    "Login scenarios...",
    "Functional testing...",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-row p-3">
      {/* First Row - Table */}
      <div className="w-full flex-1 justify-center mb-4 border">
        <h3 className="text-xl font-bold mb-5 text-gray-800">Testing Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center p-5">
              {category.icon}
              <span className="text-lg font-semibold text-gray-700 ml-2">
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Row - Search Functionality */}
      <div className="w-[280vw] flex flex-col justify-center items-center text-center mb-4">
        <h1 className="text-4xl sm:text-7xl font-bold text-black mb-6">
          Search Your Scenarios
        </h1>
        <div className="relative sm:w-2/3">
          <input
            type="text"
            className="w-full p-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder={placeholders[placeholderIndex]}
            />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      {/* Right Row - List of Names */}
      <div className="w-full flex justify-center border">
        
      </div>
    </div>
  );
};

export default MainContent;

//done some change
