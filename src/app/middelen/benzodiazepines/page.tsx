import {
  BenzosAfbouwtabel1,
  BenzosAfbouwtabel2,
} from "~/app/middelen/benzodiazepines/benzos-afbouwtabel";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Benzodiazepines" />
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
            value="aanvullend"
          >
            Aanvullend
          </TabsTrigger>
        </TabsList>
        <TabsContent value="algemeen">
          <BenzosAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <BenzosAfbouwtips />
        </TabsContent>
        <TabsContent value="aanvullend">
          <BenzosAanvullend />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const BenzosAlgemeen = () => {
  return (
    <>
      <StyledParagraph marginBottom="mb-2">
        Benzodiazepinen zijn medicijnen met een dempend effect op het centrale
        zenuwstelsel. Ze versterken de werking van GABA, een remmende
        neurotransmitter, waardoor angst, spanning en alertheid afnemen. Bekende
        middelen zijn diazepam, oxazepam, lorazepam, alprazolam en temazepam.
      </StyledParagraph>{" "}
      <StyledParagraph marginBottom="mb-2">
        Ze worden voorgeschreven bij onder andere angstklachten,
        paniekstoornissen, slapeloosheid, epilepsie, spierkrampen en
        alcoholonttrekking. Het effect treedt meestal snel op, vaak binnen 30
        tot 60 minuten. Dat maakt ze geschikt voor kortdurend gebruik bij acute
        klachten.
      </StyledParagraph>{" "}
      <StyledParagraph marginBottom="mb-2">
        Voorlichting aan patiënten is belangrijk, omdat de voordelen en risico’s
        dicht bij elkaar liggen. Wat vaak helpend is om uit te leggen:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>
          <b>Het middel onderdrukt klachten, maar lost de oorzaak niet op.</b>
          <br />
          Angst of slaapproblemen komen vaak terug als het middel wordt
          afgebouwd.
        </ListItem>
        <ListItem>
          <b>Gewenning kan snel optreden.</b>
          <br />
          Het lichaam past zich aan, waardoor hetzelfde middel minder effect
          heeft en sommige mensen meer nodig denken te hebben.
        </ListItem>
        <ListItem>
          <b>Afhankelijkheid kan ongemerkt ontstaan.</b>
          <br />
          Dit kan al na enkele weken dagelijks gebruik optreden, vooral bij
          hogere doseringen.
        </ListItem>
        <ListItem>
          <b>
            Onttrekkingsklachten lijken vaak op de oorspronkelijke klachten.
          </b>
          <br />
          Denk aan angst, slapeloosheid, onrust en prikkelbaarheid. Dit wordt
          soms verward met “terugval”, terwijl het ook onderdeel kan zijn van
          ontwenning.
        </ListItem>
        <ListItem>
          <b>Bijwerkingen beïnvloeden het dagelijks functioneren.</b>
          <br />
          Sufheid, concentratieproblemen en geheugenklachten komen regelmatig
          voor. Ook is er een verhoogd risico op vallen, vooral bij
          ouderen.{" "}
        </ListItem>
        <ListItem>
          <b>Combinatiegebruik vergroot de risico’s aanzienlijk.</b>
          <br />
          In combinatie met alcohol, opioïden of andere dempende middelen kan
          het effect versterken en gevaarlijk worden (bijvoorbeeld
          ademhalingsproblemen).{" "}
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Richtlijnen adviseren benzodiazepinen zo kort mogelijk te gebruiken,
        meestal maximaal enkele weken tot enkele maanden inclusief afbouw. In de
        praktijk worden ze echter regelmatig langer gebruikt, waardoor het
        risico op afhankelijkheid toeneemt.
      </StyledParagraph>{" "}
      <StyledParagraph marginBottom="mb-2">
        Voor behandelaars is het helpend om benzodiazepinen te framen als een
        tijdelijk hulpmiddel in plaats van een oplossing. Het gesprek kan zich
        richten op:{" "}
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>wat het middel iemand op dit moment oplevert.</ListItem>
        <ListItem>
          welke functie het vervult (bijv. slaap, demping, controle).
        </ListItem>
        <ListItem>
          en welke alternatieven mogelijk zijn op de langere termijn.
        </ListItem>
      </ul>
      <StyledParagraph>
        Zo blijft de regie bij de patiënt, terwijl er tegelijkertijd ruimte
        ontstaat om het gebruik kritisch te bekijken en, waar mogelijk, toe te
        werken naar afbouw.{" "}
      </StyledParagraph>{" "}
    </>
  );
};

const BenzosAfbouwtips = () => {
  return (
    <>
      <StyledParagraph marginBottom="mb-2">
        Het afbouwen van benzodiazepinen vraagt om een geleidelijke en
        zorgvuldige aanpak. Bij langdurig of dagelijks gebruik wordt abrupt
        stoppen afgeraden, omdat dit kan leiden tot onttrekkingsklachten zoals
        angst, slapeloosheid, onrust, prikkelbaarheid, trillen en in ernstige
        gevallen verwardheid of insulten.
      </StyledParagraph>{" "}
      <StyledParagraph marginBottom="mb-2">
        Een aantal uitgangspunten voor de praktijk:
      </StyledParagraph>{" "}
      <ul className="mb-6 mt-2 flex flex-col gap-2">
        <ListItem>
          <b>Bouw geleidelijk af</b>
          <br />
          Verminder de dosering stapsgewijs. Grote stappen aan het begin zijn
          vaak beter te verdragen dan aan het einde.
        </ListItem>

        <ListItem>
          <b>Vertraag onder de 10 mg diazepam-equivalent</b>
          <br />
          In de laatste fase nemen klachten vaak toe. Hier is het belangrijk om
          kleinere stappen te zetten en meer tijd te nemen.
        </ListItem>
        <ListItem>
          <b>Houd het schema flexibel</b>
          <br />
          Als klachten te heftig worden, is het beter om tijdelijk te
          stabiliseren dan door te drukken.
        </ListItem>
        <ListItem>
          <b>Werk indien nodig met diazepam</b>
          <br />
          Bij kortwerkende benzodiazepinen kan overstappen naar diazepam helpen,
          omdat dit gelijkmatiger werkt en makkelijker af te bouwen is.
        </ListItem>
        <ListItem>
          <b>Combineer afbouw met behandeling</b>
          <br />
          Denk aan slaapinterventies, angstbehandeling of traumatherapie. Zonder
          alternatief blijft het middel vaak een functie houden.
        </ListItem>
        <ListItem>
          <b>Bespreek verwachtingen vooraf</b>
          <br />
          Onttrekkingsklachten betekenen niet automatisch dat het misgaat. Goede
          uitleg vergroot de kans dat iemand het volhoudt.
        </ListItem>
      </ul>
      <SubSectionHeader>Voorbeeld afbouwschema (diazepam)</SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        <b>Uitgangspunt: </b>
        startdosering 45 mg per dag
        <br />
        <b>Stapgrootte: </b>
        minimaal 2–5 mg
        <br />
        <b>Tempo: </b>
        ± elke 1–2 weken (aanpassen op geleide van klachten)
        <br />
      </StyledParagraph>{" "}
      <StyledParagraph marginBottom="mb-2">
        <b>Fase 1: grotere stappen</b>
      </StyledParagraph>
      <div className="mb-4 overflow-x-scroll">
        <BenzosAfbouwtabel1 />
      </div>
      <StyledParagraph marginBottom="mb-2">
        <b>Fase 2: vertragen</b>
      </StyledParagraph>
      <div className="mb-4 overflow-x-scroll">
        <BenzosAfbouwtabel2 />
      </div>
    </>
  );
};

const BenzosAanvullend = () => {
  return (
    <>
      <SubSectionHeader>Tussen medicijn en afhankelijkheid</SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Benzodiazepinen nemen een bijzondere positie in binnen het
        middelenlandschap. Het zijn geen “straatdrugs”, maar ook geen
        onschuldige hulpmiddelen. Ze bevinden zich precies op het snijvlak van
        geneeskunde en verslavingszorg.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Aan de ene kant zijn benzodiazepinen volwaardige geneesmiddelen. Ze
        worden voorgeschreven door artsen, zijn opgenomen in behandelrichtlijnen
        en hebben een duidelijke plaats bij acute angst, slapeloosheid en
        ontregeling. In Nederland worden ze nog steeds op grote schaal gebruikt;
        jaarlijks krijgen honderdduizenden mensen een benzodiazepine via de
        apotheek.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Tegelijkertijd is al decennialang bekend dat deze middelen gewenning en
        afhankelijkheid kunnen veroorzaken, soms al na enkele weken dagelijks
        gebruik. Richtlijnen adviseren daarom om ze zo kort mogelijk voor te
        schrijven. In de praktijk blijkt dat echter lastig vol te houden. Veel
        patiënten blijven ze langer gebruiken dan bedoeld, vaak omdat het middel
        in eerste instantie goed werkt en het stoppen juist klachten oproept.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Dat is de kern van het spanningsveld:
        <br />
        <i>
          een middel dat snel verlichting geeft, kan ongemerkt een nieuwe bron
          van klachten worden.
        </i>
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Daar komt bij dat benzodiazepinen niet alleen via de zorg beschikbaar
        zijn. Er bestaat ook een duidelijke informele en illegale markt.
        Middelen worden gedeeld, online gekocht of verkregen zonder recept.
        Daarnaast komen er steeds vaker nieuwe, niet-geregistreerde
        benzodiazepinen op de markt via internet, waarvan de sterkte en
        samenstelling onvoorspelbaar kunnen zijn.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Ook binnen de reguliere zorg schuurt het soms. Er zijn signalen van
        langdurig voorschrijven dat niet altijd aansluit bij richtlijnen, en
        gevallen waarin vervalste recepten worden gebruikt om aan
        benzodiazepinen te komen. Dat wijst niet op één centrale oorzaak, maar
        laat wel zien hoe breed deze middelen in verschillende systemen aanwezig
        zijn: medische zorg, zelfmedicatie en handel.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Wat benzodiazepinen vooral laten zien, is dat legaliteit en veiligheid
        niet hetzelfde zijn. Het feit dat een middel wordt voorgeschreven,
        betekent niet dat het geen risico’s heeft. Tegelijk betekent
        verslavingspotentie niet dat een middel geen waarde kan hebben.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Voor behandelaars ligt hier een belangrijke taak. Niet door
        benzodiazepinen te demoniseren, maar door ze te positioneren als wat ze
        zijn: een tijdelijk hulpmiddel met duidelijke grenzen.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Door dit expliciet te maken in het gesprek met patiënten ontstaat er
        ruimte voor een eerlijker verhaal. Een verhaal waarin iemand kan
        erkennen dat het middel geholpen heeft, maar ook kan onderzoeken wat het
        inmiddels kost. Juist in dat spanningsveld ontstaat vaak de motivatie om
        te veranderen.
      </StyledParagraph>
    </>
  );
};
