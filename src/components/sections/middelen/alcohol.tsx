import { ListItem } from "~/components/ui/list-item";
import { AccordionSubSection, StyledParagraph } from "./cocaine";
import { TableCellStyled, TableHeaderCellStyled } from "./cannabis";
import { Accordion } from "~/components/ui/accordion";
import { SubSectionHeader } from "./ghb";

export function AlcoholSection() {
  return (
    <Accordion type="single" collapsible className="w-full text-black">
      <AccordionSubSection
        value="voorlichting"
        title="Voorlichting"
        section={
          <>
            <StyledParagraph header="Tip 1: Houd een dagboek bij.">
              Schrijf dagelijks op hoeveel je drinkt, hoe je je voelt en wat je
              triggers zijn; dit geeft inzicht en helpt om patronen te
              herkennen.
            </StyledParagraph>
            <StyledParagraph header="Tip 2: Gebruik een stoppen met drinken app.">
              Deze apps bieden handige tools, zoals voortgang bijhouden en
              motiverende berichten, om je doelen makkelijker te behalen.{" "}
            </StyledParagraph>
            <StyledParagraph header="Tip 3: Maak een lijstje met jouw redenen om te stoppen.">
              Houd deze lijst in zicht als reminder voor moeilijke momenten; je
              motivatie versterken helpt om vol te houden.
            </StyledParagraph>
            <StyledParagraph header="Tip 4: Beloon jezelf.">
              Kies gezonde beloningen die niets met alcohol te maken hebben,
              zoals een uitstapje, een cadeau of iets lekkers.
            </StyledParagraph>
            <StyledParagraph header="Tip 5: Bereid je voor op moeilijke situaties.">
              Denk van tevoren na over wat je kunt doen of zeggen als je in
              verleiding komt, bijvoorbeeld bij sociale gelegenheden.
            </StyledParagraph>
            <StyledParagraph header="Tip 6: Maak afspraken en stel grenzen.">
              Zet duidelijke grenzen voor jezelf, zoals maximaal een bepaald
              aantal eenheden of geen alcohol in huis halen.
            </StyledParagraph>
            <StyledParagraph header="Tip 7: Zoek steun in je omgeving.">
              Vertel aan vrienden of familie wat je probeert te bereiken; steun
              en begrip maken de verandering makkelijker.
            </StyledParagraph>
            <StyledParagraph header="Tip 8: Doorbreek je drinkpatroon">
              Drink je altijd op dezelfde momenten? Deel je dag dan anders in.
              Probeer bijvoorbeeld op je vaste drinkmomenten iets te gaan doen
              waarbij je niet kunt drinken.
            </StyledParagraph>
            <StyledParagraph header="Tip 9: Zoek afleiding">
              Als je trek in alcohol krijgt, bedenk dan dat deze weer voorbij
              gaat. Je hoeft er niet aan toe te geven. Zoek afleiding en probeer
              aan andere dingen te denken. Vaak verdwijnt de trek dan weer.
            </StyledParagraph>
            <StyledParagraph header="Tip 10: Plan alcoholvrije dagen in">
              Drink je dagelijks en wil je minderen? Plan dan alcoholvrije dagen
              in. Bedenk vante vorenwelke dagen dat zijn. Zorg dat je op die
              dagen genoeg te doen hebt.
            </StyledParagraph>
            <StyledParagraph header="Tip 11: Drink niet als je dorst hebt">
              Drink als je dorst hebt geen alcohol. Van alcohol (ook van bier!)
              krijg je juist meer dorst. Drink overdag voldoende water of thee.
            </StyledParagraph>
            <StyledParagraph header="Tip 12: Drink niet op een lege maag">
              Eet altijd iets voordat je alcohol drinkt. Een vollere maag zorgt
              ervoor dat je langzamer dronken wordt en minder last van een kater
              zult krijgen.
            </StyledParagraph>
            <StyledParagraph header="Tip 13: Wissel alcohol en water/fris af">
              Wissel alcohol af met water of fris. Drink na elk glas alcohol een
              glas zonder alcohol. Als je in een restaurant wijn bestelt, bestel
              dan ook altijd een karaf water. Drink één op één: een glas wijn,
              een glas water.
            </StyledParagraph>
            <StyledParagraph header="Tip 14: Drink minder dan één glas per uur">
              Je lichaam heeft ongeveer een uur nodig om één drankje te
              verwerken. Zo drink je minder en geef je je lichaam de tijd de
              alcohol te verwerken, waardoor je veel minder last hebt van een
              kater.
            </StyledParagraph>
            <StyledParagraph header="Tip 15: Zorg ervoor dat je niet teveel alcohol in huis hebt">
              Een voorraad alcohol in huis kan ervoor zorgen dat je sneller gaat
              drinken. Als je besluit om iets te drinken, koop dit dan op
              diezelfde dag en koop niet meer dan je heb bedachtom te drinken.
            </StyledParagraph>
            <StyledParagraph header="Tip 16: Geniet van wat je drinkt">
              Drink je glas niet in een keer leeg, geniet ervan. Neem kleine
              slokjes en zie het als een speciale verwennerij.
            </StyledParagraph>
            <StyledParagraph header="Tip 17: Drink uit een glas">
              Drink uit een glas en niet direct uit een fles. Uit een fles drink
              je sneller met grote slokken tegelijk. Wanneer je uit een glas
              drinkt, kan je de bodem van je glas zien als een soort natuurlijke
              grens. Als je de bodem van de fles ziet heb je al gelijk veel meer
              alcohol gedronken.
            </StyledParagraph>
            <StyledParagraph header="Tip 18: Houd de fles uit het zicht">
              Uit het oog, uit het hart: het vermijden van visuele triggers
              helpt om verleiding te verminderen en maakt het makkelijker om
              niet te drinken.
            </StyledParagraph>{" "}
          </>
        }
      />
      <AccordionSubSection
        value="voorbeeld-afbouwschema"
        title="Voorbeeld afbouwschema"
        section={
          <>
            <div className="mb-6 w-full font-sans text-sm tracking-[1px] text-[#333333]">
              Let op: Stoppen met alcohol kan risicovol zijn. Doe dit daarom
              altijd in overleg met het behandelteam of een verslavingsarts!
            </div>
            <ol className="flex flex-col px-4">
              <ListItem ordered>
                <SubSectionHeader>
                  Start met een intake om de huidige situatie te begrijpen:
                </SubSectionHeader>
                <ul className="mb-6 mt-2 flex flex-col gap-2">
                  <ListItem>
                    Gemiddelde dagelijkse consumptie en soort alcohol.{" "}
                  </ListItem>
                  <ListItem>
                    Gezonheidsstatus: eventuele medische aandoeningen,
                    medicatie, mentale gezondheid.{" "}
                  </ListItem>
                  <ListItem>
                    Motivatie en eerdere pogingen tot stoppen of verminderen.{" "}
                  </ListItem>
                </ul>
              </ListItem>

              <ListItem ordered>
                <SubSectionHeader>Medische monitoring</SubSectionHeader>
                <ul className="mb-6 mt-2 flex flex-col gap-2">
                  <ListItem>
                    Overweeg een medische check-up en consult met een arts,
                    zeker bij hogere consumpties of bij mensen met een complexe
                    medische geschiedenis.{" "}
                  </ListItem>
                  <ListItem>
                    Bij vermoeden van ernstige ontwenningsverschijnselen kan een
                    gecontroleerde detox noodzakelijk zijn.
                  </ListItem>
                </ul>
              </ListItem>
              <ListItem ordered>
                <StyledParagraph header="Begeleiding en ondersteuning">
                  Plan wekelijkse gesprekken met een behandelaar of therapeut om
                  te ondersteunen, doelen bij te stellen, en eventuele moeilijke
                  momenten door te spreken.
                </StyledParagraph>{" "}
              </ListItem>
            </ol>
            <div className="mb-4 overflow-x-scroll">
              <AlcoholAfbouwTable />
            </div>
          </>
        }
      />
      <AccordionSubSection
        value="begeleiding-en-ondersteuning"
        title="Aanvullende begeleiding en ondersteuning"
        section={
          <>
            <ol className="flex flex-col px-4">
              <ListItem ordered>
                <SubSectionHeader>
                  Psychologische ondersteuning
                </SubSectionHeader>
                <ul className="mb-6 mt-2 flex flex-col gap-2">
                  <ListItem>
                    Bespreek mogelijke triggers en manieren om craving aan te
                    pakken.
                  </ListItem>
                  <ListItem>
                    Werk met technieken zoals mindfulness of
                    ademhalingsoefeningen voor stressvermindering.
                  </ListItem>
                </ul>
              </ListItem>
              <ListItem ordered>
                <SubSectionHeader>Gezonde routines</SubSectionHeader>
                <ul className="mb-6 mt-2 flex flex-col gap-2">
                  <ListItem>
                    Vervang drinkmomenten door activiteiten zoals sport,
                    ontspanningsoefeningen of hobby&apos;s.
                  </ListItem>
                </ul>
              </ListItem>
              <ListItem ordered>
                <SubSectionHeader>Medicatie (indien nodig)</SubSectionHeader>
                <ul className="mb-6 mt-2 flex flex-col gap-2">
                  <ListItem>
                    Voor patiënten die moeite hebben om zonder hulp af te
                    bouwen, kan een arts overwegen om medicatie (zoals
                    acamprosaat of naltrexon) voor te schrijven ter
                    ondersteuning.{" "}
                  </ListItem>
                </ul>
              </ListItem>
            </ol>
            <h3 className="mb-6 mt-12 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
              Veiligheid en haalbaarheid
            </h3>
            <ul className="flex flex-col px-4">
              <ListItem>
                <StyledParagraph>
                  <span className="font-semibold">Flexibiliteit: </span> Pas het
                  schema aan op de voortgang en eventuele moeilijkheden van de
                  patiënt. Soms is vertraging beter dan forceren.
                </StyledParagraph>
              </ListItem>
              <ListItem>
                <StyledParagraph>
                  <span className="font-semibold">
                    Medische aandacht bij symptomen:
                  </span>{" "}
                  Bij ernstige ontwenningsverschijnselen zoals trillen,
                  hartkloppingen of angstklachten, direct medisch contact
                  opnemen.
                </StyledParagraph>
              </ListItem>
            </ul>
          </>
        }
      />
    </Accordion>
  );
}

