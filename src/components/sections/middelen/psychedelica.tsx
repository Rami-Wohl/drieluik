import { AccordionSubSection } from "./cocaine";
import { ListItem } from "~/components/ui/list-item";
import { Accordion } from "~/components/ui/accordion";
import { SubSectionHeader, SubSectionParagraph } from "./ghb";

export function PsychedelicaSection() {
  return (
    <Accordion type="single" collapsible className="w-full text-black">
      <AccordionSubSection
        value="lsd"
        title="LSD (Lyserginezuurdiethylamide)"
        section={
          <>
            <SubSectionHeader>Wat is LSD?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                LSD is een krachtig bewustzijnsveranderend middel
                (hallucinogeen) dat meestal in vloeibare vorm of als papiertrip
                wordt ingenomen.
              </SubSectionParagraph>
              <SubSectionParagraph>
                De effecten beginnen na 30-60 minuten, pieken na 2-4 uur en
                kunnen tot 12 uur aanhouden.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Risico&apos;s:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Psychische effecten:</span>{" "}
                Angstaanvallen, hallucinaties, en risico op een &quot;bad
                trip.&quot;
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Psychosegevoeligheid:</span> Kan
                latente psychische aandoeningen, zoals schizofrenie, triggeren.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Fysiek:</span> Minimale
                toxiciteit, maar indirecte risico&apos;s door gevaarlijk gedrag
                onder invloed.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Harm reduction tips:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Gebruik in een rustige, veilige omgeving met een tripsitter.
              </ListItem>
              <ListItem>
                Vermijd LSD bij psychische kwetsbaarheid of in combinatie met
                andere middelen.
              </ListItem>
            </ul>
            <SubSectionHeader>Advies voor behandelaren:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Bespreek hoe setting en mindset invloed hebben op de ervaring.{" "}
              </ListItem>
              <ListItem>
                <span className="font-semibold">
                  Bij problematisch gebruik:
                </span>{" "}
                focus op achterliggende redenen (bijv. escapisme of zingeving).
              </ListItem>
            </ul>
          </>
        }
      />
      <AccordionSubSection
        value="paddos"
        title="Paddo's en truffels"
        section={
          <>
            <SubSectionHeader>
              Wat zijn paddo&apos;s en truffels?
            </SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                Natuurlijke psychedelica die psilocine bevatten, vaak gegeten of
                als thee gedronken. Truffels zijn legaal in Nederland;
                paddo&apos;s zijn verboden.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Risico&apos;s:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Psychische effecten:</span>{" "}
                Angstaanvallen, derealisatie, of flashbacks (HPPD).
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Fysiek:</span> Nauwelijks direct
                schadelijk, maar risico op indirecte schade door onveilige
                acties.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Harm reduction tips:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Gebruik kleine doseringen in een gecontroleerde omgeving.{" "}
              </ListItem>
              <ListItem>
                Vermijd gebruik bij angststoornissen, depressie, of
                psychosegevoeligheid.
              </ListItem>
            </ul>
            <SubSectionHeader>Advies voor behandelaren:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Bespreek het gebruik openlijk, vooral als patiënten het als
                zelfmedicatie gebruiken.{" "}
              </ListItem>
              <ListItem>Adviseer over veilige setting en dosering.</ListItem>
            </ul>
          </>
        }
      />
      <AccordionSubSection
        value="ketamine"
        title="Ketamine"
        section={
          <>
            <SubSectionHeader>Wat is ketamine?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                Ketamine is een dissociatief anestheticum dat recreatief wordt
                gebruikt vanwege zijn hallucinerende en verdovende effecten.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Risico&apos;s:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Psychisch:</span>{" "}
                Verslavingsrisico, dissociatie, geheugenproblemen.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Fysiek:</span> Blaasproblemen
                (ketamine-cystitis), nierproblemen, en ademhalingsdepressie bij
                hoge doseringen.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Harm reduction tips:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Gebruik zo weinig mogelijk en met pauzes tussen sessies.
              </ListItem>
              <ListItem>
                Drink voldoende water om blaasproblemen te voorkomen, maar
                vermijd overmatige hydratatie.
              </ListItem>
            </ul>
            <SubSectionHeader>Advies voor behandelaren:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Ketamine kan ook therapeutisch worden gebruikt (bij depressie).
                Bespreek recreatief gebruik en de intenties van de patiënt.
              </ListItem>
              <ListItem>
                Verwijs bij intensief gebruik naar gespecialiseerde hulp.
              </ListItem>
            </ul>
          </>
        }
      />
      <AccordionSubSection
        value="3mmc"
        title="3-MMC (3-methylmethcathinone)"
        section={
          <>
            <SubSectionHeader>Wat is 3-MMC?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                Een synthetische cathinone, vergelijkbaar met MDMA en cocaïne,
                met stimulerende en empathogene eigenschappen.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Risico&apos;s:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Fysiek: </span>
                Hartritmestoornissen, uitdroging, en oververhitting.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Psychisch:</span> Hoge
                verslavingsrisico door korte werkingsduur en craving.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Sociaal:</span> Gevaarlijk
                gedrag door ontremming.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Harm reduction tips:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Beperk gebruik tot lage doses en vermijd het combineren met
                andere middelen.{" "}
              </ListItem>
              <ListItem>Zorg voor voldoende rust en hydratatie.</ListItem>
            </ul>
            <SubSectionHeader>Advies voor behandelaren:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Bespreek de snelle opkomst van afhankelijkheid en het korte
                effect dat herhaald gebruik stimuleert.{" "}
              </ListItem>
              <ListItem>
                <span className="font-semibold">
                  Bij problematisch gebruik:
                </span>{" "}
                Onderzoek of er sprake is van gebruik in chemsexcontexten.{" "}
              </ListItem>
            </ul>
          </>
        }
      />
      <AccordionSubSection
        value="mxe"
        title="MXE (Methoxetamine)"
        section={
          <>
            <SubSectionHeader>Wat is MXE?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                Een synthetisch dissociatief middel met effecten die lijken op
                ketamine, maar langer aanhouden.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Risico&apos;s:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Fysiek: </span> Verhoogde
                hartslag, hoge bloeddruk, en blaasproblemen.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Psychisch: </span> Verwardheid,
                angst, en dissociatieve stoornissen.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Harm reduction tips:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Gebruik zeer lage doseringen vanwege de onvoorspelbaarheid van
                de effecten.{" "}
              </ListItem>
              <ListItem>
                Vermijd combinatie met alcohol of andere middelen.
              </ListItem>
            </ul>
            <SubSectionHeader>Advies voor behandelaren:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Bespreek de lange werkingsduur en de risico&apos;s van herhaald
                gebruik.{" "}
              </ListItem>
              <ListItem>
                Verwijs intensieve gebruikers naar gespecialiseerde zorg.
              </ListItem>
            </ul>
          </>
        }
      />
      <AccordionSubSection
        value="dmt"
        title="DMT (Dimethyltryptamine)"
        section={
          <>
            <SubSectionHeader>Wat is DMT?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                Een krachtig psychedelisch middel, vaak gerookt of gedronken als
                onderdeel van ayahuasca-ceremonies.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Risico&apos;s:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Psychisch:</span> Extreme
                hallucinaties, derealisatie, en angst tijdens de ervaring.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Fysiek:</span> Nauwelijks
                directe schade, maar indirecte risico&apos;s door een intense
                ervaring.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Harm reduction tips:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Gebruik enkel in een veilige omgeving met begeleiding.{" "}
              </ListItem>
              <ListItem>Vermijd gebruik bij psychische kwetsbaarheid.</ListItem>
            </ul>
            <SubSectionHeader>Advies voor behandelaren:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Wees alert op patiënten die ayahuasca-ceremonies gebruiken als
                spirituele therapie. Bespreek verwachtingen en eventuele
                risico&apos;s.{" "}
              </ListItem>
            </ul>
          </>
        }
      />
      <AccordionSubSection
        value="salvia"
        title="Salvia Divinorum"
        section={
          <>
            <SubSectionHeader>Wat is Salvia Divinorum?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                Een plant met psychoactieve eigenschappen, meestal gerookt of
                gekauwd, die intense maar korte hallucinaties veroorzaakt.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Risico&apos;s:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Psychisch:</span> Desoriëntatie
                en verlies van controle tijdens de ervaring.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Fysiek:</span> Geen directe
                toxiciteit, maar gevaar bij onveilige acties onder invloed.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Harm reduction tips:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Gebruik zittend of liggend in een veilige omgeving.
              </ListItem>
              <ListItem>
                Vermijd gebruik bij angst of depressieve klachten.
              </ListItem>
            </ul>
            <SubSectionHeader>Advies voor behandelaren:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Bespreek het korte maar overweldigende effect van salvia en de
                risico&apos;s bij onvoorbereid gebruik.{" "}
              </ListItem>
            </ul>
          </>
        }
      />
      <AccordionSubSection
        value="pcp"
        title="PCP (Fencyclidine)"
        section={
          <>
            <SubSectionHeader>Wat is PCP?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                Een dissociatief middel dat zelden voorkomt in Nederland, maar
                incidenteel wordt aangetroffen. Het kan hallucinaties en extreme
                dissociatie veroorzaken.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Risico&apos;s:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Fysiek: </span>{" "}
                Hartritmestoornissen, verhoogde bloeddruk, en
                ademhalingsproblemen.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Psychisch:</span> Agressie,
                paranoia, en psychoses.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Harm reduction tips:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Vermijd het gebruik van PCP vanwege de hoge risico&apos;s.{" "}
              </ListItem>
              <ListItem>
                Gebruik nooit alleen en in een gecontroleerde omgeving.
              </ListItem>
            </ul>
            <SubSectionHeader>Advies voor behandelaren:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                {" "}
                Bij vermoeden van gebruik: monitor agressie of psychosesymptomen
                en verwijs naar een specialist.{" "}
              </ListItem>
            </ul>
          </>
        }
      />
    </Accordion>
  );
}
