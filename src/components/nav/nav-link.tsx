import Link from "next/link";

export const NavLink = ({
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
        className={`w-full cursor-pointer border-b py-4 pl-4 font-sans text-[1.1rem] tracking-[0.1rem] no-underline ${isActive && "text-blue-800"} opacity-90 hover:bg-white hover:bg-opacity-90 hover:text-black hover:text-opacity-100`}
      >
        <button onClick={handleClick}>{title}</button>
      </div>
    </Link>
  );
};
