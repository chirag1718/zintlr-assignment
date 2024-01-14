import Image from "next/image";
import React from "react";
import { data } from "../data/data";
const ConsumerTable = () => {
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
              <th>
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
              </th>
              {/* KYC Status */}
              <th>
                <div className="flex items-center gap-2">
                  <p>KYC Status</p>
                  <Image
                    className="cursor-pointer"
                    src="/assets/general-svg/dropdown.svg"
                    height={10}
                    width={10}
                    alt="cheveron down"
                  />
                </div>
              </th>
              {/* Facilitator */}
              <th>Facilitator</th>
              {/* Zone */}
              <th>
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
              </th>
              {/* Account Type */}
              <th>
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
              </th>
              {/* TPA */}
              <th>TPA</th>
            </tr>
          </thead>
          <tbody style={{ maxHeight: "400px", overflowY: "auto" }}>
            {data.map((item) => {
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
                    <div className="flex items-center justify-center h-6 w-[88px] rounded-full bg-bg-green-light">
                      <p className="text-sm font-medium text-text-filter-green">
                        {item.kycStatus}
                      </p>
                    </div>
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
                  <td>{item.accountType}</td>
                  {/* TPA */}
                  <td className="truncate">{item.tpa}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="h-24 min-w-full border-2 border-black"></div>
    </div>
  );
};

export default ConsumerTable;
