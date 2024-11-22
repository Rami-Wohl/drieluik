import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "~/components/ui/dialog";
import { ListItem } from "~/components/ui/list-item";

export function VerbeeldingsOefening1() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          De torenreis: Een visualisatie van keuzes en betekenis
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            De torenreis: Een visualisatie van keuzes en betekenis
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-8 lg:px-4">
          <table className="mb-4 mt-2">
            <tbody>
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:w-64">
                  Duur totaal:
                </td>
                <td className="text-wrap text-start align-bottom font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  45-60 minuten
                </td>
              </tr>
              <tr className="h-2" />
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:w-64">
                  Introductie en uitleg:{" "}
                </td>
                <td className="text-wrap text-start align-bottom font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  5-10 minuten
                </td>
              </tr>
              <tr className="h-2" />
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:w-64">
                  Visualisatie:{" "}
                </td>
                <td className="text-wrap text-start align-bottom font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  20-30 minuten
                </td>
              </tr>
              <tr className="h-2" />
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:w-64">
                  Nabespreking en afronding:{" "}
                </td>
                <td className="text-wrap text-start align-bottom font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  15-20 minuten
                </td>
              </tr>
            </tbody>
          </table>
          <table className="mb-2">
            <tbody>
              <tr className="h-auto">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doelen:
                </td>
              </tr>
              <tr className="h-2" />
              <tr className="h-auto">
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  <span className="font-semibold">
                    Inzicht in keuzes en verlangens:
                  </span>{" "}
                  De cliënt wordt begeleid in het herkennen van symboliek in
                  zijn/haar eigen gedachten en gevoelens rondom middelengebruik
                  en alternatieve paden.
                </td>
              </tr>
              <tr className="h-2" />
              <tr className="h-auto">
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  <span className="font-semibold">Zelfreflectie:</span>{" "}
                  Begrijpen wat prikkels en omgevingen betekenen en hoe ze het
                  eigen gedrag beïnvloeden.
                </td>
              </tr>
              <tr className="h-2" />
              <tr className="h-auto">
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  <span className="font-semibold">Keuzemoment creëren: </span>{" "}
                  Cliënten laten nadenken over hun eigen waarden en wensen voor
                  de toekomst.
                </td>
              </tr>
            </tbody>
          </table>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Stap 1:</span> Introductie (5-10
            minuten)
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            <ListItem>
              Leg uit dat de oefening een reis in gedachten is die helpt om
              keuzes en gevoelens beter te begrijpen. Benadruk dat alles wat de
              cliënt zich voorstelt persoonlijk is en geen &quot;goed&quot; of
              &quot;fout&quot; kent.
            </ListItem>
            <ListItem>
              Vraag de cliënt om comfortabel te zitten of liggen, met gesloten
              ogen (indien ze zich hier prettig bij voelen).{" "}
            </ListItem>
            <ListItem>
              Laat de cliënt focussen op de ademhaling: rustig inademen door de
              neus, en uitademen door de mond.
            </ListItem>
          </ul>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Stap 2:</span> Beginpunt: Het strand
            (5 minuten)
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            <ListItem>
              Leid de cliënt naar een rustig strand in gedachten. Beschrijf de
              omgeving in detail:
              <ul className="my-2 flex flex-col gap-3 px-4">
                <ListItem>Het geluid van golven die zachtjes breken.</ListItem>
                <ListItem>Het gevoel van warm zand onder de voeten.</ListItem>
                <ListItem>De geur van zout water in de lucht.</ListItem>
              </ul>
            </ListItem>
            <ListItem>
              Vraag de cliënt wat hij/zij ziet, hoort en voelt op dit strand.
              Laat korte antwoorden toe, maar focus vooral op hun beleving.
            </ListItem>
          </ul>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Stap 3:</span> De wandeling naar het
            dorp (5 minuten)
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            <ListItem>
              Beschrijf hoe de cliënt begint te lopen, weg van het strand en
              richting een pad dat naar een dorp leidt.
              <ul className="my-2 flex flex-col gap-3 px-4">
                <ListItem>
                  &quot;De omgeving verandert. Je hoort langzaam andere
                  geluiden: stemmen, marktkramen, een klok in de verte.&quot;{" "}
                </ListItem>
                <ListItem>
                  Vraag de cliënt wat hij/zij opmerkt tijdens deze overgang: hoe
                  voelt het om van rust naar een drukker gebied te gaan? Zijn er
                  dingen die opvallen of ongemakkelijk voelen?{" "}
                </ListItem>
              </ul>
            </ListItem>
            <ListItem>
              Laat hen de drukte omschrijven en hoe het dorp op hen overkomt.
            </ListItem>
          </ul>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Stap 4:</span> De toren beklimmen (5
            minuten)
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            <ListItem>
              Beschrijf een toren in het midden van het dorp. Vraag de cliënt om
              naar binnen te gaan en omhoog te klimmen.
              <ul className="my-2 flex flex-col gap-3 px-4">
                <ListItem>
                  &quot;De trappen kraken een beetje, maar je voelt jezelf
                  krachtig bij elke stap die je zet. &quot;{" "}
                </ListItem>
              </ul>
            </ListItem>
            <ListItem>
              Zodra ze bovenop de toren zijn, vraag hoe het voelt om hier te
              staan: hoog boven alles, met uitzicht over het landschap.
            </ListItem>
          </ul>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Stap 5:</span> De prikkel en
            reflectie (10 minuten)
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            <ListItem>
              Introduceer een middel-gerelateerde prikkel (bijvoorbeeld een
              geur, een herinnering of een object dat met gebruik te maken
              heeft).
              <ul className="my-2 flex flex-col gap-3 px-4">
                <ListItem>
                  Vraag hoe ze zich hierbij voelen: wat gebeurt er in hun
                  lichaam of gedachten?{" "}
                </ListItem>
              </ul>
            </ListItem>
            <ListItem>
              Laat de cliënt daarna langzaam om zich heen kijken. Vraag hen om
              elke kant te omschrijven:
              <ul className="my-2 flex flex-col gap-3 px-4">
                <ListItem>
                  Wat zien ze als ze terugkijken naar het strand? Wat
                  symboliseert dit voor hen?
                </ListItem>
                <ListItem>Wat betekent het dorp, de drukte?</ListItem>
                <ListItem>
                  Wat zien ze nog meer in de verte, en wat roept dat op?
                </ListItem>
              </ul>
            </ListItem>
            <ListItem>
              Bespreek kort wat deze plekken zouden kunnen betekenen in hun
              leven.
            </ListItem>
          </ul>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Stap 6:</span> De keuze (10 minuten)
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            <ListItem>
              Laat de cliënt afdalen uit de toren. Wanneer ze buiten komen,
              mogen ze kiezen waar ze naartoe willen:
              <ul className="my-2 flex flex-col gap-3 px-4">
                <ListItem>Terug naar het strand?</ListItem>
                <ListItem>Naar een ander deel van het dorp?</ListItem>
                <ListItem>Of een nieuw pad ontdekken?</ListItem>
              </ul>
            </ListItem>
            <ListItem>
              Vraag waarom deze keuze is gemaakt en bespreek wat dit betekent:
              welke waarden, verlangens of doelen vertegenwoordigt dit pad?
            </ListItem>
          </ul>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Stap 7:</span> Afronding (5-10
            minuten)
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            <ListItem>
              Leid de cliënt langzaam terug naar het hier en nu door hen te
              laten focussen op hun ademhaling en lichaamsgevoel.
            </ListItem>
            <ListItem>
              Vraag wat de belangrijkste inzichten waren en hoe ze dit willen
              toepassen in hun herstelproces.
            </ListItem>
            <ListItem>
              Bedank hen voor het meedoen en bespreek hoe dit soort
              visualisaties kan helpen bij het maken van keuzes.
            </ListItem>
          </ul>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Tip voor de prikkel:</span> Kies
            iets subtiels dat niet overweldigend is, zoals het noemen van een
            specifieke situatie (een feestje, een plek waar ze ooit gebruikten).
            Stem dit vooraf af op de cliënt om triggers zorgvuldig te hanteren.
          </DialogDescription>
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
