"use client";
import {useSettingsContext} from "@/context/settings/settings-context";
import React from "react";

const MainPage = () => {
  const {
    settings: {theme},
  } = useSettingsContext();
  return (
    <>
      <h1>Hahaa</h1>
    </>
  );
};

export default MainPage;
