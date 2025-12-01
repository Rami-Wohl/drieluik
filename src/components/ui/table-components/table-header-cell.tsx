import type { ReactNode } from "react";

export function TableHeaderCellStyled({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`${className} min-w-28 border border-black border-opacity-70 px-2 text-left font-sans text-[#333333]`}
    >
      {children}
    </th>
  );
}
