import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionParagraph } from "~/components/ui/text-components/subsection-paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Flakka (α-PVP)" />
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
          <FlakkaAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <FlakkaAfbouwtips />
        </TabsContent>
        <TabsContent value="overig">
          <FlakkaOverig />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const FlakkaAlgemeen = () => {
  return (
    <>
      <StyledParagraph header="Wat is Flakka?">
        Flakka is de straatnaam voor <b>α-PVP</b>, een synthetische stimulant
        uit de groep <b>cathinonen</b>. Het werkt sterk op het dopamine- en
        noradrenalinesysteem en heeft een langdurige, intense werking.
      </StyledParagraph>
      <SubSectionHeader>Classificatie:</SubSectionHeader>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem> Synthetische stimulant</ListItem>
        <ListItem>Vergelijkbaar met: amfetamine, methamfetamine</ListItem>
        <ListItem>
          Verschil: <b>sterker, grilliger en psychotischer profiel</b>
        </ListItem>
      </ul>
      <SubSectionHeader>Toedieningsvormen:</SubSectionHeader>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem> Roken (folie, pijp)</ListItem>
        <ListItem>Sniffen </ListItem>
        <ListItem>
          Slikken (Roken geeft snelle, intense piek → hoogste
          ontregelingsrisico)
        </ListItem>
      </ul>
      <SubSectionHeader>Effecten (kortdurend):</SubSectionHeader>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>Sterke alertheid en energie</ListItem>
        <ListItem>Gevoel van macht/onkwetsbaarheid</ListItem>
        <ListItem>Onderdrukking van vermoeidheid, honger en angst</ListItem>
        <ListItem>Verhoogde focus (subjectief)</ListItem>
      </ul>
      <SubSectionHeader>Bijwerkingen/risico’s:</SubSectionHeader>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>Paranoia en achterdocht</ListItem>
        <ListItem>Ernstige angst, paniek</ListItem>
        <ListItem>Slaaploosheid (meerdere dagen)</ListItem>
        <ListItem>
          Psychotische symptomen (wanen, stemmen, derealisatie)
        </ListItem>
        <ListItem>Agressie of impulsief gedrag</ListItem>
        <ListItem>
          Lichamelijk: hartkloppingen, oververhitting, uitdroging
        </ListItem>
      </ul>
      <SubSectionHeader>Verslavingspotentie:</SubSectionHeader>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>Hoog</ListItem>
        <ListItem>Snelle tolerantieontwikkeling</ListItem>
        <ListItem>Sterke craving, vooral mentaal</ListItem>
      </ul>
      <StyledParagraph header="Belangrijk onderscheid:">
        Waar cocaïne vaak <i>kort en cyclisch</i> werkt, kan flakka{" "}
        <b>dagenlange ontregeling</b> veroorzaken na één gebruiksperiode.
      </StyledParagraph>
    </>
  );
};

