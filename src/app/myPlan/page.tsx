"use client";
import { FitLogContext } from "@/context/FitLogContext";
import React, { useContext, useState } from "react";

import MyPlanCard from "../components/shared/MyPlanCard";
import NothingCard from "../components/shared/NothingCard";
import { FitType } from "@/types/FitType";

const MyPlanPage = () => {
  const { plan, save } = useContext(FitLogContext);
  const [active, setActive] = useState("plan");

  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );

  const sortFitLog = (fitLog: FitType[]) => {
    const sortedFitLog = [...fitLog];

    if (sortBy === "Duration") {
      sortedFitLog.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "Calories") {
      sortedFitLog.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "Rating") {
      sortedFitLog.sort((a, b) => b.rating - a.rating);
    }
    return sortedFitLog;
  };

  const sortedPlan = sortFitLog(plan);
  const sortedSave = sortFitLog(save);

  const totalExercise = active === "plan" ? plan.length : save.length;
  const totalMinutes =
    active === "plan"
      ? plan.reduce((total, exercise) => total + exercise.duration, 0)
      : save.reduce((total, exercise) => total + exercise.duration, 0);
  const totalCalories =
    active === "plan"
      ? plan.reduce((total, exercise) => total + exercise.caloriesBurned, 0)
      : save.reduce((total, exercise) => total + exercise.caloriesBurned, 0);

  return (
    <div className=" container mx-auto">
      <h2 className="font-oswald font-bold text-3xl">MY PLAN</h2>
      <p className=" text-[14px] text-[#8A92A0] pt-2 pb-6">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className=" grid grid-cols-3 bg-[#13161D] border-[#232732] p-8 rounded-2xl">
        <div>
          <p className="text-[#8A92A0] text-[12px]">Exercises</p>
          <h2 className=" fotn-oswald font-bold text-4xl text-[#CCFF00]">
            {totalExercise}
          </h2>
        </div>
        <div>
          <p className="text-[#8A92A0] text-[12px]">Minutes</p>
          <h2 className=" fotn-oswald font-bold text-4xl">{totalMinutes}</h2>
        </div>
        <div>
          <p className="text-[#8A92A0] text-[12px]">Calories</p>
          <h2 className=" fotn-oswald font-bold text-4xl">{totalCalories}</h2>
        </div>
      </div>

      {/* name of each tab group should be unique */}
      <div className=" relative py-9">
        <div className="tabs tabs-box">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
            onChange={() => setActive("plan")}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {sortedPlan.length > 0 ? (
              sortedPlan.map((planData) => {
                return <MyPlanCard key={planData.id} planData={planData} />;
              })
            ) : (
              <NothingCard />
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Saved"
            onChange={() => setActive("save")}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {sortedSave.length > 0 ? (
              sortedSave.map((planData) => {
                return <MyPlanCard key={planData.id} planData={planData} />;
              })
            ) : (
              <NothingCard />
            )}
          </div>
        </div>
        <div className=" absolute right-1 top-10 flex items-center gap-3">
          <h1 className=" whitespace-nowrap text-[12px] text-[#8A92A0]">
            Sort By
          </h1>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "Duration" | "Calories" | "Rating")
            }
            className="select"
          >
            <option value={"Duration"}>Duration</option>
            <option value={"Calories"}>Calories</option>
            <option value={"Rating"}>Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
