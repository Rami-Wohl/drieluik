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
import CyclusIcon from "~/components/icons/zingeving/cyclus-icon";
import { ListItem } from "~/components/ui/list-item";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { Divider } from "~/components/ui/text-components/divider";

export function Gebruikscyclus() {
  return (
    <Dialog>
      <GameContainer
        icon={<CyclusIcon height={72} width={72} />}
        title="Gebruikscyclus"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            De gebruikscyclus
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <table className="mb-6 p-3">
            <tbody>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  De cliënten inzicht geven in het patroon van zijn/haar gebruik
                  en triggers, en samen aanknopingspunten ontdekken om dit
                  patroon te doorbreken.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Whiteboard, schrijfblok, stiften/pennen, eventueel ingevuld
                  schema voor de cliënt.
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
              Leg uit wat de gebruikscyclus is: gedrag volgt vaak een herhaald
              patroon van trigger → gedachte → gevoel → gedrag → gevolg.
            </ListItem>
            <ListItem ordered>
              Benadruk: inzicht in dit patroon is de eerste stap naar
              verandering.
            </ListItem>
            <ListItem ordered>
              Geef voorbeelduitleg aan de cliënt:
              <br />
              <br />
              <i>
                “Veel van ons gedrag verloopt in een cyclus: een situatie of
                gevoel roept een gedachte op, die leidt tot een actie. Bij
                gebruik zien we vaak een herhaald patroon. Door dit te
                herkennen, kun je manieren vinden om het te doorbreken.”
              </i>
            </ListItem>
          </ol>
          <StyledParagraph
            marginBottom="mb-2"
            header="Stap 2: De vijf fasen van de cyclus"
          >
            Bespreek samen met de cliënt het meest recente gebruiksmoment en
            werk de vijf fasen uit:
          </StyledParagraph>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Trigger – wat gebeurde er vlak voordat je wilde gebruiken?
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Extern: situaties, mensen, plaatsen, geuren.
                </ListItem>
                <ListItem>
                  Intern: gedachten, gevoelens, lichamelijke sensaties (stress,
                  verveling, eenzaamheid).
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              Gedachte – welke gedachten gingen door je hoofd?
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Bijvoorbeeld: “Ik heb dit nodig”, “Het maakt toch niet uit”,
                  “Ik verdien het.”
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              Gevoel – welke emoties en lichamelijke sensaties ervaarde je?
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>Emoties: onrust, frustratie, angst, leegte.</ListItem>
                <ListItem>
                  Lichamelijk: spanning, hartkloppingen, druk op de borst.
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              Gedrag – wat deed je concreet?
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Bespreek het gebruik: wat, hoe, waar en wanneer.
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              Gevolg – wat gebeurde daarna en hoe voelde je je?
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Positief: (bijv. ontspanning, ontsnappen aan gevoelens.)
                </ListItem>
                <ListItem>
                  Negatief:(bijv. schuld, schaamte, fysieke klachten.)
                </ListItem>
              </ul>
            </ListItem>
            <SubSectionHeader>Voorbeeld: </SubSectionHeader>
            <ul className="mt-2 flex flex-col gap-1 px-4">
              <ListItem>Trigger: stress op werk.</ListItem>
              <ListItem>
                Gedachte: “Ik kan hier niet mee omgaan, ik heb iets nodig.”
              </ListItem>
              <ListItem>Gevoel: spanning, leegte.</ListItem>
              <ListItem>Gedrag: alcohol drinken.</ListItem>
              <ListItem>
                Gevolg: tijdelijke ontspanning, later schuldgevoel en meer
                stress.
              </ListItem>
            </ul>
          </ol>
          <StyledParagraph
            marginBottom="mb-2"
            header="Stap 3: Inzicht en interventiemogelijkheden"
          >
            Bespreek samen met de cliënt waar ingegrepen kan worden in de
            cyclus:
          </StyledParagraph>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              <b>Triggers:</b> vermijden of leren omgaan met externe of interne
              triggers.
            </ListItem>
            <ListItem ordered>
              <b>Gedachten:</b> uitdagen of vervangen door positievere,
              realistische gedachten.
            </ListItem>
            <ListItem ordered>
              <b>Gevoelens:</b> leren reguleren via ademhaling, mindfulness of
              ontspanningstechnieken.
            </ListItem>
            <ListItem ordered>
              <b>Alternatief gedrag: :</b> andere manieren vinden om dezelfde
              behoefte te vervullen (bijv. sporten, muziek, sociale contacten).
            </ListItem>
            <ListItem ordered>
              <b>Omgaan met gevolgen:</b> negatieve emoties en schuld herkennen
              en hanteren zonder terugval.
            </ListItem>
          </ol>
          <SubSectionHeader>
            Stap 4: Oefening: eigen cyclus in kaart brengen
          </SubSectionHeader>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Laat de cliënt zijn/haar meest recente gebruiksmoment stap voor
              stap beschrijven.
            </ListItem>
            <ListItem ordered>
              Vul samen een schema in met de vijf fasen.
            </ListItem>
            <ListItem ordered>
              Reflecteer:
              <ul className="mt-2 flex flex-col gap-1 px-4">
                <ListItem>Welke patronen vallen op?</ListItem>
                <ListItem>
                  Waar wil de cliënt verandering in aanbrengen?
                </ListItem>
              </ul>
            </ListItem>
          </ol>
          <SubSectionHeader>Stap 5: Plan van aanpak</SubSectionHeader>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Korte termijn doel: kies één fase van de cyclus om aan te pakken.
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Bijvoorbeeld: leren omgaan met stress (trigger) of negatieve
                  gedachten herkennen (gedachte).
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <b>Lange termijn doel</b>: ontwikkel strategieën voor meerdere
              fases, met alternatieve copingstrategieën.
            </ListItem>
          </ol>
          <SubSectionHeader>Stap 6: Reflectie en afsluiting</SubSectionHeader>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Bespreek wat de cliënt heeft geleerd over zijn/haar patroon.
            </ListItem>
            <ListItem ordered>
              Formuleer samen een intentie of actiepunt:
              <br />
              <br />
              <i>
                “Deze week ga ik oefenen met [concreet alternatief gedrag]
                wanneer ik stress voel.”
              </i>
              <br />
              <br />
            </ListItem>
            <ListItem ordered>
              Moedig aan om de oefening te herhalen bij nieuwe situaties en de
              cyclus actief te blijven observeren.
            </ListItem>
          </ol>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Gebruik open vragen en wees nieuwsgierig naar de beleving van de
              cliënt.
            </ListItem>
            <ListItem>
              Respecteer emoties; sommige fasen (zoals schuld of schaamte)
              kunnen zwaar zijn.
            </ListItem>
            <ListItem>
              Werk stap voor stap en maak de oefening visueel op een whiteboard
              of schema.
            </ListItem>
            <ListItem>
              Focus op patroonherkenning en coping in plaats van het
              bekritiseren van gedrag.
            </ListItem>
            <ListItem>
              Moedig aan om de cyclus ook als huiswerk bij te houden voor
              verdieping.
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
