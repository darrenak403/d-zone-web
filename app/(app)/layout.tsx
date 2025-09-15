"use client";
import React from "react";
import Box from "@/components/Box/Box";
import {SettingsContextProvider} from "@/context/settings/settings-provider";
import ThemeProvider from "@/lib/ThemeProvider";
import style from "@/styles/homeLayout.module.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <SettingsContextProvider>
      <ThemeProvider>
        <Box
          type="baseBg"
          style={{position: "relative", width: "100vw", height: "100vh"}}
        >
          <div className={style.wrapper}>
            {/* header */}
            <Header />
            <div className={style.container}>
              <Sidebar />
              <div className={style.page_body}>{children}</div>
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </SettingsContextProvider>
  );
};

export default HomeLayout;
