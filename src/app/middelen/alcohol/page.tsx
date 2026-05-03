import { AlcoholAfbouwTable } from "~/app/middelen/alcohol/alcohol-afbouwtabel";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { DrugPropertiesTable } from "../drug-properties-table";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Alcohol" />
      <Tabs
        defaultValue="algemeen"
        className="relative w-full bg-transparent p-0 text-opacity-70"
      >
        <TabsList className="relative mb-10 w-full flex-col md:mb-0 md:flex-row">
          <TabsTrigger
            className="w-full bg-red-900 bg-opacity-30 font-sans text-[1.1rem] tracking-[0.1rem] opacity-90 hover:bg-opacity-50 data-[state=active]:bg-opacity-50"
            value="algemeen"
          >
            Algemeen
          </TabsTrigger>
          <TabsTrigger
            className="w-full bg-red-900 bg-opacity-30 font-sans text-[1.1rem] tracking-[0.1rem] opacity-90 hover:bg-opacity-50 data-[state=active]:bg-opacity-50"
            value="afbouwtips"
          >
            Afbouwtips
          </TabsTrigger>
          <TabsTrigger
            className="w-full bg-red-900 bg-opacity-30 font-sans text-[1.1rem] tracking-[0.1rem] opacity-90 hover:bg-opacity-50 data-[state=active]:bg-opacity-50"
            value="overig"
          >
            Overig
          </TabsTrigger>
        </TabsList>
        <TabsContent value="algemeen">
          <AlcoholAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <AlcoholAfbouwstips />
        </TabsContent>
        <TabsContent value="overig">
          <AlcoholOverig />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const AlcoholAlgemeen = () => {
  return (
    <>
      <DrugPropertiesTable
        werkzameStof="Ethanol (C₂H₅OH)"
        gebruiksvorm="Drinken"
        uiterlijkeKenmerken="Vloeistof (bier, wijn etc)"
        verslavingspotentie="2,1"
        schadeTaxatie="2,16"
      />
      <StyledParagraph>
        Alcohol is één van de meest genormaliseerde psychoactieve stoffen in
        Nederland. Juist daardoor is problematisch gebruik vaak moeilijker te
        herkennen dan bij andere middelen. Niet omdat de signalen er niet zijn,
        maar omdat ze minder opvallen. Drinken past binnen sociale situaties,
        wordt verwacht en vaak zelfs aangemoedigd. Daardoor verschuift de grens
        tussen recreatief en problematisch gebruik geleidelijk, zonder duidelijk
        kantelpunt.
      </StyledParagraph>{" "}
      <StyledParagraph>
        Voor behandelaars is het daarom belangrijk om niet alleen te kijken naar
        hoeveel iemand drinkt, maar vooral naar de functie van het gebruik en de
        mate van controle. Alcohol wordt problematisch wanneer het een vaste rol
        krijgt in emotieregulatie, ontspanning of functioneren. Dat zie je
        bijvoorbeeld wanneer iemand alcohol nodig heeft om tot rust te komen, te
        slapen, sociale situaties aan te kunnen of juist om gevoelens te dempen.
      </StyledParagraph>{" "}
      <StyledParagraph>
        Een praktisch aanknopingspunt in de voorlichting is het begrip strijd.
        Niet: “drink je veel?”, maar:
        <br />
        <i>hoeveel moeite kost het je om niet te drinken?</i>
        Wanneer niet-drinken inspanning vraagt, verschuift gebruik vaak van
        keuze naar automatisme.
      </StyledParagraph>{" "}
      <StyledParagraph>
        Herkenning zit zelden in één duidelijk signaal, maar in patronen. Denk
        aan gebruik dat steeds vaker vanzelfsprekend wordt, aan momenten waarop
        iemand vooraf iets anders van plan was dan wat er uiteindelijk gebeurt,
        of aan het langzaam verdwijnen van alternatieve manieren om te
        ontspannen. Ook subtiele vormen van controleverlies zijn relevant: vaker
        drinken dan gepland, moeite met stoppen als iemand eenmaal begonnen is,
        of het steeds opnieuw maken van afspraken met zichzelf die niet
        standhouden.
      </StyledParagraph>{" "}
      <StyledParagraph>
        Wat helpt in de voorlichting is om het gesprek weg te halen van schuld
        en richting mechanisme te brengen. Alcoholverslaving gaat niet over
        zwakte, maar over herhaling. Gedrag dat vaak genoeg wordt gekoppeld aan
        verlichting of ontspanning, wordt op den duur automatisch. Dat maakt het
        begrijpelijk, en juist daardoor ook behandelbaar.
      </StyledParagraph>{" "}
      <StyledParagraph>
        Alcohol onderscheidt zich van veel andere middelen niet zozeer door hoe
        het werkt, maar door de context waarin het gebruikt wordt. Waar andere
        middelen vaak een duidelijke grens hebben (je gebruikt of je gebruikt
        niet), zit alcohol verweven in het dagelijks leven. Het is aanwezig bij
        sociale momenten, rituelen en ontspanning. Daardoor ontstaat een
        situatie waarin iemand tegelijkertijd probeert te minderen én continu
        wordt blootgesteld aan cues om te drinken.
      </StyledParagraph>{" "}
      <StyledParagraph>
        Dat maakt werken met alcoholverslaving anders dan bij veel andere
        middelen. Stoppen betekent vaak niet alleen afstand nemen van een stof,
        maar ook opnieuw leren omgaan met situaties die voorheen automatisch met
        alcohol gepaard gingen. Voorlichting kan hier helpen door dit expliciet
        te maken: het gaat niet alleen om minder drinken, maar om andere
        manieren ontwikkelen om met spanning, verveling, sociale druk en emoties
        om te gaan.
      </StyledParagraph>{" "}
      <StyledParagraph>
        Tegelijk vraagt alcohol om een andere klinische alertheid. Bij langdurig
        en zwaar gebruik kan lichamelijke afhankelijkheid ontstaan, waarbij
        abrupt stoppen risico’s met zich meebrengt, zoals
        ontwenningsverschijnselen en in ernstige gevallen insulten of delier.
        Dit maakt het belangrijk om bij twijfel altijd te screenen op frequentie
        en hoeveelheid, en zo nodig medische begeleiding te overwegen.
      </StyledParagraph>{" "}
      <StyledParagraph>
        Tot slot is het goed om te benoemen dat alcohol vaak meer wegneemt dan
        het op het eerste gezicht lijkt. Niet alleen lichamelijke gezondheid,
        maar ook herstelvermogen, emotieregulatie en relaties kunnen langzaam
        onder druk komen te staan. De ernst van een alcoholprobleem zit daarom
        niet alleen in de hoeveelheid, maar in de mate waarin het andere
        domeinen van het leven verdringt.{" "}
      </StyledParagraph>{" "}
    </>
  );
};

