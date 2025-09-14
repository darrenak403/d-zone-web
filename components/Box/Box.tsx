import React, {CSSProperties, FC, ReactNode} from "react";
import {useSettingsContext} from "@/context/settings/settings-context";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: "boxBg" | "baseBg";
  style?: CSSProperties;
}

const Box: FC<BoxProps> = ({children, type = "boxBg", style, ...other}) => {
  const {
    settings: {theme: globalTheme},
  } = useSettingsContext();

  // Xác định màu nền dựa vào theme
  const backgroundColor =
    type === "boxBg"
      ? globalTheme === "dark"
        ? "rgb(33, 43, 54)"
        : "white"
      : globalTheme === "dark"
      ? "black"
      : "#F4F6F8";

  return (
    <div
      {...other}
      style={{
        backgroundColor,
        boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.03)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
