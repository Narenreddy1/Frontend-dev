import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-55 bg-[#083638] text-white h-full">
      <div className="bg-white pb-3 pt-3.5 flex justify-center items-center">
        <h1 className="text-gray-800 text-xl font-bold pb-1">
          ASR Hospitals<span className="text-red-500"> ERP</span>
        </h1>
      </div>
      <hr />
      <div className="p-3">
        <ul className="space-y-1.5">
          <li>
            <Link
              to="/dashboard"
              className="block px-2 py-1 hover:bg-gray-700 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/sales"
              className="block px-2 py-1 hover:bg-gray-700 rounded"
            >
              Sales
            </Link>
          </li>
          <li>
            <Link
              to="/inventory"
              className="block px-2 py-1 hover:bg-gray-700 rounded"
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              to="/accounts"
              className="block px-2 py-1 hover:bg-gray-700 rounded"
            >
              Accounts
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
