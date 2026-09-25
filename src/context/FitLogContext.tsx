"use client";
import { FitType } from "@/types/FitType";
import React, { createContext, ReactNode, useState } from "react";

interface IFitLogContext {
  plan: FitType[];
  setPlan: React.Dispatch<React.SetStateAction<FitType[]>>;
  save: FitType[];
  setSave: React.Dispatch<React.SetStateAction<FitType[]>>;
}

export const FitLogContext = createContext<IFitLogContext>({
  plan: [],
  setPlan: () => {},
  save: [],
  setSave: () => {},
});

const FitLogProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<FitType[]>([]);
  const [save, setSave] = useState<FitType[]>([]);

  const sharedData = {
    save,
    setSave,
    plan,
    setPlan,
  };

  return (
    <FitLogContext.Provider value={sharedData}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogProvider;
