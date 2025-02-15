import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import search from '../../assets/Thumbnils/icons/Search-.png'
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
  FaFilePdf,
} from "react-icons/fa";


const MainContent: React.FC = () => {
  const categories = [
    {
      name: "Functional Testing",
      path: "/dashboard/functional-testing",
      icon: <FaBug className="w-6 h-6 mb-2 text-blue-600" />,
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
      path: "/dashboard/loginpage-testing",
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
    let offset = 1;
    const speed = 0.8; // Adjust speed as needed

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

  const pdfs = [
    {
      name: "Manual Testing ",
      path: "../../assets/pdf/Manual testing.pdf",
    },
    {
      name: "Selenium ",
      path: "../../assets/pdf/selenium.pdf",
    },
    {
      name: "API Testing ",
      path: "../../assets/pdf/API.pdf",
    },
    {
      name: "Test Management ",
      path: "../../assets/pdf/Test Managment.pdf",
    },
  ];

  return (
    <div className="w-screen h-screen flex bg-gray-50">
    {/* Sidebar for Categories */}
    <div className="w-1/7 h-screen p-4 bg-[#b7d4d8] rounded-r-3xl shadow-lg">
      <h3 className="text-2xl font-bold mb-1 pt-20 text-gray-800">Testing Categories</h3>
      <ul className="space-y-0 pt-5">
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={category.path} className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition-all duration-300">
            {category.icon}
            <span className="text-xl font-semibold text-gray-700 ml-2">
              {category.name}
            </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* PDF Section */}
      <div className="mt-20">
          <h3 className="text-2xl font-bold mb-5 text-gray-800">Question & Answers</h3>
          <ul className="space-y-1 pt-2">
            {pdfs.map((pdf, index) => (
              <li key={index} className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition-all duration-300">
                <FaFilePdf className="w-6 h-6 text-red-600" />
                <a
                  href={pdf.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-700 ml-2 hover:text-blue-600"
                >
                  {pdf.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    {/* Main Content Section */}
    <div className="flex-1 min-h-screen p-8">
      <h1 className="text-6xl text-center mb-6 font-[BoskaVariable] text-gray-800">Search Your Scenarios</h1>
      <div className="flex items-center justify-center gap-2 mb-12">
        <input
          type="text"
          placeholder={placeholders[placeholderIndex]}
          className="w-80 p-2 rounded-lg border border-gray-300 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <img className="w-12 h-12 hover:scale-110 transition-all duration-300" src={search} alt="Search" />
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario, index) => (
          <Link
            key={index}
            to={scenario.path}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-4"
          >
            {scenario.icon}
            <span className="text-xl font-semibold text-gray-700">{scenario.name}</span>
          </Link>
        ))}
      </div>

      {/* Marquee for Announcements */}
      <div className="mt-12 overflow-hidden">
        <p
          ref={marqueeRef}
          className="text-lg text-gray-600 whitespace-nowrap"
        >
          Important Announcement: New features coming soon! Stay tuned for updates.
        </p>
      </div>
    </div>
  </div>
);
};

export default MainContent;

