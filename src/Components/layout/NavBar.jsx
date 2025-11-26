import React, { useState } from "react";
import {
  FaHistory,
  FaBell,
  FaUserCircle,
  FaCog,
  FaRegQuestionCircle,
  FaKeyboard,
  FaPills,
  FaBars,
  FaSignOutAlt, 
  FaUserShield, 
} from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  // State to control the visibility of the profile pop-up/dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  console.log(toggleSidebar);
  
  function handleLogout() {
    try {
      localStorage.clear();
      alert("Logging out and redirecting to login page (mock action).");
    } catch (e) {
      /* ignore */
    }
    window.location.href = "/";
  }

  return (
    <header className="w-full flex items-center justify-between px-2 bg-[#1f6d70] text-white shadow-lg relative h-12">
      {/* --- Left Side: Logo and Sidebar Toggle --- */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
          className="p-2 bg-[#1f6d70] hover:bg-white/25 rounded-lg transition-all duration-300 text-white"
          onClick={() => toggleSidebar && toggleSidebar()}
        >
          <FaBars size={18} />
        </button>
        <div className="font-bold text-base sm:text-lg tracking-wide whitespace-nowrap">
          🏥 ASR Hospitals India Pvt Ltd.
        </div>
      </div>

      {/* --- Right Side: Icons and Profile --- */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Navigation/Utility Icons (Hidden on small screens for responsiveness) */}
        <div className="hidden lg:flex items-center space-x-3 border-r pr-3">
          <button className="flex flex-col items-center justify-center p-1 hover:bg-white/10 rounded transition group">
            <FaPills
              size={22}
              className="text-[#d8e3e4] group-hover:text-white transition"
            />
            <span className="text-xs mt-1 text-gray-300 group-hover:text-white whitespace-nowrap">
              Drug Helpline
            </span>
          </button>
          <button className="flex flex-col items-center justify-center p-1 hover:bg-white/10 rounded transition group">
            <FaRegQuestionCircle
              size={22}
              className="text-[#d8e3e4] group-hover:text-white transition"
            />
            <span className="text-xs mt-1 text-gray-300 group-hover:text-white whitespace-nowrap">
              Help
            </span>
          </button>
          <button className="flex flex-col items-center justify-center p-1 hover:bg-white/10 rounded transition group">
            <FaCog
              size={22}
              className="text-[#d8e3e4] group-hover:text-white transition"
            />
            <span className="text-xs mt-1 text-gray-300 group-hover:text-white whitespace-nowrap">
              Settings
            </span>
          </button>
          <button className="flex flex-col items-center justify-center p-1 hover:bg-white/10 rounded transition group">
            <FaBell
              size={22}
              className="text-[#d8e3e4] group-hover:text-white transition"
            />
            <span className="text-xs mt-1 text-gray-300 group-hover:text-white whitespace-nowrap">
              Notification
            </span>
          </button>
          <button className="flex flex-col items-center justify-center p-1 hover:bg-white/10 rounded transition group">
            <FaKeyboard
              size={22}
              className="text-[#d8e3e4] group-hover:text-white transition"
            />
            <span className="text-xs mt-1 text-gray-300 group-hover:text-white whitespace-nowrap">
              Shortcut
            </span>
          </button>
          <button className="flex flex-col items-center justify-center p-1 hover:bg-white/10 rounded transition group">
            <FaHistory
              size={22}
              className="text-[#d8e3e4] group-hover:text-white transition"
            />
            <span className="text-xs mt-1 text-gray-300 group-hover:text-white whitespace-nowrap">
              History
            </span>
          </button>
        </div>

        {/* --- User Profile Button with Pop-up functionality --- */}
        <div className="relative">
          <button
            type="button"
            onClick={toggleProfile}
            className="flex items-center justify-center p-1 rounded-full border-2 border-transparent focus:outline-none focus:border-white transition-all duration-200"
            aria-label="User Profile"
          >
            <FaUserCircle
              size={35}
              className="text-[#d8e3e4] hover:text-white transition"
            />
          </button>

          {/* Profile Pop-up/Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-20">
              <div className="p-4 border-b">
                <p className="text-gray-800 font-semibold">User Name</p>
                <p className="text-sm text-gray-500">user@hospital.com</p>
              </div>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                onClick={() => {
                  console.log("Navigating to Admin Panel (mock action).");
                  setIsProfileOpen(false); // Close dropdown after click
                }}
              >
                <FaUserShield className="mr-3 text-lg" />
                Admin Panel
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-red-600 w-full text-left hover:bg-red-50 transition-colors duration-150 border-t"
              >
                <FaSignOutAlt className="mr-3 text-lg" />
                Logout
              </button>
            </div>
          )}
        </div>
        {/* --- End User Profile --- */}
      </div>
    </header>
  );
};

export default Navbar;
