import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#1f6d70] text-white h-screen p-4">
      <ul className="space-y-2">
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
    </aside>
  );
};

export default Sidebar;
