import { type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { SubSectionHeader, SubSectionParagraph } from "./ghb";
import { ListItem } from "~/components/ui/list-item";

export function StyledParagraph({
  header,
  children,
  marginBottom = "mb-6",
}: {
  header?: string;
  marginBottom?: "mb-2" | "mb-6";
  children: ReactNode;
}) {
  return (
    <div className={`${marginBottom}`}>
      {header && <SubSectionHeader>{header}</SubSectionHeader>}
      <p className="mb-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
        {children}
      </p>
    </div>
  );
}

export function AccordionSubSection({
  value,
  title,
  section,
}: {
  value: string;
  title: string;
  section: ReactNode;
}) {
  return (
    <AccordionItem value={value} className="border-red-950 border-opacity-5">
      <AccordionTrigger className="mb-1 flex flex-row-reverse justify-end gap-4 rounded-md border border-b-2 border-black border-opacity-50 p-4 py-2 text-left shadow-lg hover:bg-red-900 hover:bg-opacity-20 hover:no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col bg-red-900 bg-opacity-5 p-6">
        {section}
      </AccordionContent>
    </AccordionItem>
  );
}

export function CocaineSection() {
  return (
    <Accordion type="single" collapsible className="w-full text-black">
      <AccordionSubSection
        value="algemene-kennis"
        title="Algemene kennis"
        section={
          <>
            <StyledParagraph header="Wat is cocaine?" marginBottom="mb-2">
              Cocaïne is een krachtig stimulerend middel dat wordt gewonnen uit
              de bladeren van de coca-plant. Het is meestal verkrijgbaar als wit
              poeder of in kristalvorm (&quot;crack&quot;).
            </StyledParagraph>
            <StyledParagraph>
              Het middel wordt vaak gesnoven, gerookt of geïnjecteerd. De
              werkingsduur varieert van enkele minuten (bij roken) tot een uur
              (bij snuiven).
            </StyledParagraph>
            <StyledParagraph header="Werkingsmechanisme:" marginBottom="mb-2">
              Cocaïne blokkeert de heropname van dopamine, serotonine en
              noradrenaline in de hersenen, wat een intense, korte euforie
              veroorzaakt.
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
                <span className="font-semibold"> Langetermijn:</span> schade aan
                het neusslijmvlies (bij snuiven), cardiovasculaire problemen,
                gewichtsverlies, vermoeidheid, depressie, en verhoogd risico op
                psychoses.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Overdosisrisico: </span>
                hartritmestoornissen, beroerte, hartaanval, of overlijden.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Hoe herken je gebruik?</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Symptomen zoals spraakzaamheid, opgewektheid, pupilvergroting,
                snelle ademhaling, of overmatig zweten.
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
              Problematisch gebruik kan leiden tot conflicten met familie,
              verlies van werk, of financiële problemen.{" "}
            </StyledParagraph>
          </>
        }
      />
      <AccordionSubSection
        value="voorlichting"
        title="Voorlichting"
        section={
          <>
            <SubSectionHeader>Risico&apos;s van gebruik:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Fysieke gevolgen: </span>{" "}
                verhoogd risico op hart- en vaatziekten, beroertes, schade aan
                het neusslijmvlies, en longschade bij roken.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Psychische gevolgen: </span>
                angst, depressie, prikkelbaarheid, paranoia, hallucinaties, of
                psychoses bij langdurig gebruik.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Sociale gevolgen: </span>
                relatieproblemen, financiële schulden, verlies van werk, of
                juridische problemen.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>
              Harm reduction (veilig gebruik):
            </SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              <SubSectionParagraph>
                <span className="font-semibold">Dosering:</span> Gebruik zo
                weinig mogelijk om de impact op het lichaam te minimaliseren.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Manier van gebruik:</span> Deel
                geen snuifmaterialen (zoals rietjes) om het risico op infecties
                te vermijden. Bij roken: gebruik een schone pijp.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Hydratatie en voeding:</span>{" "}
                Zorg voor voldoende vocht en regelmatige maaltijden om de
                fysieke belasting van het middel te verminderen.
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
                Versnelde hartslag, pijn op de borst, hevige agitatie, of
                verwardheid zijn signalen om direct medische hulp te zoeken.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>
              Psychische impact en sociale aspecten:
            </SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                Bespreek hoe cocaïnegebruik vaak wordt gekoppeld aan
                prestatiedrang, sociale druk, of escapisme.
              </ListItem>
              <ListItem>
                Adviseer de patiënt om triggers voor gebruik te identificeren,
                zoals stressvolle situaties of sociale settings waar cocaïne
                vaak wordt gebruikt.
              </ListItem>
            </ul>
            <SubSectionHeader>Voorlichting over herstel: </SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                Leg uit dat herstel vaak gepaard gaat met psychische klachten
                zoals depressie en dat professionele begeleiding essentieel is.
              </ListItem>
              <ListItem>
                Bespreek het belang van een ondersteunend sociaal netwerk en het
                vermijden van risicovolle situaties.
              </ListItem>
            </ul>
            <SubSectionHeader>Verantwoorde communicatie: </SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                Wees open en niet-oordelend in gesprekken over cocaïnegebruik.
              </ListItem>
              <ListItem>
                Leg uit dat stoppen een proces is dat gepaard kan gaan met
                terugval en dat dit onderdeel is van herstel.
              </ListItem>
            </ul>
          </>
        }
      />
      <AccordionSubSection
        value="afbouwtips"
        title="Afbouwtips"
        section={
          <div>
            <StyledParagraph header="Afbouwen of in één keer stoppen">
              Volgens Koob en Volkow (2010) is het afbouwen van cocaïne is
              moeilijk vanwege de snelle beloningscyclus. Het effect van cocaine
              neemt snel af, wat leidt tot sterke verlangens om het effect
              opnieuw te ervaren. Het afbouwen van cocaine zou kunnen zorgen
              voor een continue craving.
            </StyledParagraph>
            <StyledParagraph header="Geestelijke afhankelijkheid van cocaïne">
              Cocaïne is een stimulerend middel dat het dopaminesysteem in de
              hersenen beïnvloedt, wat zorgt voor de euforische effecten bij
              gebruik. Dit vergroot de drang om de stof opnieuw te gebruiken om
              diezelfde euforie te ervaren. Geestelijke afhankelijkheid speelt
              een grote rol in de verslaving en is vaak gekoppeld aan symptomen
              zoals hevige cravings, depressie en angst, vooral wanneer iemand
              probeert te stoppen.
            </StyledParagraph>
            <StyledParagraph header="Lichamelijke afhankelijkheid van cocaïne">
              Cocaïne veroorzaakt geen typische lichamelijke afhankelijkheid
              zoals alcohol of opioïden. Het heeft geen gebruikelijke
              afkickverschijnselen zoals trillen, misselijkheid, zweten of een
              verhoogde hartslag bij stoppen. Toch kunnen er lichamelijke
              ontwenningsverschijnselen optreden, zoals extreme vermoeidheid,
              slaapproblemen (zoals insomnia of hypersomnia), verhoogde eetlust
              en motorische vertraging of agitatie. Deze symptomen worden vaak
              gezien als psychologisch, aangezien ze meestal voortkomen uit de
              geestelijke afhankelijkheid.
            </StyledParagraph>
            <StyledParagraph header="Ontwenningsverschijnselen van cocaïne">
              De ontwenningsverschijnselen van cocaïne kunnen een reeks
              symptomen omvatten, zoals een depressieve stemming, vermoeidheid,
              levendige en onaangename dromen, slaapproblemen (waaronder zowel
              moeite met slapen als te veel slapen), verhoogde eetlust en
              psychomotorische vertraging of agitatie. Deze symptomen kunnen
              optreden na het stoppen met het gebruik van cocaïne en kunnen een
              indicatie zijn van de ernst van de verslaving. Vanwege de subtiele
              en niet-specifieke aard van de symptomen kan het moeilijk zijn om
              ze tijdig te herkennen (Sofuoglu et al., 2005).{" "}
            </StyledParagraph>
          </div>
        }
      />
    </Accordion>
  );
}
