"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import { FitLogContext } from "@/context/FitLogContext";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const { plan, save } = useContext(FitLogContext);
  const pathname = usePathname();
  const links = (
    <>
      <li className=" text-[12px] text-[#9CA3AF]">
        <Link
          href="/"
          className={
            pathname === "/"
              ? " bg-[#1A2312] text-[#C2F800] font-semibold text-[12px]"
              : ""
          }
        >
          {" "}
          Workouts
        </Link>
      </li>
      <li className=" text-[12px] text-[#9CA3AF]">
        <Link
          href="/myPlan"
          className={
            pathname === "/myPlan"
              ? " bg-[#1A2312] text-[#C2F800] font-semibold text-[12px]"
              : ""
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className=" bg-base-100 shadow-sm py-6.5 sticky top-0 z-50">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src={logo} alt="navbar logo" className=" w-7 h-7" />
            <span className=" text-xl font-oswald">FITLOG</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end  gap-6 list-none">
          <Link href="/myPlan">
            <li className=" text-[#D1D5DB] text-[12px]">
              Plan{" "}
              <span className=" inline-flex justify-center items-center w-5 h-5 rounded-full bg-[#C2F800] text-black font-bold text-[12px] ">
                {plan.length}
              </span>
            </li>
          </Link>
          <Link href="/myPlan">
            <li className="text-[#D1D5DB] text-[12px]">
              Saved{" "}
              <span className="inline-flex justify-center items-center w-6 h-6 rounded-full border border-[#4e525b] font-bold text-[12px] ">
                {save.length}
              </span>
            </li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
