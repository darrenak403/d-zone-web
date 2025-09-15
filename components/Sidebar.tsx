"use client";
import React from "react";
import style from "@/styles/sidebar.module.css";
import Box from "./Box/Box";
import {sidebarRoutes} from "@/lib/sidebarRoutes";
import Link from "next/link";
import {Typography} from "antd";
import {Icon} from "@iconify/react/dist/iconify.js";
import {useRouter} from "next/navigation";
import {useClerk} from "@clerk/nextjs";

const Sidebar = () => {
  const router = useRouter();
  const {signOut} = useClerk();
  return (
    <div className={style.wrapper}>
      <Box className={style.container}>
        {sidebarRoutes().map((route, index) => (
          <Link key={index} href={route.router}>
            {/* icon */}
            <Typography>
              <Icon icon={route.icon} width={20} />
            </Typography>
            {/* name */}
            <Typography>{route.name}</Typography>
          </Link>
        ))}

        <Link
          href={""}
          className={style.signout}
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
          <Typography>Sign out</Typography>
        </Link>
      </Box>
    </div>
  );
};

export default Sidebar;
