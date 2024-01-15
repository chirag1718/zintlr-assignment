import React from "react";

const ZoneFilter = () => {
  const zones = ["East", "West", "North", "South"];
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-start justify-center gap-3 px-5 absolute z-50 top-14 -left-3 h-[142px] w-[108px] rounded-md drop-shadow-md border cursor-default bg-white"
    >
      {zones.map((zone, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center gap-2 *:cursor-pointer"
          >
            <input type="checkbox" name="" id="" className="h-4 w-4" />
            <p className="text-sm font-normal">{zone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ZoneFilter;
