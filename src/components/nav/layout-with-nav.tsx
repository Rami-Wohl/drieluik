"use client";

import { type ReactNode } from "react";
import NavComponents from "./nav-container";
import { NavProvider } from "~/context/nav-context";

export const LayoutWithNav = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavProvider>
        <NavComponents />
        <main className="relative flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-backgroundStart to-background pb-12 font-sans">
          <div className="relative flex w-full max-w-7xl flex-col items-center">
            {children}
          </div>
        </main>
      </NavProvider>
      <footer className="flex h-10 w-full items-center justify-center border border-t border-black border-opacity-50">
        <span className="font-sans text-sm">
          Design en ontwikkeling door Rami Wohl © {new Date().getFullYear()}
        </span>
      </footer>
    </>
  );
};
