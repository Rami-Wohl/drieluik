import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import WaardenspelIcon from "~/components/icons/zingeving/waardenspel-icon";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { Divider } from "~/components/ui/text-components/divider";
import { ListItem } from "~/components/ui/list-item";

export function Waardenspel() {
  return (
    <Dialog>
      <GameContainer
        icon={<WaardenspelIcon height={72} width={72} />}
        title="Waardenspel"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Waardenspel
          </DialogTitle>
        </DialogHeader>
        <div className="mb-8 flex flex-col font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <StyledParagraph marginBottom="mb-2" header="Doel van de oefeningen">
            De waardenoefeningen helpen de cliënt te reflecteren op wat hij/zij
            belangrijk vindt in zijn/haar leven. Door kernwaarden in kaart te
            brengen en te prioriteren, krijgt de cliënt inzicht in zijn/haar
            keuzes, motivatie en herstelproces. Afhankelijk van de oefening kan
            dit ook inzicht geven in hoe waarden door de tijd veranderen en hoe
            ze in de toekomst kunnen worden ingezet.
          </StyledParagraph>
          <Divider />
          <SubSectionHeader size="large">
            Oefening 1: De Waardenpiramide
          </SubSectionHeader>
          <table className="mb-6 p-3">
            <tbody>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  De cliënt laten nadenken over wat hij/zij belangrijk vindt,
                  keuzes prioriteren en een “Top 5 Waarden” identificeren.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Kaarten met elk een waarde (50 kaarten,
                  <span>
                    {" "}
                    een lijst met alle waarden vind je{" "}
                    <Link
                      href={"/waardenlijst"}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="text-blue-600 underline underline-offset-1"
                    >
                      hier
                    </Link>
                    )
                  </span>
                  , eventueel reflectiekaarten met vragen.{" "}
                </td>
              </tr>
            </tbody>
          </table>

          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <StyledParagraph header="Stap 1: Introductie">
            Leg uit dat de oefening gaat over het ontdekken van wat echt
            belangrijk is voor de cliënt en dat dit kan helpen bij keuzes en
            herstel.
          </StyledParagraph>
          <StyledParagraph header="Stap 2:	Ronde 1 – Eerste selectie">
            Geef de cliënt de stapel van 50 waarden en vraag hem/haar om de 25
            waarden te selecteren die op dit moment het belangrijkst zijn.{" "}
          </StyledParagraph>
          <StyledParagraph header="Stap 3: Ronde 2 – Kernwaarden">
            Laat de cliënt de 25 waarden verder terugbrengen tot 10 kernwaarden.
            Sta kort stil bij de reden waarom bepaalde waarden gekozen worden en
            anderen niet.{" "}
          </StyledParagraph>
          <StyledParagraph header="Stap 4: Ronde 3 – Top 5">
            Vraag de cliënt uit deze 10 waarden de 5 belangrijkste waarden te
            kiezen.{" "}
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2" header="Stap 5: Reflectie">
            Bespreek samen de “Top 5 Waarden”. Stel vragen zoals:{" "}
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            “Hoe passen deze waarden in jouw dagelijks leven?”
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            “Hoe kunnen deze waarden je ondersteunen in je herstel?”
          </StyledParagraph>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Geef ruimte voor uitleg, maar forceer geen keuzes.
            </ListItem>
            <ListItem>
              Gebruik reflectievragen om verdieping te creëren.
            </ListItem>
            <ListItem>
              Maak de oefening visueel door de kaarten te rangschikken of te
              stapelen.
            </ListItem>
            <ListItem>
              Variatieopties: koppel waarden aan scenario’s of gebruik extra
              reflectievragen.
            </ListItem>
          </ul>
          <Divider />
          <SubSectionHeader size="large">
            Oefening 1: De Waardenpiramide
          </SubSectionHeader>
          <table className="mb-6 p-3">
            <tbody>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  De cliënt inzicht geven in hoe zijn/haar waarden door de tijd
                  zijn veranderd en welke waarden hij/zij wil meenemen in de
                  toekomst ter ondersteuning van herstel en persoonlijke groei.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Groot vel papier of whiteboard, stiften, post-its in drie
                  kleuren (voor Verleden, Heden, Toekomst), kaarten of post-its
                  voor waarden (ongeveer 15)
                </td>
              </tr>
            </tbody>
          </table>
          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <StyledParagraph header="Stap 1: Introductie">
            Leg uit dat de oefening inzicht geeft in waarden in verleden, heden
            en toekomst en hoe deze kunnen helpen bij keuzes en herstel.
          </StyledParagraph>
          <StyledParagraph header="Stap 2: Voorbereiding">
            Teken een horizontale tijdlijn op papier of whiteboard en label drie
            punten: Verleden, Heden, Toekomst. Laat de cliënt 15 waarden kiezen
            die voor hem/haar belangrijk zijn.
          </StyledParagraph>
          <StyledParagraph
            header="Stap 3: Waarden toewijzen"
            marginBottom="mb-2"
          >
            Teken een horizontale tijdlijn op papier of whiteboard en label drie
            punten: Verleden, Heden, Toekomst. Laat de cliënt 15 waarden kiezen
            die voor hem/haar belangrijk zijn.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            <b>Verleden:</b> Welke waarden waren belangrijk en hebben jou
            gevormd?
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            <b>Heden :</b> Welke waarden zijn nu belangrijk in je dagelijks
            leven en herstel?
          </StyledParagraph>
          <StyledParagraph>
            <b>Toekomst:</b> Welke waarden wil je belangrijk maken om je doelen
            en welzijn te ondersteunen?
          </StyledParagraph>
          <StyledParagraph
            header="Stap 4: Reflectie per periode"
            marginBottom="mb-2"
          >
            Bespreek de waarden met vragen zoals:
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            <b>Verleden:</b> “Waarom was deze waarde destijds belangrijk?”
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            <b>Heden :</b> “Welke rol speelt deze waarde nu in jouw leven?”
          </StyledParagraph>
          <StyledParagraph>
            <b>Toekomst:</b> “Hoe kan deze waarde je helpen in de toekomst?”
          </StyledParagraph>
          <StyledParagraph header="Stap 5: Waarden prioriteren">
            Vraag de cliënt om per periode de 2-3 belangrijkste waarden te
            kiezen en bespreek hoe deze hebben gewerkt of kunnen werken.
          </StyledParagraph>
          <SubSectionHeader>Stap 6: Afsluiting</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Bespreek samenvattend:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>Hoe het verleden hem/haar heeft gevormd</ListItem>
            <ListItem>Hoe het heden helpt bij keuzes</ListItem>
            <ListItem>
              Hoe toekomstwaarden ondersteuning bieden in herstel
            </ListItem>
            <ListItem>
              Eventueel actieplan: acties om waarden in het dagelijks leven te
              integreren
            </ListItem>
          </ul>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Stimuleer de cliënt om zowel terug te kijken als vooruit te
              denken.
            </ListItem>
            <ListItem>
              Help bij het concretiseren van abstracte waarden.{" "}
            </ListItem>
            <ListItem>
              Gebruik kleuren of symbolen om tijdsperiodes visueel te
              onderscheiden.
            </ListItem>
            <ListItem>
              Zorg dat reflectievragen persoonlijk en concreet zijn.
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
