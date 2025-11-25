import React from "react";
import {
  FaHistory,
  FaBell,
  FaUserCircle,
  FaCog,
  FaRegQuestionCircle,
  FaKeyboard,
  FaPills,
  FaBars,
 
} from "react-icons/fa";
const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="flex flex-1 items-center justify-between px-6 bg-[#1f6d70] ">
      {/* <nav className="bg-[#1f6d70] text-white px-1 py-1 flex items-center pl-5 "> */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
          className="flex items-center gap-1.5 px-3 py-2 bg-white/15 hover:bg-white/25 rounded-lg transition-all duration-300"
          onClick={() => toggleSidebar && toggleSidebar()}
        >
          <FaBars size={18} />
        </button>
        <div className="font-bold text-lg tracking-wide">
          🏥 ASR Hospitals India Pvt Ltd.
        </div>
      </div>
      <div className="main-div-1">
        <div className="flex gap-1 space-x-3">
          <div className="border-r ">
            <button className="flex flex-col items-center justify-center px-2 pt-1">
              <FaUserCircle
                size={35}
                className="text-[#d8e3e4] hover:text-[#0d0e0e] transition"
              />
              {/* <span className="text-sm mt-1 text-gray-300"></span> */}
            </button>
          </div>

          <button className="flex flex-col items-center justify-center">
            <FaPills
              size={22}
              className="text-[#d8e3e4] hover:text-[#0d0e0e] transition"
            />
            <span className="text-sm mt-1 text-gray-300">Drug Helpline</span>
          </button>
          <button className="flex flex-col items-center justify-center">
            <FaRegQuestionCircle
              size={22}
              className="text-[#d8e3e4] hover:text-[#0d0e0e] transition"
            />
            <span className="text-sm mt-1 text-gray-300">Help</span>
          </button>
          <button className="flex flex-col items-center justify-center">
            <FaCog
              size={22}
              className="text-[#d8e3e4] hover:text-[#0d0e0e] transition"
            />
            <span className="text-sm mt-1 text-gray-300">Settings</span>
          </button>

          <button className="flex flex-col items-center justify-center">
            <FaBell
              size={22}
              className="text-[#d8e3e4] hover:text-[#0d0e0e] transition"
            />
            <span className="text-sm mt-1 text-gray-300">Notification</span>
          </button>

          <button className="flex flex-col items-center justify-center">
            <FaKeyboard
              size={22}
              className="text-[#d8e3e4] hover:text-[#0d0e0e] transition"
            />
            <span className="text-sm mt-1 text-gray-300">Shortcut</span>
          </button>

          <button className=" flex flex-col items-center justify-center">
            <FaHistory
              size={22}
              className="text-[#d8e3e4] hover:text-[#0d0e0e] transition "
            />
            <span className="text-ms mt-1 text-gray-300">History</span>
          </button>
        </div>
        {/* <button className="hover:bg-blue-700 px-3 py-1 rounded">
          Notification
        </button>
        <button className="hover:bg-blue-700 px-3 py-1 rounded">History</button> */}
      </div>
      {/* </nav> */}
    </header>
  );
};

export default Navbar;
