"use client";
import { links } from "@/lib/data";

import React, { createContext, useContext } from "react";
export type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = React.useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = React.useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a  ActiveSectionContextProvider",
    );
  }

  return context;
}

export default ActiveSectionContextProvider;
