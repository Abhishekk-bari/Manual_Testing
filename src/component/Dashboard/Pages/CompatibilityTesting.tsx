import React, { useState } from "react";
import img from "../../../assets/Thumbnils/Compatibility-Testing.png";

import thumb1 from "../../../assets/Thumbnils/Comp-Video.jpg";

import { FaCogs, FaGlobe, FaListAlt, FaTools } from "react-icons/fa";
import VideoSuggestion from "@/component/VideoSuggestion/VideoLayout";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is compatibility testing?",
    answer:
      "Compatibility testing ensures that a software application functions correctly across different devices, operating systems, browsers, and network environments.",
  },
  {
    question: "Why is compatibility testing important?",
    answer:
      "It ensures a seamless user experience by identifying issues related to cross-platform performance, UI inconsistencies, and hardware dependencies.",
  },
  {
    question: "What are the types of compatibility testing?",
    answer:
      "Types include Browser Compatibility Testing, Mobile Compatibility Testing, Operating System Compatibility Testing, Software Compatibility Testing, and Network Compatibility Testing.",
  },
  {
    question: "Which tools are used for compatibility testing?",
    answer:
      "Popular tools include BrowserStack, Sauce Labs, LambdaTest, CrossBrowserTesting, and BrowserShots.",
  },
  {
    question: "How does compatibility testing differ from functional testing?",
    answer:
      "Functional testing checks if the application meets business requirements, while compatibility testing ensures it works across various environments.",
  },
];

const CompatibilityTesting: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-y-auto h-screen pt-18">
      <div>
        <h1 className="text-center text-5xl font-bold text-zinc-800 mb-8">
          Compatibility Testing
        </h1>
        <div className="flex items-center justify-center">
          <img src={img} className="w-[71vw] h-[33vw] rounded-3xl" />
        </div>
      </div>

      <div className="p-45 flex gap-5">
        {/* Recommended Videos Section */}
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Recommended Videos</h2>
          <a href="https://youtu.be/NfVdXKMe7p8?si=pM3eWUJzPfGaAphf" target="_blank" rel="noopener noreferrer">
            <VideoSuggestion
              id="example123"
              title="What is Compatibility Testing?"
              channelName="QAFox"
              views={1235}
              thumbnail={thumb1}
            />
          </a>
        </div>

        <div className="w-2/3">
          <p className="text-xl text-black font-semibold pb-10">
            Compatibility testing ensures that a software application runs smoothly across different environments, including operating systems, browsers, mobile devices, and networks.
          </p>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaCogs className="mr-2 text-blue-500" /> Definition
            </h2>
            <p className="text-gray-700 text-2xl">
              Compatibility testing verifies whether a software application is capable of running efficiently across various hardware, software, network, and browser configurations.
            </p>
          </div>

          {/* Compatibility Testing Tools */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaTools className="mr-2 text-blue-500" /> Compatibility Testing Tools
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-2">
              <li>BrowserStack</li>
              <li>Sauce Labs</li>
              <li>LambdaTest</li>
              <li>CrossBrowserTesting</li>
              <li>BrowserShots</li>
            </ul>
          </div>

          {/* Types of Compatibility Testing */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaListAlt className="mr-2 text-blue-500" /> Types of Compatibility Testing
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Browser Compatibility Testing</li>
              <li>Mobile Compatibility Testing</li>
              <li>Operating System Compatibility Testing</li>
              <li>Software Compatibility Testing</li>
              <li>Network Compatibility Testing</li>
            </ul>
          </div>

          {/* Real-World Scenarios */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaGlobe className="mr-2 text-blue-500" /> Real-World Scenarios
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Testing an e-commerce website on different browsers (Chrome, Firefox, Safari, Edge)</li>
              <li>Verifying a mobile banking app’s functionality on Android and iOS devices</li>
              <li>Ensuring a web application renders correctly on Windows, macOS, and Linux</li>
              <li>Checking a cloud-based CRM system’s compatibility with different network speeds</li>
              <li>Assessing a video conferencing tool’s performance across various operating systems</li>
            </ul>
          </div>

          {/* Extra: Manual Real-World Scenarios for Compatibility Testing */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaGlobe className="mr-2 text-blue-500" /> Manual Real-World Scenarios
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Manually testing a travel booking site’s UI on different browsers and screen resolutions</li>
              <li>Verifying a healthcare app’s responsiveness across tablets and smartphones</li>
              <li>Checking a finance app’s layout and performance on 4G, 5G, and WiFi networks</li>
              <li>Testing a learning management system (LMS) on various operating systems and devices</li>
              <li>Evaluating an online payment gateway’s performance across multiple browsers</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-white shadow-md rounded-lg p-16">
        <h1 className="text-3xl font-bold text-center mb-6">
          Compatibility Testing FAQs
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

export default CompatibilityTesting;
