import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDrawerStore } from "@/store/drawer";
import Image from "next/image";
const SecondaryDrawer = () => {
  const { showSecondaryDrawer, toggleSecondaryDrawer } = useDrawerStore(
    (state) => ({
      showSecondaryDrawer: state.showSecondaryDrawer,
      toggleSecondaryDrawer: state.toggleSecondaryDrawer,
    })
  );
  return (
    <AnimatePresence key="secondary">
      {showSecondaryDrawer && (
        <motion.div
          initial={{ width: "0px" }}
          animate={{ width: "559px" }}
          transition={{ delay: 0.2, type: "spring", damping: 17 }}
          exit={{ width: "0px" }}
          className="flex flex-col px-6 pt-3 h-full w-auto min-w-[559px] bg-white"
        >
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-start gap-[10px]">
              <Image
                src="/assets/general-svg/backArrow.svg"
                width={28}
                height={28}
                alt="back arrow"
                className="cursor-pointer"
                onClick={toggleSecondaryDrawer}
              />
              <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer bg-light-purple">
                <Image
                  src="/assets/consumerOverview/moneybag.svg"
                  width={18}
                  height={18}
                  alt="cash wallet icon"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <p className="text-lg font-normal text-text-light-black">
                  TruCard Cash Wallet
                </p>
                <p
                  className="flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer text-text-dark-blue"
                  onClick={toggleSecondaryDrawer}
                >
                  Wallet History
                  <motion.span
                    animate={{ rotate: showSecondaryDrawer ? 180 : 0 }}
                  >
                    <Image
                      src="/assets/general-svg/cheveronRight.svg"
                      width={8}
                      height={8}
                      alt="cheveron right"
                    />
                  </motion.span>
                </p>
              </div>
            </div>
            <p className="text-[28px] font-medium text-text-light-black">
              ₹1,35,342
            </p>
          </div>
          <div className="h-full w-full overflow-y-auto">
            <p>Transaction History</p>
            <div className="flex flex-col items-start justify-normal gap-2 h-3/4 w-full overflow-y-auto noScroll border-black">
              {/* transaction */}
              {iteration.map((item) => {
                return (
                  <div
                    key={item}
                    className="min-h-[84px] w-full border rounded"
                  >
                    <div className="flex items-center justify-between w-full px-8">
                      {/* transaction details */}
                      <div className="*:text-text-light-black">
                        <p className="text-base font-medium">Money added</p>
                        <p className="text-xs font-medium">
                          Transaction ID:{" "}
                          <span className="font-normal">134676543223456</span>
                        </p>
                        <p className="text-xs">Thu Apr 29 17:57:47 IST 2021</p>
                      </div>
                      {/* credited amount */}
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-xl font-semibold text-text-green">
                          + ₹7,390.00
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          {/* status */}
                          <div
                            className={`flex items-center justify-center h-6 w-20 rounded-full bg-bg-green-light text-text-filter-green`}
                          >
                            <p className="text-sm font-medium">Success</p>
                          </div>
                          {/* receipt icon */}
                          <Image
                            src="/assets/general-svg/receipt.svg"
                            width={16}
                            height={16}
                            alt="receipt icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecondaryDrawer;

const iteration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
