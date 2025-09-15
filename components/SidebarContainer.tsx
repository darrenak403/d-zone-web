import React from "react";

interface SidebarContainerProps {
  isSidebarOpen: boolean;
  setIsDrawerOpen: () => void;
  children: React.ReactNode;
}

const SidebarContainer = ({
  isSidebarOpen,
  setIsDrawerOpen,
  children,
  ...other
}: SidebarContainerProps) => {
  return <div>{children}</div>;
};

export default SidebarContainer;
