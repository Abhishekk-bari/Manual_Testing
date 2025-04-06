import React, { useState } from "react";
// import img from "../../../assets/Thumbnils/Compatibility-Testing.png";

// import thumb1 from "../../../assets/Thumbnils/Comp-Video.jpg";

import { FaCogs, FaGlobe, FaListAlt, FaTools } from "react-icons/fa";
// import VideoSuggestion from "@/component/VideoSuggestion/VideoLayout";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What are the key login page testing scenarios?",
    answer:
      "Testing scenarios include valid and invalid login attempts, password recovery, session handling, security vulnerabilities, and UI responsiveness.",
  },
  {
    question: "What are the essential test cases for a login page?",
    answer:
      "Test cases cover successful login, failed login attempts, case sensitivity of usernames/passwords, CAPTCHA functionality, and input field validations.",
  },
  {
    question: "What common topics should a tester check on a login page?",
    answer:
      "Common topics include authentication mechanisms, error handling, session management, performance, UI/UX, and security considerations like SQL injection prevention.",
  }
];

const LoginPageTesting: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-y-auto h-screen pt-18">
      <div>
        {/* Login page Heading */}
        <h1 className="text-center text-5xl font-bold text-zinc-800 mb-8">
          Login Page Scenarios & Test Cases
        </h1>
      </div>

      <div className="p-45 flex gap-5">
        {/* Recommended Videos Section */}
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Recommended Videos</h2>
          <a href="https://youtu.be/NfVdXKMe7p8?si=pM3eWUJzPfGaAphf" target="_blank" rel="noopener noreferrer">
            {/* <VideoSuggestion
              id="example123"
              title="Login Page Testing Scenarios"
              channelName="QAFox"
              views={1235}
              thumbnail={thumb1}
            /> */}
          </a>
        </div>

        <div className="w-2/3">
          <p className="text-xl text-black font-semibold pb-10">
            Testing a login page involves verifying authentication, security, UI elements, and session management to ensure a seamless user experience.
          </p>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaCogs className="mr-2 text-blue-500" /> Login Page Testing Scenarios
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-2">
              <li>Login with valid credentials</li>
              <li>Login with invalid username/password</li>
              <li>Login with blank fields</li>
              <li>Password recovery functionality</li>
              <li>Remember Me functionality</li>
              <li>Session expiration handling</li>
              <li>Account lockout after multiple failed attempts</li>
              <li>Cross-browser and mobile responsiveness</li>
              <li>Security measures like SQL injection prevention</li>
            </ul>
          </div>

          {/* Test Cases here  */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaListAlt className="mr-2 text-blue-500" /> Test Cases for Login Page
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Verify login with valid credentials</li>
              <li>Check error message for invalid credentials</li>
              <li>Test case sensitivity of username and password</li>
              <li>Verify Forgot Password functionality</li>
              <li>Ensure proper session timeout handling</li>
              <li>Test login with disabled cookies</li>
              <li>Check if CAPTCHA validation works correctly</li>
              <li>Verify login with social media accounts (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-white shadow-md rounded-lg p-16">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login Page Testing FAQs
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

export default LoginPageTesting;
