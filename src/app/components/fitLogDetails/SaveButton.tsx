"use client";
import { FitLogContext } from "@/context/FitLogContext";
import { FitType } from "@/types/FitType";
import React, { useContext } from "react";
import { GoBookmark } from "react-icons/go";

const SaveButton = ({ fitLog }: { fitLog: FitType }) => {
  const { save, setSave } = useContext(FitLogContext);

  const handleSaveButton = () => {
    setSave([...save, fitLog]);
  };

  return (
    <div>
      <button
        onClick={handleSaveButton}
        className=" btn btn-outline flex gap-2 items-center"
      >
        {" "}
        <GoBookmark /> Save for later
      </button>
    </div>
  );
};

export default SaveButton;
