import KernquadrantenIcon from "~/components/icons/zingeving/kernquadranten-icon";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

export function GameContainer({
  icon,
  title,
}: {
  icon: JSX.Element;
  title: string;
}) {
  return (
    <DialogTrigger className="flex h-36 w-36 cursor-pointer flex-col items-center justify-between rounded-md border-4 border-green-900 border-opacity-20 bg-green-900 bg-opacity-10 py-3 hover:bg-opacity-20 hover:shadow-sm lg:h-40 lg:w-44">
      {icon}
      <span className="max-w-full overflow-hidden px-2 text-sm font-semibold tracking-[0.5px] text-[#333333] text-opacity-90 lg:text-lg">
        {title}
      </span>
    </DialogTrigger>
  );
}

export function Kernquadranten() {
  return (
    <Dialog>
      <GameContainer
        icon={<KernquadrantenIcon height={72} width={72} />}
        title="Kernquadranten"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Kernquadranten
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Wat zijn jouw kwaliteiten en uitdagingen?
          </h3>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-6 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Weten waar je talenten liggen is natuurlijk goed voor je zelfbeeld,
            maar helpt ook om uiteindelijk richting te geven aan je doelen. Er
            zijn meerdere oefeningen die je kan doen om dit in kaart te brengen.
            In groepsverband zou je het kwaliteitenspel kunnen inzetten en met
            één gespreken zou je het kernkwadranten model kunnen gebruiken. Die
            werkt als volgt:
          </DialogDescription>
          <div className="mb-4 flex w-full flex-col items-center justify-center">
            <KernquadrantenTabel />
          </div>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Je begint links bovenin met een positieve eigenschap of talent. Een
            vak naar rechts schrijf je op hoe het eruitziet als je te veel van
            die eigenschap laat zien of er in doorslaat. Daaronder (rechtsonder)
            noteer je welke eigenschap je nog in zou kunnen investeren om beter
            om te gaan met je uitdaging. En links daar van (linksonder) komt er
            uit wat er gebeurt als je door zou slaan in die eigenschap (mensen
            die dat van nature laten zien, zitten vaak in je allergie). Je kan
            dus soms ook nieuwe kwaliteiten ontdekken door ergens anders in het
            schema te starten.
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

function KernquadrantenTabel() {
  return (
    <div className="relative mt-2 flex h-60 w-full flex-col items-center justify-center lg:my-6 lg:mb-4 lg:h-60 lg:scale-100 lg:px-6">
      <table
        className={`relative h-full w-full border-collapse border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        <tbody>
          <tr className="w-full border-2 border-black border-opacity-70">
            <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
              Kernkwaliteit
            </th>
            <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
              Valkuil
            </th>
          </tr>
          <tr className="w-full border-2 border-black border-opacity-70">
            <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
              Allergie
            </th>
            <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
              Uitdaging
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
