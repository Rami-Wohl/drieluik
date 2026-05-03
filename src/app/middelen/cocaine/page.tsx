import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionParagraph } from "~/components/ui/text-components/subsection-paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { DrugPropertiesTable } from "../drug-properties-table";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Cocaine" />
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
          <CocaineAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <CocaineAfbouwtips />
        </TabsContent>
        <TabsContent value="overig">
          <CocaineOverig />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const CocaineAlgemeen = () => {
  return (
    <>
      <DrugPropertiesTable
        werkzameStof="Benzoylmethylecgonine C₁₇H₂₁NO₄"
        gebruiksvorm="Snuiven, roken, basen"
        uiterlijkeKenmerken="Wit poeder, witte envelopjes"
        verslavingspotentie="2,1"
        schadeTaxatie="2,06"
      />
      <StyledParagraph header="Wat is cocaine?" marginBottom="mb-2">
        Cocaïne is een krachtig stimulerend middel dat wordt gewonnen uit de
        bladeren van de coca-plant. Het is meestal verkrijgbaar als wit poeder
        of in kristalvorm (&quot;crack&quot;).
      </StyledParagraph>
      <StyledParagraph>
        Het middel wordt vaak gesnoven, gerookt of geïnjecteerd. De werkingsduur
        varieert van enkele minuten (bij roken) tot een uur (bij snuiven).
      </StyledParagraph>
      <StyledParagraph header="Werkingsmechanisme:" marginBottom="mb-2">
        Cocaïne blokkeert de heropname van dopamine, serotonine en noradrenaline
        in de hersenen, wat een intense, korte euforie veroorzaakt.
      </StyledParagraph>
      <StyledParagraph>
        Het effect begint vrijwel direct na gebruik en neemt snel af, wat
        bijdraagt aan de neiging om het middel herhaaldelijk te gebruiken.{" "}
      </StyledParagraph>
      <SubSectionHeader>Fysieke en mentale effecten:</SubSectionHeader>
      <div className="mb-8 flex flex-col gap-2">
        {" "}
        <SubSectionParagraph>
          <span className="font-semibold">Korte termijn:</span> euforie,
          verhoogd zelfvertrouwen, energie, versnelde hartslag, verhoogde
          bloeddruk, verminderde eetlust.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Langetermijn:</span> schade aan het
          neusslijmvlies (bij snuiven), cardiovasculaire problemen,
          gewichtsverlies, vermoeidheid, depressie, en verhoogd risico op
          psychoses.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Overdosisrisico: </span>
          hartritmestoornissen, beroerte, hartaanval, of overlijden.
        </SubSectionParagraph>
      </div>
      <SubSectionHeader>Hoe herken je gebruik?</SubSectionHeader>
      <ul className="mb-8 flex flex-col gap-2 px-4">
        <ListItem>
          {" "}
          Symptomen zoals spraakzaamheid, opgewektheid, pupilvergroting, snelle
          ademhaling, of overmatig zweten.
        </ListItem>
        <ListItem>
          Fysieke aanwijzingen zoals resten van wit poeder, opgerolde
          bankbiljetten, pijpjes of injectiemateriaal.
        </ListItem>
      </ul>
      <StyledParagraph header="Sociaal gedrag:" marginBottom="mb-2">
        Cocaïnegebruik komt vaak voor in sociale settings zoals clubs of
        feesten, maar kan bij frequent gebruik ook leiden tot isolatie.
      </StyledParagraph>
      <StyledParagraph>
        Problematisch gebruik kan leiden tot conflicten met familie, verlies van
        werk, of financiële problemen.{" "}
      </StyledParagraph>
      <SubSectionHeader>Risico&apos;s van gebruik:</SubSectionHeader>
      <div className="mb-8 flex flex-col gap-2">
        {" "}
        <SubSectionParagraph>
          <span className="font-semibold">Fysieke gevolgen: </span> verhoogd
          risico op hart- en vaatziekten, beroertes, schade aan het
          neusslijmvlies, en longschade bij roken.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">Psychische gevolgen: </span>
          angst, depressie, prikkelbaarheid, paranoia, hallucinaties, of
          psychoses bij langdurig gebruik.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Sociale gevolgen: </span>
          relatieproblemen, financiële schulden, verlies van werk, of juridische
          problemen.
        </SubSectionParagraph>
      </div>
      <SubSectionHeader>Harm reduction (veilig gebruik):</SubSectionHeader>
      <div className="mb-8 flex flex-col gap-2">
        <SubSectionParagraph>
          <span className="font-semibold">Dosering:</span> Gebruik zo weinig
          mogelijk om de impact op het lichaam te minimaliseren.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Manier van gebruik:</span> Deel geen
          snuifmaterialen (zoals rietjes) om het risico op infecties te
          vermijden. Bij roken: gebruik een schone pijp.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold"> Hydratatie en voeding:</span> Zorg
          voor voldoende vocht en regelmatige maaltijden om de fysieke belasting
          van het middel te verminderen.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">Combinaties:</span> Vermijd het
          combineren van cocaïne met alcohol (leidt tot de vorming van
          coca-ethyleen, wat extra belastend is voor het hart) of andere
          middelen.
        </SubSectionParagraph>
        <SubSectionParagraph>
          <span className="font-semibold">
            Herken signalen van overdosering:
          </span>{" "}
          Versnelde hartslag, pijn op de borst, hevige agitatie, of verwardheid
          zijn signalen om direct medische hulp te zoeken.
        </SubSectionParagraph>
      </div>
      <SubSectionHeader>
        Psychische impact en sociale aspecten:
      </SubSectionHeader>
      <ul className="mb-8 flex flex-col gap-2 px-4">
        <ListItem>
          Bespreek hoe cocaïnegebruik vaak wordt gekoppeld aan prestatiedrang,
          sociale druk, of escapisme.
        </ListItem>
        <ListItem>
          Adviseer de patiënt om triggers voor gebruik te identificeren, zoals
          stressvolle situaties of sociale settings waar cocaïne vaak wordt
          gebruikt.
        </ListItem>
      </ul>
      <SubSectionHeader>Voorlichting over herstel: </SubSectionHeader>
      <ul className="mb-8 flex flex-col gap-2 px-4">
        <ListItem>
          Leg uit dat herstel vaak gepaard gaat met psychische klachten zoals
          depressie en dat professionele begeleiding essentieel is.
        </ListItem>
        <ListItem>
          Bespreek het belang van een ondersteunend sociaal netwerk en het
          vermijden van risicovolle situaties.
        </ListItem>
      </ul>
      <SubSectionHeader>Verantwoorde communicatie: </SubSectionHeader>
      <ul className="mb-8 flex flex-col gap-2 px-4">
        <ListItem>
          Wees open en niet-oordelend in gesprekken over cocaïnegebruik.
        </ListItem>
        <ListItem>
          Leg uit dat stoppen een proces is dat gepaard kan gaan met terugval en
          dat dit onderdeel is van herstel.
        </ListItem>
      </ul>
    </>
  );
};

