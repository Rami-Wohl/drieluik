"use client";

import { useEffect } from "react";
import BurgerMenuIcon from "../icons/burgermenu-icon";
import useScrollPosition from "~/hooks/use-scroll-position";
import { useNavContext } from "~/context/nav-context";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MiddelenIcon from "../icons/middelen-icon";
import CravingIcon from "../icons/craving-icon";
import ZingevingIcon from "../icons/zingeving-icon";
import { navMenuRoutes } from "./routes";
import { NavMenu } from "./nav-menu";
import { TopBar } from "./top-bar";

const NavComponents = () => {
  const { mobileMenuRef, isMobileMenuVisible, setMobileMenuVisible } =
    useNavContext();

  const path = usePathname();

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [setMobileMenuVisible, path]);

  return (
    <div>
      <nav
        ref={mobileMenuRef}
        className={`fixed left-0 top-0 z-[2] flex h-screen w-full transform flex-col justify-between border-r border-white/10 bg-gradient-to-b from-backgroundStart to-background transition-transform duration-500 ease-in-out lg:w-80 ${isMobileMenuVisible ? "translate-x-0" : "-translate-x-full"} `}
      >
        <NavMenu routeTree={navMenuRoutes} path={path} />
      </nav>
      <TopBar path={path} />
    </div>
  );
};

export default NavComponents;
