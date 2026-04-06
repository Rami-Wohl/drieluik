import { AlcoholAfbouwTable } from "~/app/middelen/alcohol/alcohol-afbouwtabel";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

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
      <StyledParagraph>
        Alcohol is één van de meest genormaliseerde psychoactieve stoffen in
        Nederland. Juist daardoor is het soms lastig te zien wanneer gebruik
        verschuift van recreatief naar problematisch. Niet elk glas is een
        probleem, en niet elke zware avond maakt iemand verslaafd. Het
        onderscheid zit niet in hoeveelheden alleen, maar in relatie, functie en
        gevolgen.
      </StyledParagraph>{" "}
      <StyledParagraph
        marginBottom="mb-2"
        header=" Wanneer spreek je van verslaving in plaats van recreatief gebruik?"
      >
        Recreatief gebruik en verslaving verschillen niet in stof, maar in
        dynamiek. Bij recreatief gebruik:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>is alcohol een middel, geen doel.</ListItem>
        <ListItem>kan iemand zonder veel moeite stoppen of minderen.</ListItem>
        <ListItem>herstelt lichaam en psyche vanzelf na excessen.</ListItem>
        <ListItem>blijft alcohol geïntegreerd in een breder leven. </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">Bij verslaving:</StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>wordt alcohol een regulatiestrategie.</ListItem>
        <ListItem>kost niet-drinken actieve inspanning.</ListItem>
        <ListItem>keert onrust of leegte terug zodra alcohol wegvalt.</ListItem>
        <ListItem>verschuift het leven langzaam rondom het gebruik. </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Een belangrijk criterium is strijd.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Niet: <span className="italic">“Ik drink graag.” </span>{" "}
      </StyledParagraph>
      <StyledParagraph>
        Maar:{" "}
        <span className="italic">
          “Ik moet moeite doen om het niet te doen.”
        </span>
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Hoe herken je een alcoholverslaving?"
      >
        Alcoholverslaving is zelden spectaculair zichtbaar. Het ontstaat vaak
        sluipend, juist bij mensen die “goed functioneren”.
      </StyledParagraph>{" "}
      <StyledParagraph marginBottom="mb-2">
        Psychische en gedragsmatige signalen:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>drinken om te ontspannen, slapen, durven of voelen.</ListItem>
        <ListItem>
          steeds vaker een aanleiding nodig hebben om níét te drinken.
        </ListItem>
        <ListItem>beloftes aan jezelf die niet standhouden.</ListItem>
        <ListItem>bagatelliseren of rationaliseren van gebruik.</ListItem>
        <ListItem>irritatie of onrust bij (gedwongen) onthouding.</ListItem>
        <ListItem>alcohol wordt onderdeel van identiteit of ritme.</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">Controleverlies:</StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>vaker of langer drinken dan gepland.</ListItem>
        <ListItem>moeite hebben met stoppen zodra je begint.</ListItem>
        <ListItem>
          steeds vaker momenten waarop alcohol “er gewoon bij hoort”.
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">Sociale signalen:</StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>conflicten over drinken.</ListItem>
        <ListItem>verbergen van hoeveel of wanneer je drinkt.</ListItem>
        <ListItem>
          sociale activiteiten vermijden waar alcohol geen rol speelt.
        </ListItem>
        <ListItem>
          relaties die verschralen of onder druk komen te staan.
        </ListItem>
      </ul>
      <StyledParagraph>
        Cruciaal: alcoholverslaving gaat niet over zwakte, maar over
        automatisering. Het gedrag wordt minder een keuze en meer een reflex.
      </StyledParagraph>{" "}
      <StyledParagraph
        marginBottom="mb-2"
        header="Welke complicaties kunnen na verloop van tijd optreden?"
      >
        Alcohol heeft een brede impact omdat het meerdere systemen tegelijk
        beïnvloedt.
      </StyledParagraph>{" "}
      <StyledParagraph marginBottom="mb-2">
        Lichamelijke complicaties:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>leververvetting, hepatitis, cirrose.</ListItem>
        <ListItem>
          verhoogd risico op kanker (o.a. mond, slokdarm, lever, borst).
        </ListItem>
        <ListItem>hoge bloeddruk, hartritmestoornissen.</ListItem>
        <ListItem>maag- en darmklachten.</ListItem>
        <ListItem>
          neurologische schade (geheugen, concentratie, coördinatie).
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Psychische complicaties:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>depressieve klachten of angststoornissen.</ListItem>
        <ListItem>
          slaapstoornissen (ook als alcohol “helpt” bij inslapen).
        </ListItem>
        <ListItem>verhoogde stressgevoeligheid.</ListItem>
        <ListItem>verergering van trauma- en stemmingsproblematiek.</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Cognitieve en emotionele verschraling:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>verminderde emotieregulatie.</ListItem>
        <ListItem>lagere stresstolerantie.</ListItem>
        <ListItem>
          afhankelijkheid van alcohol voor ontspanning of expressie.
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Sociale en maatschappelijke gevolgen:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>relationele schade.</ListItem>
        <ListItem>werkproblemen of verminderde prestaties.</ListItem>
        <ListItem>financiële stress.</ListItem>
        <ListItem>schaamte en geheimhouding.</ListItem>
        <ListItem>sociaal isolement.</ListItem>
      </ul>
      <StyledParagraph>
        Belangrijk: de ernst wordt niet bepaald door hoeveel iemand drinkt, maar
        door wat alcohol wegneemt.
      </StyledParagraph>{" "}
      <StyledParagraph
        marginBottom="mb-2"
        header="Alcohol in de Nederlandse cultuur<"
      >
        Alcohol is diep verweven met: gezelligheid, ontspanning, vieren en
        rouwen, volwassenheid en normaliteit
      </StyledParagraph>{" "}
      <StyledParagraph>
        Niet drinken vraagt vaak méér uitleg dan wel drinken. Dat maakt alcohol
        uniek in presentatie, maar niet in werking.
      </StyledParagraph>{" "}
      <StyledParagraph
        marginBottom="mb-2"
        header="Is alcohol anders dan andere drugs?"
      >
        Het eerlijke antwoord is: nee.
      </StyledParagraph>{" "}
      <StyledParagraph marginBottom="mb-2">
        Alcohol verschilt farmacologisch niet principieel van andere drugs. Het:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>beïnvloedt het beloningssysteem.</ListItem>
        <ListItem>werkt dempend op spanning.</ListItem>
        <ListItem>kan tolerantie en afhankelijkheid veroorzaken.</ListItem>
        <ListItem>heeft ontwenningsverschijnselen.</ListItem>
        <ListItem>kent zowel psychische als lichamelijke schade.</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Het echte verschil zit niet in het middel, maar in:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>maatschappelijke acceptatie.</ListItem>

        <ListItem>beschikbaarheid.</ListItem>
        <ListItem>culturele normalisering.</ListItem>
        <ListItem>juridische status.</ListItem>
      </ul>
      <StyledParagraph>
        Alcohol is geen “milde uitzondering”, maar een volledig erkende drug die
        toevallig sociaal is ingebed. Dat maakt problematisch gebruik minder
        zichtbaar, niet minder ernstig.
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
          <ul className="mb-6 mt-2 flex flex-col gap-2">
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
