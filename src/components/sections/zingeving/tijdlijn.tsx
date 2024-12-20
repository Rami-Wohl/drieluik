import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import TijdlijnIcon from "~/components/icons/zingeving/tijdlijn-icon";
import { Button } from "~/components/ui/button";

export function Tijdlijn() {
  return (
    <Dialog>
      <GameContainer
        icon={<TijdlijnIcon height={72} width={72} />}
        title="Tijdlijn"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Tijdlijn
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Hoe is jouw leven tot nu toe gelopen?
          </h3>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-6 font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Teken een tijdlijn uit waarbij je je focust op gebeurtenissen die
            hebben bijgedragen aan de ontwikkeling tot de persoon die je nu
            bent. begin bij nul en eindig bij het heden. Breek het desnoods op
            in meerdere sessies en geef het ook als huiswerk op. Juist als
            iemand moeite heeft met oude herinneringen ophalen, kan het erg
            helpend zijn om hier de tijd voor te nemen, zien wat het los maakt
            en de tijd te nemen om het allemaal goed te bekijken.
          </DialogDescription>
          <div className="mb-4 flex w-full flex-col items-center justify-center">
            <TijdlijnDiagram />
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

function TijdlijnDiagram() {
  return (
    <div className="relative my-6 mt-2 flex h-28 w-5/6 flex-col items-center justify-center">
      <div className="absolute w-full border-t-4 border-black border-opacity-70" />
      <div className="absolute bottom-1/2 left-0 h-6 border-l-4 border-black border-opacity-70" />
      <div className="absolute right-0 top-1/2 h-6 border-l-4 border-black border-opacity-70" />
      <div className="absolute left-1/3 top-1/2 h-4 border-l-4 border-black border-opacity-70" />
      <div className="absolute bottom-1/2 right-1/3 h-4 border-l-4 border-black border-opacity-70" />
      <div className="absolute -left-8 top-1 h-6 font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
        Geboorte
      </div>
      <div className="absolute -bottom-5 -right-3 h-12 font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
        Nu
      </div>
      <div className="absolute left-[calc(65%-90px)] top-1 h-12 w-full whitespace-nowrap text-nowrap font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
        Positieve gebeurtenissen
      </div>
      <div className="absolute -bottom-5 left-[calc(30%-100px)] h-12 w-full whitespace-nowrap text-nowrap font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
        Negatieve gebeurtenissen
      </div>
    </div>
  );
}
