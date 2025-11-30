import Link from "next/link";
import BulletIcon from "../icons/bullet-icon";

export const NavSubLink = ({
  href,
  title,
  closeMenu,
  isActive = false,
}: {
  href: string;
  title: string;
  closeMenu: () => void;
  isActive?: boolean;
}) => {
  function handleClick() {
    closeMenu();
  }

  return (
    <Link href={href} className="w-full">
      <div
        className={`text-md flex w-full cursor-pointer items-center justify-start gap-4 bg-white bg-opacity-20 py-4 pl-4 text-center font-sans tracking-[0.1rem] ${isActive && "text-blue-800"} no-underline opacity-90 hover:bg-white hover:bg-opacity-90 hover:text-black hover:text-opacity-100`}
      >
        <BulletIcon height={8} width={8} />
        <button onClick={handleClick}>{title}</button>
      </div>
    </Link>
  );
};
