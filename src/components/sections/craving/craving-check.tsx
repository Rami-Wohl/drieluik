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

const cravingLevels = [
  {
    text: "Ik denk er niet aan en als het mij aangeboden zou worden zou ik het met gemak af slaan.",
    level: 1,
    color: "bg-green-700",
  },
  {
    text: "Ik denk er niet aan en als het mij aangeboden zou worden zou ik het af slaan.",
    level: 2,
    color: "bg-green-500",
  },
  {
    text: "Ik denk er niet aan en als het mij aangeboden zou worden zou ik het met enige moeite af slaan.",
    level: 3,
    color: "bg-lime-500",
  },
  {
    text: "Ik denk er aan, maar zou het wel kunnen laten staan nu.",
    level: 4,
    color: "bg-lime-400",
  },
  {
    text: "Ik denk er aan, maar zou het met moeite wel kunnen laten staan nu.",
    level: 5,
    color: "bg-[#cfef2e]",
  },
  {
    text: "Ik denk er aan en zou het niet kunnen laten staan als het mij aangeboden werd.",
    level: 6,
    color: "bg-yellow-400",
  },
  {
    text: "Ik heb er best wel trek in, maar kan me nog verzetten.",
    level: 7,
    color: "bg-yellow-500",
  },
  {
    text: "Ik heb er best wel trek in, maar kan me met enige moeite nog verzetten.",
    level: 8,
    color: "bg-[#ef8b2e]",
  },
  {
    text: "Ik heb er heel erg trek in, ik kan me bijna niet meer verzetten.",
    level: 9,
    color: "bg-red-600 bg-opacity-80",
  },
  {
    text: "Ik ga sowieso gebruiken.",
    level: 10,
    color: "bg-red-700",
  },
] as const;

function CravingLevel({
  text,
  level,
  color,
}: {
  text: string;
  level: number;
  color: string;
}) {
  return (
    <div className="relative mb-4 h-fit min-h-8 w-full">
      <div
        className={`${color} absolute -left-4 -top-3 flex h-10 w-10 items-center justify-center rounded-full text-center font-sans text-sm font-bold text-white text-opacity-90 lg:text-base`}
      >
        {level}
      </div>
      <div
        className={`bg-slate-200 p-2 pl-10 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:pl-12 lg:text-base`}
      >
        {text}
      </div>
    </div>
  );
}

export function CravingCheck() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Open de craving check
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Craving Check
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base"></DialogDescription>
        <div className="mb-6 flex flex-col gap-2 lg:px-4">
          {cravingLevels.map((level) => {
            return (
              <CravingLevel
                key={`level-${level.level}`}
                color={level.color}
                level={level.level}
                text={level.text}
              />
            );
          })}
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
