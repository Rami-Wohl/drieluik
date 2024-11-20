import { type ReactNode } from "react";

export function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
      {children}
    </li>
  );
}
