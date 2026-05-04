import type { ReactNode } from "react";

type SubSectionHeaderProps = { size?: "normal" | "large"; children: ReactNode };

export function SubSectionHeader({
  size = "normal",
  children,
}: SubSectionHeaderProps) {
  return (
    <h3
      className={`w-full font-sans ${size === "large" ? "mb-6 text-xl" : "mb-4 text-lg"} font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:tracking-[0.1rem]`}
    >
      {children}
    </h3>
  );
}
