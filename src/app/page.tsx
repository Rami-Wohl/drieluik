import Link from "next/link";
import AfbouwenIcon from "~/components/icons/afbouwen-icon";
import CravingIcon from "~/components/icons/craving-icon";
import ZingevingIcon from "~/components/icons/zingeving-icon";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="hidden font-sans text-5xl font-extrabold tracking-tight text-[#333333] sm:text-[5rem] lg:block">
        Het Drieluik
      </h1>
      <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 lg:flex-row">
        <Link href="/afbouwen">
          <div
            className={`flex h-40 w-40 flex-col items-center justify-evenly gap-2 rounded-md border-4 border-red-900 border-opacity-20 bg-red-900 bg-opacity-10 p-4 pt-6 font-sans text-2xl text-red-950 text-opacity-80 shadow-lg transition-transform duration-500 hover:scale-125 lg:h-60 lg:gap-10`}
          >
            <AfbouwenIcon height={64} width={64} />
            <span>Afbouwen</span>
          </div>
        </Link>
        <Link href="/craving">
          <div
            className={`flex h-40 w-40 flex-col items-center justify-evenly gap-2 rounded-md border-4 border-blue-900 border-opacity-20 bg-blue-900 bg-opacity-10 p-4 pt-6 font-sans text-2xl text-blue-950 text-opacity-80 shadow-lg transition-transform duration-500 hover:scale-125 lg:h-60 lg:gap-10`}
          >
            <CravingIcon height={64} width={64} className="fill-blue-950" />
            <span>Craving</span>
          </div>
        </Link>
        <Link href="/zingeving">
          <div
            className={`flex h-40 w-40 flex-col items-center justify-evenly gap-2 rounded-md border-4 border-green-900 border-opacity-20 bg-green-900 bg-opacity-10 p-4 pt-6 font-sans text-2xl text-green-950 text-opacity-80 shadow-lg transition-transform duration-500 hover:scale-125 lg:h-60 lg:gap-10`}
          >
            <ZingevingIcon height={64} width={64} />
            <span>Zingeving</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
