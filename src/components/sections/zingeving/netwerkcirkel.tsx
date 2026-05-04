import NetwerkcirkelIcon from "~/components/icons/zingeving/netwerkcirkel-icon";
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
import { ListItem } from "~/components/ui/list-item";
import { Divider } from "~/components/ui/text-components/divider";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";

export function Netwerkcirkel() {
  return (
    <Dialog>
      <GameContainer
        icon={
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-black border-opacity-30 bg-green-600 bg-opacity-70">
            <NetwerkcirkelIcon height={48} width={48} />
          </div>
        }
        title="Sociaal Netwerk"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Sociaal Netwerk
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Wie heb je momenteel in je omgeving en hoe goed werkt dat?
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
                  Deze oefening helpt de cliënt inzicht te krijgen in zijn/haar
                  sociale netwerk, de rol en invloed van verschillende mensen
                  daarin, en te reflecteren op welke relaties versterkt of juist
                  op afstand gehouden kunnen worden. Het ondersteunt
                  bewustwording van sociale steun en het effect van relaties op
                  welzijn.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Groot vel papier of whiteboard, pennen/stiften of markers,
                  eventueel stickers of gekleurde notities om mensen te markeren
                </td>
              </tr>
            </tbody>
          </table>
          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <SubSectionHeader>
            Stap 1: introductie van de oefening{" "}
          </SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Leg uit wat het doel is: inzicht krijgen in het huidige sociale
              netwerk en de kwaliteit van relaties.
            </ListItem>
            <ListItem>
              Benoem dat de cliënt zichzelf centraal plaatst en dat het gaat om
              eerlijk en open kijken naar relaties, zonder oordeel.
            </ListItem>
          </ul>
          <div className="mb-8 flex w-full flex-col items-center justify-center">
            <NetwerkcirkelCirkels />
          </div>
          <SubSectionHeader>Stap 2: Teken de netwerkcirkel</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Vraag de cliënt om zichzelf in het midden van een vel te tekenen
              of te plaatsen.
            </ListItem>
            <ListItem>
              Teken drie concentrische cirkels rondom de cliënt en nummer ze van
              binnen naar buiten (binnenste cirkel = meest belangrijk/impactvol,
              buitenste cirkel = minder intensieve relaties).
            </ListItem>
          </ul>
          <SubSectionHeader>
            Stap 3: Inventarisatie van contacten
          </SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Laat de cliënt alle belangrijke mensen in zijn/haar leven
              opnoemen.
            </ListItem>
            <ListItem>
              Plaats deze mensen in één van de cirkels, afhankelijk van hun rol
              en betekenis. Hoe belangrijker iemand is, hoe dichter bij het
              midden.{" "}
            </ListItem>
          </ul>
          <SubSectionHeader>Stap 4: Analyse en bespreking</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Bespreek met de cliënt of de huidige plaatsing klopt.
            </ListItem>
            <ListItem>
              Vraag of sommige mensen een grotere of kleinere rol zouden moeten
              hebben en waarom.
            </ListItem>
            <ListItem>
              Bespreek mogelijke acties: relaties versterken, meer contact
              zoeken, of bepaalde mensen op afstand houden als ze een negatieve
              invloed hebben.{" "}
            </ListItem>
          </ul>
          <SubSectionHeader>Stap 5: Reflectie op de oefening</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Vraag de cliënt wat hij/zij heeft ontdekt over het eigen netwerk.
            </ListItem>
            <ListItem>
              Bespreek gevoelens die tijdens het invullen naar voren kwamen.
            </ListItem>
            <ListItem>
              Vraag welke concrete stappen de cliënt eventueel wil nemen om het
              netwerk te verbeteren of te optimaliseren.{" "}
            </ListItem>
          </ul>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Zorg voor een veilige en open sfeer; benadruk dat er geen ‘foute’
              antwoorden zijn.
            </ListItem>
            <ListItem>
              Stimuleer dat de cliënt eerlijk kijkt naar invloedrijke relaties,
              ook als dit moeilijk voelt.
            </ListItem>
            <ListItem>
              Wees geduldig; sommige cliënten hebben tijd nodig om mensen te
              benoemen of te plaatsen.
            </ListItem>
            <ListItem>
              Gebruik visuele hulpmiddelen (kleuren, stickers) om overzichtelijk
              te werken.{" "}
            </ListItem>
            <ListItem>
              Moedig de cliënt aan na te denken over concrete acties, niet
              alleen over theoretische inzichten.{" "}
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

function NetwerkcirkelCirkels() {
  return (
    <div className="relative mb-4 mt-2 flex h-60 w-full max-w-[400px] scale-75 flex-col items-center justify-center lg:my-12 lg:h-60 lg:scale-100">
      <div
        className={`absolute z-50 flex h-80 w-80 flex-col justify-start rounded-full border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        3.
      </div>
      <div
        className={`absolute z-50 flex h-60 w-60 flex-col justify-start rounded-full border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        2.
      </div>
      <div
        className={`absolute z-50 flex h-40 w-40 flex-col justify-start rounded-full border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        1.
      </div>
      <div
        className={`absolute z-50 flex h-20 w-20 flex-col justify-center rounded-full border-2 border-black border-opacity-70 bg-slate-300 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        IK
      </div>
    </div>
  );
}
