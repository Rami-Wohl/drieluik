import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Ketamine" />
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
          <KetamineAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <KetamineAfbouwtips />
        </TabsContent>
        <TabsContent value="overig">
          <KetamineOverig />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const KetamineAlgemeen = () => {
  return (
    <>
      <StyledParagraph marginBottom="mb-2">
        Ketamine is een middel dat oorspronkelijk is ontwikkeld als
        verdovingsmiddel in de medische wereld. In ziekenhuizen wordt het nog
        steeds gebruikt, bijvoorbeeld bij operaties of pijnbehandeling.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Recreatief gebruik komt vooral voor in het uitgaansleven en in sommige
        subculturen. Ketamine wordt meestal gesnoven, maar kan ook worden
        geslikt of geïnjecteerd.{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Ketamine behoort tot de groep dissociatieve middelen. Dat betekent dat
        het tijdelijk een gevoel van afstand kan geven tot het lichaam,
        gedachten of de omgeving. Gebruikers beschrijven dit vaak als:{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>het gevoel “los te komen” van het lichaam</ListItem>
        <ListItem>een veranderde waarneming van tijd of ruimte</ListItem>
        <ListItem>een droomachtige of introspectieve toestand </ListItem>
      </ul>
      <StyledParagraph>
        Bij hogere doseringen kan iemand in een sterke dissociatieve toestand
        terechtkomen, ook wel een “K-hole” genoemd. De gebruiker reageert dan
        weinig op de omgeving en kan moeilijk bewegen of praten.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2" header="Psychische effecten">
        De effecten van ketamine kunnen sterk verschillen per persoon en
        situatie. Factoren zoals dosering, stemming en omgeving spelen een
        belangrijke rol.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Veel voorkomende effecten zijn:{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>veranderde waarneming van tijd en ruimte</ListItem>
        <ListItem>vervormde lichaamsbeleving</ListItem>
        <ListItem>dromerige of introspectieve gedachten</ListItem>
        <ListItem>euforie of ontspanning</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Soms treden ook minder prettige ervaringen op, zoals:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>verwarring</ListItem>
        <ListItem>angst of paniek</ListItem>
        <ListItem>paranoïde gedachten</ListItem>
        <ListItem>desoriëntatie</ListItem>
      </ul>

      <StyledParagraph marginBottom="mb-2" header="Lichamelijke effecten">
        De lichamelijke effecten van ketamine staan meestal minder op de
        voorgrond dan de psychische effecten, maar kunnen wel optreden.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Mogelijke lichamelijke verschijnselen zijn:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>verhoogde hartslag</ListItem>
        <ListItem>verhoogde bloeddruk</ListItem>
        <ListItem>duizeligheid of wankel lopen</ListItem>
        <ListItem>misselijkheid</ListItem>
        <ListItem>ongecontroleerde oogbewegingen (nystagmus)</ListItem>
      </ul>
      <StyledParagraph>
        Door de verdovende werking kunnen mensen minder pijn voelen, waardoor
        ongelukken of letsel soms later worden opgemerkt.
      </StyledParagraph>

      <StyledParagraph marginBottom="mb-2" header="Verslavingsrisico">
        In tegenstelling tot klassieke psychedelica zoals LSD of psilocybine kan
        ketamine wel verslavend zijn.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Dit heeft onder andere te maken met:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>de relatief korte werkingsduur</ListItem>
        <ListItem>
          de neiging om meerdere keren achter elkaar te gebruiken
        </ListItem>
        <ListItem>het gebruik als manier om gevoelens te dempen</ListItem>
      </ul>
      <StyledParagraph>
        Niet iedereen ontwikkelt problematisch gebruik, maar bij regelmatig
        gebruik kan er wel tolerantie en craving ontstaan.
      </StyledParagraph>

      <StyledParagraph
        marginBottom="mb-2"
        header="Mogelijke gezondheidsproblemen bij langdurig gebruik"
      >
        Bij frequent of langdurig gebruik kunnen verschillende
        gezondheidsproblemen ontstaan.
      </StyledParagraph>
      <ol className="flex flex-col px-4">
        <ListItem ordered>
          <SubSectionHeader>Blaasproblemen</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Een bekend risico bij langdurig ketaminegebruik is
            ketamine-blaasontsteking (ketamine cystitis). Klachten kunnen zijn:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>vaak moeten plassen</ListItem>
            <ListItem>pijn bij het plassen</ListItem>
            <ListItem>bloed in de urine</ListItem>
            <ListItem>hevige aandrang</ListItem>
          </ul>
          <StyledParagraph>
            In ernstige gevallen kan blijvende blaasschade ontstaan.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>Cognitieve klachten</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Langdurig gebruik kan leiden tot:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>concentratieproblemen</ListItem>
            <ListItem>geheugenklachten</ListItem>
            <ListItem>verminderde mentale scherpte</ListItem>
          </ul>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>Psychische klachten</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Sommige gebruikers ontwikkelen langdurige klachten zoals:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>depersonalisatie of derealisatie</ListItem>
            <ListItem>
              aanhoudende visuele verstoringen (HPPD of visual snow)
            </ListItem>
            <ListItem>somberheid of angstklachten</ListItem>
          </ul>
          <StyledParagraph>
            Dit komt niet bij iedereen voor, maar wordt wel gezien bij intensief
            gebruik.
          </StyledParagraph>
        </ListItem>
      </ol>

      <StyledParagraph header="Ketamine in de psychiatrie">
        De laatste jaren is er veel onderzoek gedaan naar ketamine als mogelijke
        behandeling voor depressie. In een medische setting kan ketamine bij
        sommige patiënten snel een antidepressief effect geven.{" "}
      </StyledParagraph>
      <StyledParagraph>
        Belangrijk is dat dit plaatsvindt onder medische begeleiding en in
        gecontroleerde doseringen. Dit verschilt sterk van recreatief
        gebruik.{" "}
      </StyledParagraph>
    </>
  );
};

const KetamineAfbouwtips = () => {
  return (
    <>
      {" "}
      <StyledParagraph marginBottom="mb-2">
        Er bestaat geen standaard medicamenteus afbouwschema voor ketamine.
        Behandeling richt zich meestal op gedragsverandering, motivatie en het
        verminderen van gebruikspatronen.
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Breng het gebruik goed in kaart"
      >
        Veel cliënten onderschatten hun gebruik, vooral omdat ketamine vaak in
        kleine lijnen en herhaaldelijk wordt genomen.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Bespreek bijvoorbeeld:{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>frequentie van gebruik </ListItem>
        <ListItem>doseringen per avond of sessie </ListItem>
        <ListItem>
          gebruikssituaties (uitgaan, thuis, alleen of met anderen){" "}
        </ListItem>
        <ListItem>redenen voor gebruik </ListItem>
      </ul>
      <StyledParagraph
        marginBottom="mb-2"
        header="Let op lichamelijke signalen"
      >
        Vraag actief naar klachten die kunnen wijzen op blaasschade:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>vaker moeten plassen </ListItem>
        <ListItem>pijn bij het plassen </ListItem>
        <ListItem>buik- of blaasdruk </ListItem>
        <ListItem>bloed in de urine </ListItem>
      </ul>
      <StyledParagraph>
        Bij aanhoudende klachten kan verwijzing naar een arts of uroloog nodig
        zijn.
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Werk met realistische stappen"
      >
        Voor sommige cliënten werkt een geleidelijke vermindering beter dan
        direct stoppen.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Mogelijke stappen zijn:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>minder gebruiksdagen per week </ListItem>
        <ListItem>langere pauzes tussen gebruik </ListItem>
        <ListItem>duidelijke maximumdosering afspreken </ListItem>
        <ListItem>gebruik niet meer alleen </ListItem>
      </ul>
      <StyledParagraph
        marginBottom="mb-2"
        header="Onderliggende functies van het gebruik"
      >
        Ketamine wordt regelmatig gebruikt om:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>gevoelens te dempen </ListItem>
        <ListItem>stress of trauma tijdelijk te ontlopen </ListItem>
        <ListItem>beter te kunnen slapen </ListItem>
        <ListItem>sociale spanning te verminderen </ListItem>
      </ul>
      <StyledParagraph>
        Behandeling van deze onderliggende problemen kan helpen om het gebruik
        te verminderen.
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Let op combinaties met andere middelen"
      >
        Ketamine wordt regelmatig gecombineerd met andere middelen, zoals:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>alcohol </ListItem>
        <ListItem>cocaïne</ListItem>
        <ListItem>MDMA </ListItem>
        <ListItem>benzodiazepinen </ListItem>
      </ul>
      <StyledParagraph>
        Deze combinaties kunnen risico’s vergroten, bijvoorbeeld door verlies
        van controle, black-outs of ongelukken.
      </StyledParagraph>
    </>
  );
};

const KetamineOverig = () => {
  return (
    <>
      <StyledParagraph header="Harm reduction" marginBottom="mb-2">
        Wanneer cliënten (nog) niet willen stoppen, kan het helpen om risico’s
        te bespreken zonder direct te moraliserend te worden.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Voorbeelden van risicobeperking:{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>niet alleen gebruiken</ListItem>
        <ListItem>doseringen spreiden in de tijd</ListItem>
        <ListItem>voldoende water drinken</ListItem>
        <ListItem>pauzes nemen tussen gebruiksmomenten</ListItem>
        <ListItem>niet combineren met alcohol of sedativa</ListItem>
      </ul>
      <StyledParagraph
        header="Signalen van problematisch gebruik"
        marginBottom="mb-2"
      >
        Mogelijke aanwijzingen voor een ketaminegebruikstoornis:
      </StyledParagraph>

      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>steeds vaker gebruiken </ListItem>
        <ListItem>grotere hoeveelheden nodig hebben </ListItem>
        <ListItem>moeite hebben om te stoppen </ListItem>
        <ListItem>gebruik ondanks lichamelijke klachten </ListItem>
        <ListItem>gebruik overdag of buiten sociale context </ListItem>
      </ul>
      <StyledParagraph header="Prognose" marginBottom="mb-2">
        Veel klachten verbeteren wanneer iemand stopt met ketaminegebruik,
        vooral:
      </StyledParagraph>

      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>cognitieve problemen </ListItem>
        <ListItem>stemming</ListItem>
        <ListItem>dissociatieve klachten </ListItem>
      </ul>
      <StyledParagraph header="Enuresis of incontinentie" marginBottom="mb-2">
        Bij ketaminegebruik kan het voorkomen dat cliënten tijdelijk minder
        controle ervaren over de blaas. Dit kan zich uiten in:
      </StyledParagraph>

      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>plotselinge aandrang </ListItem>
        <ListItem>urineverlies</ListItem>
        <ListItem>bedplassen (enuresis)</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Dit kan voor cliënten erg beschamend zijn en wordt daarom niet altijd
        spontaan verteld. Het is helpend om dit onderwerp op een rustige en
        normaliserende manier bespreekbaar te maken.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        In veel gevallen nemen deze klachten af wanneer het gebruik vermindert
        of stopt. Wanneer klachten aanhouden, is het verstandig om medische
        beoordeling te overwegen, omdat ketamine ook blaasirritatie of
        blaasontsteking kan veroorzaken.{" "}
      </StyledParagraph>
      <StyledParagraph>
        Blaasproblemen kunnen dus in sommige gevallen blijvend worden bij
        langdurig zwaar gebruik, waardoor tijdig signaleren belangrijk is.{" "}
      </StyledParagraph>
    </>
  );
};
