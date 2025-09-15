"use client";
import React, {useCallback} from "react";
import style from "@/styles/sidebar.module.css";
import Box from "./Box/Box";
import {sidebarRoutes} from "@/lib/sidebarRoutes";
import Link from "next/link";
import {Typography} from "antd";
import {Icon} from "@iconify/react/dist/iconify.js";
import {usePathname, useRouter} from "next/navigation";
import {useClerk} from "@clerk/nextjs";
import cx from "classnames";
import {useSettingsContext} from "@/context/settings/settings-context";
import SidebarContainer from "./SidebarContainer";

const Sidebar = () => {
  const router = useRouter();
  const {signOut} = useClerk();
  const pathname = usePathname();
  interface SidebarRoute {
    router: string;
    icon: string;
    name: string;
  }

  const {
    settings: {isSidebarOpen},
    setSettings,
  } = useSettingsContext();

  const handleDrawerClose = useCallback(() => {
    setSettings((prev) => ({...prev, sidebarOpen: false}));
  }, [setSettings]);

  const isActive = (route: SidebarRoute): string => {
    if (route.router === pathname) return style.active;
    return "";
  };

  const activeColor = (route: SidebarRoute) => {
    return isActive(route) && "var(--primary)";
  };
  return (
    <SidebarContainer
      isSidebarOpen={isSidebarOpen}
      setIsDrawerOpen={handleDrawerClose}
    >
      <div className={style.wrapper}>
        <Box className={style.container}>
          {sidebarRoutes().map((route, index) => (
            <Link
              key={index}
              href={route.router}
              className={cx(style.item, isActive(route))}
            >
              {/* icon */}
              <Typography style={{color: activeColor(route)}}>
                <Icon icon={route.icon} width={20} />
              </Typography>
              {/* name */}
              <Typography
                style={{color: activeColor(route)}}
                className="typoSubtitle2"
              >
                {route.name}
              </Typography>
            </Link>
          ))}

          <Link
            href={""}
            className={style.item}
            onClick={() => {
              signOut(() => {
                router.push("/sign-in");
              });
            }}
          >
            {/* icon */}
            <Typography>
              <Icon icon={"solar:logout-2-bold"} width={20} />
            </Typography>
            {/* name */}
            <Typography className="typoSubtitle2">Sign out</Typography>
          </Link>
        </Box>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
