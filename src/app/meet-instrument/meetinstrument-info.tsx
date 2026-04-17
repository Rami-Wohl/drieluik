import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { ListItem } from "~/components/ui/list-item";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { Divider } from "~/components/ui/text-components/divider";
import { InfoPanel } from "~/components/ui/info-panel";

export function MeetInstrumentInfo() {
  return (
    <InfoPanel
      title={<>Handleiding – Meetinstrument Drieluik</>}
      content={
        <>
          <StyledParagraph marginBottom="mb-2">
            Dit meetinstrument wordt gebruikt om voortgang in de behandeling
            zichtbaar te maken op meerdere levensgebieden. Het is geen verplicht
            meetmoment, maar een hulpmiddel voor de behandelaar om ontwikkeling
            te volgen en bespreekbaar te maken.
          </StyledParagraph>{" "}
          <Divider />
          <SubSectionHeader>Gebruik</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              De behandelaar vult het instrument in samen met de cliënt tijdens
              een gesprek.
            </ListItem>
            <ListItem>
              Het wordt bij voorkeur gebruikt aan het begin, tijdens en aan het
              einde van de behandeling.
            </ListItem>
            <ListItem>
              De frequentie bepaal je zelf, afhankelijk van het behandeltraject.
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2" header="Werkwijze per categorie">
            Voor elk onderwerp (zoals middelengebruik, financiën, gezondheid,
            etc.) doorloop je twee stappen:
          </StyledParagraph>{" "}
          <ol className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem ordered>
              <b>Gevoelstemperatuur</b>
              <br /> Vraag de cliënt hoe het op dit moment gaat op dit gebied.
              Dit is een subjectieve inschatting van de cliënt zelf.
            </ListItem>
            <ListItem ordered>
              <b>Score (1–7)</b>
              <br /> Kies vervolgens samen de omschrijving die het beste past.
              Dit is een meer concrete en gestandaardiseerde inschatting van de
              situatie.
            </ListItem>
          </ol>
          <SubSectionHeader>Interpretatie</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              Dit instrument meet <b>kwaliteit van leven</b> en functioneren,
              niet alleen middelengebruik.
            </ListItem>
            <ListItem>
              De focus ligt op <b></b>herstel
              <b /> in brede zin, inclusief de functie van gebruik.
            </ListItem>
            <ListItem>
              Abstinentie is geen doel op zich binnen deze meting.{" "}
            </ListItem>
          </ul>
          <SubSectionHeader>Afronding en verslaglegging</SubSectionHeader>
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>Na het invullen kun je een rapport downloaden. </ListItem>
            <ListItem>
              Dit rapport kan direct worden toegevoegd aan het EPD of gebruikt
              worden in de rapportage.{" "}
            </ListItem>
            <ListItem>
              Door meerdere metingen naast elkaar te leggen, wordt vooruitgang
              of stagnatie zichtbaar.{" "}
            </ListItem>
          </ul>
        </>
      }
    />
  );
}
