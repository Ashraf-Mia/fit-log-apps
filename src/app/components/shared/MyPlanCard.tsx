"use client";
import { FitLogContext } from "@/context/FitLogContext";
import { FitType } from "@/types/FitType";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { GoClock } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { PiFireFill } from "react-icons/pi";
import { toast } from "react-toastify";

const MyPlanCard = ({ planData }: { planData: FitType }) => {
  const { name, image, equipment, duration, caloriesBurned, rating } = planData;

  const { plan, setPlan, save, setSave } = useContext(FitLogContext);

  const handleDelete = () => {
    const updatePlan = plan.filter((card) => card.id !== planData.id);
    setPlan(updatePlan);
    toast.warning(`${planData.name} removed from your plan`);
  };

  const handleMarkAsDone = () => {
    const isSaved = save.some((item) => item.id === planData.id);
    if (isSaved === true) {
      toast.info("This workout is already in your saved tab");
      return;
    }

    setSave([...save, planData]);
    toast.success(`${planData.name} marked as done and added to saved`);
  };

  return (
    <div className="card bg-[#14171E] border border-[#232732]  ">
      <div className=" card-body flex flex-col md:flex-row justify-between items-center text-center lg:text-left gap-4 md:gap-6 p-4 md:p-6">
        <div className=" flex flex-col sm:flex-row items-center gap-4 ">
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
            <h2 className=" font-oswald text-[16px] font-bold ">{name}</h2>

            <p className=" pb-2 text-[12px] text-[#8A92A0] ">{equipment}</p>

            <div className="card-actions justify-start flex-wrap gap-4 ">
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
        <div className=" flex  items-center gap-3">
          <Link href={`/fitLog/${planData.id}`}>
            <button className=" btn btn-outline border-[#374151] rounded-3xl text-[12px]">
              View Details
            </button>
          </Link>

          <button
            onClick={handleMarkAsDone}
            className=" btn btn-success bg-[#CCFF00] border-none rounded-3xl text-[12px] font-semibold"
          >
            ✔ Mark as Done
          </button>

          <button
            onClick={handleDelete}
            className=" text-3xl text-[#6B7280] cursor-pointer"
          >
            <IoCloseSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;
