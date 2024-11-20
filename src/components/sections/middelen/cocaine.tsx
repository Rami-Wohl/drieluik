import { type ReactNode } from "react";

export function StyledParagraph({
  header,
  children,
  marginBottom = "mb-8",
}: {
  header?: string;
  marginBottom?: "mb-2" | "mb-8";
  children: ReactNode;
}) {
  return (
    <div className={`${marginBottom}`}>
      {header && (
        <h3 className="mb-2 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
          {header}
        </h3>
      )}
      <p className="mb-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
        {children}
      </p>
    </div>
  );
}

export function CocaineSection() {
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
}