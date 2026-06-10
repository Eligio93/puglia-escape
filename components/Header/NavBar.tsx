import { forwardRef } from "react";
import SearchBar from "./Searchbar";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Events",
    href: "/blog?category=Events",
  },
  {
    name: "About",
    href: "/about",
  },
];

export type NavBarProps = {
  variant: "desktop" | "mobile";
  openMenu?: boolean;
};

const NavBar = forwardRef<HTMLElement, NavBarProps>(function NavBar(
  { variant, openMenu },
  ref,
) {
  if (variant === "desktop") {
    return (
      <nav ref={ref} className="hidden flex-1 lg:block">
        <ul className="flex gap-5">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                className="border-b-2 border-b-transparent py-1 text-base transition-colors hover:border-b-dark-blue"
                href={route.href}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav
      ref={ref}
      className={`bg-sand absolute top-full right-0 w-full -translate-y-[300px] rounded-b-lg p-3 opacity-0 ${openMenu && "translate-y-0 opacity-100"} flex flex-col gap-5 transition-all duration-1000 ease-in-out`}
    >
      <div>
        <div className="lg:hidden">
          <SearchBar />
        </div>
        <hr className="text-dark-blue" />
      </div>
      <ul className="text-dark-blue flex w-full flex-col gap-3 p-1 text-sm">
        {routes.map((route) => (
          <li key={route.name}>
            <Link href={route.href}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default NavBar;
