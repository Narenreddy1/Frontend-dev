import React from "react";
import { FaHistory, FaBell } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-[#1f6d70] text-white px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold">ASR ERP Dashboard</h1>
      <div className="flex space-x-4">
        <button className="flex flex-col items-center justify-center">
          <FaBell
            size={22}
            className="text-[#d8e3e4] hover:text-[#0d0e0e] transition"
          />
          <span className="text-sm mt-1 text-gray-300">Notification</span>
        </button>

        <button className=" flex flex-col items-center justify-center">
          <FaHistory
            size={22}
            className="text-[#d8e3e4] hover:text-[#0d0e0e] transition "
          />
          <span className="text-ms mt-1 text-gray-300">History</span>
        </button>

        {/* <button className="hover:bg-blue-700 px-3 py-1 rounded">
          Notification
        </button>
        <button className="hover:bg-blue-700 px-3 py-1 rounded">History</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
