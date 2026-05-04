import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import { Button } from "~/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import DagboekIcon from "~/components/icons/zingeving/dagboek-icon";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { Divider } from "~/components/ui/text-components/divider";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";

export function Dagboek() {
  return (
    <Dialog>
      <GameContainer
        icon={<DagboekIcon height={72} width={72} />}
        title="Dagboek"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Dagboek oefening
          </DialogTitle>
        </DialogHeader>
        <div className="mb-8 flex flex-col font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <StyledParagraph marginBottom="mb-2" header="Algemeen doel">
            Inzicht geven in gebruikspatronen, triggers en coping. Bewustwording
            van momenten van craving of gebruik. Ondersteunen van
            gedragsverandering.
          </StyledParagraph>
          <Divider />
          <SubSectionHeader size="large">
            Oefening 1: Het experiment
          </SubSectionHeader>
          <table className="mb-10 p-3">
            <tbody>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Ontdekken op welke momenten craving optreedt en hoe de cliënt
                  hiermee omgaat.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Schriftje of logboek, pen
                </td>
              </tr>
            </tbody>
          </table>
          <SubSectionHeader>Logboekformat</SubSectionHeader>
          <LogboekFormat />
          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <SubSectionHeader>Stap 1: Introductie</SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>
              Leg uit dat de cliënt een week (of afgesproken periode) een
              logboek bijhoudt.
            </ListItem>
            <ListItem>Doel: inzicht krijgen in patronen en reacties.</ListItem>
            <ListItem>
              Benadruk dat het logboek hulpmiddel is, geen oordeel.
            </ListItem>
          </ul>
          <SubSectionHeader>Stap 2: Uitleg logboek</SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>Bespreek elk veld en geef voorbeelden.</ListItem>
          </ul>
          <SubSectionHeader>
            Stap 3: Begeleiding tijdens de oefening
          </SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>Herinner dagelijks invullen.</ListItem>
            <ListItem>Stimuleer eerlijkheid en volledigheid.</ListItem>
            <ListItem>Beantwoord vragen over het format.</ListItem>
          </ul>
          <SubSectionHeader>Stap 4: Bespreken logboek</SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>Bekijk patronen en triggers.</ListItem>
            <ListItem>Stel open vragen: “Wat valt je op?”</ListItem>
            <ListItem>Onderzoek hoe de cliënt met cravings omging.</ListItem>
          </ul>
          <SubSectionHeader>Stap 5: Reflectie</SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>Wat heeft de cliënt geleerd?</ListItem>
            <ListItem>Wat ging goed, wat moeilijk?</ListItem>
            <ListItem>
              Bepaal vervolg: herhalen, aanpassen of afronden.
            </ListItem>
          </ul>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>Blijf nieuwsgierig, niet-oordelend.</ListItem>
            <ListItem>Benoem kleine successen.</ListItem>
            <ListItem>Focus op inzicht, niet op prestaties.</ListItem>
            <ListItem>
              Je kunt de cliënt laten kleuren, symbolen gebruiken of korte
              notities toevoegen om de registratie laagdrempelig en visueel
              overzichtelijk te maken.
            </ListItem>
          </ul>
          <Divider />{" "}
          <SubSectionHeader size="large">
            Oefening 2: Mindful gebruiken
          </SubSectionHeader>
          <table className="mb-10 p-3">
            <tbody>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Inzicht krijgen in gebruiksmomenten en de bijbehorende
                  gevoelens.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Schriftje of logboek, pen
                </td>
              </tr>
            </tbody>
          </table>
          <SubSectionHeader>Logboekformat</SubSectionHeader>
          <LogboekFormat2 />
          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <StyledParagraph header="Stap 1: Introductie">
            Leg uit dat ieder gebruiksmoment wordt geregistreerd. Doel: inzicht
            in patronen en emoties.
          </StyledParagraph>
          <StyledParagraph header="Stap 2: Uitleg logboek">
            Bespreek elk veld, geef voorbeelden.
          </StyledParagraph>
          <SubSectionHeader>
            Stap 3: Begeleiding tijdens registratie
          </SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>Direct invullen na gebruik.</ListItem>
            <ListItem>Eerlijkheid is belangrijker dan perfectie.</ListItem>
          </ul>
          <SubSectionHeader>Stap 4: Bespreken registraties</SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>Analyseer patronen en emoties.</ListItem>
            <ListItem>Onderzoek copingstrategieën.</ListItem>
            <ListItem>
              Bepaal voortzetting of aanpassing van de oefening.
            </ListItem>
          </ul>
          <SubSectionHeader>Stap 5: Reflectie</SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>Wat heeft de cliënt geleerd?</ListItem>
            <ListItem>Welke strategieën helpen bij verandering?</ListItem>
          </ul>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>Stel open vragen voor zelfinzicht.</ListItem>
            <ListItem>Erken kleine stappen en successen.</ListItem>
            <ListItem>
              Blijf neutraal en ondersteunend, vermijd schuldgevoelens.
            </ListItem>
            <ListItem>
              Je kunt de cliënt laten kleuren, symbolen gebruiken of korte
              notities toevoegen om de registratie laagdrempelig en visueel
              overzichtelijk te maken.
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

const LogboekFormat = () => {
  return (
    <div className="mb-6 mt-2 flex w-full flex-col gap-2 rounded-md border border-black p-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
      <span>Dag:</span>
      <span>Tijdstip van piek (openlaten indien niet van toepassing):</span>
      <span>Hoeveel craving had je toen?</span>
      <div className="my-4 flex flex-row justify-center gap-4 lg:gap-6">
        <span>n.v.t.</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <span>Aanleiding: </span>
      <span>Zo ben ik er mee omgegaan:</span>
    </div>
  );
};

const LogboekFormat2 = () => {
  return (
    <div className="mb-6 mt-2 flex w-full flex-col gap-2 rounded-md border border-black p-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
      <span>Dag:</span>
      <span>Tijdstip:</span>
      <span>Middel:</span>
      <span>Aanleiding: </span>
      <span>Hoe ik mij achteraf voelde:</span>
    </div>
  );
};
