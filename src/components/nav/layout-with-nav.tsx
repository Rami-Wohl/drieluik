"use client";

import { type ReactNode } from "react";
import NavComponents from "./nav-container";
import { NavProvider } from "~/context/nav-context";

export const LayoutWithNav = ({ children }: { children: ReactNode }) => {
  return (
    <NavProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-backgroundStart to-background">
        <NavComponents />

        <main className="relative flex flex-1 flex-col items-center pb-12 font-sans">
          <div className="relative flex w-full max-w-7xl flex-col items-center">
            {children}
          </div>
        </main>

        {/* <footer className="flex h-10 w-full items-center justify-center border-t border-black/50">
          <span className="font-sans text-sm">
            Design en ontwikkeling door Rami Wohl © {new Date().getFullYear()}
          </span>
        </footer> */}
      </div>
    </NavProvider>
  );
};
