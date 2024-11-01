"use client";

import { type ReactNode } from "react";
import NavComponents from "./nav-container";
import { NavProvider } from "~/context/nav-context";

export const LayoutWithNav = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavProvider>
        <NavComponents />
        <main className="text-fontPrimary relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-y-scroll bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-[#8D99AE]">
          {children}
        </main>
      </NavProvider>
    </>
  );
};
