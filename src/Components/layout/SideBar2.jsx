import React from "react";
import { FaKeyboard } from "react-icons/fa";

const SideBar2 = () => {
  const shortcuts = [
    { name: "SALE BILL", shortcut: "Alt + N" },
    { name: "SALE BILL LIST", shortcut: "Alt + M" },
    { name: "PURCHASE BILL", shortcut: "Alt + P" },
    { name: "ITEM LIST", shortcut: "Alt + I" },
    { name: "LEDGER LIST", shortcut: "Alt + L" },
    { name: "PARTY WISE OUTSTANDING", shortcut: "Alt + O" },
    { name: "RE-ORDER", shortcut: "Ctrl + F1" },
    { name: "RECEIPT", shortcut: "Alt + R" },
    { name: "PAYMENT", shortcut: "Ctrl + F2" },
    { name: "CASH A/C AND BANK A/C", shortcut: "Alt + B" },
    { name: "SALE BILL CHALLAN", shortcut: "Alt + C" },
    { name: "STOCK ISSUE", shortcut: "Alt + K" },
    { name: "STOCK RECEIVE", shortcut: "Alt + U" },
    { name: "BREAKAGE/EXP RECEIVE", shortcut: "Alt + X" },
    { name: "COUNTER SALE", shortcut: "Alt + S" },
    { name: "PURCHASE RETURN", shortcut: "Alt + T" },
    { name: "SALE RETURN", shortcut: "Alt + Y" },
    { name: "EXPENSE ENTRY", shortcut: "Alt + E" },
  ];
  return (
    <div className="h-full bg-[#f0f6f7] flex flex-col rounded-lg">
      <div className="bg-gray-200 px-4 py-3 border-b border-gray-300 flex items-center gap-2 shrink-0">
        <FaKeyboard size={18} className="text-gray-700" />
        <h2 className="text-base font-bold text-gray-800">Shortcut Keys</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {shortcuts.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-xs font-semibold text-gray-700 leading-tight">
                  {item.name}
                </h3>
              </div>
              <div className="flex shrink-0">
                <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-mono px-2 py-1 rounded border border-blue-200">
                  {item.shortcut}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-3 bg-gray-200 border-t border-gray-300 text-center flex shrink-0">
        <p className="text-xs text-gray-600">
          Press <kbd className="px-1.5 py-0.5 bg-white rounded border">F1</kbd>{" "}
          for help
        </p>
      </div>
    </div>
  );
};

export default SideBar2;
