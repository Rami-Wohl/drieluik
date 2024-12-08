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
import { Separator } from "@radix-ui/react-dropdown-menu";
import DagboekIcon from "~/components/icons/zingeving/dagboek-icon";

export function Dagboek() {
  return (
    <Dialog>
      <GameContainer
        icon={<DagboekIcon height={72} width={72} />}
        title="Dagboek"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Dagboek oefening
          </DialogTitle>
        </DialogHeader>
        <div className="my-2 flex flex-col gap-4 lg:px-4">
          <table className="mb-2">
            <tbody>
              <tr className="h-auto">
                <td className="w-6 max-w-fit text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Oefening 1:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  Het experiment
                </td>
              </tr>
              <tr className="h-auto">
                <td className="w-6 max-w-fit text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  Schriftje
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative mb-4 flex flex-col gap-6 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Kies een dag of een periode uit waarop er even niet gebruikt wordt,
            bijvoorbeeld een periode van een week en laat de cliënt een simpel
            logboek bijhouden in een schriftje. Dit is een voorbeeld van een
            format dat aangehouden kan worden:
          </DialogDescription>
          <div className="flex w-full flex-col gap-2 rounded-md border border-black p-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span>Dag:</span>
            <span>
              Tijdstip van piek (openlaten indien niet van toepassing):
            </span>
            <span>
              Omcirkel de mate van craving die je hebt gevoeld vandaag (gaat om
              de piek):
            </span>
            <div className="my-4 flex flex-row justify-center gap-4 lg:gap-6">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <span>Aanleiding: </span>
            <span>Zo ben ik er mee omgegaan:</span>
          </div>
        </div>
        <Separator className="my-4 border-b-2 border-black border-opacity-30" />
        <div className="my-2 flex flex-col gap-4 lg:px-4">
          <table className="mb-2">
            <tbody>
              <tr className="h-auto">
                <td className="w-6 max-w-fit text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Oefening 2:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  Mindful gebruiken
                </td>
              </tr>
              <tr className="h-auto">
                <td className="w-6 max-w-fit text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  Schriftje
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative mb-4 flex flex-col gap-6 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Registreer ieder moment dat je hebt gebruikt. Je kan gebruik maken
            van het volgende format:
          </DialogDescription>
          <div className="flex w-full flex-col gap-2 rounded-md border border-black p-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span>Dag:</span>
            <span>Tijdstip:</span>
            <span>Middel:</span>
            <span>Aanleiding: </span>
            <span>Hoe ik mij achteraf voelde:</span>
          </div>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Bespreek achteraf de registraties en bepaal of het wel of niet
            voortgezet moet worden.
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
