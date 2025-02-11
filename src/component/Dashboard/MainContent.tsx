import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBug,
  FaTachometerAlt,
  FaShieldAlt,
  FaUserCheck,
  FaMobileAlt,
  FaCreditCard,
  FaCode,
  FaChartLine,
  FaLock,
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
      icon: <FaBug className="w-8 h-8 mb-2 text-blue-600" />,
    },
    {
      name: "Performance Testing",
      path: "/dashboard/performance-testing",
      icon: <FaTachometerAlt className="w-8 h-8 mb-2 text-purple-600" />,
    },
    {
      name: "Security Testing",
      path: "/dashboard/security-testing",
      icon: <FaShieldAlt className="w-8 h-8 mb-2 text-red-600" />,
    },
    {
      name: "Usability Testing",
      path: "/dashboard/usability-testing",
      icon: <FaUserCheck className="w-8 h-8 mb-2 text-green-600" />,
    },
    {
      name: "Compatibility Testing",
      path: "/dashboard/compatibility-testing",
      icon: <FaMobileAlt className="w-8 h-8 mb-2 text-yellow-600" />,
    },
  ];

  const scenarios = [
    {
      name: "Login Page Testing",
      path: "/dashboard/login-testing",
      icon: <FaBug className="w-8 h-8 mb-2 text-blue-600" />,
    },
    {
      name: "User Registration Testing",
      path: "/dashboard/registration-testing",
      icon: <FaUserCheck className="w-8 h-8 mb-2 text-green-600" />,
    },
    {
      name: "Checkout & Payment Testing",
      path: "/dashboard/payment-testing",
      icon: <FaCreditCard className="w-8 h-8 mb-2 text-purple-600" />,
    },
    {
      name: "Profile Management Testing",
      path: "/dashboard/profile-testing",
      icon: <FaUser className="w-8 h-8 mb-2 text-orange-600" />,
    },
    {
      name: "Search & Filter Testing",
      path: "/dashboard/search-testing",
      icon: <FaSearch className="w-8 h-8 mb-2 text-yellow-600" />,
    },
    {
      name: "Order History & Tracking",
      path: "/dashboard/order-tracking",
      icon: <FaTruck className="w-8 h-8 mb-2 text-red-600" />,
    },
    {
      name: "Form Validation Testing",
      path: "/dashboard/form-validation",
      icon: <FaCheckCircle className="w-8 h-8 mb-2 text-teal-600" />,
    },
    {
      name: "Accessibility Testing",
      path: "/dashboard/accessibility-testing",
      icon: <FaUniversalAccess className="w-8 h-8 mb-2 text-indigo-600" />,
    },
    {
      name: "Cross-Browser Testing",
      path: "/dashboard/cross-browser",
      icon: <FaGlobe className="w-8 h-8 mb-2 text-gray-600" />,
    },
    {
      name: "Responsive Design Testing",
      path: "/dashboard/responsive-testing",
      icon: <FaMobileAlt className="w-8 h-8 mb-2 text-blue-500" />,
    },
    {
      name: "Error Handling & Alerts",
      path: "/dashboard/error-handling",
      icon: <FaExclamationTriangle className="w-8 h-8 mb-2 text-red-500" />,
    },
    {
      name: "Performance & Load Testing",
      path: "/dashboard/performance-testing",
      icon: <FaTachometerAlt className="w-8 h-8 mb-2 text-green-700" />,
    },
    {
      name: "Security Testing",
      path: "/dashboard/security-testing",
      icon: <FaShieldAlt className="w-8 h-8 mb-2 text-red-700" />,
    },
    {
      name: "Localization & Language Support",
      path: "/dashboard/localization-testing",
      icon: <FaLanguage className="w-8 h-8 mb-2 text-purple-500" />,
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

  return (
    <div className="flex-1  overflow-y-auto h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-10">
      <div className="flex p-2">
        {/* Testing Categories Section - Bento Grid Layout */}
        <div className="w-2/14 p-4 border border-zinc-800 rounded-xl shadow-md mr-4 h-[25vw] overflow-y-auto">
          {/* Categories Section - List Layout */}
          <div className="no-visible-scrollbar">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Testing Categories
            </h3>
            <ul className="">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.path}
                    className="flex items-center space-x-3 p-3 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {category.icon}
                    <span className="text-lg font-semibold text-gray-700">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1">
          {/* Recently Added Scenarios Section - Bento Grid Layout */}
          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Recently Added Scenarios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
                <div className="flex items-center mb-3">
                  <FaMobileAlt className="w-6 h-6 mr-2 text-yellow-500" />
                  <h4 className="text-xl font-semibold text-gray-800">
                    Mobile App Compatibility Testing
                  </h4>
                </div>
                <p className="text-gray-600">
                  Test cases for ensuring app compatibility across different
                  devices and operating systems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
                <div className="flex items-center mb-3">
                  <FaTachometerAlt className="w-6 h-6 mr-2 text-red-500" />
                  <h4 className="text-xl font-semibold text-gray-800">
                    Load Testing
                  </h4>
                </div>
                <p className="text-gray-600">
                  Test cases for evaluating system performance under expected
                  load conditions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
                <div className="flex items-center mb-3">
                  <FaLock className="w-6 h-6 mr-2 text-indigo-500" />
                  <h4 className="text-xl font-semibold text-gray-800">
                    Security Testing
                  </h4>
                </div>
                <p className="text-gray-600">
                  Test cases for identifying vulnerabilities and ensuring data
                  security.
                </p>
              </div>
            </div>
          </div>

          {/* // Popular Scenarios Section - List Layout */}
          <div className="mb-12 p-6 border border-zinc-800 rounded-xl shadow-md h-[35vw] w-[70vw] overflow-y-auto no-visible-scrollbar">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Popular Scenarios
            </h3>
            <ul className="space-y-4">
              {scenarios.map((scenario, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 p-3 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                >
                  {scenario.icon}
                  <Link
                    to={scenario.path}
                    className="text-lg font-semibold text-gray-700 hover:underline"
                  >
                    {scenario.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-3xl font-bold mb-4 text-white">
          Have a Scenario to Share?
        </h3>
        <p className="text-gray-100 mb-6 text-lg">
          Contribute to the community by adding your own testing scenarios. Help
          others improve their testing processes!
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 hover:scale-105 transform">
          Contribute Now
        </button>
      </div>
    </div>
  );
};

export default MainContent;

//done some change
