import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
  FaCalculator,
  FaUniversity,
  FaFileSignature,
  FaClipboardList,
  FaHandshake,
  FaThLarge,
  FaTools,
  FaStore,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const Sidebar = () => {
  const [openMaster, setOpenMaster] = useState(false);
  const [openAccounts, setOpenAccounts] = useState(false);

  return (
    <aside className="w-55 bg-[#083638] text-white h-full">
      <div className="bg-white flex justify-center items-center h-12 pb-1 mb-1">
        <h1 className="text-gray-800 text-xl font-bold">
          🏥ASR Hospitals<span className="text-red-500"> ERP</span>
        </h1>
      </div>
      
      {/* Sidebar Content */}
      <div className="flex justify-start p-3 bg-[#083638]">
        <ul className="space-y-2">
          <input
            type="text"
            placeholder="search here"
            className=" flex border border-gray-500 p-1 pl-3 mb-2 rounded-sm opacity-70"
          />
          <li>
            <Link
              to="/dashboard"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaTachometerAlt />
              <span>Dashboard</span>
            </Link>
          </li>
          {/* Total Master starts here  */}
          <li>
            <button
              onClick={() => setOpenMaster(!openMaster)}
              className="w-full flex items-center justify-between px-1 py-1 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <span className="flex items-center space-x-3">
                <FaUser />
                <span>Master</span>
              </span>
              {openMaster ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {/* Account Master component Starts here */}
            {openMaster && (
              <ul className="ml-8 mt-1 space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setOpenAccounts(!openAccounts)}
                    className="w-full flex items-center justify-between px-1 py-1 text-sm hover:bg-[#1a4f51] rounded transition duration-150"
                  >
                    Accounts Master{" "}
                    {openAccounts ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openAccounts && (
                    <ul className="ml-4 mt-1 space-y-2 text-xs">
                      <li>
                        <Link to="/master/accounts/ledger">Ledger</Link>
                      </li>
                      <li>
                        <Link to="/master/accounts/group">Group</Link>
                      </li>
                      <li>
                        <Link to="/master/accounts/sale">Sale</Link>
                      </li>
                      <li>
                        <Link to="/master/accounts/purchase">Purchase</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Account Master component ends here */}
                <li>
                  <Link
                    to="/master/inventory-master"
                    className="block hover:text-gray-300"
                  >
                    Inventory Master
                  </Link>
                </li>
                <li>
                  <Link to="/master/rate" className="block hover:text-gray-300">
                    Rate Master
                  </Link>
                </li>
                <li>
                  <Link
                    to="/master/discount"
                    className="block hover:text-gray-300"
                  >
                    Discount Master
                  </Link>
                </li>
                <li>
                  <Link
                    to="/master/other"
                    className="block hover:text-gray-300"
                  >
                    Other Master
                  </Link>
                </li>
                <li>
                  <Link
                    to="/master/opening-balance"
                    className="block hover:text-gray-300"
                  >
                    Opening Balance
                  </Link>
                </li>
                <li>
                  <Link to="/master/tds" className="block hover:text-gray-300">
                    TDS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/master/currency"
                    className="block hover:text-gray-300"
                  >
                    Currency
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Total Master part ends here */}
          <li>
            <Link
              to="/sales"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaShoppingBag />
              <span> Sales</span>
            </Link>
          </li>
          <li>
            <Link
              to="/inventory"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaShoppingCart />
              <span>Purchase</span>
            </Link>
          </li>
          <li>
            <Link
              to="/account-transactions"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaCalculator />
              <span>Account Trans.</span>
            </Link>
          </li>
          <li>
            <Link
              to="/stock-management"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaClipboardList />
              <span>Stock Management</span>
            </Link>
          </li>
          <li>
            <Link
              to="/banking"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaUniversity />
              <span>Banking</span>
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaFileSignature />
              <span>Report</span>
            </Link>
          </li>
          <li>
            <Link
              to="/crm"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaHandshake />
              <span>CRM</span>
            </Link>
          </li>
          <li>
            <Link
              to="/other-products"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaThLarge />
              <span>Other Products</span>
            </Link>
          </li>
          <li>
            <Link
              to="/utilities"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaTools />
              <span>Utilities & Tool</span>
            </Link>
          </li>
          <li>
            <Link
              to="/online-store"
              className="flex items-center space-x-3 px-1 py-2 text-sm font-medium hover:bg-[#1a4f51] rounded transition duration-150"
            >
              <FaStore />
              <span>Online Store</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
