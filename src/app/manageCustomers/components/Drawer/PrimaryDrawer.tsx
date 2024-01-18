import Button from "@/app/utils/Button";
import Image from "next/image";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { motion } from "framer-motion";
import { useDrawerStore } from "@/store/drawer";
import SecondaryDrawer from "./SecondaryDrawer";
const PrimaryDrawer = () => {
  // data for charts
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Activity Level",
        data: [400, 100, 500, 150, 333, 800, 1000],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const barData = {
    labels: [
      "Buy",
      "Sell",
      "Transfer",
      "Swap",
      "Added to wallet",
      "Widthraw from wallet",
      "Loan",
    ],
    datasets: [
      {
        label: "Activity Level",
        data: [25, 35, 45, 55, 100, 150, 55],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const { showSecondaryDrawer, toggleSecondaryDrawer } = useDrawerStore(
    (state) => ({
      showSecondaryDrawer: state.showSecondaryDrawer,
      toggleSecondaryDrawer: state.toggleSecondaryDrawer,
    })
  );
  // Draweer variant
  const DrawerVariant = {
    initial: {
      x: "100%", // Move the drawer to the right initially
    },
    animate: {
      x: "0%", // Move the drawer to the center of the screen
      transition: {
        damping: 17,
        ease: "easeInOut",
        delay: 0.2,
        type: "spring",
      },
      width: showSecondaryDrawer ? 1339 : 780,
    },
    exit: {
      x: "100%", // Move the drawer to the right when exiting
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      // initial={{ translateX: 800 }}
      // transition={{
      //   damping: 17,
      //   ease: "easeInOut",
      //   delay: 0.2,
      //   type: "spring",
      // }}
      // animate={{ translateX: 0 }}
      // exit={{ translateX: 800 }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={DrawerVariant}
      className="absolute h-screen max-w-[1339px] origin-right cursor-default bg-scroll bg-bg-blue-gray shadow-2xl"
    >
      {/* consumer name and details */}
      <div className="flex items-center justify-between h-[90px] px-6 w-full border-b bg-white">
        <div className="flex items-center gap-5">
          {/* user name andd acc type */}
          <div className="flex flex-col items-start justify-normal">
            <p className="text-sm font-medium">Raghuvendra Raga</p>
            <p className="text-sm font-medium">Business</p>
          </div>
          {/* progress */}
          <div className="flex flex-col items-center justify-center h-[54px] w-[54px] rounded bg-bg-progress">
            <Image
              src="/assets/general-svg/progress.svg"
              width={20}
              height={20}
              alt="user progress"
            />
            <p>245</p>
          </div>
          {/* status and verify */}
          <div className="flex flex-col items-start justify-normal gap-1">
            <div
              className={`flex items-center justify-center h-6 w-28 rounded-full bg-bg-red-light text-text-filter-red`}
            >
              <p className="text-xs font-medium">KYC Pending</p>
            </div>
            <button className="h-8 w-20 rounded bg-black text-white">
              <p className="text-base font-semibold">Verify</p>
            </button>
          </div>
        </div>
        {/* date and time */}
        <div className=" text-right *:text-sm *:font-normal text-black">
          <p>Initiated</p>
          <p>Thu Apr 29</p>
          <p>14:27:47 IST 2021</p>
        </div>
      </div>

      <div className="noScroll flex gap-1 h-[calc(100%-90px)] overflow-auto transition-all duration-100">
        <div className="noScroll flex flex-col items-center justify-normal gap-1 h-[calc(100%)] w-auto min-w-[780px] overflow-y-scroll">
          {/* //! active tickets */}
          <div className="flex items-center justify-between min-h-[51px] px-7 w-full bg-bg-mint">
            <div className="flex items-center gap-1">
              <span className="flex items-center justify-center h-5 w-5 rounded-full text-white bg-black">
                !
              </span>
              <span className="text-lg font-normal">2 Active Ticket(s)</span>
            </div>
            {/* //! open tickets btn */}
            <Button
              text="View Ticket History"
              icon={
                <Image
                  src="/assets/general-svg/smallTicket.svg"
                  width={13}
                  height={13}
                  alt="ticket"
                />
              }
              className="h-[31px text-sm font-semibold"
            />
          </div>
          {/* //! start chat */}
          <div className="flex items-center min-h-[95px] w-full bg-white">
            {/* field executive and associates */}
            <div className="flex items-start justify-center w-full gap-12">
              {/* field exe name */}
              <p className="flex flex-col items-start justify-normal gap-2 *:text-text-light-black">
                <span className="text-xs">B2B Field Executive</span>
                <span className="text-sm ">Arun Jha</span>
              </p>
              <Image
                src="/assets/consumerOverview/arrowBlue.svg"
                width={22}
                height={0}
                alt=""
                className="mt-2"
              />
              {/* assoc  name */}
              <p className="flex flex-col items-start justify-normal gap-2 *:text-text-light-black">
                <span className="text-xs">Associate</span>
                <span className="text-sm ">Anika Singh</span>
              </p>
              <Image
                src="/assets/consumerOverview/arrowBlue.svg"
                width={22}
                height={0}
                alt=""
                className="mt-2"
              />
              {/* consumer */}
              <p className="flex flex-col items-start justify-normal gap-2 *:text-text-light-black">
                <span className="text-xs">Consumer</span>
                <span className="text-sm ">Raguvendra</span>
              </p>
            </div>
            <div className="flex flex-col items-start justify-normal  px-5 h-full min-w-[200px]  bg-icon-light-pink">
              <p className="text-sm text-[#FF629A]">Start a chat with</p>
              <p className="text-base text-text-light-black">Raguvendra</p>
              <Button
                iconPosition="before"
                text="Chat"
                icon={
                  <Image
                    src="/assets/general-svg/chat.svg"
                    height={12}
                    width={12}
                    alt="chat icon"
                    className="font-semibold"
                  />
                }
              />
            </div>
          </div>
          {/* //! Last transaction */}
          <div className="min-h-[123px] w-full bg-white">
            {/* header */}
            <div className="flex items-center justify-between w-full py-3 px-8 border-b">
              <p className="text-lg font-normal text-text-light-black">
                Last Transaction
              </p>
              <p className="flex items-center justify-center gap-2 text-text-dark-blue">
                <span className="text-sm font-semibold">
                  View All Transactions
                </span>
                <Image
                  src="/assets/general-svg/cheveronRight.svg"
                  width={6}
                  height={6}
                  alt="cheveron right"
                />
              </p>
            </div>
            {/* transaction details */}
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
          {/* //! TruCard cash wallet */}
          <div className="flex items-center justify-between w-full min-h-[72px] px-6 py-3 bg-white">
            <div className="flex items-center justify-start gap-[10px]">
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
            <p className="text-[28px] font-medium text-text-light-black">
              ₹1,35,342
            </p>
          </div>
          {/* //! TruCard Bullion wallet */}
          <div className="flex items-center justify-between w-full min-h-[72px] px-6 py-3 bg-white">
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
                <p className="text-base text-text-light-black">
                  Overall Bulllion Wallet
                </p>
                <p
                  className="flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer text-text-dark-blue"
                  onClick={toggleSecondaryDrawer}
                >
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
            <div className="flex flex-col items-start justify-normal">
              {/* gold */}
              <div className="flex items-center justify-between w-full gap-6">
                <p className="flex items-center justify-center h-[25px] w-[59px] rounded-full text-sm font-bold cursor-pointer text-text-gold bg-light-gold">
                  Gold
                </p>
                <p className="text-lg font-medium">4,232 gm</p>
                <p className="flex items-center justify-center h-6 w-[98px] text-base font-semibold rounded-full bg-bg-blue-light text-text-dark-blue">
                  ₹922.5
                </p>
              </div>
              {/* silver */}
              <div className="flex items-center justify-between w-full gap-6">
                <p className="flex items-center justify-center h-[25px] w-[59px] rounded-full text-sm font-bold cursor-pointer text-text-silver bg-bg-silver">
                  Silver
                </p>
                <p className="text-lg font-medium">134,232 gm</p>
                <p className="flex items-center justify-center h-6 w-[98px] text-base font-semibold rounded-full bg-bg-blue-light text-text-dark-blue">
                  ₹922.5
                </p>
                {/* <p className="flex items-center justify-center h-[25px] w-[59px] rounded-full text-sm font-bold cursor-pointer text-text-silver bg-white">
                    Silver
                  </p> */}
              </div>
            </div>
          </div>
          {/* //! Float wallet */}
          <div className="flex items-center justify-between w-full min-h-[72px] px-6 py-3 bg-white">
            <div className="flex items-center justify-start gap-[10px]">
              <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer bg-light-green">
                <Image
                  src="/assets/consumerOverview/cash.svg"
                  width={21}
                  height={21}
                  alt="cash wallet icon"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <p className="text-base text-text-light-black">
                  Overall Float Wallet
                </p>
                <p
                  className="flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer text-text-dark-blue"
                  onClick={toggleSecondaryDrawer}
                >
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
            <p className="text-[28px] font-medium text-text-light-black">
              ₹1,35,342
            </p>
          </div>
          {/* //! Lending */}
          <div className="flex items-center justify-between w-full min-h-[72px] px-6 py-3 bg-white">
            <div className="flex items-center justify-start gap-[10px]">
              <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer bg-icon-light-pink">
                <Image
                  src="/assets/general-svg/lending.svg"
                  width={29}
                  height={29}
                  alt="cash wallet icon"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <p className="text-base text-text-light-black">Lending</p>
                <p className="flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer text-text-dark-blue">
                  Active Loan
                  <span>
                    <Image
                      src="/assets/general-svg/cheveronRight.svg"
                      width={8}
                      height={8}
                      alt="cheveron right"
                      className="rotate-90"
                    />
                  </span>
                </p>
              </div>
            </div>
            {/* total loan */}
            <p className="flex items-baseline justify-center gap-2 text-text-light-black">
              <span className="text-sm font-normal">Overall Loan Amount</span>
              <span className="text-[22px] font-medium">₹1,35,342</span>
            </p>
            {/* next emi */}
            <p className="flex items-baseline justify-center gap-2 text-text-light-black">
              <span className="text-sm font-normal">Net Next EMI Amount</span>
              <span className="text-[22px] font-medium">₹35,342</span>
            </p>
          </div>
          {/* //! Activity Overview */}
          <div className="flex flex-col items-start justify-normal gap-3 min-h-[394px] w-full px-7 py-[14px] bg-white">
            {/* header */}
            <div className="flex items-center justify-normal gap-2">
              <div className="flex items-center justify-center rounded-full h-12 w-12 bg-icon-light-blue">
                <Image
                  src="/assets/general-svg/lineChart.svg"
                  width={26}
                  height={26}
                  alt="cash wallet icon"
                />
              </div>
              <p className="text-lg font-normal text-text-light-black">
                Activity Overview
              </p>
            </div>
            {/* buttons */}
            <div className="flex items-center justify-start gap-2 w-full *:text-xs">
              <Button text="Past Week" />
              <Button text="Past Month" light={true} />
              <Button text="Past Year" light={true} />
              <Button text="All time" light={true} />
            </div>
            {/* charts */}
            <div className="flex items-center justify-between w-full mt-8">
              <Line
                data={lineData}
                // width={380}
                // height={206}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      beginAtZero: true,
                      max: 1000,
                      ticks: {
                        stepSize: 200,
                      },
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      border: {
                        display: true,
                        dash: [6, 8],
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                className="h-[206px] max-w-[380px]"
              />
              <Bar
                data={barData}
                // width={280}
                // height={398}
                options={{
                  maintainAspectRatio: false,
                  indexAxis: "y",
                  scales: {
                    x: {
                      beginAtZero: true,
                      max: 200,
                      ticks: {
                        stepSize: 50,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                className="max-h-[398px] max-w-[330px]"
              />
            </div>
          </div>
          {/* //! Referal */}
          <div className="flex items-center justify-between w-full min-h-[72px] px-6 py-3 bg-white">
            <div className="flex items-center justify-start gap-[10px]">
              <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer bg-light-green">
                <Image
                  src="/assets/consumerOverview/cash.svg"
                  width={21}
                  height={21}
                  alt="cash wallet icon"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <p className="text-base text-text-light-black">Lending</p>
                <p className="flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer text-text-dark-blue">
                  Active Loan
                  <span>
                    <Image
                      src="/assets/general-svg/cheveronRight.svg"
                      width={8}
                      height={8}
                      alt="cheveron right"
                      className="rotate-90"
                    />
                  </span>
                </p>
              </div>
            </div>

            {/* next emi */}
            <p className="flex items-baseline justify-center gap-2 text-text-light-black">
              <span className="text-sm font-normal">Total Referrals Sent</span>
              <span className="text-[22px] font-medium">232</span>
            </p>
          </div>
          {/* //! Disable and Edit Consumer */}
          <div className="flex items-center justify-center gap-1 min-h-[72px] w-full ">
            {/* disable consumer */}
            <div className="flex items-center justify-between h-full w-full px-4 bg-white">
              <div className="flex items-center justify-normal gap-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer bg-icon-light-gray">
                  <Image
                    src="/assets/general-svg/disableUser.svg"
                    width={21}
                    height={21}
                    alt="diasble user icon"
                  />
                </div>
                <p className="text-base font-normal text-bg-disabled-gray">
                  Disable consumer
                </p>
              </div>
              {/* btn */}
              <button className="px-[10px] rounded text-sm font-semibold text-white bg-bg-btn-disabled">
                Disable
              </button>
            </div>
            {/* edit consumer */}
            <div className="flex items-center justify-between h-full w-full px-4 bg-white">
              <div className="flex items-center justify-normal gap-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer bg-">
                  <Image
                    src="/assets/general-svg/editUser.svg"
                    width={21}
                    height={21}
                    alt="edit user icon"
                  />
                </div>
                <p className="text-base font-normal text-bg-disabled-gray">
                  Edit consumer details
                </p>
              </div>
              {/* btn */}
              <button className="px-[10px] rounded text-sm text-black bg-bg-lime-green">
                Edit
              </button>
            </div>
          </div>
        </div>
        {showSecondaryDrawer && <SecondaryDrawer />}
      </div>
    </motion.div>
  );
};

export default PrimaryDrawer;
