import React from "react";
import { FaTachometerAlt, FaFire, FaExpand, FaChartLine, FaServer, FaClock, FaMobileAlt } from "react-icons/fa";

const PerformanceTesting: React.FC = () => {
  const realWorldScenarios = [
    {
      title: "E-commerce Website Load Testing",
      description: "Simulate thousands of users during a flash sale to ensure the website can handle high traffic without crashing.",
      icon: <FaTachometerAlt className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "API Stress Testing",
      description: "Test the API under extreme conditions to identify breaking points and ensure it can recover gracefully.",
      icon: <FaFire className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Scalability Testing for Cloud Applications",
      description: "Evaluate how well the application scales when additional resources (e.g., servers) are added.",
      icon: <FaExpand className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Database Performance Testing",
      description: "Measure the response time of database queries under heavy load to optimize performance.",
      icon: <FaServer className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Mobile App Performance Testing",
      description: "Test the app's performance on different devices and network conditions to ensure a smooth user experience.",
      icon: <FaMobileAlt className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Endurance Testing",
      description: "Run the system under a sustained load for an extended period to check for memory leaks or performance degradation.",
      icon: <FaClock className="w-8 h-8 text-indigo-500" />,
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">Performance Testing</h1>
      <p className="text-gray-700 text-lg mb-8">
        Performance testing is a type of software testing that ensures software applications perform well under their expected workload. It focuses on speed, responsiveness, and stability.
      </p>

      {/* Key Concepts Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Concepts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <FaChartLine className="w-8 h-8 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Load Testing</h3>
            <p className="text-gray-600">Simulate real-world load to measure system performance under expected conditions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <FaFire className="w-8 h-8 mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Stress Testing</h3>
            <p className="text-gray-600">Push the system beyond its limits to identify breaking points and failure conditions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <FaExpand className="w-8 h-8 mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Scalability Testing</h3>
            <p className="text-gray-600">Evaluate how well the system scales with increased resources or user load.</p>
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
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Define Clear Objectives</h3>
            <p className="text-gray-600">Set measurable goals for performance testing, such as response time and throughput.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Use Realistic Data</h3>
            <p className="text-gray-600">Simulate real-world data and user behavior for accurate results.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Monitor System Metrics</h3>
            <p className="text-gray-600">Track CPU, memory, and network usage to identify bottlenecks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTesting;