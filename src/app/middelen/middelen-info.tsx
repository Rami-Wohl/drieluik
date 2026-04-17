import { InfoPanel } from "~/components/ui/info-panel";
import { ListItem } from "~/components/ui/list-item";
import { Divider } from "~/components/ui/text-components/divider";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";

export const MiddelenInfo = () => {
  return (
    <InfoPanel
      title={
        <>
          Over het <b>middelen</b> luik
        </>
      }
      content={
        <>
          <StyledParagraph marginBottom="mb-2">
            In dit luik vind je informatie over de verschillende soorten
            middelen. Ieder middel is opgedeeld in drie onderwerpen:
          </StyledParagraph>{" "}
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              <b>Algemeen: </b>
              hier vind je voornamelijk informatie die je voor algemene
              voorlichting kan gebruiken.
            </ListItem>
            <ListItem>
              <b>Afbouwtips: </b>
              Hier vind je afbouwschema’s en andere zaken die belangrijk kunnen
              zijn bij afbouwen.
            </ListItem>
            <ListItem>
              <b>Overig: </b>
              Dit kan alles zijn dat niet onder de andere categorieën valt.
              Bijvoorbeeld maatschappelijke context of interessante weetjes.
            </ListItem>
          </ul>
          <Divider />
          <StyledParagraph marginBottom="mb-2" header="Bronnen">
            Bij de meeste middelen staat een tabel met algemene kenmerken,
            risicotaxatie en verslavingspotentie. Deze gegevens zijn gebaseerd
            op <i>De Ranking van Drugs</i> van het RIVM (tabel 1.3).
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            De teksten zijn gebaseerd op informatie van onder andere het
            Trimbos-instituut en het RIVM, aangevuld met actuele berichtgeving
            (zoals NOS).
          </StyledParagraph>
          <StyledParagraph>
            De afbouwschema’s sluiten aan bij de geldende landelijke
            richtlijnen.
          </StyledParagraph>
        </>
      }
    />
  );
};
