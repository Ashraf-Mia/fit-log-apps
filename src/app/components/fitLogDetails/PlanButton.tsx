"use client";
import { FitLogContext } from "@/context/FitLogContext";
import { FitType } from "@/types/FitType";
import React, { useContext } from "react";
import { PiCalendarPlus } from "react-icons/pi";

const PlanButton = ({ fitLog }: { fitLog: FitType }) => {
  const { plan, setPlan } = useContext(FitLogContext);

  const handlePlanButton = () => {
    setPlan([...plan, fitLog]);
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
