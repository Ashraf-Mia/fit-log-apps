import { FitType } from "@/types/FitType";
import React from "react";
import FitCards from "../components/shared/FitCards";

const getFitLog = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
  } catch (error) {
    console.log("Error fetching fitLog data", error);
    return [];
  }
};

const FitLogPage = async () => {
  const fitLogsData = await getFitLog();
  console.log(fitLogsData, "fitLogData form lkdjfd");
  return (
    <div className="container mx-auto py-16">
      <h2 className=" text-3xl font-oswald font-bold">THE LIBRARY</h2>
      <p className=" text-[#9CA3AF] text-[14px] mb-8">
        Twelve lifts covering every major muscle group.
      </p>
      <div className=" grid grid-cols-3 gap-6 ">
        {fitLogsData.map((fitLog: FitType) => (
          <FitCards key={fitLog.id} fitLog={fitLog} />
        ))}
      </div>
    </div>
  );
};

export default FitLogPage;
