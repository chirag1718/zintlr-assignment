import { useData } from "@/store/useData";
import React from "react";

const AccountFilter = () => {
  const acc = [
    "Business",
    "Pay and Use(Minor)",
    "Pay and Use(Major)",
    "Salary",
    "Earner",
  ];
  const { updateSelectedAccountType } = useData((state) => ({
    updateSelectedAccountType: state.updateSelectedAccountType,
  }));
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-start justify-center gap-3 px-5 absolute z-50 top-14 -left-4 h-[178px] w-[185px] rounded-md drop-shadow-md border cursor-default bg-white"
    >
      {acc.map((zone, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center gap-2 *:cursor-pointer"
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="h-4 w-4"
              value={zone}
              onChange={(e) => updateSelectedAccountType(e.target.value)}
            />
            <p className="text-sm font-normal">{zone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AccountFilter;
