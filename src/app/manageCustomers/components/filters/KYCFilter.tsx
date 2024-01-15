import { useData } from "@/store/useData";
import Image from "next/image";
import React from "react";

const KYCFilter = () => {
  const status = [
    {
      text: "Done",
      bgColor: "bg-bg-green-light",
      color: "text-text-filter-green",
    },
    {
      text: "Pending",
      bgColor: "bg-bg-red-light",
      color: "text-text-filter-red",
    },
    {
      text: "In Progress",
      bgColor: "bg-bg-yellow-light",
      color: "text-text-filter-yellow",
    },
    {
      text: "Rejected",
      bgColor: "bg-bg-gray-light",
      color: "text-text-filter-gray",
    },
  ];
  const { updateSelectedStatus } = useData((state) => ({
    updateSelectedStatus: state.updateSelectedStatus,
  }));
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-center justify-center gap-5 absolute z-50 top-14 -left-3 h-[186px] w-36 rounded-md drop-shadow-md border cursor-default bg-white"
    >
      {status.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center gap-3 *:cursor-pointer"
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="h-4 w-4"
              value={item.text}
              onChange={(e) => updateSelectedStatus(e.target.value)}
            />
            <div
              className={`flex items-center justify-center h-6 w-[88px] rounded-full text-xs font-normal ${item.bgColor} ${item.color}`}
            >
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KYCFilter;
