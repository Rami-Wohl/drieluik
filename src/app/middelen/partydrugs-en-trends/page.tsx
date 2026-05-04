import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ResponsiveImage } from "~/components/ui/responsive-image";

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
          <PartydrugsAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <PartydrugsAfbouwtips />
        </TabsContent>
        <TabsContent value="overig">
          <PartydrugsOverig />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const PartydrugsAlgemeen = () => {
  return (
    <>
      <ResponsiveImage
        src="/images/partydrugs.jpg"
        alt="Plaatje van partydrugs"
      />
      <StyledParagraph marginBottom="mb-2">
        De categorie partydrugs verandert snel. Anders dan bij klassieke
        middelen zoals alcohol of cannabis gaat het hier niet om één stof, maar
        om een voortdurend verschuivend landschap van pillen, poeders, capsules,
        vloeistoffen en mixdrankjes. In de uitgaansscene circuleren bekende
        middelen zoals XTC/MDMA, speed, cocaïne, ketamine, 2C-B en GHB, maar ook
        steeds weer nieuwe varianten en zogenaamde nieuwe psychoactieve stoffen
        (NPS), zoals verschillende cathinonen en andere designerdrugs. Onder
        uitgaanders ligt middelengebruik bovendien duidelijk hoger dan in de
        algemene bevolking, en juist in deze setting komen experimenteren,
        bingegebruik en combigebruik relatief vaak voor.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Voor behandelaars is het belangrijk om te beseffen dat een actuele lijst
        van partydrugs eigenlijk nooit “af” is. Trends veranderen snel,
        straatnamen wisselen, samenstellingen verschuiven en de markt beweegt
        sneller dan veel voorlichtingsmateriaal kan bijhouden. Trimbos benadrukt
        daarom expliciet dat het belangrijk is om nieuwe trends te blijven
        signaleren en daarop in te spelen. De EUDA beschrijft de Europese
        drugsmarkt in dezelfde lijn als snel veranderend, met een steeds
        diverser aanbod van stoffen, vaak met hogere potentie en nieuwe
        risico’s.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Een belangrijk voorlichtingspunt is dat in het uitgaansleven branding
        vaak belangrijker is geworden dan de stofnaam. Mensen hebben het niet
        alleen over MDMA of 3-MMC, maar over pillen met logo’s of kleuren, of
        over producten met namen die klinken als een merk. Dat kan een vals
        gevoel van herkenbaarheid of vertrouwen geven. In werkelijkheid zegt een
        naam, kleur of logo weinig over wat er precies in zit. DIMS laat
        bijvoorbeeld zien dat de inhoud van XTC-pillen sterk kan verschillen: in
        2023 bevatte een ecstasypil gemiddeld 138 mg MDMA, maar de spreiding was
        groot, en er werd zelfs een Red Alert afgegeven voor een beige-gouden
        “Audi”-pil met gemiddeld meer dan 300 mg MDMA, een dosering die
        levensbedreigend kan zijn.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Dat geldt niet alleen voor pillen, maar ook voor poeders en vloeibare
        producten. In 2023 werden bij het DIMS meer dan twee keer zoveel samples
        ingeleverd die als 3-MMC waren verkocht als in 2022, maar slechts
        ongeveer 30% daarvan bevatte daadwerkelijk 3-MMC; de rest bevatte andere
        stoffen zoals 3-CMC, 2-MMC, dimethylpentylon of combinaties daarvan.
        Voor de behandelaar is dat een belangrijk aanknopingspunt: iemand kan
        denken een bekende drug te gebruiken, terwijl de werkzame stof in
        werkelijkheid iets anders is.
      </StyledParagraph>

      <StyledParagraph marginBottom="mb-2">
        Ook mixdrankjes verdienen expliciete aandacht in de voorlichting. Een
        voorbeeld is Blue 69, een drankje dat volgens Jellinek verkocht wordt
        als mix van Blue Curaçao, alcohol, GHB, MDMA en speed, maar waarbij soms
        niet al die middelen aanwezig zijn. Juist dat maakt zulke drankjes extra
        riskant: de combinatie is onvoorspelbaar, doseren is moeilijk en
        gebruikers weten vaak niet wat en hoeveel ze precies binnenkrijgen.
        Daardoor kan iemand ongemerkt veel te veel nemen. Datzelfde principe
        geldt breder voor vergelijkbare “gebrouwde” partymixen die onder
        wisselende namen rondgaan.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Goede voorlichting aan patiënten gaat hier dus minder over het uit het
        hoofd leren van een eindeloze middelenlijst, en meer over een paar
        kernboodschappen. Ten eerste: de naam van een product zegt niet genoeg
        over de inhoud. Ten tweede: de sterkte kan sterk variëren, zelfs binnen
        ogenschijnlijk vergelijkbare pillen of poeders. Ten derde: combigebruik
        en herdoseren vergroten de risico’s snel, juist omdat mensen vaak pas
        achteraf merken hoe sterk iets was. En ten vierde: drug checking en
        actuele informatie zijn in deze categorie extra belangrijk, omdat dosis
        en inhoud in veel gevallen onbekend zijn. De EUDA noemt die onbekende
        inhoud en dosering expliciet als reden waarom drug-checking in nightlife
        settings een belangrijke harm-reductionfunctie heeft gekregen.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Voor de behandelaar is de praktische vertaalslag daarom: vraag niet
        alleen welke drug iemand gebruikt, maar ook onder welke naam het
        verkocht werd, in welke vorm, uit welke setting het kwam, of het getest
        is, en of er sprake was van herdoseren of combineren. Juist bij
        partydrugs en trends zit veel risico niet alleen in de stof zelf, maar
        in de onzekerheid eromheen.
      </StyledParagraph>
    </>
  );
};

