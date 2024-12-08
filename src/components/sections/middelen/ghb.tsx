import { AccordionSubSection } from "./cocaine";
import { ListItem } from "~/components/ui/list-item";
import { Accordion } from "~/components/ui/accordion";
import { type ReactNode } from "react";

export function SubSectionHeader({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:tracking-[0.1rem]">
      {children}
    </h3>
  );
}

export function SubSectionParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
      {children}
    </p>
  );
}

export function GhbSection() {
  return (
    <Accordion type="single" collapsible className="w-full text-black">
      <AccordionSubSection
        value="algemene-kennis"
        title="Algemene kennis"
        section={
          <>
            <SubSectionHeader>Wat is GHB?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                Gamma-hydroxyboterzuur (GHB) is een verdovend middel dat van
                nature in het lichaam voorkomt in zeer kleine hoeveelheden.
                Synthetische GHB wordt gebruikt als recreatief middel of bij
                chemsex.
              </SubSectionParagraph>
              <SubSectionParagraph>
                Het wordt vaak verkocht als een doorzichtige vloeistof en
                ingenomen met behulp van een doseerspuit.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Werkingsmechanisme:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                GHB werkt in op het centrale zenuwstelsel en heeft een
                verdovende, ontspannende werking. Het stimuleert de afgifte van
                dopamine, wat een gevoel van euforie kan veroorzaken.{" "}
              </SubSectionParagraph>
              <SubSectionParagraph>
                De effecten beginnen meestal binnen 15-30 minuten en houden 1-4
                uur aan, afhankelijk van de dosering.{" "}
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Fysieke en mentale effecten:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              <SubSectionParagraph>
                <span className="font-semibold">Korte termijn:</span>{" "}
                ontspanning, verhoogd libido, euforie, duizeligheid,
                misselijkheid.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">
                  Risico&apos;s bij hoge dosering:
                </span>{" "}
                ademhalingsdepressie, bewusteloosheid, of coma.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">
                  Langetermijnrisico&apos;s:
                </span>{" "}
                verslaving, geheugenproblemen, slaapstoornissen, en een verhoogd
                risico op psychische klachten zoals angst of depressie.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Hoe herken je gebruik?</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                Symptomen zoals slaperigheid, ongecoördineerd gedrag,
                plotselinge stemmingswisselingen, en geheugenverlies.
              </SubSectionParagraph>
              <SubSectionParagraph>
                Fysieke aanwijzingen zoals kleine flesjes met vloeistof en
                doseerspuiten.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Sociaal gedrag:</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                GHB wordt vaak gebruikt in uitgaans- of chemsexcontexten.
              </SubSectionParagraph>
              <SubSectionParagraph>
                Problematisch gebruik kan leiden tot sociale isolatie,
                financiële problemen, en risicovol gedrag zoals onveilige seks.
              </SubSectionParagraph>
            </div>
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
                <span className="font-semibold">Fysieke gevolgen: </span> risico
                op ademhalingsdepressie, hartproblemen, en overlijden bij
                overdosering.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Psychische gevolgen: </span>
                verslavingsrisico, angst, depressie, en cognitieve
                achteruitgang.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Sociale gevolgen: </span>
                relatieproblemen, werkverlies, en juridische complicaties.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>
              Harm reduction (veilig gebruik):
            </SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              <SubSectionParagraph>
                <span className="font-semibold">Dosering:</span> Gebruik altijd
                een doseerspuit om nauwkeurige doseringen te meten.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Timing:</span> Gebruik een
                timer om te voorkomen dat een nieuwe dosis te snel wordt
                ingenomen (bij voorkeur niet binnen 2-3 uur).
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Veiligheid: </span> Gebruik
                nooit GHB in combinatie met alcohol of andere verdovende
                middelen.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Omgeving: </span> Zorg dat
                iemand in de omgeving alert blijft en hulp kan inschakelen bij
                complicaties.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Bewustzijn: </span> Besef dat
                de grens tussen een veilige en een gevaarlijke dosering klein
                is.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>
              Chemsex en seksuele voorlichting:
            </SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                Vraag door naar het gebruik van GHB in een chemsexcontext. Dit
                kan wijzen op risicovol seksueel gedrag of onderliggende
                problematiek.
              </ListItem>
              <ListItem>
                Geef seksuele voorlichting, inclusief het gebruik van condooms
                en PrEP, en bespreek de risico&apos;s van seks onder invloed van
                verdovende middelen.
              </ListItem>
            </ul>
            <SubSectionHeader>Verantwoorde communicatie:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              {" "}
              <ListItem>
                Leg uit dat GHB snel verslavend kan zijn, maar veroordeel niet.
              </ListItem>
              <ListItem>
                Stimuleer openheid over gebruik, zodat er een passend
                behandelplan gemaakt kan worden.
              </ListItem>
            </ul>
          </>
        }
      />
      <AccordionSubSection
        value="afbouwtips"
        title="Afbouwtips"
        section={
          <>
            <SubSectionHeader>Klinische afbouw noodzakelijk:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                Intensief gebruik van GHB (zoals meerdere doses per dag) vereist
                afbouw onder klinisch toezicht vanwege het hoge risico op
                ernstige ontwenningsverschijnselen, waaronder epileptische
                aanvallen en delirium.
              </ListItem>
              <ListItem>
                Verwijs bij intensief gebruik altijd naar een specialistische
                kliniek.
              </ListItem>
            </ul>
            <SubSectionHeader>Afbouwschema (indicatief):</SubSectionHeader>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Stap 1:</span> Breng de
                dagelijkse dosering en frequentie in kaart.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Stap 2:</span> Verlaag de
                dosering geleidelijk (bijvoorbeeld met 1 ml per dosis per dag).
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Stap 3:</span> Verleng de tijd
                tussen de doses (bijvoorbeeld van elke 3 uur naar elke 4 uur).
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Stap 4:</span> Monitor
                ontwenningsverschijnselen zoals angst, trillen, zweten, of
                slapeloosheid. Bij ernstige klachten: stop het afbouwen en zoek
                medische hulp.
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold">Let op:</span> Dit schema is
                enkel voor patiënten met mild gebruik. Bij intensief gebruik kan
                dit gevaarlijk zijn zonder klinisch toezicht.
              </SubSectionParagraph>
            </div>
            <SubSectionHeader>Ondersteuning bij afbouw:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                Psychologische begeleiding, zoals cognitieve gedragstherapie en
                motiverende gespreksvoering.
              </ListItem>
              <ListItem>
                Behandeling van comorbiditeit, zoals angst of depressie.
              </ListItem>
              <ListItem>
                Sociale steun: betrokkenheid van vrienden of familie.{" "}
              </ListItem>
            </ul>
            <SubSectionHeader>Herstel en nazorg:</SubSectionHeader>
            <ul className="mb-8 flex list-inside flex-col gap-2">
              <ListItem>
                Bespreek het risico op terugval en stel een plan op om triggers
                te vermijden.
              </ListItem>
              <ListItem>
                Stimuleer deelname aan zelfhulpgroepen of herstelprogramma’s.{" "}
              </ListItem>
              <ListItem>
                Help de patiënt bij het ontwikkelen van gezonde alternatieven
                voor ontspanning en sociale verbinding.{" "}
              </ListItem>
            </ul>
          </>
        }
      />
    </Accordion>
  );
}
