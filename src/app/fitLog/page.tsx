import { FitType } from "@/types/FitType";

import FitCards from "../components/shared/FitCards";

const getFitLog = async () => {
  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
      cache: "force-cache",
    });

    if (!res.ok) {
      console.log(`faild to fetch: ${res.status}`);
      return [];
    }

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
    <div className="container mx-auto px-4 md:px-6 py-10 lg:py-16 text-center">
      <h2 className=" text-3xl font-oswald font-bold">THE LIBRARY</h2>
      <p className=" text-[#9CA3AF] text-[14px] mb-8">
        Twelve lifts covering every major muscle group.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {fitLogsData.map((fitLog: FitType) => (
          <FitCards key={fitLog.id} fitLog={fitLog} />
        ))}
      </div>
    </div>
  );
};

export default FitLogPage;
