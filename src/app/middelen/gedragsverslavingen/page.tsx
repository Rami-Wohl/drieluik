import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Gedragsverslavingen" />
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
          <GedragsverslavingenAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <GedragsverslavingenAfbouwtips />
        </TabsContent>
        <TabsContent value="overig">
          <GedragsverslavingenOverig />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const GedragsverslavingenAlgemeen = () => {
  return (
    <>
      <ResponsiveImage
        src="/images/cannabis-1.jpg"
        alt="Plaatje van gedragsverslavingen"
      />
      <StyledParagraph>
        Gedragsverslavingen zijn verslavingen waarbij niet <b>een middel</b>,
        maar <b>een handeling</b> centraal staat: gokken, gamen, seks, shoppen,
        social media, enzovoort. Ze lijken in bijna alles op
        middelenverslavingen — behalve dat er geen stof het lichaam binnenkomt.
        De <b>verslavende werking zit in het gedrag zelf</b>, en in wat dat
        gedrag doet met het brein en met iemands functioneren.
      </StyledParagraph>
      <SubSectionHeader>
        Wat hebben gedragsverslavingen met elkaar gemeen?
      </SubSectionHeader>
      <ol className="flex flex-col px-4">
        <ListItem ordered>
          <SubSectionHeader>
            Ze activeren dezelfde beloningssystemen in het brein.
          </SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Dopamine stijgt tijdens het gedrag (winst, seks, spanning,
              “levels”, bevestiging).
            </ListItem>
            <ListItem>
              Hierdoor ontstaan dezelfde drie kernprocessen als bij middelen:
              <ul className="mt-2 flex flex-col gap-2 px-4">
                <ListItem>
                  <b>craving</b> (drang)
                </ListItem>
                <ListItem>
                  <b>tolerantie</b> (steeds meer of heftiger nodig)
                </ListItem>
                <ListItem>
                  <b>onthoudingsklachten</b> (onrust, irritatie, leegte wanneer
                  iemand stopt)
                </ListItem>
              </ul>
            </ListItem>
          </ul>
          <StyledParagraph>
            Het verschil is vooral <i>vorm</i> niet <i>mechanisme</i>.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>
            Ze draaien om verlies van controle.
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Bij alle gedragsverslavingen zie je:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>niet kunnen stoppen.</ListItem>
            <ListItem>vaker/langer doorgaan dan de bedoeling was.</ListItem>
            <ListItem>doorgaan ondanks negatieve gevolgen.</ListItem>
          </ul>
          <StyledParagraph>
            Het gedrag begint als keuze, maar wordt gaandeweg een{" "}
            <b>automatische strategie</b> om spanning te reguleren.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>
            Ze verergeren stress, schaamte en vermijding.
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Net als bij middelen ontstaat er een vicieuze cirkel:
          </StyledParagraph>
          <ol className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem ordered>spanning of emotionele pijn →</ListItem>
            <ListItem ordered>gedrag geeft tijdelijke verlichting →</ListItem>
            <ListItem ordered>daarna schuld, schaamte, problemen →</ListItem>
            <ListItem ordered>meer spanning →</ListItem>
            <ListItem ordered>meer behoefte aan het gedrag.</ListItem>
          </ol>
          <StyledParagraph>
            Daardoor wordt het gedrag steeds centraler in iemands leven.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>Er is vaak een dubbele functie.</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Gedrag heeft meestal twee kanten:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              <b>Aardig/leuk/ontspannend</b> → spanning zakt, gevoel van
              controle.
            </ListItem>
            <ListItem>
              <b>Schaduwkant</b> → het wordt een escape of ontregelt het leven.
            </ListItem>
          </ul>
          <StyledParagraph>
            Veel mensen weten dat het gedrag schadelijk is, maar voelen dat het
            ook iets “vult” of stabiliseert.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>
            Ze veroorzaken aanzienlijke problemen.
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Afhankelijk van het gedrag:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>financiële problemen (gokken).</ListItem>
            <ListItem>relationele schade (seks).</ListItem>
            <ListItem>school-/werkuitval (gamen).</ListItem>
            <ListItem>risicovol gedrag (seks, chemsex).</ListItem>
            <ListItem>sociale isolatie (alle gedragsverslavingen).</ListItem>
            <ListItem>
              verborgen of dubbel leven (gokken, seks, chemsex).
            </ListItem>
          </ul>
          <StyledParagraph>
            De ernst wordt bepaald door de <b>impact</b>, niet door het gedrag
            an sich.
          </StyledParagraph>
        </ListItem>
      </ol>
      <SubSectionHeader>
        Waar gaat de behandeling van gedragsverslavingen over?
      </SubSectionHeader>
      <StyledParagraph>
        Behandeling lijkt sterk op die van middelenverslaving, maar met meer
        aandacht voor <b>gewoonten</b>, <b>identiteit</b>, en{" "}
        <b>digitale prikkels</b>.
      </StyledParagraph>
      <ol className="flex flex-col px-4">
        <ListItem ordered>
          <SubSectionHeader>
            Begrijpen wat het gedrag “oplossend” maakt
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Gedragsverslavingen komen nooit uit het niets. Het gedrag vervult
            vaak één of meerdere functies:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>spanning dempen</ListItem>
            <ListItem>verveling vullen</ListItem>
            <ListItem>contact/erkenning zoeken</ListItem>
            <ListItem>trauma/schaamte dempen</ListItem>
            <ListItem>structuur, doelen of “flow” ervaren</ListItem>
          </ul>
          <StyledParagraph>
            Behandeling start met <b>functie-analyse:</b>
            <br />
            <i>
              Wat levert het gedrag iemand op? Wat voorkomt het? Wat verzacht
              het?
            </i>
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>
            Doorbreken van automatische patronen
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Gedrag is minder “chemisch” verslavend dan middelen, maar vaak{" "}
            <b>minder bewust</b>. Behandeling richt zich op:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>vaste routines doorbreken</ListItem>
            <ListItem>
              triggers herkennen (tijd, apps, emoties, verveling)
            </ListItem>
            <ListItem>alternatieven vinden voor dezelfde functie</ListItem>
            <ListItem>nieuwe gewoonten oefenen</ListItem>
          </ul>
          <StyledParagraph>
            Hierbij helpt motiverende gespreksvoering, CGT, schema, EMDR (bij
            trauma), mindfulness, etc.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>Grenzen, controle en structuur</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Een groot deel van de behandeling bestaat uit het{" "}
            <i>herwinnen van regie</i>:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              duidelijke tijdsafspraken (“niet gamen na 22:00”)
            </ListItem>
            <ListItem>blokkeren van apps/websites</ListItem>
            <ListItem>financiële afspraken (bij gokken)</ListItem>
            <ListItem>
              exposure met responspreventie (bij seks, porno, gamen)
            </ListItem>
            <ListItem>
              sociale afspraken (“niet alleen thuis bij avonden met veel
              triggers”)
            </ListItem>
          </ul>
          <StyledParagraph>
            Structuur helpt het brein weer voorspelbaarheid en rust te geven.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>
            Omgaan met emoties zonder het verslavende gedrag
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Wat vaak onder gedragsverslaving ligt:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>angst</ListItem>
            <ListItem>somberheid</ListItem>
            <ListItem>eenzaamheid</ListItem>
            <ListItem>leegte</ListItem>
            <ListItem>schaamte</ListItem>
            <ListItem>trauma</ListItem>
            <ListItem>identiteitsproblemen</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Daarom hoort bij behandeling:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>emotieregulatie</ListItem>
            <ListItem>psycho-educatie</ListItem>
            <ListItem>leren verdragen van spanning</ListItem>
            <ListItem>zelfcompassie</ListItem>
            <ListItem>relatie- en hechtingswerk</ListItem>
          </ul>
          <StyledParagraph>
            Het doel is <b>een vervangende manier van omgaan met stress</b>,
            niet het gedrag simpelweg “uitzetten”.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>Schadebeperking en veiligheid </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Behulpzaam bij alle gedragsverslavingen:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>voorkomen van escalatie</ListItem>
            <ListItem>afspraken rondom veiligheid</ListItem>
            <ListItem>
              in chemsex/seks: soa-beleid en afspraken rondom consent
            </ListItem>
            <ListItem>
              in gamen: dagstructuur, school/werk terug op de rails
            </ListItem>
            <ListItem>in gokken: financiële bescherming</ListItem>
          </ul>
          <StyledParagraph>
            Behandeling moet realistisch zijn, niet moralistisch.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <SubSectionHeader>Het systeem meenemen </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Gedragsverslavingen hebben bijna altijd sociale gevolgen:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>partners die vertrouwen verliezen</ListItem>
            <ListItem>ruzies over geld</ListItem>
            <ListItem>isolement</ListItem>
            <ListItem>geheimen rond seksueel gedrag</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Systeemgesprekken zijn daarom vaak essentieel:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>afspraken</ListItem>
            <ListItem>herstel van vertrouwen</ListItem>
            <ListItem>betrekken van ouders/verzorgers bij gamen</ListItem>
            <ListItem>financiële begeleiding bij gokken</ListItem>
          </ul>
        </ListItem>
      </ol>
    </>
  );
};

