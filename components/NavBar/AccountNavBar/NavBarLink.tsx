"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarLink = ({ href, name }: { href: string; name: string }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={` flex py-3 px-2 text-sm font-medium text-grayscale-700 ${
        path === href &&
        "text-success-900 font-semibold border-b-2 border-success-900 "
      } `}
    >
      {name}
    </Link>
  );
};

export default NavBarLink;
