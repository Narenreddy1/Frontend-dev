import React from "react";
import { Routes, Route } from "react-router-dom";
import AccountsRoutes from "./accounts/AccountsRoutes";

 const MasterRoutes = () => {
  return (
    <Routes>
      <Route path="accounts/*" element={<AccountsRoutes />} />
      {/* <Route path="inventory" element={<InventoryMaster />} />
      <Route path="rate" element={<RateMaster />} />
      <Route path="discount" element={<DiscountMaster />} />
      <Route path="other" element={<OtherMaster />} />
      <Route path="opening-balance" element={<OpeningBalance />} />
      <Route path="tds" element={<TDS />} />
      <Route path="currency" element={<Currency />} /> */}
    </Routes>
  );
};
export default MasterRoutes;