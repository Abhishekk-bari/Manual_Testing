import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBug, FaTachometerAlt, FaShieldAlt, FaUserCheck, FaMobileAlt, FaCreditCard, FaCode, FaChartLine, FaLock } from "react-icons/fa";


const MainContent: React.FC = () => {
  const categories = [
    { name: "Functional Testing", path: "/dashboard/functional-testing", icon: <FaBug className="w-8 h-8 mb-2 text-blue-600" /> },
    { name: "Performance Testing", path: "/dashboard/performance-testing", icon: <FaTachometerAlt className="w-8 h-8 mb-2 text-purple-600" /> },
    { name: "Security Testing", path: "/dashboard/security-testing", icon: <FaShieldAlt className="w-8 h-8 mb-2 text-red-600" /> },
    { name: "Usability Testing", path: "/dashboard/usability-testing", icon: <FaUserCheck className="w-8 h-8 mb-2 text-green-600" /> },
    { name: "Compatibility Testing", path: "/dashboard/compatibility-testing", icon: <FaMobileAlt className="w-8 h-8 mb-2 text-yellow-600" /> },
  ];

  const marqueeRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let offset = 0;
    const speed = 0.50; // Adjust speed as needed

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
    <div className="flex-1 p-6 overflow-y-auto h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* <h2 className="text-3xl font-bold mb-6 text-gray-800">Main Content</h2>
      <div className="overflow-hidden whitespace-nowrap w-full bg-zinc-800 rounded-xl">
      <p ref={marqueeRef} className="inline-block text-white font-bold text-2xl">
        Welcome to the Testing Scenarios Dashboard! Here, you can explore a wide range of testing scenarios categorized by different types of testing. Select a category below to get started.
      </p>
    </div> */}

      {/* Categories Section - Bento Grid Layout */}
      <div className="mb-12 pt-10">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Testing Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center hover:scale-105 transform hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100"
            >
              {category.icon}
              <span className="text-lg font-semibold text-gray-700">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Scenarios Section - Bento Grid Layout */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Popular Scenarios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <div className="flex items-center mb-3">
              <FaCreditCard className="w-6 h-6 mr-2 text-blue-500" />
              <h4 className="text-xl font-semibold text-gray-800">Login Functionality Testing</h4>
            </div>
            <p className="text-gray-600">
              Test cases for validating login functionality, including username, password, and error handling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <div className="flex items-center mb-3">
              <FaCode className="w-6 h-6 mr-2 text-purple-500" />
              <h4 className="text-xl font-semibold text-gray-800">Payment Gateway Testing</h4>
            </div>
            <p className="text-gray-600">
              Test cases for ensuring payment gateway integration works correctly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <div className="flex items-center mb-3">
              <FaChartLine className="w-6 h-6 mr-2 text-green-500" />
              <h4 className="text-xl font-semibold text-gray-800">API Endpoint Testing</h4>
            </div>
            <p className="text-gray-600">
              Test cases for validating API endpoints, including status codes and response data.
            </p>
          </div>
        </div>
      </div>

      {/* Recently Added Scenarios Section - Bento Grid Layout */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Recently Added Scenarios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <div className="flex items-center mb-3">
              <FaMobileAlt className="w-6 h-6 mr-2 text-yellow-500" />
              <h4 className="text-xl font-semibold text-gray-800">Mobile App Compatibility Testing</h4>
            </div>
            <p className="text-gray-600">
              Test cases for ensuring app compatibility across different devices and operating systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <div className="flex items-center mb-3">
              <FaTachometerAlt className="w-6 h-6 mr-2 text-red-500" />
              <h4 className="text-xl font-semibold text-gray-800">Load Testing</h4>
            </div>
            <p className="text-gray-600">
              Test cases for evaluating system performance under expected load conditions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <div className="flex items-center mb-3">
              <FaLock className="w-6 h-6 mr-2 text-indigo-500" />
              <h4 className="text-xl font-semibold text-gray-800">Security Testing</h4>
            </div>
            <p className="text-gray-600">
              Test cases for identifying vulnerabilities and ensuring data security.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-3xl font-bold mb-4 text-white">Have a Scenario to Share?</h3>
        <p className="text-gray-100 mb-6 text-lg">
          Contribute to the community by adding your own testing scenarios. Help others improve their testing processes!
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 hover:scale-105 transform">
          Contribute Now
        </button>
      </div>
    </div>
  );
};

export default MainContent;