const AlcoholAfbouwstips = () => {
  return (
    <>
      <div className="mb-6 w-full border border-black p-1 px-2 font-sans text-sm tracking-[1px] text-[#333333]">
        Let op: Stoppen met alcohol kan risicovol zijn. Doe dit daarom altijd in
        overleg met het behandelteam of een verslavingsarts!
      </div>
      <ol className="flex flex-col px-4">
        <ListItem ordered>
          <SubSectionHeader>
            Start met een intake om de huidige situatie te begrijpen:
          </SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Gemiddelde dagelijkse consumptie en soort alcohol.{" "}
            </ListItem>
            <ListItem>
              Gezonheidsstatus: eventuele medische aandoeningen, medicatie,
              mentale gezondheid.{" "}
            </ListItem>
            <ListItem>
              Motivatie en eerdere pogingen tot stoppen of verminderen.{" "}
            </ListItem>
          </ul>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>Medische monitoring</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              Overweeg een medische check-up en consult met een arts, zeker bij
              hogere consumpties of bij mensen met een complexe medische
              geschiedenis.{" "}
            </ListItem>
            <ListItem>
              Bij vermoeden van ernstige ontwenningsverschijnselen kan een
              gecontroleerde detox noodzakelijk zijn.
            </ListItem>
          </ul>
        </ListItem>
        <ListItem ordered>
          <StyledParagraph header="Begeleiding en ondersteuning">
            Plan wekelijkse gesprekken met een behandelaar of therapeut om te
            ondersteunen, doelen bij te stellen, en eventuele moeilijke momenten
            door te spreken.
          </StyledParagraph>{" "}
        </ListItem>
      </ol>
      <div className="mb-4 overflow-x-scroll">
        <AlcoholAfbouwTable />
      </div>
    </>
  );
};

const AlcoholOverig = () => {
  return (
    <>
      <ol className="flex flex-col px-4">
        <ListItem ordered>
          <SubSectionHeader>Psychologische ondersteuning</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              Bespreek mogelijke triggers en manieren om craving aan te pakken.
            </ListItem>
            <ListItem>
              Werk met technieken zoals mindfulness of ademhalingsoefeningen
              voor stressvermindering.
            </ListItem>
          </ul>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>Gezonde routines</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              Vervang drinkmomenten door activiteiten zoals sport,
              ontspanningsoefeningen of hobby&apos;s.
            </ListItem>
          </ul>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>Medicatie (indien nodig)</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              Voor patiënten die moeite hebben om zonder hulp af te bouwen, kan
              een arts overwegen om medicatie (zoals acamprosaat of naltrexon)
              voor te schrijven ter ondersteuning.{" "}
            </ListItem>
          </ul>
        </ListItem>
      </ol>
      <h3 className="mb-6 mt-12 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
        Veiligheid en haalbaarheid
      </h3>
      <ul className="flex flex-col px-4">
        <ListItem>
          <StyledParagraph>
            <span className="font-semibold">Flexibiliteit: </span> Pas het
            schema aan op de voortgang en eventuele moeilijkheden van de
            patiënt. Soms is vertraging beter dan forceren.
          </StyledParagraph>
        </ListItem>
        <ListItem>
          <StyledParagraph>
            <span className="font-semibold">
              Medische aandacht bij symptomen:
            </span>{" "}
            Bij ernstige ontwenningsverschijnselen zoals trillen, hartkloppingen
            of angstklachten, direct medisch contact opnemen.
          </StyledParagraph>
        </ListItem>
      </ul>
    </>
  );
};
