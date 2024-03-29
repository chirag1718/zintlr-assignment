import React from "react";
import TotalConsumers from "./ConsumerOverviewComponents/TotalConsumers";
import TotalEarnings from "./ConsumerOverviewComponents/TotalEarnings";
import CashWallet from "./ConsumerOverviewComponents/CashWallet";
import FloatWallet from "./ConsumerOverviewComponents/FloatWallet";
import BullionWallet from "./ConsumerOverviewComponents/BullionWallet";
import Revenue from "./ConsumerOverviewComponents/Revenue";
import Transactions from "./ConsumerOverviewComponents/Transactions";
import ConsumerAnalysis from "./ConsumerOverviewComponents/ConsumerAnalysis";
const ConsumerOverviewGrid = () => {
  return (
    <div className="flex flex-col gap-3 2xl:grid 2xl:gap-[10px] 2xl:grid-cols-2 h w-full  text-black text-xl">
      <div className="col-start-1 col-end-3 row-span-1 min-h-[124px] overflow-hidden">
        <TotalConsumers />
      </div>
      <div className="col-start-3 col-end-4 row-span-5 2xl:min-h-[455px] md:min-w-[444px]">
        <Revenue />
      </div>
      <div className="col-start-1 row-span-2 2xl:min-h-[132px] md:min-w-[423px]">
        <TotalEarnings />
      </div>
      <div className="col-start-1 row-span-1  2xl:min-h-[88px] md:min-w-[423px]">
        <CashWallet />
      </div>
      <div className="col-start-2 row-span-1 row-start-2 2xl:min-h-[88px] md:min-w-[423px]">
        <FloatWallet />
      </div>
      <div className="col-start-2 row-span-2 row-start-3 2xl:min-h-[132px] md:min-w-[423px]">
        <BullionWallet />
      </div>
      <div className="col-start-1 col-end-3 row-span-7 2xl:min-h-[540px] ">
        <ConsumerAnalysis />
      </div>
      <div className="col-start-3 col-end-4 row-span-6 2xl:min-h-[455px] 2xl:min-w-[444px]">
        <Transactions />
      </div>
    </div>
  );
};

export default ConsumerOverviewGrid;
