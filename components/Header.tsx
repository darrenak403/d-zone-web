import React from "react";
import style from "@/styles/header.module.css";
import Box from "./Box/Box";
import Image from "next/image";
import {Flex} from "antd";
import ModeButton from "./ModeButton";
import {UserButton} from "@clerk/nextjs";
import SidebarButton from "./SidebarButton";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <Box style={{height: "100%"}}>
        <div className={style.header}>
          <div className={style.container}>
            {/* SidebarButton */}
            <div className={style.sidebarButton}>
              <SidebarButton />
            </div>

            {/* logo left-side */}
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={110}
              height={35}
              className={style.logo}
            />
            {/* right-side */}
            <Flex gap={16} align="center">
              {/* mode button */}
              <ModeButton />
              {/* user button */}
              <UserButton afterSignOutUrl="/sign-in" />
            </Flex>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Header;
