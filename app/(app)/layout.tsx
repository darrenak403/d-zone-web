"use client";
import {SettingsContextProvider} from "@/context/settings/settings-provider";
import ThemeProvider from "@/lib/ThemeProvider";
import React from "react";

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <SettingsContextProvider>
      <ThemeProvider>
        <div>{children}</div>
      </ThemeProvider>
    </SettingsContextProvider>
  );
};

export default HomeLayout;