const CocaineAfbouwtips = () => {
  return (
    <div>
      <StyledParagraph header="Afbouwen of in één keer stoppen">
        Volgens Koob en Volkow (2010) is het afbouwen van cocaïne is moeilijk
        vanwege de snelle beloningscyclus. Het effect van cocaine neemt snel af,
        wat leidt tot sterke verlangens om het effect opnieuw te ervaren. Het
        afbouwen van cocaine zou kunnen zorgen voor een continue craving.
      </StyledParagraph>
      <StyledParagraph header="Geestelijke afhankelijkheid van cocaïne">
        Cocaïne is een stimulerend middel dat het dopaminesysteem in de hersenen
        beïnvloedt, wat zorgt voor de euforische effecten bij gebruik. Dit
        vergroot de drang om de stof opnieuw te gebruiken om diezelfde euforie
        te ervaren. Geestelijke afhankelijkheid speelt een grote rol in de
        verslaving en is vaak gekoppeld aan symptomen zoals hevige cravings,
        depressie en angst, vooral wanneer iemand probeert te stoppen.
      </StyledParagraph>
      <StyledParagraph header="Lichamelijke afhankelijkheid van cocaïne">
        Cocaïne veroorzaakt geen typische lichamelijke afhankelijkheid zoals
        alcohol of opioïden. Het heeft geen gebruikelijke afkickverschijnselen
        zoals trillen, misselijkheid, zweten of een verhoogde hartslag bij
        stoppen. Toch kunnen er lichamelijke ontwenningsverschijnselen optreden,
        zoals extreme vermoeidheid, slaapproblemen (zoals insomnia of
        hypersomnia), verhoogde eetlust en motorische vertraging of agitatie.
        Deze symptomen worden vaak gezien als psychologisch, aangezien ze
        meestal voortkomen uit de geestelijke afhankelijkheid.
      </StyledParagraph>
      <StyledParagraph header="Ontwenningsverschijnselen van cocaïne">
        De ontwenningsverschijnselen van cocaïne kunnen een reeks symptomen
        omvatten, zoals een depressieve stemming, vermoeidheid, levendige en
        onaangename dromen, slaapproblemen (waaronder zowel moeite met slapen
        als te veel slapen), verhoogde eetlust en psychomotorische vertraging of
        agitatie. Deze symptomen kunnen optreden na het stoppen met het gebruik
        van cocaïne en kunnen een indicatie zijn van de ernst van de verslaving.
        Vanwege de subtiele en niet-specifieke aard van de symptomen kan het
        moeilijk zijn om ze tijdig te herkennen (Sofuoglu et al., 2005).{" "}
      </StyledParagraph>
    </div>
  );
};

