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
import { ListItem } from "~/components/ui/list-item";
import GebruikIcon from "~/components/icons/zingeving/gebruik-icon";

export function Gebruiksfunctie() {
  return (
    <Dialog>
      <GameContainer
        icon={<GebruikIcon height={72} width={72} />}
        title="Gebruiksfunctie"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            De functie van gebruik
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
                  Helpen inzien dat gebruik een functie heeft, zoals het
                  vervullen van een behoefte of het vermijden van een probleem.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative mb-4 flex flex-col gap-6 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              1. Introductie van het concept
            </span>{" "}
            Deze oefening richt zich op het begrijpen van de onderliggende
            redenen waarom iemand gebruikt. Het helpt cliënten om het gebruik
            niet alleen als een probleem te zien, maar als een strategie om met
            bepaalde situaties, emoties of behoeften om te gaan. Door de functie
            van gebruik te herkennen, kunnen alternatieve, gezondere strategieën
            worden ontwikkeld.
          </DialogDescription>
          <DialogDescription className="gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Uitleg aan de cliënt: </span>
            “Gebruik is niet zomaar iets dat je doet. Het heeft een reden en
            vervult vaak een belangrijke functie, zoals stress verlichten,
            emoties onderdrukken, of je beter voelen. Als we begrijpen waarom je
            gebruikt, kunnen we manieren vinden om dezelfde functie op een
            andere manier te vervullen.”
          </DialogDescription>
          <DialogDescription className="mt-4 flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">2. De drie hoofdvragen</span> Stel
            deze drie kernvragen om het gesprek te starten:
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              <span className="font-semibold">
                Wat levert het gebruik je op?
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Bespreek wat de cliënt wint of ervaart door te gebruiken.
                  Bijvoorbeeld: ontspanning, ontsnappen aan emoties, plezier,
                  zelfvertrouwen, energie.
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">
                Wat probeer je te vermijden door te gebruiken?
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Onderzoek welke ongemakken, pijnlijke emoties of situaties ze
                  willen vermijden. Bijvoorbeeld: stress, eenzaamheid,
                  verveling, angst.
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">
                Wat zou er gebeuren als je niet zou gebruiken?
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Verken wat de cliënt denkt dat er zou gebeuren als ze zouden
                  stoppen. Dit kan inzicht geven in onderliggende angsten of
                  overtuigingen.
                </ListItem>
              </ul>
            </ListItem>
          </ol>
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">3. Voorbeeld van functies</span>{" "}
            Help de cliënt de mogelijke functies van gebruik te begrijpen. Dit
            kunnen zijn:
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              <span className="font-semibold">Emotieregulatie:</span> Gebruik om
              negatieve emoties te verminderen (stress, angst, verdriet).
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Ontsnappen of vermijden:</span>{" "}
              Gebruik om aan pijnlijke gedachten, herinneringen of situaties te
              ontsnappen.
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Sociale connectie:</span> Gebruik
              om erbij te horen, makkelijker te praten, of sociale angst te
              verminderen.
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Zelfbeeld verbeteren:</span>{" "}
              Gebruik om zich zelfverzekerder of sterker te voelen.
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Fysieke redenen:</span> Gebruik om
              vermoeidheid te verminderen of pijn te verlichten.
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Verveling bestrijden:</span>{" "}
              Gebruik om een gevoel van leegte of doelloosheid te vullen.
            </ListItem>
          </ol>
          <DialogDescription className="mt-4 flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              4. Inzicht in persoonlijke functies
            </span>{" "}
            <span className="font-semibold italic">
              Oefening: De functiekaart
            </span>{" "}
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              <span className="font-semibold">
                Laat de cliënt nadenken over de laatste keer dat ze gebruikten.
                Stel de volgende vragen:
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>“Wat voelde je voordat je gebruikte?”</ListItem>
                <ListItem>“Wat dacht je op dat moment?”</ListItem>
                <ListItem>
                  “Wat hoopte je dat het gebruik zou doen voor je?”{" "}
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">
                Maak samen een tabel met twee kolommen:
              </span>
              <ul className="mt-2 flex list-inside flex-col gap-2">
                <ListItem>
                  <span className="font-semibold">Links:</span> De situatie (wat
                  was er aan de hand?).
                </ListItem>
                <ListItem>
                  <span className="font-semibold">Rechts:</span> De functie (wat
                  hoopte je dat gebruik zou oplossen of opleveren?).
                </ListItem>
              </ul>
            </ListItem>
          </ol>
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold italic">Voorbeeld</span>
          </DialogDescription>
          <div className="relative flex w-full font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <table className="mb-2 border-collapse border border-black text-sm lg:text-base">
              <thead className="p-2">
                <tr className="h-8 pb-4">
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                    Situatie
                  </td>
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                    Functie
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="h-6">
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Ruzie met partner
                  </td>
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Stress verminderen, gedachten uitschakelen
                  </td>
                </tr>
                <tr className="h-auto">
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Verveling op een vrije avond
                  </td>
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Tijd doden, een gevoel van opwinding ervaren
                  </td>
                </tr>
                <tr className="h-auto">
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Zich eenzaam voelen op een feestje{" "}
                  </td>
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Meer zelfvertrouwen krijgen, makkelijker praten
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <DialogDescription className="mt-4 flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">5. Alternatieven verkennen</span>{" "}
            Zodra de functies van gebruik helder zijn, kun je samen zoeken naar
            alternatieven die dezelfde behoefte vervullen.
            <span className="font-semibold italic">
              Oefening: Alternatieve strategieën
            </span>{" "}
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              Neem elke functie die de cliënt heeft genoemd.
            </ListItem>
            <ListItem ordered>
              Brainstorm samen over andere, gezondere manieren om deze behoefte
              te vervullen.
              <ul className="mt-2 flex list-inside flex-col gap-2">
                <ListItem>
                  <span className="font-semibold">Voorbeeld 1:</span> Als
                  gebruik stress vermindert, kunnen ademhalingsoefeningen of
                  lichaamsbeweging een alternatief zijn.
                </ListItem>
                <ListItem>
                  <span className="font-semibold">Voorbeeld 2:</span> Als
                  gebruik eenzaamheid verzacht, kan het opbouwen van sociale
                  contacten of hobby’s proberen helpen.
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              Laat de cliënt drie alternatieve strategieën opschrijven en vraag
              hen een daarvan uit te proberen voor de volgende sessie.
            </ListItem>
          </ol>
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">6. Reflecteren op gevolgen</span>{" "}
            Help de cliënt inzien dat gebruik niet alleen een functie heeft,
            maar ook gevolgen. Dit maakt het makkelijker om te motiveren voor
            verandering.
            <span className="font-semibold italic">
              Oefening: Positieve en negatieve gevolgen
            </span>{" "}
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              Laat de cliënt twee kolommen maken:
              <ul className="mt-2 flex list-inside flex-col gap-2">
                <ListItem>
                  <span className="font-semibold">Links: </span> Wat levert
                  gebruik op? (positieve effecten).
                </ListItem>
                <ListItem>
                  <span className="font-semibold">Rechts: </span> Wat kost
                  gebruik je? (negatieve effecten).
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              Reflecteer op de balans: Wegen de korte-termijn voordelen van
              gebruik op tegen de lange-termijn nadelen?
            </ListItem>
          </ol>
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold italic">Voorbeeld</span>
          </DialogDescription>
          <div className="relative flex w-full font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <table className="mb-2 border-collapse border border-black text-sm lg:text-base">
              <thead className="p-2">
                <tr className="h-8 pb-4">
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                    Voordelen van gebruik
                  </td>
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                    Nadelen van gebruik
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="h-6">
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Vermindert stress direct
                  </td>
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Schaamte en schuldgevoel achteraf{" "}
                  </td>
                </tr>
                <tr className="h-auto">
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Helpt bij sociale situaties{" "}
                  </td>
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Gezondheid gaat achteruit{" "}
                  </td>
                </tr>
                <tr className="h-auto">
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Geeft een gevoel van controle{" "}
                  </td>
                  <td className="text-wrap border border-black p-2 text-start align-top font-sans tracking-[1px] text-[#333333] text-opacity-90">
                    Financiële problemen{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <DialogDescription className="mt-4 flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              7. Dieper graven: wat ligt onder de functie?
            </span>{" "}
            Vaak vervult gebruik niet alleen een oppervlakkige functie, maar
            raakt het diepere, onbewuste thema&apos;s. Stel verdiepende vragen:
          </DialogDescription>
          <ol className="flex list-inside flex-col gap-4">
            <ListItem ordered>
              <span className="font-semibold">
                Welke onvervulde behoefte ligt hieraan ten grondslag?
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Bijvoorbeeld: een behoefte aan veiligheid, liefde, autonomie,
                  of erkenning.
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">
                Hoe kun je deze behoefte op een andere manier vervullen?
              </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Bijvoorbeeld: door relaties te verbeteren, grenzen te leren
                  stellen, of eigen doelen na te streven.
                </ListItem>
              </ul>
            </ListItem>
          </ol>
          <DialogDescription className="mt-4 flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              8. Plan van aanpak: naar gezonde alternatieven{" "}
            </span>{" "}
            Maak een concreet plan op basis van de inzichten die de cliënt heeft
            opgedaan:
          </DialogDescription>
          <ol className="mb-4 flex list-inside flex-col gap-4">
            <ListItem ordered>
              <span className="font-semibold">Korte-termijndoelen:</span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Eén functie van gebruik aanpakken en hier een gezonde
                  strategie voor vinden.
                </ListItem>
                <ListItem>
                  Bijvoorbeeld: In plaats van stress te verlichten met middelen,
                  proberen ze dagelijks 10 minuten ademhalingsoefeningen te
                  doen.{" "}
                </ListItem>
              </ul>
            </ListItem>
            <ListItem ordered>
              <span className="font-semibold">Langetermijndoelen: </span>
              <ul className="my-2 flex list-inside flex-col gap-2">
                <ListItem>
                  Werken aan bredere thema&apos;s zoals zelfbeeld, sociale
                  vaardigheden, of emotieregulatie.
                </ListItem>
              </ul>
            </ListItem>
          </ol>
          <DialogDescription className="flex flex-col gap-4 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">9. Follow-up en Evaluatie</span>{" "}
          </DialogDescription>
          <ul className="mb-4 flex list-inside flex-col gap-4">
            <ListItem>
              Vraag in een volgende sessie hoe het is gegaan met het herkennen
              van de functie van gebruik en het toepassen van alternatieven.
            </ListItem>
            <ListItem>Bespreek succesmomenten en obstakels.</ListItem>
            <ListItem>
              Moedig hen aan om door te gaan met het ontdekken van nieuwe,
              gezonde strategieën.{" "}
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
