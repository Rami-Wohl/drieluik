export const middelenRoutes = [
  { href: "/middelen/cannabis", name: "Cannabis" },
  { href: "/middelen/cocaine", name: "Cocaine" },
  { href: "/middelen/alcohol", name: "Alcohol" },
  { href: "/middelen/ketamine", name: "Ketamine" },
  { href: "/middelen/ghb", name: "GHB" },
  { href: "/middelen/speed", name: "Speed" },
  { href: "/middelen/opiaten", name: "Heroine & andere opiaten" },
  { href: "/middelen/lachgas", name: "Lachgas" },
  { href: "/middelen/psychedelica", name: "Psychedelica & designerdrugs" },
  { href: "/middelen/gedragsverslavingen", name: "Gedragsverslavingen" },
  { href: "/middelen/benzodiazepines", name: "Benzodiazepines" },
  { href: "/middelen/roken", name: "Roken" },
] as const;

const subMenu = [
  {
    name: "Middelen",
    key: "nav-middelen",
    parentRoute: "/middelen",
    routes: middelenRoutes,
  },
  { name: "Craving", key: "nav-craving", parentRoute: "/craving", routes: [] },
  {
    name: "Zingeving",
    key: "nav-zingeving",
    parentRoute: "/zingeving",
    routes: [],
  },
] as const;

export const navMenuRoutes = [
  { type: "route", href: "/", name: "Home" },
  {
    type: "submenu",
    routeTree: subMenu,
  },
  { type: "route", href: "/missie-en-visie", name: "Missie & Visie" },
  { type: "route", href: "/contact", name: "Contact" },
  { type: "route", href: "meet-instrument", name: "Meet instrument" },
] as const;

export type NavMenuRoutes = typeof navMenuRoutes;
export type SubMenuRoutes = typeof subMenu;
