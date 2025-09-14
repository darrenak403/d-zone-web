import React from "react";

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <SettingsContextProvider>
      <div>{children}</div>
    </SettingsContextProvider>
  );
};

export default HomeLayout;
