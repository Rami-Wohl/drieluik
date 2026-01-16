"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { middelenRoutes } from "~/components/nav/routes";

const MiddelenNavLink = ({
  name,
  href,
  isActive,
}: {
  name: string;
  href: string;
  isActive: boolean;
}) => {
  return (
    <Link href={href} className="w-full">
      <div
        className={`w-full cursor-pointer border-b py-3 pl-3 font-sans text-[1.1rem] tracking-[0.1rem] no-underline ${isActive && "text-red-900"} rounded-md bg-red-900 bg-opacity-30 p-4 opacity-90 hover:bg-opacity-50`}
      >
        {name}
      </div>
    </Link>
  );
};

const MiddelenNavigation = ({ path }: { path: string }) => {
  return (
    <div className="flex flex-col">
      {middelenRoutes.map(({ name, href }, idx) => {
        return (
          <MiddelenNavLink
            key={idx}
            name={name}
            href={href}
            isActive={path === href}
          />
        );
      })}
    </div>
  );
};

export default function MiddelenLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();

  const showSideNavigation = path !== "/middelen";

  return (
    <div
      className={`relative flex h-full min-h-screen w-full ${showSideNavigation ? "flex-row justify-between" : "flex-col items-center justify-center"}px-10`}
    >
      {children}
      {showSideNavigation && (
        <div className="mt-[228px] hidden w-full max-w-80 grow rounded-md lg:flex">
          <MiddelenNavigation path={path} />
        </div>
      )}
    </div>
  );
}
