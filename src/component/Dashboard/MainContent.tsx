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
    <div className="w-screen h-screen flex">
    {/* Recommended Videos Section Moved to Left */}
    <div className="w-1/7 p-4 mt-28">
      <h2 className="text-xl font-bold mb-4">Recommended Videos</h2>
      <a href="https://youtu.be/4XNDXNBi454?si=XMTEjAIWSMdlnEK2" target="_blank" rel="noopener noreferrer">
        {/* <VideoSuggestion
          id="dQw4w9WgXcQ"
          title="Performance Testing and It's Types With Real life Examples"
          channelName="TheTestingAcademy Hindi"
          views={123456789}
          thumbnail={thumb1}
        /> */}
      </a>
      <a href="https://www.youtube.com/watch?v=example456" target="_blank" rel="noopener noreferrer">
        {/* <VideoSuggestion
          id="example456"
          title="Performance Testing with Real life examples"
          channelName="Gate Smashers"
          views={5432109}
          thumbnail={thumb2}
        /> */}
      </a>
    </div>
    
    {/* Main Content Section */}
    <div className="flex flex-col items-center justify-center flex-1 min-h-screen">
      <h1 className="text-8xl text-center mb-6 font-[BoskaVariable]">Search Your Scenarios</h1>
      <div className="flex gap-1">
        <input
          type="text"
          placeholder={placeholders[placeholderIndex]}          
          className="w-80 p-2 rounded-lg border border-gray-600 text-zinc-800"
        />
        <img className="w-12 h-12" src={search} />
      </div>
    </div>
  </div>
  
  );
};

export default MainContent;

