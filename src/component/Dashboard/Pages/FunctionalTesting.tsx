import React, { useState } from "react";
import img from '../../../assets/functional.jpg'
import { FaCheckCircle, FaDatabase, FaCogs, FaShoppingCart,  } from "react-icons/fa";


type FAQItem = {
  question: string;
  answer: string;
};

// Sample FAQ data
const faqData: FAQItem[] = [
  {
    question: "What is functional testing?",
    answer:
      "Functional testing is a type of software testing that validates the software system against the functional requirements/specifications. It ensures that the system behaves as expected.",
  },
  {
    question: "What are the types of functional testing?",
    answer:
      "The types of functional testing include unit testing, integration testing, system testing, regression testing, and user acceptance testing (UAT).",
  },
  {
    question: "What is the difference between functional and non-functional testing?",
    answer:
      "Functional testing focuses on verifying the functionality of the software, while non-functional testing checks the performance, usability, reliability, and other non-functional aspects of the system.",
  },
  {
    question: "What tools are used for functional testing?",
    answer:
      "Popular tools for functional testing include Selenium, QTP/UFT, TestComplete, Cypress, and Jest.",
  },
  {
    question: "What is the purpose of functional testing?",
    answer:
      "The purpose of functional testing is to ensure that the software application works as per the specified requirements and meets the end-user expectations.",
  },
];

const FunctionalTesting: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  
  return (
    <div className="overflow-y-auto h-screen pt-20">
      {/* Header Section */}
      <div>
        <h1 className="text-center text-5xl font-bold text-zinc-800 mb-8">Functional Testing</h1>
        <div className="flex items-center justify-center ">
        <img src={img} className="w-[71vw] h-[33vw] rounded-2xl"/>
        </div>
      </div>
      
      <div className="p-50">
      <p className="text-xl text-black font-semibold pb-10">
          Functional testing ensures that a software system meets the functional requirements by validating its expected behavior. It plays a crucial role in delivering a high-quality, reliable application.
        </p>
  {/* Definition Section */}
  <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
          <FaCogs className="mr-2 text-blue-500" /> Definition
        </h2>
        <p className="text-gray-700 text-2xl">
          Functional testing involves evaluating a software application by providing inputs and verifying outputs against expected results. It covers aspects like user interface, APIs, databases, and business logic.
        </p>
      </div>

     {/* Key Objectives Section */}
     <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10 flex items-center">
          <FaCheckCircle className="mr-2 text-green-500" /> Key Objectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Objective 1 */}
          <div className="bg-[#f1fde7] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-black">Meet Requirements</h3>
            </div>
            <p className="text-zinc-800 text-lg">
              Ensure the software meets all specified functional and non-functional requirements.
            </p>
          </div>

          {/* Objective 2 */}
          <div className="bg-[#fde7e7] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-black">Verify Features</h3>
            </div>
            <p className="text-zinc-800 text-lg">
              Validate that all features and functionalities work as intended without errors.
            </p>
          </div>

          {/* Objective 3 */}
          <div className="bg-[#f1fde7] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-black">Identify Defects</h3>
            </div>
            <p className="text-zinc-800 text-lg">
              Detect and report functional defects to ensure they are fixed before release.
            </p>
          </div>

          {/* Objective 4 */}
          <div className="bg-[#fde7e7] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Enhance User Experience</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Ensure the software is user-friendly, intuitive, and meets user expectations.
            </p>
          </div>

          {/* Objective 5 */}
          <div className="bg-[#f1fde7] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Ensure Reliability</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Validate that the software performs consistently under various conditions.
            </p>
          </div>

          {/* Objective 6 */}
          <div className="bg-[#fde7e7] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Compliance</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Ensure the software complies with industry standards and regulations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Types of Functional Testing Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center border-b pb-2">
          <FaCogs className="mr-2 text-blue-500" /> Types of Functional Testing
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-lg text-gray800">
          <li><strong>Unit Testing:</strong> Testing individual software components.</li>
          <li><strong>Integration Testing:</strong> Verifying interactions between modules.</li>
          <li><strong>System Testing:</strong> Testing the entire application.</li>
          <li><strong>Acceptance Testing:</strong> Ensuring readiness for deployment.</li>
        </ol>
      </section>

      {/* Real-Life Examples Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center border-b pb-2">
          <FaShoppingCart className="mr-2 text-purple-500" /> Real-Life Examples
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-lg text-gray-800">
          <li><strong>Banking Application:</strong> Ensuring correct money transfers between accounts.</li>
          <li><strong>E-commerce Checkout:</strong> Verifying payment processing and order confirmation.</li>
          <li><strong>Social Media Login:</strong> Checking login functionality with various authentication methods.</li>
          <li><strong>Online Ticket Booking:</strong> Validating seat selection, pricing, and payment.</li>
        </ol>
      </section>

      {/* Popular Tools Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center border-b pb-2">
          <FaDatabase className="mr-2 text-purple-500" /> Popular Functional Testing Tools
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-lg text-gray-800">
          <li><strong>Selenium:</strong> Automates browser testing.</li>
          <li><strong>Postman:</strong> Simplifies API testing.</li>
          <li><strong>JUnit/TestNG:</strong> Java testing frameworks.</li>
          <li><strong>Cypress:</strong> End-to-end web testing.</li>
        </ol>
      </section>
    </div>
    </div>
    {/* FAQs Section */}
    <section className="bg-white shadow-md rounded-lg p-16">
        <h1 className="text-3xl font-bold text-center mb-6">Functional Testing FAQs</h1>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900"
              onClick={() => toggleAnswer(index)}
            >
              <h2>{faq.question}</h2>
              <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </section>
      
    </div>
  );
};

export default FunctionalTesting;