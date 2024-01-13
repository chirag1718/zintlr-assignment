import React from "react";
import UserNavbar from "./components/UserNavbar";
import ConsumerOverview from "./components/ConsumerOverview";

const page = () => {
  return (
    <div className="flex flex-col items-start h-full w-full gap-[10px]">
      {/* welcome text | kyc pending | high risk | tickets  */}
      <UserNavbar />
      {/* consumer overview grid */}
      <ConsumerOverview />
    </div>
  );
};
// background: linear-gradient(180deg, #F8F3E0 0%, #E8D495 53.7%, #D1AC32 100%);

export default page;
