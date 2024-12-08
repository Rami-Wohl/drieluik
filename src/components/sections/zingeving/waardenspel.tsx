import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import WaardenspelIcon from "~/components/icons/zingeving/waardenspel-icon";
import Link from "next/link";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "~/components/ui/button";

export function Waardenspel() {
  return (
    <Dialog>
      <GameContainer
        icon={<WaardenspelIcon height={72} width={72} />}
        title="Waardenspel"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Waardenspel
          </DialogTitle>
        </DialogHeader>
        <div className="my-2 flex flex-col gap-4 lg:px-4">
          <h3 className="w-full text-center font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Spelvorm 1
          </h3>
          <table className="mb-2">
            <tbody>
              <tr className="h-auto">
                <td className="text-wrap pr-2 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Titel:
                </td>
                <td className="text-wrap text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  &quot;De Waardenpiramide&quot;
                </td>
              </tr>
              <tr className="h-auto">
                <td className="text-wrap pr-2 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Patiënten laten nadenken over wat zij belangrijk vinden en hoe
                  zij hun keuzes prioriteren, met als einddoel hun &quot;Top 5
                  Waarden&quot; in kaart te brengen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-4 flex flex-col gap-6 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Voorbereiding:</span>{" "}
            <span>
              Knip of print elk van de waarden op een aparte kaart. Een lijst
              met alle waarden vind je{" "}
              <Link
                href={"/waardenlijst"}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-blue-600 underline underline-offset-1"
              >
                hier
              </Link>
              .
            </span>
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Ronde 1: </span>Geef de cliënt een
            stapel van alle 50 waarden. Vraag om eerst 25 waarden te selecteren
            die op dit moment het belangrijkste zijn.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Ronde 2: </span>Vraag om de stapel
            van 25 waarden verder te verkleinen tot 10 kernwaarden. Bespreek
            eventueel kort waarom bepaalde waarden worden gekozen en anderen
            niet.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Ronde 3:</span>Nu moet er gekozen
            worden uit deze 10 waarden en kom je uit op de &quot;Top 5
            Waarden&quot;. Bespreking: Bespreek deze &quot;Top 5&quot; met de
            cliënt. Laat de cliënt nadenken over hoe deze waarden in hun leven
            passen en hoe deze hen kunnen ondersteunen in hun herstel.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Variatieopties:</span>
            <span>
              <span className="italic">Scenariokoppeling:</span> Maak
              scenario&apos;s waarbij elke waarde wordt toegepast in een
              situatie (bijv. &apos;Je beste vriend vraagt je om hulp, maar je
              hebt een zware dag gehad. Welke waarden komen hierbij
              kijken?&apos;).{" "}
            </span>
            <span>
              <span className="italic">Reflectiekaarten:</span> Gebruik
              reflectievragen die de cliënten uitdagen om te denken over wat
              deze waarde betekent in hun leven, zoals &quot;Wanneer voelde je
              dat deze waarde echt belangrijk voor je was?&quot; of &quot;Hoe
              helpt deze waarde je in moeilijke tijden?&quot;
            </span>{" "}
          </DialogDescription>
        </div>
        <Separator className="my-4 border-b-2 border-black border-opacity-30" />
        <div className="my-2 flex flex-col gap-4 lg:px-4">
          <h3 className="w-full text-center font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Spelvorm 2
          </h3>
          <table className="mb-2">
            <tbody>
              <tr className="h-auto">
                <td className="text-wrap pr-2 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Titel:
                </td>
                <td className="text-wrap text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  &quot;Waarden Tijdlijn&quot;
                </td>
              </tr>
              <tr className="h-auto">
                <td className="text-wrap pr-2 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Inzicht geven in hoe waarden veranderen door de tijd, en welke
                  waarden de patiënt kan meenemen naar de toekomst om hen te
                  ondersteunen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-6 flex flex-col gap-6 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Benodigdheden: </span>
            Een groot vel papier (of whiteboard) en stiften. Drie gekleurde
            post-its voor drie tijdsperiodes: Verleden, Heden en Toekomst.
            Post-its voor de waarden.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Voorbereiding: </span>
            <span>
              <span className="italic">Tijdlijn maken:</span> Teken een
              horizontale lijn op het papier en label drie punten op de tijdlijn
              met Verleden, Heden, en Toekomst.
            </span>
            <span>
              <span className="italic">Waarden kiezen:</span> Vraag de patiënt
              om uit een lijst ongeveer 15 waarden te kiezen die hen aanspreken.
              Deze lijst vind je{" "}
              <Link
                href={"/waardenlijst"}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-blue-600 underline underline-offset-1"
              >
                hier
              </Link>
              . Schrijf elke waarde op een aparte kaart of post-it.
            </span>{" "}
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Waarden toewijzen:</span> Geef de
            patiënt de taak om de waardenkaarten te verdelen over de drie
            tijdsperiodes.
            <span>
              <br />
              <span className="italic">Verleden:</span> Vraag de patiënt welke
              waarden in hun verleden belangrijk waren en hen hebben beïnvloed.
            </span>
            <span>
              <span className="italic">Heden: </span> Vraag hen welke waarden
              momenteel belangrijk zijn in hun dagelijks leven en herstel.
            </span>
            <span>
              <span className="italic">Toekomst: </span> Vraag hen welke waarden
              zij in de toekomst belangrijk willen maken om hen te ondersteunen
              in hun doelen en welzijn.
              <br />
            </span>
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Reflectievraag per tijdsperiode:{" "}
            </span>{" "}
            Voor elke periode bespreek je de gekozen waarden.
            <span>
              <br /> <span className="italic">Verleden:</span> &quot;Waarom was
              deze waarde destijds belangrijk? Hoe heeft die jou gevormd?&quot;
            </span>
            <span>
              <span className="italic">Heden: </span> &quot;Welke rol speelt
              deze waarde nu in jouw leven? Hoe helpt deze jou om je sterk te
              voelen?&quot;
            </span>
            <span>
              <span className="italic">Toekomst: </span> &quot;Wat zou het
              betekenen als je deze waarde meer centraal zou stellen in je
              leven? Hoe kan deze waarde je helpen in je herstel?&quot;
              <br />
            </span>
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold"> Waarden prioriteren: </span> Nadat
            de patiënt waarden heeft toegewezen aan elk tijdsblok, vraag je hen
            om in elke tijdsperiode de belangrijkste 2-3 waarden te kiezen.{" "}
            <br />
            <span>
              Bespreek hoe deze waarden in hun leven hebben gewerkt, werken of
              kunnen werken.
            </span>
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Afsluiting:</span>
            <span>
              <span className="italic">Samenvatting en doelen:</span> Bespreek
              hoe het verleden hen heeft gevormd, hoe het heden hen helpt om
              keuzes te maken, en hoe de toekomstwaarden hen kunnen helpen om
              hun herstel en persoonlijke groei te ondersteunen.
            </span>
            <span>
              <span className="italic">Actieplan:</span> Vraag of er acties zijn
              die de patiënt wil ondernemen om hun toekomstige waarden te
              integreren in hun dagelijks leven.
            </span>{" "}
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
