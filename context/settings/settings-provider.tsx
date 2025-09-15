"use client";
import {ReactNode, useState} from "react";
import {SettingsContext} from "./settings-context";

interface SettingsContextProviderProps {
  children: ReactNode;
}

export const SettingsContextProvider = ({
  children,
}: SettingsContextProviderProps) => {
  const [settings, setSettings] = useState({
    theme: "dark",
    isSidebarOpen: true,
  });
  return (
    <SettingsContext.Provider value={{settings, setSettings}}>
      {children}
    </SettingsContext.Provider>
  );
};
