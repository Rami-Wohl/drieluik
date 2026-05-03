import { SubSectionParagraph } from "~/components/ui/text-components/subsection-paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { GhbAfbouwtabel, GhbInfoTabel } from "./ghb-afbouwtabel";
import { DrugPropertiesTable } from "../drug-properties-table";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="GHB" />
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
          <GhbAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <GhbAfbouwtips />
        </TabsContent>
        <TabsContent value="overig">
          <GhbOverig />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const GhbAlgemeen = () => {
  return (
    <>
      <DrugPropertiesTable
        werkzameStof="Gamma-hydroxyboterzuur C₄H₈O₃"
        gebruiksvorm="Drinken"
        uiterlijkeKenmerken="Kleurloze, licht stroperige vloeistof"
        verslavingspotentie="1,7"
        schadeTaxatie="1,53"
      />
      <StyledParagraph>
        Als eerst belangrijke voorlichting in een notendop:
      </StyledParagraph>
      <GhbInfoTabel />
      <StyledParagraph marginBottom="mb-2">
        GHB is een dempend middel dat het centrale zenuwstelsel vertraagt. Het
        wordt meestal als vloeistof gebruikt en oraal ingenomen in kleine
        hoeveelheden. Binnen 15 tot 30 minuten treedt het effect op, met een
        werkingsduur van ongeveer 2 tot 3 uur. Het middel staat bekend om
        gevoelens van ontspanning, ontremming en euforie. In sommige contexten,
        zoals uitgaan of seks, kan het als intens prettig en verbindend worden
        ervaren.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Juist dat effect maakt GHB aantrekkelijk, maar ook risicovol. Het
        verschil tussen een gewenste werking en overdosering is klein. Een iets
        te hoge dosering kan leiden tot plotseling bewustzijnsverlies (“out
        gaan”), waarbij iemand niet meer wekbaar is en de ademhaling kan
        vertragen. In tegenstelling tot veel andere middelen is dit geen
        geleidelijk proces: het kan snel omslaan.{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Voor behandelaars is het belangrijk om te begrijpen dat GHB-gebruik vaak
        functioneel en doelgericht is. Mensen gebruiken het bijvoorbeeld om te
        ontspannen, zich vrijer te voelen of om een bepaalde sociale of seksuele
        ervaring te versterken. Aansluiten bij die functie helpt om het gesprek
        open te houden. Tegelijk is het essentieel om duidelijk te maken dat GHB
        biologisch gezien een dempend middel is, en dat de risico’s vooral
        samenhangen met dosering en timing.{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Een complicerende factor is dat de sterkte van GHB sterk kan variëren.
        Het wordt vaak illegaal geproduceerd, waarbij concentraties verschillen
        per batch. Daardoor kan dezelfde hoeveelheid vloeistof de ene keer een
        mild effect hebben en de andere keer veel sterker uitpakken. Dat maakt
        doseren lastig en vergroot het risico op overdosering.{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Daarnaast speelt herdoseren een belangrijke rol. Omdat het effect
        relatief kort aanhoudt, ontstaat snel de neiging om bij te nemen. Juist
        daar gaat het vaak mis: het lichaam heeft de vorige dosis nog niet
        volledig verwerkt, waardoor effecten zich opstapelen. Veel incidenten
        ontstaan niet door één grote dosis, maar door meerdere kleinere
        doseringen kort na elkaar.{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Een ander belangrijk onderscheid met veel andere partydrugs is dat GHB
        relatief snel lichamelijke afhankelijkheid kan veroorzaken. Bij frequent
        gebruik kan tolerantie ontstaan en kunnen mensen steeds vaker gaan
        doseren, soms ook buiten sociale situaties. In die fase verschuift het
        gebruik van incidenteel naar structureel, en neemt het risico op
        ontwenning en medische complicaties toe.{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Voorlichting aan patiënten vraagt daarom om een combinatie van erkenning
        en begrenzing. Erkenning van wat het middel iemand oplevert, en
        tegelijkertijd duidelijke uitleg over de smalle veiligheidsmarge, de
        onvoorspelbare sterkte en het risico van herdoseren. Niet om angst aan
        te jagen, maar om realistische keuzes mogelijk te maken.
      </StyledParagraph>
    </>
  );
};

const GhbAfbouwtips = () => {
  return (
    <>
      <StyledParagraph marginBottom="mb-2">
        Bij GHB is stoppen of afbouwen wezenlijk anders dan bij de meeste andere
        middelen. Door de korte werkingsduur en het effect op het zenuwstelsel
        kan bij frequent gebruik snel lichamelijke afhankelijkheid ontstaan.
        Mensen gaan dan steeds vaker doseren, soms om de paar uur, om
        ontwenningsklachten te voorkomen.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Belangrijk voor de voorlichting:{" "}
      </StyledParagraph>
      <ul className="mb-8 flex flex-col gap-2 px-4">
        <ListItem>
          <b>Niet abrupt stoppen bij frequent gebruik</b>
          <br />
          Dit kan leiden tot ernstige ontwenningsklachten zoals angst, onrust,
          slapeloosheid, trillen en in ernstigere gevallen verwardheid,
          hallucinaties of insulten. In sommige gevallen is dit medisch
          gevaarlijk.
        </ListItem>
        <ListItem>
          <b>Medische begeleiding is vaak nodig</b>
          <br />
          In gespecialiseerde klinieken wordt GHB-afhankelijkheid meestal
          behandeld met opname, monitoring en medicatie (vaak benzodiazepinen)
          om het zenuwstelsel te stabiliseren. Dit laat zien hoe serieus de
          lichamelijke component is.{" "}
        </ListItem>
        <ListItem>
          <b>Afbouwen vraagt structuur en discipline</b>
          <br />
          In de praktijk betekent dit: vaste doseringen, vaste tijden en geen
          “bijpakken”.{" "}
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2" header="Voorbeeld afbouwschema">
        <b>Uitgangspunt: </b>
        5 ml per dosis, meerdere keren per dag
        <br />
        <b>Doel: </b>
        geleidelijk afbouwen in kleine stappen
        <br />
        <b>Stapgrootte: </b>
        0,5 ml per stap
        <br />
        <b>Frequentie: </b>
        elke 1–3 dagen (op geleide van klachten)
        <br />
      </StyledParagraph>
      <GhbAfbouwtabel />
    </>
  );
};

const GhbOverig = () => {
  return (
    <>
      <SubSectionHeader>
        GHB - een middel dat niet in het systeem past
      </SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        GHB neemt een uitzonderlijke positie in binnen het drugslandschap. Het
        is een middel met een relatief kleine gebruikersgroep, maar een
        opvallend hoog aantal medische incidenten. Tegelijk past het slecht
        binnen de manier waarop beleid en beeldvorming rondom drugs vaak zijn
        ingericht.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        In het publieke debat wordt GHB meestal neergezet als een extreem en
        gevaarlijk middel, vaak gekoppeld aan verhalen over “out gaan”,
        verslaving en incidenten. Dat beeld is niet onjuist, maar wel eenzijdig.
        Het vertelt weinig over hoe en waarom mensen het gebruiken, en biedt
        daardoor beperkt houvast voor preventie of behandeling.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Wat GHB bijzonder maakt, is dat de risico’s niet alleen voortkomen uit
        het middel zelf, maar uit een combinatie van factoren: een smalle
        veiligheidsmarge, onvoorspelbare sterkte, snelle afhankelijkheid en een
        gebruikscultuur waarin doseren en herdoseren centraal staan. Dit maakt
        het moeilijk om het middel te benaderen met algemene regels of simpele
        voorlichting.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Daar komt bij dat GHB zich deels buiten het zicht van de klassieke
        uitgaansscene afspeelt. Waar veel partydrugs verbonden zijn aan clubs en
        festivals, verschuift GHB-gebruik regelmatig naar meer besloten
        settings, zoals thuisgebruik. Dat maakt signalering lastiger en vergroot
        het risico dat problematisch gebruik langere tijd onder de radar blijft.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Voor hulpverleners en politie ontstaat hierdoor een complex
        spanningsveld. Enerzijds is er een duidelijk risico en de noodzaak tot
        ingrijpen. Anderzijds sluit een puur repressieve of afschrikgerichte
        benadering vaak niet aan bij de realiteit van gebruikers. Mensen die
        afhankelijk raken van GHB doen dat zelden met de intentie om “de
        controle te verliezen”, maar vanuit een patroon dat zich geleidelijk
        ontwikkelt.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Wat in de praktijk vaak beter werkt, is een benadering die de
        complexiteit erkent: duidelijke informatie over risico’s, gecombineerd
        met aandacht voor het gebruikspatroon en de functie van het middel.
        Juist bij GHB is het belangrijk om voorbij het label “gevaarlijke drug”
        te gaan en te kijken naar hoe het middel daadwerkelijk wordt gebruikt.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        GHB laat daarmee iets zien wat breder speelt in de verslavingszorg: dat
        een middel pas goed begrepen kan worden wanneer je niet alleen kijkt
        naar wat het is, maar ook naar hoe mensen ermee omgaan.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        In sommige settings wordt dat verschil heel concreet zichtbaar. Zo zijn
        er clubs waar middelengebruik impliciet aanwezig is, maar waar expliciet
        wordt aangegeven dat GHB niet is toegestaan. Niet omdat het het enige
        risicovolle middel is, maar omdat het in de praktijk het middel is dat
        het vaakst leidt tot ontregeling, medische incidenten en onveilige
        situaties.
      </StyledParagraph>
      <StyledParagraph>
        Dat soort keuzes laten zien dat risico’s niet alleen bepaald worden door
        wetgeving, maar ook door ervaring. In de praktijk wordt onderscheid
        gemaakt waar beleid vaak generaliseert.
      </StyledParagraph>
    </>
  );
};
