import Image from "next/image";
import React from "react";

const CashWallet = () => {
  return (
    <div className="flex items-center justify-between px-5 h-full w-full border rounded-md bg-light-purple">
      <div className="flex items-center justify-start gap-[10px]">
        <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer bg-white">
          <Image
            src="/assets/consumerOverview/moneybag.svg"
            width={18}
            height={18}
            alt="cash wallet icon"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-base text-text-light-black">Overall Cash Wallet</p>
          <p className="flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer text-text-dark-blue">
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
      <p className="text-xl font-medium text-black">₹1,35,342</p>
    </div>
  );
};

export default CashWallet;