const PartydrugsAfbouwtips = () => {
  return (
    <>
      <StyledParagraph
        marginBottom="mb-2"
        header="Stoppen, minderen en veilig gebruik"
      >
        Bij partydrugs gaat het vaak niet om dagelijks gebruik, maar om
        situaties: uitgaan, festivals, weekenden of specifieke sociale settings.
        Daardoor ligt de focus minder op klassiek afbouwen en meer op regie
        houden over gebruik, grenzen herkennen en risico’s beperken.
      </StyledParagraph>
      <StyledParagraph>
        Voorlichting kan zich richten op drie niveaus: stoppen, minderen en
        veiliger gebruik.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2" header="Stoppen of pauzeren">
        Sommige mensen merken dat gebruik niet meer past, bijvoorbeeld door
        klachten achteraf, verlies van controle of impact op werk, relaties of
        gezondheid.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Wat helpt om te bespreken:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>
          kies bewust voor een periode zonder gebruik (bijv. 1–3 maanden)
        </ListItem>
        <ListItem>
          vermijd risicosituaties tijdelijk (feestjes, bepaalde vrienden,
          specifieke clubs)
        </ListItem>
        <ListItem>
          spreek vooraf met jezelf of iemand anders af wat je gaat doen als de
          verleiding komt
        </ListItem>
        <ListItem>
          vervang de functie van het middel (bijv. ontspanning, verbinding,
          energie)
        </ListItem>
      </ul>
      <StyledParagraph>
        Belangrijk inzicht voor de patiënt:
        <br />
        <i>
          je stopt niet alleen met een middel, maar ook met een bepaalde manier
          van uitgaan
        </i>
      </StyledParagraph>

      <StyledParagraph marginBottom="mb-2" header="Minderen en controle houden">
        Voor mensen die niet willen stoppen, kan de focus liggen op controle en
        begrenzing:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>bepaal vooraf hoeveel je neemt (en houd je daaraan)</ListItem>
        <ListItem>
          koop of neem niet meer mee dan je van plan bent te gebruiken
        </ListItem>
        <ListItem>gebruik niet automatisch bij elke gelegenheid</ListItem>
        <ListItem>plan ook uitgaan zonder middelen</ListItem>
        <ListItem>
          let op herdoseren: veel middelen werken korter dan de avond duurt,
          waardoor de neiging ontstaat om bij te nemen
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Een tip: houd bij wat je neemt en hoeveel je neemt. Bijvoorbeeld op je
        telefoon.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Signaal van risico:{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>“ik zie wel hoe de avond loopt” </ListItem>
        <ListItem>“nog eentje kan wel” </ListItem>
        <ListItem>“iedereen doet het” </ListItem>
      </ul>

      <StyledParagraph marginBottom="mb-2" header="Omgaan met sociale druk">
        In het uitgaansleven speelt groepsdruk vaak een grote rol. Voor veel
        mensen is “nee zeggen” moeilijker dan stoppen zelf.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Concrete handvatten:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>
          bereid een standaard reactie voor (“ik sla even over vandaag”)
        </ListItem>
        <ListItem>geef geen uitgebreide uitleg, hou het kort</ListItem>
        <ListItem>
          zorg dat je iets anders in je hand hebt (drankje, kauwgom)
        </ListItem>
        <ListItem>
          zoek mensen op die ook niet gebruiken of minder gebruiken
        </ListItem>
      </ul>
      <StyledParagraph>
        Belangrijk om te normaliseren:
        <br />
        <i>
          twijfel is normaal, en nee zeggen wordt vaak makkelijker dan verwacht
        </i>
      </StyledParagraph>

      <StyledParagraph
        marginBottom="mb-2"
        header="Harm reduction/veiliger gebruik"
      >
        Als iemand gebruikt, is het belangrijk om risico’s te beperken:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>
          test middelen waar mogelijk (bijv. via testservices)
        </ListItem>
        <ListItem>begin met een lage dosering en wacht met bijpakken</ListItem>
        <ListItem>combineer zo min mogelijk verschillende middelen</ListItem>
        <ListItem>
          gebruik geen alcohol in combinatie met andere middelen
        </ListItem>
        <ListItem>drink voldoende water, maar niet overmatig</ListItem>
        <ListItem>zorg voor rust, eten en slaap na gebruik</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">Extra belangrijk:</StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>
          herdoseren en combineren vergroten het risico op overdosering
        </ListItem>
        <ListItem>
          onbekende inhoud (bijv. pillen, poeders, mixdrankjes) maakt doseren
          onvoorspelbaar
        </ListItem>
      </ul>
    </>
  );
};

const PartydrugsOverig = () => {
  return (
    <>
      <StyledParagraph
        header="Trends, schijncontrole en de realiteit van partydrugs"
        marginBottom="mb-2"
      >
        De wereld van partydrugs laat iets zien wat in weinig andere middelen zo
        zichtbaar is: hoe snel een drugsmarkt zich aanpast aan beleid.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Wanneer een middel wordt verboden of moeilijker verkrijgbaar wordt,
        ontstaat er vrijwel direct een alternatief. Dat zien we bijvoorbeeld bij
        de opkomst van nieuwe psychoactieve stoffen (NPS), zoals verschillende
        varianten van cathinonen (bijv. 3-MMC, 4-MMC en opvolgers daarvan).
        Europese en Nederlandse rapportages beschrijven een markt die continu in
        beweging is, met nieuwe stoffen die verschijnen, verdwijnen en vervangen
        worden, vaak sneller dan wetgeving kan bijhouden.{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Dit leidt tot een paradox. Beleidsmatig wordt geprobeerd controle te
        houden door middelen te verbieden of te reguleren. In de praktijk
        verschuift het gebruik echter naar nieuwe, minder onderzochte en soms
        risicovollere alternatieven. De gebruiker blijft, maar de stof
        verandert.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Daar komt bij dat het huidige beleid sterk inzet op het onderscheiden
        van “middelen”: deze stof is illegaal, die niet, deze is gevaarlijk, die
        minder. In de praktijk van het uitgaansleven vervaagt dat onderscheid.
        Mensen gebruiken wat beschikbaar is, wat rondgaat in hun netwerk, of wat
        op dat moment populair is. De naam, kleur of reputatie van een product
        speelt daarbij vaak een grotere rol dan de werkzame stof.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Voor hulpverleners betekent dit dat zij zich in een lastig spanningsveld
        bevinden. Enerzijds wordt verwacht dat zij kennis hebben van middelen en
        risico’s. Anderzijds verandert het aanbod zo snel en is de samenstelling
        zo onvoorspelbaar, dat volledige kennis feitelijk onhaalbaar is.
        Hetzelfde geldt voor politie en beleid: handhaving richt zich op
        specifieke stoffen, terwijl de markt zich juist kenmerkt door
        flexibiliteit en aanpassing.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Een concreet gevolg hiervan is dat onzekerheid een structureel onderdeel
        van gebruik is geworden. Gebruikers weten vaak niet precies wat ze
        nemen, hoeveel ze nemen en hoe sterk het is. Dat vergroot de risico’s op
        overdosering en complicaties, ondanks dat veel gebruikers juist proberen
        “verantwoord” om te gaan met middelen.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Vanuit die realiteit ontstaat een belangrijke vraag:
        <br />
        <i>wat helpt daadwerkelijk om schade te beperken?</i>
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Steeds vaker wordt gewezen op het belang van harm reduction, zoals drug
        checking, eerlijke voorlichting en het bespreekbaar maken van gebruik
        zonder directe veroordeling. Internationale en Europese bronnen
        benadrukken dat interventies die aansluiten bij de leefwereld van
        gebruikers effectiever zijn dan uitsluitend repressieve maatregelen.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Tegelijk blijft het maatschappelijke beeld van harddrugs vaak zwart-wit:
        gevaarlijk, verboden, problematisch. Dat beeld is niet volledig onjuist,
        maar wel onvolledig. Het doet weinig recht aan de context waarin mensen
        gebruiken, en biedt behandelaars en gebruikers weinig handvatten om met
        de realiteit om te gaan.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Voor de praktijk betekent dit dat behandelaars vaak meer bereiken met
        realistische, niet-oordelende voorlichting dan met het herhalen van
        regels die in de praktijk niet aansluiten. Niet omdat risico’s ontkend
        moeten worden, maar omdat inzicht en regie beter ontstaan wanneer iemand
        zich begrepen voelt.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Partydrugs maken daarmee iets zichtbaar wat breder speelt in de
        verslavingszorg: controle op papier betekent niet automatisch controle
        in de praktijk.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        En juist in dat verschil ligt de ruimte voor betere zorg.
      </StyledParagraph>
    </>
  );
};
