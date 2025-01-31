import React from "react";
import { FaCheckCircle, FaDatabase, FaCogs, FaShoppingCart,  } from "react-icons/fa";

const FunctionalTesting: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 text-gray-800 overflow-y-auto h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-center text-4xl font-bold text-blue-600 mb-4">Functional Testing</h1>
        <p className="text-lg text-gray-700">
          Functional testing ensures that a software system meets the functional requirements by validating its expected behavior. It plays a crucial role in delivering a high-quality, reliable application.
        </p>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <FaCogs className="mr-2 text-blue-500" /> Definition
        </h2>
        <p className="text-gray-700">
          Functional testing involves evaluating a software application by providing inputs and verifying outputs against expected results. It covers aspects like user interface, APIs, databases, and business logic.
        </p>
      </div>

     {/* Key Objectives Section */}
     <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <FaCheckCircle className="mr-2 text-green-500" /> Key Objectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Objective 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Meet Requirements</h3>
            </div>
            <p className="text-gray-700">
              Ensure the software meets all specified functional and non-functional requirements.
            </p>
          </div>

          {/* Objective 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Verify Features</h3>
            </div>
            <p className="text-gray-700">
              Validate that all features and functionalities work as intended without errors.
            </p>
          </div>

          {/* Objective 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Identify Defects</h3>
            </div>
            <p className="text-gray-700">
              Detect and report functional defects to ensure they are fixed before release.
            </p>
          </div>

          {/* Objective 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Enhance User Experience</h3>
            </div>
            <p className="text-gray-700">
              Ensure the software is user-friendly, intuitive, and meets user expectations.
            </p>
          </div>

          {/* Objective 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Ensure Reliability</h3>
            </div>
            <p className="text-gray-700">
              Validate that the software performs consistently under various conditions.
            </p>
          </div>

          {/* Objective 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Compliance</h3>
            </div>
            <p className="text-gray-700">
              Ensure the software complies with industry standards and regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Types of Functional Testing Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <FaCogs className="mr-2 text-blue-500" /> Types of Functional Testing
        </h2>
        <ol className="list-decimal list-inside space-y-2 pl-5">
          <li><strong>Unit Testing:</strong> Testing individual software components.</li>
          <li><strong>Integration Testing:</strong> Verifying interactions between modules.</li>
          <li><strong>System Testing:</strong> Testing the entire application.</li>
          <li><strong>Acceptance Testing:</strong> Ensuring readiness for deployment.</li>
        </ol>
      </div>

      {/* Real-Life Examples Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <FaShoppingCart className="mr-2 text-purple-500" /> Real-Life Examples
        </h2>
        <ol className="list-decimal list-inside space-y-2 pl-5">
          <li>
            <strong>Banking Application:</strong> Ensuring correct money transfers between accounts.
          </li>
          <li>
            <strong>E-commerce Checkout:</strong> Verifying payment processing and order confirmation.
          </li>
          <li>
            <strong>Social Media Login:</strong> Checking login functionality with various authentication methods.
          </li>
          <li>
            <strong>Online Ticket Booking:</strong> Validating seat selection, pricing, and payment.
          </li>
        </ol>
      </div>

      {/* Popular Tools Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <FaDatabase className="mr-2 text-purple-500" /> Popular Functional Testing Tools
        </h2>
        <ol className="list-decimal list-inside space-y-2 pl-5">
          <li>
            <strong>Selenium:</strong> Automates browser testing.
          </li>
          <li>
            <strong>Postman:</strong> Simplifies API testing.
          </li>
          <li>
            <strong>JUnit/TestNG:</strong> Java testing frameworks.
          </li>
          <li>
            <strong>Cypress:</strong> End-to-end web testing.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FunctionalTesting;