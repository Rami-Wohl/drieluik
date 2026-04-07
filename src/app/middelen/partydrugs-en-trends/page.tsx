import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionParagraph } from "~/components/ui/text-components/subsection-paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Partydrugs & Trends" />
      <Tabs
        defaultValue="algemeen"
        className="relative w-full bg-transparent p-0 text-opacity-70"
      >
        <TabsList className="relative mb-10 w-full flex-col md:mb-0 md:flex-row">
          <TabsTrigger
            className="w-full bg-red-900 bg-opacity-30 font-sans text-[1.1rem] tracking-[0.1rem] opacity-90 hover:bg-opacity-50 data-[state=active]:bg-opacity-50"
            value="algemeen"
          >
            Algemene Kennis
          </TabsTrigger>
          <TabsTrigger
            className="w-full bg-red-900 bg-opacity-30 font-sans text-[1.1rem] tracking-[0.1rem] opacity-90 hover:bg-opacity-50 data-[state=active]:bg-opacity-50"
            value="voorlichting"
          >
            Voorlichting
          </TabsTrigger>
          <TabsTrigger
            className="w-full bg-red-900 bg-opacity-30 font-sans text-[1.1rem] tracking-[0.1rem] opacity-90 hover:bg-opacity-50 data-[state=active]:bg-opacity-50"
            value="afbouwtips"
          >
            Afbouwtips
          </TabsTrigger>
        </TabsList>
        <TabsContent value="algemeen">
          <PartydrugsAlgemeen />
        </TabsContent>
        <TabsContent value="voorlichting">
          <PartydrugsVoorlichting />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <PartydrugsAfbouwtips />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const PartydrugsAlgemeen = () => {
  return (
    <>
      <StyledParagraph header="Wat is Partydrugs?">
        Partydrugs (distikstofmonoxide of N₂O) is een kleurloos gas met een
        licht zoete geur en smaak. Het wordt gebruikt als medisch anestheticum,
        in voedingsmiddelen (slagroompatronen), en recreatief als roesmiddel.
        Recreatief gebruik gebeurt meestal door het gas in te ademen via
        ballonnen, die gevuld worden met Partydrugs uit ampullen of cilinders.
      </StyledParagraph>
      <StyledParagraph header="Werkingsmechanisme:">
        Partydrugs heeft een verdovende en dissociatieve werking. Het beïnvloedt
        neurotransmitters zoals dopamine en kan leiden tot tijdelijke euforie,
        ontspanning en vervorming van geluid en beeld. Het effect begint vrijwel
        direct na inademing en houdt enkele minuten aan.
      </StyledParagraph>
      <SubSectionHeader>Fysieke en mentale effecten:</SubSectionHeader>
      <div className="mb-8 flex flex-col gap-2">
        {" "}
        <SubSectionParagraph>
          <span className="font-semibold">Korte termijn:</span> euforie,
          duizeligheid, verlies van controle over spieren, veranderingen in
          waarneming, korte bewustzijnsveranderingen.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Langetermijnrisico&apos;s:</span>{" "}
           neurologische schade door vitamine B12-tekort, schade aan het
          zenuwstelsel (zoals tintelingen of gevoelloosheid in ledematen), en
          ademhalingsproblemen.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Overdosisrisico: </span>
          bij overmatig gebruik of verkeerd gebruik (in een afgesloten ruimte)
          kan een zuurstoftekort ontstaan, wat gevaarlijk is.
        </SubSectionParagraph>
      </div>
      <SubSectionHeader>Hoe herken je gebruik?</SubSectionHeader>
      <ul className="mb-8 flex flex-col gap-2 px-4">
        <ListItem>
          {" "}
          Restanten van ballonnen en ampullen of cilinders in de omgeving.
        </ListItem>
        <ListItem>
          Symptomen zoals duizeligheid, slaperigheid, ongecontroleerd lachen, en
          coördinatieproblemen.
        </ListItem>
        <ListItem>
          <span className="font-semibold"> Bij frequent gebruik:</span>{" "}
          tintelingen of gevoelloosheid, vermoeidheid, en concentratieproblemen.
        </ListItem>
      </ul>
      <StyledParagraph header="Sociaal gedrag:">
        Partydrugsgebruik is vaak verbonden aan feesten of informeel gebruik in
        sociale settings. Frequent gebruik kan leiden tot sociale isolatie of
        verminderde prestaties op werk of school.
      </StyledParagraph>
    </>
  );
};

