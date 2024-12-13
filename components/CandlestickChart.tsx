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
          // hide_top_toolbar={false}
          // hide_side_toolbar={true}
          // save_image={false}
          // allow_symbol_change={false}
          // backgroundColor="rgba(32, 37, 43, 1)"
        />
      </div>
    </div>
  );
};

export default CandlestickChart;
