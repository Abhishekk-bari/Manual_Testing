import React, { useState } from "react";
import img from "../../../assets/Thumbnils/Usability Testing.png";

import thumb1 from "../../../assets/Thumbnils/Usa-Thumbnil.jpg";
import thumb2 from "../../../assets/Thumbnils/Usa-Thumbnil2.jpg";

import { FaCogs, FaGlobe, FaListAlt, FaTools } from "react-icons/fa";
import VideoSuggestion from "@/component/VideoSuggestion/VideoLayout";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is usability testing?",
    answer:
      "Usability testing evaluates how easy and user-friendly a software application is by observing real users interacting with it.",
  },
  {
    question: "Why is usability testing important?",
    answer:
      "It helps identify usability issues, improves user satisfaction, and ensures a seamless experience across different user groups.",
  },
  {
    question: "What are the types of usability testing?",
    answer:
      "Types include Moderated Testing, Unmoderated Testing, Remote Usability Testing, A/B Testing, and Guerrilla Testing.",
  },
  {
    question: "Which tools are used for usability testing?",
    answer:
      "Popular usability testing tools include UsabilityHub, Lookback, Crazy Egg, Optimal Workshop, and Hotjar.",
  },
  {
    question: "How does usability testing differ from functional testing?",
    answer:
      "Functional testing ensures the system works as expected, whereas usability testing focuses on how intuitive and easy it is to use.",
  },
];

const UsabilityTesting: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-y-auto h-screen pt-18">
      <div>
        <h1 className="text-center text-5xl font-bold text-zinc-800 mb-8">
          Usability Testing
        </h1>
        <div className="flex items-center justify-center">
          <img src={img} className="w-[71vw] h-[33vw] rounded-3xl" />
        </div>
      </div>

      <div className="p-45 flex gap-5">
        {/* Recommended Videos Section */}
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Recommended Videos</h2>
          <a href="https://youtu.be/l1gMmNLA2Ns?si=GT4gfwoJk4kx5p6S" target="_blank" rel="noopener noreferrer">
            <VideoSuggestion
              id="example123"
              title="Usability Testing Explained with Real-Life Examples"
              channelName="TestingAcademy"
              views={12345}
              thumbnail={thumb1}
            />
          </a>
          <a href="https://youtu.be/yCMi2CLT5JI?si=soRNhJC2BmQWEiR3" target="_blank" rel="noopener noreferrer">
            <VideoSuggestion
              id="example456"
              title="Usability Testing Explained in Hindi"
              channelName="5 Minutes Engineering"
              views={5432}
              thumbnail={thumb2}
            />
          </a>
        </div>

        <div className="w-2/3">
          <p className="text-xl text-black font-semibold pb-10">
            Usability testing ensures that a software application provides a smooth and intuitive user experience by evaluating ease of use, accessibility, and efficiency.
          </p>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaCogs className="mr-2 text-blue-500" /> Definition
            </h2>
            <p className="text-gray-700 text-2xl">
              Usability testing is a method to evaluate a software product by testing it on real users to determine how easy and efficient it is to use.
            </p>
          </div>

          {/* Usability Testing Tools */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaTools className="mr-2 text-blue-500" /> Usability Testing Tools
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-2">
              <li>UsabilityHub</li>
              <li>Lookback</li>
              <li>Crazy Egg</li>
              <li>Optimal Workshop</li>
              <li>Hotjar</li>
            </ul>
          </div>

          {/* Types of Usability Testing */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaListAlt className="mr-2 text-blue-500" /> Types of Usability Testing
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Moderated Testing</li>
              <li>Unmoderated Testing</li>
              <li>Remote Usability Testing</li>
              <li>A/B Testing</li>
              <li>Guerrilla Testing</li>
            </ul>
          </div>

          {/* Real-World Scenarios */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaGlobe className="mr-2 text-blue-500" /> Real-World Scenarios
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Testing an e-commerce checkout flow to ensure ease of use</li>
              <li>Evaluating a mobile banking app’s accessibility for visually impaired users</li>
              <li>Checking how intuitive a ride-sharing app's booking process is</li>
              <li>Assessing an online learning platform’s navigation for first-time users</li>
              <li>Measuring how quickly users can complete a sign-up process on a new website</li>
            </ul>
          </div>

          {/* Extra: Manual Real-World Scenarios for Usability Testing */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaGlobe className="mr-2 text-blue-500" /> Manual Real-World Scenarios
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Testing an airline website's booking flow manually for UX issues</li>
              <li>Manually verifying how users interact with a newly launched food delivery app</li>
              <li>Evaluating a government portal’s ease of use by observing first-time visitors</li>
              <li>Checking how accessible a streaming service’s subtitles and UI are for users with disabilities</li>
              <li>Assessing how easily customers can find product reviews on an online marketplace</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-white shadow-md rounded-lg p-16">
        <h1 className="text-3xl font-bold text-center mb-6">
          Usability Testing FAQs
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

export default UsabilityTesting;
