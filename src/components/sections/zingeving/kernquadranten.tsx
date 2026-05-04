import KernquadrantenIcon from "~/components/icons/zingeving/kernquadranten-icon";
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
import { Divider } from "~/components/ui/text-components/divider";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";

export function GameContainer({
  icon,
  title,
}: {
  icon: JSX.Element;
  title: string;
}) {
  return (
    <DialogTrigger className="flex h-36 w-36 cursor-pointer flex-col items-center justify-between rounded-md border-4 border-green-900 border-opacity-20 bg-green-900 bg-opacity-10 pb-3 pt-4 hover:bg-opacity-20 hover:shadow-sm lg:h-40 lg:w-44">
      {icon}
      <span className="max-w-full overflow-hidden px-2 text-sm font-semibold tracking-[0.5px] text-[#333333] text-opacity-90 lg:text-lg">
        {title}
      </span>
    </DialogTrigger>
  );
}

export function Kernquadranten() {
  return (
    <Dialog>
      <GameContainer
        icon={<KernquadrantenIcon height={72} width={72} />}
        title="Kernquadranten"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Kernquadranten
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Wat zijn jouw kwaliteiten en uitdagingen?
          </h3>
        </DialogHeader>
        <div className="mb-8 flex flex-col font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <table className="mb-6 p-3">
            <tbody>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Het doel van deze oefening is om de cliënt inzicht te geven in
                  zijn/haar talenten, valkuilen, uitdagingen en allergieën,
                  zodat dit kan bijdragen aan een sterker zelfbeeld en richting
                  geeft aan herstel- en levensdoelen.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Pen en papier of een whiteboard, kernkwadrantenschema (vier
                  vakken: Kernkwaliteit, Valkuil, Uitdaging, Allergie)
                </td>
              </tr>
            </tbody>
          </table>
          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <StyledParagraph header="Stap 1: introductie van het model ">
            Leg kort uit dat het kernkwadrantenmodel helpt om te zien{" "}
            <b>
              wat iemand goed kan, waar het doorschiet en waar nog groei
              mogelijk is.
            </b>{" "}
            Benadruk dat het gaat om <b>zelfinzicht</b>, niet om goed of fout.
          </StyledParagraph>
          <div className="mb-8 flex w-full flex-col items-center justify-center">
            <KernquadrantenTabel />
          </div>
          <StyledParagraph header="Stap 2: Kernkwaliteit invullen (links boven)">
            Vraag de cliënt om een positieve eigenschap of talent op te
            schrijven waar hij/zij trots op is. Voorbeelden:
            doorzettingsvermogen, zorgzaamheid, creativiteit.
          </StyledParagraph>
          <StyledParagraph header="Stap 3: Valkuil invullen (rechtsboven)">
            Bespreek met de cliënt wat er gebeurt als deze kwaliteit doorschiet.
            Schrijf dit in het vak rechtsboven. Voorbeeld: doorzettingsvermogen
            → kan doorschieten in koppigheid.
          </StyledParagraph>
          <StyledParagraph header="Stap	4: Uitdaging invullen (rechtsonder)">
            Vraag de cliënt welke eigenschap of vaardigheid hij/zij nog kan
            ontwikkelen om beter om te gaan met deze valkuil. Schrijf dit in het
            vak rechtsonder. Voorbeeld: koppigheid → uitdaging: flexibiliteit
            ontwikkelen.
          </StyledParagraph>
          <StyledParagraph header="Stap 5: Allergie invullen (linksonder)">
            Bespreek welke eigenschap van anderen de cliënt vaak irriteert of
            frustreert. Dit is vaak een overdreven versie van de uitdaging of
            een doorschoten kwaliteit bij anderen. Schrijf dit in het linksonder
            vak.
          </StyledParagraph>
          <StyledParagraph header="Stap 6: Reflectie" marginBottom="mb-2">
            Bespreek welke eigenschap van anderen de cliënt vaak irriteert of
            frustreert. Dit is vaak een overdreven versie van de uitdaging of
            een doorschoten kwaliteit bij anderen. Schrijf dit in het linksonder
            vak.
          </StyledParagraph>
          <StyledParagraph>
            Moedig aan om ook te kijken of er nieuwe kwaliteiten ontdekt kunnen
            worden door ergens anders in het schema te beginnen.{" "}
          </StyledParagraph>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Blijf neutraal en ondersteunend; het gaat om inzicht, niet om
              kritiek.
            </ListItem>
            <ListItem>
              Gebruik voorbeelden uit het dagelijks leven van de cliënt om het
              concreet te maken.
            </ListItem>
            <ListItem>
              Stimuleer de cliënt om het schema ook later te gebruiken voor
              zelfreflectie.
            </ListItem>
          </ul>
        </div>
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="rounded-md border bg-backgroundStart bg-opacity-90"
          >
            Sluiten
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

function KernquadrantenTabel() {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center lg:my-6 lg:h-60 lg:scale-100 lg:px-6">
      <table
        className={`relative h-full w-full border-collapse border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        <tbody>
          <tr className="w-full border-2 border-black border-opacity-70">
            <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
              Kernkwaliteit
            </th>
            <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
              Valkuil
            </th>
          </tr>
          <tr className="w-full border-2 border-black border-opacity-70">
            <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
              Allergie
            </th>
            <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
              Uitdaging
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
