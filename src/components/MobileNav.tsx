import { usePathname } from "next/navigation";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
interface Props {}

function MobileNav(props: Props) {
  const {} = props;
  const pathName = usePathname();
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "skills",
      path: "/skills",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary">
        <div className="mt-32 mb-20 text-center text-2xl ">
          <Link href="/">
            <h1>
              Krishna<span className="text-accent">⚡</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-6 text-center items-center justify-center">
          {links.map((item, index) => (
            <Link
              key={index}
              className={`${
                pathName === item.path &&
                "text-accent border-b-2  border-emerald-300"
              }text-xl capitalize hover:text-accent transition-all`}
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
