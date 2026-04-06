import AlcoholIcon from "~/components/icons/middelen/liquor.svg";
import BehaviourIcon from "~/components/icons/middelen/casino.svg";
import BenzosIcon from "~/components/icons/middelen/pills-bottle.svg";
import CannabisIcon from "~/components/icons/middelen/joint.svg";
import CocaineIcon from "~/components/icons/middelen/cocaine.svg";
import FlakkaIcon from "~/components/icons/middelen/crystal-meth.svg";
import GHBIcon from "~/components/icons/middelen/ghb.svg";
import HeroineIcon from "~/components/icons/middelen/heroin.svg";
import KetamineIcon from "~/components/icons/middelen/sniffing-colored.svg";
import NicotineIcon from "~/components/icons/middelen/cigarette.svg";
import PartydrugsIcon from "~/components/icons/middelen/mdma.svg";
import SpeedIcon from "~/components/icons/middelen/powder-bag.svg";

export const middelenRoutes = [
  {
    href: "/middelen/alcohol",
    name: "Alcohol",
    icon: <AlcoholIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/benzodiazepines",
    name: "Benzodiazepines",
    icon: <BenzosIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/cannabis",
    name: "Cannabis",
    icon: <CannabisIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/cocaine",
    name: "Cocaine",
    icon: <CocaineIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/flakka",
    name: "Flakka",
    icon: <FlakkaIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/gedragsverslavingen",
    name: "Gedragsverslavingen",
    icon: <BehaviourIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/ghb",
    name: "GHB",
    icon: <GHBIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/opiaten",
    name: "Heroine & andere opiaten",
    icon: <HeroineIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/ketamine",
    name: "Ketamine",
    icon: <KetamineIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/partydrugs-en-trends",
    name: "Partydrugs & trends",
    icon: <PartydrugsIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/roken",
    name: "Roken",
    icon: <NicotineIcon className="h-full w-full" />,
  },
  {
    href: "/middelen/speed",
    name: "Speed",
    icon: <SpeedIcon className="h-full w-full" />,
  },
] as const;

const subMenu = [
  {
    name: "Middelen",
    key: "nav-middelen",
    parentRoute: "/middelen",
    routes: middelenRoutes,
  },
  // { name: "Craving", key: "nav-craving", parentRoute: "/craving", routes: [] },
  // {
  //   name: "Zingeving",
  //   key: "nav-zingeving",
  //   parentRoute: "/zingeving",
  //   routes: [],
  // },
] as const;

export const navMenuRoutes = [
  { type: "route", href: "/", name: "Home" },
  {
    type: "submenu",
    routeTree: subMenu,
  },
  { type: "route", href: "/craving", name: "Craving" },
  { type: "route", href: "/zingeving", name: "Zingeving" },
  { type: "route", href: "/missie-en-visie", name: "Missie & Visie" },
  { type: "route", href: "/contact", name: "Contact" },
  { type: "route", href: "/meet-instrument", name: "Meet instrument" },
] as const;

export type NavMenuRoutes = typeof navMenuRoutes;
export type SubMenuRoutes = typeof subMenu;