const CocaineOverig = () => {
  return (
    <>
      <StyledParagraph
        marginBottom="mb-2"
        header="Cocaïne: van medicijn tot moreel vraagstuk"
      >
        Cocaïne heeft een lange en complexe geschiedenis die sterk verschilt van
        het huidige beeld als illegale harddrug. Oorspronkelijk werd coca (de
        plant waar cocaïne uit wordt gewonnen) al duizenden jaren gebruikt door
        inheemse volkeren in Zuid-Amerika vanwege de milde stimulerende werking
        en het vermogen om vermoeidheid en honger te onderdrukken.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Aan het eind van de 19e eeuw werd cocaïne in Europa en de Verenigde
        Staten een populair en legaal middel. Het werd verwerkt in medicijnen,
        tonics en zelfs frisdranken. Bekende figuren zoals Sigmund Freud prezen
        het middel aanvankelijk vanwege de vermeende therapeutische voordelen.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Ook in Nederland speelde cocaïne een opmerkelijke rol. In het begin van
        de 20e eeuw was Nederland een van de grootste producenten van
        farmaceutische cocaïne ter wereld. Bedrijven zoals Nederlandsche
        Cocaïnefabriek produceerden cocaïne op industriële schaal voor medisch
        gebruik, onder andere als lokaal verdovingsmiddel bij operaties. In die
        tijd werd cocaïne gezien als een waardevol en innovatief geneesmiddel,
        niet als maatschappelijk probleem.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        De beeldvorming rondom cocaïne veranderde sterk in de Verenigde Staten
        met de invoering van de Harrison Act in 1914. Officieel was dit een
        belastingwet die het gebruik en de distributie van opiaten en cocaïne
        moest reguleren, maar in de praktijk betekende het het begin van
        criminalisering.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Historisch onderzoek laat zien dat deze verschuiving niet alleen medisch
        gemotiveerd was. In de publieke en politieke discussie werd
        cocaïnegebruik regelmatig gekoppeld aan racistische stereotypes, met
        name gericht op Afro-Amerikaanse gemeenschappen. Dit droeg bij aan angst
        en draagvlak voor strengere wetgeving. Tegelijkertijd ontstond een
        systeem waarin middelengebruik steeds meer een strafrechtelijk probleem
        werd in plaats van een gezondheidsvraagstuk.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        In de decennia daarna groeide dit uit tot wat later bekend werd als de
        “war on drugs”, een beleid dat wereldwijd invloed heeft gehad op hoe
        samenlevingen omgaan met middelengebruik. Critici wijzen erop dat dit
        beleid heeft bijgedragen aan massale opsluiting, ongelijkheid en
        stigmatisering, terwijl de effectiviteit in het verminderen van gebruik
        beperkt is gebleken.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Tegenwoordig wordt cocaïne nog steeds gebruikt in de medische wereld,
        zij het in zeer beperkte en gecontroleerde vorm, bijvoorbeeld als lokaal
        verdovingsmiddel bij specifieke KNO-ingrepen. Dit onderstreept dat de
        stof zelf niet eendimensionaal is, maar dat de context, dosering en
        manier van gebruik bepalend zijn voor de risico’s.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Het verhaal van cocaïne laat zien hoe sterk maatschappelijke, politieke
        en culturele factoren bepalen hoe we naar middelen kijken. Wat ooit een
        geaccepteerd medicijn was, werd een symbool van criminaliteit. Deze
        geschiedenis nodigt uit om kritisch te blijven kijken naar hoe we
        middelengebruik benaderen: als moreel falen, als strafbaar feit, of als
        onderdeel van menselijk gedrag dat om begrip en passende zorg vraagt.
      </StyledParagraph>
    </>
  );
};
