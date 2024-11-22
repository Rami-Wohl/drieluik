import { type ReactNode } from "react";

export function ListItem({
  children,
  ordered = false,
}: {
  children: ReactNode;
  ordered?: boolean;
}) {
  return (
    <li
      className={`list-item ${ordered ? "list-decimal" : "list-disc"} pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base`}
    >
      {children}
    </li>
  );
}
