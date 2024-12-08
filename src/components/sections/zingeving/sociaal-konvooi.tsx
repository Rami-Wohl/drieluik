import SociaalKonvooiIcon from "~/components/icons/zingeving/sociaal-konvooi-icon";
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

export function SociaalKonvooi() {
  return (
    <Dialog>
      <GameContainer
        icon={<SociaalKonvooiIcon height={72} width={72} />}
        title="Sociaal Konvooi"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Sociaal Konvooi
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Wie heb je momenteel in je omgeving en hoe goed werkt dat?
          </h3>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-6 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="flex flex-col gap-6 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Voor dit onderdeel kan je beginnen met het invullen van het sociaal
            konvooi (zie figuur hieronder). Bij deze oefening zet je jezelf
            centraal en teken je daar drie lagen omheen en deze lagen nummer je
            van binnen naar buiten. Vervolgens noem je iedereen die je in je
            leven hebt en plaatst deze vervolgens in één van de cirkels. Hoe
            groter de rol van de persoon is, hoe dichter je deze bij de
            binnenste cirkel plaatst.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-6 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Na deze oefening kan je gaan kijken of iedereen op een gunstige plek
            staat, of dat er eventueel geschoven kan worden. Dit betekent in de
            praktijk dat de persoon in kwestie kan gaan investeren in bepaalde
            relaties, of mensen juist meer op afstand kan houden die geen goede
            invloed hebben.
          </DialogDescription>
          <div className="mb-4 flex w-full flex-col items-center justify-center">
            <SociaalKonvooiCirkels />
          </div>
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

function SociaalKonvooiCirkels() {
  return (
    <div className="relative mb-4 mt-2 flex h-60 w-full max-w-[400px] scale-75 flex-col items-center justify-center lg:my-12 lg:h-60 lg:scale-100">
      <div
        className={`absolute z-50 flex h-80 w-80 flex-col justify-start rounded-full border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        3.
      </div>
      <div
        className={`absolute z-50 flex h-60 w-60 flex-col justify-start rounded-full border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        2.
      </div>
      <div
        className={`absolute z-50 flex h-40 w-40 flex-col justify-start rounded-full border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        1.
      </div>
      <div
        className={`absolute z-50 flex h-20 w-20 flex-col justify-center rounded-full border-2 border-black border-opacity-70 bg-slate-300 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        IK
      </div>
    </div>
  );
}
