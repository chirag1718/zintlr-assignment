import Image from "next/image";
import React from "react";

const BullionWallet = () => {
  return (
    <div className="flex items-center justify-between py-1 px-5 h-full w-full border rounded-md bg-light-peach">
      <div className="flex items-center justify-start gap-[10px]">
        <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer bg-white">
          <Image
            src="/assets/consumerOverview/wallet.svg"
            width={18}
            height={18}
            alt="cash wallet icon"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="hidden md:block text-base text-text-light-black">
            Overall Bulllion Wallet
          </p>
          <p className="hidden md:flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer text-text-dark-blue">
            Wallet History
            <span>
              <Image
                src="/assets/general-svg/cheveronRight.svg"
                width={8}
                height={8}
                alt="cheveron right"
              />
            </span>
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center gap-7">
        <p className="flex items-center justify-center h-[25px] w-[59px] rounded-full text-sm font-bold cursor-pointer text-text-gold bg-light-gold">
          Gold
        </p>
        <p className="flex items-center justify-center h-[25px] w-[59px] rounded-full text-sm font-bold cursor-pointer text-text-silver bg-white">
          Silver
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-right cursor-pointer">
          <p className="hidden md:block text-sm font-bold">4,232 gm</p>
          <p className="flex items-center justify-center h-6 w-[98px] text-base font-bold rounded-full bg-white text-text-dark-blue">
            ₹9242.5
          </p>
        </div>
        <div className="text-right cursor-pointer">
          <p className="hidden md:block text-sm font-bold">134,232 gm</p>
          <p className="flex items-center justify-center h-6 w-[98px] text-base font-bold rounded-full bg-white text-text-dark-blue">
            ₹922.5
          </p>
        </div>
      </div>
    </div>
  );
};

export default BullionWallet;
