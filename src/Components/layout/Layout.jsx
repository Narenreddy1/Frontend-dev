import React, { useState } from "react";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";
import SideBar2 from "./SideBar2";

const Layout = ({ children, showRightSidebar = true }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="h-screen w-screen overflow-hidden flex">
      {/* LEFT SIDEBAR (Fixed Full Height) */}
      <div
        className={`shadow-md transition-all duration-500
        ${toggle ? "w-55" : "w-0"} overflow-hidden`}
      >
        <div className="h-full overflow-y-auto">
          <Sidebar />
        </div>
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* NAVBAR  */}
        <div className="shadow-sm flex justify-end items-center mb-2">
          <Navbar toggleSidebar={() => setToggle(!toggle)} />
        </div>

        {/* MAIN CONTENT ROW */}
        <div className="flex flex-1 overflow-hidden">
          {/* MIDDLE DASHBOARD (Independent Scroll) */}
          <main
            className={`flex-1 rounded-lg overflow-y-auto ${
              showRightSidebar ? "ml-2" : ""
            } bg-white half-dotted-bg`}
          >
            {children}
          </main>

          {/* RIGHT SIDEBAR (Independent Scroll) */}
          {showRightSidebar && (
            <div className="bg-white xl:block overflow-y-auto ml-2 hidden md:flex rounded-lg">
              <SideBar2 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
