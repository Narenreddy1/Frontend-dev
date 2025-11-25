import React, { useState } from "react";
import Layout from "../Components/layout/Layout";
import DashboardCard from "../Components/common/DashboardCard";



const DashboardPage = () => {
  const[isLoggedIn,setIsLoggedIn] = useState(false)

  // Mock Data for Dashboard 
  const stats = [
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 1, title: "Total Sales", value: "₹1,24,500", color: "text-blue-600" },
    { id: 2, title: "Inventory Items", value: "450", color: "text-purple-600" },
    { id: 3, title: "Net Profit", value: "₹45,200", color: "text-green-600" },
    { id: 4, title: "Pending Orders", value: "12", color: "text-orange-500" },
    { id: 5, title: "New Customers", value: "28", color: "text-teal-600" },
    { id: 6, title: "Total Expenses", value: "₹12,300", color: "text-red-500" },
    { id: 7, title: "Stock Value", value: "₹5.2L", color: "text-indigo-600" },
    { id: 8, title: "Returns", value: "4", color: "text-gray-600" },
  ];

  return (
    <Layout>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 mt-2 px-2 gap-4 ">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Dashboard Overview
          </h1>
          <p className="text-xs text-gray-300 mt-1">Welcome back, Admin</p>
        </div>

        <div className="w-full sm:w-auto">
          <input
            type="date"
            className="w-full sm:w-auto border border-gray-300 bg-white rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
          />
        </div>
      </div>

      {/* Stats Grid - Responsive Columns */}
      <div className="px-2 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="transform hover:-translate-y-1 transition-transform duration-200"
            >
              <DashboardCard
                title={item.title}
                value={item.value}
                valueColor={item.color}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};


export default DashboardPage;
