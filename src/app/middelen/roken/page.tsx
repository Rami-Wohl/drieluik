import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { DrugPropertiesTable } from "../drug-properties-table";
import { ResponsiveImage } from "~/components/ui/responsive-image";

export default function Page() {
  return (
    <div className="mt-32 flex w-full grow flex-col items-center gap-8 px-4 md:px-20">
      <Pageheader text="Roken" />
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
          <RokenAlgemeen />
        </TabsContent>
        <TabsContent value="afbouwtips">
          <RokenAfbouwtips />
        </TabsContent>
        <TabsContent value="overig">
          <RokenOverig />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const RokenAlgemeen = () => {
  return (
    <>
      <ResponsiveImage src="/images/roken.jpg" alt="Plaatje van roken" />
      <DrugPropertiesTable
        werkzameStof="Nicotine C₁₀H₁₄N₂"
        gebruiksvorm="Roken, vapen"
        uiterlijkeKenmerken="Sigaretten, shag, vapes"
        verslavingspotentie="2,8"
        schadeTaxatie="2,2"
      />
      <StyledParagraph marginBottom="mb-2">
        Nicotineverslaving is één van de meest wijdverspreide en genormaliseerde
        verslavingen, en tegelijk één van de meest onderschatte. Dat geldt niet
        alleen maatschappelijk, maar ook binnen de zorg. Nicotinegebruik wordt
        vaak gezien als “bijzaak”, coping of leefstijlkeuze, terwijl het in
        werkelijkheid gaat om een <b>volwaardige afhankelijkheid</b> met een
        eigen dynamiek, hardnekkigheid en klinische consequenties.
      </StyledParagraph>
      <StyledParagraph>
        Nicotine is de verslavende stof, niet de toedieningsvorm. Sigaretten,
        shag, vapes, snus, snuiftabak en nicotinezakjes verschillen in
        schadeprofiel, maar{" "}
        <b>niet fundamenteel in verslavingsmechanisme.</b>{" "}
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Wat maakt nicotine zo verslavend?"
      >
        Nicotine grijpt direct in op het <b>dopaminerge beloningssysteem</b>,
        met een snelle piek en snelle daling. Dat leidt tot:
      </StyledParagraph>

      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>sterke conditionering</ListItem>
        <ListItem>frequente herhaling</ListItem>
        <ListItem>
          korte cycli van spanning → verlichting → nieuwe spanning
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Daarnaast activeert nicotine ook systemen die te maken hebben met:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>aandacht en focus</ListItem>
        <ListItem>stressregulatie</ListItem>
        <ListItem>affectdemping</ListItem>
      </ul>
      <StyledParagraph>
        Belangrijk klinisch punt:
        <br />
        Veel “positieve effecten” van nicotinegebruik zijn in feite{" "}
        <b>opheffing van onthouding</b>. De rust, concentratie of ontspanning is
        vaak geen netto winst, maar herstel naar baseline.
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Nicotine is primair een gedragsverslaving met farmacologische ondersteuning"
      >
        In tegenstelling tot veel andere middelen:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>wordt nicotine zeer frequent gebruikt</ListItem>
        <ListItem>is de dosis klein maar constant</ListItem>
        <ListItem>
          is gebruik sterk verweven met routines, overgangen en micro-momenten
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Trimbos benadrukt terecht dat nicotineverslaving niet alleen gaat over
        afhankelijkheid van een stof, maar over{" "}
        <b>ingesleten gedragspatronen</b>:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>bij stress</ListItem>
        <ListItem>bij verveling</ListItem>
        <ListItem>bij sociale interactie</ListItem>
        <ListItem>bij concentratie</ListItem>
        <ListItem>bij overgangen (opstaan, pauze, afronden) </ListItem>
      </ul>
      <StyledParagraph>
        Dit maakt nicotine bijzonder hardnekkig, zelfs wanneer de fysieke
        afhankelijkheid relatief snel afneemt.
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Roken, vapen, snus en andere vormen: klinisch gezien"
      >
        Vanuit behandelperspectief is het cruciaal om{" "}
        <b>vorm en functie te scheiden</b>.
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>
          <b>Roken:</b> hoogste gezondheidsschade, sterke conditionering, snelle
          piek
        </ListItem>
        <ListItem>
          <b>Vapen:</b> minder schadelijke verbranding, maar vaak hogere en
          frequentere nicotine-inname
        </ListItem>
        <ListItem>
          <b>Snus / nicotinezakjes:</b> minder longschade, maar langdurige
          nicotineblootstelling{" "}
        </ListItem>
        <ListItem>
          <b>Snuiftabak:</b> vergelijkbaar patroon, vaak onderschat
        </ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Belangrijk uitgangspunt (conform Trimbos):
        <br />
        Minder schadelijk is niet hetzelfde als niet verslavend.
      </StyledParagraph>
      <StyledParagraph>
        Veel cliënten verschuiven van roken naar vapen of snus en ervaren dit
        als “oplossing”, terwijl{" "}
        <b>de afhankelijkheid intact of zelfs versterkt</b> blijft.
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Wanneer spreek je van nicotineverslaving?"
      >
        Niet bij elke gebruiker is sprake van verslaving. Het onderscheid zit,
        ook hier, niet in moraal maar in
        <b>controle en functie</b>.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Kenmerkend voor verslaving:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>moeite met stoppen of minderen ondanks intentie</ListItem>
        <ListItem>gebruik om spanning, leegte of onrust te reguleren</ListItem>
        <ListItem>
          automatische momenten van gebruik zonder bewuste keuze
        </ListItem>
        <ListItem>
          onthoudingsklachten (prikkelbaarheid, onrust, concentratieverlies)
        </ListItem>
        <ListItem>sterke verankering in dagelijkse structuur </ListItem>
      </ul>
      <StyledParagraph>
        Een belangrijk signaal is wanneer niet-gebruik{" "}
        <b>actieve ontregeling</b> veroorzaakt.
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Hoe herken je nicotineverslaving bij cliënten?"
      >
        <b>Psychisch en gedragsmatig</b>.
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>sterke preoccupatie met volgende gebruiksmoment</ListItem>
        <ListItem>irritatie of rusteloosheid bij uitstel</ListItem>
        <ListItem>rationalisaties (“dit is mijn enige ding”)</ListItem>
        <ListItem>onderschatting van impact (“valt wel mee”)</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        <b>Lichamelijk</b>.
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>duidelijke onthoudingsverschijnselen</ListItem>
        <ListItem>slaap- en concentratieproblemen bij stoppen</ListItem>
        <ListItem>stressrespons die toeneemt zonder nicotine</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        <b>In het behandelproces</b>
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>nicotinegebruik wordt zelden spontaan ingebracht</ListItem>
        <ListItem>stoppen wordt uitgesteld “tot later”</ListItem>
        <ListItem>
          nicotine wordt gebruikt om andere veranderingen vol te houden
        </ListItem>
      </ul>
      <StyledParagraph>
        Voor behandelaren is het relevant te beseffen dat nicotine vaak
        <b>functioneert als laatste regulator</b> wanneer andere middelen of
        gedragingen wegvallen.
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="De rol van nicotine in comorbiditeit"
      >
        Nicotinegebruik komt bovengemiddeld voor bij:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>psychiatrische stoornissen</ListItem>
        <ListItem>trauma- en stressproblematiek</ListItem>
        <ListItem>ADHD</ListItem>
        <ListItem>verslavingsproblematiek in bredere zin</ListItem>
      </ul>
      <StyledParagraph marginBottom="mb-2">
        Belangrijke nuance, ook vanuit Trimbos:
        <br />
        Nicotine kan klachten <b>tijdelijk maskeren</b>, maar vergroot op de
        langere termijn:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>stressgevoeligheid </ListItem>
        <ListItem>basale onrust </ListItem>
        <ListItem>afhankelijkheid van externe regulatie </ListItem>
      </ul>
      <StyledParagraph>
        Nicotinevrij functioneren vraagt vaak meer draagkracht dan vooraf wordt
        ingeschat.
      </StyledParagraph>
      <StyledParagraph
        marginBottom="mb-2"
        header="Waarom nicotine vaak wordt geminimaliseerd"
      >
        Enkele structurele redenen:
      </StyledParagraph>
      <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
        <ListItem>maatschappelijke normalisering </ListItem>
        <ListItem>lage acute intoxicatie </ListItem>
        <ListItem>legaal en beschikbaar </ListItem>
        <ListItem>vaak gestart in adolescentie </ListItem>
        <ListItem>functioneert “op de achtergrond” </ListItem>
      </ul>
      <StyledParagraph>
        Dit maakt nicotineverslaving minder zichtbaar, maar niet minder
        relevant. Voor sommige cliënten is nicotineverslaving{" "}
        <b>de meest persistente verslaving</b>, juist omdat deze zo diep in het
        dagelijks leven is ingebed.
      </StyledParagraph>
    </>
  );
};
const RokenAfbouwtips = () => {
  return (
    <>
      {" "}
      <StyledParagraph
        marginBottom="mb-2"
        header="Klinische aandachtspunten voor behandelaren"
      >
        Nicotine-afbouw lijkt op papier eenvoudig, maar is in de praktijk vaak
        één van de <b>meest hardnekkige trajecten</b>. Dat komt niet doordat
        nicotine “lichter” is dan andere middelen, maar omdat het diep verweven
        is met <b>dagstructuur, emotieregulatie en identiteit</b>. Succesvolle
        afbouw vraagt daarom meer dan wilskracht of een stopdatum.
      </StyledParagraph>
      <ol className="flex flex-col px-4">
        <ListItem ordered>
          <SubSectionHeader>
            Afbouw is primair gedragsmatig, niet alleen farmacologisch
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            De fysieke afhankelijkheid van nicotine neemt relatief snel af,
            maar:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>conditionering</ListItem>
            <ListItem>automatische routines</ListItem>
            <ListItem>contextafhankelijk gebruik</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            blijven vaak maandenlang actief.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Afbouw die zich uitsluitend richt op:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>pleisters</ListItem>
            <ListItem>kauwgom</ListItem>
            <ListItem>dosering</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            zonder aandacht voor <b>gebruiksmomenten en functie</b>, leidt vaak
            tot:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>hervatten van gebruik</ListItem>
            <ListItem>verschuiving naar andere nicotinevormen</ListItem>
            <ListItem>langdurige onrust zonder duidelijke verklaring</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            <b>Kernvraag voor de behandelaar:</b>
          </StyledParagraph>
          <StyledParagraph>
            Wat reguleert nicotine in het dagelijks leven van deze cliënt?
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Timing en draagkracht zijn bepalend
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Stoppen met nicotine is geen neutrale ingreep. Het verhoogt
            tijdelijk:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>prikkelbaarheid</ListItem>
            <ListItem>stressgevoeligheid</ListItem>
            <ListItem>affectlabiliteit</ListItem>
            <ListItem>concentratieproblemen</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Afbouw is extra kwetsbaar bij:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>instabiele psychiatrische fase</ListItem>
            <ListItem>recente afbouw van andere middelen</ListItem>
            <ListItem>hoge externe stress</ListItem>
            <ListItem>onvoldoende slaap of structuur</ListItem>
          </ul>
          <StyledParagraph>
            Het combineren van meerdere afbouwen tegelijk vergroot de kans op{" "}
            <b>algemene ontregeling</b>, ook als elk traject op zichzelf
            “haalbaar” lijkt.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Verwachtingsmanagement voorkomt uitval
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Veel cliënten verwachten:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>snelle rust</ListItem>
            <ListItem>verbetering van stemming</ListItem>
            <ListItem>“opgelucht zijn” na stoppen</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            De realiteit is vaak omgekeerd. Belangrijk is om vooraf te
            normaliseren dat:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>onrust geen teken van falen is</ListItem>
            <ListItem>craving conditionering weerspiegelt</ListItem>
            <ListItem>leegte tijdelijk kan toenemen</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Wat helpt is expliciet maken:
          </StyledParagraph>
          <StyledParagraph>
            Nicotine wegnemen betekent niet meteen regulatie terugkrijgen, maar
            eerst leren verdragen zonder hulpmiddel.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Let op verschuivingen in middelengebruik
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Na stoppen met nicotine zie je regelmatig:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>toename van cafeïnegebruik </ListItem>
            <ListItem>meer eten of zoetigheid </ListItem>
            <ListItem>toename van alcohol- of cannabisgebruik </ListItem>
            <ListItem>
              compensatoir gedrag (scrollen, snacken, piekeren){" "}
            </ListItem>
          </ul>
          <StyledParagraph>
            Dit zijn geen “slechte keuzes”, maar pogingen tot{" "}
            <b>herregulatie</b>. Ze verdienen observatie en bespreekbaarheid,
            niet correctie op wilskrachtniveau.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Nicotinevervanging: hulpmiddel, geen oplossing
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Nicotinevervangende middelen kunnen:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>ontwenningsklachten dempen</ListItem>
            <ListItem>ruimte creëren voor gedragsverandering</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">Maar:</StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>ze doorbreken geen routines</ListItem>
            <ListItem>ze lossen conditionering niet op</ListItem>
            <ListItem>
              ze kunnen afhankelijkheid verlengen als gedrag ongemoeid blijft
            </ListItem>
          </ul>
          <StyledParagraph>
            Voor behandelaren is het belangrijk om nicotinevervanging te
            positioneren als <b>tijdelijk steunend</b>, niet als einddoel.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Nicotine en psychofarmaca: klinisch relevante interacties
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            <b>Algemeen</b>
          </StyledParagraph>
          <StyledParagraph>
            Stoppen met roken kan de{" "}
            <b>bloedspiegel van bepaalde medicatie beïnvloeden</b>, doordat
            nicotine (en met name rook) enzymactiviteit in de lever verandert.
            Dit effect treedt op bij stoppen met <b>roken</b>, niet bij vapen of
            andere tabaksvervangers. Dat komt doordat dit fenomeen wordt
            veroorzaakt door{" "}
            <b>polycyclische aromatische koolwaterstoffen in tabaksrook</b>,
            niet door nicotine zelf.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            <b>Lithium (extra belangrijk)</b>
          </StyledParagraph>
          <StyledParagraph>
            Bij cliënten die lithium gebruiken is extra waakzaamheid nodig:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Stoppen met roken kan leiden tot stijging van lithiumspiegels
            </ListItem>
            <ListItem>
              Dit komt door veranderingen in:
              <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
                <ListItem>nierfunctie</ListItem>
                <ListItem>vochtbalans</ListItem>
                <ListItem>cafeïnegebruik (dat vaak samen verandert)</ListItem>
              </ul>
            </ListItem>
          </ul>
          <StyledParagraph>Klinische aandachtspunten:</StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              monitor lithiumspiegels bij stoppen of sterk minderen
            </ListItem>
            <ListItem>
              wees alert op tekenen van intoxicatie (tremor, misselijkheid,
              verwardheid)
            </ListItem>
            <ListItem>stem af met voorschrijvend arts</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">Belangrijk:</StyledParagraph>
          <StyledParagraph>
            Ontregeling na stoppen met nicotine kan ten onrechte worden
            toegeschreven aan “psychische terugval”, terwijl het farmacologisch
            verklaarbaar is.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            <b>Overige medicatie</b>
          </StyledParagraph>
          <StyledParagraph>
            Vergelijkbare aandacht is nodig bij o.a.:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>antipsychotica (zoals clozapine, olanzapine)</ListItem>
            <ListItem>sommige antidepressiva</ListItem>
            <ListItem>benzodiazepinen (indirect via stress en slaap)</ListItem>
          </ul>
          <StyledParagraph>
            Afbouw van tabak is daarmee <b>geen puur leefstijlbesluit</b>, maar
            een medisch relevante verandering.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>De rol van de behandelrelatie</SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Voor veel cliënten is nicotine:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>het laatste overgebleven middel </ListItem>
            <ListItem>een privé-regulator </ListItem>
            <ListItem>iets dat “nog mocht” </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Te veel druk op stoppen kan:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>weerstand oproepen </ListItem>
            <ListItem>vertrouwen ondermijnen </ListItem>
            <ListItem>openheid verminderen </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Werkzame houding:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>nieuwsgierig in plaats van normerend </ListItem>
            <ListItem>ruimte voor ambivalentie </ListItem>
            <ListItem>bereidheid tot temporiseren </ListItem>
            <ListItem>stoppen als proces, niet als eis </ListItem>
          </ul>
        </ListItem>
      </ol>
    </>
  );
};
const RokenOverig = () => {
  return (
    <>
      {" "}
      <ol className="flex flex-col px-4">
        <ListItem ordered>
          <SubSectionHeader>
            Vapen versus roken: klinisch onderscheid zonder ideologie
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Vanuit gezondheidsperspectief is het onderscheid helder:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              <b>Roken</b> veroorzaakt de meeste schade door verbranding
            </ListItem>
            <ListItem>
              <b>Vapen</b> vermijdt verbranding en is daarmee{" "}
              <i>substantieel minder schadelijk</i>
            </ListItem>
            <ListItem>
              <b>Geen nicotinegebruik</b> blijft de gezondste optie
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Trimbos is hierin expliciet:{" "}
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Minder schadelijk betekent niet onschadelijk, en niet
            niet-verslavend.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Voor behandelaren is het belangrijk om{" "}
            <b>twee fouten te vermijden</b>:
          </StyledParagraph>

          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>vapen bagatelliseren als “onschuldig”</ListItem>
            <ListItem>
              vapen moraliseren alsof het gelijkstaat aan roken
            </ListItem>
          </ul>
          <StyledParagraph>
            Beide ondermijnen een realistisch gesprek.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Vapen en verslaving: wat je in de praktijk ziet
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Hoewel vapen lichamelijk minder schade geeft dan roken, zie je
            klinisch vaak:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              <b>hogere nicotine-inname</b> dan bij sigaretten
            </ListItem>
            <ListItem>
              <b>frequenter gebruik</b> (door gemak en afwezigheid van
              duidelijke eindpunten)
            </ListItem>
            <ListItem>
              sterkere <b>gedragsmatige conditionering</b>
            </ListItem>
            <ListItem>
              minder sociale remming (binnen, tussendoor, automatisch)
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Voor sommige cliënten betekent de overstap van roken naar vapen:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>gezondheidswinst</ListItem>
            <ListItem>
              maar tegelijkertijd <b>verdieping van afhankelijkheid</b>
            </ListItem>
          </ul>
          <StyledParagraph>
            Dit vraagt om nuance: winst op het ene vlak kan kwetsbaarheid op een
            ander vlak vergroten.{" "}
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Harm reduction: wat bedoelen we hier écht mee?
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Harm reduction is geen compromis uit zwakte, maar een{" "}
            <b>doelbewuste gezondheidsstrategie</b>.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Bij nicotine betekent dit:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              gezondheidsschade beperken waar abstinentie (nog) niet haalbaar is
            </ListItem>
            <ListItem>
              afhankelijkheid erkennen zonder deze te normaliseren
            </ListItem>
            <ListItem>ruimte creëren voor latere verandering</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">Voorbeelden:</StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>roker → vaper → nicotinevrij (gefaseerd)</ListItem>
            <ListItem>
              stoppen met roken zonder directe druk op nicotinevrijheid
            </ListItem>
            <ListItem>
              tijdelijk accepteren van nicotinegebruik om andere
              herstelprocessen te beschermen{" "}
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Cruciaal uitgangspunt:
          </StyledParagraph>
          <StyledParagraph>
            Harm reduction is een <i>tussenstap</i>, geen eindpunt en geen
            ontkenning van verslaving.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Beleid: spanning tussen volksgezondheid en praktijk
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Het Nederlandse beleid richt zich terecht op:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>bescherming van jeugd</ListItem>
            <ListItem>voorkomen van nieuwe nicotineverslaving</ListItem>
            <ListItem>beperken van marketing en aantrekkelijkheid</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">Daarbij horen: </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>smaakverboden</ListItem>
            <ListItem>reclamebeperkingen</ListItem>
            <ListItem>ontmoediging van gebruik</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Voor behandelaren ontstaat hier soms spanning:{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              wat beleidsmatig ontmoedigd wordt, kan klinisch een{" "}
              <b>schadebeperkende</b> stap zijn
            </ListItem>
            <ListItem>
              cliënten ervaren verwarring: “het mag niet, maar het helpt wel”
            </ListItem>
          </ul>
          <StyledParagraph>
            Belangrijk is om deze spanning <b>expliciet te benoemen</b> en niet
            af te schuiven op de cliënt.
          </StyledParagraph>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Jeugd en instroom: duidelijke lijn, andere logica
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Trimbos is hier helder en consistent:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              <b>geen harm reduction bij nicotine-instroom</b>
            </ListItem>
            <ListItem>vapen is geen hulpmiddel voor niet-rokers</ListItem>
            <ListItem>voorkomen van afhankelijkheid staat centraal</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Voor volwassenen met een actieve verslaving geldt een andere logica
            dan voor jongeren zonder afhankelijkheid. Het verwarren van die twee
            leidt tot:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>ideologische discussies</ListItem>
            <ListItem>onwerkbare behandelrelaties</ListItem>
            <ListItem>verlies van vertrouwen</ListItem>
          </ul>
        </ListItem>

        <ListItem ordered>
          <SubSectionHeader>
            Wat betekent dit voor behandelaren?
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Een werkbare klinische houding:
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>wees helder over relatieve risico’s</ListItem>
            <ListItem>
              vermijd absolute uitspraken (“net zo slecht”, “maakt niks uit”)
            </ListItem>
            <ListItem>
              onderscheid gezondheidsschade van verslavingsdynamiek
            </ListItem>
            <ListItem>
              stem beleid en behandel realiteit zorgvuldig op elkaar af
            </ListItem>
          </ul>
        </ListItem>
      </ol>
    </>
  );
};
