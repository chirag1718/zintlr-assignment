"use client";
import Button from "@/app/utils/Button";
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
const Transactions = () => {
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
        label: "Transaction Amount",
        data: [400330, 700300, 509000, 984975, 100032],
        backgroundColor: ["#FC6B21"],
      },
      {
        label: "Earnings",
        data: [40000, 70000, 50080, 98497, 60325],
        backgroundColor: ["#0153C9"],
      },
    ],
  };
  return (
    <div className="flex flex-col gap-8 h-full w-full py-5 px-3 border rounded-md bg-white border-border-gray">
      <div className="flex flex-col gap-3 h-full">
        {/* text and drop down */}
        <p className="text-lg font-semibold text-text-light-black">
          5 Greatest Transactions
        </p>
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

export default Transactions;
