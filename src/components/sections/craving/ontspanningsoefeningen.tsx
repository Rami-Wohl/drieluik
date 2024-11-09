import { Button } from "~/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "~/components/ui/dialog";

export function OntspanningsOefening1() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Basis Ontspanningsoefening
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Basis Ontspanningsoefening
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-8 lg:px-4">
          <table className="mb-2">
            <tbody>
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Duur:
                </td>
                <td className="w-full text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  20-25 minuten
                </td>
              </tr>
              {/* <tr className="h-auto">
                  <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                    Doel:
                  </td>
                  <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                    Helpen om controle over aandacht en focus te krijgen, impulsen
                    te herkennen, en afstand te nemen van onmiddellijke
                    verlangens.
                  </td>
                </tr> */}
            </tbody>
          </table>
          <DialogDescription className="flex flex-col font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 1: Houding en ademhaling
            </span>{" "}
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            {" "}
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Ga recht op je stoel zitten met je rug tegen de stoelleuning en je
              voeten plat op de grond{" "}
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Leg je handen plat op je schoot neer
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Sluit je ogen{" "}
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Haal een keer diep adem{" "}
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Hou je adem even vast{" "}
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Adem goed uit{" "}
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Neem een rustig adem ritme aan
            </li>
          </ul>
          <DialogDescription className="flex flex-col font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 2: Laat spanning uit het lichaam
            </span>{" "}
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            {" "}
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Stel je een bal van licht voor in het centrum van je lichaam{" "}
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Stel je voor dat iedere keer dat je uitademt, de bal groeit
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Stel je voor dat iedere keer dat de bal groeit, het licht de
              spanning uit je lijf verdrijft{" "}
            </li>
          </ul>
          <DialogDescription className="flex flex-col font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 3: Begin met verbeelden
            </span>{" "}
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              ⁠Ga naar een prettige ruimte (bijvoorbeeld een park, het strand of
              je eigen slaapkamer)
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Ga daar op een rustige plek zitten
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Begin de details in je op te nemen (omschrijf je exacte omgeving)
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Breng meer rust aan in je omgeving
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              Breng zintuiglijke belevingen tot stand (voel de wind, de zon,
              ruik het gras etc.)
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              In een later stadium kan je nog events toevoegen zoals iemand
              naast de persoon laten zitten.
            </li>
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

//TODO
export function OntspanningsOefening2() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Loslaten en aarden
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Loslaten en aarden
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-8 lg:px-4">
          <table className="mb-2">
            <tbody>
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Duur:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  10-15 minuten
                </td>
              </tr>
              <tr className="h-auto">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  Deze oefening helpt de patiënt om zich meer geaard te voelen
                  en los te laten wat spanning en zorgen veroorzaakt. Door de
                  aandacht te richten op het lichaam en het contact met de
                  grond, kan het gevoel van kalmte en stabiliteit toenemen.
                </td>
              </tr>
            </tbody>
          </table>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 1: Introductie en Settelen{" "}
            </span>
            Vraag de patiënt om zich comfortabel te maken, zittend op een stoel
            of liggend, met voeten of lichaam ontspannen op de grond. Leg uit
            dat ze tijdens deze oefening hun zorgen, spanning of gedachten
            kunnen 'laten vallen' en zich verbonden kunnen voelen met de grond
            onder hen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 2: Aarden door ademhaling{" "}
            </span>
            Vraag de patiënt om een paar keer rustig door de neus in te ademen
            en door de mond uit te ademen. Laat hen bij elke uitademing
            voorstellen dat ze hun spanning naar de grond laten zakken. Zeg
            bijvoorbeeld: “Adem diep in, voel hoe frisse lucht je lichaam vult,
            en adem uit, alsof je gedachten en zorgen van je af laat vallen in
            de aarde onder je.”
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 3: Voelen van het contact met de grond
            </span>
            Vraag de patiënt om aandacht te geven aan de plekken waar hun
            lichaam de stoel, de vloer, of het bed raakt. Moedig hen aan om het
            gevoel van stabiliteit en steun op te merken, alsof de grond hen
            draagt. Laat hen enkele ademhalingen nemen met de focus op dit
            contactpunt, zodat ze zich meer geaard voelen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 4: Visualisatie van 'wortels'{" "}
            </span>
            Vraag de patiënt om zich voor te stellen dat ze als een boom wortels
            vanuit hun voeten of lichaam laten groeien, diep de aarde in. Deze
            'wortels' nemen alle spanning en stress mee, die ze via de grond
            laten wegstromen. Vraag hen om te voelen hoe elke uitademing
            spanning loslaat in de aarde en hoe ze zich stabieler en lichter
            voelen bij elke ademhaling.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 5: Rust en Overgave aan het moment{" "}
            </span>
            Moedig de patiënt aan om de rust te voelen die in hun lichaam en
            geest is ontstaan. Vraag hen om zich nog even helemaal over te geven
            aan het moment, de warmte of het gewicht van hun lichaam tegen de
            grond te voelen en zich over te geven aan dat gevoel van veiligheid
            en stabiliteit.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 6: Terugkeer naar het hier en nu
            </span>
            Laat hen langzaam hun aandacht terugbrengen naar de kamer, de
            geluiden om hen heen, en hun ademhaling. Moedig hen aan om enkele
            keren diep adem te halen, zachtjes hun tenen en vingers te bewegen,
            en, als ze er klaar voor zijn, hun ogen weer te openen. Vraag de
            patiënt hoe ze zich voelen en bespreek indien gewenst kort hun
            ervaring.
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
