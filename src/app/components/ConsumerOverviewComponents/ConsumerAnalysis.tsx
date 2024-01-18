"use client";
import Button from "@/app/utils/Button";
import ButtonSecondary from "@/app/utils/ButtonSecondary";
import Image from "next/image";
import React, { FC, useState } from "react";
// charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const ConsumerAnalysis = () => {
  const [activeTab, setActiveTab] = useState<"activity" | "stock" | "volume">(
    "activity"
  );

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const activityData = {
    labels: ["Very Active", "Moderately Active", "Least Active"],
    datasets: [
      {
        label: "Activity Level",
        data: [4000, 7000, 5000],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const stockData = {
    labels: ["Stock 1", "Stock 2", "Stock 3"],
    datasets: [
      {
        label: "Stock Level",
        data: [9000, 3000, 6000],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const volumeData = {
    labels: ["Volume 1", "Volume 2", "volume 2"],
    datasets: [
      {
        label: "Volume Level",
        data: [10000, 9000, 4000],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleTabClick = (tab: "activity" | "stock" | "volume") => {
    setActiveTab(tab);
  };
  return (
    <div className="h-full w-full border rounded-md bg-white border-border-gray">
      <div className="flex flex-col gap-4">
        {/* title */}
        <p className="pl-4 pt-6 w-full text-lg font-normal text-text-light-black">
          Consumer Analysis
        </p>
        {/*  */}
        <div className="hidden md:flex items-center justify-between px-5 border-b border-border-gray">
          <div className="flex items-center justify-normal">
            <ButtonSecondary
              text="Activity"
              onClick={() => handleTabClick("activity")}
            />
            <ButtonSecondary
              text="Stock"
              onClick={() => handleTabClick("stock")}
            />
            <ButtonSecondary
              text="Volume"
              onClick={() => handleTabClick("volume")}
            />
          </div>
          <div className="hidden md:flex items-center gap-2 *:text-xs">
            <Button text="Past Week" light={true} />
            <Button text="Past Month" light={false} />
            <Button text="Past Year" light={true} />
            <Button text="All time" light={true} />
          </div>
        </div>
        {/*  */}
        <div className="hidden md:flex items-center justify-end w-full gap-1 px-5 *:text-sm">
          <Button
            text="Filter By Associates"
            iconPosition="after"
            light={true}
            icon={
              <Image
                src="/assets/general-svg/cheveronDown.svg"
                height={12}
                width={12}
                alt="cheveron down"
              />
            }
          />
          <Button
            text="Filter By Zone"
            iconPosition="after"
            light={true}
            icon={
              <Image
                src="/assets/general-svg/cheveronDown.svg"
                height={12}
                width={12}
                alt="cheveron down"
              />
            }
          />
          <Button
            text="Filter By Account Type"
            iconPosition="after"
            light={true}
            icon={
              <Image
                src="/assets/general-svg/cheveronDown.svg"
                height={12}
                width={12}
                alt="cheveron down"
              />
            }
          />
        </div>
        {/* chart */}
        <div className=" h-full w-full px-16 pb-6">
          {activeTab === "activity" && (
            <Bar
              data={activityData}
              options={{
                indexAxis: "y",
                responsive: true,
                scales: {
                  y: {
                    position: "left",

                    grid: {
                      display: false,
                    },
                  },
                  x: {
                    border: {
                      dash: [9, 4],
                    },
                    title: {
                      display: true,
                      text: "No of Consumers",
                      align: "end",
                    },
                    max: 12000,
                  },
                },

                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          )}
          {activeTab === "stock" && (
            <Bar
              data={stockData}
              options={{
                indexAxis: "y",
                responsive: true,
                scales: {
                  y: {
                    position: "left",

                    grid: {
                      display: false,
                    },
                  },
                  x: {
                    border: {
                      dash: [9, 4],
                    },
                    title: {
                      display: true,
                      text: "Stock",
                      align: "end",
                    },
                    max: 12000,
                  },
                },

                plugins: {
                  legend: {
                   display: false
                  },
                },
              }}
            />
          )}
          {activeTab === "volume" && (
            <Bar
              data={volumeData}
              options={{
                indexAxis: "y",
                responsive: true,
                scales: {
                  y: {
                    position: "left",

                    grid: {
                      display: false,
                    },
                  },
                  x: {
                    border: {
                      dash: [9, 4],
                    },
                    title: {
                      display: true,
                      text: "Volume",
                      align: "end",
                    },
                    max: 12000,
                  },
                },

                plugins: {
                  legend: {
                    display: false
                  },
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsumerAnalysis;
