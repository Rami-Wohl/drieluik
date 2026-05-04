import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import BalansIcon from "~/components/icons/zingeving/balans-icon";
import { Button } from "~/components/ui/button";
import { ListItem } from "~/components/ui/list-item";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { Divider } from "~/components/ui/text-components/divider";

export function Balans() {
  return (
    <Dialog>
      <GameContainer
        icon={<BalansIcon height={72} width={72} />}
        title="Balansspel"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Balansspel
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Wat zijn de voor- en nadelen van gebruik?
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
                  Cliënt inzicht geven in wat stoppen of veranderen oplevert en
                  wat het voortzetten van problematisch gedrag kost, ter
                  versterking van motivatie tot verandering.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Whiteboard, schrijfblok of digitaal bord, stiften/pennen
                </td>
              </tr>
            </tbody>
          </table>
          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <SubSectionHeader>
            Stap 1: Introductie van de oefening
          </SubSectionHeader>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Leg uit wat het balansspel inhoudt: de cliënt brengt samen met jou
              in kaart:
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  de nadelen van voortgezet problematisch gedrag, en
                </ListItem>
                <ListItem>de voordelen van stoppen of veranderen.</ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              Benadruk dat het gaat om persoonlijke reflectie, er zijn geen
              “juiste” of “foute” antwoorden.
            </ListItem>
            <ListItem ordered>
              Stel gerust: het kan confronterend zijn, neem de tijd en pauzeer
              indien nodig.
            </ListItem>
          </ol>
          <SubSectionHeader>
            Stap 2: Benoem het specifieke gedrag
          </SubSectionHeader>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Vraag de cliënt een concreet gedrag of middel te kiezen waarop de
              oefening zich richt.
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Voorbeelden: “Roken”, “Overmatig gamen”, “Te veel snoepen”,
                  “Uitstellen”.
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              Schrijf dit duidelijk op zodat het uitgangspunt helder is.
            </ListItem>
          </ol>
          <div className="mb-4 flex w-full flex-col items-center justify-center">
            <BalansTabel />
          </div>
          <SubSectionHeader>Stap 3: Vul de balans in</SubSectionHeader>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Teken twee kolommen:
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>Voordelen van stoppen</ListItem>
                <ListItem>Nadelen van doorgaan</ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              Vraag de cliënt om minstens 5 punten per kolom op te schrijven.
            </ListItem>
            <ListItem ordered>
              Gebruik leidvragen om de cliënt te ondersteunen:
              <br />
              <br />
              <b>Voordelen van stoppen/veranderen:</b>
              <ul className="mb-2 mt-2 flex flex-col gap-1 px-4">
                <ListItem>Wat zou er beter worden in jouw leven?</ListItem>
                <ListItem>Welke problemen verdwijnen of verminderen?</ListItem>
                <ListItem>Hoe voel je je lichamelijk en mentaal?</ListItem>
                <ListItem>Wat win je op de lange termijn?</ListItem>
              </ul>
              <br />
              <b>Nadelen van doorgaan/handhaven van het probleemgedrag:</b>
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>Wat blijft moeilijk als je doorgaat?</ListItem>
                <ListItem>
                  Welke negatieve gevolgen ervaar je nu al of zie je op termijn?
                </ListItem>
                <ListItem>
                  Wat kost dit je (tijd, geld, gezondheid, relaties)?
                </ListItem>
              </ul>
            </ListItem>
          </ol>
          <SubSectionHeader>Stap 4: Bespreking en reflectie</SubSectionHeader>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Bespreek kort welke kolom voor de cliënt zwaarder weegt.
            </ListItem>
            <ListItem ordered>
              Stel verdiepende reflectievragen:
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>Welke punten raken je het meest en waarom?</ListItem>
                <ListItem>
                  Wat is de kleinste, haalbare eerste stap richting verandering?
                </ListItem>
                <ListItem>
                  Hoe ziet je leven eruit over 6 maanden als je stopt/doorgaat?
                </ListItem>
              </ul>
            </ListItem>
          </ol>
          <SubSectionHeader>
            Stap 5: Formuleer een intentie of besluit
          </SubSectionHeader>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Vraag de cliënt één korte zin te formuleren die zijn/haar huidige
              motivatie of intentie richting verandering verwoordt.
              <br />
              <br />
              Voorbeeld:{" "}
              <i>“Ik wil deze week één kleine stap zetten richting stoppen.”</i>
            </ListItem>
          </ol>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Focus op de voordelen van verandering en de nadelen van doorgaan,
              niet op voor- en nadelen van beide opties.{" "}
            </ListItem>
            <ListItem>
              Stimuleer de cliënt om <b>eerlijke, persoonlijke voorbeelden</b>{" "}
              te geven.
            </ListItem>
            <ListItem>
              Respecteer grenzen; sommige nadelen kunnen emotioneel beladen
              zijn.
            </ListItem>
            <ListItem>Beloon inzet, niet perfectie van de balans.</ListItem>
            <ListItem>
              Gebruik stiltes en neem de tijd om inzichten te laten landen.
            </ListItem>
            <ListItem>
              Bespreek de oefening bij voorkeur direct in de sessie, maar laat
              het ook als huiswerk herhalen voor verdieping.
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

function BalansTabel() {
  return (
    <div className="relative mt-2 flex h-60 w-full flex-col items-center justify-center lg:my-6 lg:mb-4 lg:h-60 lg:scale-100 lg:px-6">
      <table
        className={`h-full w-full border-collapse border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        <thead>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              Voordelen
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              Nadelen
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              1.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              1.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              2.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              2.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              3.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              3.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              4.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              4.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              5.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              5.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              6.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              6.
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
