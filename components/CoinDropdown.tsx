"use client";

import { BTCUSDT, DropDown } from "@/utils/icons";
import Image from "next/image";
import { useState } from "react";

interface Market {
  id: number;
  symbol: string;
  price: string;
  change: string;
  icon: any;
}

interface DropdownProps {
  markets: Market[];
  selectedMarket: Market;
  onSelect: (market: Market) => void;
}

export const CoinDropdown = ({ markets, selectedMarket, onSelect }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMarketSelect = (market: Market) => {
    onSelect(market); // Notify parent about selection
    setIsDropdownOpen(false); // Close the dropdown
    setSearchQuery(""); // Reset search
  };

  const filteredMarkets = markets.filter((market) =>
    market.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
        <section
            className="bg-[#20252B] rounded-lg p-6 flex justify-between items-center"
            
        >
            <div className="space-x-3 flex cursor-pointer" onClick={toggleDropdown}>
                <div className="flex text-xl font-semibold">
                    <Image width={50} height={50} src={BTCUSDT} alt="BTCUSDT" />
                    {selectedMarket.symbol}
                </div>
                <Image width={10} height={10} src={DropDown} alt="DropDown" />
            </div>
            <h1 className="text-sm">{selectedMarket.price}</h1>
      </section>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 bg-[#20252B] rounded-lg shadow-lg p-4 w-80 z-10">
          <h3 className="text-lg font-semibold mb-4">Select Market</h3>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#32383F] text-sm text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E464D]"
            />
          </div>
          <div className="space-y-3">
            {filteredMarkets.length > 0 ? (
              filteredMarkets.map((market) => (
                <div
                  key={market.id}
                  onClick={() => handleMarketSelect(market)}
                  className="flex items-center justify-between bg-[#32383F] p-3 rounded-lg cursor-pointer hover:bg-[#3E464D]"
                >
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{market.icon}</div>
                    <div className="text-sm">{market.symbol}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm text-gray-300 mr-3">{market.price}</div>
                    <div
                      className={`text-sm ${
                        market.change.startsWith("-") ? "text-red-400" : "text-green-400"
                      }`}
                    >
                      {market.change}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};