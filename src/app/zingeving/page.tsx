import InfoIcon from "~/components/icons/info-icon";
import { Balans } from "~/components/sections/zingeving/balans";
import { Dagboek } from "~/components/sections/zingeving/dagboek";
import { Doelenspel } from "~/components/sections/zingeving/doelenspel";
import { Gebruikscyclus } from "~/components/sections/zingeving/gebruikscyclus";
import { Gebruiksfunctie } from "~/components/sections/zingeving/gebruiksfunctie";
import { Kernquadranten } from "~/components/sections/zingeving/kernquadranten";
import { SociaalKonvooi } from "~/components/sections/zingeving/sociaal-konvooi";
import { Tijdlijn } from "~/components/sections/zingeving/tijdlijn";
import { Waardenspel } from "~/components/sections/zingeving/waardenspel";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Pageheader } from "~/components/ui/pageheader";

function ZingevingInfo() {
  return (
    <Dialog>
      <DialogTrigger>
        <InfoIcon fill="none" className="h-5 w-5 md:h-6 md:w-6" />
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[1300px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-80 bg-gradient-to-b from-[#ffffff] to-blue-50">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Info hier
          </DialogTitle>
        </DialogHeader>
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

export default function ZingevingPage() {
  return (
    <>
      <div className="relative mt-32 flex w-full max-w-full flex-col items-center justify-center gap-1 px-6 md:max-w-[600px] lg:gap-10">
        <div className="flex items-baseline gap-2 md:gap-4">
          <Pageheader text="Zingeving" />
          <ZingevingInfo />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-4 font-sans text-sm text-[#333333] text-opacity-90 lg:text-lg">
            Klik op een oefening om uitleg te krijgen:{" "}
          </h2>
          <div className="grid w-full grid-cols-2 items-center justify-items-center gap-4 md:grid-cols-3 lg:gap-10">
            <Doelenspel />
            <Kernquadranten />
            <SociaalKonvooi />
            <Waardenspel />
            <Tijdlijn />
            <Balans />
            <Dagboek />
            <Gebruikscyclus />
            <Gebruiksfunctie />
          </div>
        </div>
      </div>
    </>
  );
}
