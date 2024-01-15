"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePagination } from "@/app/hooks/usePagination";
import { Status } from "./Status";
import RevenueFilter from "./filters/RevenueFilter";
import KYCFilter from "./filters/KYCFilter";
import ZoneFilter from "./filters/ZoneFilter";
import AccountFilter from "./filters/AccountFilter";
import { useData } from "@/app/hooks/useData";
import { useSearch } from "@/app/hooks/useSearch";
const ConsumerTable = () => {
  // use pagination hook
  const {
    currentData,
    currentPage,
    totalPages,
    handleNextPage,
    handlePreviousPage,
    setCurrentPage,
  } = usePagination();

  // state for drop down
  const [isActive, setIsActive] = useState({
    revenue: false,
    kyc: false,
    zone: false,
    accountType: false,
  });

  const toggleRevenue = () => {
    setIsActive((prev) => ({
      ...prev,
      revenue: !prev.revenue,
      accountType: false,
      zone: false,
      kyc: false,
    }));
  };
  const toggleKyC = () => {
    setIsActive((prev) => ({
      ...prev,
      kyc: !prev.kyc,
      accountType: false,
      revenue: false,
      zone: false,
    }));
  };
  const toggleZone = () => {
    setIsActive((prev) => ({
      ...prev,
      zone: !prev.zone,
      accountType: false,
      revenue: false,
      kyc: false,
    }));
  };
  const toggleAccountType = () => {
    setIsActive((prev) => ({
      ...prev,
      accountType: !prev.accountType,
      zone: false,
      revenue: false,
      kyc: false,
    }));
  };

  // console.log(currentData, "current data");
  // console.log(isActive, "is active");
  const { data, setData } = useData();
  const { searchQuery } = useSearch();

  return (
    <div className="h-full w-full ">
      <div className="h-full w-full ">
        <table className="w-full table-auto">
          <thead>
            <tr className="h-[50px] w-auto text-left *:pl-3 text-nowrap bg-bg-table-header">
              {/* Consumer Name */}
              <th>Consumer Name</th>
              {/* Assets */}
              <th>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap- items-start justify-center">
                    <p>Assets</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs leading-0 text-text-dark-blue">
                        Total ~₹9M
                      </span>
                      {/* gold */}
                      <span className="flex items-center justify-center h-5 w-10 text-[10px] rounded-full text-text-asset-gold bg-gold-gradient">
                        50.54g
                      </span>
                      {/* silver */}
                      <span className="flex items-center justify-center h-5 w-10 text-[10px] rounded-full text-text-asset-silver  bg-silver-gradient">
                        34.2g
                      </span>
                      {/* gold */}
                      <span className="flex items-center justify-center h-5 w-10 text-[10px] rounded-full text-text-asset-blue bg-blue-gradient">
                        ₹242.5
                      </span>
                    </div>
                  </div>
                  <Image
                    className="cursor-pointer"
                    src="/assets/general-svg/dropdown.svg"
                    height={10}
                    width={10}
                    alt="cheveron down"
                  />
                </div>
              </th>
              {/* Revenue */}
              <th className="cursor-pointer relative" onClick={toggleRevenue}>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap- items-start justify-center">
                    <p>Revenue</p>
                    <span className="text-xs leading-0 text-text-dark-blue">
                      Total ~₹9M
                    </span>
                  </div>
                  <Image
                    className="cursor-pointer"
                    src="/assets/general-svg/dropdown.svg"
                    height={10}
                    width={10}
                    alt="cheveron down"
                  />
                </div>
                {/* revenue filter modal */}
                {isActive.revenue && <RevenueFilter />}
              </th>
              {/* KYC Status */}
              <th className="cursor-pointer relative" onClick={toggleKyC}>
                <div className="flex items-center gap-2">
                  <p>KYC Status</p>
                  <Image
                    src="/assets/general-svg/dropdown.svg"
                    height={10}
                    width={10}
                    alt="cheveron down"
                  />
                </div>
                {isActive.kyc && <KYCFilter />}
              </th>
              {/* Facilitator */}
              <th>Facilitator</th>
              {/* Zone */}
              <th className="cursor-pointer relative" onClick={toggleZone}>
                <div className="flex items-center gap-2">
                  <p>Zone</p>
                  <Image
                    className="cursor-pointer"
                    src="/assets/general-svg/dropdown.svg"
                    height={10}
                    width={10}
                    alt="cheveron down"
                  />
                </div>
                {isActive.zone && <ZoneFilter />}
              </th>
              {/* Account Type */}
              <th
                className="cursor-pointer relative"
                onClick={toggleAccountType}
              >
                <div className="flex items-center gap-2">
                  <p>Account Type</p>
                  <Image
                    className="cursor-pointer"
                    src="/assets/general-svg/dropdown.svg"
                    height={10}
                    width={10}
                    alt="cheveron down"
                  />
                </div>
                {isActive.accountType && <AccountFilter />}
              </th>
              {/* TPA */}
              <th>TPA</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="h-20 *:pl-3 even:bg-bg-primary-light-blue odd:bg-white"
                >
                  {/* consumer name */}
                  <td>
                    <div className="flex items-center gap-2">
                      <p className="text-base font-normal text-text-dark-blue">
                        {item.consumerName}
                      </p>
                      {item.notification && (
                        <span className="flex items-center justify-center h-auto w-auto min-h-4 min-w-6 rounded-full text-[10px] font-extrabold text-white bg-bg-notification">
                          {item.notification}
                        </span>
                      )}
                    </div>
                  </td>
                  {/* assets */}
                  <td>
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-medium text-text-light-black">
                        {item.assets.totalAmount}
                      </p>
                      <div className="flex items-center gap-2">
                        {/* gold */}
                        <span className="flex items-center justify-center h-6 w-16 text-sm rounded-full text-text-asset-gold bg-gold-gradient">
                          {item.assets.gold}
                        </span>
                        {/* silver */}
                        <span className="flex items-center justify-center h-6 w-16 text-sm rounded-full text-text-asset-silver  bg-silver-gradient">
                          {item.assets.silver}
                        </span>
                        {/* gold */}
                        <span className="flex items-center justify-center h-6 w-16 text-sm  rounded-full text-text-asset-blue bg-blue-gradient">
                          {item.assets.price}
                        </span>
                      </div>
                    </div>
                  </td>
                  {/* revenue */}
                  <td>
                    <p className="text-lg font-medium text-text-light-black">
                      {item.revenue}
                    </p>
                  </td>
                  {/* KYC */}
                  <td>
                    {/* //TODO make a resuable component for status */}
                    <Status status={item.kycStatus} />
                  </td>
                  {/* Facilitator */}
                  <td>
                    <div className="flex items-center justify-normal gap-3 *:text-text-light-black">
                      <p className="flex flex-col">
                        <span className="text-xs font-normal">
                          B2B Field Executive
                        </span>
                        <span className="text-sm font-normal">
                          {item.facilitator.b2bFieldExecutiveName}
                        </span>
                      </p>
                      <Image
                        src="/assets/consumerOverview/arrowBlue.svg"
                        width={15}
                        height={0}
                        alt=""
                      />
                      <p className="flex flex-col">
                        <span className="text-xs font-normal ">Associate</span>
                        <span className="text-sm font-normal">
                          {item.facilitator.associateName}
                        </span>
                      </p>
                    </div>
                  </td>
                  {/* Zone */}
                  <td>{item.zone}</td>
                  {/* Account type */}
                  <td>
                    <div className="">
                      <span>{item.accountType.type}</span>
                      <span className="text-text-dark-blue">
                        {item.accountType.subtType?.major}
                      </span>
                      <span className="text-text-dark-blue">
                        {item.accountType.subtType?.minor}
                      </span>
                    </div>
                  </td>
                  {/* TPA */}
                  <td className="truncate">{item.tpa}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="flex items-center justify-center h-10 min-w-full ">
        <div className="flex items-center justify-center gap-2">
          {/* navigates to previous page */}
          <button
            disabled={currentPage <= 1}
            className="flex items-center justify-center h-8 w-8 rounded bg-white border  disabled:bg-bg-disabled-gray"
            onClick={handlePreviousPage}
          >
            <Image
              src="/assets/general-svg/paginationArrow.svg"
              height={12}
              width={12}
              alt="previous page"
              className="rotate-180"
            />
          </button>

          {/* page number */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`flex items-center justify-center h-8 w-8 rounded border transition-all duration-100 ease-in ${
                currentPage === index + 1 &&
                "text-bright-blue border-bright-blue scale-110"
              }  `}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          {/* navigates to next page */}
          <button
            disabled={currentPage >= totalPages}
            className="flex items-center justify-center h-8 w-8 rounded border bg-white disabled:bg-bg-disabled-gray"
            onClick={handleNextPage}
          >
            <Image
              src="/assets/general-svg/paginationArrow.svg"
              height={12}
              width={12}
              alt="previous page"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsumerTable;
