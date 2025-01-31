import React from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";


const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <Outlet /> {/* This will render the nested routes */}
      </div>
    </div>
  );
};

export default DashboardLayout;