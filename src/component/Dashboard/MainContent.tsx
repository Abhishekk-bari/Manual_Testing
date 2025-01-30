import React from "react";

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
      <p className="text-gray-700">
        This is the main section of the dashboard. You can display any content
        here based on the selected section.
      </p>
    </div>
  );
};

export default MainContent;