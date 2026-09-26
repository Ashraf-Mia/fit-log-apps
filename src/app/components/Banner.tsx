import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className=" container mx-auto bg-[#15171D] border border-[#222630] rounded-2xl flex flex-col lg:flex-row items-center text-center  justify-between p-6 md:p-10 lg:px-14 lg:py-18.25 gap-8">
      <div className=" space-y-5 lg:text-left">
        <p className=" text-[#C2F800] font-bold lg:text-[12px] text-xs md:text-sm ">
          WORKOUT LIBRARY
        </p>
        <h2 className=" font-oswald text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-16 tracking-[-1.5px] ">
          TRAIN WITH INTENT. LOG <br className="hidden md:block" /> EVERY SET.
        </h2>
        <p className=" text-[16px] text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
          <br className=" hidden md:block" /> into today&apos;s plan, and watch
          the week&apos;s work add up.
        </p>
        <button className=" cursor-pointer bg-[#C2F800] text-black font-bold px-6 py-3 inline-block rounded-md ">
          BROWSE WORKOUTS
        </button>
      </div>
      <div className=" w-full lg:w-auto flex justify-center">
        <Image src={bannerImg} alt="banner img" />
      </div>
    </div>
  );
};

export default Banner;
