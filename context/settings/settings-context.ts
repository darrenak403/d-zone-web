"use client";

import {createContext} from "react";

interface SettingsContextType {
  settings: {theme: string};
  setSettings: React.Dispatch<React.SetStateAction<{theme: string}>>;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);
