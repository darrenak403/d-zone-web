import useWindowDimensions from "@/hooks/useWindowDimensions";
import {Drawer} from "antd";
import React from "react";
import style from "@/styles/sidebar.module.css";

interface SidebarContainerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const SidebarContainer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  children,
  ...other
}: SidebarContainerProps) => {
  const {width} = useWindowDimensions() || {};
  if (width !== null && width <= 1268) {
    return (
      <Drawer
        open={isDrawerOpen}
        placement="left"
        onClose={() => setIsDrawerOpen(false)}
        {...other}
        height={"100%"}
        className={style.sidebarContainer}
      >
        <div>{children}</div>
      </Drawer>
    );
  }
};

export default SidebarContainer;