const PartydrugsVoorlichting = () => {
  return (
    <>
      <SubSectionHeader>Risico&apos;s van gebruik:</SubSectionHeader>
      <div className="mb-8 flex flex-col gap-2">
        {" "}
        <SubSectionParagraph>
          <span className="font-semibold">Fysieke gevolgen: </span> zenuwschade,
          vitamine B12-tekort, zuurstoftekort, bevriezing van luchtwegen (bij
          direct inhaleren uit een ampul).
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">Psychische gevolgen: </span>
          afhankelijkheid van het middel voor ontspanning of euforie, toename
          van angstgevoelens, of cognitieve achteruitgang.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Sociale gevolgen: </span>
          conflicten met naasten, achteruitgang in functioneren, en financiële
          problemen door overmatig gebruik.
        </SubSectionParagraph>
      </div>
      <SubSectionHeader>Harm reduction (veilig gebruik):</SubSectionHeader>
      <div className="mb-8 flex flex-col gap-2">
        <SubSectionParagraph>
          <span className="font-semibold">Dosering:</span> Gebruik matig en niet
          frequent.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Manier van gebruik:</span> Alleen via
          ballonnen inademen (nooit direct uit een ampul of cilinder).
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Omgeving: </span> Gebruik in een
          veilige omgeving, bij voorkeur zittend, om vallen en letsel te
          voorkomen.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Herstel: </span> Laat voldoende tijd
          tussen gebruiksmomenten om vitamine B12-tekorten te voorkomen.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Aanvulling: </span> Overweeg het
          gebruik van vitamine B12-supplementen bij regelmatig gebruik.
        </SubSectionParagraph>
      </div>
      <SubSectionHeader>Verantwoorde communicatie:</SubSectionHeader>
      <ul className="mb-8 flex flex-col gap-2 px-4">
        <ListItem>
          Maak gebruikers bewust van de risico&apos;s zonder te oordelen.
        </ListItem>
        <ListItem>
          Bespreek concrete signalen van problematisch gebruik, zoals dagelijks
          gebruik of het gebruik van grote hoeveelheden.{" "}
        </ListItem>
      </ul>
      <StyledParagraph header="Voorlichting aan patiënten:">
        Benadruk dat recreatief gebruik altijd risico&apos;s met zich meebrengt,
        maar dat minder frequent en veilig gebruik de kans op ernstige gevolgen
        kan beperken. Stimuleer patiënten om alternatieven voor ontspanning en
        euforie te vinden.
      </StyledParagraph>
    </>
  );
};

const PartydrugsAfbouwtips = () => {
  return (
    <>
      <SubSectionHeader>Is afbouwen altijd nodig?</SubSectionHeader>
      <ul className="mb-8 flex flex-col gap-2 px-4">
        <ListItem>
          Partydrugs veroorzaakt geen fysieke afhankelijkheid zoals alcohol of
          opiaten, maar psychologische afhankelijkheid kan een uitdaging
          zijn.{" "}
        </ListItem>
        <ListItem>
          Afbouwen kan nuttig zijn voor patiënten die gewend zijn aan frequent
          gebruik en moeite hebben om direct te stoppen.
        </ListItem>
      </ul>
      <SubSectionHeader>Hoe af te bouwen:</SubSectionHeader>
      <div className="mb-8 flex flex-col gap-2">
        {" "}
        <SubSectionParagraph>
          <span className="font-semibold">Stap 1:</span> Breng het gebruik in
          kaart (frequentie, hoeveelheid).
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">Stap 2:</span>
          Stel duidelijke doelen, zoals het verminderen van het aantal
          gebruiksmomenten per week.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">Stap 3:</span> Creëer vervangende
          routines voor ontspanning, zoals mindfulness, sporten, of creatieve
          activiteiten.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">Stap 4:</span> Verlaag de hoeveelheid
          per sessie en verleng de tijd tussen sessies.
        </SubSectionParagraph>
      </div>
      <StyledParagraph header="Direct stoppen:">
        Bij ernstig gebruik of tekenen van neurologische schade (bijvoorbeeld
        tintelingen of gevoelloosheid) is direct stoppen aan te raden, met
        ondersteuning van medische begeleiding. Overweeg een bloedonderzoek op
        vitamine B12-tekorten of andere complicaties.
      </StyledParagraph>
      <SubSectionHeader>Ondersteuning bij afbouw:</SubSectionHeader>
      <div className="mb-8 flex flex-col gap-2">
        {" "}
        <SubSectionParagraph>
          <span className="font-semibold">Therapeutische begeleiding: </span>{" "}
          motiverende gespreksvoering, cognitieve gedragstherapie.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">Sociale steun: </span> betrek
          vrienden, familie, of zelfhulpgroepen.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">Medische begeleiding: </span>
          controleer op vitamine B12-tekorten en ondersteun herstel door middel
          van supplementen indien nodig.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">Herstel en nazorg:</span> Zorg voor
          een plan om terugval te voorkomen, zoals het identificeren van
          triggers en strategieën om hiermee om te gaan. Moedig deelname aan
          activiteiten die positieve gevoelens opwekken en sociale verbinding
          bevorderen.
        </SubSectionParagraph>
      </div>
    </>
  );
};
