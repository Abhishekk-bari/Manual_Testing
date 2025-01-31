import React from "react";
import { Link } from "react-router-dom";

const MainContent: React.FC = () => {
  const categories = [
    { name: "Functional Testing", path: "/dashboard/functional-testing" },
    { name: "Performance Testing", path: "/dashboard/performance-testing" },
    { name: "Security Testing", path: "/dashboard/security-testing" },
    { name: "Usability Testing", path: "/dashboard/usability-testing" },
    { name: "Compatibility Testing", path: "/dashboard/compatibility-testing" },
  ];

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
      <p className="text-gray-600 mb-6">
        Welcome to the Testing Scenarios Dashboard! Here, you can explore a wide range of testing scenarios categorized by different types of testing. Select a category below to get started.
      </p>

      {/* Categories Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Testing Categories</h3>
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 min-w-[200px] text-center"
            >
              <span className="text-lg font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Scenarios Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Popular Scenarios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">Login Functionality Testing</h4>
            <p className="text-gray-600">
              Test cases for validating login functionality, including username, password, and error handling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">Payment Gateway Testing</h4>
            <p className="text-gray-600">
              Test cases for ensuring payment gateway integration works correctly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">API Endpoint Testing</h4>
            <p className="text-gray-600">
              Test cases for validating API endpoints, including status codes and response data.
            </p>
          </div>
        </div>
      </div>

      {/* Recently Added Scenarios Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Recently Added Scenarios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">Mobile App Compatibility Testing</h4>
            <p className="text-gray-600">
              Test cases for ensuring app compatibility across different devices and operating systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">Load Testing</h4>
            <p className="text-gray-600">
              Test cases for evaluating system performance under expected load conditions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">Security Testing</h4>
            <p className="text-gray-600">
              Test cases for identifying vulnerabilities and ensuring data security.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Have a Scenario to Share?</h3>
        <p className="text-gray-600 mb-6">
          Contribute to the community by adding your own testing scenarios. Help others improve their testing processes!
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Contribute Now
        </button>
      </div>
    </div>
  );
};

export default MainContent;