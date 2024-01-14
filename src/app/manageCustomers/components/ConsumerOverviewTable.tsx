import Button from "@/app/utils/Button";
import Image from "next/image";
import React from "react";
import ConsumerTable from "./ConsumerTable";

const ConsumerOverviewTable = () => {
  return (
    <div className="flex flex-col items-start justify-normal gap-2 h-full mt-5 ">
      <p className="text-lg font-semibold">Consumer Overview</p>
      <div className="flex items-center justify-between w-full">
        {/* search */}
        <div className="h-10 w-full border max-w-[396px] rounded font-nunito overflow-hidden relative border-border-gray">
          <input
            type="text"
            placeholder="Search Consumers"
            className="h-full w-full py-2 pl-[11px] pr-11 text-base font-medium outline-none placeholder:opacity-80"
          />
          <Image
            src="/assets/general-svg/search.svg"
            width={16}
            height={16}
            alt="search icon"
            className="absolute top-3 right-3 cursor-pointer"
          />
        </div>
        {/* filter */}
        <div className="flex items-center justify-center gap-1">
          {/* rounded arrows */}
          <button className="flex items-center justify-center h-10 w-10 rounded border border-border-light-black bg-bg-secondary-light-black">
            <Image
              src="/assets/consumerOverview/roundedArrows.svg"
              width={16}
              height={16}
              alt="search icon"
            />
          </button>
          {/* excel */}
          <button className="flex items-center justify-center h-10 w-10 rounded border border-border-light-black bg-white">
            <Image
              src="/assets/consumerOverview/excel.svg"
              width={16}
              height={16}
              alt="search icon"
            />
          </button>
          {/* csv */}
          <button className="flex items-center justify-center h-10 w-10 rounded border border-border-light-black bg-white">
            <Image
              src="/assets/consumerOverview/csv.svg"
              width={16}
              height={16}
              alt="search icon"
            />
          </button>

          <button className="flex items-center justify-center gap-1 h-10 w-[77px] rounded bg-bg-primary-blue">
            <span>
              <Image
                src="/assets/consumerOverview/funnel.svg"
                width={16}
                height={16}
                alt="search icon"
                className=""
              />
            </span>
            <span className="text-sm font-semibold text-white">Filter</span>
          </button>
        </div>
      </div>
      {/* consumer table */}
      <ConsumerTable />
    </div>
  );
};

export default ConsumerOverviewTable;
