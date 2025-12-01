import type { ReactNode } from "react";

export function TableCellStyled({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td
      className={`${className} min-w-28 border border-black border-opacity-70 px-2 text-left font-sans text-[#333333]`}
    >
      {" "}
      {children}
    </td>
  );
}
