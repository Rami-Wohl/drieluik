import { Accordion } from "~/components/ui/accordion";
import { AccordionSubSection, StyledParagraph } from "./cocaine";
import { ListItem } from "~/components/ui/list-item";

export function HeroineSection() {
  return (
    <Accordion type="single" collapsible className="w-full text-black">
      <AccordionSubSection
        value="algemene-kennis"
        title="Algemene kennis"
        section={
          <div>
            <StyledParagraph>
              Opiaten zijn stoffen die uit opium worden gewonnen. Een bekend
              voorbeeld hiervan is morfine. Behalve opiaten zijn er ook een
              aantal chemisch gemaakte stoffen die een vergelijkbare werking
              hebben. Deze worden ook vaak opiaten genoemd. Heroïne is een
              chemisch bewerkte vorm van morfine. Het onverantwoord gebruiken
              van opioïden brengt echter risico&apos;s met zich mee, zoals
              gewenning, overdosering en verslaving. Heroïne is een van de meest
              verslavende stoffen die er zijn. Het is zowel geestelijk als
              lichamelijk verslavend. Na 3 weken gebruik kunnen bij stoppen al
              onthoudingsverschijnselen optreden. In de behandeling voor
              heroïneverslaving worden de onthoudingsverschijnselen soms
              tijdelijk opgevangen met methadon. Bij regelmatig gebruik ontstaat
              er tolerantie. Je hebt dan meer nodig voor hetzelfde effect.
            </StyledParagraph>
            <StyledParagraph marginBottom="mb-2">
              Veilig gebruik van heroïne bestaat niet. Gebruikers verliezen vaak
              op den duur de controle over hun gebruik. Je kunt de risico&apos;s
              toch enigszins beperken door:
            </StyledParagraph>
            <ul className="mb-8 flex flex-col gap-2 px-4">
              {" "}
              <ListItem> De heroïne te chinezen en niet te spuiten. </ListItem>
              <ListItem>
                {" "}
                Bij spuiten in ieder geval te zorgen voor telkens een nieuwe en
                ongebruikte spuit en spuitattributen.{" "}
              </ListItem>
              <ListItem>
                {" "}
                Bewust te zijn van het gevaar op een overdosis.
              </ListItem>
              <ListItem>
                {" "}
                Bij spuiten ascorbinezuur te gebruiken in plaats van
                citroenzuur.
              </ListItem>
              <ListItem>
                {" "}
                Bij chinezen het plastic op de aluminiumfolie af te branden.{" "}
              </ListItem>
              <ListItem>
                {" "}
                Alleen te gebruiken als je je geestelijk en lichamelijk goed
                voelt.{" "}
              </ListItem>
              <ListItem>
                {" "}
                Niet in combinatie met andere middelen te gebruiken.{" "}
              </ListItem>
              <ListItem> Heroïne te laten testen. </ListItem>
            </ul>
          </div>
        }
      />
      <AccordionSubSection
        value="afbouwen"
        title="Afbouwen"
        section={
          <>
            <StyledParagraph
              marginBottom="mb-2"
              header="Manieren om het afbouwen op te delen in kleine stapjes/beschikbare medicatie:"
            >
              Toewerken naar abstinentie gaat vrijwel altijd door middel van
              afbouwen.
            </StyledParagraph>
            <StyledParagraph marginBottom="mb-2">
              Afbouwen met methadon of afbouwen met buprenorphine. Naltrexon
              maakt de zucht naar opiaten minder. Naltrexon zorgt ervoor dat de
              heroïne of het andere opiaat geen effect meer heeft op de
              hersenen. Zo&apos;n stof wordt een opiaatantagonist genoemd. Je
              hebt dan minder zucht. Naltrexon is zelf niet verslavend. Methadon
              is een vervanging van illegale opiaten zoals
              &apos;straatheroïne&apos;. Je kunt methadon gebruiken om helemaal
              te stoppen. We bouwen de methadon dan langzaam af. Maar meestal
              wordt methadon gebruikt als een blijvende
              &apos;onderhoudsdosis&apos;. Die haal je dan op een methadonpost
              op.
            </StyledParagraph>
            <StyledParagraph marginBottom="mb-2">
              Omdat methadon langer werkt dan heroïne, hoef je niet steeds op
              jacht naar heroïne. Je kunt in een normaal dag- en nachtritme gaan
              leven. En je kunt werken aan je gezondheid en andere doelen. Ook
              methadon is een zwaar verdovend middel. Het is moeilijk om
              helemaal te stoppen met heroïne. Methadon geeft geen roes, dus
              veel gebruikers blijven verlangen naar (bijgebruik van) heroïne.
              Methadon is altijd de eerste stap.
            </StyledParagraph>
            <StyledParagraph marginBottom="mb-2">
              Bij een heroïneverslaving ligt het leven helemaal overhoop.
              Heroïne scoren is het enige dat telt. Je gaat slecht eten en zorgt
              niet goed voor jezelf. Daardoor word je vaak ziek. Heroïne is erg
              verslavend. Het kan heel moeilijk en soms onmogelijk zijn om er
              helemaal vanaf te komen. Als je al heel lang verslaafd bent aan
              heroïne (of andere opiaten, zoals morfine) en eerdere
              behandelingen hadden geen succes, dan kun je misschien wel
              medische heroïnebehandeling krijgen. Je krijgt dan onder medisch
              toezicht elke dag een vaste hoeveelheid heroïne. Daardoor wordt je
              leven stabieler.
            </StyledParagraph>
            <StyledParagraph header="Dingen om op te letten bij afbouwen:">
              Tijdens de behandeling dient er aandacht te zijn voor de somatiek
              van de patient. Een lichamelijk (somatisch) onderzoek maakt
              onderdeel uit van de multidisciplinaire diagnostiek bij
              opiaatverslaving. Er is een praktische handreiking &apos;Somatisch
              Onderzoek bij Opiaatverslaving (SOO)&apos; beschikbaar voor artsen
              en verpleegkundig specialisten voor het somatisch onderzoek bij
              mensen met een opiaatverslaving.{" "}
            </StyledParagraph>
          </>
        }
      />
    </Accordion>
  );
}
