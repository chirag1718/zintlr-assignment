import Button from "@/app/utils/Button";
import Image from "next/image";
import React from "react";

const Revenue = () => {
  return (
    <div className="flex flex-col gap-8 h-full w-full py-5 px-3 border rounded-md border-border-gray">
      <div className="flex flex-col gap-3">
        {/* text and drop down */}
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold text-text-light-black">
            Highest Revenue Earned
          </p>
          <Button
            text="Top 5"
            iconPosition="after"
            light={true}
            className="text-sm font-medium"
            icon={
              <Image
                src="/assets/general-svg/cheveronDown.svg"
                height={12}
                width={12}
                alt="cheveron down"
              />
            }
          />
        </div>
        <div className="flex items-center justify-start gap-2">
          <Button text="Past Week" light={true} className="text-xs h-6" />
          <Button text="Past Month" light={true} className="text-xs h-6" />
          <Button text="Past Year" light={true} className="text-xs h-6" />
          <Button text="All time" light={true} className="text-xs h-6" />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
