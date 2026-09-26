import React from "react";
import footerLogo from "@/assets/Vector.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between container mx-auto py-10 px-4 text-center md:text-left gap-4 border-t border-[#3a3e49] ">
      <div className=" flex gap-2">
        <Image src={footerLogo} alt="footer logo" className=" w-5 h-5" />
        <h2 className=" font-oswald text-[14px]">FITLOG</h2>
      </div>
      <p className=" text-[#6B7280]">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </div>
  );
};

export default Footer;
