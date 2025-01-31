import React from "react";
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
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
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
          <DrawerContent>
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