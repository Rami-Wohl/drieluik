import { type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { SubSectionHeader } from "./ghb";

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
        value="afbouwen"
        title="Afbouwen"
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
