import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Pageheader } from "~/components/ui/pageheader";

export default function AfbouwenPage() {
  return (
    <>
      <div className="mt-32 flex w-full max-w-[800px] flex-col items-center gap-12 px-4">
        <Pageheader text="Afbouwen" />
        <Accordion type="single" collapsible className="w-full text-black">
          <AccordionItem
            value="cannabis"
            className="border-red-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-red-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Cannabis
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
              ...binnenkort beschikbaar...
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="alcohol"
            className="border-red-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-red-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Alcohol
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
              ...binnenkort beschikbaar...
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="opiaten"
            className="border-red-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-red-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Heroïne (en andere opiaten)
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
              ...binnenkort beschikbaar...
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="cocaine"
            className="border-red-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-red-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Cocaïne
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
              ...binnenkort beschikbaar...
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="ghb"
            className="border-red-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-red-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              GHB
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
              ...binnenkort beschikbaar...
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="speed"
            className="border-red-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-red-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Speed
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
              ...binnenkort beschikbaar...
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="lachgas"
            className="border-red-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-red-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Lachgas
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
              ...binnenkort beschikbaar...
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="overig"
            className="border-red-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-red-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Overig
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
              ...binnenkort beschikbaar...
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
