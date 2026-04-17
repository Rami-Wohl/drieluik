import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import InfoIcon from "~/components/icons/info-icon";
import { Button } from "~/components/ui/button";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { ListItem } from "~/components/ui/list-item";
import { Divider } from "~/components/ui/text-components/divider";
import { InfoPanel } from "~/components/ui/info-panel";

export function CravingInfo() {
  return (
    <InfoPanel
      title={
        <>
          {" "}
          Over het <b>craving</b> luik
        </>
      }
      content={
        <>
          <StyledParagraph marginBottom="mb-2">
            In dit luik werk je aan het herkennen en beïnvloeden van craving. Je
            vindt hier een signaleringsplan, een cravingcheck en verschillende
            oefeningen.
          </StyledParagraph>{" "}
          <Divider />
          <StyledParagraph marginBottom="mb-2" header="Signaleringsplan">
            Je kunt samen met de cliënt een signaleringsplan invullen en
            downloaden. De verticale opbouw is gekozen zodat het overzichtelijk
            en praktisch invulbaar is tijdens het gesprek.
          </StyledParagraph>{" "}
          <StyledParagraph marginBottom="mb-2">
            Het plan helpt om signalen van craving vroeg te herkennen, passende
            reacties en strategieën vast te leggen en houvast te bieden op
            momenten dat craving oploopt.
          </StyledParagraph>{" "}
          <StyledParagraph marginBottom="mb-2" header="Cravingcheck">
            De cravingcheck helpt om craving te kwantificeren en te volgen in de
            tijd. Je kunt gebruik maken van cijfers, kleuren en stellingen.
          </StyledParagraph>{" "}
          <StyledParagraph marginBottom="mb-2">
            Deze ijkpunten maken craving concreet en bespreekbaar. Je kunt de
            check ook gebruiken om te zien of oefeningen effect hebben (neemt de
            craving af of niet?).{" "}
          </StyledParagraph>{" "}
          <StyledParagraph marginBottom="mb-2" header="Oefeningen">
            De oefeningen zijn gericht op het reguleren van aandacht, spanning
            en gedrag. Ze zijn onderverdeeld in vier categorieën:
          </StyledParagraph>{" "}
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              <b>Ademhaling: </b>
              directe beïnvloeding van spanning en arousal
            </ListItem>
            <ListItem>
              <b>Ontspanning: </b>
              verminderen van lichamelijke en mentale onrust
            </ListItem>
            <ListItem>
              <b>Aandacht: </b>
              leren sturen van focus en omgaan met triggers
            </ListItem>
            <ListItem>
              <b>Verbeelding: </b>
              werken met mentale beelden en scenario’s{" "}
            </ListItem>
          </ul>
          <Divider />
          <StyledParagraph
            marginBottom="mb-2"
            header="Achtergrond en rationale"
          >
            Craving wordt niet alleen bepaald door het middel zelf, maar ook
            door aandacht, gedachten en mentale beelden.
          </StyledParagraph>{" "}
          <StyledParagraph marginBottom="mb-2">
            Verbeeldingsoefeningen (imaginatie) richten zich op deze processen.
            Ze helpen cliënten om:
          </StyledParagraph>{" "}
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              craving te herkennen zonder er direct naar te handelen
            </ListItem>
            <ListItem>alternatieve reacties mentaal te oefenen</ListItem>
            <ListItem>motivatie en zelfcontrole te versterken</ListItem>
            <ListItem>emoties te reguleren zonder middelengebruik</ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Imaginatie werkt het best in combinatie met{" "}
            <b>copingvaardigheden en mindfulness</b>. Op zichzelf is het meestal
            niet voldoende, maar geïntegreerd in behandeling is er duidelijke
            evidentie voor effectiviteit.
          </StyledParagraph>{" "}
          <Divider />
          <StyledParagraph marginBottom="mb-2" header="Bronnen">
            De inhoud van dit luik is gebaseerd op wetenschappelijke literatuur
            over craving, aandacht en imaginatie, waaronder:
          </StyledParagraph>{" "}
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              Kavanagh <i>et al.</i> (2005) – Elaborated Intrusion Theory of
              Desire
            </ListItem>
            <ListItem>
              May <i>et al.</i> (2015) – Toepassingen van cravingtheorie in
              behandeling
            </ListItem>
            <ListItem>
              Bowen <i>et al.</i> (2011) – Mindfulness-based relapse prevention
            </ListItem>
            <ListItem>
              Grant & Potenza (2006) – Neurobiologie van verslaving
            </ListItem>
            <ListItem>
              Huang <i>et al.</i> (2026) – Aandachtsbias en craving bij
              middelengebruik
            </ListItem>
          </ul>
        </>
      }
    />
  );
}
