import Link from "next/link";
import Circle1Icon from "~/components/icons/circle-1-icon";
import Circle2Icon from "~/components/icons/circle-2-icon";
import Circle3Icon from "~/components/icons/circle-3-icon";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#ffffff] to-[#00ffd0] text-white">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-600 sm:text-[5rem]">
        Het <span className="text-[hsl(310,51%,38%)]">Drie</span>luik
      </h1>
      <div className="flex flex-row items-center justify-center gap-12 px-4 py-16">
        <Link href="/pagina1">
          <div className={`transition-transform duration-500 hover:scale-125`}>
            <Circle1Icon stroke={"#b1b1b1"} height={100} width={100} />
          </div>
        </Link>
        <Link href="/pagina2">
          <div className={`transition-transform duration-500 hover:scale-125`}>
            <Circle2Icon stroke={"#b1b1b1"} height={100} width={100} />
          </div>
        </Link>
        <Link href="/pagina3">
          <div className={`transition-transform duration-500 hover:scale-125`}>
            <Circle3Icon stroke={"#b1b1b1"} height={100} width={100} />
          </div>
        </Link>
      </div>
    </main>
  );
}
