import Button from "@/app/utils/Button";
import Image from "next/image";
import React from "react";

const TotalEarnings = () => {
  return (
    <div className="h-full flex items-center justify-between gap-5 px-5 border rounded-md">
      {/* text */}
      <div className="flex flex-col items-start justify-normal gap-3">
        <div>
          <p className="text-sm">Total Earnings</p>
          <p>₹1,321,342</p>
        </div>
        <Button
          text="Past Week"
          light={true}
          icon={
            <Image
              src="/assets/general-svg/cheveronDown.svg"
              width={13}
              height={13}
              alt="drop down"
              className=""
            />
          }
          iconPosition="after"
        />
      </div>
      <Image
        src="/assets/consumerOverview/earningChart.svg"
        width={262}
        height={115}
        alt="drop down"
        className=""
      />
    </div>
  );
};

export default TotalEarnings;
