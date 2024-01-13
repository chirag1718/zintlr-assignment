import Button from "@/app/utils/Button";
import ButtonSecondary from "@/app/utils/ButtonSecondary";
import Image from "next/image";
import React from "react";

const ConsumerAnalysis = () => {
  return (
    <div className="h-full w-full border rounded-md border-border-gray">
      <div className="flex flex-col gap-4">
        {/* title */}
        <p className="pl-4 pt-6 w-full text-lg font-normal text-text-light-black">
          Consumer Analysis
        </p>
        {/*  */}
        <div className="flex items-center justify-between px-5 border-b border-border-gray">
          <div className="flex items-center justify-normal">
            <ButtonSecondary text="Activity" />
            <ButtonSecondary text="Stock" />
            <ButtonSecondary text="Volume" />
          </div>
          <div className="flex items-center gap-2 *:text-xs">
            <Button text="Past Week" light={true} />
            <Button text="Past Month" light={true} />
            <Button text="Past Year" light={true} />
            <Button text="All time" light={true} />
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-end w-full gap-1 px-5 *:text-sm">
          <Button
            text="Filter By Associates"
            iconPosition="after"
            light={true}
            icon={
              <Image
                src="/assets/general-svg/cheveronDown.svg"
                height={12}
                width={12}
                alt="cheveron down"
              />
            }
          />
          <Button
            text="Filter By Zone"
            iconPosition="after"
            light={true}
            icon={
              <Image
                src="/assets/general-svg/cheveronDown.svg"
                height={12}
                width={12}
                alt="cheveron down"
              />
            }
          />
          <Button
            text="Filter By Account Type"
            iconPosition="after"
            light={true}
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
      </div>
    </div>
  );
};

export default ConsumerAnalysis;
