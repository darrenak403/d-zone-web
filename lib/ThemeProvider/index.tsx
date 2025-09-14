"use client";

import {useSettingsContext} from "@/context/settings/settings-context";
import {ConfigProvider, theme} from "antd";
import React from "react";

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const {
    settings: {theme: globalTheme},
  } = useSettingsContext();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          globalTheme === "light"
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
        token: {
          fontFamily: "inherit",
          colorPrimary: "#f9aa11",
          // Không truyền boxBg, baseBg vì không phải token hợp lệ
        },
        // Không truyền Typography nếu không custom hợp lệ
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
