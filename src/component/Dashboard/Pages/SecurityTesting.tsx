import React, { useState } from "react";
import img from "../../../assets/Thumbnils/Security testing.jpg";

import thumb1 from '../../../assets/Thumbnils/Sec-video1.jpg'

import {
  FaShieldAlt,
  FaLock,
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
    question: "What is security testing?",
    answer:
      "Security testing is a type of software testing that ensures an application is protected from vulnerabilities, threats, and risks to prevent data breaches and attacks.",
  },
  {
    question: "What are the types of security testing?",
    answer:
      "Types of security testing include Vulnerability Scanning, Penetration Testing, Security Auditing, Risk Assessment, and Ethical Hacking.",
  },
  {
    question: "How is security testing different from functional testing?",
    answer:
      "Functional testing checks if the application works as expected, while security testing ensures the system is safeguarded against threats and vulnerabilities.",
  },
  {
    question: "What tools are used for security testing?",
    answer:
      "Popular tools for security testing include OWASP ZAP, Burp Suite, Metasploit, Nmap, and Nessus.",
  },
  {
    question: "What is the purpose of security testing?",
    answer:
      "The purpose of security testing is to identify weaknesses, secure sensitive data, and ensure compliance with security standards.",
  },
];

const SecurityTesting: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-y-auto h-screen pt-18">
      <div>
        <h1 className="text-center text-5xl font-bold text-zinc-800 mb-8">
          Security Testing
        </h1>
        <div className="flex items-center justify-center">
          <img src={img} className="w-[71vw] h-[33vw] rounded-3xl" />
        </div>
      </div>

      <div className="p-45 flex gap-5">
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Recommended Videos</h2>
          <a href="https://youtube.com/watch?v=dFJMlBBPcEE" target="_blank" rel="noopener noreferrer">
            <VideoSuggestion
              id="example123"
              title="Security Testing and Its Importance"
              channelName="SoftwaretestingbyMKT"
              views={123456789}
              thumbnail={thumb1}
            />
          </a>
        </div>

        <div className="w-2/3">
          <p className="text-xl text-black font-semibold pb-10">
            Security testing ensures that a software system is protected against threats, vulnerabilities, and unauthorized access to maintain data integrity.
          </p>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaShieldAlt className="mr-2 text-blue-500" /> Definition
            </h2>
            <p className="text-gray-700 text-2xl">
              Security testing evaluates a system’s ability to protect data and maintain functionality in the presence of potential security threats.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaTools className="mr-2 text-blue-500" /> Security Testing Tools
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-2">
              <li>OWASP ZAP</li>
              <li>Burp Suite</li>
              <li>Metasploit</li>
              <li>Nmap</li>
              <li>Nessus</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaListAlt className="mr-2 text-blue-500" /> Types of Security Testing
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Vulnerability Scanning</li>
              <li>Penetration Testing</li>
              <li>Security Auditing</li>
              <li>Risk Assessment</li>
              <li>Ethical Hacking</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaLock className="mr-2 text-blue-500" /> Security Testing in Real-World Scenarios
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-2xl space-y-3">
              <li>Testing a banking app’s authentication system against brute-force attacks</li>
              <li>Assessing an e-commerce site’s security against SQL injection</li>
              <li>Validating healthcare portals for data leaks</li>
              <li>Ensuring cloud-based storage encryption works as expected</li>
              <li>Checking API security for unauthorized access vulnerabilities</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-white shadow-md rounded-lg p-16">
        <h1 className="text-3xl font-bold text-center mb-6">
          Security Testing FAQs
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

export default SecurityTesting;
