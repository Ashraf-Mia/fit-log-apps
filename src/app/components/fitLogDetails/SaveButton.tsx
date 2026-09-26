"use client";
import { FitLogContext } from "@/context/FitLogContext";
import { FitType } from "@/types/FitType";
import React, { useContext } from "react";
import { GoBookmark } from "react-icons/go";
import { toast } from "react-toastify";

const SaveButton = ({ fitLog }: { fitLog: FitType }) => {
  const { save, setSave } = useContext(FitLogContext);

  const handleSaveButton = () => {
    const isAlreadySaved = save.some((card: FitType) => card.id === fitLog.id);
    if (isAlreadySaved === true) {
      toast.warning("This workout is already in your save");
      return;
    }
    setSave([...save, fitLog]);
    toast.success(`You have save ${fitLog.name}`);
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
