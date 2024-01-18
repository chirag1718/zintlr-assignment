"use client";
import Button from "@/app/utils/Button";
import Image from "next/image";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
const Revenue = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  // chart data
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Revenue",
        data: [400330, 700300, 509000, 700982, 100032],
        backgroundColor: ["#1FB9FC"],
      },
      {
        label: "Transaction Amount",
        data: [400000, 700000, 500800, 984975, 603255],
        backgroundColor: ["#0153C9"],
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8 h-full w-full py-5 px-3 border rounded-md bg-white border-border-gray">
      <div className="flex flex-col gap-3 h-full">
        {/* text and drop down */}
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold text-text-light-black">
            Highest Revenue Earned
          </p>
          <Button
            text="Top 5"
            iconPosition="after"
            light={true}
            className="hidden md:flex text-sm font-medium"
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
        <div className="hidden md:flex items-center justify-start gap-2">
          <Button text="Past Week" light={true} className="text-xs h-6" />
          <Button text="Past Month" light={false} className="text-xs h-6" />
          <Button text="Past Year" light={true} className="text-xs h-6" />
          <Button text="All time" light={true} className="text-xs h-6" />
        </div>
        <div className="h-full">
          {/* asdas */}
          <Bar
            data={data}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                y: {
                  position: "left",
                  title: {
                    display: true,
                    text: "Amount",
                    align: "end",
                  },

                  grid: {
                    display: false,
                  },
                },
                x: {
                  border: {
                    dash: [9, 4],
                  },
                  beginAtZero: true,
                  max: 1000000,
                  ticks: {
                    stepSize: 200000,
                  },
                },
              },

              plugins: {
                legend: {
                  fullSize: false,
                  align: "end",
                  labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    boxWidth: 8,
                    boxHeight: 8,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
