import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import { Button } from "~/components/ui/button";
import CyclusIcon from "~/components/icons/zingeving/cyclus-icon";
import { ListItem } from "~/components/ui/list-item";

export function Gebruikscyclus() {
  return (
    <Dialog>
      <GameContainer
        icon={<CyclusIcon height={72} width={72} />}
        title="Gebruikscyclus"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            De gebruikscyclus
          </DialogTitle>
        </DialogHeader>
        <div className="my-2 flex flex-col gap-4 lg:px-4">
          <table className="mb-2">
            <tbody>
              <tr className="h-auto">
                <td className="w-6 max-w-fit text-wrap pr-2 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Begrijpen dat gebruik vaak een herhaald patroon volgt en dat
                  inzicht hierin de eerste stap is naar verandering.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative mb-4 flex flex-col gap-6 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              1. Introductie van de gebruikscyclus
            </span>{" "}
            De gebruikscyclus helpt cliënten inzicht krijgen in de patronen en
            triggers die leiden tot gebruik. Het brengt de processen van
            gedachten, gevoelens en gedrag in kaart en biedt aanknopingspunten
            om deze te doorbreken.
          </DialogDescription>
          <DialogDescription className="gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Uitleg aan de cliënt: </span>
            “Veel van ons gedrag verloopt in een cyclus: er is een gebeurtenis
            of situatie die een bepaalde gedachte of gevoel oproept, en dat
            leidt tot bepaald gedrag. Bij gebruik zien we vaak een soortgelijk
            patroon. Door dit patroon te herkennen, kunnen we manieren vinden om
            het te doorbreken.”
          </DialogDescription>
          <DialogDescription className="mt-4 flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              2. De vijf fasen van de cyclus
            </span>{" "}
            Laat de cliënt de cyclus opsplitsen in vijf duidelijke stappen:
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              <span className="font-semibold">
                Trigger (externe of interne prikkel)
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Vraag:{" "}
                  <span className="italic">
                    “Wat gebeurt er meestal vlak voordat je wilt gebruiken?”
                  </span>
                </ListItem>
                <ListItem>
                  Externe triggers: Situaties, mensen, plaatsen, geuren, beelden
                  (bijv. een feestje, ruzie, loon krijgen).
                </ListItem>
                <ListItem>
                  Interne triggers: Gedachten, gevoelens, emoties, lichamelijke
                  sensaties (bijv. eenzaamheid, stress, verveling).{" "}
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">
                Gedachte (reactie op de trigger){" "}
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Vraag:{" "}
                  <span className="italic">
                    “Wat denk je in dat moment? Wat gaat er door je hoofd?”
                  </span>
                </ListItem>
                <ListItem>
                  Typische gedachten kunnen zijn:{" "}
                  <span className="italic">
                    “Ik heb het nodig,” “Ik verdien dit,” “Het maakt toch niet
                    meer uit.”
                  </span>
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">
                Gevoel (hoe je je voelt na de gedachte)
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Vraag:{" "}
                  <span className="italic">
                    “Wat voel je op dat moment? Emotioneel en fysiek?”
                  </span>
                </ListItem>
                <ListItem>
                  Gevoelens: Angst, frustratie, onrust, leegte, opwinding,
                  verlangen.
                </ListItem>
                <ListItem>
                  Lichamelijke sensaties: Spanning, onrust, honger,
                  hartkloppingen.{" "}
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">
                Gedrag (de actie: het gebruiken)
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Vraag:{" "}
                  <span className="italic">
                    “Wat doe je vervolgens? Hoe pak je dat aan?”
                  </span>
                </ListItem>
                <ListItem>
                  Bespreek het daadwerkelijke gedrag: Hoe, wat, waar en wanneer
                  gebruikt de cliënt.
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">
                Gevolg (het effect van het gebruik){" "}
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Vraag:{" "}
                  <span className="italic">
                    “Wat gebeurt er daarna? Hoe voel je je na het gebruik?”
                  </span>
                </ListItem>
                <ListItem>
                  Bespreek positieve gevolgen (ontspanning, ontsnappen aan
                  gevoelens) én negatieve gevolgen (schuld, schaamte, fysieke
                  klachten).
                </ListItem>
              </ul>
            </ListItem>
          </ol>
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              3. Voorbeeld van een gebruikscyclus
            </span>{" "}
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              <span className="font-semibold">Trigger:</span> Stress op het werk
              na kritiek van de baas.
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Gedachte:</span> &quot;Ik kan hier
              niet mee omgaan, ik heb iets nodig om me te ontspannen.&quot;
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Gevoel:</span> Onrust, spanning in
              de borst, leegte.
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Gedrag:</span> Gebruik van alcohol
              of drugs om te ontspannen.
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Gevolg:</span> Tijdelijke
              verlichting, maar later schuldgevoel en meer stress de volgende
              dag.
            </ListItem>
          </ol>
          <DialogDescription className="mt-4 flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              4. Inzicht: waar kun je ingrijpen in de cyclus?
            </span>{" "}
            Samen met de cliënt bespreek je de zwakke schakels in de cyclus. Dit
            zijn punten waarop ze invloed kunnen uitoefenen:{" "}
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              <span className="font-semibold">
                Triggers vermijden of anders leren omgaan met triggers:
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Als externe triggers: Kunnen bepaalde situaties of mensen
                  worden vermeden?
                </ListItem>
                <ListItem>
                  Als interne triggers: Kunnen ze leren omgaan met gevoelens van
                  eenzaamheid, verveling of stress?
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">
                Gedachten uitdagen of vervangen:
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Negatieve gedachten vervangen door positievere, realistischere
                  gedachten.
                </ListItem>
                <ListItem>
                  Bijvoorbeeld: &quot;Ik verdien dit niet&quot; vervangen door
                  &quot;Ik verdien het om gezond te zijn.&quot;
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Gevoelens leren reguleren:</span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Oefeningen zoals ademhaling, mindfulness of
                  ontspanningstechnieken toepassen.
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Alternatieven voor gedrag:</span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Wat kunnen ze in plaats van gebruiken doen om hetzelfde
                  resultaat te bereiken? (Bijv. sporten, muziek luisteren,
                  bellen met een vriend).
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Leren omgaan met gevolgen: </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Bespreek hoe ze met schuldgevoel of negatieve emoties kunnen
                  omgaan zonder terug te vallen in de cyclus.
                </ListItem>
              </ul>
            </ListItem>
          </ol>
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              5. Oefening: breng je eigen cyclus in kaart
            </span>{" "}
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              Laat de cliënt hun meest recente gebruiksmoment beschrijven, stap
              voor stap volgens de cyclus.
            </ListItem>
            <ListItem ordered>
              Vul samen een schema in met de vijf fasen (trigger, gedachte,
              gevoel, gedrag, gevolg).
            </ListItem>
            <ListItem ordered>
              Reflecteer: Wat valt op? Welke patronen zien ze? Waar zouden ze
              graag verandering willen?
            </ListItem>
          </ol>
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              6. Plan van aanpak: doorbreken van de cyclus
            </span>{" "}
          </DialogDescription>
          <ul className="mb-4 flex list-inside flex-col gap-4">
            <ListItem>
              <span className="font-semibold">Kortetermijndoel:</span> Kies één
              fase van de cyclus om aan te pakken en maak een plan.
              <ul className="my-4 flex list-inside flex-col gap-4">
                <ListItem>
                  Bijv. leren omgaan met stressvolle situaties (trigger).
                </ListItem>
                <ListItem>
                  Of: negatieve gedachten herkennen en uitdagen (gedachte).
                </ListItem>
              </ul>
            </ListItem>
            <ListItem>
              <span className="font-semibold">Langetermijndoel:</span> Leer
              omgaan met meerdere fases en ontwikkel alternatieve
              copingstrategieën.
            </ListItem>
          </ul>
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">7. Follow-up en herhaling </span>{" "}
          </DialogDescription>
          <ul className="mb-4 flex list-inside flex-col gap-4">
            <ListItem>
              Bespreek hoe het de cliënt vergaat met het doorbreken van de
              cyclus.
            </ListItem>
            <ListItem>
              Moedig hen aan om nieuwe situaties te analyseren en te oefenen met
              het toepassen van hun plan.
            </ListItem>
          </ul>
        </div>
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="rounded-md border bg-transparent"
          >
            Sluiten
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
