import { FitType } from "@/types/FitType";
import Image from "next/image";
import React from "react";
import { GoClock } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { PiFireFill } from "react-icons/pi";

const FitCards = ({ fitLog }: { fitLog: FitType }) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = fitLog;

  const firstMuscle = muscleGroups?.[0] || "";
  const secondMuscle = muscleGroups?.[1] || "";
  const thirdMuscle = muscleGroups?.[2] || "";

  return (
    <div className="card bg-[#20242E] border border-[#4c4f53] ">
      <figure>
        <Image
          src={image}
          alt={name}
          width={392}
          height={192}
          className=" w-125 h-87.5  "
        />
      </figure>
      <div className="card-body">
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
        <h2 className="card-title">{name}</h2>
        <p className=" pb-2">{equipment}</p>
        <hr className=" text-[#515560] py-2" />
        <div className="card-actions justify-start gap-4 ">
          <div className=" text-[12px] text-[#9CA3Af] flex gap-1 items-center">
            <GoClock />
            <span>{duration}</span>
          </div>
          <div className=" text-[12px] text-[#9CA3Af] flex gap-1 items-center">
            <PiFireFill />
            <span>{caloriesBurned}</span>
          </div>
          <div className=" text-[12px] text-[#9CA3Af] flex gap-1 items-center">
            <IoIosStarOutline />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitCards;
