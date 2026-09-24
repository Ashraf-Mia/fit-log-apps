import { FitType } from "@/types/FitType";
import Image from "next/image";
import React from "react";
import { GoBookmark } from "react-icons/go";
import { PiCalendarPlus } from "react-icons/pi";

interface IFitLogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const FitLogDetailsPage = async ({ params }: IFitLogDetailsPageProps) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
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
    <div className=" container flex justify-between mx-auto py-12">
      <div>
        <Image
          src={image}
          alt={name}
          width={588}
          height={773}
          className=" rounded-2xl"
        />
      </div>
      <div className=" space-y-4">
        <h2 className=" text-4xl font-oswald font-bold">{name}</h2>
        <p className=" text-[#9CA3AF] text-[16px]">{description}</p>
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
              className=" flex justify-between items-center px-6 py-3 bg-[#151922] border-b border-[#1E2330] text-[12px] font-bold text-[#9CA3AF] "
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
        <div className=" flex gap-4">
          <button className=" btn btn-success bg-[#CCFF00] flex gap-2 items-center">
            <PiCalendarPlus /> Add to today's plan
          </button>
          <button className=" btn btn-outline flex gap-2 items-center">
            {" "}
            <GoBookmark /> Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitLogDetailsPage;
