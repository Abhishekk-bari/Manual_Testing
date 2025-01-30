import React from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default DashboardLayout;