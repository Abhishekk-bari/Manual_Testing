import React, { useState } from "react";
import img from "../../../assets/functional.jpg";
import {
  FaCheckCircle,
  FaDatabase,
  FaCogs,
  FaShoppingCart,
  FaGlobe,
  FaListAlt,
  FaTools,
} from "react-icons/fa";
import VideoSuggestion from "@/component/VideoSuggestion/VideoLayout";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is performance testing?",
    answer:
      "Performance testing is a type of software testing that evaluates how a system performs under workload, focusing on responsiveness, stability, scalability, and reliability.",
  },
  {
    question: "What are the types of performance testing?",
    answer:
      "Types of performance testing include Load Testing, Stress Testing, Scalability Testing, Endurance Testing, and Spike Testing.",
  },
  {
    question:
      "What is the difference between functional and performance testing?",
    answer:
      "Functional testing verifies if the software works as expected, while performance testing assesses the speed, stability, and scalability of the system.",
  },
  {
    question: "What tools are used for performance testing?",
    answer:
      "Popular tools for performance testing include JMeter, LoadRunner, Gatling, k6, and Apache Bench.",
  },
  {
    question: "What is the purpose of performance testing?",
    answer:
      "The purpose of performance testing is to ensure the software meets performance requirements, handles expected load, and provides a seamless user experience.",
  },
];

const PerformanceTesting: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-y-auto h-screen pt-18">
      <div>
        <h1 className="text-center text-5xl font-bold text-zinc-800 mb-8">
          Performance Testing
        </h1>
        <div className="flex items-center justify-center">
          <img src={img} className="w-[71vw] h-[33vw] rounded-2xl" />
        </div>
      </div>

      <div className="p-50 flex">
        {/* Recommended Videos Section Moved to Left */}
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Recommended Videos</h2>
          <a href="https://youtu.be/4XNDXNBi454?si=XMTEjAIWSMdlnEK2" target="_blank" rel="noopener noreferrer">
    <VideoSuggestion
      id="dQw4w9WgXcQ"
      title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
      channelName="RickAstleyVEVO"
      views={123456789}
      thumbnail="/placeholder.svg?height=720&width=1280"
    />
  </a>
  <a href="https://www.youtube.com/watch?v=example456" target="_blank" rel="noopener noreferrer">
    <VideoSuggestion
      id="example456"
      title="The Most Beautiful Places on Earth You Must Visit"
      channelName="Travel Enthusiast"
      views={5432109}
      thumbnail="/placeholder.svg?height=720&width=1280"
    />
  </a>
        </div>

        <div className="w-2/3">
          <p className="text-xl text-black font-semibold pb-10">
            Performance testing ensures that a software system meets performance
            requirements by validating speed, scalability, and reliability under
            varying workloads.
          </p>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaCogs className="mr-2 text-blue-500" /> Definition
            </h2>
            <p className="text-gray-700 text-2xl">
              Performance testing evaluates a software application’s
              responsiveness, stability, and efficiency under different
              conditions to ensure it meets the required performance standards.
            </p>
          </div>
          {/* Code here */}
          {/* Performance Testing Tools */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaTools className="mr-2 text-blue-500" /> Performance Testing
              Tools
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-2">
              <li>JMeter</li>
              <li>LoadRunner</li>
              <li>Gatling</li>
              <li>NeoLoad</li>
              <li>k6</li>
            </ul>
          </div>

          {/* Types of Performance Testing */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaListAlt className="mr-2 text-blue-500" /> Types of Performance
              Testing
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Load Testing</li>
              <li>Stress Testing</li>
              <li>Scalability Testing</li>
              <li>Endurance Testing</li>
              <li>Spike Testing</li>
            </ul>
          </div>

          {/* Real-World Scenarios */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaGlobe className="mr-2 text-blue-500" /> Real-World Scenarios
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>
                Testing a banking application’s transaction speed under peak
                loads
              </li>
              <li>
                Assessing an e-commerce website’s checkout process during Black
                Friday sales
              </li>
              <li>
                Checking a video streaming platform’s buffering and latency
                under high traffic
              </li>
              <li>
                Evaluating a ride-sharing app’s server response time in
                different cities
              </li>
              <li>
                Validating a healthcare portal’s stability when multiple users
                access reports simultaneously
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-white shadow-md rounded-lg p-16">
        <h1 className="text-3xl font-bold text-center mb-6">
          Performance Testing FAQs
        </h1>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900"
              onClick={() => toggleAnswer(index)}
            >
              <h2>{faq.question}</h2>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PerformanceTesting;
