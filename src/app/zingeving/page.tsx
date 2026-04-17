import { Balans } from "~/components/sections/zingeving/balans";
import { Dagboek } from "~/components/sections/zingeving/dagboek";
import { Doelenspel } from "~/components/sections/zingeving/doelenspel";
import { Gebruikscyclus } from "~/components/sections/zingeving/gebruikscyclus";
import { Gebruiksfunctie } from "~/components/sections/zingeving/gebruiksfunctie";
import { Kernquadranten } from "~/components/sections/zingeving/kernquadranten";
import { Netwerkcirkel } from "~/components/sections/zingeving/netwerkcirkel";
import { Tijdlijn } from "~/components/sections/zingeving/tijdlijn";
import { Waardenspel } from "~/components/sections/zingeving/waardenspel";
import { Pageheader } from "~/components/ui/pageheader";
import { ZingevingInfo } from "./zingeving-info";

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
            <Netwerkcirkel />
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
