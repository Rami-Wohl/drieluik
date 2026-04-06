import Link from "next/link";

type MiddelenLinkProps = {
  href: string;
  icon: JSX.Element;
  title: string;
};

export const MiddelenLink = ({ title, href, icon }: MiddelenLinkProps) => {
  return (
    <Link
      href={href}
      className="flex h-36 w-36 cursor-pointer flex-col items-center justify-between rounded-md border-4 border-red-900 border-opacity-20 bg-red-900 bg-opacity-10 py-3 hover:bg-opacity-20 hover:shadow-sm lg:h-40 lg:w-44"
    >
      <span className="lg:text-md max-w-full overflow-hidden text-wrap px-2 text-center text-sm font-semibold tracking-[0.5px] text-[#333333] text-opacity-90">
        {title}
      </span>
      <div className="h-12 w-12 md:h-16 md:w-16"> {icon}</div>
      <div />
    </Link>
  );
};