const FlakkaAfbouwtips = () => {
  return (
    <>
      <div className="mb-6 w-full border border-black p-1 px-2 font-sans text-sm tracking-[1px] text-[#333333]">
        Let op: afbouwen gebeurt altijd samen met behandelaren. Deze punten zijn
        bedoeld als kader voor gesprek, niet als zelfhulpinstructie.
      </div>

      <SubSectionHeader>A. Signaleren van risico fases</SubSectionHeader>
      <ul className="mb-4 flex list-inside flex-col gap-2">
        <ListItem>Gebruiker overschat eigen functioneren</ListItem>
        <ListItem>Verminderd ziektebesef</ListItem>
        <ListItem>Toenemende achterdocht richting hulpverlening</ListItem>
        <ListItem>Verwaarlozing slaap / structuur </ListItem>
      </ul>
      <StyledParagraph>
        <b>Afbouwen begint vaak met stabiliseren, niet met stoppen.</b>
      </StyledParagraph>
      <SubSectionHeader>B. Eerste behandelprioriteiten</SubSectionHeader>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>
          <b>Slaap herstellen</b>
          <br />
          Zonder slaap is elke verdere behandeling ineffectief.
        </ListItem>
        <ListItem>
          <b>Fysieke basis op orde</b>
          <br />
          Hydratatie, voeding, dag-nachtritme.
        </ListItem>
        <ListItem>
          <b>Prikkelreductie</b>
          <br />
          Flakka vergroot sensorische overbelasting.
        </ListItem>
      </ul>
      <SubSectionHeader>C. Afbouw in de praktijk</SubSectionHeader>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>
          Abrupt stoppen kan leiden tot:
          <ul className="my-2 flex list-inside flex-col gap-2 pl-4">
            <ListItem>extreme uitputting</ListItem>
            <ListItem>depressieve klachten</ListItem>
            <ListItem>suïcidaliteit</ListItem>
          </ul>
        </ListItem>
        <ListItem>
          Gefaseerd verminderen is soms realistischer dan onmiddellijke
          abstinentie
        </ListItem>
        <ListItem>
          Medicatie kan <b>ondersteunend</b> zijn (geen vervanging van
          behandeling)
        </ListItem>
      </ul>
      <SubSectionHeader>D. Craving bespreekbaar maken</SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Craving bij flakka is vaak:
      </StyledParagraph>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>cognitief (“ik moet scherp zijn”)</ListItem>
        <ListItem>
          existentieel (“zonder dit kan ik niet functioneren”)
        </ListItem>
      </ul>
      <StyledParagraph>
        Benader craving als <i>betekenisvolle signalen</i>, niet als falen.
      </StyledParagraph>
    </>
  );
};

const FlakkaOverig = () => {
  return (
    <>
      <SubSectionHeader>Functie van gebruik (veelvoorkomend)</SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">
        Bij flakka zien we relatief vaak:
      </StyledParagraph>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>
          Willen ontsnappen aan:
          <ul className="my-2 flex list-inside flex-col gap-2 pl-4">
            <ListItem>innerlijke onrust</ListItem>
            <ListItem>somberheid</ListItem>
            <ListItem>trauma-gerelateerde spanning</ListItem>
          </ul>
        </ListItem>
        <ListItem>
          Behoefte aan:
          <ul className="my-2 flex list-inside flex-col gap-2 pl-4">
            <ListItem>controle</ListItem>
            <ListItem>kracht</ListItem>
            <ListItem>versnelling of stilzetten van gedachten</ListItem>
          </ul>
        </ListItem>
        <ListItem>
          Vermijden van:
          <ul className="my-2 flex list-inside flex-col gap-2 pl-4">
            <ListItem>gevoelens van machteloosheid</ListItem>
            <ListItem>afhankelijkheid van anderen</ListItem>
          </ul>
        </ListItem>
      </ul>
      <StyledParagraph>
        Het middel wordt vaak ingezet als <b>zelfmedicatie</b>, maar verergert
        juist de kernproblematiek.
      </StyledParagraph>
      <SubSectionHeader>
        Differentiaaldiagnostische aandachtspunten
      </SubSectionHeader>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>
          Flakka-geïnduceerde psychose is <b>niet hetzelfde</b> als primaire
          psychotische stoornis (maar kan hier wel in overlopen)
        </ListItem>

        <ListItem>
          Achterdocht kan middelgerelateerd én traumagerelateerd zijn
        </ListItem>

        <ListItem>
          Gedragsontregeling is <b>niet hetzelfde</b> als onwil
        </ListItem>
      </ul>

      <SubSectionHeader>Houding van de behandelaar</SubSectionHeader>
      <StyledParagraph marginBottom="mb-2">Wat helpt:</StyledParagraph>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>Rust, voorspelbaarheid</ListItem>
        <ListItem>Eenduidigheid </ListItem>
        <ListItem>Begrenzen zonder escaleren </ListItem>
        <ListItem>Blijven erkennen waarom iemand gebruikt </ListItem>
      </ul>
      <StyledParagraph>Wat averechts werkt:</StyledParagraph>
      <ul className="mb-8 flex list-inside flex-col gap-2">
        <ListItem>Confronterend doorvragen op inhoud van wanen</ListItem>
        <ListItem>Moraliserende taal</ListItem>
        <ListItem>Te snelle focus op abstinentie</ListItem>
      </ul>
    </>
  );
};
