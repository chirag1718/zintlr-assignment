import Image from "next/image";
import React from "react";
import { poppins } from "../layout";

const Navbar = () => {
  const navItems = [
    {
      icon: "/assets/navbar/moneyBag.svg",
      name: "money-bag",
      height: 22,
      width: 22,
    },
    {
      icon: "/assets/navbar/wallet.svg",
      name: "wallet",
      height: 24,
      width: 24,
    },
    {
      icon: "/assets/navbar/folder.svg",
      name: "folder-people",
      height: 25,
      width: 25,
    },
    {
      icon: "/assets/navbar/notifications.svg",
      name: "notifications",
      height: 20,
      width: 20,
    },
  ];
  return (
    <div
      className={`${poppins.className} flex items-center justify-between min-h-[85px] `}
    >
      {/* search */}
      <div className="flex items-center justify-between h-[50px] w-[374px] rounded-full overflow-hidden pr-[5px] bg-bg-primary-light-blue">
        <input
          type="text"
          placeholder="Search (Eg: Rewards)"
          className="h-full w-5/6 pl-6 rounded-l-full outline-none text-lg bg-inherit autofill:bg-inherit"
        />
        <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden cursor-pointer  bg-white">
          <Image
            src="/assets/navbar/search.svg"
            width={20}
            height={20}
            alt="search icon"
          />
        </div>
      </div>
      {/* nav item */}
      <div className="flex items-center justify-center gap-4">
        {/* navigating icons */}
        <div className="flex items-center justify-center gap-4">
          {navItems.map((item) => {
            return (
              <Image
                src={item.icon}
                key={item.name}
                height={item.height}
                width={item.width}
                alt={item.name}
                className="object-contain cursor-pointer drop-shadow-md"
              />
            );
          })}
        </div>
        {/* gold rate card */}
        <div className="flex items-center justify-center gap-4 h-[83px] min-w-[300px] rounded-xl border border-border-gray bg-white">
          {/* gold */}
          <div className="flex flex-col items-start justify-start gap-1 ">
            <p className="font-medium text-base cursor-pointer text-text-orange">
              Gold
            </p>
            {/* drop down */}
            <div className="flex items-center justify-between h-6 w-[63px] px-1 border border-border-gray rounded-sm cursor-pointer">
              <Image
                src="/assets/navbar/indiaFlag.svg"
                height={18}
                width={18}
                alt="indian flag"
              />
              <span className=" text-sm font-normal">IN</span>
              <Image
                src="/assets/navbar/arrowDown.svg"
                height={10}
                width={10}
                alt="cheveron down"
              />
            </div>
          </div>
          {/* graph */}
          <div className="flex flex-col items-end gap-1">
            <Image
              src="/assets/navbar/graph.svg"
              height={19}
              width={64}
              alt="graph"
            />
            <span className="text-xs text-[#49E45F]">+0.34%</span>
          </div>
          {/* buy/sell */}
          <div className="flex flex-col gap-1 !font-poppins">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-xs  font-medium">Buy: ₹7.390.00</span>
              <Image
                src="/assets/navbar/risingArrowGreen.svg"
                height={16}
                width={17}
                alt="rising arrow"
              />
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-xs  font-medium">Sell: ₹7.390.00</span>
              <Image
                src="/assets/navbar/risingArrowGreen.svg"
                height={16}
                width={17}
                alt="rising arrow"
              />
            </div>
          </div>
        </div>
        {/* profile */}
        <div className="flex items-center justify-center gap-3 h-[85px] min-w-[130px] rounded-lg relative bg-bg-primary-light-blue">
          {/* profile picture*/}
          <Image
            src="/assets/navbar/profile.svg"
            width={0}
            height={0}
            sizes="100%"
            alt="profile ring"
            className="min-h-[65px] min-w-[65px] cursor-pointer"
          />
          <div className="cursor-pointer">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 1L6.5 7L1 1"
                stroke="#313945"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
