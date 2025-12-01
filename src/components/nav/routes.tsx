export const middelenRoutes = [
  { href: "/middelen/cannabis", name: "Cannabis", icon: <></> },
  { href: "/middelen/cocaine", name: "Cocaine", icon: <></> },
  { href: "/middelen/alcohol", name: "Alcohol", icon: <></> },
  { href: "/middelen/ketamine", name: "Ketamine", icon: <></> },
  { href: "/middelen/ghb", name: "GHB", icon: <></> },
  { href: "/middelen/speed", name: "Speed", icon: <></> },
  { href: "/middelen/opiaten", name: "Heroine & andere opiaten", icon: <></> },
  { href: "/middelen/lachgas", name: "Lachgas", icon: <></> },
  {
    href: "/middelen/psychedelica",
    name: "Psychedelica & designerdrugs",
    icon: <></>,
  },
  {
    href: "/middelen/gedragsverslavingen",
    name: "Gedragsverslavingen",
    icon: <></>,
  },
  { href: "/middelen/benzodiazepines", name: "Benzodiazepines", icon: <></> },
  { href: "/middelen/roken", name: "Roken", icon: <></> },
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
