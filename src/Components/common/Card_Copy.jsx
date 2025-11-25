import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <h2 className="text-gray-600 text-sm">{title}</h2>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default DashboardCard;
