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
import { ListItem } from "~/components/ui/list-item";

export function OntspanningsOefening1() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Basis ontspanningsoefening
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Basis ontspanningsoefening
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
            </tbody>
          </table>
          <DialogDescription className="flex flex-col font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 1: Houding en ademhaling
            </span>{" "}
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            {" "}
            <ListItem>
              Ga recht op je stoel zitten met je rug tegen de stoelleuning en je
              voeten plat op de grond{" "}
            </ListItem>
            <ListItem>Leg je handen plat op je schoot neer</ListItem>
            <ListItem>Sluit je ogen </ListItem>
            <ListItem>Haal een keer diep adem </ListItem>
            <ListItem>Hou je adem even vast </ListItem>
            <ListItem>Adem goed uit </ListItem>
            <ListItem>Neem een rustig adem ritme aan</ListItem>
          </ul>
          <DialogDescription className="flex flex-col font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 2: Laat spanning uit het lichaam
            </span>{" "}
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            {" "}
            <ListItem>
              Stel je een bal van licht voor in het centrum van je lichaam{" "}
            </ListItem>
            <ListItem>
              Stel je voor dat iedere keer dat je uitademt, de bal groeit
            </ListItem>
            <ListItem>
              Stel je voor dat iedere keer dat de bal groeit, het licht de
              spanning uit je lijf verdrijft{" "}
            </ListItem>
          </ul>
          <DialogDescription className="flex flex-col font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 3: Begin met verbeelden
            </span>{" "}
          </DialogDescription>
          <ul className="flex flex-col gap-3 px-4">
            <ListItem>
              Ga naar een prettige ruimte (bijvoorbeeld een park, het strand of
              je eigen slaapkamer)
            </ListItem>
            <ListItem>Ga daar op een rustige plek zitten</ListItem>
            <ListItem>
              Begin de details in je op te nemen (omschrijf je exacte omgeving)
            </ListItem>
            <ListItem>Breng meer rust aan in je omgeving</ListItem>
            <ListItem>
              Breng zintuiglijke belevingen tot stand (voel de wind, de zon,
              ruik het gras etc.)
            </ListItem>
            <ListItem>
              In een later stadium kan je nog events toevoegen zoals iemand
              naast de persoon laten zitten.
            </ListItem>
          </ul>
        </div>
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="rounded-md border bg-backgroundStart bg-opacity-90"
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
          Aarden en loslaten
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Aarden en loslaten
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
            Neem even de tijd om het jezelf comfortabel te maken. Je kunt zitten
            op een stoel of liggen, wat voor jou het prettigst voelt. Als je
            zit, laat je voeten dan rustig op de grond rusten. Laat je handen
            ontspannen op je schoot of naast je lichaam liggen. Als je ligt,
            voel hoe je lichaam wordt gedragen door wat er onder je is.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Je hoeft nu niets te doen, nergens naartoe. Alles wat je bezighoudt
            mag je voor dit moment laten liggen. Alsof je het zachtjes van je af
            laat glijden, naar de grond onder je.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Breng je aandacht naar je ademhaling. Adem rustig in door je neus…
            en adem langzaam uit door je mond.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Nog een keer. Adem in… en adem uit.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Bij elke uitademing mag je je voorstellen dat spanning, onrust of
            gedachten zwaar worden en naar beneden zakken. De grond vangt het
            op. Jij hoeft het niet vast te houden.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Richt nu je aandacht op de plekken waar je lichaam contact maakt. Je
            voeten op de vloer. Je benen, je rug, je schouders tegen de stoel of
            het bed.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Voel hoe dat contact steun geeft. Alsof je gedragen wordt. Je hoeft
            jezelf niet overeind te houden. De grond doet dat voor je.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Blijf hier even bij. Adem rustig door, en merk op hoe stabiel dit
            voelt.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Stel je nu voor dat er vanuit je voeten, of vanuit het contactpunt
            van je lichaam met de grond, wortels groeien.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Zoals bij een boom. Deze wortels groeien langzaam, diep de aarde in.
            Stevig. Betrouwbaar.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Alles wat te veel is, alles wat spanning geeft, mag via die wortels
            wegstromen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Bij elke uitademing laat je los. De aarde neemt het van je over.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            En bij elke inademing voel je hoe je steviger wordt. Meer aanwezig.
            Meer hier.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Neem nog een paar rustige ademhalingen. Voel hoe je lichaam zwaarder
            mag worden, en tegelijk lichter van binnen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Blijf nog even bij dit gevoel van rust. Van steun. Van veiligheid.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Er is niets dat je hoeft te bereiken. Je mag gewoon zijn.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            En wanneer je merkt dat het moment daar is, breng dan langzaam je
            aandacht terug naar de ruimte om je heen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Merk de geluiden op. De temperatuur. Je ademhaling zoals die nu
            vanzelf gaat.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Beweeg zachtjes je vingers en je tenen. Misschien wil je je even
            uitrekken.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            En als je er klaar voor bent, open je rustig je ogen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Neem een moment om op te merken hoe je je nu voelt. Er is geen goed
            of fout. Alles wat je ervaart is welkom.
          </DialogDescription>
        </div>
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="rounded-md border bg-backgroundStart bg-opacity-90"
          >
            Sluiten
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
