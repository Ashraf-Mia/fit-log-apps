import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className=" container mx-auto bg-[#15171D] border border-[#222630] rounded-2xl flex justify-between px-14 py-18.25">
      <div className=" space-y-5">
        <p className=" text-[#C2F800] font-bold text-[12px] ">
          WORKOUT LIBRARY
        </p>
        <h2 className=" font-oswald text-[60px] font-bold leading-16 tracking-[-1.5px] ">
          TRAIN WITH INTENT. LOG <br /> EVERY SET.
        </h2>
        <p className=" text-[16px] text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
          <br /> into today's plan, and watch the week's work add up.
        </p>
        <button className=" cursor-pointer bg-[#C2F800] text-black font-bold px-6 py-3 inline-block rounded-md ">
          BROWSE WORKOUTS
        </button>
      </div>
      <div>
        <Image src={bannerImg} alt="banner img" />
      </div>
    </div>
  );
};

export default Banner;
