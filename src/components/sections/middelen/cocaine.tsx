import { type ReactNode } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { SubSectionHeader } from "./ghb";

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

export function AccordionSubSection({
  value,
  title,
  section,
}: {
  value: string;
  title: string;
  section: ReactNode;
}) {
  return (
    <AccordionItem value={value} className="border-red-950 border-opacity-5">
      <AccordionTrigger className="mb-1 flex flex-row-reverse justify-end gap-4 rounded-md border border-b-2 border-black border-opacity-50 p-4 py-2 text-left shadow-lg hover:bg-red-900 hover:bg-opacity-20 hover:no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
        {section}
      </AccordionContent>
    </AccordionItem>
  );
}
