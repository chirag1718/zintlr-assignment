import { useData } from "@/app/hooks/useData";
import Image from "next/image";
import React from "react";

const RevenueFilter = () => {
  const { setData } = useData();
  const handelASC = (data: any) => {
    const sortedData = data.sort(({ a, b }: any) => a - b);
    setData(sortedData);
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-center justify-center
  gap-3 absolute z-50 top-14 left-1 h-20 w-24 rounded-md drop-shadow-md border bg-white text-text-light-black"
    >
      {/* asc */}
      <div className="flex items-center justify-center gap-2 px-2 py-1 rounded border border-transparent transition-all duration-100 hover:border-border-light-black">
        <span className="text-xs">ASC</span>
        <Image
          src="/assets/general-svg/cheveronDown.svg"
          width={13}
          height={13}
          alt="drop down"
          className="rotate-180"
        />
      </div>
      {/* dsc */}
      <div className="flex items-center justify-center gap-2 px-2 py-1 rounded border border-transparent transition-all duration-100 hover:border-border-light-black">
        <span className="text-xs">DSC</span>
        <Image
          src="/assets/general-svg/cheveronDown.svg"
          width={13}
          height={13}
          alt="drop down"
          className=""
        />
      </div>
    </div>
  );
};

export default RevenueFilter;
