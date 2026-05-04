import DoelenspelIcon from "~/components/icons/zingeving/doelenspel-icon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import { Button } from "~/components/ui/button";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";
import { Divider } from "~/components/ui/text-components/divider";

export function Doelenspel() {
  return (
    <Dialog>
      <GameContainer
        icon={<DoelenspelIcon height={72} width={72} />}
        title="Doelenspel"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Doelenspel
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Wat wil je graag allemaal doen met je leven?
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
                  Gebruik het doelenspel om samen met de cliënt inzicht te
                  krijgen in wat deze belangrijk vindt bij het opnieuw vormgeven
                  van zijn of haar leven.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Pen en papier of een whiteboard, tien papiertjes/memoblaadjes
                </td>
              </tr>
            </tbody>
          </table>
          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <StyledParagraph
            marginBottom="mb-2"
            header="Stap 1: introductie van het model"
          >
            Sommige mensen merken dat gebruik niet meer past, bijvoorbeeld door
            klachten achteraf, verlies van controle of impact op werk, relaties
            of gezondheid.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Leg kort uit dat deze oefening de cliënt helpt om inzicht te krijgen
            in wat hij/zij belangrijk vindt bij het opnieuw vormgeven van
            zijn/haar leven
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Introduceer onderstaande categorieën:
          </StyledParagraph>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>Behandeling</ListItem>
            <ListItem ordered>Wonen</ListItem>
            <ListItem ordered>Financiën</ListItem>
            <ListItem ordered>Hobby’s</ListItem>
            <ListItem ordered>Werk</ListItem>
            <ListItem ordered>Opleiding</ListItem>
            <ListItem ordered>Familie</ListItem>
            <ListItem ordered>Sport</ListItem>
            <ListItem ordered>Voeding</ListItem>
            <ListItem ordered>Spiritualiteit</ListItem>
          </ol>
          <StyledParagraph header="Stap 2: Doelen formuleren">
            Geef de cliënt tien lege briefjes. De cliënt schrijft op elk briefje
            één doel. Stimuleer hem/haar om doelen te formuleren binnen
            verschillende categorieën.
          </StyledParagraph>
          <StyledParagraph header="Stap 3: Startopstelling">
            Laat de cliënt alle doelen op één stapel rechts van zich neerleggen.
            Dit is de startstapel.
          </StyledParagraph>
          <div className="mb-8 mt-2 flex w-full items-center justify-center">
            <DoelenspelKaarten />
          </div>
          <SubSectionHeader>
            Stap 4: Strijdende doelen vergelijken
          </SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              De cliënt pakt twee willekeurige doelen van de startstapel en legt
              deze recht voor zich neer. Dit zijn de strijdende doelen. Laat de
              client op basis van intuïtie kiezen welk doel het belangrijkst is,
              zonder hier te lang over na te denken.
            </ListItem>
            <ListItem>Het winnende doel blijft liggen.</ListItem>
            <ListItem>
              Het verliezende doel wordt links van de cliënt neergelegd.
            </ListItem>
            <ListItem>
              Deze stap wordt herhaald totdat er nog één doel voor de cliënt
              ligt en alle andere doelen links liggen.
            </ListItem>
          </ul>
          <StyledParagraph
            header="Stap 5: Rangorde bepalen"
            marginBottom="mb-2"
          >
            Het overgebleven doel is het belangrijkste doel. Laat de cliënt dit
            doel bovenaan leggen en nummeren als 1.
          </StyledParagraph>
          <StyledParagraph>
            Daarna worden alle overige doelen opnieuw op de startstapel rechts
            gelegd. De stappen 4 en 5 worden herhaald totdat alle doelen zijn
            gerangschikt en er een volledige prioriteitenlijst is ontstaan.{" "}
          </StyledParagraph>
          <SubSectionHeader>Stap 6: Reflectie</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Bespreek samen met de cliënt de gerangschikte doelen.
            </ListItem>
            <ListItem>Welke doelen voelen het meest belangrijk?</ListItem>
            <ListItem>Zijn er verrassingen in de volgorde?</ListItem>
            <ListItem>
              Welke doelen zijn haalbaar op korte termijn, welke op lange
              termijn?
            </ListItem>
            <ListItem>
              Welke kleine stappen kunnen worden gezet om de belangrijkste
              doelen te bereiken?
            </ListItem>
            <ListItem>
              Noteer eventueel inzichten die de cliënt zelf wil onthouden of
              verder wil uitwerken.
            </ListItem>
          </ul>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Stimuleer de cliënt om intuïtief te kiezen; voorkom overdenken.
            </ListItem>
            <ListItem>Zorg voor een rustige en veilige omgeving.</ListItem>
            <ListItem>
              Moedig diversiteit in categorieën aan; soms zijn onverwachte
              doelen belangrijk.
            </ListItem>
            <ListItem>
              Observeer patronen: welke categorieën domineren, welke blijven
              leeg?
            </ListItem>
            <ListItem>
              Stel open vragen tijdens de reflectie: “Wat valt je op?” of
              “Waarom is dit doel zo belangrijk voor je?”
            </ListItem>
            <ListItem>
              Geef de cliënt ruimte om emoties te uiten; sommige doelen roepen
              sterke gevoelens op.
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

function Kaart({
  text,
  top,
  left,
  right,
  bottom,
  z,
}: {
  text: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  z?: number;
}) {
  return (
    <div
      style={{
        top: top,
        right: right,
        left: left,
        bottom: bottom,
        zIndex: z,
      }}
      className={`absolute flex h-28 w-20 flex-col justify-end rounded-md border-2 border-black border-opacity-70 bg-slate-300 px-1 pb-3 text-center font-sans text-xs font-semibold tracking-wide text-[#333] text-opacity-90 lg:h-36 lg:w-24 lg:px-2 lg:text-base`}
    >
      {text}
    </div>
  );
}

function DoelenspelKaarten() {
  return (
    <div className="relative mb-4 mt-2 flex h-[260px] w-full max-w-[400px] flex-col items-center lg:my-4 lg:h-[340px]">
      <Kaart text={"Winnaar"} top={5} />
      <Kaart text={"Verliezers"} bottom={5} left={0} />
      <Kaart text={"Strijdende doelen"} bottom={5} z={2} />
      <div
        className={`absolute bottom-3 right-1/3 h-28 w-20 rounded-md border-2 border-black border-opacity-70 bg-slate-300 lg:h-36 lg:w-24`}
      />
      <Kaart text={"Start stapel"} bottom={5} right={0} />
    </div>
  );
}
