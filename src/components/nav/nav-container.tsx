/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import BurgerMenuIcon from "../icons/burgermenu-icon";
import useScrollPosition from "~/hooks/use-scroll-position";
import { NavLink } from "./nav-link";
import { useNavContext } from "~/context/nav-context";
import { usePathname } from "next/navigation";
import Circle1Icon from "../icons/circle-1-icon";
import Circle2Icon from "../icons/circle-2-icon";
import Circle3Icon from "../icons/circle-3-icon";
import Link from "next/link";

const routes = {
  main: "/",
  about: "/over",
  pagina1: "/pagina1",
  pagina2: "/pagina2",
  pagina3: "/pagina3",
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

  return (
    <div>
      <nav
        ref={mobileMenuRef}
        className={`fixed left-0 top-0 z-[2] flex h-[calc(100%-55px)] flex-col items-center justify-between border-y border-r border-white border-opacity-10 bg-white text-left lg:bg-opacity-20 ${
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
            href={routes.about}
            title={"Over"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.pagina1}
            title={"Pagina1"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.pagina2}
            title={"Pagina2"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.pagina3}
            title={"Pagina3"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
        </div>
      </nav>
      <div
        className={`fixed z-[2] w-full transition-transform duration-500 ease-in-out`}
      >
        <div
          className={`bg-primary relative flex h-[55px] flex-wrap items-center justify-center px-4 py-1 ${isOnTop ? "bg-opacity-30" : "bg-opacity-100"}`}
        >
          <div ref={mobileMenuHandlerRef}>
            <button
              className="z-10 mr-auto flex h-10 w-10 scale-75 cursor-pointer flex-col justify-around border-none bg-transparent p-0 focus:outline-none"
              onClick={() => {
                setMobileMenuVisible(!isMobileMenuVisible);
              }}
            >
              <BurgerMenuIcon stroke={"#b1b1b1"} height={40} width={40} />{" "}
            </button>
          </div>
          <div className="absolute flex flex-wrap items-center justify-center">
            <h2 className="text-fontSecondary mt-4 flex flex-row gap-4 font-sans text-base font-bold uppercase">
              <Link href="/pagina1">
                <div
                  className={`${path === "/pagina1" ? "-translate-x-2 scale-150" : "translate-x-0 scale-100"} transition-transform duration-500`}
                >
                  <Circle1Icon stroke={"#b1b1b1"} height={40} width={40} />
                </div>
              </Link>
              <Link href="/pagina2">
                <div
                  className={`${path === "/pagina2" ? "scale-150" : "scale-100"} transition-transform duration-500`}
                >
                  <Circle2Icon stroke={"#b1b1b1"} height={40} width={40} />
                </div>
              </Link>
              <Link href="/pagina3">
                <div
                  className={`${path === "/pagina3" ? "translate-x-2 scale-150" : "translate-x-0 scale-100"} transition-transform duration-500`}
                >
                  <Circle3Icon stroke={"#b1b1b1"} height={40} width={40} />
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
