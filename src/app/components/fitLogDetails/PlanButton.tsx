"use client";
import { FitLogContext } from "@/context/FitLogContext";
import { FitType } from "@/types/FitType";
import React, { useContext } from "react";
import { PiCalendarPlus } from "react-icons/pi";
import { toast } from "react-toastify";

const PlanButton = ({ fitLog }: { fitLog: FitType }) => {
  const { plan, setPlan } = useContext(FitLogContext);

  const handlePlanButton = () => {
    setPlan([...plan, fitLog]);
    toast.success(`You have Add to today's plan ${fitLog.name}`);
  };

  return (
    <div>
      <button
        onClick={handlePlanButton}
        className=" btn btn-success bg-[#CCFF00] flex gap-2 items-center"
      >
        <PiCalendarPlus /> Add to today&apos;s plan
      </button>
    </div>
  );
};

export default PlanButton;
