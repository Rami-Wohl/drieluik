import { Balans } from "~/components/sections/zingeving/balans";
import { Doelenspel } from "~/components/sections/zingeving/doelenspel";
import { Kernquadranten } from "~/components/sections/zingeving/kernquadranten";
import { SociaalKonvooi } from "~/components/sections/zingeving/sociaal-konvooi";
import { Tijdslijn } from "~/components/sections/zingeving/tijdslijn";
import { Waardenspel } from "~/components/sections/zingeving/waardenspel";
import { Pageheader } from "~/components/ui/pageheader";

export default function ZingevingPage() {
  return (
    <>
      <div className="relative mt-32 flex w-full max-w-full flex-col items-center justify-center gap-1 px-6 md:max-w-[600px] lg:gap-10">
        <Pageheader text="Zingeving" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-4 font-sans text-sm text-[#333333] text-opacity-90 lg:text-lg">
            Klik op een oefening om uitleg te krijgen:{" "}
          </h2>
          <div className="grid w-full grid-cols-2 items-center justify-items-center gap-4 md:grid-cols-3 lg:gap-10">
            <Doelenspel />
            <Kernquadranten />
            <SociaalKonvooi />
            <Waardenspel />
            <Tijdslijn />
            <Balans />
          </div>
        </div>
      </div>
    </>
  );
}
