import { type ReactNode } from "react";

export function SubSectionHeader({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:tracking-[0.1rem]">
      {children}
    </h3>
  );
}

export function SubSectionParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="w-full font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
      {children}
    </p>
  );
}