function AlcoholAfbouwTable() {
  return (
    <table className="relative my-8 h-auto w-full border-collapse">
      <thead>
        <tr>
          <TableHeaderCellStyled className="py-2 align-top">
            Week
          </TableHeaderCellStyled>
          <TableHeaderCellStyled className="w-80 py-2 align-top">
            Alcoholconsumptie (in eenheden per dag)
          </TableHeaderCellStyled>
          <TableHeaderCellStyled className="py-2 align-top">
            Doel en opmerking
          </TableHeaderCellStyled>
        </tr>
      </thead>
      <tbody className="font-normal">
        <tr>
          <TableCellStyled className="py-2 align-top">Week 1</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Huidige dagelijkse consumptie verminderen met 10-20%
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Start langzaam af te bouwen. Houd dagelijks bij hoeveel eenheden
            worden gedronken en werk aan het bewustzijn.
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Week 2</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Verminderen naar maximaal 75% van de oorspronkelijke dagelijkse
            consumptie
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Zet de afbouw verder door en overweeg om een dag per week geen
            alcohol te drinken. Noteer ontwenningsverschijnselen en ga hierop in
            bij de behandelaar.
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Week 3</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Verder afbouwen naar maximaal 50% van de oorspronkelijke consumptie{" "}
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Werk aan meer alcoholvrije dagen (bijv. 2 per week) en bouw
            eventuele gewoontes rondom drinken af (zoals bij het avondeten).
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Week 4</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Verminderen naar 25% van oorspronkelijke dagelijkse consumptie of
            minder{" "}
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Het doel is 3-4 dagen per week alcoholvrij zijn, met maximaal 2-3
            eenheden per keer op drinkdagen. Verminder sociale situaties waarbij
            alcohol normaal is.
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Week 5-6</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Volledig stoppen of terug naar maximaal 1-2 eenheden per gelegenheid
            (1-2 keer per week){" "}
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Volledig stoppen of alleen in gecontroleerde en kleine hoeveelheden
            drinken. Focus op het ontwikkelen van nieuwe gezonde routines.
          </TableCellStyled>
        </tr>
      </tbody>
    </table>
  );
}
