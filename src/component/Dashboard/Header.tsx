import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold text-gray-800">Welcome to Dashboard</h1>
      
      <input type="text" placeholder="Search..."  className="border border-black rounded-2xl" />
    </header>
  );
};

export default Header;