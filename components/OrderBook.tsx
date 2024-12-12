"use client";

import { useState } from "react";
import { Order1, Order2, Order3 } from "@/utils/icons";
import Image from "next/image";
import BorderlessTable from "./BorderlessTable";

export const OrderBook = () => {
  const [activeTab, setActiveTab] = useState("Order Book");

  return (
    <div className="bg-[#20252B] rounded-xl p-4">
      {/* Toggle Section */}
      <section className="flex justify-between p-1 bg-[#12171D] rounded-xl">
        <h1
          onClick={() => setActiveTab("Order Book")}
          className={`p-1 px-4 text-sm rounded-xl cursor-pointer ${
            activeTab === "Order Book" ? "bg-[#20252B]" : "text-gray-500"
          }`}
        >
          Order Book
        </h1>
        <h1
          onClick={() => setActiveTab("Recent Trades")}
          className={`p-1 px-4 text-sm rounded-xl cursor-pointer ${
            activeTab === "Recent Trades" ? "bg-[#20252B]" : "text-gray-500"
          }`}
        >
          Recent Trades
        </h1>
      </section>

      {/* Order Icons and Dropdown */}
      {activeTab === "Order Book" && (
        <section className="flex justify-between mt-3">
          <div className="flex">
            <Image width={40} height={40} src={Order1} alt="Order1" />
            <Image width={40} height={40} src={Order2} alt="Order2" />
            <Image width={40} height={40} src={Order3} alt="Order3" />
          </div>
          <select
            name="order-count"
            id="order-count"
            className="bg-[#353945] cursor-pointer h-10 outline-none rounded-xl w-[30%]"
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={10 - i}>
                {10 - i}
              </option>
            ))}
          </select>
        </section>
      )}

      {/* Dynamic Table Section */}
      <section className="mt-3">
        {activeTab === "Order Book" && <BorderlessTable />}
        {activeTab === "Recent Trades" && (
          <div className="text-center text-gray-400">Recent Trades Data</div>
        )}
      </section>
    </div>
  );
};

export default OrderBook;