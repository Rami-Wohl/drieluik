"use client";

import { type ReactNode } from "react";
import NavComponents from "./nav-container";
import { NavProvider } from "~/context/nav-context";

export const LayoutWithNav = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavProvider>
        <NavComponents />
        <div className="text-fontPrimary flex min-h-screen w-full flex-col items-center justify-center bg-opacity-70">
          {children}
        </div>
      </NavProvider>
    </>
  );
};
