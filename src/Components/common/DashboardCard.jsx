import React from "react";

const DashboardCard = ({ title, value, valueColor = "text-blue-600" }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100 h-full flex flex-col justify-between hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-start">
        <h2 className="text-gray-500 text-xs font-bold uppercase tracking-wider">{title}</h2>
        {/* Optional: Add an icon or indicator here later */}
      </div>
      
      <div className="mt-3">
        <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
        <p className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
           <span className="text-green-500 font-bold">↑ 2.5%</span> since last week
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;