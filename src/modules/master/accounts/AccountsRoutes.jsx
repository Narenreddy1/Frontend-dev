import {Routes,Route, RouterContextProvider } from "react-router-dom"
import Ledger from "./Ledger";
import Sale from "./Sale";
import Group from "./Group";
import Purchase from "./Purchase";

const AccountsRoutes =()=>{
    return(
        <Routes>
            <Route path="ledger" element={<Ledger />} />
            <Route path="group" element={<Group />} />
            <Route path="sale" element={<Sale />} />
            <Route path="purchase" element={<Purchase />} />

        </Routes>
    )
}

export default AccountsRoutes;