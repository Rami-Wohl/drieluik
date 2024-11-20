import {
  AandachtsOefening1,
  AandachtsOefening2,
  AandachtsOefening3,
} from "~/components/sections/craving/aandachtsoefeningen";
import { AdemhalingsOefening1 } from "~/components/sections/craving/ademhalingsoefeningen";
import { CravingCheck } from "~/components/sections/craving/craving-check";
import {
  OntspanningsOefening1,
  OntspanningsOefening2,
} from "~/components/sections/craving/ontspanningsoefeningen";
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
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Craving check
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <CravingCheck />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="ademhalingsoefeningen"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Ademhalingsoefening
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                De ademhaling onder controle krijgen is een sterke basis voor
                omgaan met craving. Daarom gebruiken we dit in de basis van
                bijna iedere oefening. Hier onder volgt een oefening die je
                regelmatig kan herhalen.
              </p>
              <div className="my-2 flex flex-col gap-2">
                <AdemhalingsOefening1 />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="ontspanningsoefeningen"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Ontspanningsoefeningen
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                De ontspanningsoefening is een goede basis om steeds naar terug
                te keren. We zetten ontspanningsoefeningen in, omdat de meeste
                craving een vorm van arousal (spanning) is. Je kan twee stadia
                aanbrengen in het vormgeven van de ontspanningsoefeningen. De
                eerste is meer gericht op bewust spanning uit het lichaam te
                laten en de tweede is meer gericht op het visualiseren.
              </p>
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                Klik op een ontspanningsoefening om de instructies te lezen:
              </p>
              <div className="my-2 flex flex-col gap-2">
                <OntspanningsOefening1 />
                <OntspanningsOefening2 />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="aandachtsoefeningen"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Aandachtsoefeningen
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
                Klik op een aandachtsoefening om de instructies te lezen:
              </p>
              <div className="my-2 flex flex-col gap-2">
                <AandachtsOefening1 />
                <AandachtsOefening2 />
                <AandachtsOefening3 />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="verbeeldingsoefeningen"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Verbeeldingsoefeningen
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">LET OP!</span> Deze oefeningen
                pas uitvoeren als men vertrouwd is met de voorgaande oefeningen.
                Dit omdat de craving vaak toeneemt tijdens het doen van deze
                oefening. Het is cruciaal om regelmatig de craving te checken en
                daarna te investeren in het omlaag brengen daar van. Ook is het
                belangrijk om de oefening te voltooien om deze nuttig te laten
                zijn. Vergelijkbaar met verschillende soorten trauma behandeling
                ga je imaginair aan de slag om de lading die de persoon bij
                bepaalde beelden heeft te laten doen afnemen. Het uitvoeren van
                deze oefeningen kan meerdere positieve effecten hebben:
              </p>
              <ul className="flex flex-col gap-3 px-4">
                {" "}
                <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                  Je kan leren dat de craving weer te verlagen is via
                  ontspanningsoefeningen
                </li>
                <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                  Je kan in contact komen met de nadelen van gebruik
                </li>
                <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                  Je krijgt als therapeut de mogelijkheid om het narratief aan
                  te vullen waar nodig{" "}
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
