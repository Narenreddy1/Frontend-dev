import React, { useState } from "react";

const AccountsMaster = () => {
  const [partyName, setPartyName] = useState("");
  const [gstNumber, setGstNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ partyName, gstNumber });
    // Call API here
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Accounts Master</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Party Name"
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="GST Number"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AccountsMaster;
