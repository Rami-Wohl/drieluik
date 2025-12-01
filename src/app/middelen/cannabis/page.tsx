import { CannabisAnamnese } from "~/components/sections/middelen/cannabis";
import { StyledParagraph } from "~/components/sections/middelen/cocaine";
import { SubSectionParagraph } from "~/components/sections/middelen/ghb";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { ResponsiveImage } from "~/components/ui/responsive-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Cannabis" />
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
            value="voorlichting"
          >
            Voorlichting
          </TabsTrigger>
          <TabsTrigger
            className="w-full bg-red-900 bg-opacity-30 font-sans text-[1.1rem] tracking-[0.1rem] opacity-90 hover:bg-opacity-50 data-[state=active]:bg-opacity-50"
            value="aanvullend"
          >
            Aanvullende info
          </TabsTrigger>
        </TabsList>
        <TabsContent value="algemeen">
          <CannabisAlgemeen />
        </TabsContent>
        <TabsContent value="voorlichting">
          <CannabisVoorlichting />
        </TabsContent>
        <TabsContent value="aanvullend">
          <CannabisAanvullend />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const CannabisAlgemeen = () => {
  return (
    <>
      <StyledParagraph marginBottom="mb-2">
        <span className="font-semibold">Wiet</span> is de (gedroogde) vrucht van
        de cannabisplant (toppen). THC en CBD zijn de hoofd-werkzame stoffen in
        wiet. THC is de psycho-actieve stof, Het effect wordt vaak omschreven
        als geestverruimend. En CBD heeft een meer pijnstillende en slaap
        opwekkende werking.
      </StyledParagraph>
      <ResponsiveImage
        src="/images/cannabis-1.jpg"
        alt="Plaatje van cannabis"
        description="Cannabis"
      />
      <StyledParagraph marginBottom="mb-2">
        Er zijn drie soorten cannabis planten:
      </StyledParagraph>
      <ul className="mb-8 flex flex-col gap-2 px-4">
        {" "}
        <ListItem>Cannabis Sativa (hoog in THC, laag in CBD)</ListItem>
        <ListItem>Cannabis Indica (ongeveer gelijk in THC en CBD)</ListItem>
        <ListItem>Cannabis Ruderalis (laag in thc, hoog in CBD)</ListItem>
      </ul>
      <StyledParagraph>
        Deze families worden met elkaar gekruist om tot de bekende wietsoorten
        uit de coffeshop te komen. Deze hybriden hebben namen die eindigen op
        bijvoorbeeld Haze (wat vaak wijst op een Sativa dominante hybride) of
        Kush (wat eerder wijst op een Indica dominante hybride).
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        <span className="font-semibold">Hash</span> wordt gemaakt van wiet. De
        manier van vervaardigen bepaalt het soort hasj. Soms wordt bijvoorbeeld
        eerst de wiet gezeefd en daarna geperst (Marokkaanse hasj) of wordt de
        wiet met de hand van de toppen gewreven zodat er een donkere
        kneedachtige hasj overblijft die Charas wordt genoemd.
      </StyledParagraph>
      <ResponsiveImage
        src="/images/hash-1.png"
        alt="Plaatje van hash"
        description="Hash"
      />
    </>
  );
};

const CannabisVoorlichting = () => {
  return (
    <>
      <StyledParagraph marginBottom="mb-2">
        <span className="italic">Cannabis en psychose</span>
        <br />
        de hoofd-werkzame stof in cannabis (THC), kan nadelige gevolgen hebben
        voor mensen die gevoelig zijn voor het krijgen van psychoses. Terwijl er
        van CBD redenen zijn om aan te nemen dat het juist bescherming kan
        bieden (MCGuire 2017).
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Het nemen van cannabis is dat altijd risicovol voor cliënten met een
        psychose gevoeligheid. Echter is het belangrijk om aan te sluiten bij de
        persoon en geen beslissingen voor iemand te maken. Dit werkt namelijk
        dikwijls averechts. Advies is om samen met de cliënt te kijken naar hoe
        er in stappen kan worden toegewerkt naar minder THC inname per dag,
        bijvoorbeeld door soorten te nemen die minder THC (en bij voorkeur juist
        meer CBD) bevatten. Voor een overzicht van soorten en bijbehorende THC
        en CBD gehaltes; zie de cannabis anamnese onder &apos;Afbouwtips&apos;.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        <span className="italic">Overige psychische klachten</span>
        <br />
        Er zijn verschillende klachten waar cannabis juist bij lijkt te helpen.
        Mensen nemen cannabis bijvoorbeeld tegen de pijn, om beter te slapen of
        om rustiger te blijven bij angst en spanning. Echter blijkt dat op lange
        termijn cannabis gebruik juist dergelijke klachten in stand kan houden,
        of zelfs kan verergeren. Men heeft dan de cannabis nodig om te voorkomen
        dat de klachten nog erger worden. Na een periode dagelijks cannabis
        gebruiken heeft het lichaam ongeveer acht weken nodig om weer tot een
        natuurlijker balans terug te keren.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Tevens kan langdurig cannabisgebruik ook verschillende ritmes verstoren.
        Dit komt doordat THC zich hecht aan de CB1 receptor, waar normaal
        Anandamide neurotransmitters aan hechten, welke een grote rol spelen bij
        onder andere het reguleren van het “honger” gevoel, pijn en de
        vruchtbaarheid.
      </StyledParagraph>
    </>
  );
};

const CannabisAanvullend = () => {
  return (
    <>
      <StyledParagraph header="Afbouwtips" marginBottom="mb-2">
        Afbouwen met cannabis kan volgens de volgende methodes:
      </StyledParagraph>
      <div className="mb-8 flex flex-col gap-2">
        {" "}
        <SubSectionParagraph>
          <span className="font-semibold">Sterkte:</span> er kan minder sterke
          cannabis gerookt worden (zie cannabis anamnese)
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Hoeveelheid:</span> er kan minder
          cannabis in de joint worden verwerkt
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Frequentie:</span> er kan minder vaak
          een joint worden gerookt.
        </SubSectionParagraph>
      </div>
      <div className="mb-10">
        <CannabisAnamnese />
      </div>
    </>
  );
};
