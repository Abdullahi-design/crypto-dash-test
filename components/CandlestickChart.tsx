"use client";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const CandlestickChart = () => {
  return (
    <div className="bg-[#20252B] rounded-lg p-4">
      <div className="h-[35rem] w-full">
        <AdvancedRealTimeChart
          symbol="BTCUSDT"
          theme="dark"
          autosize
          hide_top_toolbar={false}  // Hide the top toolbar (including tabs)
          hide_side_toolbar={true} // Optionally hide the side toolbar
        />
      </div>
    </div>
  );
};

export default CandlestickChart;
