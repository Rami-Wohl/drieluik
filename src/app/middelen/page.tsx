import { middelenRoutes } from "~/components/nav/routes";
import { Pageheader } from "~/components/ui/pageheader";
import { MiddelenLink } from "./middelen-link";
import { MiddelenInfo } from "./middelen-info";

export default function MiddelenPage() {
  return (
    <>
      <div className="relative mt-32 flex w-full max-w-full flex-col items-center justify-center gap-1 px-6 md:max-w-[600px] lg:gap-10">
        <div className="flex items-baseline gap-2 md:gap-4">
          <Pageheader text="Middelen" />
          <MiddelenInfo />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-4 font-sans text-sm text-[#333333] text-opacity-90 lg:text-lg">
            Dit luik gaat over de verschillende middelen. Per middel vind je
            algemene kennis, informatie voor voorlichting en tips voor
            afbouwen.{" "}
          </h2>
          <div className="grid w-fit grid-cols-2 items-center justify-items-center gap-4 md:grid-cols-3 lg:gap-10">
            {middelenRoutes.map((route) => {
              return (
                <MiddelenLink
                  key={route.name}
                  title={route.name}
                  href={route.href}
                  icon={route.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
