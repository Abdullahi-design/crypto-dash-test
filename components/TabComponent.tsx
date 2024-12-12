"use client";

import { useState } from "react";

export const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Open Orders");
  const tabs = ["Open Orders", "Positions", "Order History", "Trade History"];

  return (
    <div className="bg-[#20252B] rounded-xl p-6 mx-2">
      {/* Tabs */}
      <div className="flex justify-between w-fit p-1 bg-[#12171D] rounded-xl mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
              activeTab === tab
                ? "bg-[#32383F] text-white shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="text-center py-12">
        <h2 className="text-lg font-semibold">No Open {activeTab}</h2>
        <p className="text-sm text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
          nullam sit imperdiet pulvinar.
        </p>
      </div>
    </div>
  );
};