import PlanButton from "@/app/components/fitLogDetails/PlanButton";
import SaveButton from "@/app/components/fitLogDetails/SaveButton";
import { FitType } from "@/types/FitType";
import Image from "next/image";
import React from "react";

interface IFitLogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const FitLogDetailsPage = async ({ params }: IFitLogDetailsPageProps) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`,
    {
      cache: "force-cache",
    },
  );
  const fitLog = (await res.json()) as FitType;

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = fitLog;

  const firstMuscle = muscleGroups?.[0] || "";
  const secondMuscle = muscleGroups?.[1] || "";
  const thirdMuscle = muscleGroups?.[2] || "";

  const stats = [
    { lable: "EQUIPMENT", value: equipment },
    { lable: "DIFFICULTY", value: difficulty },
    { lable: "SETS", value: sets },
    { lable: "REPS", value: reps },
    { lable: "DURATION", value: duration + "min" },
    { lable: "CALORIES", value: caloriesBurned + "kcal" },
    { lable: "RATING", value: rating },
  ];

  return (
    <div className=" container flex flex-col lg:flex-row justify-between gap-8 lg:gap-14 mx-auto py-8 lg:py-12 px-4 md:px-6 max-w-300">
      <div className=" w-full lg:w-1/2 h-auto overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={588}
          height={773}
          className=" rounded-2xl w-full h-auto object-cover"
        />
      </div>
      <div className=" w-full lg:w-1/2 space-y-4 lg:space-y-6">
        <h2 className=" text-4xl font-oswald font-bold">{name}</h2>
        <p className=" text-[#9CA3AF] text-[14px] lg:text-[16px]">
          {description}
        </p>
        <div className=" flex gap-2">
          <div className="badge badge-secondary bg-[#C2F800] border-none font-bold text-black text-[11px] py-0.5 px-2.5">
            {firstMuscle}
          </div>
          {secondMuscle && (
            <div className="badge badge-secondary bg-[#C2F800] border-none font-bold text-black text-[11px] py-0.5 px-2.5">
              {secondMuscle}
            </div>
          )}
          {thirdMuscle && (
            <div className="badge badge-secondary bg-[#C2F800] border-none font-bold text-black text-[11px] py-0.5 px-2.5">
              {thirdMuscle}
            </div>
          )}
        </div>
        <div className=" rounded-2xl overflow-hidden">
          {stats.map((stat, ind) => (
            <div
              key={ind}
              className=" flex justify-between items-center px-4 lg:px-6 py-3 bg-[#151922] border-b border-[#1E2330] text-[12px] font-bold text-[#9CA3AF] "
            >
              <span>{stat.lable}</span>
              <span>{stat.value}</span>
            </div>
          ))}
        </div>
        <div>
          <h2 className=" font-extrabold text-[16px]">INSTRUCTIONS</h2>
          {instructions.map((instruction, ind) => (
            <p key={ind} className=" text-[#D1D5DB] text-[14px]">
              {ind + 1}. {instruction}
            </p>
          ))}
        </div>
        <div className=" flex gap-4 justify-center lg:justify-start mt-6 ">
          <PlanButton fitLog={fitLog} />
          <SaveButton fitLog={fitLog} />
        </div>
      </div>
    </div>
  );
};

export default FitLogDetailsPage;
