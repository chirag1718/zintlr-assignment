import React from "react";
import UserNavbar from "./components/UserNavbar";
import ConsumerOverviewGrid from "./components/ConsumerOverviewGrid";

const page = () => {
  return (
    <div className="flex flex-col items-start h-full w-full gap-[10px]">
      {/* welcome text | kyc pending | high risk | tickets  */}
      <UserNavbar />
      {/* consumer overview grid */}
      <ConsumerOverviewGrid />
    </div>
  );
};

export default page;
