import type { ReactNode } from "react";

export function SubSectionHeader({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
      {children}
    </h3>
  );
}
