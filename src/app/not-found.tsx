import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center px-5 sm:px-8">
      <div className=" w-full max-w-2xl text-center">
        <h1 className=" font-oswald text-7xl sm:text-8xl font-bold text-[#CCFF00] leading-none">
          404
        </h1>
        <h2 className="font-oswald text-2xl sm:text-3xl md:text-4xl font-bold mt-5">
          PAGE NOT FOUND
        </h2>
        <p className=" text-[#8A92A0] mt-3 mx-auto">
          The workout page are looking for does not exist.
        </p>
        <div className="mt-4">
          <Link href="/">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#CCFF00] text-black font-semibold">
              BACK TO Workouts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default notFound;
