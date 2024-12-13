"use client";

import { useState } from "react";
import { CoinDropdown } from "./CoinDropdown";
import { BTCUSDT } from "@/utils/icons";


const markets = [
  { id: 1, symbol: "BTC/USDT", price: "$23,234.6", change: "+0.005%", icon: BTCUSDT },
  { id: 2, symbol: "ETH/USDT", price: "$1,234.5", change: "+0.003%", icon: "🔵" },
  { id: 3, symbol: "ADA/USDT", price: "$0.512", change: "-0.002%", icon: "🟢" },
  { id: 4, symbol: "BNB/USDT", price: "$320.00", change: "+0.012%", icon: "🟡" },
  { id: 5, symbol: "SOL/USDT", price: "$18.00", change: "-0.004%", icon: "🟣" },
];

export const Header = () => {
  const [selectedCoin, setSelectedCoin] = useState(markets[0]);

  return (
    <header className="m-2">
      <CoinDropdown
        markets={markets}
        selectedMarket={selectedCoin}
        onSelect={(market) => setSelectedCoin(market)}
      />
    </header>
  );
};