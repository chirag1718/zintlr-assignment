import Image from "next/image";
import React from "react";

const TotalConsumers = () => {
  return (
    <div className="flex items-center justify-start gap-7 h-full w-full min-w-[904px] border rounded-xl overflow-hidden">
      {/* total count card */}
      <div className="flex items-center gap-6 justify-center h-full min-w-[293px] rounded-r-xl bg-bg-lavender-light text-text-light-black">
        <Image
          src="/assets/consumerOverview/users.svg"
          width={79}
          height={64}
          alt=""
        />
        <div>
          <p className="text-[18px] font-normal">Total Consumers</p>
          <p className="text-3xl font-semibold">1,342</p>
        </div>
      </div>
      {/* insights */}
      <div className="flex items-center justify-center gap-10">
        {/* 1st col */}
        <div className="flex flex-col gap-5 justify-center">
          {/* child 1 */}
          <div className="flex items-center gap-11">
            <p className="flex items-center justify-center gap-3">
              Direct Consumer{" "}
              <span>
                <Image
                  src="/assets/consumerOverview/info.svg"
                  alt="info"
                  width={18}
                  height={18}
                  className="cursor-pointer"
                />
              </span>
            </p>
            <p className="text-xl font-medium">342</p>
          </div>
          {/* child 2 */}
          <div className="flex items-center gap-11">
            <p className="flex items-center justify-center gap-3">
              Through Associates{" "}
              <span>
                <Image
                  src="/assets/consumerOverview/info.svg"
                  alt="info"
                  width={18}
                  height={18}
                  className="cursor-pointer"
                />
              </span>
            </p>
            <p className="text-xl font-medium">400</p>
          </div>
        </div>
        {/* 2nd col */}
        <div className="flex flex-col gap-5 justify-center">
          {/* child 1 */}
          <div className="flex items-center gap-11">
            <p className="flex items-center justify-center gap-3">
              Through Field Executives{" "}
              <span>
                <Image
                  src="/assets/consumerOverview/info.svg"
                  alt="info"
                  width={18}
                  height={18}
                  className="cursor-pointer"
                />
              </span>
            </p>
            <p className="text-xl font-medium">342</p>
          </div>
          {/* child 2 */}
          <div className="flex items-center gap-11">
            <p className="flex items-center justify-center gap-3">
              Through Sales Associates{" "}
              <span>
                <Image
                  src="/assets/consumerOverview/info.svg"
                  alt="info"
                  width={18}
                  height={18}
                  className="cursor-pointer"
                />
              </span>
            </p>
            <p className="text-xl font-medium">400</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalConsumers;
{
  /* <div className="grid grid-cols-2">
        <div className="h-full flex flex-col items-center gap-24">
          <div className="flex items-center gap-11">
            <p className="flex items-center gap-3 text-lg font-normal">
              Direct Consumers{" "}
              <span>
                <Image
                  src="/assets/consumerOverview/info.svg"
                  alt="info"
                  width={18}
                  height={18}
                  className="cursor-pointer"
                />
              </span>
            </p>
            <p className="text-xl font-medium">342</p>
          </div>
          <div className="flex items-center gap-11">
            <p className="flex items-center gap-3 text-lg font-normal">
              Through Fields Executives{" "}
              <span>
                <Image
                  src="/assets/consumerOverview/info.svg"
                  alt="info"
                  width={18}
                  height={18}
                  className="cursor-pointer"
                />
              </span>
            </p>
            <p className="text-xl font-medium">400</p>
          </div>
        </div>
      </div> */
}