const GedragsverslavingenAfbouwtips = () => {
  return (
    <>
      <SubSectionHeader>
        Over grip terugpakken, intermittente beloning en waarom het zo lijkt op
        een toxische relatie
      </SubSectionHeader>
      <StyledParagraph>
        Gedragsverslavingen zoals gokken, compulsieve seks of chemseks zijn
        verraderlijk. Niet omdat ze draaien om “zwakte” of gebrek aan
        wilskracht, maar omdat ze rechtstreeks inhaken op de diepste
        leermechanismen van het menselijk brein. Wie wil afbouwen, botst zelden
        op een gebrek aan motivatie. De strijd zit elders.
      </StyledParagraph>
      <SubSectionHeader>
        Het probleem is niet het gedrag, maar het beloningssysteem
      </SubSectionHeader>
      <StyledParagraph>
        Bij gedragsverslavingen is er geen externe stof die langzaam uit het
        lichaam verdwijnt. De prikkel zit in{" "}
        <b>verwachting, spanning en beloning</b>. Het brein leert:
        <br />
        <br />
        <i>dit gedrag kan op elk moment iets groots opleveren.</i>
        <br />
        <br />
        En precies daar komt een van de krachtigste leerprincipes om de hoek
        kijken.
      </StyledParagraph>
      <SubSectionHeader>
        Intermittent reinforcement: de jackpot in je hoofd
      </SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Intermittent reinforcement betekent dat beloning <b>onvoorspelbaar</b>{" "}
        komt. Soms wel, vaak niet. Juist die onvoorspelbaarheid maakt het
        systeem extreem verslavend.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Het is het mechanisme achter:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>gokautomaten</ListItem>
        <ListItem>eindeloos swipen</ListItem>
        <ListItem>pornoverslaving</ListItem>
        <ListItem>chemseks</ListItem>
        <ListItem>maar ook… bepaalde relaties</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Het brein leert niet: <i>dit werkt altijd</i>
        <br />
        Het brein leert: <i>het zou nú kunnen gebeuren</i>
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        En dat is dodelijk effectief.
      </StyledParagraph>
      <StyledParagraph>
        Bij afbouwen merk je dit direct. Niet-gebruik voelt niet neutraal, maar
        leeg, vlak of onrustig. Het brein mist niet alleen de beloning, maar
        vooral de <b>mogelijkheid</b> van beloning.
      </StyledParagraph>

      <SubSectionHeader>Waarom stoppen vaak voelt als rouwen</SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Veel mensen die afbouwen zeggen:
        <br />
        “Het voelt alsof ik iets verlies wat me ook veel heeft gegeven.”
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Dat klopt. Niet omdat het gedrag gezond was, maar omdat het{" "}
        <b>momenten van intense betekenis</b> gaf. Hoogtes. Ontsnapping.
        Verbinding. Macht. Vergetelheid.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Afbouwen is daarom geen technisch proces, maar een rouwproces:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>rouw om intensiteit</ListItem>
        <ListItem>rouw om identiteit</ListItem>
        <ListItem>rouw om een leven dat even alles leek te bevatten</ListItem>
      </ul>
      <StyledParagraph>
        Dit wordt vaak onderschat. En precies daar ontspoort behandeling
        regelmatig.{" "}
      </StyledParagraph>

      <SubSectionHeader>
        De parallel met toxische en misbruik relaties
      </SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        De link tussen gedragsverslaving en toxische relaties is geen metafoor,
        maar een <b>structurele overeenkomst</b>.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        In beide gevallen zie je:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>onvoorspelbare beloning</ListItem>
        <ListItem>afwisseling tussen nabijheid en afwijzing</ListItem>
        <ListItem>hoge intensiteit gevolgd door leegte</ListItem>
        <ListItem>een groeiend gevoel van afhankelijkheid</ListItem>
        <ListItem>
          het idee: a
          <i>ls ik het maar beter doe, komt het goede moment terug</i>
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Veel mensen die vastzitten in een toxische relatie herkennen dit:
        <br />
        “Maar soms is het zó goed.”
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Die <i>soms</i> is precies intermittent reinforcement.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Die <i>soms</i> is precies intermittent reinforcement.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Net als bij verslaving:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>De pieken houden het systeem in stand</ListItem>
        <ListItem>De dalen worden gerationaliseerd</ListItem>
        <ListItem>
          Stoppen voelt als verraad aan iets dat ooit hoop gaf
        </ListItem>
      </ul>
      <StyledParagraph>
        Dit verklaart ook waarom mensen met een geschiedenis van onveilige of
        grillige hechting extra kwetsbaar zijn voor zowel gedragsverslavingen
        als destructieve relaties.
      </StyledParagraph>

      <SubSectionHeader>
        Afbouwen werkt niet via verbod, maar via ruimte
      </SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Een harde stop zonder psychologisch alternatief faalt vaak. Niet omdat
        iemand niet wil, maar omdat het brein geen{" "}
        <b>ander regulatiemechanisme </b>heeft.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Effectief afbouwen vraagt daarom om iets paradoxaal:{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>toestemming om te willen gebruiken</ListItem>
        <ListItem>vertraging tussen impuls en actie</ListItem>
        <ListItem>onderzoek in plaats van controle</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Niet: <i>“Dit mag niet.”</i>
        <br />
        Maar: <i>“Wat gebeurt er precies vóórdat ik dit wil?” </i>
      </StyledParagraph>
      <StyledParagraph>
        Door ruimte te creëren tussen trigger en gedrag ontstaat keuze. En keuze
        is het tegenovergestelde van verslaving.
      </StyledParagraph>

      <SubSectionHeader>Wat helpt concreet bij afbouwen</SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Een paar principes die in de praktijk vaak verschil maken:
      </StyledParagraph>
      <ol className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem ordered>
          <b>Verwacht geen directe rust</b>
          <br />
          De onrust hoort erbij. Het brein is ontwend aan leegte zonder piek.
          Dat betekent niet dat het misgaat.
        </ListItem>
        <ListItem ordered>
          <b>Normaliseer verlangen</b>
          <br />
          Verlangen is geen teken van falen, maar van conditionering. Het
          verdwijnt niet door schaamte, wel door begrip.{" "}
        </ListItem>
        <ListItem ordered>
          <b>Vervang intensiteit niet één-op-één</b>
          <br />
          Zoek geen nieuwe extreme prikkel. Bouw eerst tolerantie voor
          neutraliteit op.{" "}
        </ListItem>
        <ListItem ordered>
          <b>Werk met betekenis, niet alleen met gedrag</b>
          <br />
          Wat gaf het gedrag jou wat je elders (nog) niet hebt? Ontsnapping?
          Verbinding? Controle? Daar zit het echte werk.{" "}
        </ListItem>
        <ListItem ordered>
          <b>Herken relationele patronen</b>
          <br />
          Als het patroon lijkt op een toxische relatie, behandel het dan ook
          zo. Met afscheid, grenzen en rouw.{" "}
        </ListItem>
      </ol>
    </>
  );
};

const GedragsverslavingenOverig = () => {
  return (
    <>
      <SubSectionHeader>
        Gedragsverslavingen hebben een functie
      </SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        En die functie is zelden wat mensen denken.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Wie gedrag alleen ziet als “probleem”, mist waarom het zo hardnekkig is.
        Gedragsverslavingen ontstaan niet uit leegte, maar uit{" "}
        <b>oplossingsvermogen</b>. Ze vervullen vrijwel altijd één of meerdere
        psychologische functies:{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>
          <b>Emotieregulatie</b>
          <br />
          Niet om je goed te voelen, maar om iets niet te voelen. Verdoving,
          afleiding, verdunning.
        </ListItem>
        <ListItem>
          <b>Autonomie en controle</b>
          <br />
          In een leven dat voelt als moeten, biedt het gedrag een plek waar
          iemand zelf beslist. Zelfs destructieve controle voelt soms beter dan
          geen controle.
        </ListItem>
        <ListItem>
          <b>Identiteit en betekenis</b>
          <br />
          Het gedrag is niet iets wat iemand doet, maar iets wat iemand is of
          wordt. De gokker, de verleider, de nachtelijke randfiguur. Dit geldt
          sterk bij chemseks en compulsieve seksualiteit.
        </ListItem>
        <ListItem>
          <b>Verbinding zonder afhankelijkheid</b>
          <br />
          Paradoxaal genoeg biedt het gedrag nabijheid zonder echte
          wederkerigheid. Intens, maar tijdelijk. Heftig, maar zonder langdurige
          kwetsbaarheid.
        </ListItem>
        <ListItem>
          <b>Ritme en structuur</b>
          <br />
          Veel gedragsverslavingen geven vorm aan tijd. Ze markeren
          overgangsmomenten, weekenden, nachten, leegtes.
        </ListItem>
      </ul>
      <StyledParagraph>
        Zolang deze functies niet elders worden ingevuld, blijft het gedrag
        logisch. Niet wenselijk, maar logisch.
      </StyledParagraph>
      <SubSectionHeader>
        Waarom gedragsverslavingen vaak later zichtbaar worden
      </SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Bij middelengebruik zie je vaak fysieke signalen. Bij
        gedragsverslavingen is de schade subtieler en daardoor sluipender:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>sociaal langzaam verschralend</ListItem>
        <ListItem>grenzen die verschuiven zonder direct alarm</ListItem>
        <ListItem>morele frictie die wordt gerationaliseerd</ListItem>
        <ListItem>
          een leven dat functioneert, maar steeds smaller wordt
        </ListItem>
      </ul>
      <StyledParagraph>
        Veel mensen “doen het nog prima”, terwijl hun wereld al drastisch is
        verkleind.{" "}
      </StyledParagraph>

      <SubSectionHeader>
        Recreatief gedrag versus gedragsverslaving
      </SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Het verschil zit niet in <b>hoe vaak</b>, maar in{" "}
        <b>wat het gedrag doet in het systeem</b>.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Een paar klinisch bruikbare onderscheidingen:{" "}
      </StyledParagraph>

      <ol className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem ordered>
          <b>Vrijwilligheid versus dwang</b>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Recreatief: <i>ik kan het laten, ook als ik er zin in heb</i>
            </ListItem>
            <ListItem>
              Verslaving:{" "}
              <i>ik moet er actief tegen vechten om het niet te doen</i>
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            De aanwezigheid van strijd is een belangrijk signaal.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <b>Integratie versus isolatie</b>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Recreatief gedrag <b>voegt iets toe</b> aan het leven
            </ListItem>
            <ListItem>
              Verslavend gedrag <b>vervangt</b> steeds meer andere bronnen
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Let op: niet alleen tijd, maar ook emotionele investering.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <b>Herstelvermogen</b>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Recreatief: na excessief gedrag herstelt iemand vanzelf
            </ListItem>
            <ListItem>
              Verslaving: herstel vraagt actief plannen, beloven, compenseren
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Als rust niet meer vanzelf terugkomt, is er meestal meer aan de
            hand.
          </StyledParagraph>
        </ListItem>
        <ListItem ordered>
          <b>Relatie tot grenzen</b>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>Recreatief: grenzen worden soms opgezocht</ListItem>
            <ListItem>Verslaving: grenzen verschuiven structureel</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Wat vroeger “nooit” was, wordt “af en toe”, daarna “logisch”.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <b>Betekenisverschuiving</b>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>Recreatief gedrag blijft middel</ListItem>
            <ListItem>Verslavend gedrag wordt doel</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Niet: <i>ik doe dit om…</i>
            <br />
            Maar: <i>alles staat in dienst van dit</i>
          </StyledParagraph>
        </ListItem>
      </ol>

      <SubSectionHeader>
        Een cruciale nuance: intensiteit is geen verslaving
      </SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Dit is belangrijk, zeker bij seks, chemsex en subculturen.
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>Hoge intensiteit</ListItem>
        <ListItem>Alternatieve leefstijlen</ListItem>
        <ListItem>Nachtleven, experiment, excessen</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Dat alles is op zichzelf géén verslaving.{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        De vraag is niet:
        <br />
        “Is het heftig?”
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Maar:
        <br />
        “Wat gebeurt er als het er even niet is?”
      </StyledParagraph>
      <StyledParagraph>
        Kan iemand <b>zijn identiteit behouden</b>, zijn emoties reguleren en
        zijn relaties dragen zonder dit gedrag? Dan is er ruimte. Zo niet, dan
        wordt het kwetsbaar.
      </StyledParagraph>

      <SubSectionHeader>
        Wanneer gedrag een relationele functie krijgt
      </SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Een gedragsverslaving fungeert vaak als <b>relationeel substituut:</b>
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>het gedrag luistert altijd</ListItem>
        <ListItem>stelt geen eisen</ListItem>
        <ListItem>confronteert niet met wederkerigheid</ListItem>
        <ListItem>verlaat je niet onverwacht</ListItem>
      </ul>
      <StyledParagraph>
        In die zin lijkt het meer op een relatie dan op een gewoonte. En dat
        verklaart waarom afbouwen voelt als verlies van een partner, niet van
        een hobby.{" "}
      </StyledParagraph>

      <SubSectionHeader>Wat dit betekent voor behandeling</SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Als je gedragsverslaving alleen benadert als iets wat weg moet, creëer
        je een vacuüm. Dat vacuüm vult zich vrijwel altijd opnieuw.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Effectieve behandeling:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>erkent de functie van het gedrag</ListItem>
        <ListItem>onderzoekt waar die functie elders kan landen</ListItem>
        <ListItem>
          accepteert dat sommige functies niet volledig te vervangen zijn
        </ListItem>
        <ListItem>werkt met rouw, niet alleen met gedragscontrole</ListItem>
      </ul>

      <SubSectionHeader>Tot slot</SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Gedragsverslavingen zijn geen ontsporingen van zwakke mensen, maar{" "}
        <b>
          consequenties van een systeem dat ergens te weinig draagkracht had.
        </b>
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Het echte kantelpunt is zelden het gedrag zelf. Het kantelpunt is het
        moment waarop iemand merkt:{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        <i>Dit gedrag draagt mij niet meer, maar ik draag het gedrag.</i>{" "}
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Dat moment verdient aandacht. Niet oordeel.{" "}
      </StyledParagraph>
    </>
  );
};
