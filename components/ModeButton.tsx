import {useSettingsContext} from "@/context/settings/settings-context";
import {Icon} from "@iconify/react/dist/iconify.js";
import {Button} from "antd";
import React from "react";

const ModeButton = () => {
  const {setSettings} = useSettingsContext();
  return (
    <Button
      style={{
        border: "none",
        background: "none",
        padding: 0,
        boxShadow: "none",
      }}
      onClick={() =>
        setSettings((prev) => ({
          ...prev,
          theme: prev.theme === "dark" ? "light" : "dark",
        }))
      }
    >
      {<Icon icon={"meteocons:horizon-fill"} width={"35px"} />}
    </Button>
  );
};

export default ModeButton;
