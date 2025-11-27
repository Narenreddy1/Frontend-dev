import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../Components/layout/Layout";
import AccountsRoutes from "./accounts/AccountsRoutes";

const MasterRoutes = () => {
  return (
    <Layout showRightSidebar={false}>
      <Routes>
        <Route path="accounts/*" element={<AccountsRoutes />} />
        {/* Future master modules can be added here without duplicating layout */}
      </Routes>
    </Layout>
  );
};

export default MasterRoutes;