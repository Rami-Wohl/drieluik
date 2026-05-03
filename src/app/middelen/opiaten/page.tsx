import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { DrugPropertiesTable } from "../drug-properties-table";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Heroine en andere opiaten" />
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
          <OpiatenAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <OpiatenAfbouwtips />
        </TabsContent>
        <TabsContent value="overig">
          <OpiatenOverig />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const OpiatenAlgemeen = () => {
  return (
    <>
      <DrugPropertiesTable
        werkzameStof="Diacetylmorfine C₂₁H₂₃NO₅"
        gebruiksvorm="Roken, snuiven, spuiten"
        uiterlijkeKenmerken="Bruine kristallen / poeder"
        verslavingspotentie="2,9"
        schadeTaxatie="2,53"
      />
      <StyledParagraph marginBottom="mb-2">
        Heroïne en andere opioïden zoals oxycodon, fentanyl, morfine en codeïne
        behoren tot dezelfde stofgroep. Ze verschillen in herkomst, zuiverheid,
        sterkte en toedieningsvorm, maar werken in de kern op hetzelfde
        biologische systeem. Het onderscheid tussen “illegale” en “legale”
        opioïden is maatschappelijk en juridisch, niet farmacologisch.
      </StyledParagraph>
      <StyledParagraph>
        Opioïden staan bekend om hun krachtige, pijnstillende en verdovende
        werking, maar ook om hun hoge verslavingspotentieel. Dat maakt ze zowel
        medisch waardevol als risicovol.
      </StyledParagraph>
      <StyledParagraph header="Wat zijn opioïden en hoe werken ze?">
        Opioïden binden zich aan opioïdreceptoren in de hersenen en het
        ruggenmerg. Deze receptoren spelen een rol bij:{" "}
      </StyledParagraph>

      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>pijnregulatie</ListItem>
        <ListItem>stressdemping</ListItem>
        <ListItem>beloning en veiligheid</ListItem>
        <ListItem>emotionele verdoving</ListItem>
      </ul>
      <StyledParagraph>
        Wanneer een opioïd zich bindt aan deze receptoren ontstaat:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>pijnvermindering</ListItem>
        <ListItem>ontspanning of euforie</ListItem>
        <ListItem>een gevoel van warmte, rust of “afwezigheid”</ListItem>
        <ListItem>vermindering van angst en lichamelijke spanning</ListItem>
      </ul>
      <StyledParagraph>
        Bij herhaald gebruik past het brein zich snel aan. Dat gebeurt niet
        omdat iemand “zwak” is, maar omdat het brein <b>efficiënt leert</b>.
      </StyledParagraph>

      <StyledParagraph header="Heroïne versus andere opioïden">
        Heroïne (diacetylmorfine) is in feite een sneller werkende vorm van
        morfine. Door de chemische structuur passeert het zeer snel de
        bloed-hersenbarrière, wat leidt tot:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>een snelle en intense piek</ListItem>
        <ListItem>een sterke conditionering</ListItem>
        <ListItem>een hoog risico op afhankelijkheid</ListItem>
      </ul>
      <StyledParagraph>
        Farmaceutische opioïden zoals oxycodon of fentanyl:{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>worden vaak medisch gestart</ListItem>
        <ListItem>
          zijn qua werking niet milder, alleen preciezer gedoseerd
        </ListItem>
        <ListItem>
          kunnen net zo verslavend zijn, soms zelfs verraderlijker door
          legitimiteit
        </ListItem>
      </ul>
      <StyledParagraph>De stof maakt minder verschil dan: </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>
          <b>hoe snel</b> het effect intreedt
        </ListItem>
        <ListItem>
          <b>hoe voorspelbaar</b> de beloning is
        </ListItem>
        <ListItem>
          <b>hoe vaak</b> het systeem wordt geactiveerd
        </ListItem>
      </ul>

      <StyledParagraph header="Wanneer spreek je van verslaving?">
        Niet elk opioïdgebruik is verslaving. Het onderscheid zit ook hier niet
        in moraliteit, maar in relatie en functie.
      </StyledParagraph>
      <StyledParagraph>Bij afhankelijkheid zie je meestal:</StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>
          gebruik dat niet meer primair om pijn gaat, maar om rust, demping of
          normaal functioneren
        </ListItem>
        <ListItem>gebruik om ontwenningsklachten te voorkomen</ListItem>
        <ListItem>
          verlies van keuzevrijheid rond wel of niet gebruiken
        </ListItem>
        <ListItem>
          een leven dat steeds meer georganiseerd raakt rondom beschikbaarheid
        </ListItem>
      </ul>
      <StyledParagraph>
        Een belangrijk signaal is wanneer niet-gebruik <b>actieve stress</b>{" "}
        veroorzaakt in plaats van neutraal voelt.
      </StyledParagraph>

      <StyledParagraph header="Hoe herken je een opioïdverslaving?">
        Opioïdverslaving kan zich zowel zichtbaar als verborgen ontwikkelen.
      </StyledParagraph>
      <StyledParagraph>
        <b>Psychische signalen</b>
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>sterke focus op volgende dosis</ListItem>
        <ListItem>
          angst voor lichamelijk of emotioneel ontregelen zonder middel
        </ListItem>
        <ListItem>gebruik om gevoelens “uit te zetten”</ListItem>
        <ListItem>vernauwing van interesse en beleving</ListItem>
      </ul>
      <StyledParagraph>
        <b>Lichamelijke signalen</b>
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>tolerantie: steeds meer nodig voor hetzelfde effect</ListItem>
        <ListItem>onthoudingsklachten bij stoppen of uitstel</ListItem>
        <ListItem>veranderingen in slaap, eetlust en energie</ListItem>
        <ListItem>verlaagde ademhaling of sufheid bij gebruik</ListItem>
      </ul>
      <StyledParagraph>
        <b>Levenspatronen</b>
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>dagindeling draait om gebruik</ListItem>
        <ListItem>sociale contacten verschralen</ListItem>
        <ListItem>geheimhouding of schaamte</ListItem>
        <ListItem>
          functioneren “net genoeg”, maar met steeds minder ruimte
        </ListItem>
      </ul>
      <StyledParagraph>
        Belangrijk: veel mensen met een opioïdverslaving functioneren lange tijd
        ogenschijnlijk goed. De schade is vaak<b>intern en cumulatief.</b>
      </StyledParagraph>

      <StyledParagraph header="Waarom zijn opioïden zo verslavend?">
        Opioïdverslaving kan zich zowel zichtbaar als verborgen
        ontwikkelen.Opioïden zijn uniek omdat ze:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>zowel fysieke pijn als emotionele pijn dempen</ListItem>
        <ListItem>stressresponsen direct verlagen</ListItem>
        <ListItem>een diep gevoel van veiligheid kunnen oproepen</ListItem>
      </ul>

      <StyledParagraph marginBottom="mb-2">
        Het brein leert daardoor: <br />
        <i>dit middel beschermt mij tegen overspoeling</i>
      </StyledParagraph>
      <StyledParagraph>
        Dat maakt opioïden bijzonder aantrekkelijk bij:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>trauma</ListItem>
        <ListItem>chronische pijn</ListItem>
        <ListItem>langdurige stress</ListItem>
        <ListItem>existentiële leegte</ListItem>
        <ListItem>lichamelijke uitputting</ListItem>
      </ul>
      <StyledParagraph>
        Verslaving ontstaat hier niet uit plezier, maar uit <b>overleving</b>.
      </StyledParagraph>

      <StyledParagraph header="Mogelijke complicaties op de lange termijn">
        <b>Lichamelijk</b>{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>ademhalingsdepressie (met risico op overlijden)</ListItem>
        <ListItem>obstipatie en darmproblemen</ListItem>
        <ListItem>hormonale ontregeling</ListItem>
        <ListItem>verhoogd infectierisico (bij injecteren)</ListItem>
        <ListItem>
          verhoogde tolerantie en kwetsbaarheid voor overdosis
        </ListItem>
      </ul>
      <StyledParagraph>
        <b>Psychisch</b>{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>emotionele vervlakking</ListItem>
        <ListItem>depressieve klachten</ListItem>
        <ListItem>angst zonder middel</ListItem>
        <ListItem>verminderde stress- en pijntolerantie</ListItem>
      </ul>
      <StyledParagraph>
        <b>Sociaal en maatschappelijk</b>{" "}
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>isolement</ListItem>
        <ListItem>financiële problemen</ListItem>
        <ListItem>verlies van dagstructuur</ListItem>
        <ListItem>
          afhankelijkheid van zorg, voorschriften of illegale circuits
        </ListItem>
      </ul>
      <StyledParagraph>
        De schade ontstaat zelden door één moment, maar door{" "}
        <b>langdurige belasting van hetzelfde systeem.</b>{" "}
      </StyledParagraph>
      <StyledParagraph header="Een belangrijke nuance" marginBottom="mb-2">
        Opioïdverslaving is geen karakterprobleem en ook geen simpel gevolg van
        “te ver gaan”. Het is het resultaat van een middel dat uitzonderlijk
        effectief is in het dempen van <b>ondraaglijkheid.</b>{" "}
      </StyledParagraph>
      <StyledParagraph>
        Dat maakt het risico groot, maar verklaart ook waarom deze middelen zo
        hardnekkig kunnen worden.
      </StyledParagraph>
    </>
  );
};

const OpiatenAfbouwtips = () => {
  return (
    <>
      <StyledParagraph header="Klinische aandachtspunten voor behandelaren">
        Afbouwen van opioïden is geen lineair proces en zelden puur een
        farmacologische ingreep. Hoewel lichamelijke afhankelijkheid een rol
        speelt, is het succes van afbouw in hoge mate afhankelijk van{" "}
        <b>context, timing, draagkracht en betekenis</b>. Te snelle of te
        instrumentele afbouw vergroot de kans op terugval en medische
        complicaties.
      </StyledParagraph>

      <ol className="flex flex-col px-4">
        <ListItem ordered>
          <SubSectionHeader>
            Afbouw is een medisch én psychologisch traject
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Opioïden veroorzaken zowel:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              <b>fysieke afhankelijkheid</b> (onthoudingsklachten)
            </ListItem>
            <ListItem>
              <b>psychische afhankelijkheid</b> (veiligheid, demping, regulatie)
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Een afbouw die zich alleen richt op het lichaam, maar niet op de
            functie van het middel, leidt vaak tot:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>hergebruik</ListItem>
            <ListItem>substitutie (andere middelen of gedrag)</ListItem>
            <ListItem>chronische instabiliteit</ListItem>
          </ul>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>Timing is cruciaal</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Niet elke patiënt is op elk moment afbouwbaar, hoe gemotiveerd ook.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Afbouw is risicovol bij:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>acute psychiatrische ontregeling</ListItem>
            <ListItem>onbehandeld trauma</ListItem>
            <ListItem>instabiele woon- of leefsituatie</ListItem>
            <ListItem>ernstige somatische comorbiditeit</ListItem>
            <ListItem>gebrek aan basale dagstructuur</ListItem>
          </ul>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>Tempo</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Bij opioïden is te snelle afbouw één van de belangrijkste
            voorspellers van:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>terugval</ListItem>
            <ListItem>overdosis (door verlaagde tolerantie)</ListItem>
            <ListItem>drop-out uit behandeling</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Klinisch geldt:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              het brein heeft tijd nodig om endogene regulatie te herstellen
            </ListItem>
            <ListItem>
              onrust en dysforie zijn geen tekenen van “onwil”, maar van
              ontregeling
            </ListItem>
            <ListItem>stabiliteit op een lagere dosis is soms winst</ListItem>
          </ul>
          <StyledParagraph>
            <b>
              Afbouw is geslaagd als iemand functioneert, niet als de dosis nul
              is.
            </b>{" "}
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Verwachtingsmanagement bij de patiënt
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Veel patiënten onderschatten:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>de duur van ontregeling</ListItem>
            <ListItem>
              het verschil tussen fysieke ontwenning en herstel
            </ListItem>
            <ListItem>de rouw die kan optreden</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Helpende psycho-educatie:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>normaliseer langdurige dysforie en leegte</ListItem>
            <ListItem>
              benoem dat “niet lekker voelen” geen teken is dat het mislukt
            </ListItem>
            <ListItem>
              maak onderscheid tussen craving, angst en lichamelijke klachten
            </ListItem>
          </ul>
          <StyledParagraph>Wat vaak helpt is expliciet zeggen:</StyledParagraph>
          <StyledParagraph>
            <i>
              “Het doel is niet dat u zich snel goed voelt, maar dat u leert
              dragen wat eerder werd gedempt.”
            </i>
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Vermijd morele druk richting abstinentie
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Een te sterke focus op “helemaal stoppen” kan:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>schaamte vergroten</ListItem>
            <ListItem>informatie-uitwisseling verstoren</ListItem>
            <ListItem>risico’s onzichtbaar maken</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Voor sommige patiënten is:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>langdurige onderhoudsbehandeling</ListItem>
            <ListItem>stabilisatie zonder verdere afbouw</ListItem>
            <ListItem>of een pauze in het traject </ListItem>
          </ul>
          <StyledParagraph>
            klinisch gezien de meest veilige optie.
          </StyledParagraph>
          <StyledParagraph>
            <b>
              Abstinentie is geen morele eindstreep, maar één van meerdere
              mogelijke uitkomsten.
            </b>
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>Let op overdose risico na afbouw</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Na (gedeeltelijke) afbouw is tolerantie verlaagd. Dit maakt
            patiënten extra kwetsbaar bij terugval.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Behandelaren dienen:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>dit expliciet te bespreken</ListItem>
            <ListItem>risico’s niet te bagatelliseren</ListItem>
            <ListItem>veiligheid te prioriteren boven ideologie</ListItem>
          </ul>
          <StyledParagraph>
            Het ontbreken van deze psycho-educatie is een bekende risicofactor
            voor fatale incidenten.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Integreer somatiek, psychiatrie en sociale context
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Succesvolle afbouw vraagt om samenhang tussen:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>medische monitoring</ListItem>
            <ListItem>psychologische begeleiding</ListItem>
            <ListItem>sociaal-maatschappelijke stabiliteit</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">Afbouw zonder:</StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>zinvolle daginvulling</ListItem>
            <ListItem>relationele ondersteuning</ListItem>
            <ListItem>perspectief op betekenis</ListItem>
          </ul>
          <StyledParagraph>
            is technisch mogelijk, maar klinisch fragiel.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>De rol van de behandelaar</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Bij opioïdafbouw is de behandelrelatie zelf een stabiliserende
            factor.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Werkzame houding:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>voorspelbaar </ListItem>
            <ListItem>niet-dwingend </ListItem>
            <ListItem>transparant </ListItem>
            <ListItem>consequent zonder straf </ListItem>
            <ListItem>bereid tot temporiseren </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Voor veel patiënten is dit de eerste relatie waarin:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>grenzen helder zijn </ListItem>
            <ListItem>zorg niet verdwijnt bij terugval</ListItem>
            <ListItem>
              veiligheid niet afhankelijk is van “goed gedrag”{" "}
            </ListItem>
          </ul>
        </ListItem>
      </ol>
    </>
  );
};

const OpiatenOverig = () => {
  return (
    <>
      <SubSectionHeader>
        Aanvullende klinische en contextuele aandachtspunten
      </SubSectionHeader>
      <ol className="flex flex-col px-4">
        <ListItem ordered>
          <SubSectionHeader>Stigma en beeldvorming</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Opioïdverslaving, en met name heroïnegebruik, is sterk belast door
            stigma. Dit heeft directe klinische gevolgen:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>verminderde openheid van patiënten</ListItem>
            <ListItem>uitstel van zorg </ListItem>
            <ListItem>internalisatie van schaamte </ListItem>
            <ListItem>vermijdingsgedrag richting behandeling </ListItem>
          </ul>
          <StyledParagraph>
            Het onderscheid tussen “illegale” heroïne en “legale” opioïden
            versterkt dit stigma, terwijl de farmacologische werking grotendeels
            gelijk is. Voor behandelaren is het van belang dit onderscheid
            actief te deconstrueren, om toegang tot zorg laagdrempelig te
            houden.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Substitutie en onderhoudsbehandeling
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Onderhoudsbehandeling met opioïden is geen teken van falen, maar een{" "}
            <b>evidence-based interventie</b> voor een specifieke doelgroep.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Belangrijke nuances:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>stabilisatie kan een behandeluitkomst zijn</ListItem>
            <ListItem>
              langdurige substitutie kan functioneren verbeteren
            </ListItem>
            <ListItem>kwaliteit van leven is een valide maat</ListItem>
            <ListItem>
              stoppen is geen noodzakelijke voorwaarde voor herstel
            </ListItem>
          </ul>
          <StyledParagraph>
            Behandelaren doen er goed aan onderhoud niet te framen als
            “tijdelijk noodzakelijk kwaad”, maar als één van de mogelijke
            trajecten.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>Overdosis risico en veiligheid</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Opioïden kennen een smalle veiligheidsmarge, met name bij:{" "}
          </StyledParagraph>

          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>wisselend gebruik</ListItem>
            <ListItem>polygebruik (alcohol, benzodiazepinen)</ListItem>
            <ListItem>na afbouw of abstinentie</ListItem>
          </ul>
          <StyledParagraph>
            Bespreekbaarheid van risico’s is essentieel. Het vermijden van dit
            gesprek uit angst voor “normaliseren” vergroot juist de kans op
            incidenten.{" "}
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Comorbiditeit is eerder regel dan uitzondering
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Bij opioïdproblematiek is comorbiditeit vaak structureel aanwezig:
          </StyledParagraph>

          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>trauma- en stressgerelateerde stoornissen</ListItem>
            <ListItem>chronische pijn</ListItem>
            <ListItem>depressieve of angstklachten</ListItem>
            <ListItem>sociale en economische problematiek</ListItem>
          </ul>
          <StyledParagraph>
            Een geïsoleerde focus op het middel leidt zelden tot duurzame
            verbetering. Integraal werken is hier geen luxe, maar noodzaak.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>Heroïne en identiteit</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Voor sommige patiënten is heroïnegebruik meer dan een gewoonte of
            symptoom. Het kan:
          </StyledParagraph>

          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>identiteit structureren</ListItem>
            <ListItem>sociale positie bepalen</ListItem>
            <ListItem>ritme en betekenis geven</ListItem>
          </ul>
          <StyledParagraph>
            Bij verandering raakt dus niet alleen gedrag, maar ook zelfbeeld en
            plaats in de wereld. Dat vraagt om rouw, heroriëntatie en tijd.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Juridische en maatschappelijke context
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            De criminalisering van heroïnegebruik beïnvloedt:
          </StyledParagraph>

          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>toegang tot zorg</ListItem>
            <ListItem>vertrouwensrelatie met hulpverlening</ListItem>
            <ListItem>bereidheid tot eerlijkheid</ListItem>
          </ul>
          <StyledParagraph>
            Behandelaren opereren onvermijdelijk binnen dit spanningsveld.
            Bewustzijn hiervan voorkomt dat zorg onbedoeld controlerend of
            sanctionerend wordt.
          </StyledParagraph>
        </ListItem>
      </ol>
    </>
  );
};
