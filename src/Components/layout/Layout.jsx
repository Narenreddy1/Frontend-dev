import React from "react";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";
import SideBar2 from "./SideBar2";
import { useState } from "react";

const Layout = ({ children }) => {

    const[toggle,setToggle] = useState(true)

  return (
    
    <div className="flex flex-col">
     <Navbar toggleSidebar={() => setToggle(!toggle)} />

      <div className="flex flex-1">
        
        
        {toggle && (
          <div className="transition-all duration-300">
            <Sidebar />
          </div>
        )}

      <div className="flex flex-1 bg-fixed">
        {/* <Sidebar />  */}

        <main className="flex-1 p-4 overflow-auto">{children}</main>

        <SideBar2 />
      </div>
    </div>
    </div>
    
  );
};

export default Layout;
