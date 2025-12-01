import useScrollPosition from "~/hooks/use-scroll-position";
import BurgerMenuIcon from "../icons/burgermenu-icon";
import MiddelenIcon from "../icons/middelen-icon";
import CravingIcon from "../icons/craving-icon";
import ZingevingIcon from "../icons/zingeving-icon";
import Link from "next/link";
import { useNavContext } from "~/context/nav-context";

type TopBarProps = {
  path: string;
};

export const TopBar = ({ path }: TopBarProps) => {
  const { mobileMenuHandlerRef, isMobileMenuVisible, setMobileMenuVisible } =
    useNavContext();

  const { isOnTop } = useScrollPosition();
  const hideTopMenu = path === "/";
  const hideNavBar = path === "/waardenlijst";

  return (
    <div
      className={`fixed z-[2] w-full transition-transform duration-500 ease-in-out ${hideNavBar ? "-translate-y-20" : "translate-y-0"}`}
    >
      <div
        className={`relative flex h-[80px] flex-wrap items-center justify-center ${isOnTop ? "bg-backgroundStart" : "bg-backgroundStart"} px-4 py-1`}
      >
        <div ref={mobileMenuHandlerRef}>
          <button
            className="z-10 mr-auto flex h-10 w-10 scale-75 cursor-pointer flex-col justify-around border-none p-0"
            onClick={() => {
              setMobileMenuVisible(!isMobileMenuVisible);
            }}
            tabIndex={1}
          >
            <BurgerMenuIcon stroke={"black"} height={40} width={40} />{" "}
          </button>
        </div>
        <div
          className={`${hideTopMenu ? "-translate-y-20" : "translate-y-0"} absolute flex flex-wrap items-center justify-center transition-transform duration-1000 ease-in-out`}
        >
          <h2 className="flex flex-row gap-6 font-sans text-base text-black text-opacity-80">
            <Link href="/middelen">
              <div
                className={`${path.includes("/middelen") ? "-translate-x-1 scale-125 lg:-translate-x-2 lg:scale-[1.35]" : "translate-x-0 scale-100"} rounded-md border-2 border-red-900 border-opacity-20 bg-red-900 bg-opacity-10 p-2 transition-transform duration-500`}
              >
                <MiddelenIcon height={24} width={24} />
              </div>
            </Link>
            <Link href="/craving">
              <div
                className={`${path.includes("/craving") ? "scale-125 lg:scale-[1.35]" : "scale-100"} rounded-md border-2 border-blue-900 border-opacity-20 bg-blue-900 bg-opacity-10 p-2 transition-transform duration-500`}
              >
                <CravingIcon height={24} width={24} className="fill-blue-950" />
              </div>
            </Link>
            <Link href="/zingeving">
              <div
                className={`${path.includes("/zingeving") ? "translate-x-1 scale-125 lg:translate-x-2 lg:scale-[1.35]" : "translate-x-0 scale-100"} rounded-md border-2 border-green-900 border-opacity-20 bg-green-900 bg-opacity-10 p-2 transition-transform duration-500`}
              >
                <ZingevingIcon height={24} width={24} />
              </div>
            </Link>
          </h2>
        </div>
        <div className="ml-auto flex flex-row items-center"></div>
      </div>
    </div>
  );
};
