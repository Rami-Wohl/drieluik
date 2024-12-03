import { AccordionSubSection, StyledParagraph } from "./cocaine";
import { ListItem } from "~/components/ui/list-item";
import { Accordion } from "~/components/ui/accordion";
import { SubSectionHeader, SubSectionParagraph } from "./ghb";

export function SpeedSection() {
  return (
    <Accordion type="single" collapsible className="w-full text-black">
      <AccordionSubSection
        value="algemene-kennis"
        title="Algemene kennis"
        section={
          <>
            <StyledParagraph header="Wat is speed?">
              Speed, ook bekend als amfetamine, is een synthetische stimulant
              die het centrale zenuwstelsel beïnvloedt. Het wordt vaak gebruikt
              om wakker te blijven, energie te krijgen of eetlust te
              onderdrukken. Het komt meestal voor in poedervorm, capsules, of
              als pasta.
            </StyledParagraph>
            <StyledParagraph header="Werkingsmechanisme:">
              Amfetamine verhoogt de afgifte van dopamine, noradrenaline en
              serotonine in de hersenen, wat resulteert in verhoogde alertheid,
              euforie, en energie. De werking begint binnen 20-60 minuten na
              inname en kan 4-8 uur aanhouden.
            </StyledParagraph>
            <SubSectionHeader>Fysieke en mentale effecten:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Korte termijn:</span> verhoogde
                hartslag, droge mond, verminderde eetlust, gespannen kaken,
                rusteloosheid, verhoogde focus.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">
                  {" "}
                  Langetermijnrisico&apos;s:
                </span>{" "}
                slapeloosheid, gewichtsverlies, angst, agressie, psychoses,
                cardiovasculaire schade.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Overdosisrisico: </span>
                verhoogde bloeddruk, hartaanval, beroerte, en in extreme
                gevallen coma of overlijden.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Hoe herken je gebruik?</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Symptomen zoals slapeloosheid, overmatig praten, nervositeit,
                gewichtsverlies, of agressie kunnen wijzen op speedgebruik.
              </ListItem>
              <ListItem>
                Fysieke tekenen zoals vergrote pupillen, hyperactiviteit en een
                sterk geurend zweet (vaak chemisch of scherp).
              </ListItem>
            </ul>
            <StyledParagraph header="Sociaal gedrag:">
              Veel gebruikers nemen speed tijdens feesten of om lange werk- of
              studeeruren vol te houden. Langdurig gebruik kan leiden tot
              sociale isolatie en problemen met relaties, werk, of financiën.
            </StyledParagraph>
          </>
        }
      />
      <AccordionSubSection
        value="voorlichting"
        title="Voorlichting"
        section={
          <>
            <SubSectionHeader>Risico’s van gebruik:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Fysieke schade: </span>hart- en
                vaatziekten, tandproblemen, uitdroging.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Psychische gevolgen: </span>
                depressie, angst, wanen en paranoia.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Sociale gevolgen: </span>
                afhankelijkheid, relatieproblemen, en werkverlies.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>
              Harm reduction (veilig gebruik):
            </SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Hydratatie:</span> Zorg voor
                voldoende water, maar niet overdrijven om watervergiftiging te
                voorkomen.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Dosering:</span> Gebruik kleine
                hoeveelheden en neem pauzes tussen gebruik.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Rust:</span> Geef je lichaam
                voldoende hersteltijd na gebruik.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Combinatiegebruik:</span>{" "}
                Vermijd het combineren van speed met andere middelen, vooral
                alcohol of andere stimulanten.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Omgeving: </span> Gebruik in
                een veilige omgeving met vertrouwde mensen.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>
              Signalen van problematisch gebruik bespreken met de patiënt:
            </SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>Frequent gebruik of moeite om te stoppen.</ListItem>
              <ListItem>
                Gebruik ondanks negatieve gevolgen (gezondheid, werk, relaties).
              </ListItem>
              <ListItem>
                Toename van doseringen of gebruik om normaal te functioneren.
              </ListItem>
            </ul>
            <StyledParagraph header="Verantwoorde communicatie:">
              Benadruk dat er geen veilige manier is om speed te gebruiken, maar
              geef praktische tips om schade te beperken voor degenen die niet
              willen stoppen.
            </StyledParagraph>
          </>
        }
      />
      <AccordionSubSection
        value="afbouwtips"
        title="Afbouwtips"
        section={
          <>
            <SubSectionHeader>Is afbouwen altijd nodig?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Direct stoppen:</span> Speed is
                fysiek niet verslavend zoals opiaten, maar wel psychisch. Veel
                gebruikers kunnen direct stoppen zonder fysieke
                afkickverschijnselen, maar dit kan leiden tot ernstige
                vermoeidheid en depressieve gevoelens.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Afbouwen:</span> Bij langdurig
                gebruik kan afbouwen helpen om psychologische en sociale
                gevolgen te minimaliseren.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Hoe af te bouwen:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Stap 1:</span> Verminder de
                frequentie van gebruik (bijvoorbeeld wekelijks naar
                maandelijks).
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Stap 2:</span>
                Verlaag de dosering geleidelijk.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Stap 3:</span> Plan
                gebruiksmomenten en houd je eraan, vermijd impulsen.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Ondersteuning bij afbouw:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">
                  Psychologische begeleiding:
                </span>{" "}
                cognitieve gedragstherapie, motiverende gespreksvoering.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Praktische ondersteuning:</span>{" "}
                structuur in dagritme, gezonde voeding, en slaapherstel.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Medicatie:</span> Hoewel er geen
                specifieke medicatie is voor speedverslaving, kunnen artsen
                antidepressiva of slaapmedicatie voorschrijven om symptomen te
                verlichten.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>
              Wanneer direct stoppen aan te raden is:{" "}
            </SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                Bij gevaarlijk gebruik (bijvoorbeeld in combinatie met een
                zwakke gezondheid of cardiovasculaire problemen).
              </ListItem>
              <ListItem>
                Als de gebruiker ernstige psychische klachten ontwikkelt (zoals
                psychoses).
              </ListItem>
            </ul>
          </>
        }
      />
    </Accordion>
  );
}
