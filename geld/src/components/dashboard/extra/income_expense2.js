"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAuth } from "@/components/provider/AuthProvider";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function IncomeExpense2() {
  const { recordData } = useAuth();
  return (
    <div className="w-[588px] h-[284px] rounded-[12px] flex flex-col bg-white">
      <header className="flex flex-row w-full h-[56px] px-[24px] py-[16px] justify-between">
        <h1>Income - Expense</h1>
        <p>Jun 1 - Nov 30</p>
      </header>
      <hr></hr>
      <main className="w-full h-full flex item-center flex-row px-[24px] py-[32px] gap-[47px]">
        <div className="w-[163px] h-[163px]">
          <Doughnut data={data} />
        </div>
        <div className="flex flex-col w-full h-full">
          <div clx>
            <div className="h-fit w-fit flex flex-row items-center gap-2">
              <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
              <p>Bills</p>
            </div>
            <p>{recordData}</p>
            <p>15.50%</p>
          </div>
        </div>
      </main>
    </div>
  );
}
