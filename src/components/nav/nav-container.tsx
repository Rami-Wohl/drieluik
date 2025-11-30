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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { NavSubLink } from "./nav-sublink";

const routes = {
  main: "/",
  missie: "/missie-en-visie",
  middelen: "/middelen",
  craving: "/craving",
  zingeving: "/zingeving",
  contact: "/contact",
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
        className={`fixed left-0 top-0 z-[2] flex h-screen w-full transform flex-col justify-between border-r border-white/10 bg-gradient-to-b from-backgroundStart to-background transition-transform duration-500 ease-in-out lg:w-80 ${isMobileMenuVisible ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div className="no-scrollbar flex h-full flex-col overflow-y-auto px-2 pb-10 pt-[80px]">
          <NavLink
            href={routes.main}
            title={"Home"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <Accordion type="single" collapsible className="w-full text-black">
            <AccordionItem value="nav-middelen">
              <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between border-none p-4 font-sans text-[1.1rem] tracking-[0.1rem] text-opacity-60 no-underline opacity-90 hover:bg-white hover:bg-opacity-90 hover:text-black hover:text-opacity-100">
                <span>Middelen</span>
              </AccordionTrigger>
              <AccordionContent className="no-scrollbar overflow-y-auto">
                <NavSubLink
                  href={routes.missie}
                  isActive={path === routes.missie}
                  title={"Middel 1"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.instrument}
                  isActive={path === routes.instrument}
                  title={"Middel 2"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.contact}
                  isActive={path === routes.contact}
                  title={"Middel 3"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.missie}
                  isActive={path === routes.missie}
                  title={"Middel 1"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.instrument}
                  isActive={path === routes.instrument}
                  title={"Middel 2"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.contact}
                  isActive={path === routes.contact}
                  title={"Middel 3"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.missie}
                  isActive={path === routes.missie}
                  title={"Middel 1"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.instrument}
                  isActive={path === routes.instrument}
                  title={"Middel 2"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.contact}
                  isActive={path === routes.contact}
                  title={"Middel 3"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.missie}
                  isActive={path === routes.missie}
                  title={"Middel 1"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.instrument}
                  isActive={path === routes.instrument}
                  title={"Middel 2"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.contact}
                  isActive={path === routes.contact}
                  title={"Middel 3"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.missie}
                  isActive={path === routes.missie}
                  title={"Middel 1"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.instrument}
                  isActive={path === routes.instrument}
                  title={"Middel 2"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.contact}
                  isActive={path === routes.contact}
                  title={"Middel 3"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nav-craving">
              <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between border-none p-4 font-sans text-[1.1rem] tracking-[0.1rem] text-opacity-60 no-underline opacity-90 hover:bg-white hover:bg-opacity-90 hover:text-black hover:text-opacity-100">
                <span>Craving</span>
              </AccordionTrigger>
              <AccordionContent>
                <NavSubLink
                  href={routes.missie}
                  isActive={path === routes.missie}
                  title={"Craving 1"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.instrument}
                  isActive={path === routes.instrument}
                  title={"Craving 2"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.contact}
                  isActive={path === routes.contact}
                  title={"Craving 3"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nav-zingeving">
              <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between border-none p-4 font-sans text-[1.1rem] tracking-[0.1rem] text-opacity-60 no-underline opacity-90 hover:bg-white hover:bg-opacity-90 hover:text-black hover:text-opacity-100">
                <span>Zingeving</span>
              </AccordionTrigger>
              <AccordionContent>
                <NavSubLink
                  href={routes.missie}
                  isActive={path === routes.missie}
                  title={"Zingeving 1"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.instrument}
                  isActive={path === routes.instrument}
                  title={"Zingeving 2"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
                <NavSubLink
                  href={routes.contact}
                  isActive={path === routes.contact}
                  title={"Zingeving 3"}
                  closeMenu={() => setMobileMenuVisible(false)}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
          className={`relative flex h-[80px] flex-wrap items-center justify-center ${isOnTop ? "bg-backgroundStart" : "bg-backgroundStart"} px-4 py-1`}
        >
          <div ref={mobileMenuHandlerRef}>
            <button
              className="z-10 mr-auto flex h-10 w-10 scale-75 cursor-pointer flex-col justify-around border-none p-0"
              onClick={() => {
                setMobileMenuVisible(!isMobileMenuVisible);
              }}
              tabIndex={1}
            >
              <BurgerMenuIcon stroke={"black"} height={40} width={40} />{" "}
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
