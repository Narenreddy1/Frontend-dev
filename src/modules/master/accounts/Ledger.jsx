import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const initialForm = {
  partyName: "",
  accountGroup: "Sundry Debtors",
  station: "",
  mailTo: "",
  address: "",
  country: "India",
  state: "Delhi",
  city: "",
  pincode: "",
  currency: "",
  parentLedger: "",
  balancingMethod: "Bill By Bill",
  openingBalanceCurrency: "₹",
  openingBalanceAmount: "",
  openingBalanceType: "Dr",
  creditDays: "0",
  phoneCode: "+91",
  phoneNumber: "",
  mobileCode: "+91",
  mobileNumber: "",
  whatsappCode: "+91",
  whatsappNumber: "",
  ledgerType: "Unregistered",
  tdsApplicable: "No",
  panNo: "",
};

const TABS = [
  "GST/Tax Details",
  "Licence Info",
  "Contact Info",
  "Bank Details",
  "Others",
];

const Field = ({ label, required, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-slate-600">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {children}
  </div>
);

const Tab = ({ label, active }) => (
  <div
    className={`rounded-t-md border border-b-0 px-4 py-2 text-sm font-semibold transition-colors ${
      active
        ? "bg-white text-slate-900 border-slate-200"
        : "bg-slate-100 text-slate-500 border-slate-200"
    }`}
  >
    {label}
  </div>
);

const SectionCard = ({ title, children }) => (
  <section className="relative rounded-xl border border-slate-200 bg-white/90 p-4 sm:p-5">
    <span className="absolute -top-3 left-4 bg-white px-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
      {title}
    </span>
    <div className="pt-2">{children}</div>
  </section>
);

function Ledger() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });
  const navigate = useNavigate();

  const handleChange = (field) => (event) => {
    const value = event?.target?.value ?? "";
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetStatus = () =>
    setStatus((prev) => ({ ...prev, error: "", success: "" }));

  const handleSubmit = async () => {
    if (!formData.partyName.trim() || !formData.mobileNumber.trim()) {
      setStatus((prev) => ({
        ...prev,
        error: "Party Name and Mobile No. 1 are required.",
        success: "",
      }));
      return;
    }

    resetStatus();
    setStatus((prev) => ({ ...prev, loading: true }));
    try {
      await api.post("/parties", formData);
      setStatus({ loading: false, error: "", success: "Party created." });
      setTimeout(() => navigate("/master/accounts/ledger"), 600);
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error:
          error?.response?.data?.message ||
          "Unable to save party. Please try again.",
      });
    }
  };

  const handleClear = () => {
    resetStatus();
    setFormData(initialForm);
  };

  const renderPhoneInput = (codeKey, numberKey, required = false) => (
    <div className="flex gap-2 flex-wrap">
      <input
        className="h-10 w-16 rounded-md border border-slate-300 px-3 text-sm text-slate-700"
        value={formData[codeKey]}
        onChange={handleChange(codeKey)}
      />
      <input
        className="flex-1 min-w-[120px] rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
        value={formData[numberKey]}
        onChange={handleChange(numberKey)}
        required={required}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-200 py-3 px-3 sm:px-8">
      <div className="mx-auto flex h-[calc(100vh-4rem)] max-h-[860px] w-full max-w-6xl flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-100">
        <header className="shrink-0 border-b border-slate-200 px-5 py-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Create Party
              </h2>
              <p className="text-sm text-slate-500">
                Keep this window compact & responsive on every screen.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Back
            </button>
          </div>
          {status.error && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
              {status.error}
            </div>
          )}
          {status.success && (
            <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              {status.success}
            </div>
          )}
        </header>

        <section className="flex-1 overflow-y-auto px-5 py-4 sm:px-8 space-y-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <SectionCard title="General Info">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Party Name" required>
                  <input
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.partyName}
                    onChange={handleChange("partyName")}
                  />
                </Field>
                <Field label="Account Group" required>
                  <select
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.accountGroup}
                    onChange={handleChange("accountGroup")}
                  >
                    <option value="Sundry Debtors">Sundry Debtors</option>
                    <option value="Sundry Creditors">Sundry Creditors</option>
                  </select>
                </Field>
                <Field label="Station" required>
                  <input
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    placeholder="Search"
                    value={formData.station}
                    onChange={handleChange("station")}
                  />
                </Field>
                <Field label="Mail To">
                  <input
                    type="email"
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.mailTo}
                    onChange={handleChange("mailTo")}
                  />
                </Field>
              </div>
              <Field label="Address">
                <textarea
                  className="min-h-[90px] rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                  value={formData.address}
                  onChange={handleChange("address")}
                />
              </Field>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Country" required>
                  <select
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.country}
                    onChange={handleChange("country")}
                  >
                    <option value="India">India</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Bhutan">Bhutan</option>
                  </select>
                </Field>
                <Field label="State" required>
                  <select
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.state}
                    onChange={handleChange("state")}
                  >
                    <option value="Delhi">Delhi</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                  </select>
                </Field>
                <Field label="City">
                  <input
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.city}
                    onChange={handleChange("city")}
                  />
                </Field>
                <Field label="Pincode">
                  <input
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.pincode}
                    onChange={handleChange("pincode")}
                  />
                </Field>
                <Field label="Currency">
                  <select
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.currency}
                    onChange={handleChange("currency")}
                  >
                    <option value="">Select Currency</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                </Field>
                <Field label="Parent Ledger">
                  <input
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    placeholder="Search"
                    value={formData.parentLedger}
                    onChange={handleChange("parentLedger")}
                  />
                </Field>
              </div>
            </SectionCard>

            <div className="space-y-5">
              <SectionCard title="Balance">
                <Field label="Balancing Method">
                  <select
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.balancingMethod}
                    onChange={handleChange("balancingMethod")}
                  >
                    <option value="Bill By Bill">Bill By Bill</option>
                    <option value="On Account">On Account</option>
                  </select>
                </Field>
                <Field label="Opening Balance">
                  <div className="flex flex-wrap gap-2">
                    <select
                      className="h-10 w-16 rounded-md border border-slate-300 px-2 text-sm text-slate-700"
                      value={formData.openingBalanceCurrency}
                      onChange={handleChange("openingBalanceCurrency")}
                    >
                      <option value="₹">₹</option>
                      <option value="$">$</option>
                    </select>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="min-w-[120px] flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                      value={formData.openingBalanceAmount}
                      onChange={handleChange("openingBalanceAmount")}
                    />
                    <select
                      className="h-10 w-16 rounded-md border border-slate-300 px-2 text-sm text-slate-700"
                      value={formData.openingBalanceType}
                      onChange={handleChange("openingBalanceType")}
                    >
                      <option value="Dr">Dr</option>
                      <option value="Cr">Cr</option>
                    </select>
                  </div>
                </Field>
                <Field label="Credit Days">
                  <input
                    type="number"
                    min="0"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.creditDays}
                    onChange={handleChange("creditDays")}
                  />
                </Field>
              </SectionCard>

              <SectionCard title="Contact Numbers">
                <Field label="Phone No. (Office)">
                  {renderPhoneInput("phoneCode", "phoneNumber")}
                </Field>
                <Field label="Mobile No. 1" required>
                  {renderPhoneInput("mobileCode", "mobileNumber", true)}
                </Field>
                <Field label="WhatsApp No.">
                  <div className="flex flex-wrap gap-2">
                    {renderPhoneInput("whatsappCode", "whatsappNumber")}
                    <button
                      type="button"
                      className="h-10 w-10 rounded-md border border-slate-300 text-lg font-bold text-slate-700 hover:bg-slate-50"
                    >
                      +
                    </button>
                  </div>
                </Field>
              </SectionCard>
            </div>
          </div>

          <SectionCard title="GST / Licence / Others">
            <div className="flex flex-wrap gap-2 border-b border-slate-200 px-4 py-3">
              {TABS.map((tab, index) => (
                <Tab key={tab} label={tab} active={index === 0} />
              ))}
            </div>
            <div className="px-4 pb-2 pt-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Field label="Ledger Type">
                  <select
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.ledgerType}
                    onChange={handleChange("ledgerType")}
                  >
                    <option value="Unregistered">Unregistered</option>
                    <option value="Registered">Registered</option>
                  </select>
                </Field>
                <Field label="TDS Applicable">
                  <select
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.tdsApplicable}
                    onChange={handleChange("tdsApplicable")}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </Field>
                <Field label="PAN No.">
                  <input
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
                    value={formData.panNo}
                    onChange={handleChange("panNo")}
                  />
                </Field>
              </div>
            </div>
          </SectionCard>
        </section>

        <footer className="shrink-0 border-t border-slate-200 px-5 py-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              F4 Switch Tab
            </button>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                GST Verification
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status.loading}
                className="rounded-md bg-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-400"
              >
                {status.loading ? "Saving..." : "F10 Save"}
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                F9 Clear
              </button>
              <button
                type="button"
                onClick={() => navigate("/master/accounts/ledger")}
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Esc Close
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Ledger;
