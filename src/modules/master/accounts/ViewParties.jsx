import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";

const columns = [
  { key: "partyName", label: "Party Name" },
  { key: "accountGroup", label: "Account Group" },
  { key: "mobileNumber", label: "Mobile No." },
  { key: "state", label: "State" },
  { key: "city", label: "City" },
  { key: "openingBalanceAmount", label: "Opening Balance" },
  { key: "createdAt", label: "Created" },
];

const ViewParties = () => {
  const [parties, setParties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const { data } = await api.get("/parties");
        setParties(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(
          err?.response?.data?.message || "Unable to load parties right now."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchParties();
  }, []);

  const renderCell = (party, key) => {
    if (key === "openingBalanceAmount") {
      return party.openingBalanceAmount
        ? `${party.openingBalanceCurrency || "₹"} ${party.openingBalanceAmount} ${
            party.openingBalanceType || ""
          }`
        : "-";
    }

    if (key === "createdAt") {
      return party.createdAt
        ? new Date(party.createdAt).toLocaleString()
        : "-";
    }

    return party[key] || "-";
  };

  return (
    <div className="min-h-screen bg-slate-200 py-3 px-3 sm:px-8">
      <div className="mx-auto flex h-[calc(100vh-4rem)] max-h-[860px] w-full max-w-6xl flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-100">
        <header className="shrink-0 border-b border-slate-200 px-5 py-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Ledger Parties
              </h2>
              <p className="text-sm text-slate-500">
                Review the parties added through Create Party window.
              </p>
            </div>
            <Link
              to="/master/accounts/ledger/new"
              className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              + New Party
            </Link>
          </div>
          {error && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
              {error}
            </div>
          )}
        </header>

        <section className="flex-1 overflow-y-auto px-5 py-4 sm:px-8">
          <div className="rounded-2xl border border-slate-100 bg-white shadow-inner">
            <div className="overflow-x-auto rounded-2xl">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white text-sm text-slate-700">
                  {loading ? (
                    <tr>
                      <td
                        colSpan={columns.length}
                        className="px-4 py-10 text-center text-slate-500"
                      >
                        Loading parties...
                      </td>
                    </tr>
                  ) : parties.length === 0 ? (
                    <tr>
                      <td
                        colSpan={columns.length}
                        className="px-4 py-12 text-center text-slate-500"
                      >
                        No parties created yet. Click “+ New Party” to get started.
                      </td>
                    </tr>
                  ) : (
                    parties.map((party) => (
                      <tr key={party.id} className="hover:bg-slate-50/80">
                        {columns.map((col) => (
                          <td key={col.key} className="px-4 py-3">
                            {renderCell(party, col.key)}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewParties;

