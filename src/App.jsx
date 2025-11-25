import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./LoginPage";
import MasterRoutes from "./modules/master/MasterRoutes";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/master/*" element={<MasterRoutes />} />
        {/* Add Sales, Inventory, Accounts later */}
      </Routes>
    </Router>
  );
};

export default App;
