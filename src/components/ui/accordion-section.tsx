import { AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";
import { type ReactNode } from "react";

export function AccordionSection({
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
      <AccordionTrigger className="mb-1 rounded-md bg-red-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
        {section}
      </AccordionContent>
    </AccordionItem>
  );
}
