import { type SubMenuRoutes, type NavMenuRoutes } from "./routes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { NavSubLink } from "./nav-sublink";
import { NavLink } from "./nav-link";
import { useNavContext } from "~/context/nav-context";

type NavMenuProps = {
  routeTree: NavMenuRoutes;
  path: string;
};

type SubMenuProps = {
  routeTree: SubMenuRoutes;
  path: string;
};

const SubMenu = ({ routeTree, path }: SubMenuProps) => {
  const { setMobileMenuVisible } = useNavContext();

  return (
    <Accordion type="single" collapsible className="w-full text-black">
      {routeTree.map((subRouteSection) => {
        const sectionIsActive = path.includes(subRouteSection.parentRoute);

        return (
          <AccordionItem value={subRouteSection.key} key={subRouteSection.key}>
            <AccordionTrigger
              className={`flex w-full cursor-pointer items-center justify-between border-none p-4 font-sans text-[1.1rem] tracking-[0.1rem] ${sectionIsActive && "text-blue-800"} no-underline opacity-90 hover:bg-white hover:bg-opacity-90 hover:text-black hover:text-opacity-100`}
            >
              <span>{subRouteSection.name}</span>
            </AccordionTrigger>
            <AccordionContent className="no-scrollbar overflow-y-auto">
              {subRouteSection.routes.map((route, idx) => {
                return (
                  <NavSubLink
                    key={idx}
                    href={route.href}
                    isActive={path === route.href}
                    title={route.name}
                    closeMenu={() => setMobileMenuVisible(false)}
                  />
                );
              })}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export const NavMenu = ({ routeTree, path }: NavMenuProps) => {
  const { setMobileMenuVisible } = useNavContext();

  return (
    <div className="no-scrollbar flex h-full flex-col overflow-y-auto px-2 pb-10 pt-[80px]">
      {routeTree.map((menuItem, idx) => {
        if (menuItem.type === "route") {
          return (
            <NavLink
              key={idx}
              href={menuItem.href}
              title={menuItem.name}
              closeMenu={() => setMobileMenuVisible(false)}
            />
          );
        }

        if (menuItem.type === "submenu") {
          return (
            <SubMenu routeTree={menuItem.routeTree} path={path} key={idx} />
          );
        }
      })}
    </div>
  );
};
