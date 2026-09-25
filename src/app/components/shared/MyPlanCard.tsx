import { FitType } from "@/types/FitType";
import Image from "next/image";

import React from "react";
import { GoClock } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { PiFireFill } from "react-icons/pi";

const MyPlanCard = ({ planData }: { planData: FitType }) => {
  const { name, image, equipment, duration, caloriesBurned, rating } = planData;

  return (
    <div className="card bg-[#14171E] border border-[#232732] ">
      <div className=" card-body flex flex-row justify-between items-center">
        <div className=" flex items-center gap-4 ">
          <figure>
            <Image
              src={image}
              alt={name}
              width={392}
              height={192}
              className=" w-36 h-20 object-cover object-top rounded-2xl"
            />
          </figure>

          <div>
            <h2 className="card-title font-oswald text-[16px] font-bold">
              {name}
            </h2>
            <p className=" pb-2 text-[12px] text-[#8A92A0] ">{equipment}</p>

            <div className="card-actions justify-start gap-4 ">
              <div className=" text-[16px] text-[#9CA3Af] flex gap-1 items-center">
                <GoClock className="text-[#CCFF00]" />
                <span>{duration} min</span>
              </div>
              <div className=" text-[16px] text-[#9CA3Af] flex gap-1 items-center">
                <PiFireFill className="text-[#CCFF00]" />
                <span>{caloriesBurned} kcal</span>
              </div>
              <div className=" text-[16px] text-[#9CA3Af] flex gap-1 items-center">
                <IoIosStarOutline className="text-[#CCFF00]" />
                <span>{rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-2">
          <button className=" btn btn-outline border-[#374151] rounded-3xl text-[12px]">
            View Details
          </button>
          <button className=" btn btn-success bg-[#CCFF00] border-none rounded-3xl text-[12px] font-semibold">
            ✔ Mark as Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;
