import Link from "next/link";
import React from "react";

const NothingCard = () => {
  return (
    <div className=" text-center py-24.5">
      <h2 className="font-bold text-[20px] fotn-oswald ">NOTHING HERE YET</h2>
      <p className="pb-6 text-[12px] text-[#A1A1AA]">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/">
        <button className=" btn btn-success bg-[#CCFF00] border-none rounded-3xl text-[12px] font-semibold">
          Go to workouts
        </button>
      </Link>
    </div>
  );
};

export default NothingCard;
