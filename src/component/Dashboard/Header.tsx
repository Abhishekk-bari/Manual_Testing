import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: { [key: string]: string[] } = {
    API: ["REST", "GraphQL", "SOAP"],
    "Functional Testing": ["Unit Testing", "Integration Testing", "System Testing"],
    "Non-Functional Testing": ["Performance Testing", "Security Testing", "Usability Testing"],
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" text px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Select Topic
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {Object.keys(topics).map((topic) => (
              <div key={topic}>
                <button
                  onClick={() => handleTopicClick(topic)}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {topic}
                </button>
                {selectedTopic === topic && (
                  <div className="pl-4">
                    {topics[topic].map((subTopic) => (
                      <button
                        key={subTopic}
                        className="block w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        {subTopic}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    
      <input
        type="text"
        placeholder="Search for testing scenarios..."
        className="w-64 p-2 rounded-lg border border-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex items-center cursor-pointer ">
       
        <Drawer>
          <DrawerTrigger>
          <FaUserAlt className="w-5 h-5 text-black" />
          </DrawerTrigger>
          <DrawerContent className="bg-amber-100">
            <DrawerHeader>
              <DrawerTitle>Welcome to Testing_hub</DrawerTitle>
              <DrawerDescription>
                This website is designed by Abhishek to help manual testers
                perform software testing faster and more efficiently.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;