import { AccordionSubSection, StyledParagraph } from "./cocaine";
import { ListItem } from "~/components/ui/list-item";
import { Accordion } from "~/components/ui/accordion";

export function LachgasSection() {
  return (
    <Accordion type="single" collapsible className="w-full text-black">
      <AccordionSubSection
        value="algemene-kennis"
        title="Algemene kennis"
        section={
          <>
            <StyledParagraph header="Wat is lachgas?">
              Lachgas (distikstofmonoxide of N₂O) is een kleurloos gas met een
              licht zoete geur en smaak. Het wordt gebruikt als medisch
              anestheticum, in voedingsmiddelen (slagroompatronen), en
              recreatief als roesmiddel. Recreatief gebruik gebeurt meestal door
              het gas in te ademen via ballonnen, die gevuld worden met lachgas
              uit ampullen of cilinders.
            </StyledParagraph>
            <StyledParagraph header="Werkingsmechanisme:">
              Lachgas heeft een verdovende en dissociatieve werking. Het
              beïnvloedt neurotransmitters zoals dopamine en kan leiden tot
              tijdelijke euforie, ontspanning en vervorming van geluid en beeld.
              Het effect begint vrijwel direct na inademing en houdt enkele
              minuten aan.
            </StyledParagraph>
            <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
              Fysieke en mentale effecten:
            </h3>
            <ul className="mb-8 flex flex-col gap-2">
              {" "}
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Korte termijn:</span> euforie,
                duizeligheid, verlies van controle over spieren, veranderingen
                in waarneming, korte bewustzijnsveranderingen.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">
                  {" "}
                  Langetermijnrisico&apos;s:
                </span>{" "}
                 neurologische schade door vitamine B12-tekort, schade aan het
                zenuwstelsel (zoals tintelingen of gevoelloosheid in ledematen),
                en ademhalingsproblemen.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold"> Overdosisrisico: </span>
                bij overmatig gebruik of verkeerd gebruik (in een afgesloten
                ruimte) kan een zuurstoftekort ontstaan, wat gevaarlijk is.
              </li>
            </ul>
            <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
              Hoe herken je gebruik?
            </h3>
            <ul className="mb-8 list-inside">
              <ListItem>
                {" "}
                Restanten van ballonnen en ampullen of cilinders in de omgeving.
              </ListItem>
              <ListItem>
                Symptomen zoals duizeligheid, slaperigheid, ongecontroleerd
                lachen, en coördinatieproblemen.
              </ListItem>
              <ListItem>
                <span className="font-semibold"> Bij frequent gebruik:</span>{" "}
                tintelingen of gevoelloosheid, vermoeidheid, en
                concentratieproblemen.
              </ListItem>
            </ul>
            <StyledParagraph header="Sociaal gedrag:">
              Lachgasgebruik is vaak verbonden aan feesten of informeel gebruik
              in sociale settings. Frequent gebruik kan leiden tot sociale
              isolatie of verminderde prestaties op werk of school.
            </StyledParagraph>
          </>
        }
      />
      <AccordionSubSection
        value="voorlichting"
        title="Voorlichting"
        section={
          <>
            <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
              Risico&apos;s van gebruik:
            </h3>
            <ul className="mb-8 flex flex-col gap-2">
              {" "}
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Fysieke gevolgen: </span>{" "}
                zenuwschade, vitamine B12-tekort, zuurstoftekort, bevriezing van
                luchtwegen (bij direct inhaleren uit een ampul).
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Psychische gevolgen: </span>
                afhankelijkheid van het middel voor ontspanning of euforie,
                toename van angstgevoelens, of cognitieve achteruitgang.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold"> Sociale gevolgen: </span>
                conflicten met naasten, achteruitgang in functioneren, en
                financiële problemen door overmatig gebruik.
              </li>
            </ul>
            <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
              Harm reduction (veilig gebruik):
            </h3>
            <ul className="mb-8 flex flex-col gap-2">
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Dosering:</span> Gebruik matig
                en niet frequent.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold"> Manier van gebruik:</span>{" "}
                Alleen via ballonnen inademen (nooit direct uit een ampul of
                cilinder).
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold"> Omgeving: </span> Gebruik in
                een veilige omgeving, bij voorkeur zittend, om vallen en letsel
                te voorkomen.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold"> Herstel: </span> Laat voldoende
                tijd tussen gebruiksmomenten om vitamine B12-tekorten te
                voorkomen.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold"> Aanvulling: </span> Overweeg
                het gebruik van vitamine B12-supplementen bij regelmatig
                gebruik.
              </li>
            </ul>
            <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
              Verantwoorde communicatie:
            </h3>
            <ul className="mb-8 list-inside">
              <ListItem>
                Maak gebruikers bewust van de risico&apos;s zonder te oordelen.
              </ListItem>
              <ListItem>
                Bespreek concrete signalen van problematisch gebruik, zoals
                dagelijks gebruik of het gebruik van grote hoeveelheden.{" "}
              </ListItem>
            </ul>
            <StyledParagraph header="Voorlichting aan patiënten:">
              Benadruk dat recreatief gebruik altijd risico&apos;s met zich
              meebrengt, maar dat minder frequent en veilig gebruik de kans op
              ernstige gevolgen kan beperken. Stimuleer patiënten om
              alternatieven voor ontspanning en euforie te vinden.
            </StyledParagraph>
          </>
        }
      />
      <AccordionSubSection
        value="afbouwtips"
        title="Afbouwtips"
        section={
          <>
            <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
              Is afbouwen altijd nodig?
            </h3>
            <ul className="mb-8 list-inside">
              <ListItem>
                Lachgas veroorzaakt geen fysieke afhankelijkheid zoals alcohol
                of opiaten, maar psychologische afhankelijkheid kan een
                uitdaging zijn.{" "}
              </ListItem>
              <ListItem>
                Afbouwen kan nuttig zijn voor patiënten die gewend zijn aan
                frequent gebruik en moeite hebben om direct te stoppen.
              </ListItem>
            </ul>
            <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
              Hoe af te bouwen:
            </h3>
            <ul className="mb-8 flex flex-col gap-2">
              {" "}
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Stap 1:</span> Breng het gebruik
                in kaart (frequentie, hoeveelheid).
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Stap 2:</span>
                Stel duidelijke doelen, zoals het verminderen van het aantal
                gebruiksmomenten per week.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Stap 3:</span> Creëer
                vervangende routines voor ontspanning, zoals mindfulness,
                sporten, of creatieve activiteiten.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Stap 4:</span> Verlaag de
                hoeveelheid per sessie en verleng de tijd tussen sessies.
              </li>
            </ul>
            <StyledParagraph header="Direct stoppen:">
              Bij ernstig gebruik of tekenen van neurologische schade
              (bijvoorbeeld tintelingen of gevoelloosheid) is direct stoppen aan
              te raden, met ondersteuning van medische begeleiding. Overweeg een
              bloedonderzoek op vitamine B12-tekorten of andere complicaties.
            </StyledParagraph>
            <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
              Ondersteuning bij afbouw:
            </h3>
            <ul className="mb-8 flex flex-col gap-2">
              {" "}
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">
                  Therapeutische begeleiding:{" "}
                </span>{" "}
                motiverende gespreksvoering, cognitieve gedragstherapie.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Sociale steun: </span> betrek
                vrienden, familie, of zelfhulpgroepen.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Medische begeleiding: </span>
                controleer op vitamine B12-tekorten en ondersteun herstel door
                middel van supplementen indien nodig.
              </li>
              <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                <span className="font-semibold">Herstel en nazorg:</span> Zorg
                voor een plan om terugval te voorkomen, zoals het identificeren
                van triggers en strategieën om hiermee om te gaan. Moedig
                deelname aan activiteiten die positieve gevoelens opwekken en
                sociale verbinding bevorderen.
              </li>
            </ul>
          </>
        }
      />
    </Accordion>
  );
}
