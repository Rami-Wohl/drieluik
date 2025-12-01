import Link from "next/link";
import { middelenRoutes } from "~/components/nav/routes";
import { Pageheader } from "~/components/ui/pageheader";

type MiddelenLinkProps = {
  href: string;
  icon?: JSX.Element;
  title: string;
};

const MiddelenLink = ({ title, href, icon }: MiddelenLinkProps) => {
  return (
    <Link
      href={href}
      className="flex h-36 w-36 cursor-pointer flex-col items-center justify-between rounded-md border-4 border-red-900 border-opacity-20 bg-red-900 bg-opacity-10 py-3 hover:bg-opacity-20 hover:shadow-sm lg:h-40 lg:w-44"
    >
      <span className="lg:text-md max-w-full overflow-hidden text-wrap px-2 text-center text-sm font-semibold tracking-[0.5px] text-[#333333] text-opacity-90">
        {title}
      </span>
      {icon}
    </Link>
  );
};
export default function MiddelenPage() {
  return (
    <>
      <div className="relative mt-32 flex w-full max-w-full flex-col items-center justify-center gap-1 px-6 md:max-w-[600px] lg:gap-10">
        <Pageheader text="Middelen" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-4 font-sans text-sm text-[#333333] text-opacity-90 lg:text-lg">
            Dit luik gaat over de verschillende middelen. Per middel vind je
            algemene kennis, informatie voor voorlichting en tips voor afbouwen.{" "}
          </h2>
          <div className="grid w-fit grid-cols-2 items-center justify-items-center gap-4 md:grid-cols-3 lg:gap-10">
            {middelenRoutes.map((route) => {
              return (
                <MiddelenLink
                  key={route.name}
                  title={route.name}
                  href={route.href}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
