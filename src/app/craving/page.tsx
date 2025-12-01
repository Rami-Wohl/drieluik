import InfoIcon from "~/components/icons/info-icon";
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
  VerbeeldingsOefening1,
  VerbeeldingsOefening2,
} from "~/components/sections/craving/verbeeldingsoefeningen";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";

function CravingInfo() {
  return (
    <Dialog>
      <DialogTrigger>
        <InfoIcon fill="none" />
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[1300px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-80 bg-gradient-to-b from-[#ffffff] to-blue-50">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Info hier
          </DialogTitle>
        </DialogHeader>
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="rounded-md border bg-transparent"
          >
            Sluiten
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default function CravingPage() {
  return (
    <>
      <div className="mt-32 flex w-full max-w-[800px] flex-col items-center gap-12 px-4">
        <div className="flex gap-4">
          <Pageheader text="Craving" />
          <CravingInfo />
        </div>
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
              <ul className="mb-4 flex flex-col gap-3 px-4">
                {" "}
                <ListItem>
                  Je kan leren dat de craving weer te verlagen is via
                  ontspanningsoefeningen
                </ListItem>
                <ListItem>
                  Je kan in contact komen met de nadelen van gebruik
                </ListItem>
                <ListItem>
                  Je krijgt als therapeut de mogelijkheid om het narratief aan
                  te vullen waar nodig{" "}
                </ListItem>
              </ul>
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                Klik op een verbeeldingsoefening om de instructies te lezen:
              </p>
              <div className="my-2 flex flex-col gap-2">
                <VerbeeldingsOefening1 />
                <VerbeeldingsOefening2 />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
