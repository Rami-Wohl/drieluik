import type { ReactNode } from "react";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";

export function StyledParagraph({
  header,
  children,
  marginBottom = "mb-6",
}: {
  header?: string;
  marginBottom?: "mb-2" | "mb-6";
  children: ReactNode;
}) {
  return (
    <div className={`${marginBottom}`}>
      {header && <SubSectionHeader>{header}</SubSectionHeader>}
      <p className="mb-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
        {children}
      </p>
    </div>
  );
}
