import {
  AdemhalingsOefening1,
  AdemhalingsOefening2,
  AdemhalingsOefening3,
} from "~/components/sections/craving/ademhalingsoefeningen";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Pageheader } from "~/components/ui/pageheader";

export default function CravingPage() {
  return (
    <>
      <div className="mt-32 flex w-full max-w-[800px] flex-col items-center gap-12 px-4">
        <Pageheader text="Craving" />
        <Accordion type="single" collapsible className="w-full text-black">
          <AccordionItem
            value="craving-check"
            className="border-blue-950 border-opacity-40"
          >
            <AccordionTrigger className="rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Craving check
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              ....
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="ademhalingsoefeningen"
            className="border-blue-950 border-opacity-40"
          >
            <AccordionTrigger className="rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Ademhalingsoefeningen
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-blue-900 bg-opacity-5 p-6">
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                Aandachtsoefeningen zijn methoden om de focus en het bewustzijn
                te trainen, gericht op het vergroten van de controle over
                gedachten en impulsen. In de verslavingszorg worden deze
                oefeningen ingezet om cliënten te helpen bewust aanwezig te zijn
                in het moment, waardoor ze minder snel overvallen worden door
                automatische reacties en cravings. Door regelmatige oefening
                kunnen cliënten beter omgaan met stressvolle situaties, hun
                impulsen beter begrijpen, en bewuster keuzes maken die
                aansluiten bij hun herstel.
              </p>
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                Klik op een ademhalingsoefening om de instructies te lezen:
              </p>
              <div className="my-2 flex flex-col gap-2">
                <AdemhalingsOefening1 />
                <AdemhalingsOefening2 />
                <AdemhalingsOefening3 />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="ontspanningsoefeningen"
            className="border-blue-950 border-opacity-40"
          >
            <AccordionTrigger className="rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Ontspanningsoefeningen
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              ....
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="aandachtsoefeningen"
            className="border-blue-950 border-opacity-40"
          >
            <AccordionTrigger className="rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Aandachts oefeningen
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              ....
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="mentaliseren"
            className="border-blue-950 border-opacity-40"
          >
            <AccordionTrigger className="rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Mentaliseren
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              ....
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
