import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import TijdlijnIcon from "~/components/icons/zingeving/tijdlijn-icon";
import { Button } from "~/components/ui/button";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { ListItem } from "~/components/ui/list-item";
import { Divider } from "~/components/ui/text-components/divider";

export function Tijdlijn() {
  return (
    <Dialog>
      <GameContainer
        icon={<TijdlijnIcon height={72} width={72} />}
        title="Tijdlijn"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Tijdlijn
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Hoe is jouw leven tot nu toe gelopen?
          </h3>
        </DialogHeader>
        <div className="mb-6 flex flex-col font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <table className="mb-6 p-3">
            <tbody>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  De oefening helpt de cliënt inzicht te krijgen in de
                  ontwikkeling van zijn/haar leven tot nu toe. Door belangrijke
                  gebeurtenissen — zowel positieve als negatieve — in kaart te
                  brengen, wordt duidelijk hoe ervaringen hebben bijgedragen aan
                  wie de cliënt nu is. Dit bevordert zelfreflectie,
                  zelfbewustzijn en inzicht in patronen in het leven.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Groot vel papier of schetsboek, pennen, stiften of
                  kleurpotloden, eventueel notitiepapier voor aantekeningen,
                  rustige, ongestoorde omgeving
                </td>
              </tr>
            </tbody>
          </table>
          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <StyledParagraph header="Stap 1: introductie van de oefening">
            Sommige mensen merken dat gebruik niet meer past, bijvoorbeeld door
            klachten achteraf, verlies van controle of impact op werk, relaties
            of gezondheid.
          </StyledParagraph>
          <StyledParagraph header="Stap 2:	Start van de tijdlijn">
            Vraag de cliënt om een horizontale lijn te tekenen van geboorte tot
            het heden. Markeer de start (geboorte) en het einde (heden).
          </StyledParagraph>
          <div className="mb-6 flex w-full flex-col items-center justify-center">
            <TijdlijnDiagram />
          </div>
          <SubSectionHeader>
            Stap 3: Invullen van belangrijke gebeurtenissen
          </SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-4">
            <ListItem>
              Vraag de cliënt om zowel positieve als negatieve gebeurtenissen te
              noteren.
            </ListItem>
            <ListItem>
              Stimuleer de cliënt om te denken aan gebeurtenissen die hebben
              bijgedragen aan wie hij/zij nu is.
            </ListItem>
            <ListItem>
              Het kan helpen om dit op te delen in periodes of thema’s (bijv.
              kindertijd, adolescentie, volwassenheid).
            </ListItem>
          </ul>
          <SubSectionHeader>Stap 4: Verdieping en toelichting</SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-4">
            <ListItem>
              Bespreek bij elke gebeurtenis kort wat het voor de cliënt
              betekende.
            </ListItem>
            <ListItem>
              Vraag eventueel welke vaardigheden, inzichten of veranderingen
              eruit voortkwamen.
            </ListItem>
            <ListItem>
              Neem de tijd; het is prima om dit over meerdere sessies te
              spreiden of als huiswerk mee te geven.
            </ListItem>
          </ul>
          <SubSectionHeader>
            Stap 5: Reflectie op de oefening (afsluiting)
          </SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-4">
            <ListItem>
              Bespreek samen wat opviel tijdens het maken van de tijdlijn.
            </ListItem>
            <ListItem>
              Vraag naar gevoelens die naar boven kwamen en wat de cliënt
              geleerd heeft over zichzelf.
            </ListItem>
            <ListItem>
              Benoem vooruitgang of nieuwe inzichten die de cliënt heeft
              opgedaan.
            </ListItem>
          </ul>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Wees geduldig, vooral als het ophalen van oude herinneringen
              moeilijk is.
            </ListItem>
            <ListItem>
              Respecteer grenzen; sommige gebeurtenissen mogen niet besproken
              worden.
            </ListItem>
            <ListItem>
              Moedig aan om zowel positieve als negatieve gebeurtenissen op te
              nemen.
            </ListItem>
            <ListItem>
              Gebruik gerust stilte; het proces kan reflectief en emotioneel
              zijn.
            </ListItem>
            <ListItem>
              Beloon en bevestig de inzet en openheid van de cliënt, ook als het
              resultaat niet “perfect” is.
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

function TijdlijnDiagram() {
  return (
    <div className="relative my-6 mt-2 flex h-28 w-5/6 flex-col items-center justify-center">
      <div className="absolute w-full border-t-4 border-black border-opacity-70" />
      <div className="absolute bottom-1/2 left-0 h-6 border-l-4 border-black border-opacity-70" />
      <div className="absolute right-0 top-1/2 h-6 border-l-4 border-black border-opacity-70" />
      <div className="absolute left-1/3 top-1/2 h-4 border-l-4 border-black border-opacity-70" />
      <div className="absolute bottom-1/2 right-1/3 h-4 border-l-4 border-black border-opacity-70" />
      <div className="absolute -left-8 top-1 h-6 font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
        Geboorte
      </div>
      <div className="absolute -bottom-5 -right-3 h-12 font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
        Nu
      </div>
      <div className="absolute left-[calc(65%-90px)] top-1 h-12 w-full whitespace-nowrap text-nowrap font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
        Positieve gebeurtenissen
      </div>
      <div className="absolute -bottom-5 left-[calc(30%-100px)] h-12 w-full whitespace-nowrap text-nowrap font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
        Negatieve gebeurtenissen
      </div>
    </div>
  );
}
