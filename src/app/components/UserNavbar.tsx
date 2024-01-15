"use client";
import React from "react";
import Button from "../utils/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const UserNavbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <div className="flex flex-nowrap items-center gap-[10px] h-[153px] w-full overflow-auto scroll-smooth">
      {/* welcome user card */}
      <div className="flex items-center justify-between h-full w-auto min-w-[620px] px-6 py-4 rounded-xl bg-light-blue-card-gradient">
        {/* user name, consumer this week and buttons */}
        {pathName.includes("/manageCustomers") ? (
          <div className="flex flex-col gap-3">
            <div>
              <p className="flex items-center gap-1 text-base font-medium *:cursor-pointer text-text-light-blue">
                <span className="hover:underline transition-all duration-100" onClick={() => router.push("/")}>Consumer</span>
                <span>&gt;</span>
                <span className="hover:underline transition-all duration-100">Manage Consumers</span>
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-lg font-semibold text-black">Actions</p>
              <Link href={"#"}>
                <Button
                  icon={
                    <Image
                      src="/assets/userNavbar/add.svg"
                      height={16}
                      width={22}
                      alt="add consumer"
                    />
                  }
                  text="Add Consumers"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-2xl font-medium">Hello Shakir!</p>
              <p className="text-sm font-normal text-text-light-gray">
                You have 134 consumers this week.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link href={"#"}>
                <Button
                  icon={
                    <Image
                      src="/assets/userNavbar/add.svg"
                      height={16}
                      width={22}
                      alt="add consumer"
                    />
                  }
                  text="Add Consumers"
                />
              </Link>
              <Link href={"/manageCustomers"}>
                <Button
                  icon={
                    <Image
                      src="/assets/userNavbar/manage.svg"
                      height={16}
                      width={22}
                      alt="add consumer"
                    />
                  }
                  light={true}
                  text="Manage Consumers"
                />
              </Link>
            </div>
          </div>
        )}

        <Image
          src="/assets/userNavbar/graphic.svg"
          height={135}
          width={198}
          alt="women-tech"
        />
      </div>

      {/* kyc pending card */}
      <div className="flex flex-col items-center justify-center h-full w-full min-w-[249px] rounded-xl text-text-light-black bg-brown-card-gradient">
        <div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/userNavbar/kyc.svg"
              width={20}
              height={20}
              alt="kyc icon"
              className="mt-1"
            />
            <p className="text-lg font-normal">
              You have <span className="text-[28px] font-semibold">276</span>
            </p>
          </div>
          <p>KYC approval pending</p>
          <Button
            className="font-semibold text-base mt-2      "
            text="View List"
          />
        </div>
      </div>

      {/* high risk consumer */}
      <div className="flex flex-col items-center justify-center h-full w-full min-w-[249px] rounded-xl text-text-light-black bg-red-card-gradient">
        <div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/userNavbar/risk.svg"
              width={19}
              height={19}
              alt="kyc icon"
              className="mt-1"
            />
            <p className="text-lg font-normal">
              There are <span className="text-[28px] font-semibold">182</span>
            </p>
          </div>
          <p>high risk consumers</p>
          <Button
            className="font-semibold text-base mt-2      "
            text="View List"
          />
        </div>
      </div>

      {/* open tickets card */}
      <div className="flex flex-col items-center justify-center h-full w-full min-w-[249px] rounded-xl text-text-light-black bg-blue-card-gradient">
        <div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/userNavbar/ticket.svg"
              width={21}
              height={21}
              alt="kyc icon"
              className="mt-1"
            />
            <p className="text-lg font-normal">
              There are <span className="text-[28px] font-semibold">32</span>
            </p>
          </div>
          <p>tickets open</p>
          <Button
            className="font-semibold text-base mt-2      "
            text="View List"
          />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
