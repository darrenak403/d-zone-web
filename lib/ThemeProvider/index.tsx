"use client";

import {useSettingsContext} from "@/context/settings/settings-context";
import {ConfigProvider, theme} from "antd";
// import {useCallback} from "react";

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const {
    settings: {theme: globalTheme},
  } = useSettingsContext();

  // const BoxBg = useCallback(() => {
  //   return globalTheme === "dark" ? "rgb(33, 43, 54)" : "white";
  // }, [globalTheme]);

  // const BaseBg = useCallback(() => {
  //   return globalTheme === "dark" ? "black" : "#F4F6F8";
  // }, [globalTheme]);

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
          // boxBg: BoxBg(),
          // baseBg: BaseBg(),
        },
        // components: {
        //   Typography: {
        //     fontSize: "none",
        //     lineHeight: "none",
        //     fontWeightStrong: "none",
        //   },
        // },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
