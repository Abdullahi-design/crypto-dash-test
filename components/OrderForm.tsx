"use client";

import { useState } from "react";
import { FInput } from "./FInput";
import { FSelect } from "./FSelect";
import Image from "next/image";
import { EUR, GBP, InfoCircle, NGN, USD } from "@/utils/icons";
import { CurrencySelect } from "./CurrencyOption";

export const OrderForm = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [activeBreadcrumb, setActiveBreadcrumb] = useState("Limit");
  const [limitPrice, setLimitPrice] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");

  const options = [
    { label: "NGN", src: NGN },
    { label: "GBP", src: GBP },
    { label: "USD", src: USD },
    { label: "EUR", src: EUR },
  ];

  const handleLimitPriceChange = (value: number) => setLimitPrice(value);

  const handleAmountChange = (value: number) => setAmount(value);

  const handleOptionChange = (value: string) => setSelectedOption(value);

  return (
    <div className="bg-[#20252B] p-4 rounded-xl w-[300px]">
      {/* Buy/Sell Tabs */}
      <div className="flex justify-between p-1 bg-[#12171D] rounded-xl mb-4">
        <button
          onClick={() => setActiveTab("Buy")}
          className={`w-full p-2 text-center rounded ${
            activeTab === "Buy"
              ? "border-2 border-green-500 rounded-xl text-white"
              : "text-gray-500"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab("Sell")}
          className={`w-full p-2 text-center rounded ${
            activeTab === "Sell"
              ? "border-2 border-red-500 rounded-xl text-white"
              : "text-gray-500"
          }`}
        >
          Sell
        </button>
      </div>

      {/* Breadcrumbs */}
      <div className="flex justify-around mb-4">
        {["Limit", "Market", "Stop-Limit"].map((item) => (
          <button
            key={item}
            onClick={() => setActiveBreadcrumb(item)}
            className={`px-4 py-1 text-sm rounded ${
              activeBreadcrumb === item
                ? "bg-[#32383F] rounded-full text-white"
                : "text-gray-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <FInput title="Limit price" placeholder="0.00 USD" value={limitPrice} onChange={handleLimitPriceChange} />
        <FInput title="Amount" placeholder="0.00 USD" value={amount} onChange={handleAmountChange} />
        <FSelect
          title="Type"
          placeholder="Type"
          value={selectedOption}
          onChange={handleOptionChange}
          options={[
            { label: "Fill or kill", value: "Fill or kill" },
            { label: "Good till cancelled", value: "Good till cancelled" },
            { label: "Good till date", value: "Good till date" },
          ]}
        />
      </div>

      {/* Checkbox and Total */}
      <div className="flex items-center mt-4 space-x-2">
        <input type="checkbox" id="post-only" className="accent-blue-500" />
        <label htmlFor="post-only" className="text-gray-400 text-sm">
          Post Only
        </label>
        <Image width={15} height={15} src={InfoCircle} alt="InfoCircle" />
      </div>
      <div className="mt-2 flex justify-between text-gray-400 text-sm">
        Total: <span className="">0.00</span>
      </div>

      {/* Action Button */}
      <button
        className={`w-full mt-4 p-2 rounded-md text-white ${
          activeTab === "Buy"
            ? "bg-gradient-to-r from-blue-500 to-pink-500"
            : "bg-gradient-to-r from-red-500 to-orange-500"
        }`}
      >
        {activeTab} BTC
      </button>

      {/* Account Details */}
      <section className="mt-4 text-gray-400 text-sm border-t border-gray-600 p-2">
        <div className="flex justify-between items-center">
          <div>
            <h1>Total account value</h1>
            <big className="block text-white">0.00</big>
          </div>
          <CurrencySelect
            options={options}
            selected={selectedCurrency}
            onSelect={setSelectedCurrency}
          />
        </div>
        <div className="flex justify-between">
          <p className="py-2">
            <span className="block">Open Orders</span>
            <big className="block text-white">0.00</big>
          </p>
          <p className="py-2">
            <span className="block">Available</span>
            <big className="block text-white">0.00</big>
          </p>
        </div>
      </section>

      {/* Deposit Button */}
      <button className="w-fit mt-4 bg-[#2764FF] p-2 px-4 rounded-md text-white">
        Deposit
      </button>
    </div>
  );
};
