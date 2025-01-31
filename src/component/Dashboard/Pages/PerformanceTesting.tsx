import React from "react";

const PerformanceTesting: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Performance Testing</h1>
      <p className="text-gray-700">
        Performance testing is a type of software testing that ensures software applications perform well under their expected workload. It focuses on speed, responsiveness, and stability.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Common Scenarios</h2>
      <ul className="list-disc list-inside">
        <li>Load testing</li>
        <li>Stress testing</li>
        <li>Scalability testing</li>
      </ul>
    </div>
  );
};

export default PerformanceTesting;