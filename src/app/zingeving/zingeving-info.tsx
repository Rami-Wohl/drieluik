import { InfoPanel } from "~/components/ui/info-panel";
import { ListItem } from "~/components/ui/list-item";
import { Divider } from "~/components/ui/text-components/divider";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";

export const ZingevingInfo = () => {
  return (
    <InfoPanel
      title={
        <>
          Over het <b>zingeving</b> luik
        </>
      }
      content={
        <>
          <StyledParagraph marginBottom="mb-2">
            Dit luik bevat oefeningen en werkvormen die gericht zijn op
            zingeving, zelfinzicht en herstel. De focus ligt niet alleen op
            stoppen met gebruik, maar op het versterken van de persoon
            daaronder.
          </StyledParagraph>{" "}
          <StyledParagraph marginBottom="mb-2">
            De oefeningen helpen om:
          </StyledParagraph>{" "}
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>de functie van gebruik te begrijpen</ListItem>
            <ListItem>ongezonde patronen zichtbaar te maken</ListItem>
            <ListItem>te werken aan identiteit, waarden en richting</ListItem>
            <ListItem>
              alternatieven te ontwikkelen voor middelengebruik
            </ListItem>
          </ul>
          <Divider />
          <StyledParagraph
            marginBottom="mb-2"
            header="Hoe gebruik je dit luik?"
          >
            Klik op een oefening voor uitleg en werkinstructies. De meeste
            oefeningen voer je samen met de cliënt uit tijdens het gesprek,
            sommige zijn ook geschikt als huiswerk.
          </StyledParagraph>{" "}
          <StyledParagraph marginBottom="mb-2">
            Je kunt kiezen wat past bij het moment in de behandeling:
          </StyledParagraph>{" "}
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>verkennen (inzicht krijgen)</ListItem>
            <ListItem>verdiepen (patronen begrijpen)</ListItem>
            <ListItem>veranderen (nieuw gedrag ontwikkelen)</ListItem>
          </ul>
          <StyledParagraph
            marginBottom="mb-2"
            header="Achtergrond en rationale"
          >
            Zingeving speelt een centrale rol in herstel. Middelengebruik staat
            zelden op zichzelf, maar hangt samen met emoties, identiteit,
            omgeving en levensrichting. Deze oefeningen zijn gebaseerd op onder
            andere:
          </StyledParagraph>{" "}
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>motiverende gespreksvoering</ListItem>
            <ListItem>cognitieve gedragstherapie </ListItem>
            <ListItem>narratieve psychologie</ListItem>
            <ListItem>herstelgerichte zorg</ListItem>
          </ul>
          <Divider />
          <StyledParagraph header="Bronnen">
            De inhoud van dit luik is gebaseerd op wetenschappelijke literatuur
            en praktijkboeken binnen de verslavingszorg, waaronder werk van o.a.
            Miller & Rollnick, Marlatt, Ofman en onderzoek naar herstel en
            zelfregulatie
          </StyledParagraph>{" "}
        </>
      }
    />
  );
};
