/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import BurgerMenuIcon from "../icons/burgermenu-icon";
import useScrollPosition from "~/hooks/use-scroll-position";
import { NavLink } from "./nav-link";
import { useNavContext } from "~/context/nav-context";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MiddelenIcon from "../icons/middelen-icon";
import CravingIcon from "../icons/craving-icon";
import ZingevingIcon from "../icons/zingeving-icon";

const routes = {
  main: "/",
  missie: "/missie-en-visie",
  middelen: "/middelen",
  craving: "/craving",
  zingeving: "/zingeving",
  contact: "/contact",
  help: "/help",
  instrument: "/meet-instrument",
};

const NavComponents = () => {
  const {
    mobileMenuRef,
    mobileMenuHandlerRef,
    isMobileMenuVisible,
    setMobileMenuVisible,
  } = useNavContext();

  const path = usePathname();

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [setMobileMenuVisible, path]);

  const { isOnTop } = useScrollPosition();
  const hideTopMenu = path === "/";
  const hideNavBar = path === "/waardenlijst";

  return (
    <div>
      <nav
        ref={mobileMenuRef}
        className={`fixed left-0 top-0 z-[2] flex h-[calc(100%-55px)] flex-col items-center justify-between border-r-2 border-[#545c68] border-opacity-10 bg-gradient-to-b from-[#ffffff] to-background text-left ${
          isMobileMenuVisible ? "translate-x-0" : "-translate-x-full"
        } min-h-full w-full pt-[55px] transition-transform duration-500 ease-in-out lg:w-80`}
      >
        <div className="flex h-full w-full flex-col justify-center">
          <NavLink
            href={routes.main}
            title={"Home"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.missie}
            title={"Missie & Visie"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.instrument}
            title={"Meet instrument"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.help}
            title={"Help"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.contact}
            title={"Contact"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
        </div>
      </nav>
      <div
        className={`fixed z-[2] w-full transition-transform duration-500 ease-in-out ${hideNavBar ? "-translate-y-20" : "translate-y-0"}`}
      >
        <div
          className={`relative flex h-[80px] flex-wrap items-center justify-center ${isOnTop ? "bg-transparent" : "bg-[#c9cdd3]"} px-4 py-1`}
        >
          <div ref={mobileMenuHandlerRef}>
            <button
              className="z-10 mr-auto flex h-10 w-10 scale-75 cursor-pointer flex-col justify-around border-none p-0"
              onClick={() => {
                setMobileMenuVisible(!isMobileMenuVisible);
              }}
              tabIndex={1}
            >
              <BurgerMenuIcon stroke={"#b1b1b1"} height={40} width={40} />{" "}
            </button>
          </div>
          <div
            className={`${hideTopMenu ? "-translate-y-20" : "translate-y-0"} absolute flex flex-wrap items-center justify-center transition-transform duration-1000 ease-in-out`}
          >
            <h2 className="flex flex-row gap-6 font-sans text-base text-black text-opacity-80">
              <Link href="/middelen">
                <div
                  className={`${path === "/middelen" ? "-translate-x-1 scale-125 lg:-translate-x-2 lg:scale-[1.35]" : "translate-x-0 scale-100"} rounded-md border-2 border-red-900 border-opacity-20 bg-red-900 bg-opacity-10 p-2 transition-transform duration-500`}
                >
                  <MiddelenIcon height={24} width={24} />
                </div>
              </Link>
              <Link href="/craving">
                <div
                  className={`${path === "/craving" ? "scale-125 lg:scale-[1.35]" : "scale-100"} rounded-md border-2 border-blue-900 border-opacity-20 bg-blue-900 bg-opacity-10 p-2 transition-transform duration-500`}
                >
                  <CravingIcon
                    height={24}
                    width={24}
                    className="fill-blue-950"
                  />
                </div>
              </Link>
              <Link href="/zingeving">
                <div
                  className={`${path === "/zingeving" ? "translate-x-1 scale-125 lg:translate-x-2 lg:scale-[1.35]" : "translate-x-0 scale-100"} rounded-md border-2 border-green-900 border-opacity-20 bg-green-900 bg-opacity-10 p-2 transition-transform duration-500`}
                >
                  <ZingevingIcon height={24} width={24} />
                </div>
              </Link>
            </h2>
          </div>

          <div className="ml-auto flex flex-row items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default NavComponents;
