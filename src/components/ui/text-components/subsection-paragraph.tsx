import { type ReactNode } from "react";

export function SubSectionParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="w-full font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
      {children}
    </p>
  );
}
