import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import BalansIcon from "~/components/icons/zingeving/balans-icon";

export function Balans() {
  return (
    <Dialog>
      <GameContainer
        icon={<BalansIcon height={72} width={72} />}
        title="Balansspel"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Balansspel
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Wat zijn de voor- en nadelen van gebruik?
          </h3>
        </DialogHeader>
        <div className="mb-4 flex flex-col gap-6 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Hier kan je het voor- en nadelen balans maken. Dit is makkelijk te
            doen op een whiteboard of een velletje papier. Je kan het als volgt
            vormgeven:
          </DialogDescription>
          <div className="mb-4 flex w-full flex-col items-center justify-center">
            <BalansTabel />
          </div>
          <DialogDescription className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Als je dit zorgvuldig uitwerkt kan je daarna de lijsten als volgt
            interpreteren:
          </DialogDescription>
          <ul className="flex flex-col gap-4 px-4">
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              De voordelen lijst bestaat eigenlijk uit een opsomming van de
              functies van het gebruik en leert je dus iets over wat je nog moet
              organiseren of ontkrachten om een stoppoging van een grotere kans
              van slagen te voorzien.
            </li>
            <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              De nadelen lijst bestaat uit een opsomming van wat het allemaal
              oplevert om te stoppen. Dit gaat vaak over gezondheid en geld.
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function BalansTabel() {
  return (
    <div className="relative mt-2 flex h-60 w-full flex-col items-center justify-center lg:my-6 lg:mb-4 lg:h-60 lg:scale-100 lg:px-6">
      <table
        className={`h-full w-full border-collapse border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
      >
        <thead>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              Voordelen
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              Nadelen
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              1.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              1.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              2.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              2.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              3.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              3.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              4.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              4.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              5.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              5.
            </th>
          </tr>
          <tr className="border-2 border-black border-opacity-70">
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              6.
            </th>
            <th className="border-2 border-black border-opacity-70 px-4 text-left">
              6.
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
