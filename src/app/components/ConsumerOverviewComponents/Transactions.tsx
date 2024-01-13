import Button from "@/app/utils/Button";
import React from "react";

const Transactions = () => {
  return (
    <div className="flex flex-col gap-8 h-full w-full py-5 px-3 border rounded-md border-border-gray">
      <div className="flex flex-col gap-3">
        {/* text and drop down */}
        <p className="text-lg font-semibold text-text-light-black">
          5 Greatest Transactions
        </p>
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

export default Transactions;
