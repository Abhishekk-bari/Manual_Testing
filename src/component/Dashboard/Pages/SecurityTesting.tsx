import React from "react";
import { FaShieldAlt, FaLock, FaUserSecret, FaNetworkWired, FaDatabase, FaCode } from "react-icons/fa";

const SecurityTesting: React.FC = () => {
  const realWorldScenarios = [
    {
      title: "Authentication Testing",
      description: "Test the system's login functionality to ensure it prevents unauthorized access.",
      icon: <FaLock className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "SQL Injection Testing",
      description: "Identify vulnerabilities in database queries that could allow attackers to manipulate data.",
      icon: <FaDatabase className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Cross-Site Scripting (XSS) Testing",
      description: "Check for vulnerabilities that allow attackers to inject malicious scripts into web pages.",
      icon: <FaCode className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Penetration Testing",
      description: "Simulate real-world attacks to identify security weaknesses in the system.",
      icon: <FaUserSecret className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Network Security Testing",
      description: "Evaluate the security of network configurations and protocols to prevent unauthorized access.",
      icon: <FaNetworkWired className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Data Encryption Testing",
      description: "Ensure sensitive data is encrypted both in transit and at rest to protect it from breaches.",
      icon: <FaShieldAlt className="w-8 h-8 text-indigo-500" />,
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Security Testing</h1>
      <p className="text-gray-700 text-lg mb-8">
        Security testing is a type of software testing that identifies vulnerabilities, threats, and risks in a system to ensure data and resources are protected from potential attacks.
      </p>

      {/* Key Concepts Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Concepts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <FaShieldAlt className="w-8 h-8 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Vulnerability Assessment</h3>
            <p className="text-gray-600">Identify and classify security vulnerabilities in the system.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <FaUserSecret className="w-8 h-8 mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Penetration Testing</h3>
            <p className="text-gray-600">Simulate attacks to evaluate the system's defenses.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <FaLock className="w-8 h-8 mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Authentication Testing</h3>
            <p className="text-gray-600">Ensure only authorized users can access the system.</p>
          </div>
        </div>
      </div>

      {/* Real-World Scenarios Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Real-World Scenarios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {realWorldScenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center hover:scale-105 transform"
            >
              <div className="mb-4">{scenario.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{scenario.title}</h3>
              <p className="text-gray-600">{scenario.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Best Practices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Regular Security Audits</h3>
            <p className="text-gray-600">Conduct periodic reviews to identify and fix vulnerabilities.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Use Strong Encryption</h3>
            <p className="text-gray-600">Encrypt sensitive data to protect it from unauthorized access.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Implement Multi-Factor Authentication</h3>
            <p className="text-gray-600">Add an extra layer of security to user accounts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityTesting;