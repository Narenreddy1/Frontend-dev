import React, { useState } from "react";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";
import SideBar2 from "./SideBar2";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="h-screen w-screen overflow-hidden flex">
      {/* LEFT SIDEBAR (Fixed Full Height) */}
      <div
        className={`h-full bg-white shadow-md border-r transition-all duration-300
        ${toggle ? "w-55" : "w-0"} overflow-hidden`}
      >
        <div className="h-full overflow-y-auto">
          <Sidebar />
        </div>
      </div>

      {/* RIGHT CONTENT AREA (Navbar + Dashboard + Right Sidebar) */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* NAVBAR (Always top, full width minus sidebar) */}
        <div className="border-b bg-white shadow-sm flex justify-end  items-center">
          <Navbar toggleSidebar={() => setToggle(!toggle)} />
        </div>

        {/* MAIN CONTENT ROW */}
        <div className="flex flex-1 overflow-hidden">
          {/* MIDDLE DASHBOARD (Independent Scroll) */}
          <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
            {children}
          </main>

          {/* RIGHT SIDEBAR (Independent Scroll) */}
          <div className="w-64 border-l bg-white hidden xl:block overflow-y-auto">
            <SideBar2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
