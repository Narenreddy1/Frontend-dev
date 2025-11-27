import { Routes, Route, Navigate } from "react-router-dom";
import Ledger from "./Ledger";
import Sale from "./Sale";
import Group from "./Group";
import Purchase from "./Purchase";
import ViewParties from "./ViewParties";

const AccountsRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="ledger" replace />} />
      <Route path="ledger" element={<ViewParties />} />
      <Route path="ledger/new" element={<Ledger />} />
      <Route path="group" element={<Group />} />
      <Route path="sale" element={<Sale />} />
      <Route path="purchase" element={<Purchase />} />
      <Route path="*" element={<Navigate to="ledger" replace />} />
    </Routes>
  );
};

export default AccountsRoutes;