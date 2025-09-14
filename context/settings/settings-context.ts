"use client";

import {createContext, useContext} from "react";

interface SettingsContextType {
  settings: {theme: string};
  setSettings: React.Dispatch<
    React.SetStateAction<{theme: string; isSideBarOpen: boolean}>
  >;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext)!;
  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsContextProvider"
    );
  }
  return context;
};
